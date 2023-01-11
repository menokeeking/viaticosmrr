import { Navigate, Route, Routes } from "react-router-dom"
import { ViaticosPage, CapturarViaticos, ListaViaticos } from "../pages"


export const ViaticosRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <ViaticosPage /> } />
        <Route path="/capturar-viatico" element={ <CapturarViaticos/>} />
        <Route path="/listado-viatico" element={ <ListaViaticos/>} />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
