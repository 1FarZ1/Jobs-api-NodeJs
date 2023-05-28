# Jobs-api-NodeJs
 A Job Api Built Using Nodejs , express , mongoose, and other npm packages to summerize the process of auth and crud operations apis
 
## Screenshots 
 
# Features 
- ## Register User
- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token
- ## Login User
- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token
- ## Mongoose Errors
- Validation Errors
- Duplicate (Email)
- Cast Error
- ## Security
- helmet
- cors
- xss-clean
- express-rate-limit

## Features of Code
- Maintainble and Scalable
- following best Practises and Clean Code Concepts
- Easy To Follow and Read
- Follow The Mvc Architecture
## tech used
- express
- mongoose
- json-web-token
- express-rate-limit
- helmet 
- xss-clean
- Swagger 
- cors

## Author
- Fares Bekkouche
## Contrubution
- for any contrubution you re more then Welcomed


