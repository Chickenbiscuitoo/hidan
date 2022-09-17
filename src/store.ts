import create from 'zustand'
import axios from 'axios'

interface StoreSchema {
	currentPortfolioValue: number
	getCurrentPortfolioValue: () => void

	historyPortfolioValue: {
		date: string
		value: number
	}[]

	currentHoldings: {
		name: string
		symbol: string
		amount: number
		price: number
		value: number
	}[]

	historyHoldings: {
		name: string
		history: {
			status: string
			date: string
			amount: number
			price: number
		}[]
	}[]
}

const useHidanStore = create<StoreSchema>((set) => ({
	currentPortfolioValue: 0,
	getCurrentPortfolioValue: async () => {
		const API_URL = 'http://localhost:3000/api/'

		const { data } = await axios.get(API_URL + 'portfolio/value')
		const { portfolioValue } = data

		set({ currentPortfolioValue: portfolioValue })
	},

	historyPortfolioValue: [
		{
			date: '2021-01-01',
			value: 1000000,
		},
		{
			date: '2021-02-02',
			value: 900000,
		},
		{
			date: '2021-03-03',
			value: 1200000,
		},
		{
			date: '2021-04-04',
			value: 1200000,
		},
		{
			date: '2021-05-05',
			value: 1400000,
		},
		{
			date: '2021-06-06',
			value: 1600000,
		},
	],

	currentHoldings: [
		{
			name: 'Bitcoin',
			symbol: 'BTC',
			amount: 0.0001,
			price: 20000,
			value: 2,
		},
		{
			name: 'Ethereum',
			symbol: 'ETH',
			amount: 0.1,
			price: 10000,
			value: 1000,
		},
		{
			name: 'Intel',
			symbol: 'INTC',
			amount: 5,
			price: 5665,
			value: 100000,
		},
		{
			name: 'Apple',
			symbol: 'AAPL',
			amount: 100,
			price: 100000,
			value: 10000,
		},
		{
			name: 'Tesla',
			symbol: 'TSLA',
			amount: 50,
			price: 200,
			value: 101121,
		},
	],

	historyHoldings: [
		{
			name: 'BTC',
			history: [
				{
					status: 'buy',
					date: '2021-01-01',
					amount: 0.0001,
					price: 20000,
				},
				{
					status: 'sell',
					date: '2021-02-02',
					amount: 0.0001,
					price: 20200,
				},
				{
					status: 'buy',
					date: '2021-03-03',
					amount: 0.0002,
					price: 20000,
				},
				{
					status: 'buy',
					date: '2021-01-01',
					amount: 0.0001,
					price: 20000,
				},
				{
					status: 'sell',
					date: '2021-02-02',
					amount: 0.0001,
					price: 20200,
				},
				{
					status: 'buy',
					date: '2021-03-03',
					amount: 0.0002,
					price: 20000,
				},
				{
					status: 'buy',
					date: '2021-01-01',
					amount: 0.0001,
					price: 20000,
				},
				{
					status: 'sell',
					date: '2021-02-02',
					amount: 0.0001,
					price: 20200,
				},
				{
					status: 'buy',
					date: '2021-03-03',
					amount: 0.0002,
					price: 20000,
				},
				{
					status: 'buy',
					date: '2021-01-01',
					amount: 0.0001,
					price: 20000,
				},
				{
					status: 'sell',
					date: '2021-02-02',
					amount: 0.0001,
					price: 20200,
				},
				{
					status: 'buy',
					date: '2021-03-03',
					amount: 0.0002,
					price: 20000,
				},
			],
		},
		{
			name: 'ETH',
			history: [
				{
					status: 'buy',
					date: '2021-01-01',
					amount: 0.1,
					price: 10000,
				},
				{
					status: 'buy',
					date: '2021-02-02',
					amount: 0.1,
					price: 10200,
				},
			],
		},
		{
			name: 'INTC',
			history: [
				{
					status: 'buy',
					date: '2021-01-01',
					amount: 5,
					price: 5665,
				},
				{
					status: 'buy',
					date: '2021-02-02',
					amount: 5,
					price: 5665,
				},
			],
		},
		{
			name: 'AAPL',
			history: [
				{
					status: 'sell',
					date: '2021-01-01',
					amount: 100,
					price: 100000,
				},
				{
					status: 'sell',
					date: '2021-02-02',
					amount: 100,
					price: 100000,
				},
			],
		},
	],
}))

export default useHidanStore
