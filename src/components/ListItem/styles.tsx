import styled from "styled-components";

type ContainerProps={
    done:boolean
}

export const Container = styled.div(({done}:ContainerProps)=>(
    ` display: flex;
    align-items: center;
    background-color: #20212c;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;

    input{
        width: 2.5rem;
        height: 2.5rem;
        margin-right: .5rem;

    }

    label{
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }`
));