const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const text1 = document.querySelector(".showText");
const text2 = document.querySelector(".showText2");
const text3 = document.querySelector(".showText3");


const gif1 = document.querySelector(".gif1");
const gif2 = document.querySelector(".gif2");

const p_text = document.querySelector(".p_text");
const p_text2 = document.querySelector(".p_text2");


function showText(event){
    const targetId = event.target.id;
    console.log(targetId);
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


function showText2(event){
    const targetId3 = event.target.id;
    console.log(targetId3)
    if(targetId3==='gif1'){
        p_text.style.display = 'block';
    }
    if(targetId3==='gif2'){
        p_text2.style.display = 'block';
    }

}

function hiddenText2(event){
    const targetId4 = event.target.id;
    if(targetId4==='gif1'){
        p_text.style.display = 'none';
    }
    if(targetId4==='gif2'){
        p_text2.style.display = 'none';
    }

}

img1.addEventListener("mouseover", showText);
img1.addEventListener("mouseout", hiddenText);
img2.addEventListener("mouseover", showText);
img2.addEventListener("mouseout", hiddenText);
img3.addEventListener("mouseover", showText);
img3.addEventListener("mouseout", hiddenText);

gif1.addEventListener("mouseover", showText2);
gif1.addEventListener("mouseout", hiddenText2);
gif2.addEventListener("mouseover", showText2);
gif2.addEventListener("mouseout", hiddenText2);