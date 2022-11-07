import host from "./host";

export async function getVideosByCategories(id) {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${host}/videos/by-category/${id}`,
      requestOptions
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
}
