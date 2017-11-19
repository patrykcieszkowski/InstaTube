import React from 'react'
import { css } from 'aphrodite'
import UserButton from './userButton'
import { Link } from 'react-router-dom'

import utils from '../../../../utils'
import style from '../style'

export class UserDropdown extends React.Component {
  componentDidMount () {
    document.addEventListener('click', this.onClickDocument.bind(this))
  }

  onClickDocument (e) {
    if (
      utils.isChildOf(e.target, this.refs.wrapper) ||
      !this.props.state.profileDropdownOpen
    ) {
      return
    }

    return this.props.onClickHandler()
  }

  render () {
    return (
      <div className={css(style.navbar.userButtonBox)} ref='wrapper'>
        <div>
          <UserButton
            logged={this.props.logged}
            onClickHandler={this.props.onClickHandler}
          />
          {this.props.state.profileDropdownOpen}
        </div>
        <div
          className={css(
            style.collapse.userCollapseBox,
            this.props.state.profileDropdownOpen
              ? style.collapse.userCollapseBoxActive
              : ''
          )}
        >
          <div
            className={`${css(
              style.collapse.wrapper,
              style.collapse.userCollapseWrapper
            )} d-none d-xl-block`}
          >
            <ul className={`${css(style.collapse.collapseList)}`}>
              <li className={css(style.collapse.item)}>
                <Link
                  to='/dashboard/payout'
                  className={css(style.collapse.link)}
                  onClick={this.props.onClickHandler}
                >
                  Payouts
                </Link>
              </li>
              <li className={css(style.collapse.item)}>
                <Link
                  to='/dashboard/profile'
                  className={css(style.collapse.link)}
                  onClick={this.props.onClickHandler}
                >
                  Profile
                </Link>
              </li>
              <li className={css(style.collapse.item)}>
                <Link
                  to='/dashboard/social'
                  className={css(style.collapse.link)}
                  onClick={this.props.onClickHandler}
                >
                  Social Networks
                </Link>
              </li>
              <li className={css(style.collapse.item)}>
                <Link
                  to={`/`}
                  className={css(style.collapse.link)}
                  onClick={this.props.onLogoutClick}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDropdown
