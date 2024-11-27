# The Wild Oasis

The Wild Oasis is a resort booking management system that combines a user-friendly interface with powerful features. Built with React.js and Supabase, it handles reservations, up-to-date analytics, and secure authentication while ensuring scalability.

The application manages bookings, cabins, and guests through a React-based interface. It relies on Supabase for backend services and uses React Query for efficient data fetching and caching.

![The Wild Oasis Dashboard](/public/Screenshot%202024-11-18%20145452.png)

[Visit Live Demo](https://the-wild-oasis-seven-khaki.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [Authors](#authors)
- [Feedback](#feedback)

## Installation

1. Clone the repository:

```sh
  git clone https://github.com/your-username/the-wild-oasis.git
  cd the-wild-oasis

```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:

```sh
   VITE_SUPABASE_API=your-supabase-api-url
   VITE_SUPABASE_KEY=your-supabase-key
```

## Usage

To start the development server, run:

```sh
npm run dev
```

To build the project for production, run:

```sh
npm run build
```

To preview the production build, run:

```sh
npm run preview
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Supabase**: An open-source Firebase alternative for backend services.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Styled Components**: A library for styling React components using tagged template literals.
- **React Router**: A library for routing in React applications.
- **React Hook Form**: A library for managing form state in React.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **Date-fns**: A library for manipulating JavaScript dates.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Recharts**: A composable charting library built on React components.
- **React Hot Toast**: A library for creating toast notifications in React.

## Features

- **Authentication:** User signup, login, logout, and profile update using Supabase.
- **Bookings Management:** Create, read, update, and delete bookings.
- **Cabins Management:** Manage cabin details.
- **Guests Management:** Manage guest details.
- **Dashboard:** View recent bookings, stays, and other statistics.
- **Protected Routes:** Ensure that only authenticated users can access certain routes.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Project Structure

    .env
    [.eslintrc.cjs](http://_vscodecontentref_/0)
    [.eslintrc.json](http://_vscodecontentref_/1)
    .gitignore
    [.prettierrc.json](http://_vscodecontentref_/2)
    [index.html](http://_vscodecontentref_/3)
    [netlify.toml](http://_vscodecontentref_/4)
    [package.json](http://_vscodecontentref_/5)
    public/
    [README.md](http://_vscodecontentref_/6)
    src/
      [App.jsx](http://_vscodecontentref_/7)
      context/
        DarkModeContext.jsx
        DemoModeContext.jsx
      data/
        cabins/
        data-bookings.js
        data-cabins.js
        data-guests.js
        [Uploader.jsx](http://_vscodecontentref_/8)
      features/
        authentication/
        bookings/
        cabins/
        check-in-out/
        dashboard/
        settings/
      hooks/
        useLocalStorageState.js
      [main.jsx](http://_vscodecontentref_/9)
      pages/
      services/
      styles/
      ui/
      utils/
    [vercel.json](http://_vscodecontentref_/10)
    [vite.config.js](http://_vscodecontentref_/11)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `VITE_SUPABASE_API`: The Supabase API URL.
- `VITE_SUPABASE_KEY`: The Supabase API key.

## Scripts

- `npm run dev:` Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for linting errors.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Authors

- @jakolandio3

## Feedback

If you have any feedback, please reach out to me at [jakobdouglas.dev@gmail.com](mailto:jakobdouglas.dev@gmail.com)
