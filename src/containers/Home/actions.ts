import React from "react";
import { GameType } from "./Game";

export const fetchGames = async (callback: React.Dispatch<React.SetStateAction<GameType[]>>) => {
  try {
    const response = await fetch("http://localhost:3001/games", { method: "get" });
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log("error in fetching games", error);
  }
};
