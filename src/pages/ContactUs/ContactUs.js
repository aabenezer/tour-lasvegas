import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './ContactUs.css';
import { validateForm } from '../../utilities/vallidateForm';
import NewsletterTab from '../../Components/NewsLetter/NewsLetter';
import myImage from '../../assets/img/f1.jpg';




const ContactUs = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('inJSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <div className='main-cont'>
            <div className='container'>
                <div>
                    <img className='form-image' src={myImage} alt="fl las vegas promo" />
                </div>

                <div className='form-main'>
                    <h1 className='main-text'>Get In Touch, <br /> <span className='main-text-one'>We’d love to hear from you.</span>
                    </h1>
                    <Formik

                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phoneNum: '',
                            email: '',
                            feedback: ''
                        }}
                        onSubmit={handleSubmit}
                        validate={validateForm}
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
                                <ErrorMessage name='firstName' >
                                    {(msg) => <p className=' text-danger'  >{msg}</p>}
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
                                        rows='8'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Col >
                                    <Button className='contact-button' type='submit' >
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className='newsletter'>
                <NewsletterTab />
            </div>

        </div>
    )
}

export default ContactUs;