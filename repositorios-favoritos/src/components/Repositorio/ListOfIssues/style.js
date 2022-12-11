import styled from "styled-components";

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px;

        & + li {
            margin-top: 12px;
        }

        img{
            width:36px;
            height: 36px;
            border-radius: 50%;
            border:2px solid #022636;
        }

        div{
            flex: 1;
            margin-left: 12px;
            
            p{
                margin-top: 10px;
                font-size: 12px;
                color:#000;
            }
        }

        strong{
            font-size: 15px;

            a{
                text-decoration: none;
                color:#222;
                transform: 0.3s;

                &:hover{
                    color:#0071db;
                }
            }

            span{
                background-color: #222;
                color:#fff;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                padding: 5px 7px;
                margin-left: 10px;
            }
        }
    }
`;