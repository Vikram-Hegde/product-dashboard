import ProductCard from './ProductCard'

const ProductGrid = ({
	products,
}: {
	products: {
		name: string
		image: string
		description: string
		price: string
	}[]
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{products.map((product, index) => (
				<ProductCard key={index} product={product} />
			))}
		</div>
	)
}

export default ProductGrid
