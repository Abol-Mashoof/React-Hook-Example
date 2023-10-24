import { Fragment, useRef, useEffect, useState } from "react";

const UseRefExample = () => {
  const inputRef = useRef(null);
  const renderCount = useRef(1);
  const [name, setName] = useState("");
  const prevState = useRef("");
  // NOTE useRef very similar useState
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  useEffect(() => {
    // console.log(inputRef.current);
    // inputRef.current.placeholder = "سلام"
    // inputRef.current.className = "bg-danger"
  }, []);
  // NOTE [] -> Dependency  Array -> آرایه ی وابستگی
  useEffect(() => {
    prevState.current = name;
  }, [name]);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <Fragment>
      <div className="w-50 d-grid gap-2 mx-auto">
        <h5 className="alert alert-success text-center">
          آشنایی با هوک useRef
        </h5>
        <p>{`نام شما برار است با : ${name}`}</p>
        <p>{`نام قبلی شما برار بوده با : ${prevState.current}`}</p>
        <p>{`مقدار رندر های انجام شده تا به الآن برار است با : ${renderCount.current}`}</p>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="اسم بده دلبندم..."
        />
        <button
          onClick={focusInput}
          type="button"
          className="btn btn-primary btn-block mt-2">
          تمرکز بنما 👀
        </button>
      </div>
    </Fragment>
  );
};
export default UseRefExample;
