import { useEffect, useState } from "react";

function DateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(new Date());
    }, 1000);

    return () => clearTimeout(timer);
  }, [now]);

  const weekday = now.toLocaleString("en-US", { weekday: "short" });
  const month = now.toLocaleString("en-US", { month: "short" });
  const day = now.toLocaleString("en-US", { day: "2-digit" });
  const time = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return <div>{`${weekday} ${month} ${day} ${time}`}</div>;
}

export default DateTime;
