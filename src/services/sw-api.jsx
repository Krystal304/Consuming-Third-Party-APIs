


const url = "https://swapi.dev/api/starships/"






export async function getStarships() {
  try {
    const response = await fetch(url);


    

    const data = await response.json();
    
    return data.results; 
    
  } catch (error) {

    console.error("Error fetching starships:", error);
    return [];
  }
}
