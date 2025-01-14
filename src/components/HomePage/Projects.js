import Link from "next/link";

// components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "ABC",
      description: "Falana Dhikana Services",
      tags: ["HTML", "TailwindCSS", "JavaScript", "Next JS"],
      buttons: [{ label: "Live", url: "#", style: "primary" }],
      bgImage: "/images/chertnodes-bg.jpg", // Example background image
    },
    {
      title: "Project X",
      description: "Digital company",
      tags: ["HTML", "TailwindCSS", "JavaScript", "Next JS"],
      buttons: [{ label: "Live", url: "#", style: "primary" }],
      bgImage: "/images/protectx-bg.jpg", // Example background image
    },
    {
      title: "Raza",
      description: "Calculator",
      tags: ["HTML", "TailwindCSS", "JavaScript", "Next JS"],
      buttons: [{ label: "Live", url: "#", style: "primary" }],
      bgImage: "/images/kahoot-bg.jpg", // Example background image
    },
    {
      title: "Raza",
      description: "Calculator",
      tags: ["HTML", "TailwindCSS", "JavaScript", "Next JS"],
      buttons: [{ label: "Live", url: "#", style: "primary" }],
      bgImage: "/images/kahoot-bg.jpg", // Example background image
    },

    {
      title: "Raza",
      description: "Calculator",
      tags: ["HTML", "TailwindCSS", "JavaScript", "Next JS"],
      buttons: [{ label: "Live", url: "#", style: "primary" }],
      bgImage: "/images/kahoot-bg.jpg", // Example background image
    },
    {
      title: "Raza",
      description: "Calculator",
      tags: ["HTML", "TailwindCSS", "JavaScript", "Next JS"],
      buttons: [{ label: "Live", url: "#", style: "primary" }],
      bgImage: "/images/kahoot-bg.jpg", // Example background image
    },
  ];

  return (
    <section className="py-16 mx-24 text-white font-fira">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-medium flex">
            #projects{" "}
            <span className="text-primarycolor font-[50]">
              ------------------------------
            </span>
          </h2>
          <Link href="/work" className="text-base hover:underline">
            View all &rarr;
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.bgImage})`,
              }}
            >
              {/* Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Card Content */}
              <div className="relative p-6 space-y-4 z-10">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-100">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="relative z-10 flex items-center justify-center space-x-4 bg-gray-800 py-3">
                {project.buttons.map((button, idx) => (
                  <a
                    key={idx}
                    href={button.url}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      button.style === "primary"
                        ? "border border-primarycolor hover:bg-primarycolor text-white"
                        : "bg-gray-700 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
