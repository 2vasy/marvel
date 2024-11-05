import img from "./error.gif";

const ErrorMessage = () => {
  return (
    // <img src={ProcessingInstruction.env.PUBLIC_URL + '/error.gif'} alt="error" />
    <img  style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}} src={img} alt="error.gif" />
  )
};

export default ErrorMessage;
