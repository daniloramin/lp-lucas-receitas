import "./style.scss";

export const PostLink = ({
    imgSrc,
    title,
    description,
}: {
    imgSrc: string;
    title: string;
    description: string;
}) => {
    return (
        <div className="post-link">
            <img src={imgSrc} alt="" />

            <div className="content">
                <h2>{title}</h2>

                <p>{description}</p>
            </div>
        </div>
    );
};
