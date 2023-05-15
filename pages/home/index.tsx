import { CarSearch } from "./components/CarSearch";

export default function Home() {
  return (
    <main>
      <h1 data-testid="page-title">Car List</h1>

      <CarSearch />
    </main>
  );
}
