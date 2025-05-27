export default async function AnyroutePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Any Route Page - Slug: {slug.join('/')}</h1>
    </div>
  );
}