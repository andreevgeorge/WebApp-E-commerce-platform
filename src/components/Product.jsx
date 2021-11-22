import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import {React} from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(20, 19, 19, 0.13);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
flex:1;
margin: 5px;
width:400px;
height:550px;
display: flex;
justify-content: center;
align-items:center;
background-color:#ebf4f7;
position:relative;

&:hover ${Info}{
 opacity:1;
}
`
const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({item}) => {
 return (
  <Container>
   <Circle/>
   <Image src={item.img}/>

   <Info>
       <Icon>
        <ShoppingCartOutlined/>
       </Icon>
       <Icon>
       <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
       </Icon>
       <Icon>
        <FavoriteBorderOutlined/>
       </Icon>
   </Info>
  </Container>
 )
}

export default Product
