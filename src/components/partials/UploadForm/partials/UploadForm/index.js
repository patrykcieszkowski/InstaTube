import React from 'react'
import { css } from 'aphrodite'
import { Form, Button } from 'reactstrap'

import style from '../../style'

import { InstagramInput, PPVInput } from './partials/PPVInputs'
import Dropzone from './partials/Dropzone'
import DisplayTime from './partials/DisplayTime'
import Error from './partials/Error'
import Links from './partials/Links'
import Message from './partials/Message'
import Validity from './partials/Validity'
import Views from './partials/Views'

export const UploadForm = props => (
  <Form
    className={css(style.form.form)}
    onSubmit={props.onFormSubmit}
    style={props.style}
  >
    <Dropzone {...props} />
    <Error {...props} />
    <Message {...props} />
    <Links {...props} />
    <InstagramInput {...props} />
    <PPVInput {...props} />
    <DisplayTime {...props} />
    <Validity {...props} />
    <Views {...props} />

    <Button type="submit" className={css(style.form.submitButton)}>
      Create link!
    </Button>
  </Form>
)

export default UploadForm
