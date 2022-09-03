import create from 'zustand'

interface StoreSchema {
	currentPortfolioValue: number
	setCurrentPortfolioValue: (value: number) => void

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
}

const useHidanStore = create<StoreSchema>((set) => ({
	currentPortfolioValue: 1200777,
	setCurrentPortfolioValue: (value: number) =>
		set({ currentPortfolioValue: value }),

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
}))

export default useHidanStore
