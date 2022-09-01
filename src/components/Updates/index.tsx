import './style.css';

export function Updates() {
  return (
    <section className="updates">
      <div>
        <h2>Fique ligado nas próximas <span className='text-effect'>atualizações</span>!</h2>
        <div className="send-email">
          <input type="email" placeholder="Digite seu email..."/>
          <button>Enviar</button>
        </div>
      </div>
    </section>
  )
}