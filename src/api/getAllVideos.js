import host from "./host";

export async function getVideosAll() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${host}/videos/`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
