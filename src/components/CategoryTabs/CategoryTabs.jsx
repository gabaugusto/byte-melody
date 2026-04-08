// CategoryTabs — abas para filtrar sons por categoria
// Recebe três props:
//   categories     → array de strings com as categorias disponíveis
//   activeCategory → string com a categoria selecionada no momento
//   onSelect       → função chamada quando o usuário clica em uma aba

import './CategoryTabs.css'

function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <nav className="category-tabs">
      {/* Usamos .map() para criar um botão para cada categoria */}
      {categories.map((categoria) => (
        <button
          key={categoria}
          className={`category-tab ${activeCategory === categoria ? 'category-tab--active' : ''}`}
          onClick={() => onSelect(categoria)}
        >
          {categoria}
        </button>
      ))}
    </nav>
  )
}

export default CategoryTabs
