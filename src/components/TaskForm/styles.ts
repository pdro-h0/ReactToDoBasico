import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 40rem;
    
    margin: 0 auto;

    > input[type="submit"]{
        background-color: #61dafb;
        border: 1px solid #61dafb;

        padding: .8rem 1.5rem;
        margin-bottom: .8em;


        color: #000;

        transition: all ease .5s;
        cursor: pointer;

        &:hover{
            background-color: #fff;
            border: 1px solid #282c34;
        }
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    text-align: left;

    > label{
        font-weight: bold;

        margin-bottom: .4em;
    }

    > input{
        padding: .8rem 1.5rem;
        margin-bottom: 1.5em;

        border-radius: 0;
        border: 1px solid #282c34;
    }
`