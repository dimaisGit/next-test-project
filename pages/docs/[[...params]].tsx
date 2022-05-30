import { NextPage } from "next";
import { useRouter } from "next/router";

const Docs: NextPage = () => {
    const router = useRouter();
    const { params = [] } : { params?: string[] } = router.query;

    if (params.length === 2) {
        const [feature, concept] = params;

        return <h1>Viewing docs for feature {feature} and concept {concept} </h1>
    } else if (params.length === 1) {
        const [feature] = params;

        return <h1> Viewing docs for feature {feature} </h1>
    } else 
        return <h1>Docs home page</h1>;

}

export default Docs;