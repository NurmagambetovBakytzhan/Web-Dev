import {Categories, Category} from "./categories";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  category: Category;

  rating: number;

  img: string;

  url: string;

  likes: number;


}

export const products  : Product[] = [
  {
    id: 1,
    name: 'iPhone X',
    price: 799,
    description: 'A large phone with one of the best screens',
    category: Categories[1],
    rating: 2,
    likes: 0,
    url: "https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h01/46392727142430/apple-iphone-13-mini-256gb-cernyj-102298504-1-Container.jpg'
  },
  {
    id: 2,
    name: 'iPhone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    category: Categories[1],
    rating: 4,
    likes: 0,
    url: "https://kaspi.kz/shop/p/apple-iphone-13-mini-256gb-chernyi-102298504/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hc0/33236883800094/apple-iphone-xr-64gb-slim-box-cernyj-100691239-1-Container.jpg'
  },
  {
    id: 3,
    name: 'Nokia 3310',
    price: 299,
    description: 'Very strong phone',
    category: Categories[1],
    rating: 5,
    likes: 0,
    url: "https://kaspi.kz/shop/p/nokia-3310-sinii-8800447/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hc9/32173624754206/nokia-3310-sinij-8800447-1.jpg'
  },
  {
    id: 4,
    name: 'Samsung TV UE65AU',
    price: 1000,
    description: 'Colorful Screen',
    category: Categories[2],
    rating: 5,
    likes: 0,
    url: "https://kaspi.kz/shop/p/samsung-ue32t4500au-81-sm-chernyi-100257734/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/ha9/32790235316254/samsung-ue32t4500au-chernyi-100257734-1.jpg'
  },
  {
    id: 5,
    name: 'ARG ZY',
    price: 5,
    description: 'Fast Boiling',
    category: Categories[0],
    rating: 3,
    likes: 0,
    url: "https://kaspi.kz/shop/p/arg-zy-8001w-serebristyi-101378035/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/hf8/49988638244894/arg-zy-8001w-serebristyj-101378035-1-Container.jpg'
  },
  {
    id: 6,
    name: 'Thermomix TM6',
    price: 2000,
    description: 'Delicious recepies',
    category: Categories[0],
    rating: 3,
    likes: 0,
    url: "https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/ha5/33399277027358/thermomix-tm6-belyj-101073636-1-Container.jpg'
  },
  {
    id: 7,
    name: 'Centek CT-1209',
    price: 5,
    description: 'Great Juices',
    category: Categories[0],
    rating: 3,
    likes: 0,
    url: "https://kaspi.kz/shop/p/centek-ct-1209-serebristyi-100303380/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h79/32621809172510/centek-ct-1209-serebristyi-100303380-1.jpg'
  },
  {
    id: 8,
    name: 'Dauscher DMW-2032',
    price: 5,
    description: 'Fast Heating!',
    category: Categories[0],
    rating: 3,
    likes: 0,
    url: "https://kaspi.kz/shop/p/dauscher-dmw-2032w-belyi-2900991/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/hfd/46529326022686/dauscher-dmw-2032w-belyi-2900991-1.jpg'
  },
  {
    id: 9,
    name: 'Online AL Kronstein',
    price: 5,
    description: 'Strong connection!',
    category: Categories[2],
    rating: 3,
    likes: 0,
    url: "https://kaspi.kz/shop/p/onlineal-kronshtein-600-103511216/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/hb1/48406729981982/onlineal-kronstejn-600-103511216-1.jpg'
  },
  {
    id: 10,
    name: 'Xiaomi Circle Joy',
    price: 5,
    description: 'Good Mixing',
    category: Categories[0],
    rating: 3,
    likes: 0,
    url: "https://kaspi.kz/shop/p/xiaomi-circle-joy-cj-emf01-chernyi-106612895/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h09/62763589468190/xiaomi-circle-joy-cj-emf01-cernyj-106612895-1.jpg'
  },
  {
    id: 11,
    name: 'Samsung Galaxy A53 5G',
    price: 400,
    description: 'Korean Phone',
    category: Categories[1],
    rating: 5,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/he7/49613532528670/smartfon-samsung-galaxy-a53-5g-128gb-sm-a536ezkdskz-black-104253225-1.jpg'
  },
  {
    id: 12,
    name: 'Poco X4 Pro',
    price: 600,
    description: 'Chinese phone',
    category: Categories[1],
    rating: 4,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/poco-x4-pro-8-gb-256-gb-chernyi-104227418/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h47/49566152032286/poco-x4-pro-8-256gb-cernyj-104227418-1.jpg'
  },
  {
    id: 13,
    name: 'Yasin LED-32E7000',
    price: 5000,
    description: 'Big screen',
    category: Categories[2],
    rating: 4,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/yasin-led-32e7000-81-sm-chernyi-103411518/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/ha0/48926247878686/yasin-led-32e7000-cernyj-103411518-1.jpg'
  },
  {
    id: 14,
    name: 'Xiaomi TV P1',
    price: 6000,
    description: 'Chinese Screen',
    category: Categories[2],
    rating: 4,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg'
  },
  {
    id: 15,
    name: 'LG 43LM5772PLA',
    price: 3000,
    description: 'Liquid screen',
    category: Categories[2],
    rating: 5,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg'
  },
  {
    id: 16,
    name: 'The Ordinary Niacinamide',
    price: 60,
    description: 'Skin Care',
    category: Categories[3],
    rating: 1,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h05/33287281410078/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-1.jpg'
  },
  {
    id: 17,
    name: 'Farmstay All-In-One Collagen',
    price: 10,
    description: 'Chinese Creme',
    category: Categories[3],
    rating: 4,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/farmstay-all-in-one-collagen-and-hyaluronic-acid-ampoule-syvorotka-250-ml-100028087/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h24/49069796392990/farmstay-all-in-one-collagen-hyaluronic-acid-ampoule-250-ml-100028087-1-Container.jpg'
  },
  {
    id: 18,
    name: "A'pieu Madecassoside",
    price: 600,
    description: 'Cool Cream',
    category: Categories[3],
    rating: 4,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/a-pieu-madecassoside-krem-50-ml-100396850/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h92/32556827934750/a-pieu-madecassoside-cream-50-ml-100396850-1-Container.jpg'
  },
  {
    id: 19,
    name: 'Dr.Ceuracle Pro Balance Biotics Moisturizer',
    price: 70,
    description: 'Great creme',
    category: Categories[3],
    rating: 4,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h6d/33032604221470/dr-ceuracle-pro-balance-biotics-moisturizer-100-ml-100675870-1-Container.jpg'
  },
  {
    id: 20,
    name: 'Dr.Ceuracle крем Cica Regen Vegan Sun',
    price: 600,
    description: 'Cool one',
    category: Categories[3],
    rating: 4,
    likes: 0,
    url: 'https://kaspi.kz/shop/p/dr-ceuracle-krem-cica-regen-vegan-sun-spf50-pa-dlja-litsa-50-ml-101810014/?c=750000000#!/item',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbd/hb9/49917530046494/dr-ceuracle-cica-regen-vegan-krem-50-ml-101810014-1.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/