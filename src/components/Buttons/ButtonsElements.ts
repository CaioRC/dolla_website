import styled from 'styled-components'
import { Link  , LinkProps} from 'react-scroll'

import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

type IButton =  LinkProps & {
  readonly primary? : boolean;
  readonly big? : boolean;
  readonly dark? : boolean;
  readonly fontBig? : boolean;
}

export const Button = styled(Link)<IButton>`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding:  ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color:  ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size:  ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
  }
  `
