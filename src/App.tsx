import { Badge, Button, Input } from '@vikramhegde/react-elemental'
import SearchIcon from '~icons/solar/magnifer-linear'
import AddIcon from '~icons/solar/add-circle-linear'
import BellIcon from '~icons/solar/bell-linear'
import ChatIcon from '~icons/solar/chat-line-linear'

function App() {
	return (
		<>
			<header className="flex h-20 items-center px-9">
				<Input
					placeholder="Search or type a command"
					startIcon={<SearchIcon className="stroke-2" />}
				/>

				<div className="actions flex ml-auto items-center gap-7">
					<Button startIcon={<AddIcon />}>New Product</Button>
					<Badge count={5} anchor="top-right">
						<ChatIcon className="h-6 w-6" />
					</Badge>
					<Badge anchor="top-right">
						<BellIcon className="h-6 w-6" />
					</Badge>
				</div>
			</header>
		</>
	)
}

export default App
