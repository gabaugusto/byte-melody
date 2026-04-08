// SoundCard — cartão que representa um som disponível
// Recebe três props:
//   sound         → objeto com as informações do som (name, emoji, category, src)
//   isPlaying     → booleano: true se ESTE som está tocando agora
//   onTogglePlay  → função chamada ao clicar em play/pause

// Perceba que SoundCard usa o componente PlayPauseButton dentro de si —
// isso é composição de componentes!

import PlayPauseButton from '../PlayPauseButton/PlayPauseButton'
import './SoundCard.css'

function SoundCard({ sound, isPlaying, onTogglePlay }) {
  return (
    <div className={`sound-card ${isPlaying ? 'sound-card--playing' : ''}`}>
      <span className="sound-card__emoji">{sound.emoji}</span>

      <div className="sound-card__info">
        <h3 className="sound-card__name">{sound.name}</h3>
        <span className="sound-card__category">{sound.category}</span>
      </div>

      <div className="sound-card__status">
        {isPlaying && <span className="sound-card__badge">tocando</span>}
      </div>

      {/* Reutilizamos PlayPauseButton passando o estado e a ação como props */}
      <PlayPauseButton
        isPlaying={isPlaying}
        onClick={() => onTogglePlay(sound)}
      />
    </div>
  )
}

export default SoundCard
