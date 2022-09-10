import './style.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Updates() {

  const notify = () => toast.success('Enviado!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  
  return (
    <section className="updates">
      <div>
        <h2>Fique ligado nas próximas <span className='text-effect'>atualizações</span>!</h2>
        <div className="send-email">
          <input type="email" placeholder="Digite seu email..." />
          <button className="btn btn-primary"onClick={notify}>Enviar</button>
          <ToastContainer />
        </div>
      </div>
    </section>
  )
}