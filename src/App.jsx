import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/ui/Header";
import { EstadoView } from "./components/estados/EstadoView";
import { InventarioView } from "./components/inventarios/InventarioView";
import { TipoView } from "./components/tipos/TipoView";
import { MarcaView } from "./components/marcas/MarcaView";
import { UsuarioView } from "./components/usuarios/UsuarioView";
import { InventarioUpdate } from "./components/inventarios/InventarioUpdate";
import { UsuarioUpdate } from "./components/usuarios/UsuarioUpdate";
import { MarcaUpdate } from "./components/marcas/MarcaUpdate";
import { TipoUpdate } from "./components/tipos/TipoUpdate";
import { EstadoUpdate } from "./components/estados/EstadoUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<InventarioView />}></Route>
          <Route path="home" element={<InventarioView />}></Route>
          <Route path="usuarios" element={<UsuarioView />}></Route>
          <Route path="marcas" element={<MarcaView />}></Route>
          <Route path="tipos" element={<TipoView />}></Route>
          <Route path="estados" element={<EstadoView />}></Route>

          <Route
            path="inventarios/edit/:inventarioId"
            element={<InventarioUpdate />}
          ></Route>

          <Route
            path="home/inventarios/edit/:inventarioId"
            element={<InventarioUpdate />}
          ></Route>

          <Route
            path="usuarios/usuario/edit/:usuarioId"
            element={<UsuarioUpdate />}
          ></Route>

          <Route
            path="marcas/marca/edit/:marcaId"
            element={<MarcaUpdate />}
          ></Route>

          <Route
            path="tipos/tipo/edit/:tipoId"
            element={<TipoUpdate />}
          ></Route>

          <Route
            path="estados/estado/edit/:estadoId"
            element={<EstadoUpdate />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
