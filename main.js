async function login2() {

        const response = await fetch("https://www.holdsport.dk/graphql", {
                method: "OPTIONS",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": "1411871:rZvkWvqN1E-eq6EZ-NVJug:156823",
                    "Access-Control-Allow-Origin": "*" 
                },
                body: JSON.stringify({ "query": "current_user{name}" }),
        })

        const data = await response.text()
        console.log(data);
}

login2();