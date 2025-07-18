import { Link, Outlet, useLocation } from "react-router-dom"

export const NavbarAdmin = () => {
    const location = useLocation();

    return (
        <div className="grid grid-cols-5 grid-rows-5 h-[75vh]  w-[119%]">
            <div className="row-span-5 px-5 py-3 bg-black/90 w-[80%]">
                <ul className="flex flex-col space-x-8 space-y-3 text-xl font-bold text-gray-300 p-[10px]">
                    <li>
                        <Link
                            to="/administrador/dashboard"
                            className={`hover:ml-2 duration-300 ease-in-out ${location.pathname === "/administrador/dashboard" ? " text-gray-400" : ""
                                }`}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/administrador/users"
                            className={`hover:ml-2 duration-300 ease-in-out ${location.pathname === "/adminsistrador/users" ? " text-gray-400" : ""
                                }`}
                        >
                            Usuarios
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-4 row-span-5 bg-gray-200 relative right-17 p-4 w-[100%] pl-10">
                <Outlet />
            </div>
        </div>
    )
}