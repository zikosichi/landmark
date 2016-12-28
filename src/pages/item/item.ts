import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SortingOrderService } from '../../services/sorting-order';

import * as $ from "jquery";


@Component({
    selector: 'item',
    templateUrl: 'item.html'
})
export class ItemPage {

    @ViewChild('itemDetails') itemEl: ElementRef;
    @ViewChild('itemDetailsImageWrapper') imageWrapperEl: ElementRef;

    @Input() itemData: any;

    private scrollTop: any = 0;
    private r: any = 0;
    private minimized: any = false;
    private screenHieght: any = 0;
    private imageWrapperH: any = 300;
    private itemDetails: any = null;
    private itemDetailsControls: any = null;
    private itemDetailsContent: any = null;
    private imageWrapper: any = null;
    private stack: any = null;
    private tl:any = null;
    private minimizing:boolean = false;

    constructor(public navCtrl: NavController, private sortingOrderMax: SortingOrderService) { }

    ngAfterViewInit() {


        // Setting up variables
        var self = this;
        this.screenHieght = window.innerHeight;
        this.itemDetails = $(this.itemEl.nativeElement);
        this.imageWrapper = $(this.imageWrapperEl.nativeElement);
        this.itemDetailsContent = this.itemDetails.find(".item-details__content");
        this.itemDetailsControls = this.imageWrapper.find(".item-details__controls");
        this.stack = $(".stack");


        // Initial Animation
        TweenMax.to(self.imageWrapper, 0.6, {right:0, ease: Power4.easeOut});
        TweenMax.to(self.itemDetails, 0.6, {left:0, ease: Power4.easeOut});


        // Update image height on scroll
        this.itemDetails.scroll(function (e) {
            self.scrollTop = self.itemDetails.scrollTop() < 300 ? self.itemDetails.scrollTop() : 300;
            self.r = self.scrollTop / 300;

            self.imageWrapperH = 300 - self.r * 300 > 150 ? (300 - self.r * 300) : 150;
            self.imageWrapper.css("height", self.imageWrapperH + "px");
        });


        // Drag from cover image
        var bottomPos = this.screenHieght - 100;

        self.tl = new TimelineMax();
        self.tl.insert(TweenLite.to(self.itemDetailsContent, 0.5, { opacity: 0, ease: Power0.easeNone }));
        self.tl.insert(TweenLite.to(self.imageWrapper, 0.5, { height: "50px", width: "70px", top: self.screenHieght - 65, right: "15px", marginLeft: 15, ease: Power0.easeNone }));
        self.tl.insert(TweenLite.to(self.itemDetails, 0.5, { top: "100%", ease: Power0.easeNone }));
        self.tl.insert(TweenLite.to(self.stack, 0.5, { paddingRight: 100, ease: Power0.easeNone }));
        self.tl.insert(TweenLite.to(self.itemDetailsControls, 0.5, { opacity: 0, ease: Power4.easeOut }));
        self.tl.insert(TweenLite.to(self.itemDetailsControls, 0.5, { top: "300%", ease: Power4.easeIn }));

        self.tl.pause();


        var dragStartPos = 0;
        var dragDelta = 0;
        var travelDistance = 0;
        var dragTravelRatio = 0;


        this.imageWrapper.bind('touchstart mousedown', function (e) {
            e.preventDefault();
            
            travelDistance = self.screenHieght - dragStartPos - 30;
            dragStartPos = e.originalEvent.touches[0].pageY;
            self.imageWrapper.css("position", "fixed");
            self.tl.pause();

            // controls detection
            if (e.originalEvent.touches[0].pageY < 50 && e.originalEvent.touches[0].pageX < 50) {
                self.closeItem();
            }

            if (e.originalEvent.touches[0].pageY < 50 && e.originalEvent.touches[0].pageX > window.innerWidth - 50) {
                self.minimize();
                self.minimizing = true;
            }

        });

        this.imageWrapper.bind('touchmove', function (e) {

            if (self.minimizing) {
                return false;
            }

            if (!self.minimized) {
                dragTravelRatio = (e.originalEvent.touches[0].pageY - dragStartPos) / (self.screenHieght - dragStartPos);
            } else {
                dragTravelRatio = e.originalEvent.touches[0].pageY / dragStartPos;
            }

            dragTravelRatio = dragTravelRatio < 0 ? 0 : dragTravelRatio;
            dragTravelRatio = dragTravelRatio > 1 ? 1 : dragTravelRatio;
            self.tl.progress(dragTravelRatio);

        });

        this.imageWrapper.bind('touchend mouseup', function (e) {
            e.preventDefault();

            if (self.minimizing) {
                return false;
            }

            if (!self.minimized) {
                if (dragTravelRatio > 0.3) {

                    setTimeout(function() {
                        self.imageWrapper.css("position", "static");
                        self.stack.css("padding-right", 15);
                        self.itemData.orderIndex = self.sortingOrderMax.inc();
                    }, 300);

                    self.tl.tweenTo(1);
                    self.minimized = true;
                } else {
                    self.tl.tweenTo(0, { ease: Power1.easeOut });
                    self.minimized = false;
                }
            } else {
                if (dragTravelRatio < 0.8) {
                    self.tl.tweenTo(0, { ease: Power1.easeOut });
                    self.minimized = false;
                } else {

                    setTimeout(function() {
                        self.imageWrapper.css("position", "static");
                        self.stack.css("padding-right", 15);
                        self.itemData.orderIndex = self.sortingOrderMax.inc();
                    }, 300);

                    self.tl.tweenTo(1, { ease: Power1.easeOut });
                    self.minimized = true;
                }
            }

        });

    }

    closeItem(){
        var self = this;
        // Initial Animation
        TweenMax.to(self.imageWrapper, 0.6, {right:"-100%", ease: Power4.easeOut});
        TweenMax.to(self.itemDetails, 0.6, {left:"100%", ease: Power4.easeOut});
    }

    minimize(){
        var self = this;
        self.tl.tweenTo(1, { ease: Power1.easeOut, onComplete: function(){
            self.imageWrapper.css("position", "static");
            self.stack.css("padding-right", 15);
            self.itemData.orderIndex = self.sortingOrderMax.inc();
            self.minimizing = false;
        } });
        self.minimized = true;
    }

}