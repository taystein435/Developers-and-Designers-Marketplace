import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import prisma from "@/lib/client";

type Props = {
  title: string;
};

export const Package = async ({ title }: Props) => {
  const projects = await prisma.project.findMany({
    include: {
      profile: {
        include: {
          user: true,  
        },
      },
    },
  });

  return (
    <>
      <p className="text-3xl text-left mt-8 ml-5 md:text-center md:text-5xl lg:text-center lg:text-5xl">
        {title}
      </p>

      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/profile/${project.profileId}`} passHref>
            <div className="mb-10 p-5 border rounded-lg shadow-lg">
              {project.profile.profilePicture && (
                <Image
                  src={project.profile.bannerImage}
                  alt={project.profile.firstName + " " + project.profile.lastName}
                  className="rounded-2xl h-40 w-full object-cover"
                  width={500}
                  height={160}
                />
              )}

              <p className="text-3xl mt-3">{project.profile.user.role}</p>
              {project.profile.user && (
                <p className="mt-2 text-slate-500">{project.title} </p>
              )}
              <p className="mt-2 text-slate-600">{project.profile.description}</p>
            
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
