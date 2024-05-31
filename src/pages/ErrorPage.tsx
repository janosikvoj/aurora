import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AuroraPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <NavBar />
      <main className="bg-theme-2 rounded-3xl flex flex-col grow overflow-hidden h-[calc(100vh-2.5rem)]">
        <div className="text-lg">Error</div>
        {isRouteErrorResponse(error) ? (
          <>
            <div>
              <h1>Oops!</h1>
              <h2>{error.status}</h2>
              <p>{error.statusText}</p>
              {error.data?.message && <p>{error.data.message}</p>}
            </div>
          </>
        ) : (
          <div>Oops</div>
        )}
      </main>
      <Footer />
    </>
  );
}
