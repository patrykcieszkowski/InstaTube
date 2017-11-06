import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'
import { Scrollbars } from 'react-custom-scrollbars'

import Column from '../../partials/Col'
import ScrollArea from '../../partials/ScrollArea'
import SidebarHeader from '../../partials/SidebarHeader'
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
      <Container fluid className={css(style.main.container)}>
        <Row className={css(style.main.wrapper)}>
          <Column
            xl="auto"
            xxxxl="3"
            className={`d-none d-xl-flex align-items-start ${css(
              style.sider.wrapper
            )}`}
          >
            <Row className={`${css(style.sider.box)}`} />
          </Column>
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
              autoHide={true}
              autoHideTimeout={1000}
              autoHideDuration={200}
            >
              <Col style={{ paddingLeft: 0 }}>
                <Row>
                  <Column
                    xs="12"
                    xl="12"
                    xxl="6"
                    xxxl="5"
                    xxxxl="5"
                    className={css(style.box.colWrapper)}
                  >
                    <Row className={css(style.box.row)}>
                      {helpBoxList
                        .slice(0, Math.floor(helpBoxList.length / 2))
                        .map((box, index) => (
                          <HelpBox
                            key={index}
                            index={index}
                            title={box.title}
                            state={
                              this.state.boxes[index] || { isExpanded: false }
                            }
                            onClick={this.onBoxClick.bind(this, index)}
                          >
                            {box.desc}
                          </HelpBox>
                        ))}
                    </Row>
                  </Column>
                  <Column
                    xs="12"
                    xl="12"
                    xxl="6"
                    xxxl="5"
                    xxxxl="5"
                    className={css(style.box.colWrapper)}
                  >
                    <Row className={css(style.box.row)}>
                      {helpBoxList
                        .slice(
                          Math.floor(helpBoxList.length / 2),
                          helpBoxList.length
                        )
                        .map((box, index) => {
                          const _index =
                            Math.floor(helpBoxList.length / 2) + index
                          return (
                            <HelpBox
                              key={index}
                              index={_index}
                              title={box.title}
                              state={
                                this.state.boxes[_index] || {
                                  isExpanded: false
                                }
                              }
                              onClick={this.onBoxClick.bind(this, _index)}
                            >
                              {box.desc}
                            </HelpBox>
                          )
                        })}
                    </Row>
                  </Column>
                </Row>
              </Col>
            </ScrollArea>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Help
