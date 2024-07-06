import { Plane } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const Header = () => {
  const data = [
    {
      id: 0,
      name: "Flights to Bangalore from £501",
    },
    {
      id: 1,
      name: "Flights to New York from £376",
    },
    {
      id: 2,
      name: "Flights to Los Angeles from £416",
    },
    {
      id: 3,
      name: "Flights to Dubai from £458",
    },
  ];
  return (
    <>
      <header
        className="h-[60vh] w-screen bg-cover bg-center relative px-5 flex justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558156118-e3b4b5515f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbGlkYXklMjB0cmF2ZWwlMjBzbWlsZXxlbnwwfHwwfHx8Mg%3D%3D')",
        }}
      >
        <div className="absolute bottom-3 w-[96vw] h-[20vh] rounded-xl bg-white ">
          <h1 className="font-bold text-xl text-center m-2">
            Fantastic new savings
          </h1>
          <p className=" text-l m-1 text-center">
            Reduced Economy fares now live. Hurry - ends 4th June!
          </p>
          <Button
            className="bg-pri w-[80vw] mx-auto flex text-white border-none"
            variant="outline"
          >
            Shop last minute deals
          </Button>
        </div>
      </header>
      <section className="px-5 py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
            <Plane className="my-6" />
            <h4 className="font-bold text-sm text-center">{item.name}</h4>
            <p className="text-sm text-center my-1">Find deals to New York with Virgin Atlantic</p>
            <Link href="/">
              <p className="text-pri underline cursor-pointer text-center">Book now</p>
            </Link>
          </div>
        ))}
      </section>

    </>
  );
};
