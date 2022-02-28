import { FC } from "react";

export interface CategoryType {
  name: string;
  id: number;
}

interface Props {
  categories: CategoryType[];
  selectedCategory: number;
  setSelectCategory: React.Dispatch<React.SetStateAction<number>>;
  loading?: boolean;
}

const Categories: FC<Props> = ({ categories, selectedCategory, setSelectCategory, loading }) => {
  const handleClick = (categoryId: number) => {
    setSelectCategory(categoryId);
  };
  return (
    <div className="ui relaxed selection animated list category items">
      {categories?.map((category) => (
        <div
          className={`category item ${selectedCategory === category?.id ? "active" : ""}`}
          key={category?.id}
          onClick={() => handleClick(category?.id)}
        >
          <div className="content">
            <div className="header">{category?.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
