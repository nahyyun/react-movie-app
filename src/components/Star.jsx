import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`

position: relative;
font-size: 16px; //fontawesome icon의 default size는 parent element의 font-size임.
width:100px;
height: 16px;
.outer {
    width:100%;
    top:0;
    position: absolute;
    color: gray;
}
`;
const Inner = styled.div`
    color: crimson;
    overflow:hidden;
    ${width => `width: ${width.width * 10}%;`}
    position: absolute;
    top:0;
    white-space: nowrap;
`;

export default function Star({vote_average}){
    const printStar = () => {
        let star =[];
        for(let i = 0; i<5 ; i++){
            star.push(
                <FontAwesomeIcon className="star fa-fw" key={i} icon={faStar}/>
            )
        }
        return star;
    }

    return (
        <Wrapper>
            <div className="outer">
                {printStar()}
            </div>
            <Inner className="inner" width={vote_average}>
                    {printStar()}
                </Inner>
        </Wrapper>
    )
}
