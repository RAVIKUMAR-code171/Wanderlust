# WanderLust

A full-stack Airbnb-style listings app. Browse, create, edit and delete travel listings.

**Built by [Ravi Kumar](https://www.linkedin.com/in/ravi-kumar-11b326286/)** · [GitHub](https://github.com/RAVIKUMAR-code171/Wanderlust)

## Tech stack

- Node.js and Express
- MongoDB with Mongoose
- EJS templates
- method-override (for PUT and DELETE from HTML forms)

## Features

- View all listings
- View details of a single listing
- Create, edit and delete listings

## Run locally

```bash
git clone https://github.com/RAVIKUMAR-code171/Wanderlust.git
cd Wanderlust
npm install
cp .env.example .env    # then put your MongoDB connection string in .env
npm run seed            # optional: load sample listings
npm start
```

Open http://localhost:8080/listings

## Environment variables

| Name        | Description                                        |
| ----------- | -------------------------------------------------- |
| `MONGO_URL` | MongoDB connection string (Atlas or local)         |
| `PORT`      | Port to listen on (set automatically by hosts)     |

## Project structure

```
app.js            Express server and routes
models/           Mongoose models
views/listings/   EJS templates
init/             Sample data and seed script
```

## Author

Ravi Kumar — [LinkedIn](https://www.linkedin.com/in/ravi-kumar-11b326286/) · [GitHub](https://github.com/RAVIKUMAR-code171)
