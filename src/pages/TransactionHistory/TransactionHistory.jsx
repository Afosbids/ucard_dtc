import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './TransactionHistory.css'
import SearchIcon from '../../assets/searchicon.svg'
import FilterIcon from '../../assets/filtericon.svg'
import DateIcon from '../../assets/dateinputicon.svg'

const columns = [
    { field: 'decoderNumber', headerName: 'Decoder Number', width: 150 },
    { field: 'transactionRef', headerName: 'Transaction Ref', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'amount', headerName: 'Amount', type: 'date', width: 170 },
    { field: 'status', headerName: 'Status', width: 200},
    { field: 'description', headerName: 'Description', width: 300},
    { field: 'action', headerName: 'Action', width: 190},
];

const rows = [
    { id: 1, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 2, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 3, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 4, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 5, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 6, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 7, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 8, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
];

export default function TransactionHistory() {
    return (
        <div className="transaction-history-container">
            <h2>Transaction History</h2>
            <p>See history of your payments and receipts</p>

            <div className="transaction-filter-options">
                <div className="history-searchbar">
                    <input className='transaction-searchbox' type="text" placeholder='Search by transaction reference, status.......' />
                    <img className='transaction-search-icon' src={SearchIcon} alt="" />
                </div>

                <div className="history-daterange">
                    <p>From</p>
                    <input className='transaction-searchdate' type="date" />
                    <p>To</p>
                    <input className='transaction-searchdate'  type="date" />
                </div>

                <div className="history-filter">

                    <img src={FilterIcon} alt="" />
                    <p>Filter</p>
                </div>
            </div>

            <div className="transaction-table-body">
                <div style={{ height: 600, width: '1515px' }}>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}