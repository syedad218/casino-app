import { FC } from "react";

export interface CategoryType {
  name: string;
  id: number;
}

interface Props {
  category: CategoryType;
  selectedCategory: number;
  setSelectCategory: React.Dispatch<React.SetStateAction<number>>;
}

const Categories: FC<Props> = ({ category, selectedCategory, setSelectCategory }) => {
  const handleClick = () => {
    setSelectCategory(category.id);
  };
  return (
    <div
      className={`category item ${selectedCategory === category?.id ? "active" : ""}`}
      key={category?.id}
      onClick={handleClick}
    >
      <div className="content">
        <div className="header">{category?.name}</div>
      </div>
    </div>
  );
};

export default Categories;
