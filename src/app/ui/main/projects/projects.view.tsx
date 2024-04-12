import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { ProjectSummary } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";

export const ProjectsView = ({
  projectsSummary
}: ProjectsViewProps): JSX.Element => {
  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <div className="mt-8 flex gap-2">
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <AiOutlinePlus size={22} />
            </span>
            <span className="leading-4">Add Project</span>
          </Button>
        </Link>
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <SiSimpleanalytics size={22} />
            </span>
            <span className="leading-4">Analytics</span>
          </Button>
        </Link>
        <div className="flex flex-1 items-center justify-end gap-8">
          <div className="space-x-2">
            <span>Sort By:</span>
            <select className="h-8 rounded-md border">
              <option>Project Name</option>
              <option>Date Created</option>
              <option>Date Completed</option>
              <option>Progress</option>
              <option>Assigne Name</option>
=            </select>
          </div>
          <div className="space-x-2">
            <span>Filter by Progress Status:</span>
            <select className="h-full rounded-md border">
              <option>All</option>
              <option>Pending</option>
              <option>Not Started</option>
              <option>Completed</option>
              <option>Not Assigned</option>
=            </select>
          </div>
          <div className="space-x-2">
            <span>Filter by Institute:</span>
            <select className="h-full rounded-md border">
              <option>All</option>
              <option>Delhi Technological University</option>
              <option>Netaji Subhash University</option>
              <option>Indian Institute of Technology Bombay</option>
              <option>Indian Institute of Technology Jammu</option>
              <option>Indian Institute of Technology Hyderabad</option>
              <option>Indira Gandhi Delhi Technical University for Women Delhi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
        {projectsSummary.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}
