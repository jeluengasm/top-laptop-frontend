# Top Laptop - Frontend

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Using Docker for Development

After installing [Docker](https://www.docker.com/), and run `npm install`, you can use the following commands to build and run the project:

```docker
docker compose build
```

### Compile and Hot-Reload for Development

```docker
docker compose up
```

### Lint with [ESLint](https://eslint.org/)

```sh
docker compose exec app npm run lint
```
