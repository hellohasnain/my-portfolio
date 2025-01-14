import Image from "next/image";

const Aboutme = () => {
  return (
    <div className="mx-28 font-fira font-[50] mt-10 max-w-6xl">
      <h2 className="text-3xl font-medium flex">
        #about me
        <span className="text-primarycolor"> --------------------- </span>
      </h2>
      <div className="flex">
        <div className="flex-1 ">
          <p className="mt-5 ">Hello, i’m Hasnain!</p>
          <p className="mt-5">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className="mt-5">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className="border border-primarycolor px-4 mt-5">
            Read more
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-0 ml-40">
          <Image src="/man2.png" alt="image" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
