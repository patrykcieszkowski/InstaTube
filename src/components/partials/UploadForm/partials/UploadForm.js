import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import attrAccept from 'attr-accept'

import style from '../style'

const ATTR_ACCEPT_ALL = 'video/*,audio/*,image/*'
const ATTR_ACCEPT_MEDIA = 'video/*,audio/*'

export const UploadForm = props => (
  <Form className={css(style.form.form)} onSubmit={props.onFormSubmit} style={props.style}>
    <FormGroup className={css(style.form.group)}>
      <Dropzone
        maxSize={20000000}
        accept={ATTR_ACCEPT_ALL}
        multiple={false}
        onDropRejected={props.onDropRejected}
        onDropAccepted={props.onDropAccepted}
        className={`${css(
          style.dropzone.wrapper
        )} d-flex align-items-center justify-content-center`}
      >
        <Row className={css(style.form.row)}>
          <Col className="justify-content-center">
            <button type="button" className={css(style.dropzone.button)}>
              <i
                className={`la la-plus ${css(style.dropzone.buttonIcon)}`}
                aria-hidden="true"
                title="add"
              />
            </button>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <Row className={css(style.form.row)}>
              <span className={css(style.dropzone.titleSpan)}>
                Add your file
              </span>
            </Row>
            <Row className={css(style.form.row)}>
              <span className={css(style.dropzone.descSpan)}>
                Maximum{' '}
                <span className={css(style.dropzone.boldSpan)}>
                  2.00GB / 12h
                </span>
              </span>
            </Row>
          </Col>
        </Row>
      </Dropzone>
    </FormGroup>
    <FormGroup
      className={css(style.form.group)}
      style={{ display: !props.state.upload.error ? `none` : `block` }}
    >
      <Row className={css(style.errors.fileErrorWrapper)}>
        <Col className={css(style.errors.fileErrorBox)} xs="10">
          <span className={css(style.errors.fileErrorSpan)}>
            {props.state.upload.error}
          </span>
        </Col>
        <Col>
          <span
            className={css(style.errors.fileErrorCloseButton)}
            onClick={props.onErrorCloseClick}
          >
            <i
              className={`la la-close ${css(style.errors.fileErrorCloseIcon)}`}
              aria-hidden="true"
              title="close"
            />
          </span>
        </Col>
      </Row>
    </FormGroup>
    <FormGroup className={css(style.form.group, style.message.box)}>
      <Input
        placeholder="Message"
        className={css(style.message.input)}
        value={props.state.message}
        onChange={props.onMessageChange}
      />
    </FormGroup>
    <FormGroup className={css(style.form.group, style.links.box)}>
      <Row className={css(style.form.row)}>
        <Col
          xs="7"
          className={css(style.links.wrapper, style.links.instagramLinkWrapper)}
        >
          <Link
            to="/nav/auth"
            onClick={props.onInstagramClick}
            className={css(
              style.links.link,
              props.state.links.instagram ? style.links.active : ''
            )}
          >
            Instagram follow for view
          </Link>
        </Col>
        <Col className={css(style.links.wrapper, style.links.PPVLinkWrapper)}>
          <Link
            to="/nav/auth"
            onClick={props.onPPVClick}
            className={css(
              style.links.link,
              props.state.links.ppv ? style.links.active : ''
            )}
          >
            Pay per view
          </Link>
        </Col>
      </Row>
    </FormGroup>
    <FormGroup
      className={css(style.form.group)}
      style={{
        display:
          (props.state.upload.file &&
            attrAccept(props.state.upload.file, ATTR_ACCEPT_MEDIA)) ||
          Object.keys(props.state.links).filter(a => props.state.links[a])
            .length
            ? `none`
            : `block`
      }}
    >
      <Row className={css(style.form.row)}>
        <Col xs="12">
          <h4 className={css(style.sliders.h4)}>Display time</h4>
        </Col>
      </Row>
      <Row className={css(style.form.row)}>
        <Col xs="10" className={css(style.sliders.wrapper)}>
          <input
            type="range"
            min="1"
            max="100"
            value={props.state.displayTime}
            onChange={props.onDisplayTimeChange}
            className={css(style.sliders.slider)}
          />
        </Col>
        <Col xs="2" className={css(style.sliders.labelWrapper)}>
          <span className={css(style.sliders.label)}>
            {props.state.displayTime}h
          </span>
        </Col>
      </Row>
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Row className={css(style.form.row)}>
        <Col xs="12">
          <h4 className={css(style.sliders.h4)}>Validity period</h4>
        </Col>
      </Row>
      <Row className={css(style.form.row)}>
        <Col xs="5" className={css(style.sliders.wrapper)}>
          <input
            type="range"
            min="1"
            max="100"
            value={props.state.validity.hour}
            onChange={props.onValidityHourChange}
            className={css(style.sliders.slider)}
          />
        </Col>
        <Col xs="1" className={css(style.sliders.labelWrapper)}>
          <span className={css(style.sliders.label)}>
            {props.state.validity.hour}h
          </span>
        </Col>
        <Col xs="4" className={css(style.sliders.wrapper)}>
          <input
            type="range"
            min="0"
            max="4"
            value={props.state.validity.minute / 15}
            onChange={props.onValidityMinuteChange}
            className={css(style.sliders.slider)}
          />
        </Col>
        <Col xs="2" className={css(style.sliders.labelWrapper)}>
          <span className={css(style.sliders.label)}>
            {props.state.validity.minute}m
          </span>
        </Col>
      </Row>
    </FormGroup>

    <FormGroup className={css(style.form.group, style.views.box)}>
      <Row className={css(style.form.row)}>
        <Col xs="12">
          <h4 className={css(style.sliders.h4)}>Number of views</h4>
        </Col>
      </Row>
      <Row className={css(style.form.row)}>
        <Col xs="7" className={css(style.views.inputWrapper)}>
          <Input
            onChange={props.onViewsNumberChange}
            type="text"
            value={props.state.views.view ? props.state.views.number : ''}
            placeholder="Number of views"
            className={css(
              style.views.input,
              !props.state.views.view ? style.views.active : ''
            )}
            disabled={!props.state.views.view}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <input
            type="checkbox"
            id="views_checkbox"
            checked={props.state.views.view}
            onChange={props.onCheckboxClick}
            className={css(style.views.checkbox)}
          />
          <label htmlFor="views_checkbox" className={css(style.views.label)}>
            <span
              className={css(
                props.state.views.view
                  ? style.views.spanChecked
                  : style.views.span
              )}
            >
              No limit views
            </span>
          </label>
        </Col>
      </Row>
    </FormGroup>
    <Button type="submit" className={css(style.form.submitButton)}>
      Create link!
    </Button>
  </Form>
)

export default UploadForm
