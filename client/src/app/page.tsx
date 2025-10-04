import Image from "next/image"
import ProductList from "./components/ProductList"

const Homepage = () => {
  return (
    <div >
      <div className='relative aspect-[3/1] mb-12'>
        <Image src="/featured.png" alt="Featured Product" fill/>
      </div>
      <ProductList/>
    </div>
  )
}

export default Homepage