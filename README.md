# Сталь — интерактивная презентация

Готовая браузерная презентация из 10 сцен для выступления Алишера и Жанибека. Проект не требует сборки, установки библиотек или PowerPoint: начальный файл — `index.html`.

## Запуск

Откройте `index.html` в Chrome или Edge. Для показа на интерактивной доске разместите файлы на статическом хостинге и откройте опубликованную ссылку в браузере доски.

В проекте используются системные шрифты и обычные HTML, CSS и JavaScript. Фотографии загружаются из Unsplash и Shopify Burst; для них нужен интернет. Если фото недоступно, остаётся графический фон сцены.

## Управление

- Кнопки «Назад» и «Далее», а также касание левой или правой половины сцены.
- Свайп влево или вправо; клавиши ← и →, Page Up и Page Down.
- «Экран» включает полноэкранный режим. На поддерживаемом устройстве также работает клавиша F.
- «Заметки» показывает текст выступления для текущего слайда. Закрытие — кнопкой ×, касанием затемнённой области или клавишей Escape.
- «Повторить сцену» запускает анимацию слайда ещё раз. Клавиша R тоже повторяет анимацию.
- Клавиша H скрывает или возвращает панель управления.
- На слайдах 2, 4, 5 и 9 можно касаться отдельных элементов схемы.

## Бесплатная публикация через GitHub Pages

Для GitHub Free репозиторий Pages должен быть публичным. Создайте публичный репозиторий `stal-prezentatsiya` в аккаунте `trsnbv`. В этом рабочем проекте интеграция GitHub не умеет создавать новый репозиторий или включать Pages, поэтому первые действия нужно выполнить на сайте GitHub.

1. Откройте [создание репозитория GitHub](https://github.com/new), задайте имя `stal-prezentatsiya` и выберите **Public**.
2. В новом репозитории нажмите **Add file → Upload files**.
3. Перетащите в окно загрузки файлы `index.html`, `styles.css`, `app.js`, `README.md` и `.nojekyll` из папки проекта, затем нажмите **Commit changes**.
4. Откройте **Settings → Pages**.
5. В разделе **Build and deployment** выберите **Deploy from a branch**, ветку **main** и папку **/(root)**, затем нажмите **Save**.
6. Когда GitHub завершит публикацию, адрес проекта будет `https://trsnbv.github.io/stal-prezentatsiya/`. Статус и готовую ссылку можно посмотреть на странице **Settings → Pages**.

GitHub сообщает, что первая публикация может занять до 10 минут. [Официальная инструкция GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Факты и визуальные источники

- Определение стали и два основных маршрута производства: [World Steel Association — What is steel?](https://worldsteel.org/about-steel/what-is-steel/) и [Raw materials](https://worldsteel.org/about-steel/raw-materials/).
- Доля использования стали в строительстве и инфраструктуре: [World Steel in Figures 2025](https://worldsteel.org/data/world-steel-in-figures/world-steel-in-figures-2025/), данные по использованию за 2024 год.
- Нержавеющая сталь и роль хрома: [worldstainless — Stainless steel standards](https://worldstainless.org/about-stainless/properties/stainless-steel-standards/).
- Быстрорежущие стали и сохранение твёрдости при высоких температурах: [Uddeholm — High Speed Steels](https://www.uddeholm.com/us/en-us/product-category/hss-high-speed-steel-en-us/).
- Использование до 100% лома в электродуговой печи: [World Steel Association — Raw materials](https://worldsteel.org/about-steel/raw-materials/).
- Фотографии: [Unsplash](https://unsplash.com/s/photos/steelmaking), [Unsplash — городской пейзаж](https://unsplash.com/photos/a-very-tall-building-in-a-big-city-at-night-LzqSNIdlFLc), [Unsplash — железнодорожные пути](https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%98%BC%E9%96%93%E3%81%AE%E9%9D%92%E7%A9%BA%E3%81%AB%E8%8C%B6%E8%89%B2%E3%81%AE%E9%9B%BB%E8%BB%8A%E3%81%AE%E3%83%AC%E3%83%BC%E3%83%AB-krsmsfjjGgg) и [Shopify Burst — металлический мост](https://www.shopify.com/stock-photos/photos/metal-bridge-angled-beams).
