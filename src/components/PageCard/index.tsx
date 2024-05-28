import { Props } from "./type";
import {
  StyledContainer,
  StyledHoverInfo,
  StyledHoverInfoText,
  StyledImg,
  StyledInfoContainer,
} from "./style";

const PageCard = ({
  src,
  alt = "img",
  content,
  role,
  borderRadius = "2rem",
  width = "90%",
  height = "35rem",
  fontSize = 1.8,
  onDetail,
  ...props
}: Props) => {
  return (
    <StyledContainer
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      onClick={onDetail}
      {...props}
      style={{ justifyContent: "center" }}
    >
      <div style={{ justifyContent: "center" }}>
        <StyledImg src={src} alt={alt} />
        <div style={{ fontSize: "1.8rem" }}>{content}</div>
        <div>{role}</div>
      </div>

      <StyledInfoContainer $borderRadius={borderRadius} className="imgInfo">
        <StyledHoverInfo>
          <StyledHoverInfoText $fontSize={fontSize}>더보기</StyledHoverInfoText>
        </StyledHoverInfo>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default PageCard;
