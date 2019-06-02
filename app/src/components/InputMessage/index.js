import styled from 'styled-components'; 


const InputMessage = styled.input.attrs({
    children: props => props.content
})`
 width : 200px;
 heigth: 250px;
 display: flex;
 flex-direction: column;

`;

export default InputMessage;