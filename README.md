# Приложение для поиска книг

## В проекте используются:

1. Архитектура FSD
2. Typescript
3. Scss
4. RTK, RTK Query
5. React Router
6. Api - https://openlibrary.org/

## Проект разделен на страницы:

1. Главная
2. Поиск
3. Избранное
4. История
5. Авторицация
6. Регистрация
7. Карточка книги

### 1 уроверь(обязательный):

- Учетные записи, а также избранное и история поиска хранятся в localStorage
- Код разделен на глупые и умные компоненты:
  Умные: [MainPageContainer](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/mainPageContainer/ui/mainPageContainer.tsx), [BookArticle](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/bookArticle/ui/bookArticle.tsx), [Header](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/header/ui/header.tsx)
  Глупые: [Button](https://github.com/DunaevVladimir/User-library/blob/main/src/shared/ui/button/button.tsx), [Spinner](https://github.com/DunaevVladimir/User-library/blob/main/src/shared/ui/spinner/spinner.tsx), [Link](https://github.com/DunaevVladimir/User-library/blob/main/src/shared/ui/link/link.tsx)
- Есть рендеринг списков: [MainPageContainer](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/mainPageContainer/ui/mainPageContainer.tsx), [SearchPageContainer](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/searchPageContainer/index.ts), [HistoryPageContainer](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/historyPageContainer/ui/historyPageContainer.tsx)
- Реализована форма для ввода email и password для страниц авторизации и регистрации: [LoginForm](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/loginForm/ui/loginForm.tsx)
- Реализован Контекст с темой приложения - [ThemeContext](https://github.com/DunaevVladimir/User-library/blob/main/src/app/providers/themeContext.ts) в [Header](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/header/ui/header.tsx)
- Реализован кастомный хук: [useFavorites](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/favorites/lib/useFavorites.ts)
- Предохранители не реализованы
- Компоненты [Link](https://github.com/DunaevVladimir/User-library/blob/main/src/shared/ui/link/link.tsx) и [Input](https://github.com/DunaevVladimir/User-library/blob/main/src/shared/ui/input/input.tsx) используют PropsTypes
- Используется useDebounce в компонентах [MainPageContainer](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/mainPageContainer/ui/mainPageContainer.tsx) и [SearchPageContainer](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/searchPageContainer/index.ts)
- Добавлена ленивая загрузка для [Routing](https://github.com/DunaevVladimir/User-library/blob/main/src/pages/index.tsx) и [Spinner](https://github.com/DunaevVladimir/User-library/blob/main/src/shared/ui/spinner/spinner.tsx) в качестве fallback

### Redux:

- Использую Modern Redux with Redux Toolkit [store](https://github.com/DunaevVladimir/User-library/blob/main/src/app/providers/store.ts)
- Использую слайсы: [sessionSlice](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/session/model/slice.ts),
[favoritesSlice](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/favorites/model/slice.ts),[historySlice](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/history/model/slice.ts)
- Использую middleware для стороннего эфекта записи и чтения в localStorage [historyMiddleware](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/history/api/historyMiddleware.ts), [favoritesMiddleware](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/favorites/model/slice.ts), [sessionMiddleware](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/session/api/sessionMiddleware.ts)

### 2 уровень(необязательный)
- Используется TypeScript: [type Book](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/books/model/types.ts),
[type User](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/session/model/types.ts)

## Требования к фукциональности

### Сущности:

- Гость, Пользователь - [User](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/session/model/types.ts)
- Единица информации - [Book](https://github.com/DunaevVladimir/User-library/blob/main/src/entities/books/model/types.ts)

### Лоудеры

- Компонент [Spinner](https://github.com/DunaevVladimir/User-library/blob/main/src/shared/ui/spinner/spinner.tsx) используется при ожидании, например в компоненте [MainPageContainer](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/mainPageContainer/ui/mainPageContainer.tsx)

### Приватные руты

- Компонент [Protected](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/protected/ui/protected.tsx) используется в [Routing](https://github.com/DunaevVladimir/User-library/blob/main/src/pages/index.tsx) для проверки на авторизацию,
после чего либо дает нам доступ, либо перенаправляет на авторизацию

### Вход выход пользователя

- Страницы [Signin](https://github.com/DunaevVladimir/User-library/blob/main/src/pages/signin/index.tsx) и [Signup](https://github.com/DunaevVladimir/User-library/blob/main/src/pages/signup/index.tsx)

### Шапка сайта

- Компонент [Header](https://github.com/DunaevVladimir/User-library/blob/main/src/widgets/header/ui/header.tsx)

