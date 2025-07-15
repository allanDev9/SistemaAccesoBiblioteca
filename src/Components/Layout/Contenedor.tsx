import { Outlet } from 'react-router-dom'
import UNAHVS from '../../assets/UNAHVS6.jpg'

export const Contenedor = () => {
    return (
        <div className="border-0 p-4 bg-gray-200 overflow-y-scroll h-[75vh]"
            style={{ backgroundImage: `url(${UNAHVS})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <Outlet />
        </div >
    )
}
