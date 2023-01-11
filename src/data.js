import img1 from '../src/images/tour-1.jpeg';
import img2 from '../src/images/tour-2.jpeg';
import img3 from '../src/images/tour-3.jpeg';
import img4 from '../src/images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    icon: 'fab fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    title: 'Tibet Adventure',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu',
    date: '12.12.2022',
    length: '7 day',
    price: '$1000',
    icon: 'fas fa-map',
    country: 'random',
  },
  {
    id: 2,
    img: img2,
    title: 'random',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu',
    date: '12.11.2022',
    length: '7 day',
    price: '$2000',
    icon: 'fas fa-map',
    country: 'random2',
  },
  {
    id: 3,
    img: img3,
    title: 'moon',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu',
    date: '12.13.2022',
    length: '7 day',
    price: '$3000',
    icon: 'fas fa-map',
    country: 'random3',
  },
  {
    id: 4,
    img: img4,
    title: 'adventure',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu',
    date: '12.14.2022',
    length: '17 day',
    price: '$4000',
    icon: 'fas fa-map',
    country: 'random',
  },
];

export const date = new Date();
