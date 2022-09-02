import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import { Chart as ChartJS } from 'chart.js/auto'
import { NextPage } from 'next'

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

const LineChart: NextPage<ChartProps> = ({ chartData }) => {
	ChartJS?.register(CategoryScale)

	return <Line data={chartData} />
}

export default LineChart
