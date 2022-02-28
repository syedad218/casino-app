import React from "react";
import { GameType } from "../../components/Game/types";
import { CategoryType } from "./Categories";

export const fetchGames = async (callback: React.Dispatch<React.SetStateAction<GameType[]>>) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_JSON_SERVER}/games`, { method: "get" });
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log("error in fetching games", error);
  }
};

export const fetchCategories = async (
  callback: React.Dispatch<React.SetStateAction<CategoryType[]>>
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_JSON_SERVER}/categories`, {
      method: "get",
    });
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log("error in fetching categories", error);
  }
};

export const logout = async (username: string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_JSON_SERVER}/logout`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error in user logout", error);
  }
};
