import host from "./host";

export async function getlastMag() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `${host}/magazines/last-published`,
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
