import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Title from "../../../components/titlePage";
import {Tab, Tabs, Container, Card,} from "react-bootstrap"
import {getCategory, getProducts} from '../../../services/admin'





export default () => {
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([])

  useEffect(()=> {
    let get = async () => { 
        const c = await getCategory()
        const p = await getProducts()
          setCategory(c.data)
          setProducts(p.data)
        }
        get()
    
  
    return () => () =>{}
  
  }, [])

  const mountProds = (prod) => {
    const prods = products.filter(i => i.category._id === prod._id)

    return (
      <ProductsWrapper>
          {prods.length === 0 
          ? <div>Sem produtos</div>
          : prods.map((prd, i) => (
        <ProductCard key={i} className="text-center">
          <ImgCard src={prd.photo} />
          <Card.Body>
            <ProductTitle>{prd.title}</ProductTitle>
            <Card.Text>{prd.complete_description}</Card.Text>
          </Card.Body>
        </ProductCard>
          ))}
</ProductsWrapper>
    )
  }

  return (
    
      <Product>
        {" "}
        <Title title="Product" sub="We have the best meat cuts, made by the best chefs, check it..."/>
          
          <Container>            
          <TabBox defaultActiveKey="0" className='produtos'>
            
            {category.map((cat, i) => (
            <TabIcons eventKey={i} title={cat.name} key={i}>
              {mountProds(cat)}
            </TabIcons>
            ))}
            
          </TabBox>
          </Container>
      </Product>
    
  );
};

//styled component
const Product = styled.div`
  display: block;
 min-height: calc(100vh - 257px);
  color: #ccc;
  padding-bottom:2em;
 
`;
const ProductsWrapper= styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,.9);
    border-top:brown 2px solid;
    border-radius:10px;
    `;

const TabBox = styled(Tabs)`
 border:none;
&:first-child{
  margin-left:0.5em;
}
  >.nav-link{
    background-color: rgba(0,0,0,.8);
    color:#ccc;
    margin-right:.2em;
    transition:ease-in;

   
&.active,&:hover {
   background-color: rgba(0,0,0,.9);
  color:brown;
  border:none;
 
}}
`
const ProductCard=styled(Card)`
background-color: transparent;
flex-direction:row;
width:50%;
padding:.5em 0;
`;
const TabIcons = styled(Tab)`
color:red;
`
const ProductTitle=styled(Card.Title)`
border-bottom: brown 1px solid;
    display: table;
    margin: auto;
    padding: .2em 1em;
    margin-bottom: 0.2em;
`;
const ImgCard = styled(Card.Img)`
max-width:200px;
max-height:150px;
`