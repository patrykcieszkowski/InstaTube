import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import Column from '../../Col'
import SidebarHeader from '../../SidebarHeader'
import ScrollArea from '../../ScrollArea'
import style from './style'

@inject('about')
@observer
export class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.all = props.about.all
  }

  render () {
    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <RenderSider {...this.props} />
          <Col className={`${css(style.content.wrapper)}`}>
            <Row>
              <SidebarHeader
                title={`About us`}
                md={false}
                paddingTop
                paddingBottom
              />
            </Row>

            <ScrollArea
              style={{
                width: `100%`,
                height: `calc(100% - 80px)`,
                overflowX: `hidden`
              }}
            >
              {this.all.map((item, index) => (
                <Row className={css(style.content.box)} key={index}>
                  <Col xs='12' className={css(style.content.header)}>
                    <h3 className={css(style.content.h3)}>{item.name}</h3>
                  </Col>
                  <Col xs='12' className={css(style.content.textBox)}>
                    <p className={css(style.content.p)}>{item.body}</p>
                  </Col>
                </Row>
              ))}
            </ScrollArea>
          </Col>
        </Row>
      </Container>
    )
  }
}

const RenderSider = props => {
  if (!props.xl) {
    return null
  }

  return (
    <Column
      xl='auto'
      xxxxl='3'
      className={`d-none d-xl-flex align-items-center ${css(
        style.sider.wrapper
      )}`}
    >
      <Row className={`${css(style.sider.box)}`} />
    </Column>
  )
}

export default About
