import axios from "axios";
import host from "./host";

export async function getWelcomeVid() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${host}/videos/welcome`, requestOptions);

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
