import http from "node:http";

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ message: "Hello, world!" }));
});
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});


// function sum(a,b, fun){
//     let c=0
//     setTimeout(() => {
//         c =a+b
//         fun(c)
//     }, 0);
// }
// let a = sum(1,4, function(data){
//     console.log(data)
// })

function getUserID() {
    return new Promise((reslove, reject)=>{
    setTimeout(() => {
        let userID = 10;
            reslove(userID);
        })
    }); 
}
function getPostUser(userID) {
    return new Promise((reslove, reject)=>{
    setTimeout(() => {
        let post = { id: 12, name: 'van thien' };
        reslove(post);
    });
})
}
function getCommentPostUser(post) {
    return new Promise((reslove, reject)=>{
    setTimeout(() => {
        let comment = { id: 13, name: 'van thien' };
        reslove(comment); 
    });
})
}
// getUserID(function(userID){
//     getPostUser(userID, function(post){
//         getCommentPostUser(post, function(coment){
//             console.log(coment)
//         }) 
//     })
// })

let abc = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        getUserID( (data) =>{
            reslove(data);
        });
    }, 0)
})

abc
.then((data)=>{
getPostUser(data, function(post){
    return post;
})
})

.then((post) =>{
    getCommentPostUser(post, function(comment){
        console.log(comment);
    })

}).catch((data)=>{
    console.log(data); 

}).finally(()=>{
    console.log("Hello finally");
})



async function xyz(){
    let uID = await getUserID();
    let post = await getPostUser(uID);
    let comment = await getCommentPostUser(post);
    return comment;

}
xyz().then((data)=>{
    console.log(data);
})


