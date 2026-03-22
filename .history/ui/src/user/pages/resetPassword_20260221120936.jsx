// import React, { useState } from "react";
// import { useNavigate } from "react-router";

// function ResetPassword() {
//   const [newPass, setNewPass] = useState("");
//   const navigate = useNavigate();

//   const params = new URLSearchParams(window.location.search);
//   const token = params.get("token");

//   const savedToken = localStorage.getItem("resetToken");
//   const email = localStorage.getItem("resetEmail");

//   const resetPassword = () => {
    
//     if (token !== savedToken) {
//       alert("Token yanlışdır");
//       return;
//     }

//     fetch("http://localhost:3002/users")
//       .then(res => res.json())
//       .then(users => {
//         const user = users.find(u => u.email === email);

//         if (user) {
//           fetch(`http://localhost:3002/users/${user.id}`, {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ pass: newPass }),
//           });

//           alert("Şifrə yeniləndi");
//           navigate("/login");
//         }
//       });
//   };

//   return (
//     <div  className="mt-[300px]">
//       <h2>Reset Password</h2>
//       <input
//         type="password"
//         placeholder="New password"
//         onChange={(e) => setNewPass(e.target.value)}
//       />
//       <button onClick={resetPassword}>Reset</button>
//     </div>
//   );
// }

// export default ResetPassword;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MdLock, MdVisibility, MdVisibilityOff, MdCheckCircle } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function ResetPassword() {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  const savedToken = localStorage.getItem("resetToken");
  const email = localStorage.getItem("resetEmail");

  const resetPassword = (e) => {
    e.preventDefault();

    if (!newPass) {
      toast.error("Yeni şifrə daxil edin");
      return;
    }

    if (newPass.length < 6) {
      toast.error("Şifrə ən azı 6 simvol olmalıdır");
      return;
    }

    if (newPass !== confirmPass) {
      toast.error("Şifrələr uyğun gəlmir");
      return;
    }

    if (token !== savedToken) {
      toast.error("Token yanlışdır və ya vaxtı bitib");
      return;
    }

    setLoading(true);

    fetch("http://localhost:3002/users")
      .then((res) => res.json())
      .then((users) => {
        const user = users.find((u) => u.email === email);

        if (user) {
          fetch(`http://localhost:3002/users/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pass: newPass }),
          })
            .then(() => {
              toast.success("Şifrə uğurla yeniləndi!");
              localStorage.removeItem("resetToken");
              localStorage.removeItem("resetEmail");
              setTimeout(() => {
                navigate("/login");
              }, 2000);
            })
            .catch(() => {
              toast.error("Xəta baş verdi");
            });
        } else {
          toast.error("İstifadəçi tapılmadı");
        }
      })
      .catch(() => {
        toast.error("Server xətası");
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
              <RiLockPasswordLine className="text-white text-4xl" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Reset Password
          </h2>

          <p className="text-center text-gray-600 mb-8 text-sm leading-relaxed">
            Please enter your new password below
          </p>

          {/* Form */}
          <form onSubmit={resetPassword} className="space-y-5">
            
            {/* New Password Input */}
            <div className="relative">
              <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                style={{ paddingLeft: '44px' }}
                className="w-full pr-12 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3A5041] focus:ring-4 focus:ring-[#3A5041]/10 transition-all duration-300 text-gray-700 placeholder:text-gray-400"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <MdVisibilityOff className="text-xl" />
                ) : (
                  <MdVisibility className="text-xl" />
                )}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <MdCheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                style={{ paddingLeft: '44px' }}
                className="w-full pr-12 py-3.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3A5041] focus:ring-4 focus:ring-[#3A5041]/10 transition-all duration-300 text-gray-700 placeholder:text-gray-400"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? (
                  <MdVisibilityOff className="text-xl" />
                ) : (
                  <MdVisibility className="text-xl" />
                )}
              </button>
            </div>

            {/* Password Strength Indicator */}
            {newPass && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className={`h-1 flex-1 rounded ${newPass.length >= 6 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <div className={`h-1 flex-1 rounded ${newPass.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <div className={`h-1 flex-1 rounded ${/[A-Z]/.test(newPass) && /[0-9]/.test(newPass) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                </div>
                <p className="text-xs text-gray-500">
                  {newPass.length < 6 && "Password must be at least 6 characters"}
                  {newPass.length >= 6 && newPass.length < 8 && "Good password"}
                  {newPass.length >= 8 && "Strong password"}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3A5041] text-white py-3.5 rounded-lg font-semibold text-base hover:bg-[#2a3d31] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none mt-6"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Resetting...</span>
                </div>
              ) : (
                "Reset Password"
              )}
            </button>

          </form>

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-[#3A5041] hover:text-[#2a3d31] font-medium transition-colors duration-300"
            >
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

export default ResetPassword;