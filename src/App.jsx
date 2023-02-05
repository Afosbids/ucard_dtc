import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import TransactionHistory from './pages/TransactionHistory/TransactionHistory'
import NotFound from './pages/NotFound/NotFound'
import ContactSupport from './pages/ContactSupport/ContactSupport'
import OrderDetailPage from './pages/OrderDetailPage/OrderDetailPage'
import WrongOrderDetailPage from './pages/WrongOrderDetailPage/WrongOrderDetailPage'
import OrderSummaryPage from './pages/OrderSummaryPage/OrderSummaryPage'
import PaymentOptionDetailPage from './pages/PaymentOptionDetailPage/PaymentOptionDetail'
import TransactionConfirmPage from './pages/TransactionConfirmPage/TransactionConfirmPage'
import TransactionHistoryPage from './pages/TransactionHistoryPage/TransactionHistoryPage'
import TransactionSuccessfulModal from './components/TransactionSuccessfulModal/TransactionSuccessfulModal'
import OrderDetailNavBar from './components/OrderDetailPageComponent/OrderDetailNavBar'
import { Layout } from './components/Layout/Layout'
import SelectPaymentOption from './components/SelectPaymentOption/SelectPaymentOption'
import DropdownBouquet from './components/DropdownBouquet/DropdownBouquet'

function App() {

  return (
    <Routes>
      <Route index  element={<HomePage />}></Route>
      <Route path='/' element={<Layout />}>
      <Route path='/transaction-history' element={<TransactionHistory />} ></Route>
      <Route path='/support' element={<ContactSupport />} ></Route>
      <Route path='/order-detail-page' element={<OrderDetailPage />}></Route>
      <Route path='/wrong-order-detail-page' element={<WrongOrderDetailPage />}></Route>
      <Route path='/order-summary-page' element={<OrderSummaryPage />}></Route>
      <Route path='/payment-option-detail-page' element={<PaymentOptionDetailPage />}></Route>
      <Route path='/transaction-confirm-page' element={<TransactionConfirmPage />}></Route>
      <Route path='/transaction-history-page' element={<TransactionHistoryPage />}></Route>
      <Route path='/select-payment-option' element={<SelectPaymentOption />}></Route>
      <Route path='/transaction-success' element={<TransactionSuccessfulModal />}></Route>
      {/* <Route path='/dropdown-bouquet' element={<DropdownBouquet />}></Route> */}
      <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
