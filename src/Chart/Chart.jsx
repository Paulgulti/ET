import React, { useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { ContextProvider } from '../Context';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {

    const { incomeTransaction, expenseTransaction } = useContext(ContextProvider)

    const totalIncome = incomeTransaction.map(itr => parseFloat(itr.amount))
        .reduce((acc, current) => { return acc + current }, 0)

    const totalExpense = expenseTransaction.map(itr => parseFloat(itr.amount))
        .reduce((acc, current) => { return acc + current }, 0)


    const state = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                label: "Amount in $",
                data: [totalIncome, totalExpense],
                backgroundColor: ["#43d143", "#de0a26"],
            }
        ]
    }

    const options = {
        plugins: {
            legend:{
                displa: true,
                position: "bottom",
            }
        }
    }
    return (
        <>
            <Pie data={state} options={options} />
        </>
    )
}

export default Chart
