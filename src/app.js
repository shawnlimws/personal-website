const box = document.querySelector('.box')
const boxContents = document.querySelector('.boxContents')
const previousWork = document.querySelector('.previousWork')
const workLink = document.querySelector('.workLink')
const close = document.querySelector('.fa-times-circle-o')

workLink.onclick = function () {
  box.classList.add('expand')
  boxContents.classList.add('fade')
  setTimeout(function () {
    boxContents.classList.add('none')
  }, 1000)
  setTimeout(function () {
    previousWork.classList.remove('back')
  }, 1900)
}

close.onclick = function () {
}
