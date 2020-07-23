# Проекты GitHub Самылина Кирилла.

## Проектная работа №3 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Верстка макета Figma "Путешествие по России".
#### Создание файловой структуры CSS по методологии БЭМ.
#### Использование технологии Grid Layout.
#### Разработка интерфейса для разных устройств.
#### Использование медиазапросов.

### Технологии использованные при верстке проекта: HTML, CSS, БЭМ

##### [Ссылка на макет в Figma](https://www.figma.com/file/MTZ7K0gUaN07iNIj8YCcLm/Russia-(mobile)-(Copy)?node-id=0%3A1)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/russian-travel/)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/russian-travel)

## Проектная работа №4 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Внешний вид сайта соответствует макету: Figma.
#### Файловая структура организована по БЭМу.
#### Вёрстка адаптивная: ширина зоны с содержимым должна меняться вместе с шириной окна браузера. При этом не должна появляться горизонтальная полоса прокрутки. Минимальная ширина: 300px (одна карточка в ряд).
#### Максимальная: 1280px (три карточки в ряд).
#### Открытие и закрытие попапа.
#### При открытии формы поля «Имя» и «О себе» должны быть заполнены теми значениями, которые отображаются на странице.
#### Редактирование имени и информации о себе.

### Технологии использованные при создании проекта: HTML, CSS, JS, БЭМ, GIT.

##### [Ссылка на макет в Figma](https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/yandex-project-4/index.html)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/yandex-project-4)

## Проектная работа №5 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Форма добавления карточки.
#### Лайк карточки.
#### Удаление карточки.
#### Открытие попапа с картинкой.
#### Плавное открытие и закрытие попапов.

### Технологии использованные при создании проекта: HTML, CSS, JS, БЭМ, GIT.

##### [Ссылка на макет в Figma](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-5)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/yandex-project-5/)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/yandex-project-5)


## Проектная работа №6 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Валидация формы «Редактировать профиль».
#### Валидация формы «Новое место».
#### Закрытие попапа кликом на оверлей.
#### Закрытие попапа нажатием на Esc.

### Технологии использованные при создании проекта: HTML, CSS, JS, БЭМ, GIT.

##### [Ссылка на макет в Figma](https://www.figma.com/file/XNaGNEZD5NEjeyJzAT4gMb/JavaScript.-Sprint-6)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/yandex-project-6/index.html)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/yandex-project-6)

## Проектная работа №7 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Создание класса Card:
* Принимает в конструктор её данные и селектор её template-элемента.
* Содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий.
* Содержит приватные методы для каждого обработчика.
* Содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.

#### Создание класса FormValidator:
* Принимает в конструктор объект настроек с селекторами и классами формы.
* Принимает вторым параметром элемент той формы, которая валидируется.
* Имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики.
* Имеет один публичный метод enableValidation, который включает валидацию формы.

### Технологии использованные при создании проекта: HTML, CSS, JS, БЭМ, GIT, OОП.

##### [Ссылка на макет в Figma](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-6)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/yandex-project-7/index.html)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/yandex-project-7)

## Проектная работа №8 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Создание класса Section:
* Первым параметром конструктора принимает объект с двумя свойствами: items и renderer. Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса. Свойство  renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
* Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
* Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
* Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.

#### Создание класса Popup:
* Принимает в конструктор единственный параметр — селектор попапа.
* Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
* Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
* Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.

#### Создание класса PopupWithForm, который наследует от Popup:
- Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
- Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
- Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
- Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

#### Создание класса UserInfo:
- Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
- Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
- Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.

#### Преобразование класса Card:
- Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку.

#### Настройка сборки Вебпака:
* Установка webpack, webpack-cli и webpack-dev-server.
* Настройка двух сборок: build и dev. Создание соответствующих скриптов в package.json. Скрипт build должен пересоздавать папку dist с собранным проектом. Скрипт dev запускать проект на локальном сервере.
* Настройка минификации и транспиляцию JS бабелем. Из index.html уберать теги script с подключением скриптов. Вебпак должен собирать весь JavaScript в один файл и автоматически добавлять в HTML тег script со ссылкой на него.
* Настройка обработки CSS: в HTML больше не должно быть тега link со ссылкой на CSS-файл. За обработку и подключение CSS должен отвечать Webpack.
* Настройка минификации CSS и автоматическое добавление вендорных префиксов.
* Настройка обработки изображений и шрифтов.
* Настройка обработки HTML: если в HTML есть ссылки на локальные картинки, при сборке всё должно работать.

### Технологии использованные при создании проекта: HTML, CSS, JS, БЭМ, GIT, ОПП, Webpack.

##### [Ссылка на макет в Figma](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-6)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/yandex-project-8/)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/yandex-project-8)

## Проектная работа №9 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Создание класса Card:
- Принимает в конструктор её данные и селектор её template-элемента.
- Содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий.
- Содержит приватные методы для каждого обработчика.
- Содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.

#### Создание класса FormValidator:
- Принимает в конструктор объект настроек с селекторами и классами формы.
- Принимает вторым параметром элемент той формы, которая валидируется.
- Имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики.
- Имеет один публичный метод enableValidation, который включает валидацию формы.

### Технологии использованные при создании проекта: HTML, CSS, JS, БЭМ, GIT, OОП.

##### [Ссылка на макет в Figma](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-6)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/yandex-project-9/)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/yandex-project-9)

## Проектная работа №10 (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Создал новый проект на Create React App.
#### Портировал разметку.
#### Настройка работы попапов.

### Технологии использованные при создании проекта: HTML, CSS, JS, БЭМ, GIT, ОПП, Api, React JS.

##### [Ссылка на макет в Figma](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-6)
##### [Ссылка на готовый проект](https://kirill-samylin.github.io/yandex-project-10/)
##### [Ссылка на код проекта](https://github.com/kirill-samylin/yandex-project-10)

## Групповой проект (Yandex Beб-разработчик)

### Описание и функциональность проекта:
#### Верстка макета Figma "RESTAURANT".
#### Создание файловой структуры CSS по методологии БЭМ.
#### Использование технологии Grid Layout.
#### Разработка интерфейса для разных устройств.
#### Использование медиазапросов.
#### Работа в группе.

### Технологии использованные при создании проекта: HTML, CSS, БЭМ, GIT.

##### [Ссылка на макет в Figma](https://www.figma.com/file/yhqJTln2yAEuka54oIrOzY/restaurant)
##### [Ссылка на готовый проект](https://dmitry-lab.github.io/restaurant-main-page/)
##### [Ссылка на код проекта](https://github.com/Dmitry-lab/restaurant-main-page)