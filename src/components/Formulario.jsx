import React from 'react'
import { useState } from "react"
import {Formik, Field, ErrorMessage, Form} from 'formik'
import {Container, Button, Modal, FormLabel, FormGroup} from 'react-bootstrap'
import * as Yup from 'yup'


export const Formulario = () => {

    const [showModal, setShowModal] = useState(false);

    const validation = Yup.object({
        nombre: Yup.string('Debe ingresar un nombre valido.')
                .required('Debe ingresar un nombre'),
        email: Yup.string().email('El email debe tener el formato user@mail.com')
                .required('Debe ingresar una direccion de email'),
        asunto: Yup.string('Debe ingresar un asunto valido.')
              .required('Debe ingresar un asunto'),
        mensaje: Yup.string('Debe ingresar un mensaje valido.')
              .required('Por favor, escriba un mensaje'),
    })

    return(
    <Container className="contenedor-formulario">
      <Formik
        initialValues={{
            nombre: '',
            email: '',
            asunto: '',
            mensaje: '',
            }}
        validationSchema={validation}
        onSubmit={(props) => {
            console.log(props)
            setShowModal(true)
            }}
        >
            <Form className="formulario">
        <h1>Contáctenos.</h1>
        <p>
          Contactenos sobre cualquier cosa relacionada a nuestra empresa o
          nuestros servicios.          
          <br></br>
          Haremos todo lo posible para darle una respuesta a la brevedad.
        </p>
            <FormGroup className="my-4" controlId="nombre">
                <FormLabel>Nombre</FormLabel>
                <Field 
                    className="form-control" 
                      name="nombre" 
                    type="text"
                />
                <ErrorMessage name='nombre' component='p' className='mensaje-error'/>
            </FormGroup>
            <FormGroup className="my-4" controlId="email">
                <FormLabel>Email</FormLabel>
                <Field 
                    className="form-control" 
                    name="email" 
                    type="email"
                />
                <ErrorMessage name='email' component='p' className='mensaje-error'/>
            </FormGroup>
            <FormGroup className="my-4" controlId="asunto">
                <FormLabel>Asunto</FormLabel>
                <Field 
                    className="form-control" 
                    name="asunto" 
                    type="text"
                />
                <ErrorMessage name='asunto' component='p' className='mensaje-error'/>
            </FormGroup>
            <FormGroup className="my-4" controlId="mensaje">
                <FormLabel>Mensaje</FormLabel>
                <Field 
                    className="form-control" 
                    as="textarea" 
                    rows="5" 
                    name="mensaje" 
                    type="text"
                    />
                <ErrorMessage name='mensaje' component='p' className='mensaje-error'/>
            </FormGroup>
            <div className="text-center">
            <Button type="submit" className="btn-enviar">Enviar</Button>
            </div>
            </Form>
      </Formik>

      <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      dialogClassName="modal-90w"
      aria-labelledby="form-enviado"
        >
      <Modal.Header closeButton>
        <Modal.Title id="form-enviado">
          Mensaje recibido correctamente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Gracias por dejarnos su mensaje. En breve nos contactaremos con usted.
        </p>
      </Modal.Body>
    </Modal>
    </Container>
    )
}