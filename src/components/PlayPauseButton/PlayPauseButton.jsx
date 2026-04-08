// PlayPauseButton — botão simples de play / pause
// Recebe duas props:
//   isPlaying → booleano que indica o estado atual
//   onClick   → função chamada ao clicar

import './PlayPauseButton.css'

function PlayPauseButton({ isPlaying, onClick }) {
  return (
    <button
      className={`play-pause-btn ${isPlaying ? 'play-pause-btn--playing' : ''}`}
      onClick={onClick}
      aria-label={isPlaying ? 'Pausar' : 'Tocar'}
    >
      {/* O ícone muda conforme o estado */}
      {isPlaying ? '⏸' : '▶'}
    </button>
  )
}

export default PlayPauseButton
