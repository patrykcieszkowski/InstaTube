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
      viewNumberCheckbox: false
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
            <Row>
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
                <Row>
                  <span className={css(style.dropzone.titleSpan)}>
                    Add your file
                  </span>
                </Row>
                <Row>
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
        <FormGroup className={css(style.form.group, style.message.box)}>
          <Input placeholder="Message" className={css(style.message.input)} />
        </FormGroup>
        <FormGroup className={css(style.links.box)}>
          <Row>
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
        <FormGroup />

        <FormGroup className={css(style.views.box)}>
          <Row>
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
