const posts = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
      let output = '';  
      posts.forEach((post) => {
          output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;   
    }, 1000)
};

function createPost(post) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.push(post);
        const err = false;
        if(!err){
            resolve();
        } else {
            reject('Error!');
        }
    }, 2000)
  })
};

//createPost({title:'post three', body:'This is post three'}).then(getPosts).catch(err=> console.log(`Error caught! ${err}`));

//Async await
async function init() {
    await createPost({title:'post three', body:'This is post three'});
    getPosts();
}

init();


//Promise.all
const promise1 = Promise.resolve('Hello!');
const promise2 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 2000, 'Bye!');
});

Promise.all([promise1,promise2]).then(values => console.log(values));   //["Hello!", "Bye!"]