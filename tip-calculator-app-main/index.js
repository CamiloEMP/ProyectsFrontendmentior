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


let porcentaje;
let valueTipAmount = 0;
let valueTotal;
const tipAmount = document.querySelector('#tipAmount');
const total = document.querySelector('#total');
console.log(tipAmount, total);
const bill = document.querySelector('#bill');
console.log(bill);
bill.addEventListener('keydown', async () => {
  valueTipAmount = await bill.value;
});

tipAmount.innerHTML = `${valueTipAmount}`;