import FoodPage from "@/components/FoodPage";

const Food = ({ params }: { params: { id: string } }) => {
  return <FoodPage id={params.id} />;
};

export default Food;
