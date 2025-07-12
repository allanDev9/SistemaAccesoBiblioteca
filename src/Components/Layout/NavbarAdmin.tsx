import { Link, Outlet, useLocation } from "react-router-dom"

export const NavbarAdmin = () => {
    const location = useLocation();

    return (
        <div className="grid grid-cols-5 grid-rows-5 bg-black h-[65vh]">
            <div className="row-span-5">
                <ul className="flex flex-col space-x-8 text-xl font-bold text-yellow-300 p-[10px]">
                    <li>
                        <Link
                            to="/administrador/dashboard"
                            className={`hover-bg-soft-yellow ${location.pathname === "/administrador/dashboard" ? "bg-soft-yellow text-yellow-500" : ""
                                }`}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/administrador/users"
                            className={`hover-bg-soft-yellow ${location.pathname === "/adminsistrador/users" ? "bg-soft-yellow text-yellow-500" : ""
                                }`}
                        >
                            Usuarios
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-4 row-span-5 bg-blue-300">
                <Outlet />
            </div>
        </div>
    )
}