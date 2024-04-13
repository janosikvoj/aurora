import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

export default function ManualPage() {
  return (
    <>
      <NavBar />
      <MainContainer>
          <div className="text-lg">Manuál</div>
      </MainContainer>
      <Footer />
    </>
  )
}