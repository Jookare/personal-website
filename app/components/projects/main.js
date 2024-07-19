import Item from "./item";

const Projects = () => {
  return (
    <div className="font-sans max-w-[650px] w-full gap-4 flex flex-col px-4">
      <h1 className="text-2xl font-semibold text-white">Projects</h1>
      <div className="bg-[#141414] p-4 rounded-lg">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <Item
            img="/plankton.png"
            name="Open-set plankton detector"
            skills={["Computer Vision", "Python", "PyTorch"]}
            colors={["border-violet-400", "border-yellow-400", "border-red-400"]}
          />
          <Item
            img="/project.jpg"
            name="Portfolio website"
            skills={["Web Design", "React"]}
            colors={["border-indigo-400", "border-blue-400"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;