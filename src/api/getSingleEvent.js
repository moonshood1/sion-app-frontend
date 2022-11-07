import host from "./host";

export async function getSingleEvent(id) {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${host}/events/single/${id}`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
