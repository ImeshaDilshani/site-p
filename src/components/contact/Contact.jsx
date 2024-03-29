import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id='section'>
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <contact__container className="container grid">
            <div className="contact content">
                <h3 className="contact__title">Talk to me</h3>
            </div>

            <div className="contact__content"></div>
        </contact__container>
    </section>
  )
}

export default Contact