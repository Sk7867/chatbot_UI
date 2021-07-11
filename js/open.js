const icon = document.querySelector('.chat_icon');
const com_icon = document.querySelector('.fa-comments');
const close_icon = document.querySelector('.fa-times');
const frame = document.querySelector('.chat_frame');
const iris = document.querySelector('.iris');

if (icon) {
  icon.addEventListener('click', () => {
    frame.classList.toggle('active');
    com_icon.classList.toggle('active');
    close_icon.classList.toggle('active');
    iris.classList.toggle('active');
  });
}
