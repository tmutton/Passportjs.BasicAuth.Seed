# Passportjs.BasicAuth.Seed

## Build steps

- npm install

- npm start

## Usage

Open your api client:

GET http://localhost:8080/private

With Basic Auth:

- Username: admin

- Password: password

The server will return "Your login has been authenticated"

Without (or incorrect) Basic Auth:
The server will return "Unauthorized"
