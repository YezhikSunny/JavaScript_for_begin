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
// 5 задание
function num5() {
    console.log(0);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
function num9() {
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
}
for(num5();num9();){

}
// 6 задание
let str = '';
for(let i = 0;i<20;i++){
    str = str + "x";
    console.log(str);
}
   