import {ISectionData} from '../types/SectionData'
import Transactions from '../../assets/images/transactions.svg'
import Account from '../../assets/images/Account.svg'
import Office from '../../assets/images/Office.svg'
import Benefits from '../../assets/images/Benefits.svg'
import Login from '../../assets/images/Login.svg'
import Payment from '../../assets/images/Payment.svg'



export const HOME_OBJ : ISectionData = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get acess to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Get started',
  imgStart: true,
  img: Transactions,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
}

export const HOME_OBJ2 : ISectionData = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Account,
  alt: 'Account',
  dark: false,
  primary: false,
  darkText: true
}

export const HOME_OBJ3 : ISectionData = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you' ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: Login,
  alt: 'Login',
  dark: false,
  primary: false,
  darkText: true
}
