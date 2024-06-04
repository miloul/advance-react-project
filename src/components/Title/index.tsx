interface TitleProps {
  title: string;
  isName?: boolean;
}

const Title = ({ title, isName = false }: TitleProps) => {
  return (
    <div
      style={{
        margin: "3rem",
        fontSize: `${isName ? "2rem" : "1.6rem"}`,
        fontWeight: "bold",
      }}
    >
      {title}
    </div>
  );
};

export default Title;
