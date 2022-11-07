import host from "./host";

export async function postComment({ name, comment, video, magazine }) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        comment,
        video,
        magazine,
      }),
    };

    const response = await fetch(
      `${host}/comments/add-comment`,
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
