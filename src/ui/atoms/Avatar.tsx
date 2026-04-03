type AvatarProps = {
  src: string;
  alt?: string;
};

export const Avatar = ({ src, alt }: AvatarProps) => {
  return <img className="avatar" src={src} alt={alt} />;
};