import { NextPage } from "next";
import { useRouter } from "next/router";

const ReviewList: NextPage = () => {
    const router = useRouter();

    const {productId} = router.query;

    if (!productId) return null;
    
    return <h1>Reviews about product {productId} </h1>
}

export default ReviewList;