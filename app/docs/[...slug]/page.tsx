export default function DocsPage({ params }: { params: { slug: string[] } }) {
    const { slug } = params;
  
  
    if (!slug) {
      return <h1>Welcome to Documentation</h1>;
    }
  
    return (
      <div>
        <h1>Documentation</h1>
        <p>Path: {slug.join(" / ")}</p>
      </div>
    );
  }
  