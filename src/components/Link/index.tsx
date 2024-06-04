import { FaGithub } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";

interface LinkComponentProps {
  name: string;
  link: string;
}

const LinkComponent = ({ name, link }: LinkComponentProps) => {
  return (
    <div>
      {name === "github" ? (
        <FaGithub style={{ fontSize: "1.8rem" }} />
      ) : (
        <FaMicroblog />
      )}
      <a style={{ fontSize: "1.5rem", marginLeft: "1rem" }} href={link}>
        {name === "github" ? "깃허브 링크" : "블로그 링크"}
      </a>
    </div>
  );
};

export default LinkComponent;
