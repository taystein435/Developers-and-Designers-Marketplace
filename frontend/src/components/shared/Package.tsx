import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/client";

type Props = {
  title: string;
};

export const Package = async ({ title }: Props) => {
  const profiles = await prisma.profile.findMany({
    include: {
      user: true, 
      projects:true
    }
    
  });
  console.log(profiles)

  return (
    <>
      <p className="text-3xl text-left mt-8 ml-5 md:text-center md:text-5xl lg:text-center lg:text-5xl">
        {title}
      </p>

      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((project) => (
          <Link key={project.id} href={`/profile/${project.id}`} passHref>
            <div className="mb-10 p-5 border rounded-lg shadow-lg">
              {project.profilePicture && (
                <Image
                  src={project.profilePicture}
                  alt={project.firstName + " " + project.lastName}
                  className="rounded-2xl h-40 w-full object-cover"
                  width={500}
                  height={160}
                />
              )}

              <p className="text-3xl mt-3">{project.user.role}</p>
              {project.projects && (
                <p className="mt-2 text-slate-500">{project.firstName } </p>
              )}
              <p className="mt-2 text-slate-600">{project.description}</p>
            
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
