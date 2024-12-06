import "./footer.css";
const Footer = ()=> {
    return (
            <footer class= "nada">
                <div class="footer-container">
                    <div class="footer-section contact-details">
                        <h4>Detalles de Contacto</h4>
                        <p>Only Kitties</p>
                        <p>Dirección: Calle Falsa 123, Buenos Aires, Argentina</p>
                        <p>Teléfono: (123) 456-7890</p>
                        <p>Email: contacto@onlykitties.com</p>
                    </div>
                    <div class="footer-section useful-info">
                        <h4>Información Útil</h4>
                        <p>Puedes acercarte a nustro refugio en los siguientes Horarios:</p>
                        <p>Sábados de 9:00 AM a 3:00 PM</p>
                        <p>Donaciones</p>
                    </div>
                    <div class="footer-section social-links">
                        <h4>Síguenos en</h4>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="/facebook_logo_icon_147291.png" alt="Facebook"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                            <img src="/twitter_x_new_logo_x_rounded_icon_256078.png" alt="Twitter"/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <img src="/Instagram_icon-icons.com_66804.png" alt="Instagram"/>
                        </a>
                    </div>
                </div>
        </footer>    
    )
}
export default Footer