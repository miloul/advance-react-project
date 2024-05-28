interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</div>;
};

export default Title;
