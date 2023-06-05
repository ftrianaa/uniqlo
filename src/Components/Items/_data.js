import Img1 from '../../assets/products/img1.png';
import Img2 from '../../assets/products/img2.png';
import Img3 from '../../assets/products/img3.png';
import Img4 from '../../assets/products/img4.png';
import Img5 from '../../assets/products/img5.png';
import Img6 from '../../assets/products/img6.png';
import Img7 from '../../assets/products/img7.png';

export const products = [
  {
    id: '1',
    name: 'Off shoulder crop top',
    price: 1400,
    currency: 'USD',
    imageUrl: Img1,
    rating: 4,
    ratingCount: 12,
    category: 'wanita',
    size: 'xl-xxl',
    colors: [
      { label: 'black', value: '#000' },
      { label: 'dark grey', value: '#666' },
      { label: 'pink', value: 'pink' },
      { label: 'midnightblue ', value: 'midnightblue' },

      { label: 'mediumslateblue ', value: 'mediumslateblue ' },
    ],
    tags: [
      {
        name: 'Exclusive 💫',
        color: 'purple',
      },
    ],
  },
  {
    id: '2',
    name: 'Pattern top',
    price: 2300,
    currency: 'USD',
    imageUrl: Img2,
    rating: 4,
    ratingCount: 12,
    category: 'wanita',
    size: 's-xxl',
    colors: [
      { label: 'green', value: 'green' },
      { label: 'dark olive green ', value: 'darkolivegreen ' },
      { label: 'dark green', value: 'darkgreen' },
      { label: 'mediumseagreen ', value: 'mediumseagreen' },
    ],
    tags: [
      {
        name: 'In Demand 🔥',
        color: 'red',
      },
    ],
  },
  {
    id: '3',
    name: 'Free body jacket',
    price: 900,
    currency: 'USD',
    imageUrl: Img3,
    rating: 4,
    ratingCount: 12,
    category: 'wanita',
    size: 'm-xxxl',
    colors: [
      { label: 'crimson ', value: 'crimson ' },
      { label: 'maroon', value: 'maroon' },
      { label: 'firebrick ', value: 'firebrick ' },
    ],
    tags: [],
  },
  {
    id: '4',
    name: 'Polka dot dress',
    price: 2000,
    currency: 'USD',
    imageUrl: Img4,
    rating: 4,
    ratingCount: 12,
    category: 'wanita',
    size: 'l-xxl',

    colors: [
      { label: 'magenta ', value: 'magenta' },
      { label: 'medium orchid', value: 'mediumorchid' },
      { label: 'mediumpurple', value: 'mediumpurple' },
    ],
    tags: [],
  },
  {
    id: '5',
    name: 'PATTERN MINI-DRESS',
    price: 48.99,
    currency: 'USD',
    imageUrl: Img5,
    rating: 4,
    ratingCount: 20,
    category: 'wanita',
    size: 'l-xxl',
    colors: [
      { label: 'orange red', value: 'orangered' },
      { label: 'orange', value: 'orange' },
      { label: 'peru ', value: 'peru' },
    ],
    tags: [],
  },
  {
    id: '6',
    name: 'MIDI SKATER DRESS',
    price: 199.99,
    currency: 'USD',
    imageUrl: Img6,
    rating: 4,
    ratingCount: 12,
    category: 'wanita',
    size: 'l-xxl',
    colors: [
      { label: 'powder blue ', value: 'powderblue ' },
      { label: 'royal blue ', value: 'royalblue ' },
      { label: 'skyblue ', value: 'skyblue ' },
    ],
    tags: [
      {
        name: 'Exclusive 💫',
        color: 'purple',
      },
    ],
  },
  {
    id: '7',
    name: 'OFF-SHOULDER TOP',
    price: 2300,
    currency: 'USD',
    imageUrl: Img7,
    rating: 4,
    ratingCount: 9,
    category: 'wanita',
    size: 's-xl',
    colors: [
      { label: 'wheat ', value: 'wheat ' },
      { label: 'tan ', value: 'tan ' },
      { label: 'yellowgreen ', value: 'yellowgreen ' },
      { label: 'midnightblue', value: 'midnightblue' },
    ],
    tags: [
      {
        name: 'In Demand 🔥',
        color: 'red',
      },
    ],
  },
];
