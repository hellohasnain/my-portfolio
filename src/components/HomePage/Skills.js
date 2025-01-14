import Image from "next/image";

const Skills = () => {
  return (
    <div className="mx-[120px] font-fira">
      <div className=" mb-10">
        <h2 className="text-3xl font-medium">
          #Skills <span className="text-primarycolor">------------------</span>
        </h2>
      </div>
      <div>
        <h1 className="text-3xl">Using Now</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <Image src="/html.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/css.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/javaScript.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/react.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">React js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/nextjs.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">Next js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/git.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/github.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">GitHub</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/figma.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">Figma</p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl">Learning</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <Image src="/nodejs.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">NodeJs</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/sql.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/vector.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/typescript.png" alt="icon" width={50} height={50} />
          <p className="text-xl mt-3">TypeScript</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
