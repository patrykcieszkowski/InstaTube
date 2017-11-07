import React from 'react'
import { css } from 'aphrodite'
import { Link } from 'react-router-dom'
import { FormGroup, Col, Row } from 'reactstrap'

import style from '../../../style'

const RenderLinks = props => (
  <FormGroup className={css(style.form.group, style.links.box)}>
    <Row className={css(style.form.row)}>
      <Col
        xs="7"
        className={css(style.links.wrapper, style.links.instagramLinkWrapper)}
      >
        <Link
          to="/nav/auth"
          onClick={props.onInstagramClick}
          className={css(
            style.links.link,
            props.state.links.instagram ? style.links.active : ''
          )}
        >
          Instagram follow for view
        </Link>
      </Col>
      <Col className={css(style.links.wrapper, style.links.PPVLinkWrapper)}>
        <Link
          to="/nav/auth"
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
