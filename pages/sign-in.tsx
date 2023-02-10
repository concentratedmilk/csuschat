import React, { useState } from "react";

interface Props {}

const RegisterPage: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.endsWith("@csus.edu")) {
      alert("Email address must be a @csus.edu address");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center h-screen bg-gray-50">
      <div className="w-full max-w-md m-auto">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-5 text-center text-gray-900">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <div className="mb-5">
            <input
              className="w-full p-3 text-gray-800 bg-gray-200 rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-5">
            <input
              className="w-full p-3 text-gray-800 bg-gray-200 rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            className="w-full p-3 text-white bg-indigo-500 rounded hover:bg-indigo-600"
            type="submit"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <div className="text-center mt-5">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                className="text-indigo-500 underline hover:text-indigo-600"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
