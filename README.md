# Projeto_Picinguaba

# Objective  

Create the necessary infrastructure for the storage and collection of data of a website. This includes:  
  
- the configuration of the database with the necessary tables and relationships between them;
- the creation of an API capable of sending, collecting, and updating data;
- the creation of a webpage to showcase the API's capabilities.

# Tecnologies implemented  

In this project the following technologies, languages, and libraries were used:

- **Node**
- **Yarn** - package managemen system
- **Typescript** - for being strictly typed 
- **Express** - for the API REST communication
- **Knex** - query builder for the communication
- **MySQL** - database management system
- **Swagger** - for describing the REST API

# Database  

The database structure was conceived after talking with the UX team about what would be displayed on the website. After some iterations the final desig is as it follows.

![Database structure containing three tables with conections through foreign keys](images\DB_Tables.png?raw=true "Database Structure")


## Using Knex  

The tables were created through the node module "knex" using migrations to implement the necessary columns, constraints, and relations.  
  
The "knexfile.ts" file holds the information to tell knex where to find the desired database and its type.  
  
The folder /src/database holds the migration files, responsible for the creation and configuration of the tables, as well as the connection.ts, responsible for calling the knexfile.ts.  
  
  
![MySQL print to show created tables in the required database](images\DB_MySql_print.PNG?raw=true "Created tables")


## Writing the initial information  

To make the datadump for the initial set of information, JSON files were created with the categories and products followed by the coding of the necessary controllers and function calls.  
  
Now we are able to input all the initial data throught a single terminal command instead of needing to insert then one-by-one using the API or the MySQL Workbench.  
  
  
# API REST

For the creation of the API we used the node module "Express". With it we are able to communicate with the HTTP protocol requisitions. We separated the steps in:
- **controllers** - containing the functions responsible for interacting with the database by writting or reading it
- **routes** - to direct the specific requisition of GET, POST, DELETE or PUT to the desired controller
- **server** - to get everything together, determine the port, and listen for requests.

## SWAGGER
  
We used "Swagger" to create a page to showcase what is possible to do with the API. In it it is shown which requests are possible as well as JSON templates.

![Possible requests to interact with each table](images\Swagger_requests.PNG?raw=true "Possible requests")
![JSON Templates](images\Swagger_models.PNG?raw=true "JSON Tempaltes")

