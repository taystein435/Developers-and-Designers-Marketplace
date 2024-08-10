import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    id: 0,
    role: "Mobile Developer",
    projectTitle: "E-commerce App",
    description: "Developed a comprehensive e-commerce app with seamless user experience, integrated payment gateways, and push notifications. 5 years of experience.",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 1,
    role: "UI/UX Designer",
    projectTitle: "Travel Booking Website",
    description: "Designed an intuitive and visually appealing travel booking website, focusing on user-centered design principles and responsive layouts. 7 years of experience.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwYm9va2luZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 2,
    role: "Backend Engineer",
    projectTitle: "API for Social Media Platform",
    description: "Built a scalable and secure API for a social media platform, handling millions of requests per day. 6 years of experience.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2VuZCUyMGVuZ2luZWVyfGVufDB8fDB8fHwy",
  },
  {
    id: 3,
    role: "Frontend Developer",
    projectTitle: "Real Estate Dashboard",
    description: "Implemented a dynamic and responsive real estate dashboard using React, integrating interactive maps and property filters. 4 years of experience.",
    img: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 4,
    role: "Cloud Engineer",
    projectTitle: "Cloud Infrastructure for SaaS",
    description: "Designed and managed the cloud infrastructure for a SaaS application, ensuring high availability and security. 5 years of experience.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 5,
    role: "Graphic Designer",
    projectTitle: "Brand Identity for Startup",
    description: "Created a complete brand identity for a tech startup, including logo design, business cards, and social media graphics. 8 years of experience.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 6,
    role: "Web Developer",
    projectTitle: "Portfolio Website",
    description: "Developed a personal portfolio website with a sleek design and smooth navigation, showcasing a variety of projects. 3 years of experience.",
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 7,
    role: "Data Scientist",
    projectTitle: "Predictive Analytics for Retail",
    description: "Implemented machine learning models for sales forecasting and inventory optimization, using Python and R. 4 years of experience.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 8,
    role: "DevOps Engineer",
    projectTitle: "CI/CD Pipeline Automation",
    description: "Developed and maintained CI/CD pipelines, automating build, test, and deployment processes for multiple projects. 6 years of experience.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 9,
    role: "SEO Specialist",
    projectTitle: "SEO Strategy for E-commerce",
    description: "Developed and executed an SEO strategy that increased organic search traffic by 50% for an e-commerce site. 5 years of experience.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 10,
    role: "Content Writer",
    projectTitle: "Blog Content for Tech Startup",
    description: "Wrote engaging and informative blog posts that drove traffic and engagement for a tech startup's website. 7 years of experience.",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGVudCUyMHdyaXRlcnxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 11,
    role: "Full Stack Developer",
    projectTitle: "SaaS Platform Development",
    description: "Led the development of a SaaS platform from scratch, working on both front-end and back-end components. 6 years of experience.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVsbCUyMHN0YWNrJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHwy",
  },
  {
    id: 12,
    role: "Machine Learning Engineer",
    projectTitle: "Image Recognition System",
    description: "Developed an image recognition system for identifying products in user-uploaded photos, using deep learning techniques. 5 years of experience.",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
  },
];
const data=[
  {
    id: 0,
    role: "Mobile Developer",
    projectTitle: "E-commerce App",
    description: "Developed a comprehensive e-commerce app with seamless user experience, integrated payment gateways, and push notifications. 5 years of experience.",
    img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 1,
    role: "UI/UX Designer",
    projectTitle: "Travel Booking Website",
    description: "Designed an intuitive and visually appealing travel booking website, focusing on user-centered design principles and responsive layouts. 7 years of experience.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwYm9va2luZyUyMHdlYnNpdGV8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 2,
    role: "Backend Engineer",
    projectTitle: "API for Social Media Platform",
    description: "Built a scalable and secure API for a social media platform, handling millions of requests per day. 6 years of experience.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2VuZCUyMGVuZ2luZWVyfGVufDB8fDB8fHwy",
  },
  {
    id: 3,
    role: "Frontend Developer",
    projectTitle: "Real Estate Dashboard",
    description: "Implemented a dynamic and responsive real estate dashboard using React, integrating interactive maps and property filters. 4 years of experience.",
    img: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 4,
    role: "Cloud Engineer",
    projectTitle: "Cloud Infrastructure for SaaS",
    description: "Designed and managed the cloud infrastructure for a SaaS application, ensuring high availability and security. 5 years of experience.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 5,
    role: "Graphic Designer",
    projectTitle: "Brand Identity for Startup",
    description: "Created a complete brand identity for a tech startup, including logo design, business cards, and social media graphics. 8 years of experience.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D",
  },
]
const Gigs = () => {
  return (
    <>
          <p className="text-left text-3xl mt-8 ml-5 md:text-center md:text-5xl lg:text-center lg:text-5xl">
       My Portfolio
      </p>
      <div className="flex overflow-x-auto space-x-4 px-6 py-2 mt-5">
        {data.map((item) => (
          <div key={item.id} className="flex-shrink-0  w-[60vw] h-[30vh] relative md:w-[30vw] lg:w-[30vw]">
            <Image
              src={item.img}
              alt={item.role}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        ))}
      </div>
      <p className="text-left text-3xl my-8 ml-5 md:text-center md:text-5xl lg:text-center lg:text-5xl">
       Services and Products
      </p>
      <div className="px-10 flex overflow-x-auto md:grid-cols-2 md:grid lg:grid-cols-3 lg:grid gap-6">
        {projects.map((item) => (
          <Link key={item.id} href="/profile" passHref>
            <div className="mb-10 p-5 border w-[60vw] rounded-lg shadow-lg md:w-[30vw] lg:w-[30vw]">
              <Image
                src={item.img}
                alt={item.role}
                className="rounded-2xl h-40 w-full object-cover"
                width={500}
                height={160}
              />
              <p className="text-3xl mt-3">{item.role}</p>
              <p className="text-2xl text-slate-500">{item.projectTitle}</p>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Gigs;