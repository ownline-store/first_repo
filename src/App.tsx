import { useEffect, useState } from 'react';
import { 
  Instagram, 
  Users, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Shield, 
  Zap, 
  Heart, 
  DollarSign,
  AlertTriangle,
  BookOpen,
  Camera,
  BarChart3,
  Clock,
  Award,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    0 to 100k <span className="text-purple-600">Without Luck</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                    How Beginners Can Master Instagram Growth
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Discover the exact content formula influencers use to gain thousands of followers without wasting hours guessing what to post.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={scrollToCheckout}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Get Instant Access <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">10,000+</div>
                    <div className="text-sm text-gray-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">4.7/5</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">100k+</div>
                    <div className="text-sm text-gray-600">Followers Gained</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-8 text-white text-center">
                    <Instagram className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Instagram 0-100k</h3>
                    <p className="text-lg opacity-90">Followers Roadmap</p>
                    <div className="mt-6 bg-white/20 rounded-lg p-4">
                      <div className="text-3xl font-bold">₹299</div>
                      <div className="text-sm opacity-80">One-time payment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Instagram 0-100k Section */}
      <section id="about" data-animate className={`py-20 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What is Instagram 0–100k Followers Roadmap?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This isn't just another "post more content" guide. It's a comprehensive, step-by-step system that reveals the exact strategies, content formulas, and growth hacks that top influencers use to build massive followings. Whether you're starting from zero or stuck at a few thousand followers, this roadmap will show you how to break through plateaus and achieve consistent, sustainable growth.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold">Audience Building</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold">Content Strategy</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold">Growth Analytics</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <div className="font-semibold">Viral Techniques</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Roadmap is Your Shortcut Section */}
      <section id="benefits" data-animate className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              This Roadmap is Your Shortcut to…
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Explosive Follower Growth</h3>
                    <p className="text-gray-600">Learn the exact posting schedule and content mix that drives 1000+ new followers per month consistently.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Laser-Focused Content Strategy</h3>
                    <p className="text-gray-600">Stop guessing what to post. Get proven content templates that generate high engagement every time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Time-Saving Automation</h3>
                    <p className="text-gray-600">Discover tools and techniques to manage your Instagram growth in just 30 minutes per day.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Monetization Mastery</h3>
                    <p className="text-gray-600">Turn your growing audience into a profitable business with proven monetization strategies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Engagement</h3>
                    <p className="text-gray-600">Build a loyal community that actually cares about your content and converts into customers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Authority</h3>
                    <p className="text-gray-600">Position yourself as an expert in your niche and attract high-value opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook - Riya's Story */}
      <section id="story" data-animate className={`py-20 transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Dear Instagram users struggling to grow...
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Meet Nikhil, a 24-year-old content creator who was stuck at 847 followers for 8 months. He posted daily, used trending hashtags, and even tried buying followers (which didn't work). He was about to give up on his dream.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Then he discovered the exact system you're about to learn. Within 90 days, Nikhil went from 847 to 47,000 followers. Today, he earns ₹1Lakh+ per month through brand partnerships and his own content.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        N
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Nikhil Pandam</div>
                        <div className="text-sm text-gray-600">@mstinstaofficial • 113K followers</div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "This roadmap changed everything for me. I went from posting randomly to having a clear strategy that actually works. The growth has been incredible!"
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Smartphone className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-gray-900">847 → 47K</div>
                      <div className="text-sm text-gray-600">Followers in 90 days</div>
                      <div className="text-lg font-semibold text-green-600">₹1,00,000/month</div>
                      <div className="text-xs text-gray-500">Monthly earnings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Brutal Truth */}
      <section id="truth" data-animate className={`py-20 bg-red-50 transition-all duration-1000 ${isVisible.truth ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-8">
              The Brutal Truth About Instagram Growth
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-900">What Doesn't Work</h3>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">Posting random content and hoping for the best</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">Using the same 30 hashtags on every post</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">Buying fake followers or engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">Following/unfollowing hundreds of accounts daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">Copying what worked for others without understanding why</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">What Actually Works</h3>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Strategic content planning based on data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Understanding Instagram's algorithm deeply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Building genuine relationships with your audience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Optimizing posting times and frequency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Creating content that naturally goes viral</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section id="unique" data-animate className={`py-20 transition-all duration-1000 ${isVisible.unique ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Why This Exists and How It's Unique
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  After helping over 10,000 creators grow their Instagram accounts, we noticed a pattern. The ones who succeeded weren't necessarily the most creative or talented – they were the ones who understood the system.
                </p>
                
                <p>
                  Most Instagram "gurus" teach outdated tactics or surface-level tips. This roadmap is different. It's based on analyzing millions of posts, studying algorithm changes, and reverse-engineering what actually makes content go viral.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Makes This Different:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Data-driven strategies, not guesswork</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Updated for 2024 algorithm changes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Works for any niche or industry</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Step-by-step implementation guide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagine a World Where */}
      <section id="imagine" data-animate className={`py-20 bg-gradient-to-br from-purple-50 to-blue-50 transition-all duration-1000 ${isVisible.imagine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Imagine a World Where...
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-purple-600 mb-6">Emotional Benefits</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                      <Heart className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">You wake up to hundreds of new followers</h4>
                      <p className="text-gray-600">Every morning brings exciting notifications of genuine people who love your content.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Your content consistently goes viral</h4>
                      <p className="text-gray-600">You know exactly what to post to get thousands of likes and shares.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">You're recognized as an authority</h4>
                      <p className="text-gray-600">People look up to you and value your opinions in your niche.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-6">Financial Benefits</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Brands reach out to YOU for partnerships</h4>
                      <p className="text-gray-600">Earn ₹40,000-₹4,00,000+ per sponsored post without chasing clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Your own products sell like hotcakes</h4>
                      <p className="text-gray-600">Launch courses, ebooks, or services to an eager audience ready to buy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Multiple income streams from one account</h4>
                      <p className="text-gray-600">Affiliate marketing, coaching, speaking gigs - the opportunities are endless.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Discover */}
      <section id="features" data-animate className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              What You'll Discover Inside
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Perfect Niche Formula</h3>
                <p className="text-gray-600">How to find and dominate a profitable niche that's not oversaturated.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Algorithm Mastery</h3>
                <p className="text-gray-600">Insider secrets to make Instagram's algorithm work FOR you, not against you.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimal Posting Strategy</h3>
                <p className="text-gray-600">When, what, and how often to post for maximum reach and engagement.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Engagement Hacks</h3>
                <p className="text-gray-600">Psychological triggers that make people like, comment, and share your content.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Monetization Blueprint</h3>
                <p className="text-gray-600">Turn your followers into paying customers with proven sales strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" data-animate className={`py-20 transition-all duration-1000 ${isVisible.guarantee ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-12 text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our 30-Day Growth Confidence Guarantee
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We're so confident this roadmap will transform your Instagram growth that we're offering a complete 30-day money-back guarantee. If you don't see significant improvement in your follower growth and engagement within 30 days of implementing our strategies, we'll refund every penny – no questions asked.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What "Significant Improvement" Means:</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>50%+ increase in engagement rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>100+ new followers per week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Clear growth trajectory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="checkout" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Growing Your Instagram Today
            </h2>
            
            <p className="text-xl mb-12 opacity-90">
              Join thousands of creators who've transformed their Instagram presence with our proven roadmap.
            </p>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center mb-6">
                    <Instagram className="w-12 h-12 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold mb-2">Instagram 0-100k</h3>
                    <p className="text-lg opacity-90">Followers Roadmap</p>
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Complete step-by-step roadmap</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>50+ viral content templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Algorithm optimization guide</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Monetization strategies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">₹299</div>
                    <div className="text-gray-600">One-time payment</div>
                    <div className="text-sm text-gray-500 line-through">Regular price: ₹599</div>
                  </div>
                  
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full mb-4">
                    Buy Now – Instant Access
                  </button>
                  
                  <p className="text-sm text-gray-600">
                    Backed by our 30-day growth guarantee
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      <span>Instant Download</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm opacity-75">
              This offer won't last forever. The price will increase to ₹599 soon.
            </p>
          </div>
        </div>
      </section>


      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Instagram className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">OwnlineStore</span>
            </div>
            
            <p className="text-gray-400 mb-8">
              Discover and download high-quality e-books instantly—no waiting, no shipping.
            </p>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm text-gray-500">
                <span>© 2024 OwnlineStore. All rights reserved.</span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link to="/about" className="hover:text-white">About Us</Link>
                  <Link to="/contact" className="hover:text-white">Contact Us</Link>
                  <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                  <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
                  <Link to="/refunds" className="hover:text-white">Refund Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;