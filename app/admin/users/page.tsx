import type { Metadata } from "next"
import { UsersTable } from "@/components/admin/UsersTable"
import { UsersHeader } from "@/components/admin/UsersHeader"

export const metadata: Metadata = {
  title: "User Management - Admin Dashboard",
  description: "Manage all users of the escrow platform",
}

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter text-black">User Management</h1>

      <UsersHeader />
      <UsersTable />
    </div>
  )
}

