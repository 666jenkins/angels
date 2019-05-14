import React from 'react'

const Contact = () => {
    return (
        <div className='contactPage'>
            <div className='contactContent'>
                <h1 className='contactHeading'>Contact Us</h1>

                <div className="contactInfo">

                    <i className="far fa-envelope-open"></i>
                    <a href="http://m.gmail.com"><p className='cip'>taurunumangels@gmail.com</p></a>
                    <br />
                    <i className="fas fa-mobile-alt"></i>
                    <a href="tel:+381 61 29 89 890"><p className='cip'>+381 61 29 89 890</p></a>

                    <br />
                    <i className="fas fa-map-marker-alt"></i>
                    <p className='cip'>Osmog Marta br.17, Simanovci, Serbia</p>
                    <br />
                </div>
                <iframe className='map' title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.6053229042345!2d20.100493314920637!3d44.870328979098375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a44d52ed67b61%3A0xa238484c659ef77a!2sTaurunum+Angels+Kennel!5e0!3m2!1ssr!2srs!4v1557746909206!5m2!1ssr!2srs" frameborder="0" allowfullscreen></iframe>

                <div className='socialMedia'>
                    <a href="https://m.instagram.com/taurunum_angels/"><i id='instagram' className="fab fa-instagram"></i></a>
                    <a href="http://m.facebook.com/taurunumangels"><i id='facebook' className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
    )


}

export default Contact