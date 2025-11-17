import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { carStore } from "../stores/CarStore";
import CarList from "../components/CarList";

const Catalog: FC = observer(() => {
  useEffect(() => {
    carStore.fetchCars();
  }, []);

  if (carStore.loading) return <p>Загрузка...</p>;
  if (carStore.error) return <p style={{ color: "red" }}>Ошибка: {carStore.error}</p>;

  return <CarList />;
});

export default Catalog