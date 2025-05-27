export default async function reviewsPage({ params }: { params: Promise<{ productId: string; reviewsId: string }> }) {
  const { productId, reviewsId } = await params;
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Reviews Page for Product {productId} - Review {reviewsId}</h1>
    </div>
  );
}