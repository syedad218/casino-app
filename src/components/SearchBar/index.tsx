import { FC } from "react";

const debounce = (func: any, timeout = 500) => {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

interface Props {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: FC<Props> = ({ setSearchText }) => {
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }, 500);
  return (
    <div className="four wide column">
      <div className="search ui left floated fluid icon input">
        <input type="text" placeholder="Search Game" onChange={handleChange} />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
