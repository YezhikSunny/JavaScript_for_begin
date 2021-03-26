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
