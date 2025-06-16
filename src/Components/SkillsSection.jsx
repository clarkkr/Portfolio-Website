import { useState } from "react";
import { cn } from "../lib/utils";

{
  /* List of skills to display to website with appropriate knowledge levels. */
}

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Javascript", level: 85, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Typescript", level: 60, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  //Backend
  { name: "Java", level: 90, category: "backend" },
  { name: "C++", level: 85, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "PHP", level: 60, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "C#", level: 75, category: "backend" },
  { name: "Prolog", level: 75, category: "backend" },

  //Tools
  { name: "GitHub/Git", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

{
  /*Categories loop for later use*/
}

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Sort Buttons*/}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover: bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Section dedicated to creating the grid for the skills */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
