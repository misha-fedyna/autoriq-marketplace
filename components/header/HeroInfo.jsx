const HeroInfo = ({ name, description, link, linkDescription, nameStyles, pStyle, btnStyle }) => {
    return (
        <div>
            <h2 className={nameStyles}>{name}</h2>
            <p className={pStyle}>{description}</p>
            <a href={link} className={btnStyle}>{linkDescription}</a>
        </div>
    );
};


export default HeroInfo;
