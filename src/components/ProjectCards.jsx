import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, technologies, link }) => {
  const isExternal = link?.startsWith("http");

  const CardContent = () => (
    <div className="flex flex-col h-full bg-amber-100/80 text-[var(--natural-6)] p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-[var(--transparent-bg)] hover:text-[var(--natural-4)]">
      <h3 className="text-xl font-semibold mb-1 hover:text-[var(--natural-4)]">
        {title}
      </h3>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-fit rounded mb-2"
      />

      <p className="text-sm text-[var(--generic-8)] mb-2 line-clamp-3">
        {description}
      </p>

      <p className="text-xs mt-auto">Tech: {technologies}</p>
    </div>
  );

  return isExternal ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <CardContent />
    </a>
  ) : (
    <Link to={`/projects/${link}`}>
      <CardContent />
    </Link>
  );
};

export default ProjectCard;
