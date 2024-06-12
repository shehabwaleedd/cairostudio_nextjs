'use client'
import React from 'react';
import styles from "./page.module.scss";
import emailjs from '@emailjs/browser';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';

interface FormValues {
    name: string;
    email: string;
    message: string;
    websiteDesign: boolean;
    websiteDevelopment: boolean;
    branding: boolean;
    mobileApp: boolean;
    uiix: boolean;
    marketingSeo: boolean;
    onlineShop: boolean;
    [key: string]: boolean | string;

}

const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
    websiteDesign: false,
    websiteDevelopment: false,
    branding: false,
    mobileApp: false,
    uiix: false,
    marketingSeo: false,
    onlineShop: false,
};

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const Contact: React.FC = () => {


    const sendEmail = (formData: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
        const emailData: Record<string, unknown> = { ...formData };
        emailjs.send('service_5y7rll1', 'template_3xzot3e', emailData, '4nyzjigYhVGMwCX0W')
            .then((response) => {
                console.log('Email sent:', response);
                toast.success("Thank you for reaching out! We have received your project proposal and will be in contact with you shortly to discuss the details. 📩🤝");
                resetForm();
            })
            .catch((error) => {
                console.error('Email error:', error);
                toast.error("An error occurred while sending your message. Please try again later.");
            });
    };

    return (
        <main className={styles.contact}>
            <section className={styles.contact__container} >
                <div className={styles.contact__top}>
                    <p>WE&apos;RE CURRENTLY ACCEPTING PROJECTS!</p>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        sendEmail(values, actions);
                    }}
                >
                    {({ values, isSubmitting }) => (
                        <Form>
                            <div className={styles.coco__left}>
                                <div className={styles.contact__lower}>
                                    <div className={styles.contact__lower_form}>
                                        <div className={styles.conlo__container}>
                                            <div className={styles.conlocon__input}>
                                                <p>My Name Is</p>
                                                <Field type="text" name="name" placeholder="Walter White" />
                                            </div>
                                            <div className={styles.conlocon__input}>
                                                <p>Email me @</p>
                                                <Field type="email" name="email" placeholder="heisenberg@graymatter.com" />
                                            </div>
                                            <div className={styles.conlocon__input}>
                                                <p>I&apos;d like to say</p>
                                                <Field as="textarea" name="message" cols={30} rows={1} placeholder="Jesse, we need to cook." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.coco__right}>
                                <div className={styles.cocori__container}>
                                    <p>My project is about</p>
                                    <div className={styles.cocori__options}>
                                        {['websiteDesign', 'websiteDevelopment', 'branding', 'mobileApp', 'uiix', 'marketingSeo', 'onlineShop'].map((service) => (
                                            <label key={service} className={`${styles.cocori__option} ${values[service] ? styles.checked : ''}`}>
                                                <Field type="checkbox" name={service} />
                                                <span>{service.replace(/([A-Z])/g, ' $1').trim()}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.form__button}>
                                <button type="submit" disabled={isSubmitting}>
                                    <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </section>
        </main>
    );
};

export default Contact;
