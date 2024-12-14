import Item from "./item";



const Projects = () => {
  return (
    <div className="font-sans max-w-[650px] w-full gap-4 flex flex-col px-4">
      <h1 className="text-2xl font-semibold text-white">Highlighted Projects</h1>
      <div className="bg-[#141414] p-4 rounded-lg">
        <div className="grid grid-cols-1 gap-4">
          <Item
            img="/projects/plankton.png"
            name="Open-set Plankton Classifier"
            skills={["Python", "PyTorch"]}
            link="https://github.com/Jookare/Open-set-Plankton-Recognition"
          />
          <Item
            img="/projects/hangboard.png"
            name="Climbing Workout App"
            skills={["React Native"]}
            link="https://github.com/Jookare/HangboardTimer"
          />
          <Item
            img="/projects/portfolio.jpg"
            name="Portfolio Website"
            skills={["React", "Next.js", "Tailwind CSS"]}
            link="https://github.com/Jookare/portfolio-website"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;