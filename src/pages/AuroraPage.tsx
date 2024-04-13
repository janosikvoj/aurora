import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

export default function AuroraPage() {
  return (
    <>
      <NavBar />
      <MainContainer>
          <div className="text-lg">Úvodní stránka</div>
      </MainContainer>
      <Footer />
    </>
  )
}