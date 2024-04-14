import { Badge, Button, Input } from '@vikramhegde/react-elemental'
import SearchIcon from '~icons/solar/magnifer-linear'
import AddIcon from '~icons/solar/add-circle-linear'
import BellIcon from '~icons/solar/bell-linear'
import ChatIcon from '~icons/solar/chat-line-linear'
import ChevronDown from '~icons/solar/alt-arrow-down-outline'
import BagIcon from '~icons/solar/bag-2-linear'
import GraphIcon from '~icons/solar/graph-new-outline'
import ProductGrid from './components/ProductGrid'

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

function App() {
	return (
		<>
			<header className="flex h-20 items-center px-9">
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="mr-4"
				>
					<path
						d="M10 42C8.9 42 7.95867 41.6087 7.176 40.826C6.39333 40.0433 6.00133 39.1013 6 38V10C6 8.9 6.392 7.95867 7.176 7.176C7.96 6.39333 8.90133 6.00133 10 6H22V42H10ZM26 42V24H42V38C42 39.1 41.6087 40.042 40.826 40.826C40.0433 41.61 39.1013 42.0013 38 42H26ZM26 20V6H38C39.1 6 40.042 6.392 40.826 7.176C41.61 7.96 42.0013 8.90133 42 10V20H26Z"
						fill="#282C31"
					/>
				</svg>

				<Input
					placeholder="Search or type a command"
					startIcon={<SearchIcon className="stroke-2" />}
				/>

				<div className="flex ml-auto items-center gap-7">
					<Button startIcon={<AddIcon />}>New Product</Button>
					<Badge
						anchorOffset={{
							top: '-5px',
							right: '-5px',
						}}
						count={5}
						anchor="top-right"
						className="h-4 w-4 text-[10px]"
					>
						<ChatIcon className="h-6 w-6" />
					</Badge>
					<Badge anchor="top-right">
						<BellIcon className="h-6 w-6" />
					</Badge>
				</div>
			</header>
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
							<div className="product flex gap-2 items-center">
								<img
									src="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="product"
									className="rounded-lg h-[75px] w-[75px] object-cover"
								/>
								<div className="flex-1">
									<h4 className="font-semibold text-xl">Coco cola</h4>
									<p className="text-gray-500">Food / Drinks</p>
								</div>
								<p className="text-gray-900 tabular-nums text-xl font-bold">
									$2,453
								</p>
							</div>
							<div className="product flex gap-2 items-center">
								<img
									src="https://images.pexels.com/photos/3270222/pexels-photo-3270222.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="product"
									className="rounded-lg h-[75px] w-[75px] object-cover"
								/>
								<div className="flex-1">
									<h4 className="font-semibold text-xl">Pine Forest</h4>
									<p className="text-gray-500">Deodrant</p>
								</div>
								<p className="text-gray-900 tabular-nums text-xl font-bold">
									$105.60
								</p>
							</div>
							<div className="product flex gap-2 items-center">
								<img
									src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="product"
									className="rounded-lg h-[75px] w-[75px] object-cover"
								/>
								<div className="flex-1">
									<h4 className="font-semibold text-xl">Blue Container</h4>
									<p className="text-gray-500">Misc</p>
								</div>
								<p className="text-gray-900 tabular-nums text-xl font-bold">
									$200
								</p>
							</div>
							<div className="product flex gap-2 items-center">
								<img
									src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="product"
									className="rounded-lg h-[75px] w-[75px] object-cover"
								/>
								<div className="flex-1">
									<h4 className="font-semibold text-xl">Fufifilm X-10</h4>
									<p className="text-gray-500">Camera</p>
								</div>
								<p className="text-gray-900 tabular-nums text-xl font-bold">
									$3,000
								</p>
							</div>
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
