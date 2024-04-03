export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Наушники Newest M10 черный',
    price: 1193,
    description: 'тип: гарнитура\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: закрытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Нет\n'+
    'микрофон: Да',
    rating: 4.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hbf/h98/63952956522526.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/newest-m10-chernyi-102272027/?c=750000000"
  },
  {
    id: 2,
    name: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    price: 113462,
    description: 'тип: наушники\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: закрытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Да\n'+
    'микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000"
  },
  {
    id: 3,
    name: 'Умная колонка Яндекс Станция Лайт фиолетовый',
    price: 27064,
    description: 'суммарная мощность: 5.0 Вт\n'+
    'управление умным домом: Да\n'+
    'голосовой помощник: Алиса\n'+
    'поддерживаемый язык: русский\n'+
    'поддержка Wi-Fi: Да\n'+
    'поддержка Bluetooth: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/jandeks-stantsija-lait-fioletovyi-101870266/?c=750000000"
  },
  {
    id: 4,
    name: 'Наушники Realme Buds T100 черный',
    price: 9287,
    description: 'тип: гарнитура\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: закрытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Нет\n'+
    'микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h70/h1a/65147416477726.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000"
  },
  {
    id: 5,
    name: 'Портативная колонка BT SPEAKER ZQS-4239 черный',
    price: 4698,
    description: 'тип: моно\n'+
    'тип питания: от аккумулятора\n'+
    'время работы: 8.0 ч\n'+
    'количество полос AC: двухполосные\n'+
    'интерфейсы: Bluetooth, ,USB Type A, ,microUSB\n'+
    'цвет: черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/bt-speaker-zqs-4239-chernyi-110785723/?c=750000000"
  },
  {
    id: 6,
    name: 'Наушники Apple AirPods 2nd generation белый',
    price: 54000,
    description: 'тип: гарнитура\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: открытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Нет\n'+
    'микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000"
  },
  {
    id: 7,
    name: 'Наушники Apple AirPods 3 белый',
    price: 85523,
    description: 'тип: гарнитура\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: открытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Нет\n'+
    'микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hda/hc7/64341967994910.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000"
  },
  {
    id: 8,
    name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
    price: 85499,
    description: 'тип: гарнитура\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: открытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Нет\n'+
    'микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000"
  },
  {
    id: 9,
    name: 'Наушники Apple AirPods with Charging Case белый',
    price: 52423,
    description: 'тип: гарнитура\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: открытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Нет\n'+
    'микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000"
  },
  {
    id: 10,
    name: 'Наушники TWS F9-5 черные',
    price: 1185,
    description: 'тип: гарнитура\n'+
    'вид: внутриканальные\n'+
    'подключение: беспроводное\n'+
    'тип акустического оформления: полуоткрытые\n'+
    'тип крепления: без крепления\n'+
    'система активного шумоподавления: Нет\n'+
    'микрофон: Да',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hf8/hcc/64254215946270.jpg?format=gallery-medium",
    url: "https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/