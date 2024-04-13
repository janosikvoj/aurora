import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

export default function AuroraPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <NavBar />
            <MainContainer>
                <div className="text-lg">Error</div>
                {isRouteErrorResponse(error) ?
                    <>
                        <div>
                        <h1>Oops!</h1>
                        <h2>{error.status}</h2>
                        <p>{error.statusText}</p>
                        {error.data?.message && <p>{error.data.message}</p>}
                        </div>
                    </>
                : <div>Oops</div>
                }
            </MainContainer>
            <Footer />
        </>
    )
}