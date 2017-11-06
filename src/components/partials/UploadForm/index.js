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
      upload: {
        file: null,
        error: false
      },
      validity: {
        hour: 1,
        minute: 0
      },
      displayTime: 1,
      links: {
        instagram: false,
        ppv: false
      },
      views: {
        view: false,
        number: 0
      }
    }
  }

  onDropRejected(files) {
    this.setState({
      ...this.state,
      upload: {
        file: null,
        error: true
      }
    })
  }

  onDropAccepted(files) {
    this.setState({
      ...this.state,
      upload: {
        file: files[0],
        error: false
      }
    })
  }

  toggleCheckbox() {
    this.setState({
      ...this.state,
      views: {
        ...this.state.views,
        view: !this.state.views.view
      }
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

  onLinkClick(type, e) {
    const links = JSON.parse(JSON.stringify(this.state.links))
    Object.keys(links).forEach(a => (links[a] = !!(a === type && !links[a])))

    this.setState({
      ...this.state,
      links
    })
  }

  onViewsNumberChange(e) {
    if (!e.target.value.match(/^\d+$/)) {
      return e.preventDefault()
    }

    this.setState({
      ...this.state,
      views: {
        ...this.state.views,
        number: e.target.value
      }
    })
  }

  render() {
    return (
      <Form className={css(style.form.form)}>
        <FormGroup className={css(style.form.group)}>
          <Dropzone
            maxSize={20000000}
            multiple={false}
            onDropRejected={this.onDropRejected.bind(this)}
            onDropAccepted={this.onDropAccepted.bind(this)}
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
          style={{ display: !this.state.upload.error ? `none` : `block` }}
        >
          <Row className={css(style.errors.fileErrorWrapper)}>
            <Col className={css(style.errors.fileErrorBox)} xs="10">
              <span className={css(style.errors.fileErrorSpan)}>
                File is too large
              </span>
            </Col>
            <Col>
              <span
                className={css(style.errors.fileErrorCloseButton)}
                onClick={() =>
                  this.setState({ ...this.state, upload: { error: false } })}
              >
                <i
                  className={`la la-close ${css(
                    style.errors.fileErrorCloseIcon
                  )}`}
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
              <Link
                to="/login"
                onClick={this.onLinkClick.bind(this, 'instagram')}
                className={css(
                  style.links.link,
                  this.state.links.instagram ? style.links.active : ''
                )}
              >
                Instagram follow for view
              </Link>
            </Col>
            <Col
              className={css(style.links.wrapper, style.links.PPVLinkWrapper)}
            >
              <Link
                to="/login"
                onClick={this.onLinkClick.bind(this, 'ppv')}
                className={css(
                  style.links.link,
                  this.state.links.ppv ? style.links.active : ''
                )}
              >
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

        <FormGroup
          className={css(style.form.group)}
          style={{
            display: Object.keys(this.state.links).filter(
              a => this.state.links[a]
            ).length
              ? `none`
              : `block`
          }}
        >
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
            <Col xs="12">
              <h4 className={css(style.sliders.h4)}>Number of views</h4>
            </Col>
          </Row>
          <Row className={css(style.form.row)}>
            <Col xs="7" className={css(style.views.inputWrapper)}>
              <Input
                onChange={this.onViewsNumberChange.bind(this)}
                type="text"
                value={this.state.views.view ? this.state.views.number : ''}
                placeholder="Number of views"
                className={css(
                  style.views.input,
                  !this.state.views.view ? style.views.active : ''
                )}
                disabled={!this.state.views.view}
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <input
                type="checkbox"
                id="views_checkbox"
                checked={this.state.views.view}
                onChange={this.toggleCheckbox.bind(this)}
                className={css(style.views.checkbox)}
              />
              <label
                htmlFor="views_checkbox"
                className={css(style.views.label)}
              >
                <span
                  className={css(
                    this.state.views.view
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
