const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const text1 = document.querySelector(".showText");
const text2 = document.querySelector(".showText2");
const text3 = document.querySelector(".showText3");


function showText(event){
    const targetId = event.target.id;
    if(targetId==='img1'){
        text1.style.display = 'block';
    }
    if(targetId==='img2'){
        text2.style.display = 'block';
    }
    if(targetId==='img3'){
        text3.style.display = 'block';
    }
}

function hiddenText(event){
    const targetId2 = event.target.id;
    if(targetId2==='img1'){
        text1.style.display = 'none';
    }
    if(targetId2==='img2'){
        text2.style.display = 'none';
    }
    if(targetId2==='img3'){
        text3.style.display = 'none';
    }
}

img1.addEventListener("mouseover", showText);
img1.addEventListener("mouseout", hiddenText);
img2.addEventListener("mouseover", showText);
img2.addEventListener("mouseout", hiddenText);
img3.addEventListener("mouseover", showText);
img3.addEventListener("mouseout", hiddenText);

