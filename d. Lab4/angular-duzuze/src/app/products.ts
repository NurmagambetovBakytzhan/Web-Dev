export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  rating: number;

  img: string;

  url: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone X',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: 2,
    url: "https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h01/46392727142430/apple-iphone-13-mini-256gb-cernyj-102298504-1-Container.jpg'
  },
  {
    id: 2,
    name: 'iPhone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: 4,
    url: "https://kaspi.kz/shop/p/apple-iphone-13-mini-256gb-chernyi-102298504/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hc0/33236883800094/apple-iphone-xr-64gb-slim-box-cernyj-100691239-1-Container.jpg'
  },
  {
    id: 3,
    name: 'Nokia 3310',
    price: 299,
    description: 'Very strong phone',
    rating: 5,
    url: "https://kaspi.kz/shop/p/nokia-3310-sinii-8800447/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/hc9/32173624754206/nokia-3310-sinij-8800447-1.jpg'
  },
  {
    id: 4,
    name: 'Samsung TV UE65AU',
    price: 1000,
    description: 'Colorful Screen',
    rating: 5,
    url: "https://kaspi.kz/shop/p/samsung-ue32t4500au-81-sm-chernyi-100257734/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/ha9/32790235316254/samsung-ue32t4500au-chernyi-100257734-1.jpg'
  },
  {
    id: 5,
    name: 'ARG ZY',
    price: 5,
    description: 'Fast Boiling',
    rating: 3,
    url: "https://kaspi.kz/shop/p/arg-zy-8001w-serebristyi-101378035/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/hf8/49988638244894/arg-zy-8001w-serebristyj-101378035-1-Container.jpg'
  },
  {
    id: 6,
    name: 'Thermomix TM6',
    price: 2000,
    description: 'Delicious recepies',
    rating: 3,
    url: "https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/ha5/33399277027358/thermomix-tm6-belyj-101073636-1-Container.jpg'
  },
  {
    id: 7,
    name: 'Centek CT-1209',
    price: 5,
    description: 'Great Juices',
    rating: 3,
    url: "https://kaspi.kz/shop/p/centek-ct-1209-serebristyi-100303380/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h79/32621809172510/centek-ct-1209-serebristyi-100303380-1.jpg'
  },
  {
    id: 8,
    name: 'Dauscher DMW-2032',
    price: 5,
    description: 'Fast Heating!',
    rating: 3,
    url: "https://kaspi.kz/shop/p/dauscher-dmw-2032w-belyi-2900991/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/hfd/46529326022686/dauscher-dmw-2032w-belyi-2900991-1.jpg'
  },
  {
    id: 9,
    name: 'Online AL Kronstein',
    price: 5,
    description: 'Strong connection!',
    rating: 3,
    url: "https://kaspi.kz/shop/p/onlineal-kronshtein-600-103511216/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/hb1/48406729981982/onlineal-kronstejn-600-103511216-1.jpg'
  },
  {
    id: 10,
    name: 'Xiaomi Circle Joy',
    price: 5,
    description: 'Good Mixing',
    rating: 3,
    url: "https://kaspi.kz/shop/p/xiaomi-circle-joy-cj-emf01-chernyi-106612895/?c=750000000#!/item",
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h09/62763589468190/xiaomi-circle-joy-cj-emf01-cernyj-106612895-1.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/