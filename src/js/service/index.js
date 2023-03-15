export const getData = async (info, uid) =>{
    const URL= "https://www.swapi.tech/api/"
    try{ 
        const response = await fetch(`${URL}/${info}/${uid}`.trim())
        const data = await response.json()
        return data

    } catch(error){ console.log("Error:",error)}

}