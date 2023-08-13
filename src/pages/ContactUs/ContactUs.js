import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './ContactUs.css';
// import { validateContactForm } from '../utils/validateContactForm';


const ContactUs = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('inJSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <div className='container'>
            <div className='container-content'>
                There is no doubt that web forms play an integral role in our web site or applications. By default, they provide a useful set of elements and features — from legends and fieldsets to native validation and states — but they only get us so far when we start to consider the peculiarities of using them. For example, how can we manipulate the state of a form? How about different forms of validation? Even hooking a form up to post submissions is a daunting effort at times.
        
        
        
        
        
        </div>
        <div className='form-main'>
        <Formik

            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                feedback: ''
            }}
            onSubmit={handleSubmit}
            // validate={validateContactForm}
        >

            <Form className='form'>
                <FormGroup>
                    <Label htmlFor='firstName' className='form-label'>
                        First Name
                    </Label>
                   
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                        
                    
                </FormGroup>


                <FormGroup row>
                            <Label htmlFor='lastName' className='form-label' >
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>


                <FormGroup row>
                            <Label htmlFor='phoneNum' className='form-label'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field
                            name='phoneNum'
                            placeholder='Phone'
                            className='form-control'
                        />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>


                <FormGroup row>
                            <Label htmlFor='email' className='form-label'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field
                            name='email'
                            placeholder='Email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>


                


                <FormGroup row>
                            <Label htmlFor='feedback' className='form-label'>
                        Your Feedback
                    </Label>
                    <Col md='10'>
                        <Field
                            name='feedback'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>


                <FormGroup row>
                    <Col >
                        <Button type='submit' >
                            Send Feedback
                        </Button>
                    </Col>

                </FormGroup>
            </Form>
        </Formik>
        </div>
        </div>
    )
}

export default ContactUs;