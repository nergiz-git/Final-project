// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "react-toastify";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const sendResetLink = (e) => {
//     e.preventDefault();

//     if (!email) {
//       toast.error("Email daxil edin");
//       return;
//     }

//     const token = Math.random().toString(36).substring(2, 15);

//     localStorage.setItem("resetToken", token);
//     localStorage.setItem("resetEmail", email);

//     const resetLink = `http://localhost:5173/reset-password?token=${token}`;

//     emailjs.send(
//       "service_zfaumbw",
//       "template_tny8fy4",
//       {
//         to_email: email,
//         reset_link: resetLink,
//       },
//       "lDuW38um9wOt6jxBL"
//     )
//     .then(() => {
//       toast.success("Şifrə sıfırlama linki emailə göndərildi");
//     })
//     .catch(() => {
//       toast.error("Email göndərilmədi");
//     });
//   };

//   return (
//     <form onSubmit={sendResetLink}className="mt-[300px]">
//       <h2>Forgot Password</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="submit">Send reset link</button>
//     </form>
//   );
// }

// export default ForgotPassword;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { MdEmail, MdArrowBack } from "react-icons/md";
import { FiMail } from "react-icons/fi";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendResetLink = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email daxil edin");
      return;
    }

    setLoading(true);

    const token = Math.random().toString(36).substring(2, 15);

    localStorage.setItem("resetToken", token);
    localStorage.setItem("resetEmail", email);

    const resetLink = `http://localhost:5173/reset-password?token=${token}`;

    emailjs
      .send(
        "service_zfaumbw",
        "template_tny8fy4",
        {
          to_email: email,
          reset_link: resetLink,
        },
        "lDuW38um9wOt6jxBL"
      )
      .then(() => {
        toast.success("Şifrə sıfırlama linki emailə göndərildi");
        setEmail("");
      })
      .catch(() => {
        toast.error("Email göndərilmədi");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="w-full max-w-md">
       
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          
       
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-[#3A5041] to-[#2a3d31] p-4 rounded-full">
              <FiMail className="text-white text-4xl" />
            </div>
          </div>

        
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Forgot Password?
          </h2>

          <p className="text-center text-gray-600 mb-8 text-sm leading-relaxed">
            Don't worry! Enter your email address and we'll send you a link to reset your password.
          </p>

        
          <form onSubmit={sendResetLink} className="space-y-6">
            
         
            <div className="relative">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full !pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3A5041] focus:ring-4 focus:ring-[#3A5041]/10 transition-all duration-300 text-gray-700 placeholder:text-gray-400"
                disabled={loading}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3A5041] text-white py-3.5 rounded-lg font-semibold text-base hover:bg-[#2a3d31] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Reset Link"
              )}
            </button>

          </form>

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-[#3A5041] hover:text-[#2a3d31] font-medium transition-colors duration-300 group"
            >
              <MdArrowBack className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Login</span>
            </Link>
          </div>

        </div>

        {/* Footer Info */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Remember your password?{" "}
          <Link to="/login" className="text-[#3A5041] hover:text-[#2a3d31] font-medium">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;