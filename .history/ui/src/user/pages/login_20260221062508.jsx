import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import Greenimg from "../../assets/Green.png"
import Eloraimg from "../../assets/The_ELORA_logo.png"
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"
import { Link, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
function Sign() {
    useEffect(() => {
        document.title = 'Login';
    }, []);
    const [addclass, setAddClass] = useState("")
    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState(<AiOutlineEyeInvisible />)
    const [signUp, setSignUp] = useState('sign-up-container')
    const [signIn, setSignIn] = useState('sign-in-container')
const [showPasswordRules, setShowPasswordRules] = useState(false);
const [passwordValid, setPasswordValid] = useState(false);

    const handelToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(<AiOutlineEye />)
        } else {
            setPasswordType('password');
            setPasswordIcon(<AiOutlineEyeInvisible />)
        }
    }

    const chanceSiginUp = () => {
        if (signIn === 'sign-in-container') {
            setSignIn("remove-sign-in")
            setSignUp('sign-up-container')
        } else {
            setSignIn("sign-in-container")
            setSignUp('remove-up-sign')
        }
    }

    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: "",
    });
    let [bool, setBool] = useState(false);
    // const addUser = (e) => {
    //     e.preventDefault();
    //     setBool(true);
    //     if (user.name.trim() !== "" && user.email !== "" && user.pass !== "") {
    //         fetch("http://localhost:3002/users", {
    //             method: "POST",
    //             headers: {
    //                 "content-type": "application/json",
    //             },
    //             body: JSON.stringify(user),
    //         });
    //         setUser({ name: "", email: "", pass: "" });
    //         toast.success("Qeydiyyat uğurla tamamlandı", {
    //             position: "top-center",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: false,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             transition: Bounce,
    //         });
    //         setTimeout(() => {
    //             setAddClass("left-panel-active");
    //         }, 3000);
    //         setBool(false)
    //     } else {
    //         toast.error("Melumatlari tam daxil edin", {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: false,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //             transition: Bounce,
    //         });
    //     }
    // };


    const [signInUser, setSignInUser] = useState({
        email: "",
        pass: "",
    });
    let [loginError, setLoginError] = useState(false);

    const welcome = (e) => {
        e.preventDefault();
        setLoginError(true);

        fetch("http://localhost:3002/admin")
            .then(res => res.json())
            .then(adminData => {
                const adminFound = adminData.find(
                    a => a.email === signInUser.email && a.pass === signInUser.pass
                );

                if (adminFound) {
                    toast.success("Admin panelinə xoş gəldiniz", {
                        position: "top-center",
                        autoClose: 3000,
                        theme: "colored",
                        transition: Bounce,
                    });

                    localStorage.setItem("adminId", adminFound.id);
                    localStorage.setItem("role", "admin");
                    // sessionStorage.setItem("role", "admin");
                    // sessionStorage.setItem("adminId", adminFound.id);



                    setTimeout(() => {
                        navigate("/admin");
                    }, 3000);

                    setLoginError(false);
                } else {

                    fetch("http://localhost:3002/users")
                        .then(res => res.json())
                        .then(users => {
                            const userFound = users.find(
                                u => u.email === signInUser.email && u.pass === signInUser.pass
                            );

                            if (userFound) {
                                toast.success("Hesabınıza xoş gəldiniz", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    theme: "colored",
                                    transition: Bounce,
                                });

                                localStorage.setItem("userId", userFound.id);

                                setTimeout(() => {
                                    navigate("/");
                                }, 3000);

                                setLoginError(false);
                            } else {
                                toast.error("Email və ya şifrə yanlışdır", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    theme: "colored",
                                    transition: Bounce,
                                });
                            }
                        });
                }
            });
    };

    const { t } = useTranslation();
 const checkPassword = (pass) => {
  // Minimum 8 simvol, 1 böyük hərf, 1 xüsusi simvol
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  return regex.test(pass);
};


    return (
        <>
            <ToastContainer />
            <section className='login grid grid-cols-1'>
                <div className={`container-login ${addclass}`} id='container-login'>

                    <div className={`form-container ${signUp} `}>
                        <form onSubmit={addUser}>
                            <h1>{t("createAccount")}</h1>
                            <input
                                type="text"
                                placeholder={t("name")}
                                value={user.name}
                                onChange={(e) => {
                                    setUser({ ...user, name: e.target.value });
                                    setBool(false);
                                }}
                            />

                            {bool && user.name.trim() == "" && <p className="text-red-700 mr-[240px]">{t("nameRequired")}</p>}
                            <input
                                type="email"
                                placeholder={t("email")}
                                value={user.email}
                                onChange={(e) => {
                                    setUser({ ...user, email: e.target.value });

                                }} />
                            {bool && user.email.trim() == "" && <p className="text-red-700 mr-[230px]">{t("emailRequired")}</p>}
                            {/* <div className="pasword-icon">
                                <input
                                    type={passwordType}
                                    placeholder={t("password")}
                                    value={user.pass}
                                    onChange={(e) => {
                                        setUser({ ...user, pass: e.target.value });

                                    }} />
                                {bool && user.pass.trim() == "" && <p className="text-red-700 mr-[235px] mb-[10px]">{t("passwordRequired")}</p>}
                                <div className='pas-icons' onClick={handelToggle}>
                                    {passwordIcon}
                                </div>
                            </div> */}
                            <div className="pasword-icon">
  <input
    type={passwordType}
    placeholder={t("password")}
    value={user.pass}
    onFocus={() => setShowPasswordRules(true)}
    onChange={(e) => {
      setUser({ ...user, pass: e.target.value });
      setPasswordValid(checkPassword(e.target.value));
    }}
    onBlur={() => {
      if (passwordValid) setShowPasswordRules(false);
    }}
  />
  <div className='pas-icons' onClick={handelToggle}>
    {passwordIcon}
  </div>
</div>


                            <button className='loginBtn' type='submit'>{t("register")}</button>

                            <div className="auth-inline">
                                <p className="soft-auth">{t("haveAccount")}</p>

                                <button
                                    type="button"
                                    className="auth-btn primary"
                                    onClick={() => setAddClass("left-panel-active")}
                                >
                                    {t("login")}
                                </button>

                            </div>
                            <div className="or-sign">
                                <hr />
                                <span className='login-span'>{t("orRegisterWith")}</span>
                            </div>
                            <hr />

                            <div className="forum-img">
                                <div className="login-watch-icon">
                                    <FaFacebookF />
                                </div>
                                <div className="login-watch-icon">
                                    <FaGoogle />
                                </div>
                                <div className="login-watch-icon">
                                    <FaTwitter />
                                </div>
                                <div className="login-watch-icon">
                                    <FaLinkedinIn />
                                </div>
                            </div>
                            <p className='account-text'>{t("noAccount")} <a href="#" className='sign-up-btn2' onClick={chanceSiginUp}><b>{t("login")}</b></a></p>
                        </form>
                        <hr />
                    </div>
                    <div className={`form-container  ${signIn}`}>

                        <form onSubmit={welcome}>
                            <h1>{t("login")}</h1>
                            <input type="email" value={signInUser.email} placeholder={t("email")} onChange={(e) => setSignInUser({ ...signInUser, email: e.target.value })} />
                            {loginError && signInUser.email.trim() == "" && <p className="text-red-700 mr-[230px]">{t("emailRequired")}</p>}
                            <div className="pasword-icon">
                                <input type={passwordType} value={signInUser.pass} placeholder={t("password")} onChange={(e) => setSignInUser({ ...signInUser, pass: e.target.value })} />
                                {loginError && signInUser.pass.trim() == "" && <p className="text-red-700 mr-[235px] mb-[10px]">{t("passwordRequired")}</p>}
                                <div className='pas-icons' onClick={handelToggle}>
                                    {passwordIcon}
                                </div>
                            </div>

                            <button className='loginBtn' type='submit'>{t("login")}</button>

                            <p className="forgot-password">
                                <Link to="/forgot-password" className='forgot-link'>{t("forgot")} </Link>
                            </p>

                            <div className="auth-inline">
                                <p className="soft-auth">{t("noAccount")}</p>
                                <button
                                    type="button"
                                    className="auth-btn primary"
                                    onClick={() => setAddClass("right-panel-active")}
                                >
                                    {t("register")}
                                </button>


                                <Link to="/" className="auth-btn primary">
                                    {t("guest")}
                                </Link>
                            </div>


                            <div className="or-sign">
                                <hr />
                                <span className='login-span'>{t("orLoginWith")}</span>
                            </div>
                            <hr />
                            <div className="forum-img">
                                <div className="login-watch-icon">
                                    <FaFacebookF />
                                </div>
                                <div className="login-watch-icon">
                                    <FaGoogle />
                                </div>
                                <div className="login-watch-icon">
                                    <FaTwitter />
                                </div>
                                <div className="login-watch-icon">
                                    <FaLinkedinIn />
                                </div>
                            </div>

                            <p className='account-text'>{t("noAccount")} <a href="#" className='sign-up-btn2' onClick={chanceSiginUp}><b>Register</b></a></p>
                        </form>

                    </div>

                    <div className="overlay-container">
                        <div className="overlay-sign">
                            <div className="overlay-panel overlay-left">
                                <div className="overlay-img">
                                    <Link to="/">
                                        <img src={Eloraimg} alt="Home" />
                                    </Link>
                                </div>
                                <button className='ghost' id='signIn' onClick={() => setAddClass("")}>{t("goToLogin")}</button>

                            </div>
                            <div className="overlay-panel overlay-right">
                                <div className="overlay-img">
                                    <Link to="/">
                                        <img src={Eloraimg} alt="Home" />
                                    </Link>
                                </div>
                                <button className='ghost' id='signUp' onClick={() => setAddClass("right-panel-active")}>{t("goToRegister")}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}
export default Sign



