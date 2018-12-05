// DOM items

const menuBtn = document.querySelector('.menu-btn');
const navLink=  document.querySelector('.nav-item');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems= document.querySelectorAll('.nav-item')
const sectionAbout= document.querySelector('.aboutMe')
const sectionWork= document.querySelector('.work')
const sectionContact= document.querySelector('.contact')


// initial stage of menu
let showMenu= false;

// show all sections
let showAbout= showContact= showWork= false;

// Close section


function showDiv(value) {
    // navLink.classList.add('current-page')

        if(value=='about' && !showAbout ){
            sectionAbout.classList.add('show-section');
            showAbout= true;
            showContact= showWork= false;
        }
        else {
            sectionAbout.classList.remove('show-section');
            showAbout= false;

        }
        if(value== 'work' && !showWork){
            sectionWork.classList.add('show-section')
            showWork= true;
            showContact= showAbout= false;

        }
        else {
            sectionWork.classList.remove('show-section')
            showWork= false;
        }
        
        if(value== 'contact' && !showContact){
            sectionContact.classList.add('show-section')
            showContact= true;
            showWork= showAbout= false;

        }  
        else {
            sectionContact.classList.remove('show-section')  
            showContact= false;

        }  
    
}


function closeAllSec() {
    sectionContact.classList.remove('show-section');
    sectionWork.classList.remove('show-section');
    sectionAbout.classList.remove('show-section');
    showAbout= showContact= showWork= false;


}

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(item=> item.classList.add('show'));

        // set menu state
        showMenu= true;

    }
    else {

        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(item=> item.classList.remove('show'));
         // set menu state
         showMenu= false;
         closeAllSec();
    }
}