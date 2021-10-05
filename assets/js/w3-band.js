// ! mở đóng modal
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

// TODO  hàm hiện thị (thêm class open vào modal)
function showBuyTickets(){
    modal.classList.add('open');
}

//  TODO hàm ẩn (gõ bỏ class open ra modal)
function closeBuyTickets(){
    modal.classList.remove('open');
}

// TODO lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets )
}

// TODO nghe hành vi click vào button close
modalClose.addEventListener('click', closeBuyTickets);

modal.addEventListener('click', closeBuyTickets);

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})


// ! đóng mở đóng mobile menu
var header = document.getElementById('header');
console.log(header);
var mobileMenu = document.getElementById('mobile-menu');
console.log(mobileMenu);
var headerHeight = header.clientHeight;

mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }
}

// ! tự động đóng khi mở mobile menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i=0; i<menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }
        else{
            header.style.height =null;
        }
    }
}