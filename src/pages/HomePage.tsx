import mascote from '../assets/mascote.png'
import Header from '../components/Header'
import '../styles/homepage.css'
import Fone from '../assets/fone.svg'
import Notebook from '../assets/notebook.svg'
import Smartphone from '../assets/smartphones.svg'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="mt-40 flex">
        <div className="w-3/5 p-6 text-center">
          <h1 className="text-7xl mt-30">
            Dê uma segunda vida aos seus eletrônicos!
          </h1>
          <p>
            Conectamos pessoas que querem doar eletrônicos em bom estado com
            quem precisa deles. Simples, gratuito e sustentável!
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-2xl hover:bg-green-800">
            Quero doar
          </button>
          <button className="mt-6 ml-4 bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-800">
            Quero adquirir
          </button>
        </div>
        <div className="p-6 w-150 ">
          <img src={mascote} alt="Eletrônicos" className=" p-1.5" />
        </div>
      </div>
      <div className="text-center w-min-fit bg-gray-100 p-10">
        <ul className="flex  justify-around gap-20">
          <li>
            <h3 className="text-green-700  text-3xl p-1.5 font-bold">2.5k+</h3>
            <p>Eletrônicos doados</p>
          </li>

          <li>
            <h3 className="text-green-700 text-3xl p-1.5 font-bold">2.5k+</h3>
            <p>Eletrônicos doados</p>
          </li>

          <li>
            <h3 className="text-green-700 text-3xl p-1.5 font-bold">2.5k+</h3>
            <p>Eletrônicos doados</p>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="titulo-padrao">
          <h3>Como funciona</h3>
          <span>É mais fácil que trocar a pilha do controle</span>
        </div>
        <div className="flex justify-around mt-15">
          <div className="caixas-como-funciona">
            <div>
              <h4 className="text-green-700">Para Doadores</h4>
              <span>
                Transforme seu "lixo eletrônico" no tesouro de alguém{' '}
              </span>
            </div>
            <ul>
              <li className="lista-como-funciona">
                <div className="numero-como-funciona bg-green-600">1</div>
                <div>
                  <h5>Cadastre seu eletrônico</h5>
                  <p>Tire umas fotos, descreva o estado e pronto!</p>
                </div>
              </li>
              <li className="lista-como-funciona">
                <div className="numero-como-funciona bg-green-600">1</div>
                <div>
                  <h5>Aguarde o match</h5>
                  <p>Alguém vai se interessar pelo seu item</p>
                </div>
              </li>
              <li className="lista-como-funciona">
                <div className="numero-como-funciona bg-green-600">1</div>
                <div>
                  <h5>Combine a entrega</h5>
                  <p>Vocês decidem como fazer a entrega</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="caixas-como-funciona">
            <div>
              <h4 className="text-blue-700">Para Adquirentes</h4>
              <span>
                Encontre o eletrônico dos seus sonhos de forma sustentável!
              </span>
            </div>
            <ul>
              <li className="lista-como-funciona">
                <div className="numero-como-funciona bg-blue-600">1</div>
                <div>
                  <h5>Explore os itens</h5>
                  <p>Navegue pelos eletrônicos disponíveis</p>
                </div>
              </li>
              <li className="lista-como-funciona">
                <div className="numero-como-funciona bg-blue-600">1</div>
                <div>
                  <h5>Demonstre interesse</h5>
                  <p>Clique em "Tenho interesse" no item</p>
                </div>
              </li>
              <li className="lista-como-funciona">
                <div className="numero-como-funciona bg-blue-600">1</div>
                <div>
                  <h5>Receba seu novo gadget</h5>
                  <p>Combine com o doador</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="titulo-padrao">
          <h3>Produtos disponiveis</h3>
          <span>Categorias mais populares</span>
        </div>
        <ul className="produtos flex justify-around mt-15 mb-20">
          <li className="produto">
            <img src={Fone} alt="" />
            <span>Fones</span>
            <p>Fones em ótimo estado, prontos para uso.</p>
            <button>Quero adquirir</button>
          </li>
          <li className="produto">
            <img src={Notebook} alt="" />
            <span>Fones</span>
            <p>Fones em ótimo estado, prontos para uso.</p>
            <button>Quero adquirir</button>
          </li>
          <li className="produto">
            <img src={Smartphone} alt="" />
            <span>Fones</span>
            <p>Fones em ótimo estado, prontos para uso.</p>
            <button>Quero adquirir</button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
