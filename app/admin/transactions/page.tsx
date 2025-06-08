import type { Metadata } from "next"
import TransactionsHeader from "@/components/admin/TransactionsHeader"
import TransactionsTable from "@/components/admin/TransactionsTable"

export const metadata: Metadata = {
  title: "Transaction Management - Admin Dashboard",
  description: "Manage all transactions on the escrow platform",
}

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter text-black">Transaction Management</h1>

      <TransactionsHeader />
      <TransactionsTable />
    </div>
  )
}

