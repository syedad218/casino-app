export const login = async (username: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    return { ...data, player: { ...data?.player, username } };
  } catch (error) {
    console.log("error inside login action", error);
  }
};
