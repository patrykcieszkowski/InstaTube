import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'

import style from './style'

export class NavbarComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mainOpen: false,
      profileOpen: false
    }
  }

  toggleMenu(type) {
    const key = `${type}Open`
    this.setState({
      ...this.state,
      [key]: !this.state[key]
    })
  }

  onItemClick(type, e) {
    this.toggleMenu(type)
  }

  render() {
    return (
      <Navbar color="faded" expand="md" className={css(style.navbar.wrapper)}>
        <button
          type="button"
          className={css(style.button.button)}
          onClick={this.toggleMenu.bind(this, 'main')}
        >
          <i
            className={`la la-bars ${css(style.button.icon)}`}
            aria-hidden="true"
            title="expand"
          />
        </button>
        <button
          type="button"
          className={css(style.button.button)}
          onClick={this.toggleMenu.bind(this, 'profile')}
        >
          <i
            className={`la la-user ${css(style.button.icon)}`}
            aria-hidden="true"
            title="expand"
          />
        </button>

        <Collapse
          isOpen={this.state.profileOpen}
          navbar
          className={css(style.collapse.wrapper)}
        >
          <Nav navbar className="ml-auto">
            <NavItem className={css(style.collapse.item)}>
              <Link to="/about" className={css(style.collapse.link)}>
                Profile
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <Link to="/about" className={css(style.collapse.link)}>
                Logout
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <Link to="/about" className={css(style.collapse.link)}>
                Payouts
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <span>Transfer available: 245MB</span>
            </NavItem>
          </Nav>
        </Collapse>
        <Collapse
          isOpen={this.state.mainOpen}
          navbar
          className={css(style.collapse.wrapper)}
        >
          <Nav className="ml-auto" navbar>
            <NavItem className={css(style.collapse.item)}>
              <Link
                to="/nav/help"
                className={css(style.collapse.link)}
                onClick={this.onItemClick.bind(this, 'main')}
              >
                Help
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <Link
                to="/nav/about"
                className={css(style.collapse.link)}
                onClick={this.onItemClick.bind(this, 'main')}
              >
                About us
              </Link>
            </NavItem>
            <NavItem className={css(style.collapse.item)}>
              <Link
                to="/nav/auth"
                className={css(
                  style.collapse.link,
                  style.collapse.linkHighlight
                )}
                onClick={this.onItemClick.bind(this, 'main')}
              >
                Go Premium!
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
