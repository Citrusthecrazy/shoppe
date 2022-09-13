import commerce from "../../../lib/commerce";
import { useQuery } from "react-query";
import { CategoryCard } from "../..";

const HomeCategories = () => {
  const { data: categories } = useQuery(
    ["getCategories"],
    async () => {
      const { data: categoryList } = await commerce.categories.list();
      return categoryList;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return (
    <ul className="flex flex-row gap-2 overflow-x-auto no-scrollbar lg:hidden">
      {categories?.map((category) => (
        <li key={category.id}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
};

export default HomeCategories;
