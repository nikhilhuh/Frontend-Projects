import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Navbar() {
  const [isDark, setIsDark] = useState(false); //for dark mode

  // to toggle dark mode
  function handleDarkModeToggle(): void {
    let newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("isDark", JSON.stringify(newMode));
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // to get the last toggled mode when visiting site again
  useEffect(() => {
    let savedMode = localStorage.getItem("isDark");

    if (savedMode != null && JSON.parse(savedMode)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="min-h-12 px-4 py-2 flex justify-between items-center text-black dark:text-white bg-gray-300 dark:bg-slate-700">
      <div className="text-xl font-bold">Frontend Projects</div>
      <div className="text-xl lg:text-2xl">
        {isDark ? (
          <MdLightMode
            onClick={handleDarkModeToggle}
            className="cursor-pointer"
          />
        ) : (
          <MdDarkMode
            onClick={handleDarkModeToggle}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
