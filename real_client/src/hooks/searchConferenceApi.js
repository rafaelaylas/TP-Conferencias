
export default async function searchConferenceApi(q){
    const response = await fetch(`http://localhost:3006/api/conferences?search=${q}`);
    const responseJson = await response.json()
    return responseJson
}

