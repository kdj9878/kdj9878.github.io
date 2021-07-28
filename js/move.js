const mainBtn = document.querySelector("#sideForm #side1");
const myHabitsBtn = document.querySelector("#sideForm #side2");
const favoritesBtn = document.querySelector("#sideForm #side3");
const body = document.querySelector("body");

const image = [
{image : "backImg.jpg"},
{image : "image2.jpg"},
{image : "image3.jpg"},
{image : "image4.jpg"},
]



function move(event){
    let img = Math.floor(Math.random()*image.length);

    switch(event.target.id){
        case 'side1':
            window.scrollTo({top:0, left:0, behavior:'smooth'});
            body.style.backgroundImage = `url('../img/${image[img].image}')`;
            break;
      
        case 'side2':
            window.scrollTo({top:950, left:0, behavior:'smooth'});
            body.style.backgroundImage = `url('../img/${image[img].image}')`;

            break;
    
        case 'side3':
            window.scrollTo({top:2140, left:0, behavior:'smooth'});
            body.style.backgroundImage = `url('../img/${image[img].image}')`;

            break;
    }  
}



mainBtn.addEventListener("click", move);
myHabitsBtn.addEventListener("click", move);
favoritesBtn.addEventListener("click", move);

