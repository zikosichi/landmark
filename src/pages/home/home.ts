import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private stackItems:any[] = [];	

	private items:any[] = [
		{
			name: 'Long Sleeves Top with Mock Turtleneck',
			orderIndex: 1,
			price: 'AED 35',
			discount: '20% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6022239WHITELIGHT-W-MOCK-TURTL-WIN16B185_01-493.jpg'
		},
		{
			name: 'Long Sleeves Top with Mock Turtleneck',
			orderIndex: 1,
			price: 'AED 20',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6022236BEIGELIGHT-W-MOCK-TURTL-WIN16B185_01-493.jpg'
		},
		{
			name: 'Barbie Graphic Print T-Shirt with Short Sleeves',
			orderIndex: 1,
			price: 'AED 20',
			discount: '20% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/8204639GREENDARK-W16BRPH22-WIN16B100_01-493.jpg'
		},
		{
			name: 'Long Sleeves Top with Mock Turtleneck',
			orderIndex: 1,
			price: 'AED 35',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6022235CREAMLIGHT-W-MOCK-TURTL-WIN16B185_01-493.jpg'
		},
		{
			name: 'Graphic Print T-Shirt with Round Neck and Short Sl...',
			orderIndex: 1,
			price: 'AED 25',
			discount: '20% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6023001PURPLEMEDIUM-GTW616151-WIN16B185_01-493.jpg'
		},
		{
			name: 'Barbie Printed T-Shirt with Short Sleeves',
			orderIndex: 1,
			price: 'AED 20',
			discount: '35% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6.29235E+12-W16BRPH33-WIN16B108_01-493.jpg'
		},
		{
			name: 'Graphic Print T-Shirt with Round Neck and Short Sl...',
			orderIndex: 1,
			price: 'AED 25',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6023000ANTHRAZITEDARK-GTW616151-WIN16B185_01-493.jpg'
		},
		{
			name: 'Graphic Print T-Shirt with Round Neck and Short Sl...',
			orderIndex: 1,
			price: 'AED 25',
			discount: '20% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6023021YELLOWMEDIUM-GTW616165-WIN16B185_01-493.jpg'
		},
		{
			name: 'Hello Kitty Printed T-Shirt with Short Sleeves',
			orderIndex: 1,
			price: 'AED 20',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/9101906PINKMEDIUM-W16LCORE18-WIN16B108_01-493.jpg'
		},
		{
			name: 'Graphic Print T-Shirt with Round Neck and Short Sl...',
			orderIndex: 1,
			price: 'AED 25',
			discount: '10% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6022702GREYMELANGE-GTW616146-WIN16B185_01-493.jpg'
		},
		{
			name: 'Printed T-Shirt with Crew Neck and Short Sleeves',
			orderIndex: 1,
			price: 'AED 25',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6023029WHITELIGHT-GTW616171-WIN16B180_01-493.jpg'
		},
		{
			name: 'Sequined Top in Regular Fit',
			orderIndex: 1,
			price: 'AED 30',
			discount: '25% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/8510129GREYMEDIUM-W0611-WIN16B100_01-493.jpg'
		},
		{
			name: 'Graphic Print T-Shirt with Round Neck and Short Sl...',
			orderIndex: 1,
			price: 'AED 25',
			discount: '20% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6022708BLUEMEDIUM-GTW616149-WIN16B185_01-493.jpg'
		},
		{
			name: 'Printed T-Shirt with Crew Neck and Short Sleeves',
			orderIndex: 1,
			price: 'AED 25',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/6023014WHITELIGHT-GTW616160-WIN16B180_01-493.jpg'
		},
		{
			name: 'Printed T-Shirt with Short Sleeves',
			orderIndex: 1,
			price: 'AED 25',
			discount: '25% Off',
			imageUrl: 'http://07fcfb85ff11d7f5d0fc-f4c51c056b0940e95f0098eed18ef033.r99.cf3.rackcdn.com/8510125BLACKDARK-55701-WIN16B88_01-493.jpg'
		}
	];

	constructor(public navCtrl: NavController) {

	}

	openItem(item){
		this.stackItems.push(item);
	}

}