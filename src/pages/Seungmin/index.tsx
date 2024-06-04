import LinkComponent from "../../components/Link";

const Seungmin = () => {
  return (
    <>
      <div
        style={{
          marginLeft: "8rem",
          marginTop: "8rem",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <img src="https://picsum.photos/250" alt="seungmin" />
          <div style={{ margin: "3rem" }}>
            <LinkComponent name="github" link="hi" />
          </div>
        </div>
        <div style={{ margin: "3rem", fontSize: "1.5rem", fontWeight: "bold" }}>
          소개
        </div>
        <div style={{ fontSize: "1.5rem" }}>룰루라라라</div>
        <div style={{ margin: "3rem", fontSize: "1.5rem", fontWeight: "bold" }}>
          기술스택
        </div>
      </div>
    </>
  );
};

export default Seungmin;
