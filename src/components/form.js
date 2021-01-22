import React from 'react'
import style from '../styles/form.module.css'
const Form = () => {
  return (
    <>
      <div className={style.formcontainer}>
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/mvovlgwn"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name" className={style.controllabel}>
            Your Name
          </label>
          <input
            type="text"
            name="full-name"
            className={style.formcontrol}
            id="full-name"
            aria-label="full name"
            placeholder="Enter your name here..."
            required
          />
          <label htmlFor="email-address" className={style.controllabel}>
            Your Email Address
          </label>
          <input
            type="email"
            aria-label="email address"
            name="_replyto"
            id="email-address"
            className={style.formcontrol}
            placeholder="email@domain.com"
            required
          />
          <label htmlFor="message" className={style.controllabel}>
            Your Message
          </label>
          <textarea
            rows="3"
            name="message"
            aria-label="Message"
            id="message"
            className={style.formcontrol}
            placeholder="Enter your message here..."
            required
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            aria-label="Subject"
            className={style.formcontrol}
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <button type="submit" aria-label="Send" className={style.contactbutton}>
          Send
        </button>
      </form>
    </div>
    </>
  )
}

export default Form
