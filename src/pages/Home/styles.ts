import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 64px;

    display: flex;
    flex-direction: column;

    gap: 64px;

    img {
        width: 36px;
    }

    h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 1.25;
        margin-top: 0;
        margin-bottom: 16px;
    }

    p {
        font-size: 24px;
        margin-bottom: 32px;
        max-width: 45ch;
    }

    .links {
        width: 100%;
        display: flex;
        flex-direction: row;

        gap: 32px;

        a {
            text-decoration: none;
            
            display: flex;
            flex-direction: row;

            align-items: center;

            gap: 12px;

            img {
                width: 18px;
            }

            border: 1px solid #29292e;
            color: #29292e;

            padding: 7px 12px;

            border-radius: 5px;

            &:hover {
                transition: 0.2s;
                color: #DC196F;
                border: 1px solid #DC196F;
                
                svg path {
                    transition: 0.2s;
                    stroke: #DC196F;
                }
            }
        }
    }

    div {
        h2 {
            font-size: 32px;
            line-height: 1.25rem;
            margin-bottom: 32px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 32px;
            width: 100%;

            div.component {
                display: flex;
                flex-direction: column;
                padding: 16px;
                border: 1px solid #29292e;

                border-radius: 5px;
                
                .row {
                    display: flex;
                    flex-direction: row;

                    align-items: center;

                    gap: 12px;

                    h3 {
                        font-size: 20px;
                        line-height: 1.25;
                        font-weight: 500;
                    }

                    a {
                        text-decoration: none;

                        &:hover {
                            svg path {
                                stroke: #DC196F;
                            }
                        }
                    }
                }

                span {
                    font-size: 16px;
                    margin: 12px 0;
                }

                &.disabled {
                    opacity: 0.6;
                }
            }
        }
    }

    .sourceCode {
        text-decoration: none;
        text-decoration: underline;

        color: #979797;
    }

    @media (max-width: 1100px) {
        padding: 32px;

        width: 100%;

        max-width: 100vw;

        .links {
            width: 100%;
            gap: 0;

            justify-content: space-between;

            a {
                width: max-content;
            }
        }
    }
`