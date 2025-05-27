export default async function  Product({params}:{params: Promise<{ productId: string }>}) {
    const { productId } = await params;
    return (
        <div className="flex items-center justify-center h-screen"> 
            <h1 className="text-4xl font-bold">Product Page {productId}</h1>
        </div>);
}