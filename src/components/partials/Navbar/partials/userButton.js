import React from 'react'
import { css } from 'aphrodite'

import style from '../style'

export const UserButton = props =>
  !props.logged ? UserButtonLogged(props) : UserButtonRegular(props)

const UserButtonRegular = props => (
  <button
    type="button"
    className={`${props.className || ''} ${css(style.button.button)}`}
    onClick={props.toggleMenu.bind(this, 'profile')}
  >
    <i
      className={`la la-user ${css(style.button.icon)}`}
      aria-hidden="true"
      title="expand"
    />
  </button>
)

const UserButtonLogged = props => (
  <button
    type="button"
    className={`${props.className || ''} ${css(
      style.button.button,
      style.button.userButtonLogged
    )} d-flex justify-content-center align-items-center`}
    onClick={props.toggleMenu.bind(this, 'profile')}
  >
    <i
      className={`la la-user ${css(
        style.button.icon,
        style.button.userButtonLoggedIcon
      )}`}
      aria-hidden="true"
      title="expand"
    />
    <span
      className={`${css(style.button.userButtonLoggedSpan)} d-none d-lg-block`}
    >
      hello@none.pl
    </span>
    <i
      className={`la la-angle-down ${css(
        style.button.icon,
        style.button.userButtonLoggedIcon,
        style.button.userButtonLoggedDropIcon
      )}`}
      aria-hidden="true"
      title="expand"
    />
  </button>
)

export default UserButton
