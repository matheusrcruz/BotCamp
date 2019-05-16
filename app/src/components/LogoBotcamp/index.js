import logo from '../img/logo.svg';
import styled from 'styled-components';

const LogoBotcamp = styled.img.attrs({
    src:logo,
    alt: "Imagem logo botcamp"
})`
    width: ${ props =>(props.small ? "200px" : "248px")};   
`;
export default LogoBotcamp;
