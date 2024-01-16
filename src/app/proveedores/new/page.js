import FormProveedores from "@/components/FormProveedores"
import { newProveedor } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo proveedor</h3>
        <FormProveedores action={newProveedor} title='Crear proveedor' articulo={null} disabled={false}  />
    </div>
  )
}

export default page