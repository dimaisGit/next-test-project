import { NextPage } from "next";
import { useRouter } from "next/router";

const Review: NextPage = () => {
    const router = useRouter();

    const {reviewId, productId} = router.query;

    if (!reviewId || !productId) {
        return null;
    }

    return (
        <h1>Review {reviewId} about product {productId} </h1>
    )
}

export default Review;