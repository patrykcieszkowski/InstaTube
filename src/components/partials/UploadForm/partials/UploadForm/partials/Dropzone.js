import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row } from 'reactstrap'
import Dropzone from 'react-dropzone'

import style from '../../../style'

const ATTR_ACCEPT_ALL = 'video/*,audio/*,image/*'

const RenderDropzone = props => (
  <FormGroup className={css(style.form.group)}>
    <Dropzone
      maxSize={20000000}
      accept={ATTR_ACCEPT_ALL}
      multiple={false}
      onDropRejected={props.onDropRejected}
      onDropAccepted={props.onDropAccepted}
      className={`${css(style.dropzone.wrapper)} d-flex align-items-center`}
    >
      <Row
        className={`${css(
          style.dropzone.row
        )} d-flex align-items-center ${!props.state.upload.file
          ? `justify-content-center`
          : ''}`}
      >
        <Col xs='3' className={`d-flex justify-content-center`}>
          <button
            type='button'
            className={`${css(
              style.dropzone.button
            )} d-flex align-items-center justify-content-center`}
          >
            <i
              className={`la la-plus ${css(style.dropzone.buttonIcon)}`}
              aria-hidden='true'
              title='add'
            />
          </button>
        </Col>
        <RenderTitle {...props} />
      </Row>
    </Dropzone>
  </FormGroup>
)

const RenderTitle = props => {
  if (props.state.upload.file) {
    return (
      <Col className='d-flex flex-column justify-content-center' xs='9'>
        <Row>
          <Col>
            <span className={css(style.dropzone.fileTitleSpan)}>
              {props.state.upload.file.name}
            </span>
          </Col>
        </Row>
      </Col>
    )
  }

  return (
    <Col
      className='d-flex flex-column justify-content-center'
      style={{ padding: 0 }}
      xs='auto'
    >
      <Row className={css(style.form.row)}>
        <Col>
          <span className={css(style.dropzone.titleSpan)}>Add your file</span>
        </Col>
      </Row>
      <Row className={css(style.form.row)}>
        <Col>
          <span className={css(style.dropzone.descSpan)}>
            Maximum{' '}
            <span className={css(style.dropzone.boldSpan)}>
              2.00GB / {`24h`}
            </span>
          </span>
        </Col>
      </Row>
    </Col>
  )
}

export default RenderDropzone
