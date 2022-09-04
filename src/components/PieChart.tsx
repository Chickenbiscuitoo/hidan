import { NextPage } from 'next'
import { CategoryScale } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

interface ChartData {
	labels: number[] | string[] | any
	datasets: {
		label: string
		data: number[] | string[]
		backgroundColor: string[]
		borderColor: string
		borderWidth: number
	}[]
}

interface ChartProps {
	chartData: ChartData
}

const PieChart: NextPage<ChartProps> = ({ chartData }) => {
	ChartJS?.register(CategoryScale)

	return <Pie data={chartData} />
}

export default PieChart
