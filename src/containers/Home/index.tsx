import { FC, useState, useEffect, useMemo } from "react";
import { useAuth } from "../../AuthProvider";
import { fetchGames, fetchCategories } from "./actions";
import Game, { GameType } from "./Game";
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
    return games
      .filter((game: GameType) => {
        return game.name.toLowerCase().includes(searchText.toLowerCase());
      })
      .filter((game: GameType) => {
        return game.categoryIds.includes(selectedCategory);
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

          <div className="ui relaxed divided game items links">
            {filteredGames?.map((game) => (
              <Game game={game} key={game?.code} />
            ))}
          </div>
        </div>
        <div className="four wide column">
          <h3 className="ui dividing header">Categories</h3>
          <div className="ui relaxed selection animated list category items">
            {categories?.map((category) => (
              <Categories
                category={category}
                key={category?.id}
                selectedCategory={selectedCategory}
                setSelectCategory={setSelectedCategory}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
