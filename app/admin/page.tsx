import type { Metadata } from "next"
import DashboardStats from "@/components/admin/DashboardStats"
import RecentTransactions from "@/components/admin/RecentTransactions"
import RecentUsers from "@/components/admin/RecentUsers"
import RecentActivity from "@/components/admin/RecentActivity"

export const metadata: Metadata = {
  title: "Admin Dashboard - Escrowise",
  description: "Admin dashboard for the Escrowise platform",
}

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter text-black">Admin Dashboard</h1>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentTransactions />
        <RecentUsers />
      </div>

      <RecentActivity />
    </div>
  )
}

