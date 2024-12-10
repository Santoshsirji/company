# LiftCo Website

This is the official website for LiftCo, an elevator and lift service company, built with Next.js.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Homepage with company introduction
- Services page detailing the services offered
- About Us page with company history and team information
- Contact Us page with a contact form
- Authenticated admin panel for managing content

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/liftco-website.git
    cd liftco-website
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Project

1. Start the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadcnUI](https://shadcn.dev/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org/)

## Project Structure

```plaintext
/
├── components/       # React components
├── pages/            # Next.js pages
├── prisma/           # Prisma schema and migrations
├── public/           # Static files
├── styles/           # Global styles
├── utils/            # Utility functions
├── .env.example      # Example environment variables
├── next.config.js    # Next.js configuration
├── package.json      # NPM scripts and dependencies
└── README.md         # Project documentation
