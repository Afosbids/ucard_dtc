import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import TransactionHistory from './pages/TransactionHistory/TransactionHistory'
import NotFound from './pages/NotFound/NotFound'
import ContactSupport from './pages/ContactSupport/ContactSupport'
import OrderDetailPage from './pages/OrderDetailPage/OrderDetailPage'
import OrderSummaryPage from './pages/OrderSummaryPage/OrderSummaryPage'
import PaymentOptionDetailPage from './pages/PaymentOptionDetailPage/PaymentOptionDetail'
import TransactionConfirmPage from './pages/TransactionConfirmPage/TransactionConfirmPage'
import TransactionHistoryPage from './pages/TransactionHistoryPage/TransactionHistoryPage'
import WrongOrderDetailPage from './pages/WrongOrderDetailPage/WrongOrderDetailPage'

function App() {

  return (
    <Routes>
      {/* <Route path='/'  element={<HomePage />}></Route>
      <Route path='/transaction-history' element={<TransactionHistory />} ></Route>
      <Route path='/support' element={<ContactSupport />} ></Route>
      <Route path='*' element={<NotFound />} /> */}
      {/* <Route path='/order-detail-page' element={<OrderDetailPage />}></Route>
      <Route path='/order-summary-page' element={<OrderSummaryPage />}></Route> */}
      {/* <Route path='/payment-option-detail-page' element={<PaymentOptionDetailPage />}></Route> */}
      {/* <Route path='/transaction-confirm-page' element={<TransactionConfirmPage />}></Route> */}
      {/* <Route path='/transaction-history-page' element={<TransactionHistoryPage />}></Route> */}
      <Route path='/wrong-order-detail-page' element={<WrongOrderDetailPage />}></Route>
    </Routes>
  )
}

export default App
