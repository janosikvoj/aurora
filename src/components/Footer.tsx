import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer
        className="flex flex-row justify-between px-12 pt-24 pb-8 text-gray-12 font-sans text-sm font-medium"
        >
            <Link
            to={"/"}
            className={"flex flex-row gap-4 px-3 py-1.5 rounded-sm hover:bg-gray-4 ease-out duration-150"}
            onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                    <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">Aurora</span>Kurátor
            </Link>

            <div className="flex flex-row gap-8 items-center">
                <span>© 2024 Vojtěch Janošík</span>
                <svg className="fill-gray-12" width="10" height="20" viewBox="0 0 10 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L5 0L-3.81759e-07 15L0 0Z"/>
                    <path d="M5 20C7.76142 20 10 17.7614 10 15H5L5 20Z"/>
                    <rect x="5" width="5" height="15"/>
                </svg>
            </div>

        </footer>
    )
}