const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.querySelector(".container")


function post () {
    for (let i = 0; i < posts.length; i++ ){

         container.innerHTML += `
            <div class="user">
                                <img class="avatar" src="${posts[i].avatar}" alt="avatar photo of the user"/>
                            <div class="user-details">
                                <h1 class="name">${posts[i].name}</h1>
                                <h2 class="location">${posts[i].location}</h2>
                            </div>    
                        </div>
                        
                        <div class="post">
                            <img class="img-post" src="${posts[i].post}" alt="image of vanGogh">
                        </div>
                        
                        <div class="icons">
                            <img class="icon" id="icon-heart" src="images/icon-heart.png">
                            <img class="icon" src="images/icon-comment.png">
                            <img class="icon" src="images/icon-dm.png">
                        </div>
                        
                        <div class="likes">${posts[i].likes} likes</div>
                        <div class="comments">
                            <p class="comment"><span class="user-name">${posts[i].username}</span> ${posts[i].comment}</p>
                        </div>
                        <div class="bottom-line"></div>
                    ` 
            }
    }

post()

const heart = document.querySelectorAll("#icon-heart")
const likes = document.querySelectorAll(".likes")


for (let i = 0; i <heart.length; i++ ){
    
    heart[i].addEventListener("click", function (){
       
    likes[i].innerText = posts[i].likes++ + " likes"
    })

}
