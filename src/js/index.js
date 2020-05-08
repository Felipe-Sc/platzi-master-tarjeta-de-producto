const blueColor = document.querySelector('#blueColor')
const redColor = document.querySelector('#redColor')
const blackColor = document.querySelector('#blackColor')
const orangeColor = document.querySelector('#orangeColor')
const greenColor = document.querySelector('#greenColor')
const nikePhoto = document.querySelector('#nikePhoto')
const imgContainer = document.querySelector('#imgContainer')
const buyButton = document.querySelector('#buyButton')

function changeData(image, alt, color) {
  nikePhoto.src = image
  nikePhoto.alt = alt
  imgContainer.style.backgroundColor = color
  buyButton.style.backgroundColor = color
}

function changeTheme() {
  if (this.classList.contains('black')) {
    const image = './src/img/black-nike.png'
    const alt = 'Zapato deportivo Nike color negro, para correr.'
    const color = '#000'
    changeData(image, alt, color)
  } else if (this.classList.contains('green')) {
    const image = './src/img/green-nike.png'
    const alt = 'Zapato deportivo Nike color verde, para correr.'
    const color = '#0b8457'
    changeData(image, alt, color)
  } else if (this.classList.contains('blue')) {
    const image = './src/img/blue-nike.png'
    const alt = 'Zapato deportivo Nike color azul, para correr.'
    const color = '#5466b1'
    changeData(image, alt, color)
  } else if (this.classList.contains('orange')) {
    const image = './src/img/orange-nike.png'
    const alt = 'Zapato deportivo Nike color naranja, para correr.'
    const color = '#dd6b4d'
    changeData(image, alt, color)
  } else if (this.classList.contains('red')) {
    const image = './src/img/red-nike.png'
    const alt = 'Zapato deportivo Nike color rojo, para correr.'
    const color = '#eb4559'
    changeData(image, alt, color)
  }
}

blueColor.addEventListener('click', changeTheme)
redColor.addEventListener('click', changeTheme)
blackColor.addEventListener('click', changeTheme)
orangeColor.addEventListener('click', changeTheme)
greenColor.addEventListener('click', changeTheme)