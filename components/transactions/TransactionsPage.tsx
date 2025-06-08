"use client"

import type React from "react"
import { useState } from "react"
import TransactionTabs from "./TransactionTabs"
import TransactionSearch from "./TransactionSearch"
import TransactionTable from "./TransactionTable"
import type { Transaction } from "./types"
import Header from "@/components/dashboard/Header"
import Link from "next/link"
import { Plus } from "lucide-react"

const TransactionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample transaction data
  const allTransactions: Transaction[] = [
    {
      id: "13090867",
      title: "Create a web application for Escrowise",
      created: "Mar 27, 2025",
      amount: "$2,500.00",
      currency: "USD",
      role: "Buyer",
      status: {
        type: "awaiting-response",
        text: "Awaiting response",
      },
    },
    {
      id: "13090730",
      title: "Webapp development project for Escrowise",
      created: "Mar 26, 2025",
      amount: "$1,435.00",
      currency: "USD",
      role: "Buyer",
      status: {
        type: "awaiting-payment",
        text: "Awaiting Payment",
      },
    },
    {
      id: "13090612",
      title: "Logo design for Escrowise platform",
      created: "Mar 24, 2025",
      amount: "$350.00",
      currency: "USD",
      role: "Seller",
      status: {
        type: "completed",
        text: "Completed",
      },
    },
    {
      id: "13090523",
      title: "Mobile app UI/UX design",
      created: "Mar 22, 2025",
      amount: "$1,200.00",
      currency: "USD",
      role: "Buyer",
      status: {
        type: "cancelled",
        text: "Cancelled",
      },
    },
  ]

  // Filter transactions based on active tab and search query
  const filteredTransactions = allTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) || transaction.id.includes(searchQuery)

    if (activeTab === "all") return matchesSearch
    if (activeTab === "action-required") {
      return (
        matchesSearch &&
        (transaction.status.type === "awaiting-response" || transaction.status.type === "awaiting-payment")
      )
    }
    if (activeTab === "open") {
      return (
        matchesSearch &&
        (transaction.status.type === "awaiting-response" || transaction.status.type === "awaiting-payment")
      )
    }
    if (activeTab === "closed") {
      return matchesSearch && (transaction.status.type === "completed" || transaction.status.type === "cancelled")
    }

    return matchesSearch
  })

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilter = () => {
    // Implement filter functionality
    console.log("Filter button clicked")
  }

  return (
    <main className="flex flex-col bg-zinc-100 min-h-screen">
      <Header />
      <section className="px-4 sm:px-8 lg:px-16 py-6 sm:py-10 mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter text-black">My Transactions</h1>
          <Link
            href="/newtransaction"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-orange-400 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
          >
            <Plus className="h-4 w-4" />
            <span>New Transaction</span>
          </Link>
        </div>

        <TransactionTabs onTabChange={handleTabChange} />

        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <TransactionSearch
            onSearch={handleSearch}
            onFilter={handleFilter}
            totalTransactions={allTransactions.length}
            visibleTransactions={filteredTransactions.length}
          />

          <TransactionTable transactions={filteredTransactions} />
        </div>
      </section>
    </main>
  )
}

export default TransactionsPage

