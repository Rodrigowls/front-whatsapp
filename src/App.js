import './App.css';
import image from './assets/profissao-programador_f801491a16284b568c89f23520ea8679.jpg';
import SendMessageIcon from './assets/send_4febd72a71c34f3c9c99e5536d44887e.png'

function App() {
  return (
    <div className="container">
      <div className='back-ground'></div>
      <div className='chat-container'>

        <div className='chat-contacts'>
          <div className='chat-options'></div>
          <div className='chat-item'>
            <img src={image} className='image-profile' alt='' />
            <div className='title-chat-container'>
              <span className='title-message'>Networking Profissão Programador</span>
              <span className='last-message'>Rodrigo: Bom dia!</span>
            </div>
          </div>
        </div>
      
        <div className='chat-messages'>
        <div className='chat-options'>
        <div className='chat-item'>
            <img src={image} className='image-profile' alt='' />
            <div className='title-chat-container'>
              <span className='title-message'>Networking Profissão Programador</span>
              <span className='last-message'>Rodrigo, Paulo, Sebastião, Jesus</span>
            </div>
          </div>
        </div>

          <div className='chat-messages-area'>

          </div>

          <div className='chat-input-area'>
            <input className='chat-input' placeholder='Mensagem'/>
            <img src={SendMessageIcon} alt='' className='send-message-icon' />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
