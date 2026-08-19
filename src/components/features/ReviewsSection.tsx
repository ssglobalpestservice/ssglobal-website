import { reviews } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">Trusted by 5000+ Happy Customers</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.9/5 Average Rating</span>
          </div>
          <p className="text-gray-600">See what our customers across Mumbai have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-gray-50 border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-trustBlue/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 min-h-[80px] relative z-10">{review.text}</p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <div className="w-10 h-10 rounded-full bg-trustBlue/10 flex items-center justify-center text-trustBlue font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
