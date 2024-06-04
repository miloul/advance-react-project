interface ProfileProps {
  src: string;
  alt: string;
}

const ProfileImage = ({ src, alt, ...props }: ProfileProps) => {
  return (
    <>
      <img src={src} alt={alt} {...props} />
    </>
  );
};

export default ProfileImage;
