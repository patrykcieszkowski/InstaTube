import React from 'react'
import { css } from 'aphrodite'

import utils from '../../../utils'
import style from './style'

export class PieTimer extends React.Component {
  constructor(props) {
    super(props)
    const state = {}
    state.size = props.size || 80
    state.position = state.size / 2 + 3
    state.stroke = props.stroke || 12
    state.radius = state.size / 2 - state.stroke / 2
    state.dashArray = state.radius * Math.PI * 2

    //time
    if (!props.timerInit) {
      const timeoutDate = new Date()
      timeoutDate.setSeconds(timeoutDate.getSeconds() + props.timeout)
      state.time = {
        timeoutDate: timeoutDate,
        timeout: props.timeout,
        passed: props.passedTime || 0
      }
    } else {
      state.time = props.timerInit
    }

    this.state = state
  }

  componentWillMount() {
    const interval = setInterval(() => {
      const passedTime =
        this.state.time.timeout -
        Math.floor((this.state.time.timeoutDate.getTime() - Date.now()) / 1000)

      this.setState({
        ...this.state,
        time: {
          ...this.state.time,
          passed: passedTime
        }
      })

      if (this.props.onProgress) {
        this.props.onProgress(this.state.time) // pass timeout date
      }

      if (passedTime / this.state.time.timeout * 100 >= 100) {
        if (this.props.onComplete) {
          this.props.onComplete()
        }

        clearInterval(interval)
      }
    }, 1000)
  }

  render() {
    const percentage = this.state.time.passed / this.state.time.timeout

    return (
      <div
        style={{
          ...(this.props.style || {}),
          width: this.state.size + 6,
          height: this.state.size + 6
        }}
      >
        <svg
          width={this.state.size + 6}
          height={this.state.size + 6}
          className={css(style.svg.svg)}
        >
          <g>
            <Circle
              radius={this.state.radius + 3}
              position={this.state.position}
              stroke={this.state.stroke}
              color={`#c5ced3`}
            />
            <Circle
              radius={this.state.radius}
              position={this.state.position}
              stroke={this.state.stroke}
              color={`#e2e6ea`}
              fill={this.props.fill}
            />
            <Circle
              radius={this.state.radius}
              position={this.state.position}
              stroke={this.state.stroke}
              color={`#dd316d`}
              dashArray={this.state.dashArray}
              dashOffset={percentage * this.state.dashArray}
            />
          </g>
        </svg>
        <Timer
          radius={this.state.radius}
          time={this.state.time}
          overlay={this.props.overlay}
        />
      </div>
    )
  }
}

const Timer = props => {
  const parsedTime = utils.secondsToTime(props.time.timeout - props.time.passed)

  return (
    <span
      style={{
        width: props.radius,
        height: props.radius,
        top: `calc(50% - ${props.radius / 2}px)`,
        left: `calc(50% - ${props.radius / 2}px)`,
        lineHeight: `${parsedTime.length > 1
          ? props.radius / parsedTime.length
          : props.radius / 2}px`
      }}
      className={css(
        style.timer.wrapper,
        props.overlay ? style.timer.overlayWrapper : ''
      )}
    >
      {parsedTime.length > 1
        ? parsedTime.map(val => `${val[0]}${val[1][0]}`).join(' ')
        : [
            <span className={css(style.timer.sec)} key={0}>
              {parsedTime[0][0]}
            </span>,
            <span key={1}>{parsedTime[0][1][1]}</span>
          ]}
    </span>
  )
}

const Circle = props => (
  <circle
    r={props.radius}
    cy={props.position}
    cx={props.position}
    strokeWidth={props.stroke}
    stroke={props.color}
    strokeDasharray={props.dashArray}
    strokeDashoffset={`-${props.dashOffset}` || props.dashOffset}
    fill={props.fill || `none`}
    className={css(style.svg.circle)}
  />
)

export default PieTimer
