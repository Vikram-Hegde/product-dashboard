import { Chip } from '@vikramhegde/react-elemental'

type ProductProps = {
	name: string
	image: string
	category: string
	price: string
	status?: string
	accent?: string
}

const PopularProduct = ({ product }: { product: ProductProps }) => {
	const accentMap: Record<string, 'orange' | 'green' | 'red'> = {
		Processing: 'orange',
		Active: 'green',
		Inactive: 'red',
	}

	return (
		<div className="product flex gap-2 items-center">
			<img
				src={product.image}
				alt="product"
				className="rounded-lg h-[75px] w-[75px] object-cover"
			/>
			<div className="flex-1">
				<h4 className="font-semibold text-xl">{product.name}</h4>
				<p className="text-gray-500">{product.category}</p>
			</div>
			<div className="flex flex-col gap-1 items-end">
				<p className="text-gray-900 tabular-nums text-xl font-bold">
					{product.price}
				</p>
				{product.status && (
					<Chip
						accent={accentMap[product.status]}
						className="text-[11px] tracking-wide"
						uppercase={true}
					>
						{product.status}
					</Chip>
				)}
			</div>
		</div>
	)
}

export default PopularProduct
