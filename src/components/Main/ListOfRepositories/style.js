import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li{
        padding:15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    & + li {
        border-top: 1px solid #eee;
    }

    a{
        color:#0d2636;
        text-decoration: none;
    }
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    background: transparent;
    border: 0;
    color:#0d2636;
    padding: 0;
    outline: 0;
    border-radius: 4px;
`;