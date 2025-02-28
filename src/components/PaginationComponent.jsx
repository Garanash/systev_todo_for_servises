import { useState } from 'react';
import Post from './Post';
import style from './PaginationComponent.module.css'

/**
 * Компонент для пагинации списка элементов
 * @param {Object} props - Свойства компонента
 * @param {Array} [props.items=[]] - Массив элементов для отображения
 * @param {number} [props.itemsPerPage=30] - Количество элементов на страницу
 */
const PaginationComponent = ({ items = [], itemsPerPage = 30 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // Проверка корректности входных данных
  if (!Array.isArray(items)) {
    console.error('Ошибка: items должен быть массивом');
    return <div className="error-message">Ошибка загрузки данных</div>;
  }

  /**
   * Получение элементов текущей страницы
   * @returns {Array} Элементы текущей страницы
   */
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Проверяем границы массива
    if (startIndex >= items.length || items.length === 0) {
      return [];
    }
    
    return items.slice(startIndex, endIndex);
  };

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(items.length / itemsPerPage) || 1;

  return (
    <div className={style.PaginationBlock}>
    <div className={style.paginationContainer}>
      <div className={style.itemsList}>
        {getCurrentPageItems().map((item, index) => (
          <div key={`${item.name}-${index}`} className="item">
            <Post {...item} />
          </div>
        ))}
      </div>
    </div>
      <div className="pagination-controls">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

// Значения по умолчанию
PaginationComponent.defaultProps = {
  items: [],
  itemsPerPage: 30,
};

export default PaginationComponent;