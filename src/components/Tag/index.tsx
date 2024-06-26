interface tagprop {
  name: string;
}

const Tag = ({ name }: tagprop) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "fit-content",
        padding: ".5rem",
        textAlign: "center",
        borderRadius: "1rem",
        fontSize: "1.4rem",
        float: "left",
      }}
    >
      {name}
    </div>
  );
};

export default Tag;
