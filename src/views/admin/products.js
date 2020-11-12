import React, {useState, useEffect} from 'react'
import {getProducts} from '../../services/admin'

export default () => {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        let get = async () => { 
          const p = await getProducts()
            setProducts(p.data)
        }
        get()

        return () => get =() =>{}
   
    }, [])


  return (
    <>
      <ul>
  {products.map((item, i) => <li key={i}>{item.title}</li>)}
        
      </ul>
    </>
  )
}


