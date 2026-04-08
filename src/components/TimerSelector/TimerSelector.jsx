// TimerSelector — seletor de tempo de duração
// Recebe duas props:
//   selectedTime → número em minutos selecionado (ou null se nenhum)
//   onSelect     → função chamada quando o usuário escolhe um tempo

import './TimerSelector.css'

// Opções de tempo disponíveis (em minutos)
const opcoesDeTempo = [5, 10, 15, 30, 60]

function TimerSelector({ selectedTime, onSelect }) {
  return (
    <div className="timer-selector">
      <h3 className="timer-selector__titulo">⏱ Duração</h3>

      <div className="timer-selector__opcoes">
        {/* .map() para criar um botão para cada opção de tempo */}
        {opcoesDeTempo.map((minutos) => (
          <button
            key={minutos}
            className={`timer-btn ${selectedTime === minutos ? 'timer-btn--selected' : ''}`}
            onClick={() => onSelect(minutos)}
          >
            {minutos} min
          </button>
        ))}
      </div>
    </div>
  )
}

export default TimerSelector
