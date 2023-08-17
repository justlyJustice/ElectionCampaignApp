import { useState } from "react";

const useSubmit = (submitFunc) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (...funcParams) => {
    setIsSubmitting(true);
    const res = await submitFunc(...funcParams);
    setIsSubmitting(false);

    if (!res) {
      setIsError(true);
      return setErrorMessage("Server connection error!");
    }

    if (!res.ok) {
      setIsError(true);
      setErrorMessage(res?.data?.error);

      return setTimeout(() => {
        setIsError(false);
        setErrorMessage("false");
      }, 5000);
    }

    setIsError(false);
    setErrorMessage("");

    setData(res.data?.data);
    return res;
  };

  return { data, isSubmitting, isError, errorMessage, submit };
};

export default useSubmit;
