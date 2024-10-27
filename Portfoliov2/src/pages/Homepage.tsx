import HeroImage from "../assets/althero2.png";
import AboutImage from "../assets/avatar.png";
import AboutImageAlt from "../assets/avatar2.png";

function Homepage() {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-36">
          <div className="box">
            <h1 className="lg:text-6xl/tight text-3xl font-medium mb-7">
              Hi. It's My First Project With{" "}
              <span className="font-semibold text-sky-300">Tailwind CSS.</span>
            </h1>
            <p className="text-base/8 mb-7">
              The first time I created CSS with Tailwind, I was impressed by its
              simplicity and flexibility in building responsive designs.
            </p>
            <a
              href="#about"
              className="bg-slate-600 hover:bg-slate-800 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Introduction.
              <i className="ri-eye-line ms-2"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="HeroImage"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-32 pt-36"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <div className="relative w-[80%] sm:w-[60%] md:w-[90%] lg:w-[380px] h-auto mx-auto">
              <img
                src={AboutImage}
                alt="AboutImage"
                className="w-full h-auto transition-opacity duration-300 ease-in-out hover:opacity-0 object-cover"
              />
              <img
                src={AboutImageAlt}
                alt="Alternate AboutImage"
                className="absolute inset-0 w-full h-auto transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 object-cover"
              />
            </div>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              About <span className="text-slate-600 ">Me.</span>
            </h1>
            <p className="text-base/loose">
              <span className="text-slate-600 font-light text-xl">
                I'm Hashfi Mawarid{" "}
              </span>{" "}
              a Junior Web Developer, with a strong interest in building
              engaging and intuitive websites. I graduated with a Bachelor's
              degree in Communication Science from Pasundan University, a field
              that differs significantly from web development. However, my
              passion for technology drives me to pursue a career in this area.
              Currently, I'm honing my skills in Fullstack Web Development at
              Digital School Technology Purwadhika, eager to learn and
              contribute to exciting projects.
            </p>
          </div>
        </div>
        <div className="contact pt-32 sticky">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-5">
            <span className="text-slate-600" id="contactme">
              Let's
            </span>{" "}
            Connect.
          </h1>
          <p className="text-center mb-14">
            I'd love to hear from you! Whether you have questions, feedback, or
            just want to connect, feel free to reach out. Let's start a
            conversation!
          </p>
        </div>
        <div className="sosial-footer flex items-center justify-center gap-2 mx-auto">
          <a href="https://github.com/hashfimw/" target="_blank">
            <i className="ri-github-fill lg:text-6xl sm:text-6xl text-6xl hover:text-7xl"></i>
          </a>
          <a
            href="https://www.instagram.com/hashfimawarid/?hl=en"
            target="_blank"
          >
            <i className="ri-instagram-fill lg:text-6xl sm:text-6xl text-6xl hover:text-7xl"></i>
          </a>
          <a href="https://id.linkedin.com/in/hashfimawarid" target="_blank">
            <i className="ri-linkedin-box-fill lg:text-6xl sm:text-6xl text-6xl hover:text-7xl"></i>
          </a>
          <a
            href="https://steamcommunity.com/id/hashfimawarid/"
            target="_blank"
          >
            <i className="ri-steam-fill lg:text-6xl sm:text-6xl text-6xl hover:text-7xl"></i>
          </a>
          <a href="https://discordapp.com/users/Piw#8292" target="_blank">
            <i className="ri-discord-fill lg:text-6xl sm:text-6xl text-6xl hover:text-7xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
