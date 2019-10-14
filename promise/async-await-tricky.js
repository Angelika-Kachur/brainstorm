//function
function loadPost(id) {
    fetch(`/post.json?id=${id}`)
        .then((post) => setPost(post));

        fetch(`/comments.json&post_id=${id}`)
            .then((comments) => setComment(comments));
}
//requests post and comments will send parallel

//function with async await with mistake
async function loadPost(id) {
   const post = await fetch(`/post.json?id=${id}`);
   setPost(post);

   const comments = await fetch(`/comments.json&post_id=${id}`);
   setComments(comments);
}
//until request post won't be done, next function code will be wait


//function with async await
async function loadPost(id) {
    const post = fetch(`/post.json?id=${id}`);
    const comments = fetch(`/comments.json&post_id=${id}`);

    setPost(await post);
    setComments(await comments);
}
//so better at first send the requests and after it wait for the results with the await 