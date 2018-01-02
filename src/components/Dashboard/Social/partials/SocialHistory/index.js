import React from 'react'
import { css } from 'aphrodite'
import { Row, Col } from 'reactstrap'
/* eslint-disable no-unused-vars */
import { inject, observer } from 'mobx-react'
/* eslint-disable no-unused-vars */

import style from '../../style'

import ScrollArea from '../../../../partials/ScrollArea'

import SocialHistoryTitles from './partials/titleRow.js'
import SocialHistoryItem from './partials/listItem.js'

@inject('social')
@observer
class SocialHistory extends React.Component {
  componentWillMount () {
    this.props.social.fetch()
  }

  onDeleteItemClick (login, e) {
    e.preventDefault()
    this.props.social.delete({ login })
  }

  render () {
    return (
      <Row className={css(style.history.mainRow)}>
        <Col xs='12' className={css(style.history.titleWrapper)}>
          <SocialHistoryTitles />
        </Col>
        <Col xs='12' className={css(style.history.contentWrapper)}>
          <ScrollArea
            style={{ width: '100%', height: `100%` }}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
          >
            {this.props.social.data.data.data
              .slice()
              .map((item, index) => (
                <SocialHistoryItem
                  key={index}
                  item={item}
                  site={`instagram`}
                  onDeleteItemClick={this.onDeleteItemClick.bind(
                    this,
                    item.name
                  )}
                />
              ))}
          </ScrollArea>
        </Col>
      </Row>
    )
  }
}

export default SocialHistory
