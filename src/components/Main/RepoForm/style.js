import styled, { keyframes, css } from "styled-components";

// criando animação
const animate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: ${props => props.error ? '3px solid #ff0000' : '1px solid #DDD'};
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading
}))`
    background-color: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left:2px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled]{
        cursor: not-allowed;
        opacity: 0.5;
    }

    svg {
        margin: 0 auto;
    }

    ${props => props.loading && css`
        svg{
            animation: ${animate} 2s linear infinite;
        }
    `}
`;