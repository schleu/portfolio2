import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../../../assets/arrowRight.svg";

interface iCard {
  title: string;
  image: string;
  link: string;
  description: string;
}
export const ProjectCard = ({ title, description, image, link }: iCard) => (
  <div className="flex flex-col bg-[#262626] rounded overflow-hidden">
    <div className="h-[200px] sm:h-[435px] bg-red-500 object-fill">
      <img src={image} className="w-full h-full" />
    </div>
    <div className="py-9 px-4 text-[#F0F6FF] flex flex-col gap-9">
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-2xl leading-9">{title}</h3>
        <p>{description}</p>
      </div>
      <Link
        to={"/"}
        className="text-[#41B19B] text-base font-bold flex gap-3 items-center"
      >
        Saiba Mais <ArrowRightIcon />
      </Link>
    </div>
  </div>
);