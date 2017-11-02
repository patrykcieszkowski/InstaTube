import React from 'react'
import { css } from 'aphrodite'
import { Container } from 'reactstrap'

import style from './style'

export const ContainerComponent = props => (
  <Container
    className={`${css(
      style.wrapper,
      props.noPadding ? style.noPadding : '',
      props.fullHeight ? style.fullHeight : ''
    )} ${props.className}`}
    fluid={props.fluid}
  >
    {props.children}
  </Container>
)

export default ContainerComponent
