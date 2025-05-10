import { useState, useEffect } from "react";
import { clsx } from "clsx";

const Mensage = ({ type = "success", text }) => {
  const [visible, setVisible] = useState(false);

  const clasesMessage = clsx("  p-2 text-center mb-4", {
    "bg-emerald-100 text-emerald-600": type === "success",
    "bg-red-100 text-red-600": type === "error",
  });

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
  return <>{visible && <div className={clasesMessage}>{text}</div>}</>;
};

export default Mensage;
