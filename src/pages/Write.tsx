import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Write = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Write a Blog</h1>
        <Card>
          <CardHeader>
            <CardTitle>Compose</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <input className="w-full px-3 py-2 rounded-md border border-input bg-background" placeholder="Title" />
            <Textarea placeholder="Write your content (Markdown supported soon)" rows={10} />
            <div className="flex justify-end">
              <Button disabled>Submit for Review</Button>
            </div>
            <p className="text-xs text-muted-foreground">Authentication and submissions require Supabase. Connect it and I'll wire this up.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Write;
