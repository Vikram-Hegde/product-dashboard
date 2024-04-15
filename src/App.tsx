import { Button, Chip } from '@vikramhegde/react-elemental'
import ChevronDown from '~icons/solar/alt-arrow-down-outline'
import BagIcon from '~icons/solar/bag-2-linear'
import ChatIcon from '~icons/solar/chat-line-linear'
import GraphIcon from '~icons/solar/graph-new-outline'
import ProductGrid from './components/ProductGrid'
import Header from './components/Header'
import PopularProduct from './components/PopularProduct'

const products = [
	{
		name: 'Product 1',
		image:
			'https://images.pexels.com/photos/397978/pexels-photo-397978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: '$19.99',
	},
	{
		name: 'Product 2',
		image:
			'https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: '$29.99',
	},
	{
		name: 'Product 3',
		image:
			'https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		price: '$39.99',
	},
]

const popularProducts = [
	{
		name: 'Coco cola',
		image:
			'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600',
		category: 'Food / Drinks',
		price: '$2,453',
		status: 'Processing',
		accent: 'orange',
	},
	{
		name: 'Pine Forest',
		image:
			'https://images.pexels.com/photos/3270222/pexels-photo-3270222.jpeg?auto=compress&cs=tinysrgb&w=600',
		category: 'Deodrant',
		price: '$105.60',
	},
	{
		name: 'Blue Container',
		image:
			'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
		category: 'Misc',
		price: '$200',
		status: 'Active',
		accent: 'green',
	},
	{
		name: 'Fufifilm X-10',
		image:
			'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		category: 'Camera',
		price: '$3000',
		status: 'Inactive',
		accent: 'red',
	},
]

function App() {
	return (
		<>
			<Header />
			<main className="px-9 mt-3">
				<h1 className="font-semibold text-4xl">Dashboard</h1>
				<div className="grid mt-8">
					<section className="overview p-6 rounded-lg">
						<div className="flex justify-between">
							<h2 className="font-semibold text-2xl">Overview</h2>
							<Button
								variant="secondary"
								size="sm"
								borderAccent="secondary"
								className="py-1"
								endIcon={<ChevronDown />}
							>
								All time
							</Button>
						</div>
						<div className="bg-gray-100 flex p-2 mt-6 rounded-lg">
							<div className="flex gap-3 bg-gray-50 px-4 py-6 flex-1 rounded-md shadow-md">
								<span className="bg-teal-300 text-teal-900 self-start p-2 rounded-full">
									<BagIcon className="h-6 w-6" />
								</span>
								<div>
									<h3 className="font-semibold text-gray-500 text-xl">
										Customers
									</h3>
									<p className="text-gray-900 tabular-nums text-6xl font-semibold">
										2048
									</p>
								</div>
							</div>
							<div className="flex gap-3 px-4 py-6 flex-1">
								<span className="bg-violet-300 text-violet-900 self-start p-2 rounded-full">
									<GraphIcon className="h-6 w-6" />
								</span>
								<div>
									<h3 className="font-semibold text-gray-500 text-xl">
										Income
									</h3>
									<p className="text-gray-900 tabular-nums text-6xl font-semibold">
										250K
									</p>
								</div>
							</div>
						</div>
						<div className="mt-4 flex items-start justify-between">
							<span className="max-w-60">
								Welcome <strong>302 customers</strong> with a nice personal
								message
							</span>
							<Button
								className="font-bold py-2"
								variant="secondary"
								borderAccent="secondary"
								endIcon={<ChatIcon className="h-4 w-4" />}
							>
								Send Message
							</Button>
						</div>
					</section>
					<section className="popular p-4">
						<h2 className="font-semibold text-2xl">Popular Products</h2>
						<div className="mt-5 flex flex-col gap-3">
							{popularProducts.map((product, index) => (
								<PopularProduct key={index} product={product} />
							))}
						</div>
					</section>
					<section className="col-span-2 mt-4 px-4 py-5">
						<h1 className="text-3xl font-semibold mb-6">
							Products to be released
						</h1>
						<ProductGrid products={products} />
					</section>
				</div>
			</main>
		</>
	)
}

export default App
