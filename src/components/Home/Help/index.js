import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
import { Scrollbars } from 'react-custom-scrollbars'

import SignupInfo from '../partials/SignupInfo'

import HelpBox from './partials/HelpBox'
import style from './style'

const helpBoxList = [
  {
    title: `Bugs we're currently working at`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo finibus dignissim. Proin eget purus ipsum. Maecenas ac lobortis augue. Suspendisse vulputate finibus leo, ac pulvinar eros sodales id. `
  },
  {
    title: `Bugs we're currently working at`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo finibus dignissim. Proin eget purus ipsum. Maecenas ac lobortis augue. Suspendisse vulputate finibus leo, ac pulvinar eros sodales id. `
  },
  {
    title: `Bugs we're currently working at`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo finibus dignissim. Proin eget purus ipsum. Maecenas ac lobortis augue. Suspendisse vulputate finibus leo, ac pulvinar eros sodales id. `
  },
  {
    title: `Bugs we're currently working at`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo finibus dignissim. Proin eget purus ipsum. Maecenas ac lobortis augue. Suspendisse vulputate finibus leo, ac pulvinar eros sodales id. `
  },
  {
    title: `Bugs we're currently working at`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo finibus dignissim. Proin eget purus ipsum. Maecenas ac lobortis augue. Suspendisse vulputate finibus leo, ac pulvinar eros sodales id. `
  }
]

export class Help extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: {}
    }
  }

  onBoxClick(index, e) {
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

  render() {
    return (
      <Container fluid className={css(style.grid.container)}>
        <Row className={css(style.grid.wrapper)}>
          <Col
            xs="12"
            xl="5"
            className={`d-none d-xl-flex align-items-start ${css(
              style.sider.wrapper
            )}`}
          >
            <Row>
              <SignupInfo />
            </Row>
          </Col>
          <Col>
            <Scrollbars
              style={{ width: '100%', height: `100%` }}
              renderView={props => <Row {...props} style={{ margin: 0 }} />}
            >
              <Col xs="12" xl="5" className={css(style.box.wrapper)}>
                <Row className={css(style.box.row)}>
                  {helpBoxList
                    .slice(0, Math.floor(helpBoxList.length / 2))
                    .map((box, index) => (
                      <HelpBox
                        key={index}
                        index={index}
                        title={box.title}
                        state={this.state.boxes[index] || { isExpanded: false }}
                        onClick={this.onBoxClick.bind(this, index)}
                      >
                        {box.desc}
                      </HelpBox>
                    ))}
                </Row>
              </Col>
              <Col xs="12" xl="5" className={css(style.box.wrapper)}>
                <Row className={css(style.box.row)}>
                  {helpBoxList
                    .slice(
                      Math.floor(helpBoxList.length / 2),
                      helpBoxList.length
                    )
                    .map((box, index) => {
                      const _index = Math.floor(helpBoxList.length / 2) + index
                      return (
                        <HelpBox
                          key={index}
                          index={_index}
                          title={box.title}
                          state={
                            this.state.boxes[_index] || { isExpanded: false }
                          }
                          onClick={this.onBoxClick.bind(this, _index)}
                        >
                          {box.desc}
                        </HelpBox>
                      )
                    })}
                </Row>
              </Col>
            </Scrollbars>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Help
