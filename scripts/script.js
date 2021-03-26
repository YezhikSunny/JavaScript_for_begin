"use strict";
// 1 задание
console.log(0 + ' -  это ноль');
for(let i = 1;i<=10;i++){
    if(i%2 == 0) {
        console.log(i + ' - чётное число');
    } else {
        console.log(i + ' - нечётное число');
    }
}
// 2 задание
    let post = {
        author: "John",
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2
            }
            },
            {
                userId: 5, 
                userName: "Jane",
                text: "lorem ipsum 2", 
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
// 3 задание
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
for(let i = 0;i< products.length;i++) {
    products[i].price = (products[i].price*85)/100;
    console.log(products[i].price);
}
// 4 задание
const productss = [
    {
    id: 3,
    price: 127,
    photos: [
    "1.jpg",
    "2.jpg",
    ]
    },
    {
    id: 5,
    price: 499,
    photos: []
    },
    {
    id: 10,
    price: 26,
    photos: [
    "3.jpg"
    ]
    },
    {
    id: 8, price: 78,
    },
];

// 6 задание
let str = '';
for(let i = 0;i<20;i++){
    str = str + "x";
    console.log(str);
}
   