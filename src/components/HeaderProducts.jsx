import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
import { Slider, Select, SelectSection, SelectItem } from "@nextui-org/react";
import { categories } from "../data/categories.json";

export default function HeaderProducts() {
  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = (number) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: number,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="flex flex-col sm:flex-row gap-5 justify-between">
      <Slider
        label="Precio a partir de:"
        maxValue={1000}
        minValue={0}
        className=" lg:max-w-md "
        onChange={handleChangeMinPrice}
        defaultValue={filters.minPrice}
        formatOptions={{ style: "currency", currency: "USD" }}
      />

      <Select
        label="Categoría"
        placeholder="Selecciona una categoría"
        className=" lg:max-w-xs"
        onChange={handleChangeCategory}
        defaultSelectedKeys={["all"]}
      >
        {categories.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </section>
  );
}
