import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/Erick.lozano.281/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
        
            <a href='https://www.instagram.com/ericklg281/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        
        <strong>Desarrollado por Alura-Erick</strong>
    </footer>
}

export default Footer