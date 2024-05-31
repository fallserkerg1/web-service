const toggleBtn = document.querySelector('.toogle_btn')
const toggleBtnIcon = document.querySelector('.toogle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')

    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-bars'
    : 'fa-solid fa-xmark'
}