'use client'
import React, { useState, useEffect } from 'react'
import "./Contact.scss"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import Stairs from '../../components/animations/transition/Stairs';

interface FormData {
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

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
    [key: string]: string | undefined;
}

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const form = React.useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<FormData>({
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
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: checked,
        }));
    };

    const sendEmail = () => {
        emailjs.send('service_5y7rll1', 'template_3xzot3e', formData, '4nyzjigYhVGMwCX0W')
            .then((response) => {
                console.log('Email sent:', response);
                alert("Thank you for reaching out! We have received your project proposal and will be in contact with you shortly to discuss the details. 📩🤝");
            })
            .catch((error) => {
                console.error('Email error:', error);
                alert("An error occurred while sending your message. Please try again later.");
            });

        setFormData({
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
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form fields
        const errors: FormErrors = {};
        if (formData.name.trim() === "") {
            errors.name = "Name is required";
        }
        if (formData.email.trim() === "") {
            errors.email = "Email is required";
        }
        if (formData.message.trim() === "") {
            errors.message = "Message is required";
        }
        if (Object.keys(errors).length === 0) {
            sendEmail();
            setFormErrors({}); // Clear form errors on successful submission
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <motion.main
            className='contact'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}>
            <section className="contact__container" >
                <div className="contact__top">
                    <p>WE&apos;RE CUREENTLY ACCEPTING PROJECTS!</p>
                </div>
                <form onSubmit={handleSubmit} ref={form}>
                    <div className="coco__left">
                        <div className="contact__lower">
                            <div className="contact__lower_form" >
                                <div className="conlo__container">
                                    <div className="conlocon__input">
                                        <p> My Name Is</p>
                                        <input type="text" name="name" className={`contact__form-input ${formErrors.name ? "error" : ""}`} placeholder="Walter White" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />{formErrors.name && <p className="error-message">{formErrors.name}</p>}
                                    </div>
                                    <div className="conlocon__input">
                                        <p>
                                            Email me @
                                        </p>
                                        <input type="email" name="email" className={`contact__form-input ${formErrors.email ? "error" : ""}`} placeholder="heisenberg@graymatter.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                                    </div>
                                    <div className="conlocon__input">
                                        <p>
                                            I&apos;d like to say
                                        </p>
                                        <textarea name="message" cols={30} rows={1} className={`contact__form-input ${formErrors.message ? "error" : ""}`} placeholder="Jesse, we need to cook." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
                                        {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                                        <div className="contact__form-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="coco__right">
                        <div className="cocori__container">
                            <p> My project is about</p>
                            <div className="cocori__options">
                                <label className={formData.websiteDesign ? "cocori__option checked" : "cocori__option"}>
                                    <input type="checkbox" name="websiteDesign" checked={formData.websiteDesign} onChange={handleCheckboxChange} />
                                    <span>Website Design</span>
                                </label>
                                <label className={formData.websiteDevelopment ? "cocori__option checked" : "cocori__option"}>
                                    <input
                                        type="checkbox"
                                        name="websiteDevelopment"
                                        checked={formData.websiteDevelopment}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>Website Development</span>
                                </label>
                                <label className={formData.branding ? "cocori__option checked" : "cocori__option"}>
                                    <input
                                        type="checkbox"
                                        name="branding"
                                        checked={formData.branding}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>Branding</span>
                                </label>
                                <label className={formData.mobileApp ? "cocori__option checked" : "cocori__option"}>
                                    <input
                                        type="checkbox"
                                        name="mobileApp"
                                        checked={formData.mobileApp}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>Mobile App</span>
                                </label>
                                <label className={formData.uiix ? "cocori__option checked" : "cocori__option"}>
                                    <input
                                        type="checkbox"
                                        name="uiix"
                                        checked={formData.uiix}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>UI/UX</span>
                                </label>
                                <label className={formData.marketingSeo ? "cocori__option checked" : "cocori__option"}>
                                    <input
                                        type="checkbox"
                                        name="marketingSeo"
                                        checked={formData.marketingSeo}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>Marketing & SEO</span>
                                </label>
                                <label className={formData.onlineShop ? "cocori__option checked" : "cocori__option"}>
                                    <input
                                        type="checkbox"
                                        name="onlineShop"
                                        checked={formData.onlineShop}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span>Online Shop</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form__button">
                        <button type="submit">
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </section>
        </motion.main>
    )
}

export default Contact