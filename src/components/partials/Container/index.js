import React from 'react'
import { css } from 'aphrodite'
import { Container } from 'reactstrap'

import style from './style'

export const ContainerComponent = props => (
  <Container
    className={`${css(
      style.main.wrapper,
      props.noPadding ? style.main.noPadding : '',
      props.minHeight ? style.main.minHeight : '',
      props.fullHeight ? style.main.fullHeight : '',
      props.bg ? style.bg[props.bg] : ''
    )} ${props.className}`}
    fluid={props.fluid}
  >
    {props.children}
  </Container>
)

export default ContainerComponent
