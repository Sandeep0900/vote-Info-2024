import { StateData } from "../types/voter";

const API_KEY = "579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b";
const BASE_URL = "https://api.data.gov.in/resource/f7f1bf09-7633-4474-96b2-62630c70f33c";

export const fetchVoterData = async (state?: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}?api-key=${API_KEY}&format=json${state ? `&filters[state_name]=${state}` : ""}&limit=100`
    );
    const data: StateData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching voter data:", error);
    throw error;
  }
};