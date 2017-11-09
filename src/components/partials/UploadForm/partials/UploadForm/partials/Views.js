import React from 'react'
import { css } from 'aphrodite'
import { FormGroup, Col, Row, Input } from 'reactstrap'

import style from '../../../style'

const RenderViews = props => (
  <FormGroup className={css(style.form.group, style.views.box)}>
    <Row className={css(style.form.row)}>
      <Col xs='12'>
        <h4 className={css(style.sliders.h4)}>Number of views</h4>
      </Col>
    </Row>
    <Row className={css(style.form.row)}>
      <Col xs='7' className={css(style.views.inputWrapper)}>
        <Input
          onChange={props.onViewsNumberChange}
          type='text'
          value={!props.state.views.view ? props.state.views.number : ''}
          placeholder='Number of views'
          className={css(
            style.views.input,
            !props.state.views.view ? style.views.active : ''
          )}
          disabled={props.state.views.view}
        />
      </Col>
      <Col className='d-flex flex-column justify-content-center'>
        <input
          type='checkbox'
          id='views_checkbox'
          checked={props.state.views.view}
          onChange={props.onCheckboxClick}
          className={css(style.views.checkbox)}
        />
        <label htmlFor='views_checkbox' className={css(style.views.label)}>
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
)

export default RenderViews
