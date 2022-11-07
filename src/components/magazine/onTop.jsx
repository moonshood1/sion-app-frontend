import { useEffect } from "react";
import { useState } from "react";
import { getlastMag } from "../../api/getLastMag";

export function OnTop() {
  const [lastMag, setLastMag] = useState({});

  const getTheHeadline = async () => {
    const resp = await getlastMag();
    if (resp.success) {
      setLastMag(resp.magazine);
    }
  };

  useEffect(() => {
    getTheHeadline();
  }, []);
  return (
    <div className="container__row">
      {lastMag && (
        <>
          {/* <div className="container__col-2">
            <span>A la une </span>
            <h1 className="container__title">{lastMag.title}</h1>
            <p className="container__text disabled"> {lastMag.description}</p>
          </div> */}
          {/* <div className="container__col-2 right">
            <img
              src={lastMag.imageUrl}
              alt="mainCover"
              style={{ maxHeight: "400px" }}
            />
          </div> */}
        </>
      )}
    </div>
  );
}
