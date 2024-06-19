# Driscroll's CRUD

A tech test for the process for Sr Application Developer position.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL="postgresql://postgres:postgres@localhost:5555/my-db?schema=public"`

This because I decided to use Docker for the database, also you must install docker for this process.

## Installation

Before all [Here you can see how to install docker in your device](https://docs.docker.com/engine/install/).

Once you have docker installed you must to run the following commands:

```bash
    npm install
```

## Database and Docker 🐳

Let's configure everything to run the project.

We need to have our database running:

```bash
    db:dev
```

This command will set a container with the image of our database ready to connect and manage our data.

Let's connect it!

1.

```bash
    prisma:init
```

2.

```bash
   prisma:migrate
```

3.

```bash
    prisma:seed
```

With this our database should be connected.

## Run the Project

```bash
    npm run dev
```

## Author

- [@who-Is-Beto](https://github.com/who-Is-Beto)

# If There's any question, let me know

- [LinkedIn](https://www.linkedin.com/in/whoisbeto/?locale=en_US)
- [Instagram ](https://github.com/who-Is-Beto) - @whi.is.beto
