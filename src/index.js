import './styles/index.scss'
// import Logo from './assets/img/webpack-logo.png'

class Time {
  static value = Date.now()
}

console.log('testing babel plugin ', Time.value)