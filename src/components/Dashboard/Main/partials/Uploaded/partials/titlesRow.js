import React from 'react'
import { css } from 'aphrodite'
import { Row } from 'reactstrap'

import Column from '../../../../../partials/Col'

import style from '../../../style'

export const UploadedListTitles = props => (
  <Row className={css(style.uploaded.titleWrapper)}>
    <Column
      xs="12"
      xl="auto"
      className={css(
        style.uploaded.titleBlock,
        style.uploaded.titleStatusBlock
      )}
    />
    <Column
      xs="12"
      xl="2"
      xxl="4"
      xxxl="4"
      xxxxl="4"
      className={css(style.uploaded.titleBlock)}
    >
      <span
        className={css(
          style.uploaded.titleBlockSpan,
          style.uploaded.titleNameBlock
        )}
      >
        Name
      </span>
    </Column>
    <Column
      xs="12"
      xl="2"
      xxl="1"
      xxxl="1"
      xxxxl="1"
      className={css(style.uploaded.titleBlock)}
    >
      <span className={css(style.uploaded.titleBlockSpan)}>Views</span>
    </Column>
    <Column
      xs="12"
      xl="2"
      xxl="2"
      xxxl="2"
      xxxxl="2"
      className={css(style.uploaded.titleBlock)}
    >
      <span className={css(style.uploaded.titleBlockSpan)}>Price</span>
    </Column>
    <Column
      xs="12"
      xl="2"
      xxl="1"
      xxxxl="1"
      className={css(style.uploaded.titleBlock)}
    >
      <span className={css(style.uploaded.titleBlockSpan)}>Earn</span>
    </Column>
    <Column
      xl="3"
      xxl={true}
      className={`${css(
        style.uploaded.titleBlock,
        style.grid['d-xxxxl-none']
      )} d-none d-xl-block`}
    >
      <span className={css(style.uploaded.titleBlockSpan)}>Action/Expire</span>
    </Column>
    <Column
      xl="3"
      xxl={true}
      className={`${css(
        style.uploaded.titleBlock,
        style.grid['d-xxxxl-block']
      )} d-xl-none`}
    >
      <span className={css(style.uploaded.titleBlockSpan)}>Time Left</span>
    </Column>
    <Column
      xl="3"
      xxl={true}
      className={`${css(
        style.uploaded.titleBlock,
        style.grid['d-xxxxl-block']
      )} d-xl-none`}
    >
      <span className={css(style.uploaded.titleBlockSpan)}>Actions</span>
    </Column>
  </Row>
)

export default UploadedListTitles
