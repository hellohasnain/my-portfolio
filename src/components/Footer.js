import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-fira border-t  ">
      <div className="mx-28 max-w-5xl mb-32 mt-5  ">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={20}
            height={20}
            className=" mr-4"
          />
          <div>
            <h2 className="text-white text-lg font-semibold">Hasnain</h2>
            <p className="text-gray-400">hasnainraza1059@gmail.com</p>
          </div>
          <div className="ml-auto flex space-x-4">
            <Link href="https://www.instagram.com/hasnain_r24?igsh=MTR3MmtsdmFsdWQ4dg==">
              <Image
                src="/instagram.jpg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/hellohraza">
              <Image
                src="/linkedin.jpg"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://github.com/hellohasnain">
              <Image src="/github.png" alt="Github" width={24} height={24} />
            </Link>
          </div>
        </div>
        <p className="text-gray-400 mt-4">
          Web designer and front-end developer
        </p>
      </div>
    </div>
  );
};

export default Footer;
