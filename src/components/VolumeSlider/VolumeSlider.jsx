// VolumeSlider — controle deslizante de volume global
// Recebe duas props:
//   volume   → número entre 0 e 1 (estado atual)
//   onChange → função chamada quando o usuário move o slider

import './VolumeSlider.css'

function VolumeSlider({ volume, onChange }) {
  // Convertemos 0-1 para 0-100 para exibir de forma amigável
  const porcentagem = Math.round(volume * 100)

  return (
    <div className="volume-slider">
      <label className="volume-slider__label">
        🔊 Volume
      </label>

      <div className="volume-slider__controles">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onChange(Number(e.target.value))}
          className="volume-slider__range"
        />
        {/* Mostra o valor atual em tempo real */}
        <span className="volume-slider__valor">{porcentagem}%</span>
      </div>
    </div>
  )
}

export default VolumeSlider
