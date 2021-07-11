const icon = document.querySelector('.chat_icon');
const com_icon = document.querySelector('.fa-comments');
const close_icon = document.querySelector('.fa-times');
const frame = document.querySelector('.chat_frame');

if (icon) {
  icon.addEventListener('click', () => {
    frame.classList.toggle('active');
    com_icon.classList.toggle('active');
    close_icon.classList.toggle('active');
  });
}
