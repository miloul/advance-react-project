import ProfileImage from "./ProfileImage";

const Dongjin = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
        <ProfileImage
          src="/src/assets/ldj.jpg"
          alt="이동진사진"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            marginLeft: "30px",
          }}
        ></ProfileImage>

        <div style={{ marginTop: "40px" }}>
          <p>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>이동진</span>
          </p>
          <br />
          <p style={{ marginTop: "15px" }}>
            <a href="https://github.com/dongjin0521">
              <span style={{ fontSize: "15px" }}>깃허브 링크</span>
            </a>
          </p>
        </div>
      </div>

      <div style={{ marginLeft: "30px", marginTop: "15px" }}>
        <h1>
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>소개</span>
        </h1>
        <p style={{ fontSize: "13px", marginLeft: "33px" }}>
          <span>
            안녕하세요! 저는 경북대학교 컴퓨터공학부 심화컴퓨터전공 3학년 이동진
            입니다. <br />
            상상했던 것들을 스스로 구현해 작동되는 모습을 보는게 뿌듯하고
            재미있어 컴퓨터공학을 전공하게 되었습니다. <br />
            산업기능요원으로 js(jQuery), 스프링 개발을 한 경험이 있습니다.{" "}
            <br />
            좋아하는 음식은 샤브샤브이고 취미는 드라이브, 여행, 자전거 타기
            입니다!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Dongjin;
