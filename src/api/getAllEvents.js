import host from "./host";

export async function getEventsAll() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${host}/events/`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
