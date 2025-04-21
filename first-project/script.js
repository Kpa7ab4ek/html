// Добавляем обработчик события DOMContentLoaded, чтобы убедиться, что наш скрипт выполняется только после полной загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
    // Используем document.querySelectorAll для поиска всех элементов с классом 'lazy-load'
    let lazyImages = document.querySelectorAll(".lazy-load");
  
    // Проверяем, поддерживает ли браузер IntersectionObserver API
    if ("IntersectionObserver" in window) {
      // Создаем экземпляр IntersectionObserver
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        // Перебираем все записи (entries), которые передаются в функцию обратного вызова
        entries.forEach(function(entry) {
          // Проверяем, видим ли элемент (entry.isIntersecting)
          if (entry.isIntersecting) {
            // Получаем элемент, который стал видимым
            let lazyImage = entry.target;
            // Заменяем атрибут src на фактический URL изображения, хранящийся в data-src
            lazyImage.src = lazyImage.dataset.src;
            // Добавляем класс 'loaded' для запуска CSS-анимации
            lazyImage.classList.add("loaded");
            // Прекращаем наблюдение за этим элементом, так как он уже загружен
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      // Начинаем наблюдать за каждым элементом с классом 'lazy-load'
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  });
  