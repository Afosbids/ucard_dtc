import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import TransactionHistory from './pages/TransactionHistory/TransactionHistory'
import NotFound from './pages/NotFound/NotFound'
import ContactSupport from './pages/ContactSupport/ContactSupport'
import OrderDetailPage from './pages/OrderDetailPage/OrderDetailPage'

function App() {

  return (
    <Routes>
      {/* <Route path='/'  element={<HomePage />}></Route>
      <Route path='/transaction-history' element={<TransactionHistory />} ></Route>
      <Route path='/support' element={<ContactSupport />} ></Route>
      <Route path='*' element={<NotFound />} /> */}
      <Route path='/order-detail-page' element={<OrderDetailPage />}></Route>
    </Routes>
  )
}

export default App
