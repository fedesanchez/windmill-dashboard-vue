# windmill-dashboard-vue

This is a Vue version of [windmill-dashboard-react](https://github.com/estevanmaito/windmill-dashboard-react/) made by Estevan Maito wich is a complete application (not a template), built on top of React, with all tiny details taken care of so you just need to bring the data to feed it.

## Links

🚀 [Site](https://windmillui.com/)
🚀 [Estevan Maito](https://twitter.com/estevanmaito)
🚀 [React version live](https://windmillui.com/dashboard-react)

## 📦 Features

- 🦮 Throughly accessible (developed using screen readers) **(Not tested in Vue version)**
- 🌗 Dark theme enabled (load even different images based on theme)
- 🧩 Multiple (custom) components
- ⚡ Code splitting
- Tailwind CSS
- Vue Router
- Heroicons
- Chart.js
- PWA delivering offline-first and app-like experience

## 📚 Docs

### Routing

Routes in Windmill Dashboard are separated into two categories, sidebar ([routes/sidebar.js](src/routes/sidebar.js)) and general ([routes/index.js](src/routes/index.js)).

#### Sidebar routes

These are the routes that will show in the sidebar. They expect three properties:

- `path`: the destination;
- `name`: the name to be shown;
- `icon`: an icon to illustrate the item

Item that are used as dropdowns, like the Pages option, don't need a `path`, but expect a `routes` array of objects with `path` and `name`:

```js
// sidebar.js
{
  path: '/app/tables',
  icon: 'TablesIcon',
  name: 'Tables',
},
{
  icon: 'PagesIcon', // <-- this is used as a submenu, so no path
  name: 'Pages',
  routes: [
    // submenu
    {
      path: '/login',
      name: 'Login', // <-- these don't have icons
    },
    {
      path: '/create-account',
      name: 'Create account',
    },
```

#### General (Router) routes

These are **internal** (private) routes. They will be rendered inside the app, using the default `containers/Layout`.

#### How to add a new page to router?

1. Create your page inside `src/pages`, say `MyPage.js`;
2. Add it to the global router (`src/routes/index.js`)

```js
import MyPage from ('../pages/MyPage.vue'))
```

Then add it to the `routes` array:

```js
{
  path: '/my-page', // the url that will be added to /app/
  component: MyPage, // the page component you jsut imported
}
```

Components can also be imported dinamicly, into separate chunks, and only load them when the route is visited.

```js
{
  path: '/my-page',
  component: () => import('../pages/MyPage.vue'),
}
```

3. If you want to make this page accessible from the sidebar, you have to options:

- add it to the root `routes` array

```js
{
  path: '/app/my-page', // /app + the url you added in routes/index.js
  icon: 'HomeIcon', // the component being exported from src/icons/index.js
  name: 'My Page', // name that appear in Sidebar
},
```

- add it as an option under a dropdown

```js
{
  icon: 'PagesIcon',
  name: 'Pages',
  routes: [
    // submenu
    {
      path: '/app/my-page',
      name: 'My Page',
    },
```
