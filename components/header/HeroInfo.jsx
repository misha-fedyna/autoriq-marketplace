import Link from "next/link";

const HeroInfo = ({
  name,
  description,
  link,
  linkDescription,
  nameStyles,
  pStyle,
  btnStyle,
}) => {
  return (
    <div>
      <h2 className={nameStyles}>{name}</h2>
      <p className={pStyle}>{description}</p>
      <Link href={link} prefetch={false} className={btnStyle}>
        {linkDescription}
      </Link>
    </div>
  );
};

export default HeroInfo;
