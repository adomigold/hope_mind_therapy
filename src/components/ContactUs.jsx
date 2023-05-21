import React from "react";

export default function ContactUs() {
    return (
        <>
            <section id="$" className="bg-secondary">
                <div className="container pt-5 pb-6 py-md-7">
                    <h2 className="text-center mb-5">Contact Us</h2>
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <form className="needs-validation mb-4 pb-2" noValidate="">
                                <div className="input-group mb-3"><i className="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                    <input className="form-control rounded" type="text" placeholder="Name" required="" />
                                </div>
                                <div className="input-group mb-3"><i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                    <input className="form-control rounded" type="email" placeholder="Email" required="" />
                                </div>
                                <div className="mb-3 pb-1">
                                    <textarea className="form-control" rows="4" placeholder="Message" required=""></textarea>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-sm-6">
                                        <button className="btn btn-primary d-block w-100" type="submit">Send Request</button>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5>We are located</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-0">Makumbusho Complex</li>
                                        <li className="mb-0">Dar es salaam</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Collaboration</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-0">+255 766 954 653</li>
                                        <li className="mb-0">hopemindtz@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-5 offset-xl-1 gallery" lg-uid="lg1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.932015228533!2d39.24460267564567!3d-6.778129093218831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4dad0cec0fc5%3A0x7705b8af4cf637d5!2sMakumbusho%20Complex!5e0!3m2!1sen!2stz!4v1684680525683!5m2!1sen!2stz" width="600" height="450" style={{ borderRadius: 10 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}