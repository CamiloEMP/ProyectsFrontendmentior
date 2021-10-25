const inputBtn = document.querySelectorAll('.input-btn');

for (let i = 0; i < inputBtn.length; i++) {
  inputBtn[i].addEventListener('click', () => {
    if (inputBtn[i].classList.contains('activate-input-btn')) {
      inputBtn[i].classList.remove('activate-input-btn')
    } else {
      inputBtn[i].classList.add('activate-input-btn')
    }
  })
}

const inputNumber = document.querySelectorAll('.input-number');
inputNumber.forEach(element => {
  element.addEventListener('focus', () => {
    element.classList.add('activate-input-number')
  });
  element.addEventListener('blur', () => {
    element.classList.remove('activate-input-number')
  })
  });
