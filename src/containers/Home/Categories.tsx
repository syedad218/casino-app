import { FC } from "react";

export interface CategoryType {
  name: string;
  id: number;
}

interface Props {
  category: CategoryType;
}

const Categories: FC<Props> = ({ category }) => {
  return (
    <div className="category item" key={category?.id}>
      <div className="content">
        <div className="header">{category?.name}</div>
      </div>
    </div>
  );
};

export default Categories;
