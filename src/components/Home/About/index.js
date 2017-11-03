import React from 'react'
import { css } from 'aphrodite'
import { Container, Row, Col } from 'reactstrap'

import { Scrollbars } from 'react-custom-scrollbars'

import SignupInfo from '../partials/SignupInfo'
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
        <Row className={css(style.wrapper)}>
          <Col xl="5" className={`d-none d-xl-flex align-items-start ${css(style.sider.wrapper)}`}>
            <Row className={``}>
              <SignupInfo />
            </Row>
          </Col>
          <Col>
            <Scrollbars
              style={{ width: '100%', height: `100%` }}
              renderView={props => <Col {...props} />}
            >
              {aboutUsList.map((item, index) => (
                <Row>
                  <Col xs="12" className={css(style.main.header)}>
                    <h3 className={css(style.main.h3)}>{item.name}</h3>
                  </Col>
                  <Col xs="12">
                    <p className={css(style.main.p)}>{item.body}</p>
                  </Col>
                </Row>
              ))}
            </Scrollbars>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default About
