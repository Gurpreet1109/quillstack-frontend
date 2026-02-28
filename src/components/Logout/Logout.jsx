import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    props.showAlert("Logout successful!", "success");
    navigate("/login");
  }, []);

  return null;
};

export default Logout;
