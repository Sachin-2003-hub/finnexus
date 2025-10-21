import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sparkles, Clock, IndianRupee } from "lucide-react";
import Link from "next/link";
import { featuresData,
  howItWorksData,
  statsData,
  testimonialsData, } from "@/data/landing";
import TestimonialScroller from "@/components/testimonial-scroller";


export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection/>
  <section className="py-16 why-choose-section dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Finnexus</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Built for India, powered by AI. Finnexus helps you understand every
            rupee, automate the busywork, and act on clear insights so you can
            save more, stress less, and reach your goals faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="pt-4 space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <IndianRupee className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Built for INR</h3>
                <p className="text-gray-600 text-sm">Indian digit grouping, ₹ currency everywhere, and insights that reflect local spending patterns.</p>
              </CardContent>
            </Card>
            <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="pt-4 space-y-3">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Actionable AI Insights</h3>
                <p className="text-gray-600 text-sm">Clear, timely suggestions to trim expenses and grow savings—no jargon.</p>
              </CardContent>
            </Card>
            <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="pt-4 space-y-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Time-saving Automations</h3>
                <p className="text-gray-600 text-sm">Smart receipt scanning, auto-categorization, and recurring tracking handled for you.</p>
              </CardContent>
            </Card>
            <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="pt-4 space-y-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Secure by Design</h3>
                <p className="text-gray-600 text-sm">Privacy-first architecture with secure authentication and modern best practices.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  <section className="py-20 bg-blue-50 dark:bg-slate-900">
       <div className="conainter mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> 
          {statsData.map((statsData,index)=> (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
              <div className="text-gray-600">{statsData.label}</div>
            </div>
          ))}
        </div>
       </div>
      </section>
           <section id="features" className="py-20 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6 dark:bg-slate-800 dark:border-slate-700" key={index}>
                <CardContent 
  className="space-y-4 pt-4 pb-4"
  style={{
    borderRadius: '30px'
  }}
>
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center ">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50 how-it-works-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  <section id="testimonials" className="py-20 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="relative">
            <div className="flex md:hidden space-x-4 overflow-x-auto scrollbar-hide py-2 px-2 snap-x snap-mandatory">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="snap-start flex-shrink-0 w-[320px]">
                  <Card className="p-6 fade-in-on-load dark:bg-slate-800 dark:border-slate-700" style={{ animationDelay: `${index * 80}ms` }}>
                    <CardContent className="pt-4">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="hidden md:block mt-4">
              <div className="grid grid-cols-3 gap-8">
                {testimonialsData.map((testimonial, index) => (
                  <Card key={index} className="p-6 fade-in-on-load" style={{ animationDelay: `${index * 80}ms` }}>
                    <CardContent className="pt-4">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                      <p className="text-gray-600">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="py-20 bg-[linear-gradient(90deg,rgba(47,88,186,1)_0%,rgba(81,207,131,1)_100%)]">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">
      Ready to Take Control of Your Finances?
    </h2>
    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
      Join thousands of users who are already managing their finances smarter
      with Finnexus
    </p>
    <Link href="/dashboard">
      <Button
        size="lg"
        className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
      >
        Start Free Trial
      </Button>
    </Link>
  </div>
</section>
     </div>
  );
}
