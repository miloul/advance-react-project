import Tag from "../../components/Tag";
import Title from "../../components/Title";
import ProfileImage from "./ProfileImage";

const stacks: string[] = ["python", "C++", "Unity", "javascript"];

const Jaewon = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
        <ProfileImage
          src="/src/assets/kjw.jpg"
          alt="김재원사진"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            marginLeft: "30px",
          }}
        ></ProfileImage>

        <div style={{ marginTop: "40px" }}>
          <p>
            <Title isName={true} title="김재원" />
          </p>
          <br />
          <p style={{ marginTop: "15px" }}>
            <a href="https://github.com/PentiumG">
              <span style={{ fontSize: "15px" }}>깃허브 링크</span>
            </a>
          </p>
        </div>
      </div>

      <div style={{ marginLeft: "30px", marginTop: "15px" }}>
        <h1>
          <Title isName={false} title="소개" />
        </h1>
        <p style={{ fontSize: "13px", marginLeft: "33px" }}>
          안녕하세요. 저는 경북대학교 자연과학대학 물리학과 학부 2학년
          김재원입니다. <br />
          우리 세상을 모델링하여 다양한 모습들을 설명해내는 아름다움에 매력을
          느껴 물리학과로 진학하였습니다.
        </p>
        <Title isName={false} title="기술태그" />
        <div style={{ display: "flex" }}>
          {stacks.map((stack) => (
            <Tag name={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jaewon;
