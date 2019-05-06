# Node js

node fetch.js
fetch URL : http://localhost:3000/fetch

parameters ->
url = https://www.holdsport.dk/graphql
body = graphql query
authToken = token (efterlad den tom, vis det fx er login)

![img](https://i.imgur.com/m2t3Nnl.png)

```fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                  "url":"https://www.holdsport.dk/graphql",
                  "body": { "query": "query{current_team{name}}" },
                  "authToken" : "830700:NiIMqLyOPfu44mhmbs-Eew:67719"
                }),
    });```
