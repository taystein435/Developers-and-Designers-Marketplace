import Image from "next/image";

type Props = {
  title: string;
  data: {
    id: number,
    name: string,
    img: string,
  }[];
};

export const Attraction = ({ title, data }: Props) => {
  return (
    <>
          <p className="text-left text-3xl mt-8 ml-5 md:text-center md:text-5xl lg:text-center lg:text-5xl">
        {title}
      </p>
      <div className="flex overflow-x-auto space-x-4 px-6 py-2 mt-10">
        {data.map((item) => (
          <div key={item.id} className="flex-shrink-0  w-[70vw] h-[80vh] relative md:w-[30vw] lg:w-[30vw]">
            <Image
              src={item.img}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <p className="absolute top-4 left-6 text-2xl text-white text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
