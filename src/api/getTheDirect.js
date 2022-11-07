import host from "./host";

export async function getTheDirect() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `${host}/directs/last-published`,
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
