import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  dummyData = [
    {
      img: 'assets/imgs/image1.jpg',
      name: 'Stranger Things',
    },
    {
      img: 'assets/imgs/image2.jpg',
      name: 'Lucifer',
    },
    {
      img: 'assets/imgs/image3.jpg',
      name: 'Dangal',
    },
    {
      img: 'assets/imgs/image4.jpg',
      name: 'Kabir Singh',
    },
    {
      img: 'assets/imgs/image5.jpg',
      name: 'Phanton',
    },
    {
      img: 'assets/imgs/image6.jpg',
      name: 'Saaho',
    },
    {
      img: 'assets/imgs/image7.jpeg',
      name: 'Bard of Blood',
    },
    {
      img: 'assets/imgs/image8.jpeg',
      name: 'Panipat',
    },
    {
      img: 'assets/imgs/image9.jpeg',
      name: 'Raees',
    },
    {
      img: 'assets/imgs/image10.jpeg',
      name: 'Bahubali',
    },
    {
      img: 'assets/imgs/image11.jpeg',
      name: 'Another Life',
    },
    {
      img: 'assets/imgs/image12.jpeg',
      name: 'THE 100',
    },
    {
      img: 'assets/imgs/image13.jpeg',
      name: 'The Vampire Diaries',
    },
    {
      img: 'assets/imgs/image14.jpeg',
      name: 'Titans',
    },
    {
      img: 'assets/imgs/image15.jpeg',
      name: 'Lock & Key',
    },
    {
      img: 'assets/imgs/image16.jpeg',
      name: 'The Witcher',
    },
  ];

  comingSoon = [
    {
      poster: 'assets/imgs/poster1.jpg',
      poster_text: 'assets/imgs/p_text1.png',
      name: 'Fauda'
    },
    {
      poster: 'assets/imgs/poster2.jpg',
      poster_text: 'assets/imgs/p_text2.png',
      name: 'The Punch Man'
    },
    {
      poster: 'assets/imgs/poster3.jpg',
      poster_text: 'assets/imgs/p_text3.png',
      name: 'Pacific Rim'
    }
  ];


  slider = [

    {
      img: 'assets/imgs/slide1.jpg',
      color: '#db2e3a',
      text: 'assets/imgs/text1.jpg',
      id:"1",
      link: 'https://players.brightcove.net/1752604059001/VJCJXL3Ye_default/index.html?videoId=4093643993001'
    },
    {
      img: 'assets/imgs/slide2.jpg',
      color: '#1181d1',
      text: 'assets/imgs/text2.jpg',
      id:"2",
      link: 'https://players.brightcove.net/1752604059001/VJCJXL3Ye_default/index.html?videoId=4093643993001'
    },
    {
      img: 'assets/imgs/slide3.jpg',
      color: '#14a84f',
      id:"3",
      text: 'assets/imgs/text3.jpg',
      link: '???'
    },
    {
      img: 'assets/imgs/slide4.jpg',
      color: '#b9d624',
      id:"4",
      text: 'assets/imgs/text4.jpg',
      link: '???'
    },
    {
      img: 'assets/imgs/slide5.jpg',
      color: '#287d4a',
      id:"5",
      text: 'assets/imgs/text5.jpg',
      link: '???'
    },
  ];
  constructor() { }
}
