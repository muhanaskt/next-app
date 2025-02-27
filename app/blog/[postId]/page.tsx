async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts(); 

  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.title}</li> 
        ))}
      </ul>
    </div>
  );
}
