import host from "./host";

export async function getComments(id) {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `${host}/comments/by-media/${id}`,
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
