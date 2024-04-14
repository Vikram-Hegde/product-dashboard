import { Badge, Button, Input } from '@vikramhegde/react-elemental'
import SearchIcon from '~icons/solar/magnifer-linear'
import AddIcon from '~icons/solar/add-circle-linear'
import BellIcon from '~icons/solar/bell-linear'
import ChatIcon from '~icons/solar/chat-line-linear'
import ChevronDown from '~icons/solar/alt-arrow-down-outline'
import BagIcon from '~icons/solar/bag-2-linear'
import GraphIcon from '~icons/solar/graph-new-outline'

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
				<div className="grid">
					<section className="overview p-6 mt-8 rounded-lg">
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
				</div>
			</main>
		</>
	)
}

export default App
