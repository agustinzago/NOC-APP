# Description
This project focuses on task creation using Clean Architecture principles implemented with TypeScript. It provides a structured approach to developing tasks management functionality, ensuring separation of concerns and maintainability.

## Usage

### Development Environment Setup

1. Clone the `.env.template` file to `.env`.

2. Set up environment variables in the `.env` file. Ensure the following variables are configured:

```dotenv
PORT=3000
MAILER_SERVICE=
MAILER_EMAIL=
MAILER_SECRET_KEY=
PROD=false

MONGO_URL=
MONGO_DB_NAME=
MONGO_USER=
MONGO_PASS=

POSTGRES_URL=
POSTGRES_USER=
POSTGRES_DB=
POSTGRES_PASSWORD=
```

### Installing Dependencies

3. Run the command `npm install` to install project dependencies.

### Running in Development Mode

4. Execute the command `npm run dev` to start the development server.

### Prisma Setup

1. Install Prisma globally if not already installed:

```
npm install -g prisma
```

2. Initialize Prisma in your project directory:

```
prisma init
```

3. Follow the interactive prompts to set up Prisma with your chosen database (e.g., PostgreSQL, MySQL, SQLite).

4. Update the Prisma schema file (`schema.prisma`) with your database connection details.

5. Generate Prisma client by running:

```
npx prisma generate
```

Now you have Prisma set up and ready to use in your project.

Ensure you have the required databases set up and accessible with the provided credentials in the `.env` file.
