import React from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  return (
    <div className="error-message__box">
      <p className="error-message__info">
        Przepraszamy, ale wystąpił niespodziewany błąd, proszę spróbować
        pożniej.
      </p>
      <button className="btn btn--white" onClick={() => router.push("/")}>
        powrot do strony głównej
      </button>
    </div>
  );
};

export default Error;
