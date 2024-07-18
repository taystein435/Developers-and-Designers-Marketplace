import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Page = () => {
  return (
    <section className="">
      <h1 className="text-3xl md:text-5xl xl:text-5xl lg:text-5xl font-bold text-center  text-white">Frequently Asked Questions</h1>
      <div className="flex justify-center items-center p-4">
        <Accordion type="single" collapsible >
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the purpose of this platform?</AccordionTrigger>
            <AccordionContent>
              Our platform is designed to connect developers and designers with clients looking for specialized skills. It allows professionals to create detailed profiles, showcase their portfolios, and get hired for projects tailored to their expertise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I create a profile?</AccordionTrigger>
            <AccordionContent>
              To create a profile, sign up on our platform and complete the registration process. You can then add your professional details, upload your portfolio, and list your skills and experiences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What features are available for showcasing portfolios?</AccordionTrigger>
            <AccordionContent>
              Our platform offers a variety of features for portfolio display, including image galleries, project descriptions, and links to live projects. You can also receive endorsements and reviews from clients to enhance your profile.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How does the hiring process work?</AccordionTrigger>
            <AccordionContent>
              Clients can browse through profiles, view portfolios, and contact professionals directly through the platform. Once terms are agreed upon, the project can be managed and tracked using our integrated project management tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What are the benefits of using this platform ?</AccordionTrigger>
            <AccordionContent>
              Unlike general freelance platforms, our marketplace is tailored specifically for developers and designers. This focus allows us to offer features and tools that address the unique needs of these professionals, making it easier to find relevant projects and clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is there a fee for using the platform?</AccordionTrigger>
            <AccordionContent>
              Our platform operates on a commission-based model, where a small fee is charged for each successful transaction between a client and a freelancer. Detailed pricing information is available on our pricing page.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>How does the platform ensure the quality of freelancers?</AccordionTrigger>
            <AccordionContent>
              We have a verification process for new profiles and encourage clients to leave reviews and endorsements. Additionally, our rating system helps maintain high standards by showcasing top-rated professionals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What project management tools are available?</AccordionTrigger>
            <AccordionContent>
              The platform includes tools for task assignment, progress tracking, file sharing, and communication between clients and freelancers to ensure smooth project execution.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Can I collaborate with other freelancers on projects?</AccordionTrigger>
            <AccordionContent>
              Yes, the platform supports team collaboration. You can invite other professionals to join your project and work together using our project management tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>How can clients find the right freelancer for their project?</AccordionTrigger>
            <AccordionContent>
              Clients can use our advanced search and filtering options to find freelancers based on skills, experience, location, and ratings. They can also browse through portfolios and read reviews before making a decision.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Page
