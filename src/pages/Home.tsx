import abdals from "../assets/abdals.jpg";
import furnish from "../assets/project-images/furnish.png";
import { useForm, ValidationError } from "@formspree/react";

export const Home = () => {
  const stack = [
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  ];
  const projects = [
    {
      id: 1,
      name: "Furnish Ecommerce Store",
      image: furnish,
      description:
        "Ecommerce store for furniture — product listings, cart, and checkout, built end to end with a real database behind it.",
      github: "https://github.com/abdalsimam1-sketch/furnish-commerce.git",
      demo: "https://furnish.abdals.site",
      stack: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
        { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express" },
      ],
    },
  ];
  const [state, handleSubmit] = useForm("xrpgrdoz");

  return (
    <div className="flex flex-col py-5 lg:p-0 min-h-screen lg:flex-row ">
      <section className="border-b border-white text-center flex flex-col gap-5 lg:w-[400px] lg:border-r lg:border-b-0  lg:pt-10">
        <img
          src={abdals}
          alt="abdals image"
          className="w-50 h-50 rounded-full  object-cover mx-auto "
        />
        <div>
          {" "}
          <h3 className="text-subheading">Abdullahi Imam</h3>
          <p className="text-muted text-caption">Fullstack Developer</p>
        </div>
        <span className=" py-2 px-5 border-2 border-muted rounded-full self-center hover:border-accent-hover hover:text-accent-hover transform transition-transform duration-200 hover:scale-105 bg-surface">
          Open to work
        </span>
        <div className="flex flex-col text-start mx-auto gap-2">
          <a href="mailto:abdalsimam1@gmail.com">
            <i className="bi bi-envelope mr-2"></i>
            <span>abdalsimam1@gmail.com</span>
          </a>
          <a href="tel:08105128754">
            <i className="bi bi-telephone mr-2"></i>
            <span>08105128754</span>
          </a>
          <div>
            <i className="bi-geo-alt mr-2"></i>
            <span>Abuja, Nigeria</span>
          </div>
          <div className="flex gap-5 text-heading">
            <a href="https://github.com/abdalsimam1-sketch" target="_blank">
              <i className="bi-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/abdullahi-imam-70aaa63a9"
              target="_blank"
            >
              {" "}
              <i className="bi-linkedin"></i>
            </a>
          </div>
        </div>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-black w-[20rem] mx-auto rounded py-3 mb-5 cursor-pointer transition-transform duration-200 hover:scale-105 "
        >
          View CV
        </a>
      </section>
      <section className="flex-1 flex flex-col gap-10 max-w-sm mx-auto md:max-w-lg lg:max-w-4xl py-10 px-3 md:px-0">
        <div className=" mx-auto  rounded p-3 bg-surface-alt" id="about">
          <h1 className="text-heading ">About Me</h1>
          <p className="text-muted">
            Fullstack Developer working with PostgreSQL, Express, React, and
            Node.js, my goal is always to build complete, production ready web
            applications. I take pride in handling the entire lifecycle of a
            project from database design to deployment. Everything is built
            cleanly from the ground up. I am constantly learning and looking to
            apply my technical curiosity to a junior role, internship, or
            freelance contract.
          </p>
        </div>
        <div className=" mx-auto  bg-surface-alt rounded p-3 ">
          <h1 className="text-heading">Tech Stack</h1>
          <div className="flex flex-wrap gap-3">
            {stack.map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface border border-border"
              >
                <img src={icon} alt={name} className="w-4 h-4" />
                <span className="text-body text-text">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto  rounded p-3 bg-surface-alt">
          <h1 className="text-heading">Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
            {projects.map((item) => (
              <div
                className="bg-surface p-3 rounded flex flex-col gap-3 transition-transform duration-200 hover:scale-105 hover:border border-accent w-full"
                key={item.id}
              >
                <img src={item.image} alt="" />

                <h2 className="text-subheading">{item.name}</h2>
                <p className="text-muted">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.stack.map((tech) => (
                    <div className="px-2 py-1 bg-surface border  hover:border-accent rounded-full hover:text-accent ">
                      {tech.name}
                    </div>
                  ))}
                </div>
                <div className="flex gap-5  self-end">
                  <a
                    href={item.github}
                    className="hover:border-b border-accent"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={item.demo}
                    className="hover:border-b border-accent"
                    target="_blank"
                  >
                    Demo
                    <i className="bi-arrow-up-right hover:text-accent"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-5 lg:max-w-md  bg-surface-alt rounded p-3">
          <h1 className="text-heading">Contact</h1>
          <p>
            Have something in mind, send a message and i will get back to you.
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {state.succeeded && (
              <p className="text-subheading border-b border-accent text-accent">
                Thanks for contacting us
              </p>
            )}
            <div>
              <label htmlFor="email">Email</label>

              <input
                required
                name="email"
                id="email"
                type="email"
                placeholder="Your Email"
                className="border bg-surface w-full py-2 rounded focus:border-accent  pl-3"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>

              <textarea
                required
                name="message"
                id="message"
                placeholder="Message"
                className="border bg-surface w-full py-2 rounded focus:border-accent pl-3"
              ></textarea>
            </div>
            <button
              disabled={state.submitting}
              className="border-1 border-gray-400 self-start px-10 py-1 rounded-full bg-surface-alt cursor-pointer"
            >
              Submit{" "}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
