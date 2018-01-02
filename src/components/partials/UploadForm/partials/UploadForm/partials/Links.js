import React from 'react'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { FormGroup, Col, Row } from 'reactstrap'

import style from '../../../style'

const RenderLinks = props => (
  <FormGroup className={css(style.form.group, style.links.box)}>
    <Row className={css(style.form.row)}>
      <Col
        xs='7'
        className={`${css(
          style.links.wrapper,
          style.links.instagramLinkWrapper
        )} d-flex justify-content-center align-items-center`}
      >
        <Link
          to='/auth'
          onClick={props.onInstagramClick}
          className={`${css(
            style.links.link,
            props.state.links.instagram ? style.links.active : ''
          )} d-block d-xl-none`}
        >
          Instagram
        </Link>
        <Link
          to='/auth'
          onClick={props.onInstagramClick}
          className={`${css(
            style.links.link,
            props.state.links.instagram ? style.links.active : ''
          )} d-none d-xl-block`}
        >
          Instagram follow per view
        </Link>
      </Col>
      <Col
        className={`${css(
          style.links.wrapper,
          style.links.PPVLinkWrapper
        )} d-flex justify-content-center align-items-center`}
      >
        <Link
          to='/auth'
          onClick={props.onPPVClick}
          className={css(
            style.links.link,
            props.state.links.ppv ? style.links.active : ''
          )}
        >
          Pay per view
        </Link>
      </Col>
    </Row>
  </FormGroup>
)

export default RenderLinks
