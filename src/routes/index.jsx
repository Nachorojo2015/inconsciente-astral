import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
import { SobreNosotros } from '../pages/sobre-nosotros/SobreNosotros';
import { Galeria } from '../pages/galeria/Galeria';
import { Servicios } from '../pages/servicios/Servicios';
import { Contacto } from '../pages/contacto/Contacto';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path='/galeria' element={<Galeria />} />
      <Route path='/servicios' element={<Servicios />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
  )
}