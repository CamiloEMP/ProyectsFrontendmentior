// * --------- EFECTOS VISUALES ------------

const inputBtn = document.querySelectorAll('.input-btn');
const inputNumber = document.querySelectorAll('.input-number');


// * Se remueve la clase por si hay alguno que ya tenga la misma
const activateButton = (item) => {
  inputBtn.forEach((element) => {
    if (element.classList.contains('activate-input-btn') && element != item) {
      element.classList.remove('activate-input-btn');
    }
  })
}

// * Se agrega la clase y despues se valida que otro elemento no la tenga
inputBtn.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.add('activate-input-btn')
    activateButton(element)
    porcentaje = element;
  })
})

inputNumber.forEach(element => {
  element.addEventListener('focus', () => {
    element.classList.add('activate-input-number')
  });
  element.addEventListener('blur', () => {
    element.classList.remove('activate-input-number')
  })
});

// * --------- FUNCIONALIDAD ---------
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
let dataBill;
async function data() {
  document.querySelector('#bill').addEventListener('keyup', (event) => {
    console.log(event.target.value);
    dataBill = event.target.value
    tipAmount.innerHTML = dataBill;
  });
}
