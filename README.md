# PROYECTO FINAL IMDB
## Diseño y Arquitectura de Software
Nadia Corina Garcia Orozco A01242428
Javier Adrian Leon Villa A01242469

----

### System Design Documentation
Review the definition of functional and nonfunctional requirements, as well as *use case, sequence* and *class* diagrams for this project,  [here](https://docs.google.com/document/d/1AsKijieGTENlkytg3Idq1P7z02b6PM0IfCbB5gaY0_0/edit?usp=sharing)

### Running this project
First, clone this repository into your local machine. Make sure you have Docker installed.

Build this project using the following command

`docker build -t an/imdbproject:v1 .`

And run it using

`docker run -it -p 5005:5005 an/imdbproject:v1`



### REST API routes for testing

#### Registering a user
To register a user, make a POST request to `localhost:5005/API/user`
with the following request body
```

{
    "userName": "<userName>",
    "email": "<email>",
    "password": "<password>"
}

```


####  Obtain a recommendation list
Consume the following endpoint `http://localhost:5005/api/imdb/?pref=<key>` replacing key with a number from 1 to 5. This endpoint is meant to be used after preferences have been registered.

And to obtain the recommendations in descending order just add the extra parameter _rating_ like this `http://localhost:5005/api/imdb/?pref=<key>&rating=false`


