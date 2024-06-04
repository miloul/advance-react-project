interface tagprop {
  name: string;
}

const Tag = ({ name }: tagprop) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "5rem",
        textAlign: "center",
        borderRadius: "1rem",
        fontSize: "1.4rem",
      }}
    >
      {name}
    </div>
  );
};

export default Tag;
