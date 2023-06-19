import styles from '@/styles/Home.module.css'
import { Header } from "@/components/Header"
import { Balance } from "@/components/Balance";
import { IncomeExpenses } from "@/components/IncomeExpenses";
import { AddTransaction } from "@/components/AddTransaction";
import { TransactionList } from "@/components/TransactionList";
import {TransactionProvider} from "@/context/GlobalState"
export default function Home() {
  return (
    <div>
      <Header />
      <TransactionProvider>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </TransactionProvider>
    </div>
  )
}
