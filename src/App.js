import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilesViewer from "./components/FilesViewer";
import SideIcons from "./components/SideIcons";
import { auth, provider } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          localStorage.setItem(
            "USER_STORAGE_FIREBASE",
            JSON.stringify(result.user)
          );
        })
        .catch((error) => alert(error.message));
    }
  };

  useEffect(() => {
    if (!user) {
      const userStorage =
        JSON.parse(localStorage.getItem("USER_STORAGE_FIREBASE")) || null;
      if (userStorage) setUser(userStorage);
    }
  }, [user]);

  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user?.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesViewer />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className="app__login">
          <img src="logo512.png" alt="Storage" />
          <button onClick={handleLogin}>Log in to Storage</button>
        </div>
      )}
    </div>
  );
}

export default App;
