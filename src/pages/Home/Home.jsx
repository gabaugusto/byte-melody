// Home — página principal do SoundLab
// Esta página é responsável por:
//   1. Gerenciar os estados (categoria ativa, tempo selecionado, tempo restante, toast)
//   2. Compor todos os componentes juntos
//
// Observe como esta página não lida com detalhes de áudio —
// isso fica encapsulado no hook useAudioPlayer.

import { useState, useEffect } from 'react'

import AppHeader       from '../../components/AppHeader/AppHeader'
import CategoryTabs    from '../../components/CategoryTabs/CategoryTabs'
import SoundCard       from '../../components/SoundCard/SoundCard'
import VolumeSlider    from '../../components/VolumeSlider/VolumeSlider'
import TimerSelector   from '../../components/TimerSelector/TimerSelector'
import ActiveSoundPanel from '../../components/ActiveSoundPanel/ActiveSoundPanel'
import FeedbackToast   from '../../components/FeedbackToast/FeedbackToast'

import { useAudioPlayer } from '../../hooks/useAudioPlayer'
import { sounds, categories } from '../../data/sounds'

import './Home.css'

function Home({ onNavigate }) {
  // --- Hook de áudio ---
  // Delegamos toda a lógica de áudio para o hook personalizado
  const { currentSound, isPlaying, volume, togglePlay, changeVolume } = useAudioPlayer()

  // --- Estados locais da página ---

  // Categoria selecionada nas abas (começa com "todos")
  const [activeCategory, setActiveCategory] = useState('todos')

  // Tempo selecionado em minutos (null = nenhum)
  const [selectedTime, setSelectedTime] = useState(null)

  // Tempo restante em segundos para o countdown
  const [timeLeft, setTimeLeft] = useState(null)

  // Estado do toast de feedback { show: bool, message: string }
  const [toast, setToast] = useState({ show: false, message: '' })

  // --- Lista de sons filtrada ---
  // Se "todos" estiver ativo, mostra todos; senão, filtra pela categoria
  const soundsFiltrados =
    activeCategory === 'todos'
      ? sounds
      : sounds.filter((s) => s.category === activeCategory)

  // --- Funções de ação ---

  // Exibe o toast por 3 segundos e depois o esconde
  function mostrarToast(mensagem) {
    setToast({ show: true, message: mensagem })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  function handleTogglePlay(sound) {
    const estaRodandoEstesom = currentSound?.id === sound.id && isPlaying
    togglePlay(sound)
    if (estaRodandoEstesom) {
      mostrarToast(`⏸ ${sound.name} pausado`)
    } else {
      mostrarToast(`▶ ${sound.name} iniciado`)
    }
  }

  function handleSelectTime(minutos) {
    setSelectedTime(minutos)
    setTimeLeft(minutos * 60) // converte para segundos
    mostrarToast(`⏱ Timer configurado para ${minutos} min`)
  }

  // --- Efeito do countdown ---
  // Este useEffect roda novamente sempre que isPlaying ou timeLeft mudam.
  // Usamos setTimeout para decrementar o contador um segundo por vez.
  useEffect(() => {
    // Não inicia se não estiver tocando ou sem tempo configurado
    if (!isPlaying || timeLeft === null || timeLeft <= 0) return

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    // Cleanup: cancela o timeout se o efeito rodar novamente antes de completar
    return () => clearTimeout(timer)
  }, [isPlaying, timeLeft])

  // --- Renderização ---
  return (
    <div className="home">
      {/* 1. Cabeçalho com props de conteúdo */}
      <AppHeader
        title="SoundLab 🎵"
        subtitle="Experiências sonoras interativas"
        onNavigate={onNavigate}
        currentPage="home"
      />

      {/* 2. Abas de categorias */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* 3. Lista de sons usando .map() */}
      <section className="home__lista">
        {soundsFiltrados.map((sound) => (
          // Cada SoundCard recebe as informações do seu som específico
          <SoundCard
            key={sound.id}
            sound={sound}
            isPlaying={isPlaying && currentSound?.id === sound.id}
            onTogglePlay={handleTogglePlay}
          />
        ))}
      </section>

      {/* 4. Controles globais */}
      <div className="home__controles">
        <VolumeSlider volume={volume} onChange={changeVolume} />
        <TimerSelector selectedTime={selectedTime} onSelect={handleSelectTime} />
      </div>

      {/* 5. Painel de "tocando agora" — só aparece quando há um som selecionado */}
      {currentSound && (
        <ActiveSoundPanel
          currentSound={currentSound}
          isPlaying={isPlaying}
          volume={volume}
          timeLeft={timeLeft}
        />
      )}

      {/* 6. Toast de feedback — aparece e some automaticamente */}
      <FeedbackToast show={toast.show} message={toast.message} />
    </div>
  )
}

export default Home
