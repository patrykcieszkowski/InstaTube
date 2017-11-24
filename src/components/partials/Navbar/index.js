import React from 'react'
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import UserButton from './partials/userButton'
import UserDropdown from './partials/UserDropdown'

import style from './style'

@inject('auth', 'user')
@observer
export class NavbarComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      mainOpen: false,
      profileOpen: false,
      profileDropdownOpen: false
    }
  }

  toggleMenu (type) {
    const key = `${type}Open`
    this.setState({
      ...this.state,
      [key]: !this.state[key]
    })
  }

  onItemClick (type, e) {
    this.toggleMenu(type)
  }

  onLogoutClick (e) {
    this.props.auth.logout()
  }

  render () {
    const profileIconClick = () =>
      this.props.auth.auth.local
        ? this.toggleMenu('profileDropdown')
        : this.props.history.push('/auth')

    return [
      <Navbar
        key={0}
        className={`${css(
          style.navbar.wrapper
        )} flex-xl-row-reverse flex-xl-nowrap justify-content-xl-center`}
      >
        <button
          type='button'
          className={`${css(style.button.button)} d-xl-none`}
          onClick={this.toggleMenu.bind(this, 'main')}
        >
          <i
            className={`la la-bars ${css(style.button.icon)}`}
            aria-hidden='true'
            title='expand'
          />
        </button>

        <UserButton
          logged={this.props.auth.auth.local}
          onClickHandler={this.toggleMenu.bind(this, 'profile')}
          className={`d-xl-none`}
        />

        <div className={`d-none d-xl-flex ${css(style.navbar.userNavbar)}`}>
          <RenderTransferBox {...this.props} />
          <UserDropdown
            {...this.props}
            state={this.state}
            logged={this.props.auth.auth.local}
            onClickHandler={profileIconClick}
            onLogoutClick={this.onLogoutClick.bind(this)}
          />
          <RenderSignOutBox
            logged={this.props.auth.auth.local}
            onLogoutClick={this.onLogoutClick.bind(this)}
            {...this.props}
          />
        </div>

        <Collapse
          isOpen={this.state.profileOpen}
          navbar
          className={`${css(style.collapse.wrapper)} d-xl-none`}
        >
          <Nav navbar className='ml-auto'>
            <NavItem className={css(style.collapse.item)}>
              <Link
                to='/dashboard/profile'
                className={css(style.collapse.link)}
              >
                Profile
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <Link
                to={`/`}
                onClick={this.onLogoutClick.bind(this)}
                className={css(style.collapse.link)}
              >
                Logout
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <Link to='/dashboard/payout' className={css(style.collapse.link)}>
                Payouts
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <span>
                Transfer available: {this.props.user.dashboard.data.space} GB
              </span>
            </NavItem>
          </Nav>
        </Collapse>
        <Collapse
          isOpen={this.state.mainOpen}
          navbar
          className={`${css(style.collapse.wrapper, style.collapse.main)}`}
        >
          <Nav
            className={`${css(
              style.collapse.mainList
            )} ml-auto d-xl-flex flex-xl-row justify-content-xl-around`}
            navbar
          >
            <RenderDashboardButton {...this.props} />
            <NavItem
              className={css(style.collapse.item, style.collapse.mainListItem)}
            >
              <Link
                to={`${this.props.homePath}/help`.replace('//', '/')}
                className={css(
                  style.collapse.link,
                  this.props.location.pathname ===
                  `${this.props.homePath}/help`.replace('//', '/')
                    ? style.collapse.activeLink
                    : ''
                )}
                onClick={this.onItemClick.bind(this, 'main')}
              >
                Help
              </Link>
            </NavItem>
            <NavItem
              className={css(style.collapse.item, style.collapse.mainListItem)}
            >
              <Link
                to={`${this.props.homePath}/about`.replace('//', '/')}
                className={css(
                  style.collapse.link,
                  this.props.location.pathname ===
                  `${this.props.homePath}/about`.replace('//', '/')
                    ? style.collapse.activeLink
                    : ''
                )}
                onClick={this.onItemClick.bind(this, 'main')}
              >
                About us
              </Link>
            </NavItem>
            <NavItem
              className={css(style.collapse.item, style.collapse.mainListItem)}
            >
              <Link
                to={
                  this.props.auth.auth.local
                    ? '/dashboard/premium'
                    : `${this.props.homePath}/auth`.replace('//', '/')
                }
                className={css(
                  style.collapse.link,
                  this.props.auth.auth.local
                    ? style.collapse.linkHighlight
                    : '',
                  this.props.location.pathname === '/auth'
                    ? style.collapse.activeLink
                    : ''
                )}
                onClick={this.onItemClick.bind(this, 'main')}
              >
                {this.props.auth.auth.local ? `Go Premium!` : `Login`}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>,
      <div
        key={1}
        className={css(this.props.bg ? style.navbar.backgroundBlock : '')}
      />
    ]
  }
}

const RenderDashboardButton = props => {
  if (!props.dashboard) {
    return null
  }

  return (
    <NavItem className={css(style.collapse.item, style.collapse.mainListItem)}>
      <Link
        to={`/dashboard`}
        className={css(
          style.collapse.link,
          props.location.pathname === `/dashboard`
            ? style.collapse.activeLink
            : ''
        )}
      >
        Dashboard
      </Link>
    </NavItem>
  )
}

const RenderTransferBox = props => {
  if (!props.dashboard) {
    return null
  }

  return (
    <div
      className={`${css(
        style.navbar.transfer
      )} justify-content-center align-items-center`}
    >
      <span className={css(style.navbar.transferSpan)}>
        Transfer available:{' '}
        <span className={css(style.navbar.transferSpanAmount)}>
          {props.user.dashboard.data.space} GB
        </span>
      </span>
    </div>
  )
}

const RenderSignOutBox = props => {
  if (!props.logged) {
    return null
  }

  return (
    <Link
      to='/'
      onClick={props.onLogoutClick}
      className={`${css(
        style.navbar.signOutLink
      )} justify-content-center align-items-center`}
    >
      <i
        className={`la la-sign-out ${css(style.navbar.signoutIcon)}`}
        aria-hidden='true'
        title='sign out'
      />
    </Link>
  )
}

export default NavbarComponent
