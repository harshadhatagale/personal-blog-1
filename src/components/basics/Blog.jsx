import { Card, CardContent, CardTitle } from "@/components/ui/card";
import posts from "../../../data/posts.json"

export default function Blog() {
  return (
    <section id="blog" className="py-4 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <p className="mt-2 text-gray-700">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
