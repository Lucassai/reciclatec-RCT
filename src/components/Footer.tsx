import Logo from '../assets/Logo-footer.svg'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer>
      <div>
        <ul className="footer-ul">
          <li>
            <h4>
              <img src={Logo} alt="" />
            </h4>
            <span>
              Conectando pessoas através da sustentabilidade e tecnologia
            </span>
          </li>
          <li>
            <h4>Links Rápidos</h4>
            <ul>
              <li>Como funciona</li>
              <li>Doar</li>
              <li>Adquirir</li>
              <li>Contato</li>
            </ul>
          </li>
          <li>
            <h4>Suporte</h4>
            <ul>
              <li>FAQ</li>
              <li>Termos de Serviço</li>
              <li>Política de Privacidade</li>
              <li>Ajuda</li>
            </ul>
          </li>
          <li>
            <h4>Redes sociais</h4>
            <span>Siga-nos para novidades e dicas de sustentabilidade</span>
            <div></div>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2025 ReciclaTech. Todos os direitos reservados. Feito com 💚
          para um mundo melhor.
        </p>
      </div>
    </footer>
  )
}
