import { Spinner } from "react-bootstrap";

const WithSpinner =
  (Component) =>
  ({ isLoading, isError, ...props }) => {
    return (
      <>
        {isError ? (
          <p className="red">Ocurrio un error: {isError}</p>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <Component {...props} />
        )}
      </>
    );
  };

export default WithSpinner;
