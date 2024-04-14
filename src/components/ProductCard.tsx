import { Button } from '@vikramhegde/react-elemental'

const ProductCard = ({
	product,
}: {
	product: {
		name: string
		image: string
		description: string
		price: string
	}
}) => {
	return (
		<div className="flex flex-col rounded-lg overflow-hidden shadow-lg">
			<img
				className="w-full h-64 object-cover"
				src={product.image}
				alt={product.name}
			/>
			<div className="flex justify-between items-center px-6 py-4 bg-white">
				<div>
					<h3 className="text-lg font-semibold">{product.name}</h3>
					<p className="text-sm text-gray-600">{product.description}</p>
				</div>
				<span className="text-lg font-bold text-gray-800">{product.price}</span>
			</div>
			<div className="flex justify-end bg-gray-100 py-2 px-4">
				<Button className="py-2">Add product</Button>
			</div>
		</div>
	)
}

export default ProductCard
