import { Cards } from '../Cards';
import './style.css';

export function About() {
  return (
    <section className="about" id="about">
      <div>
        <h2>O que é a Skål?</h2>
        <p>A Skål é um sistema para venda e gestão de ingressos tokenizados na
          rede Polygon, nós queremos proporcionar maior conectividade entre
          artistas, fãs, organizadores e marcas criando experiências mais imersivas. Além de gerar vantagens exclusivas e royalties à medida que as NFTs se tornam cobráveis ​​e com maior valor de mercado.</p>
        <Cards />
      </div>
    </section>
  )
}