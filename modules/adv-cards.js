export function addClickedClass() {
  $('.buy').click(() => {
    $('.bottom').addClass('clicked');
  });
}

export function removeClickedClass() {
  $('.remove').click(() => {
    $('.bottom').removeClass('clicked');
  });
}
