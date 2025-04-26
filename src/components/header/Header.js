import { useEffect } from "react";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.jpg";
import { signOut } from "firebase/auth/cordova";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice";
import { toggleSmartSearch } from "../../utils/smartSlice";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";
import { changeLanguage } from "../../utils/langSlice";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const smartSearch = useSelector((state) => state.smartSearch?.showSmartSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSmartSearch = () => {
    dispatch(toggleSmartSearch());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="logo" />
      {user && (
        <div className="flex p-2">
          {smartSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={(e) => dispatch(changeLanguage(e.target.value))}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleSmartSearch}
            className="px-4 py-2 my-2 mx-4 bg-red-600 hover:bg-red-700 text-white rounded-lg"
          >
          {smartSearch ? 'Home' : 'Smart Search'}  
          </button>
          <img
            className="w-12 h-12"
            src={user.photoURL || User}
            alt="usericon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
