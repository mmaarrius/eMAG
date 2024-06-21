export function usersReviewNr(item){
  let counts = 0;

  item.rating.map(rating => {
    counts += rating.count;
  });

  return counts;
}

export function avgStar(item){
  let total_stars = 0;
  let counts = 0;

  item.rating.map(rating => {
    total_stars += rating.star * rating.count;
    counts += rating.count;
  });

  return (total_stars / counts).toFixed(1);
}

export function findProduct(item_id){
  let matchingProduct;

  products.map(product => {
    if(product.id === item_id){
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export function calcRate(price){
  return (price / 24).toFixed(0);
}

export const products = [{
  id: '1',
  category: 'IT,Mobile&Gaming',
  title : 'Laptop Acer Aspire 3 A315-44P cu procesor AMD Ryzen™ 7 5700U pana la 4.30 GHz, 15.6", Full HD, IPS, 16GB DDR4, 512GB SSD, AMD Radeon™ Graphics, No OS, Silver',
  price: 2099,
  image: 'laptop_aspire.jpg',
  rating:[
    {
      star: 5,
      count:10
    },
    {
      star:4,
      count:15
    },
    {
      star:3,
      count: 2
    },
    {
      star: 2,
      count: 1
    },
    {
      star: 1,
      count: 3
    }
  ]
  },
  {
    id: '2',
    category: 'IT,Mobile&Gaming',
    title: 'Laptop Apple MacBook Air 13-inch, True Tone, procesor Apple M1 , 8 nuclee CPU si 7 nuclee GPU, 8GB, 256GB, Space Grey, INT KB',
    price: 4399,
    image:'macbook.jpg',
    rating:[
      {
        star: 5,
        count:15
      },
      {
        star: 4,
        count:2
      },
      {
        star: 3,
        count: 2
      },
      {
        star: 2,
        count: 0
      },
      {
        star: 1,
        count: 3
      }
    ]
  },
  {
    id: '3',
    category: 'Haine&Accesorii',
    title: 'Nike, Pantofi de piele ecologica pentru antrenament Defy All Day, Rosu, Negru, Alb, 9',
    price: 399,
    image:'nike.jpg',
    rating:[
      {
        star: 5,
        count:46
      },
      {
        star: 4,
        count:13
      },
      {
        star: 3,
        count: 0
      },
      {
        star: 2,
        count: 0
      },
      {
        star: 1,
        count: 7
      }]
  },
  {
    id: '4',
    category: 'Copii&Jucarii',
    title: 'Chitara Acustica Negru 4/4, 95 x 35 cm, pentru Incepatori si Adulti, Recomandata peste 10 Ani, 6 Corzi Metalice',
    price: 219,
    image:'chitara.webp',
    rating:[
      {
        star: 5,
        count:4
      },
      {
        star: 4,
        count:2
      },
      {
        star: 3,
        count: 1
      },
      {
        star: 2,
        count: 0
      },
      {
        star: 1,
        count: 1
      }]
  },
  {
    id: '5',
    category: 'Copii&Jucarii',
    title: 'Piscina gonflabila Intex - Swim Center™, Family Lounge, 229 x 229 x 66 cm',
    price: 186,
    image:'piscina.webp',
    rating:[
      {
        star: 5,
        count:7
      },
      {
        star: 4,
        count:1
      },
      {
        star: 3,
        count: 1
      },
      {
        star: 2,
        count: 5
      },
      {
        star: 1,
        count: 1
      }]
  },
  {
    id: '6',
    category: 'Copii&Jucarii',
    title: 'Pop Tarts Frosted Blueberry, 96 g',
    price: 186,
    image:'dulce.jpg',
    rating:[
      {
        star: 5,
        count:2
      },
      {
        star: 4,
        count:6
      },
      {
        star: 3,
        count: 10
      },
      {
        star: 2,
        count: 9
      },
      {
        star: 1,
        count: 7
      }]
  },
  {
    id: '7',
    category: 'IT,Mobile&Gaming',
    title: 'Joc Grand Theft Auto V Premium Edition pentru PlayStation 4',
    price: 87,
    image:'GTA.webp',
    rating:[
      {
        star: 5,
        count:290
      },
      {
        star: 4,
        count:120
      },
      {
        star: 3,
        count: 29
      },
      {
        star: 2,
        count: 9
      },
      {
        star: 1,
        count: 7
      }]
  },
  {
    id: '8',
    category: 'IT,Mobile&Gaming',
    title: 'Telefon mobil Samsung Galaxy S21 Plus, G996U, procesor Snapdragon, Dual SIM, 128GB, 8GB RAM, 5G, Violet',
    price: 2999,
    image:'s21plus.jpg',
    rating:[
      {
        star: 5,
        count:500
      },
      {
        star: 4,
        count:120
      },
      {
        star: 3,
        count: 13
      },
      {
        star: 2,
        count: 2
      },
      {
        star: 1,
        count: 0
      }]
  }
]