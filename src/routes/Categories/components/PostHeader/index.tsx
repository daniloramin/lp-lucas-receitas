import "./style.scss";

import backArrow from "../../../../assets/images/icons/back-arrow.svg";
import { useNavigate } from "react-router";

export const PostHeader = ({ title }: { title: string }) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    return (
        <div className="post-header">
            <button onClick={handleBackButtonClick}>
                <img src={backArrow} alt="" />
            </button>

            <h1>{title}</h1>
        </div>
    );
};
