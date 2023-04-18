"use strict"

const endpoint = "https://first-test001-default-rtdb.firebaseio.com"

window.addEventListener('load', initApp)

async function initApp() {
    const posts = await getPosts();
    displayPosts(posts);
}


async function getPosts() {
    const response = await fetch(`${endpoint}/posts.json`);
    const data = await response.json();
    const posts = preparePostData(data);
    return posts;
}

function preparePostData(dataObject) {
    const newArray = [];
    for(const key in dataObject){
        const post = dataObject[key];
        post.id = key;
        newArray.push(post)
    }
    return newArray;
}

function displayPosts(listOfPosts) {
    for (const post of listOfPosts) {
        displayPost(post);
    }
}

function displayPost(postObject) {

    const html = /*html*/ `
    <article>
    <h2>${postObject.title}</h2>
    <img src="${postObject.image}"/>
    <h4>INFO: ${postObject.body}</h4>
    
    </article>
    `;

    document.querySelector("#posts").insertAdjacentHTML("beforeend", html);
}