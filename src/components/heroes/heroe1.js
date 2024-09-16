import './heroe1.css'
import Mascota from '../../pages/img/mascota.jpeg'

export default function Heroe1(){
    return(
        <div className='heroes'>
            <section className="hero">
                <div className="hero-text">
                    <h1>Todo para tu mascota</h1>
                    <p>Descubre nuestras ofertas y servicios exclusivos.</p>
                    <a href="#more" className="cta-button">Conoce más</a>
                </div>
                <div className="hero-image">
                    <img src={Mascota} alt=""/>
                </div>
                </section>
        </div>
)
}