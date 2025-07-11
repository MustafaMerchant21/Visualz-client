import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { IconCloud } from "@/components/IconCloud";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";

export default function TechStackPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Tech Stack</h1>
        </div>
         
    <div className="relative overflow-hidden h-[500px] w-full border">
          <OrbitingCircles className="border">
            <File />
            <Settings />
            <File />
          </OrbitingCircles>
          <OrbitingCircles radius={100} reverse>
            <File />
            <Settings />
            <File />
            <Search />
          </OrbitingCircles>
        </div>
      </section>
    </DefaultLayout>
  );
}
