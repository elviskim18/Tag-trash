import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './CSS/_Index.scss'
import {BrowserRouter} from "react-router-dom"
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient() 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    
    <BrowserRouter>
     <App/>
    </BrowserRouter>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
)
