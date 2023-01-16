import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './TransactionHistory.css'

const columns = [
    { field: 'decoderNumber', headerName: 'Decoder Number', width: 120 },
    { field: 'transactionRef', headerName: 'Transaction Ref', width: 170 },
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'amount', headerName: 'Amount', type: 'date', width: 120 },
    { field: 'status', headerName: 'Status', width: 160},
    { field: 'description', headerName: 'Description', width: 160},
    { field: 'action', headerName: 'Action', width: 160},
];

const rows = [
    { id: 1, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 2, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 3, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
    { id: 4, decoderNumber: 7033839883, transactionRef: 'UC678038200LI986', date: '06/01/2023 11:50 AM', amount: '14,600.00', status: "Successful", description: "Dstv Compact Plus", action: "View Receipt" },
];

export default function TransactionHistory() {
    return (
        <div className="transaction-history-container">
            <h2>Transaction History</h2>
            <p>See history of your payments and receipts</p>

            <div className="transaction-filter-options">
                <div className="history-searchbar">
                    <input type="text" placeholder='Search by transaction reference, status.......' />
                </div>

                <div className="history-daterange">
                    <p>From</p>
                    <input type="date" />
                    <p>To</p>
                    <input type="date" />
                </div>

                <div className="history-filter">

                    <p>Filter</p>
                </div>
            </div>

            <div className="transaction-table-body">
                <div style={{ height: 400, width: '1315px' }}>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}