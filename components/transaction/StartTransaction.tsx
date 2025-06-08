"use client"
import Header from "@/components/dashboard/Header"
import TransactionForm from "./TransactionForm"

function StartTransaction() {
  return (
    <main className="flex flex-col bg-zinc-100 min-h-screen">
      <Header />
      <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-10 max-w-7xl mx-auto w-full">
        <h1 className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
          Start Transaction
        </h1>
        <TransactionForm />
      </section>
    </main>
  )
}

export default StartTransaction

