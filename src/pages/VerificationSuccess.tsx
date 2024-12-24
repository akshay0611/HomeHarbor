import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/config/supabase";

const VerificationSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmEmail = async () => {
      const { user, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error confirming email:", error.message);
        navigate("/signin");  // Redirect to Sign In if there is an error
      } else if (user?.email_confirmed_at) {
        navigate("/signin"); // If email is confirmed, navigate to Sign In
      } else {
        // In case the email isn't confirmed yet, stay on the current page
        console.log("Email not confirmed yet");
      }
    };

    confirmEmail();
  }, [navigate]);

  return (
    <div className="verification-container">
      <h2>Verifying your email...</h2>
      <p>Please wait while we confirm your email address.</p>
    </div>
  );
};

export default VerificationSuccess;
