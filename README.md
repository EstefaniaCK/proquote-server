# ProQuote

ProQuote is a user-friendly web application catered specifically to general contractors, aiming to streamline the process of receiving quotes from subcontractors. The goal is to simplify the process of obtaining quotes from subcontractors who are bidding on construction projects. This intuitive platform allows subcontractors to easily upload itemized or lump sum price quotes. The platform then presents the quotes in a single table, making it much simpler to compare and identify the lowest price without the need for multiple screens. This web application will greatly expedite the price comparison process for general contractors when closing a project. By offering an efficient and transparent platform, my web application empowers general contractors to make well-informed decisions and choose the most suitable subcontractor for their projects.


## Installation
To run ProQuote locally, please follow these steps:

Clone the repository from GitHub:

```bash
  git clone https://github.com/Estefck/proquote-server.git
```
Navigate to the project directory:

```bash
  cd proquote-server
```
Install the dependencies:

```bash
 npm install
```
Start the development server:

## Environment Variables

Set the required environment variables. You can either set them manually or create a .env file in the project's root directory and add the variables there: 

PORT=8080
CORS_ORIGIN=http://localhost:3000
DB_HOST=127.0.0.1
DB_NAME=proquote
DB_USER=root
DB_PASSWORD=inputPassword

```bash
npm start
```


## Authors

Estefania Cordova 
- [ProQuote - server](https://github.com/Estefck/proquote-server)


## Tech Stack 

**Server:** MySQL, knex 
