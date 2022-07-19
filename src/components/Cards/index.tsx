import { Money, Ticket, Wallet } from 'phosphor-react'
import './style.css'

export function Cards() {
  return (
    <section className="cards">
        <div className="card">
          <Money size={40} weight="duotone" />
          <div>
            <h3>Compre NFT's em real</h3>
            <p>Nossa plataforma te fornece uma variedade de métodos de pagamento, sejam moedas fiduciárias ou criptomoedas.</p>
          </div>
        </div>
        <div className="card">
          <Ticket size={40} weight="duotone" />
          <div>
            <h3>Revenda os seus ingressos</h3>
            <p>Com a nossa plataforma você possui controle total do mercado secundário na venda dos seus ingressos, podendo ganhar royalties com a revenda dos mesmos.</p>
          </div>
        </div>
        <div className="card">
          <Wallet size={40} weight="duotone" />
          <div>
            <h3>Colecione os seus ingressos</h3>
            <p>Como todo e bom NFT os seus ingressos poderão ser colecionáveis agregando muito mais valor à suas festas.</p>
          </div>
        </div>
    </section>
  )
}