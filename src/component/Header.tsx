import Logo from "../../public/images/logo.svg";
import IconDark from "../../public/images/icon-moon.svg";
import IconLight from "../../public/images/icon-sun.svg";

type HeaderProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const Header = ({darkMode, setDarkMode}: HeaderProps) => {
    const containerBg = darkMode ? 'bg-neutral-100' : 'bg-neutral-300/20';

    return (
        <div className={`flex justify-between w-5/6 items-center rounded-xl p-2 shadow ${containerBg}`}>
            <img alt="logo" src={Logo} className=""/>
            <div className="flex items-center justify-center">
                <div
                    onClick={() => setDarkMode(!darkMode)}
                    className={`flex items-center justify-center rounded-md w-8 h-8 sm:w-10 sm:h-10 cursor-pointer transition ${
                        darkMode ? 'bg-neutral-200' : 'bg-neutral-100/10 hover:border hover:border-neutral-900'
                    }`}
                >
                    <img
                        src={darkMode ? IconDark : IconLight}
                        alt={darkMode ? "Light" : "Dark"}
                        className="w-4 h-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;