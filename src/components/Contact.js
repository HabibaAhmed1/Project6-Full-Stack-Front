import React from "react";

function Contact() {

    return (
        <section className="contact-section" id="contact">

            <div className="contact-container">

                {/* Left Side */}
                <div className="contact-info">

                    <span className="section-label">
                        CONTACT ME
                    </span>

                    <h2>
                        Let's Work <span>Together</span>
                    </h2>

                    <p>
                        Have a project in mind or want to
                        say hello? I'd love to hear from you.
                    </p>


                    <div className="contact-details">

                        <div className="contact-item">

                            <div className="contact-icon">
                                ✉
                            </div>

                            <div>
                                <span>Email</span>

                                <p>
                                    habibaahmad2255@gmail.com
                                </p>
                            </div>

                        </div>


                        <div className="contact-item">

                            <div className="contact-icon">
                                📍
                            </div>

                            <div>
                                <span>Location</span>

                                <p>
                                    Egypt
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Right Side */}
                <form className="contact-form">

                    <div className="form-group">

                        <label>
                            Your Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Your Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Message
                        </label>

                        <textarea
                            rows="5"
                            placeholder="Tell me about your project..."
                        ></textarea>

                    </div>


                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;