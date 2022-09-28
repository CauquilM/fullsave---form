import React from "react";
// import { useNavigate } from "react-router-dom";

const AuthForm: React.FC = (): JSX.Element => {
  document.title = "Portex";

//   const navigate = useNavigate();

  // Var contains cookie of custom home displayed (home administration, home support, home commercial ...)

  return (
    <div className="ch">
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
