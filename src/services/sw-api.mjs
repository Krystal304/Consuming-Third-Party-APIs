import { useState, useEffect } from "react";

import axios from "axios";

async function getAllStarships() {
  try {
    const url = "https://swapi.dev/api/starships/";

    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export { getAllStarships };
