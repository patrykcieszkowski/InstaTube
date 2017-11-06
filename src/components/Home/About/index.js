import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import Column from '../../partials/Col'
import SidebarHeader from '../../partials/SidebarHeader'
import ScrollArea from '../../partials/ScrollArea'
import style from './style'

const aboutUsList = [
  {
    name: 'Lorem Ipsum',
    body:
      'jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
  },
  {
    name: 'Lorem Ipsum',
    body:
      'jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
  },
  {
    name: 'Lorem Ipsum',
    body:
      'jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
  },
  {
    name: 'Lorem Ipsum',
    body:
      'jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker'
  }
]

export class About extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className={css(style.main.wrapper)}>
          <Column
            xl="auto"
            xxxxl="3"
            className={`d-none d-xl-flex align-items-center ${css(
              style.sider.wrapper
            )}`}
          >
            <Row className={`${css(style.sider.box)}`} />
          </Column>
          <Col className={`${css(style.content.wrapper)}`}>
            <Row>
              <SidebarHeader
                title={`About us`}
                md={false}
                paddingTop
                paddingBottom
              />
            </Row>

            <ScrollArea
              style={{
                width: `100%`,
                height: `calc(100% - 80px)`,
                overflowX: `hidden`
              }}
              autoHide={false}
            >
              {aboutUsList.map((item, index) => (
                <Row className={css(style.content.box)} key={index}>
                  <Col xs="12" className={css(style.content.header)}>
                    <h3 className={css(style.content.h3)}>{item.name}</h3>
                  </Col>
                  <Col xs="12" className={css(style.content.textBox)}>
                    <p className={css(style.content.p)}>{item.body}</p>
                  </Col>
                </Row>
              ))}
            </ScrollArea>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default About
