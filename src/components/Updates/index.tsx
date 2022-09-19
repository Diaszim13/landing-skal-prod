import './style.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export function Updates() {
  const [email, setEmail] = useState("");

  const notifySucess = () => toast.success('Enviado!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const notifyFailure = () => toast.error('Não Enviado!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const saveEmail = () => {
    fetch('http://g7miserski.pythonanywhere.com/users/', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => {
        if (res.status === 201) {
          notifySucess();
        }
        else {
          notifyFailure();
        }
      });
  }


  return (
    <section className="updates">
      <div>
        <h2>Fique ligado nas próximas <span className='text-effect'>atualizações</span>!</h2>
        <div className="send-email">
          <input type="email" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)} />
          <button className="btn btn-primary" onClick={saveEmail}>Enviar</button>
          <ToastContainer />
        </div>
      </div>
    </section>
  )
}