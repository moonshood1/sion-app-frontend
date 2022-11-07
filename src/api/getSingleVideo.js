import host from "./host";

export async function getSingleVideo(id) {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${host}/videos/single/${id}`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
