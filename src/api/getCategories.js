import host from "./host";

export async function getCategories() {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${host}/category/`, requestOptions);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
