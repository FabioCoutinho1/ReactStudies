import { useState, useEffect } from "react";

const Mensage = ({ type, text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const time = setInterval(() => {
      setVisible(false);
    }, 3000);

    return () => clearInterval(time);
  }, [text]);
  return (
    <>
      {visible && (
        <div className="bg-emerald-100 text-emerald-600 p-2 text-center mb-4">
          {text}
        </div>
      )}
    </>
  );
};

export default Mensage;
