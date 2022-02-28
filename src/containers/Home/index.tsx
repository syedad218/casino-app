import { FC, useState, useEffect, useMemo } from "react";
import { useAuth } from "../../AuthProvider";
import { fetchGames, fetchCategories } from "./actions";
import Games, { GameType } from "./Games";
import Categories, { CategoryType } from "./Categories";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

const Home = () => {
  const [games, setGames] = useState<GameType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const auth = useAuth();
  const player = auth.authenticated;
  const username = player?.username;

  useEffect(() => {
    fetchGames(setGames);
    fetchCategories(setCategories);
  }, []);

  const handleLogout = () => {
    auth.signOut(username!, (response: any) => {
      if (response?.status === "success") {
        localStorage.removeItem("authenticated");
      }
    });
  };

  const filteredGames = useMemo(() => {
    return games.filter((game: GameType) => {
      return (
        game.categoryIds.includes(selectedCategory) &&
        game.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }, [games, searchText, selectedCategory]);

  return (
    <div className="casino" style={{ display: "block" }}>
      <div className="ui two column stackable grid centered">
        <Profile user={player} handleLogout={handleLogout} />
        <SearchBar setSearchText={setSearchText} />
      </div>
      <div className="ui two column stackable grid">
        <div className="twelve wide column">
          <h3 className="ui dividing header">Games</h3>
          <Games filteredGames={filteredGames} />
        </div>
        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
