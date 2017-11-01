import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'

import style from './style'

export class UploadForm extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [],
      viewNumberCheckbox: false,
      validity: {
        hour: 1,
        minute: 0
      },
      displayTime: 1
    }
  }

  onDrop(files) {
    this.setState({
      ...this.state,
      files
    })
  }

  toggleCheckbox() {
    this.setState({
      ...this.state,
      viewNumberCheckbox: !this.state.viewNumberCheckbox
    })
  }

  onValidityChange(type, e) {
    this.setState({
      ...this.state,
      validity: {
        ...this.state.validity,
        [type]: type === 'hour' ? e.target.value : e.target.value * 15
      }
    })
  }

  onDisplayTimeChange(e) {
    this.setState({
      ...this.state,
      displayTime: e.target.value
    })
  }

  render() {
    return (
      <Form className={css(style.form.form)}>
        <FormGroup className={css(style.form.group)}>
          <Dropzone
            onDrop={this.onDrop.bind(this)}
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
        <FormGroup className={css(style.form.group)}>
          <Row className={css(style.errors.fileErrorWrapper)}>
            <Col className={css(style.errors.fileErrorBox)} xs='10'>
              <span className={css(style.errors.fileErrorSpan)}>File is too large</span>
            </Col>
            <Col>
              <span className={css(style.errors.fileErrorCloseButton)}>
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
          <Input placeholder="Message" className={css(style.message.input)} />
        </FormGroup>
        <FormGroup className={css(style.form.group, style.links.box)}>
          <Row className={css(style.form.row)}>
            <Col
              xs="7"
              className={css(
                style.links.wrapper,
                style.links.instagramLinkWrapper
              )}
            >
              <Link to="/login" className={css(style.links.link)}>
                Instagram follow for view
              </Link>
            </Col>
            <Col
              className={css(style.links.wrapper, style.links.PPVLinkWrapper)}
            >
              <Link to="/login" className={css(style.links.link)}>
                Pay per view
              </Link>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className={css(style.form.group)}>
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
                value={this.state.displayTime}
                onChange={this.onDisplayTimeChange.bind(this)}
                className={css(style.sliders.slider)}
              />
            </Col>
            <Col xs="2" className={css(style.sliders.labelWrapper)}>
              <span className={css(style.sliders.label)}>
                {this.state.displayTime}h
              </span>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className={css(style.form.group)}>
          <Row className={css(style.form.row)}>
            <Col xs="12">
              <h4 className={css(style.sliders.h4)} >Validity period</h4>
            </Col>
          </Row>
          <Row className={css(style.form.row)}>
            <Col xs="5" className={css(style.sliders.wrapper)}>
              <input
                type="range"
                min="1"
                max="100"
                value={this.state.validity.hour}
                onChange={this.onValidityChange.bind(this, 'hour')}
                className={css(style.sliders.slider)}
              />
            </Col>
            <Col xs="1" className={css(style.sliders.labelWrapper)}>
              <span className={css(style.sliders.label)}>
                {this.state.validity.hour}h
              </span>
            </Col>
            <Col xs="4" className={css(style.sliders.wrapper)}>
              <input
                type="range"
                min="0"
                max="4"
                value={this.state.validity.minute / 15}
                onChange={this.onValidityChange.bind(this, 'minute')}
                className={css(style.sliders.slider)}
              />
            </Col>
            <Col xs="2" className={css(style.sliders.labelWrapper)}>
              <span className={css(style.sliders.label)}>
                {this.state.validity.minute}m
              </span>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className={css(style.form.group, style.views.box)}>
          <Row className={css(style.form.row)}>
            <Col xs="7" className={css(style.views.inputWrapper)}>
              <Input
                type="number"
                placeholder="Number of views"
                className={css(style.views.input)}
                disabled={!this.state.viewNumberCheckbox}
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <input
                type="checkbox"
                id="views_checkbox"
                checked={this.state.viewNumberCheckbox}
                onChange={this.toggleCheckbox.bind(this)}
                className={css(style.views.checkbox)}
              />
              <label htmlFor="views_checkbox">
                <span
                  className={css(
                    this.state.viewNumberCheckbox
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
  }
}

export default UploadForm
