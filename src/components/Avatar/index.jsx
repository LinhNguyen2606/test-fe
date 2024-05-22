import './Avatar.scss';

const Avatar = ({ src, alt }) => {
  return (
    <figure className="avatar">
      <img src={src} alt={alt} className="avatar-img" />
    </figure>
  );
};

export default Avatar;
