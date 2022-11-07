import host from "./host";

export async function getMags() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${host}/magazines/`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
