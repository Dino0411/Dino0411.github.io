const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

// TODO  hàm hiện thị (thêm class open vào modal)
function showBuyTickets(){
    modal.classList.add('open')
}

//  TODO hàm ẩn (gõ bỏ class open ra modal)
function closeBuyTickets(){
    modal.classList.remove('open')
}

// TODO lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets )
}

// TODO nghe hành vi click vào button close
modalClose.addEventListener('click', closeBuyTickets)

modal.addEventListener('click', closeBuyTickets)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})