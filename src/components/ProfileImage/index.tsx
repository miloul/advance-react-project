interface ProfileProps {
  src: string;
  alt: string;
}

const ProfileImage = ({ src, alt, ...props }: ProfileProps) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        {...props}
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "10px",
          marginLeft: "30px",
          objectFit: "cover",
        }}
      />
    </>
  );
};

export default ProfileImage;
