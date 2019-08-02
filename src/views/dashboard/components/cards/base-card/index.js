import styled from "styled-components";

import * as colors from "../../../../../commons/colors";

const BaseCard = styled.div`
    height: 250px;
    background-color: ${colors.white};
    border-radius: 16px;
    color: ${colors.black};
    margin: 24px 0;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15), 0 1px 20px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
`;

export default BaseCard;
