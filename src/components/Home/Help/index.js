import React from 'react'
import { css } from 'aphrodite'
import { Container } from 'reactstrap'

import HelpBox from './partials/HelpBox'
import style from './style'

const helpBoxList = [
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
    const newExpandedState = (!this.state.boxes[index]) ? false : !this.state.boxes[index].isExpanded

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
        {helpBoxList.map((box, index) => (
          <HelpBox
            key={index}
            title={box.title}
            state={this.state.boxes[index] || {}}
            onClick={this.onBoxClick.bind(this, index)}
          >
            {box.desc}
          </HelpBox>
        ))}
      </Container>
    )
  }
}

export default Help
