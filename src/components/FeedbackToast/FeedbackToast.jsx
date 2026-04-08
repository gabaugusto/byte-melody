// FeedbackToast — mensagem temporária de feedback para o usuário
// Recebe duas props:
//   show    → booleano que controla se a mensagem aparece
//   message → texto da mensagem a exibir

// Técnica importante: renderização condicional com "early return"
// Quando show é false, o componente não renderiza nada (retorna null)

import './FeedbackToast.css'

function FeedbackToast({ show, message }) {
  // Se show for false, não renderiza nada na tela
  if (!show) return null

  return (
    <div className="feedback-toast">
      {message}
    </div>
  )
}

export default FeedbackToast
