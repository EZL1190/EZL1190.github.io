async function login2() {

        const response = await fetch("https://cors-anywhere.herokuapp.com/https://www.holdsport.dk/graphql", {
                method: "POST",
                headers: { "Content-Type": "application/json", "authorization": "830700:NiIMqLyOPfu44mhmbs-Eew:67719" },
                body: JSON.stringify({ "query": "query{current_team{name}}" }),
        })

        const data = await response.text()
        console.log(data);
}

login2();