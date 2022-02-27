export const login = async (username: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "rebecka",
        password: "secret",
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error inside login action", error);
  }
};
