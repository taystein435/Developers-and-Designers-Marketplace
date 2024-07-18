const Page = () => {
  return (
    <section >
      <div   className="h-[60vh] w-screen bg-cover bg-center relative px-5 flex justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D')",
        }}></div>
      <h1 className="text-3xl my-10 md:text-5xl xl:text-5xl lg:text-5xl font-bold text-center text-white">About Dev Hub</h1>
      <div className="flex justify-center items-center p-4">
        <div className="max-w-3xl text-gray-200 text-sm leading-relaxed">
          <p className="mb-4">
            Dev Hub is your dedicated marketplace connecting skilled developers and designers with clients in need of their expertise. Our platform is designed to address the specific challenges faced by professionals in the tech industry, offering robust features tailored to enhance visibility and streamline project management.
          </p>
          <p className="mb-4">
            At Dev Hub, we empower freelancers to showcase their portfolios comprehensively, receive skill endorsements, and manage projects efficiently through integrated tools. Clients benefit from a curated pool of top-tier talent, ensuring high-quality results and seamless collaboration.
          </p>
          <p className="mb-4">
            Whether you are a developer looking to expand your client base or a business seeking top-notch tech solutions, Dev Hub provides a trusted platform where professionalism meets innovation. Join us in shaping the future of freelance tech collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
