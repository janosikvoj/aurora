import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";

export default function NavBar() {
    const links: {id: number, title: string, path: string}[] = [
        {
            id: 1,
            title: "Manuál",
            path: "/manual"
        },
        {
            id: 2,
            title: "Laboratoř",
            path: "/lab"
        },
        {
            id: 3,
            title: "Koncept",
            path: "/about"
        }
    ]

    const buttonClasses = {
        default: "px-3 py-1.5 rounded-sm",
        inactive: "hover:bg-gray-4 ease-out duration-150",
        active: "bg-gray-2 text-gray-12"
    }

    return (
        <nav className="text-gray-11 font-sans text-sm font-medium flex flex-row mx-12 my-4">
            <NavLink to={"/"}
            className={
            ({ isActive }) => cn("flex flex-row gap-4", buttonClasses.default, isActive ? buttonClasses.active : buttonClasses.inactive)
            }>
                <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">Aurora</span>Kurátor
            </NavLink>

            <div className="bg-gray-6 w-px mx-4"></div>

            {links.map((link) =>
                <NavLink key={link.id} to={link.path}
                className={
                ({ isActive }) => cn("flex flex-row gap-4", buttonClasses.default, isActive ? buttonClasses.active : buttonClasses.inactive)
                }>
                    {link.title}
                </NavLink>
            )}
        </nav>
    )
}