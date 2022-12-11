import styled from "styled-components";

export const FilterList = styled.div`
    margin: 15px 0;
    
    button{
        outline: 0;
        border: 0;
        margin: 0 3px;
        padding: 8px;
        border-radius: 4px;

        &:nth-child(${(props) => props.active + 1}){
            background-color: #0071db;
            color: #fff;
        }
    }
`;