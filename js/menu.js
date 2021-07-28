

const sideForm = document.getElementById("sideForm");

$(document).on('click', '#menu-header-btn', function(){

    if($('#menu-header-btn').text() ==='Menu'){
        sideForm.style.visibility = "visible";
        $('#sideForm').slideDown(400);
        $('#menu-header-btn').text('close');
    }

    else if($('#menu-header-btn').text() ==='close'){
        $('#menu-header-btn').text('Menu');
        $('#sideForm').slideUp(400);
    }

});









































// const menuBtn = document.querySelector("#side-menu-header #menu-header-btn");
// const side1 = document.getElementById("side1");
// const side2 = document.getElementById("side2");
// const side3 = document.getElementById("side3");


// function showMenuBar(){
//     side1.style.display = "flex";
//     side2.style.display = "flex";
//     side3.style.display = "flex";

// }

// function hideMenu(){


//     side1.style.display = "none";
//     side2.style.display = "none";
//     side3.style.display = "none";

// }


// function showMenu(){
//     const menu_text = menuBtn.innerText;

//      if(menu_text==="close"){
//      menuBtn.innerText = "Menu";
//      hideMenu();
//      }
//      else if(menu_text==="Menu"){
//     menuBtn.innerText = "close";
//     showMenuBar();
//      }
// }



// menuBtn.addEventListener("click", showMenu)