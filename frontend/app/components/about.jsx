import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import github from '../../static/github.png'
import mail from '../../static/mail.png'
import location from '../../static/location.png'

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid className="view about">
        <Row>
          <Col lg={8} lgOffset={2} md={8} mdOffset={2} xs={10} xsOffset={1} className="text-center">
            <div>
              <h1>About</h1>
              <div className="about-copy">
                <p>
                  Cat Call is a web app that helps users search for adoptable cats by their location.
                  It provides important information regarding each cat and the contact information for the shelter so that you may move forward with the adoption process.
                  All data is provided by the Petfinder API.
                  It was built with Django, React, Redux, and React Bootstrap.
                </p>
              </div>
            </div>
            <div>
              <h1>Contact</h1>
                <div className="about-copy">
                  <div className='icon-image-container'>
                    <a href="https://github.com/Guin-/"><img className="icon-image inverted"src={github}/></a>
                    <p>@Guin-</p>
                  </div>
                  <div className='icon-image-container'>
                    <a href="mailto:angelikajarosz@gmail.com"><img className="icon-image inverted" src={mail}/></a>
                    <p>angelikajarosz@gmail.com</p>
                  </div>
                  <div className='icon-image-container'>
                    <img className="icon-image inverted" src={location}/>
                    <p>Brooklyn, NY</p>
                  </div>
                </div>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About;
