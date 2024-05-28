import PageCard from "../PageCard";
import Title from "../Title";

const ContentSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: "5rem" }}>
        <Title title="팀 소개" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 30%)",
          }}
        >
          <PageCard
            src="https://picsum.photos/250"
            content="이승민"
            role="교육운영진"
          />
          <PageCard
            src="https://picsum.photos/250"
            content="이승민"
            role="교육운영진"
          />
          <PageCard
            src="https://picsum.photos/250"
            content="이승민"
            role="교육운영진"
          />
        </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Title title="활동 내용" />
        <div
          style={{
            width: "75%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 30%)",
          }}
        >
          hi
        </div>
        <div style={{ marginTop: "5rem" }}>
          <Title title="방명록" />
          <div
            style={{
              width: "75%",
              display: "grid",
              gridTemplateColumns: "repeat(3, 30%)",
            }}
          >
            hi
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
