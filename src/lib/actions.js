'use server'
import db from '@/lib/sqlite'
import { redirect } from 'next/navigation';


//get
export async function getArticulos() {
  try {
    const results = await db.all('select * from articulos');
    // console.log(results);
    return results;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}

export async function getProveedores() {
  try {
    const results = await db.all('select * from proveedores');
    // console.log(results);
    return results;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}


//crear
export async function newArticulo(formData) {
  try {
    const nombre = formData.get('nombre');
    const descripcion = formData.get('descripcion');
    const precio = formData.get('precio');

    const query = 'insert into articulos(nombre,descripcion,precio) values (?, ?, ?)';
    const results = await db.run(query, [nombre, descripcion, precio]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function newProveedor(formData) {
  try {
    const nombre = formData.get('nombre');
    const telefono = formData.get('telefono');

    const query = 'insert into articulos(nombre,telefono) values (?, ?)';
    const results = await db.run(query, [nombre, telefono]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}


//editar
export async function editArticulo(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')

  try {
    const query = 'update articulos set nombre = ?, descripcion = ?, precio = ? where id = ? ';
    const results = await db.run(query, [nombre, descripcion, precio, id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function editProveedor(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const telefono = formData.get('telefono')

  try {
    const query = 'update articulos set nombre = ?, telefono = ? where id = ? ';
    const results = await db.run(query, [nombre, telefono, id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}


//borrar
export async function deleteArticulo(formData) {
  try {
    const id = formData.get('id');

    const query = 'delete from articulos where id = ?';
    const results = await db.run(query, [id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteProveedor(formData) {
  try {
    const id = formData.get('id');

    const query = 'delete from proveedor where id = ?';
    const results = await db.run(query, [id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedor');
}