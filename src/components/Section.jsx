import React from 'react'
import Slide from 'react-reveal/Slide';
import {Container, Card, Button} from 'react-bootstrap'

export const Section = () => {
    return(
        <section>
        <Container>
            <h2 className="text-center text-white mb-5">Nuestros pilares</h2>
            <Slide left>
                <Card style={{ width: '100%' }}>
                    <Card.Body  className="text-center text-white">
                        <Card.Title className="text-center"><i class="fas fa-microscope"></i></Card.Title>
                        <Card.Subtitle>Ciencia</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Slide>
            <Slide right>
                <Card style={{ width: '100%' }}>
                    <Card.Body  className="text-center text-white">
                        <Card.Title className="text-center"><i class="fas fa-microchip"></i></Card.Title>
                        <Card.Subtitle>Tecnología</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Slide>
            <Slide left>
                <Card style={{ width: '100%' }}>
                    <Card.Body  className="text-center text-white">
                        <Card.Title className="text-center"><i class="fas fa-lightbulb"></i></Card.Title>
                        <Card.Subtitle>Innovacion</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Slide>
        </Container>
        </section>
    )
}