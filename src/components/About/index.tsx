import { Cards } from '../Cards';
import './style.css';

export function About() {
  return (
    <section className="about" id="about">
      <div>
        <h2>O que é a Skål?</h2>
        <p>A Skål é um sistema para venda e gestão de ingressos tokenizados na
          rede <a className='' href='https://polygon.technology/'>Polygon</a>, nosso objetivo é proporcionar maior conectividade entre
          artistas, fãs, organizadores e marcas criando experiências mais imersivas.
          Além de gerar vantagens exclusivas e royalties à medida que os
          <a href='https://www.binance.com/pt-BR/blog/nft/o-que-%C3%A9-nft-ticketing-ingresso-em-nft-e-como-isso-funciona-421499824684904022'> NFT's</a> se tornam cobráveis ​​e com maior valor de mercado.</p>
        <Cards />
      </div>
    </section>
  )
}