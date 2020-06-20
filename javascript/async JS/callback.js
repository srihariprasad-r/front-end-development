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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback(); //this function will be executed after new item is pushed to the array
    }, 2000);
};

//getPosts();  //this is synchronous call

createPost({title:'post three', body:'This is post three'}, getPosts);