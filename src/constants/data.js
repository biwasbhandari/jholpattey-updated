import images from "./images";
const jholpatteys = [
  {
    title: 'Chatpattey',
    price: 'Rs. 130/-',
    tags: 'Hot | Sour',
  },
  {
    title: 'Chicken Chatpattey',
    price: 'Rs. 220/-',
    tags: 'Hot | Sour | Chicken',
  },
  {
    title: 'Jhol Chatpattey',
    price: 'Rs. 150/-',
    tags: 'Timur | Jhol',
  },
  {
    title: 'Normal Panipuri',
    price: 'Rs. 100/-',
    tags: 'Spicy | Hot',
  },
  {
    title: 'Jholpattey Combo Set',
    price: 'Rs. 450/-',
    tags: 'Chatpattey | Panipuri | Milkshake',
  },
];

const normals = [
  {
    title: 'Timur Chicken (H/F)',
    price: 'Rs. 350/-',
    tags: `Chef's Special Chicken Marinated on Chef's Secret Timur Marination and
    cooked to perfection`,
  },
  {
    title: "Chicken Strip",
    price: 'Rs. 350/-',
    tags: `Fried Chicken strips emulsified in spicy and tangy sauce that hits your taste
    buds with great flavors`,
  },
  {
    title: 'Pork Ribs',
    price: 'Rs. 250/-',
    tags: `Juicy tender pork ribs dredged in homemade sauce with umami flavors and
      chef special touch`,
  },
  {
    title: 'Special Platter',
    price: 'Rs. 799/-',
    tags: `Timur Chicken, Mint, lemonade, chicken Strips
    `,
  },
];


const awards = [
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Recognized for exceptional talent and promising potential in the culinary industry.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Acknowledged for outstanding standards in hospitality, service, and guest experience.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Celebrated for mastery in culinary arts, creativity, and dedication to gastronomic excellence.',
  },
];


// eslint-disable-next-line import/no-anonymous-default-export
export default { jholpatteys, normals, awards };
