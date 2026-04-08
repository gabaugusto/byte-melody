// Sobre — página de informações do Byte Melody
// Esta página apresenta informações sobre o aplicativo Byte Melody

import AppHeader from '../../components/AppHeader/AppHeader'
import './About.css'

function About({ onNavigate }) {
  return (
    <div className="about">
      <AppHeader 
        title="Byte Melody"
        subtitle="Sobre a aplicação"
        onNavigate={onNavigate}
        currentPage="about"
      />
      
      <div className="about__container">
        <section className="about__section">
          <h1 className="about__title">Sobre o Byte Melody</h1>
          
          <p className="about__text">
            O Byte Melody é um aplicativo de sons relaxantes e produtivos, 
            desenvolvido para ajudá-lo a criar o ambiente perfeito para 
            concentração, estudo, trabalho ou descanso.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__subtitle">Características</h2>
          
          <ul className="about__features">
            <li className="about__feature-item">
              <strong>Biblioteca de Sons:</strong> Explore uma variedade de sons naturais 
              e ambientes relaxantes
            </li>
            <li className="about__feature-item">
              <strong>Categorias:</strong> Sons organizados por categoria para fácil acesso
            </li>
            <li className="about__feature-item">
              <strong>Controle de Volume:</strong> Ajuste o volume de acordo com sua preferência
            </li>
            <li className="about__feature-item">
              <strong>Timer (Cronômetro):</strong> Defina um tempo limite para seus sons
            </li>
            <li className="about__feature-item">
              <strong>Interface Intuitiva:</strong> Design limpo e fácil de usar
            </li>
          </ul>
        </section>

        <section className="about__section">
          <h2 className="about__subtitle">Como Usar</h2>
          
          <ol className="about__steps">
            <li className="about__step-item">
              Selecione uma categoria ou visualize todos os sons disponíveis
            </li>
            <li className="about__step-item">
              Clique em qualquer som para reproduzi-lo
            </li>
            <li className="about__step-item">
              Ajuste o volume com o controle deslizante
            </li>
            <li className="about__step-item">
              Opcionalmente, defina um timer para pausar automaticamente após um tempo
            </li>
            <li className="about__step-item">
              Relaxe e aproveite o ambiente perfeito para sua atividade
            </li>
          </ol>
        </section>

        <section className="about__section">
          <h2 className="about__subtitle">Tecnologias</h2>
          
          <p className="about__text">
            Byte Melody foi desenvolvido com:
          </p>
          
          <ul className="about__tech-list">
            <li>React 19</li>
            <li>Vite</li>
            <li>HTML5 Audio API</li>
            <li>CSS3</li>
          </ul>
        </section>

        <section className="about__section about__section--last">
          <h2 className="about__subtitle">Contato e Suporte</h2>
          
          <p className="about__text">
            Tem dúvidas ou sugestões? Adoraríamos ouvir sua opinião para melhorar 
            continuamente o Byte Melody.
          </p>
          
          <p className="about__text">
            Versão: 1.0.0
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
