import styled from 'styled-components'

export const Task = styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 40rem;   

    margin: 0 auto;
    padding: 1em;

    border-bottom: 1px solid #ccc;

`

export const Details = styled.div`
    text-align: left;
    
    > h4{
        font-size: 1.2em;

        margin-bottom: 1em;
    }
`

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > i{
        margin-bottom: .5em;
        padding: .4em;

        font-size: 1.2em;
        color: #fff;

        cursor: pointer;

        background-color: #282c34;

        transition: all ease .5s;

        &:hover{
            color: #61dafb;
        }
    }
`
