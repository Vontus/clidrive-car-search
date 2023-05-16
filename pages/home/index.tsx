import { CarSearch } from "./components/CarSearch";
import { Heading } from "@/components/Heading";

export default function Home() {
  return (
    <main>
      <Heading className="p-10 pb-0" data-testid="page-title">
        Clidrive Car Search
      </Heading>

      <CarSearch />
    </main>
  );
}
