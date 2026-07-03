import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <section className="pt-28 sm:pt-32">
        <Button variant="gold" size="hero">
          Click me!
        </Button>
      </section>
      <Card></Card>
    </div>
  );
}
