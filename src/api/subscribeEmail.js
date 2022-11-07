import host from "./host";

export async function postSubscrire({ email }) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    };

    const response = await fetch(
      `${host}/users/register-to-news`,
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
