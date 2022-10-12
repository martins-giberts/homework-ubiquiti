import { ProductCard } from "./components/ProductCard";
import { ProductsGrid } from "./components/ProductsGrid";
import { useDeviceSearch } from "./hooks/useDeviceSearch";
import { useGetProductsQuery } from "./services/api";

export const Devices: React.FC = () => {
  const { data } = useGetProductsQuery();
  const { searchFilter } = useDeviceSearch();

  return (
    <ProductsGrid>
      {data?.devices.filter(searchFilter).map((device) => (
        <ProductCard key={device.device_id} device={device} />
      ))}
    </ProductsGrid>
  );
};
