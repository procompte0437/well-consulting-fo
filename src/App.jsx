import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { SiteProvider } from './context/SiteContext'
import { About } from './pages/About'
import { Approach } from './pages/Approach'
import { ClientSpace } from './pages/ClientSpace'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { Legal } from './pages/Legal'
import { NotFound } from './pages/NotFound'
import { Services } from './pages/Services'
import { Work } from './pages/Work'

export default function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="demarche" element={<Approach />} />
            <Route path="realisations" element={<Work />} />
            <Route path="contact" element={<Contact />} />
            <Route path="espace-client" element={<ClientSpace />} />
            <Route path="nous-rejoindre" element={<Join />} />
            <Route path="conditions" element={<Legal />} />
            <Route path="confidentialite" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteProvider>
  )
}
