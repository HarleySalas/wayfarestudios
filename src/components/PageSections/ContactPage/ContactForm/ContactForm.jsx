import React, { useState, useRef } from "react";
import "./ContactForm.scss";
import axios from "axios";

import Button from "../../../Button/Button";
import SectionTitle from "../../../SectionTitle/SectionTitle";

import { useFormValidate, validateContact, useObserver } from "../../../utils";

const INITIAL_STATE = {
  name: "",
  mail: "",
  company: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [sendFailure, setSendFailure] = useState(false);

  const formRef = useRef(null);
  const formAnimated = useObserver(formRef);

  const ctaRef = useRef(null);
  const ctaAnimated = useObserver(ctaRef);

  const sendMessage = () => {
    let { name, company, mail, subject, message } = values;
    let data = { name, company, mail, subject, message };

    axios
      .post("/.netlify/functions/contact", JSON.stringify(data))
      .then(response => {
        if (response.status !== 200) {
          setSendFailure(true);
          setSent(false);
        } else {
          setSent(true);
          setSendFailure(false);
        }
      });
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
  } = useFormValidate(INITIAL_STATE, validateContact, sendMessage);

  return (
    <div className="container contact__form__container">
      <SectionTitle
        description="Email Us"
        title="Get a free Proposal"
        centered
        marginSm
      />
      <div
        className={`contact__form-wrapper ${formAnimated && "active"}`}
        ref={formRef}
      >
        <form className="contact__form" onSubmit={handleSubmit} name="contact">
          {/* ROW ONE */}
          <div className="contact__form__row">
            {/* NAME FIELD */}
            <div className="contact__form__input-container contact__form__input-container--half">
              <input
                type="text"
                name="name"
                autoComplete="nope"
                className="contact__form__input"
                value={values.name}
                errors={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label
                htmlFor="name"
                aria-label="name"
                className={`contact__form__label ${values.name && "active"}`}
              >
                Name
              </label>
              {errors.name && (
                <span className="contact__form__error">{errors.name}</span>
              )}
            </div>
            {/* COMPANY FIELD */}
            <div className="contact__form__input-container contact__form__input-container--half">
              <input
                type="text"
                name="company"
                autoComplete="nope"
                className="contact__form__input"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label
                htmlFor="name"
                aria-label="name"
                className={`contact__form__label ${values.company && "active"}`}
              >
                Company
              </label>
            </div>
          </div>
          {/* ROW TWO */}
          <div className="contact__form__row">
            <div className="contact__form__input-container contact__form__input-container--half">
              <input
                type="text"
                name="mail"
                autoComplete="nope"
                className="contact__form__input"
                value={values.mail}
                errors={errors.mail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label
                htmlFor="mail"
                aria-label="email"
                className={`contact__form__label ${values.mail && "active"}`}
              >
                Contact Email
              </label>
              {errors.mail && (
                <span className="contact__form__error">{errors.mail}</span>
              )}
            </div>
            <div className="contact__form__input-container contact__form__input-container--half">
              <input
                type="text"
                name="subject"
                autoComplete="nope"
                className="contact__form__input"
                value={values.subject}
                errors={errors.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label
                htmlFor="name"
                aria-label="name"
                className={`contact__form__label ${values.subject && "active"}`}
              >
                Subject
              </label>
              {errors.subject && (
                <span className="contact__form__error">{errors.subject}</span>
              )}
            </div>
          </div>
          <div className="contact__form__row contact__form__row--textarea">
            <div className="contact__form__input-container">
              <textarea
                name="message"
                className={`contact__form__textarea ${values.message &&
                  "active"}`}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              <label
                htmlFor="message"
                aria-label="message"
                className={`contact__form__label ${values.message && "active"}`}
              >
                Tell us about your project
              </label>
              {errors.message && (
                <span
                  className={`contact__form__error ${values.message &&
                    "active"}`}
                >
                  {errors.message}
                </span>
              )}
            </div>
          </div>
          <div className="contact__form__response-wrapper">
            {sent && (
              <span className="contact__form__response contact__form__response--success">
                Thanks, we'll get back to you shortly.
              </span>
            )}
            {sendFailure && (
              <span className="contact__form__response contact__form__response--failure">
                There was an error processing your request.
              </span>
            )}
          </div>
          <div
            className={`contact__form__cta ${ctaAnimated && "active"}`}
            ref={ctaRef}
          >
            <Button btnText="Submit Form" btnStyle="primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
