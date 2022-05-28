import { NextPage } from "next";
import { useRouter } from "next/router";



const Product: NextPage = () => {

    const router = useRouter();

    const { productId } = router.query;

    if (!productId) return null;

    return <h1>Details about product {productId} </h1>
}

export default Product;