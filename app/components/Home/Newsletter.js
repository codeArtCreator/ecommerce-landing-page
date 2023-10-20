import React from 'react'

const Newsletter = () => {
    return (
        <div className="modal" data-modal>

            <div className="modal-close-overlay" data-modal-overlay></div>

            <div className="modal-content">

                <button className="modal-close-btn" data-modal-close>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div className="newsletter-img">
                    <img src="https://res.cloudinary.com/dq0ns677p/image/upload/v1697803699/ecommerce/images/newsletter_amcgsb.png" alt="subscribe newsletter" width="400" height="400" />
                </div>

                <div className="newsletter">

                    <form action="#">

                        <div className="newsletter-header">

                            <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                            <p className="newsletter-desc">
                                Subscribe the <b>Ecommerce</b> to get latest products and discount update.
                            </p>

                        </div>

                        <input type="email" name="email" className="email-field" placeholder="Email Address" required />

                        <button type="submit" className="btn-newsletter">Subscribe</button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Newsletter