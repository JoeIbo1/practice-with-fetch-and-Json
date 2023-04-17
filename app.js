"use strict"

const endpoint = "https://first-test001-default-rtdb.firebaseio.com"

window.addEventListener('load', initApp)

function initApp() {
    getPost();
}


getPost();
async function getPost() {
    const response = await fetch(`${endpoint}/posts.json`);
    const data = await response.json();
    return preparePostData(data);
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