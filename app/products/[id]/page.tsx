 

interface ProductPageProps {
  params: { id: string };
}

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    console.error(`Error fetching product ${id}: ${res.statusText}`);
    return null;
  }
  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  if (!id) return <h1>Invalid product ID</h1>;

  const product = await getProduct(id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <strong>Price: ${product.price}</strong>
    </div>
  );
}
