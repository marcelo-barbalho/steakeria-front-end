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
      <div>
          {prods.length === 0 
          ? <div>Sem produtos</div>
          : prods.map((prd, i) => (
        <Card key={i} className="text-center">
          <ImgCard src={prd.photo} />
          <Card.Body>
            <Card.Title>{prd.title}</Card.Title>
            <Card.Text>{prd.description}</Card.Text>
          </Card.Body>
        </Card>
          ))}


      </div>
    )
  }

  return (
    <>
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
      ;
    </>
  );
};
const Product = styled.div`
  display: block;
  height: 500px;
  color: #111;
  .tab-content{
    background:#eee !important  }
`;
const TabBox = styled(Tabs)`
background:#eee;
`

const TabIcons = styled(Tab)`
color:red;
`

const ImgCard = styled(Card.Img)`
max-height:50px;
max-width:50px;
`