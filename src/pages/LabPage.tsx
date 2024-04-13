import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

export default function LabPage() {
  return (
    <>
      <NavBar />
      <MainContainer>
          <div className="text-lg">Laboratoř</div>
      </MainContainer>
      <Footer />
    </>
  )
}