import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-enable no-unused-vars */

import Column from '../../Col'
import ScrollArea from '../../ScrollArea'
import SidebarHeader from '../../SidebarHeader'
import HelpBox from './partials/HelpBox'
import style from './style'

@inject('help')
@observer
export class Help extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boxes: {}
    }

    this.all = props.help.all
  }

  onBoxClick (index, e) {
    const newExpandedState = !this.state.boxes[index]
      ? !(index === 0)
      : !this.state.boxes[index].isExpanded

    this.setState({
      ...this.state,
      boxes: {
        ...this.state.boxes,
        [index]: {
          ...this.state.boxes[index],
          isExpanded: newExpandedState
        }
      }
    })
  }

  render () {
    return (
      <Container fluid className={css(style.main.container)}>
        <Row className={css(style.main.wrapper)}>
          <RenderSider {...this.props} />
          <Col className={css(style.content.wrapper)}>
            <Row>
              <SidebarHeader
                title={`Quick Help`}
                md={false}
                paddingTop
                paddingBottom
              />
            </Row>
            <ScrollArea
              style={{
                width: '100%',
                height: `calc(100% - 80px)`,
                margin: 0,
                overflowX: `hidden`
              }}
              className={'row'}
            >
              <Col style={{ paddingLeft: 0 }}>
                <Row>
                  <RenderList
                    list={this.all}
                    startIndex={0}
                    endIndex={this.all.length / 2}
                    state={this.state}
                    onBoxClick={this.onBoxClick.bind(this)}
                  />
                  <RenderList
                    list={this.all}
                    startIndex={this.all.length / 2}
                    endIndex={this.all.length}
                    state={this.state}
                    onBoxClick={this.onBoxClick.bind(this)}
                  />
                </Row>
              </Col>
            </ScrollArea>
          </Col>
        </Row>
      </Container>
    )
  }
}

const RenderList = props => (
  <Column
    xs='12'
    xl='12'
    xxl='6'
    xxxl='5'
    xxxxl='5'
    className={css(style.box.colWrapper)}
  >
    <Row className={css(style.box.row)}>
      {props.list
        .slice(Math.floor(props.startIndex), props.endIndex)
        .map((box, index) => {
          const _index = Math.floor(props.startIndex) + index
          return (
            <HelpBox
              key={index}
              index={_index}
              title={box.name}
              state={
                props.state.boxes[_index] || {
                  isExpanded: false
                }
              }
              onClick={e => props.onBoxClick(_index, e)}
            >
              {box.body}
            </HelpBox>
          )
        })}
    </Row>
  </Column>
)

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

export default Help
