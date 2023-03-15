export const getData = async (info, uid) =>{
    const URL= "https://www.swapi.tech/api/"
    try{ 
        const response = await fetch(`${URL}/${info}/${uid}`.trim(),{ //se obtienen los datos con GET, opciones dadas por la API
            method: "GET",
            headers: {"Content-Type": "application/json"},})

        return await response.json()
     

    } catch(error){ console.log("Error:",error)}

}