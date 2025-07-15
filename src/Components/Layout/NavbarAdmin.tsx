import { Link, Outlet, useLocation } from "react-router-dom"

export const NavbarAdmin = () => {
    const location = useLocation();

    return (
        <div className="grid grid-cols-5 grid-rows-5 h-[70vh]" style={{ backgroundColor: "rgba(0, 0, 141, 0.94)" }}>
            <div className="row-span-5 px-5 py-3">
                <ul className="flex flex-col space-x-8 space-y-2 text-xl font-bold text-yellow-300 p-[10px]">
                    <li>
                        <Link
                            to="/administrador/dashboard"
                            className={`hover:ml-2 duration-300 ease-in-out ${location.pathname === "/administrador/dashboard" ? " text-yellow-500" : ""
                                }`}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/administrador/users"
                            className={`hover:ml-2 duration-300 ease-in-out ${location.pathname === "/adminsistrador/users" ? " text-yellow-500" : ""
                                }`}
                        >
                            Usuarios
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-4 row-span-5 bg-gray-200 p-4">
                <Outlet />
            </div>
        </div>
    )
}