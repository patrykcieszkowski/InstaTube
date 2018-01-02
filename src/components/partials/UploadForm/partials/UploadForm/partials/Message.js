import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Input } from 'reactstrap'

import style from '../../../style'

const RenderMessage = props => (
  <FormGroup className={css(style.form.group, style.message.box)}>
    <Input
      placeholder="Message"
      className={css(style.message.input)}
      value={props.state.message}
      onChange={props.onMessageChange}
    />
  </FormGroup>
)

export default RenderMessage
