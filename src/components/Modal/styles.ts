import styled from "styled-components";

export const Container = styled.div`

`

export const Fade = styled.div`
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.7);
    
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
`

export const Modal = styled.div`
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;

    background-color: #fff;
    
    width: 50rem;
    min-height: 40rem;

    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    > h2{
        margin-bottom: 1em;
    }

    > form{
        width: 90%;
    }
`