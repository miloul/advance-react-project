interface ProfileProps {
  src: string;
  alt: string;
}

const ProfileImage = ({ src, alt, ...props }: ProfileProps) => {
  return (
    <>
      <img
        style={{
          borderRadius: "1rem",
        }}
        src={src}
        alt={alt}
        {...props}
      />
    </>
  );
};

export default ProfileImage;
