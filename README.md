# Fullstack Issue Tracker
	- next
	- react

With this project I want to create a deeper understanding of next.js and the new AppRouter system.

## Useful and random information about next.js

### AppRouter (Apparatus Router)
It's the new router from version 13 on. 
The AppRouter resides in the `app` folder.
Only pages by convention work. All other files are not routed.

#### Based

1. file-system
e.g. app/users
2. Convention not configuration
e.g. the name of "page.tsx" is very important

### Don't use

#### Anchor (`<a>`)
Instead use `<Link>`

##### Public accesibility
page.js/page.tsx file in the folder

## Rendering in next

### a) Client-side Rendering (CSR)
Like react
- Large bundles, Resource intensive, no SEO, less secure

Make a whole component use CSR with `'use client';`

#### Better way:
Only what is necessary! E.g. Buttons

### b) Server-side Rendering (SSR)
- Smaller bundles, ressource efficient, SEO, More secure

Disadvantage:
Looses interactivity! (Cannot listen to browser events, access browser APIs, Maintain state, use effects)
==> For those things we will use client-side rendering!

#### Example:
Server (SSR) --> NavBar, SideBar, ProductList, ProductCard, Pagination, Footer
Client (CSR) --> AddToCart (Button Component) from ProductCard

#### Example 2:
All components in the `app` are SSR by default

## Fetching in next
1. Fetching on the client --> useState() + useEffect() ==> Better React Query
2. Fetching in server components --> Caching = Storing data somewhere that is faster to access

*next automatically caches fetched data on the client!*

*No caching:*
``` javascript
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { cache: "no-store"}
    );
```

*10 second refresh of cashed data*
``` javascript
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { next: {revalidate: 10 } }
    );
```

## Static Rendering in next
Render at build time

## Dynamic Rendering in next
Render at request time

## Public files
public folder with images

## Styling with modules
compomentName.module.css

import styles from "./compomentName.module.css"
className={styles.card}


## styling with tailwind
className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600"

### DaisyUI
Library for tailwind
https://daisyui.com/docs/install/

1. Install as development dependency `npm i -D daisyui@latest`
2. Add to tailwind.config.js

```
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```

#### DaisyUI themes
https://daisyui.com/docs/themes/



## Steps
1. npx create-next-app@13.4
2. npm run dev --> Check if it runs
3. users with page.tsx
4. First component (AddToCart & ProductCard)
5. Dummy Data with `jsonplaceholder.typicode.com`
6. Fetch dummy user data
7. Test rendering with `npm run build` --> `npm start`
8. install prisma `npm i prisma@5.3.1`
    - `npx prisma init`
    - change provider to mysql
    - `npx prisma format`
    - `npx prisma migrate dev` 
9. `npm i zod@3.22.2`
10. created the first api with prism and checked it with postman
11. Creating the issue page with radix ui
    - `npm install @radix-ui/themes`
12. Add README Editor
    - https://www.npmjs.com/package/react-simplemde-editor
    - npm install --save react-simplemde-editor easymde
13. 

## Random tipps
- Create a react component with `rafce` "raf C" 
- thead>tr>th*2
- Theme change with small plugin: https://github.com/saadeghi/theme-change 
- npm i react-icons --> free icons
- npm i classnames@2.3.2

## Simplistic planning for a project (Roadmap)
1. Create a table with core & advanced features
2. Create one feature at a time
	1. Make it work First
	2. Then, improve it (refactoring)

TODO The plan

| Core     |      Advanced |
|:--------:|:-------------:|
| Creating an issue | User authentication |
| Viewing issues | Assigning issues |
| Updating an issue | Sorting issues |
| Deleting an issue | Filtering issues |
|  | Pagination |
|  | Dashboard |





# About next.js
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
