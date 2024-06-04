import { useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import Button from './Button';
import Text from './Text';

const SmallScreenAlert = () => {
  const [displayAlert, setDisplayAlert] = useState(
    window.screen.width < 768 ? true : false
  );

  function resetDisplayAlert() {
    if (window.screen.width < 768) {
      console.log('Page might not work properly on a small screen.');
      setDisplayAlert(true);
    } else setDisplayAlert(false);
  }
  window.addEventListener('resize', resetDisplayAlert);

  return (
    displayAlert && (
      <div className="z-50 fixed w-screen h-screen bg-gradient-to-b from-theme-10 to-theme-11 text-theme-1 flex flex-col p-16 items-center justify-center">
        <TriangleAlert size={28} strokeWidth={1.75} />
        <Text
          style="lead"
          elementType="div"
          className="relative text-theme-3 text-center mt-4 mb-8"
        >
          This app does not work perfectly on a small screen.
        </Text>
        <Button
          variant="secondary"
          onClick={() => {
            setDisplayAlert(false);
          }}
        >
          Okay
        </Button>
      </div>
    )
  );
};

export default SmallScreenAlert;
