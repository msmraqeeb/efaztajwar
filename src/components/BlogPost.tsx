import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="flex-grow">
                <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                    <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Home
                    </Link>

                    <article className="bg-white rounded-3xl shadow-lg overflow-hidden">
                        <div className="aspect-[21/9] w-full relative">
                            <img
                                src="/Why Personal Branding Is No Longer Optional in the Digital Age.png"
                                alt="Personal Branding"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex items-center space-x-6 text-gray-500 mb-6 text-sm">
                                <div className="flex items-center space-x-2">
                                    <Calendar size={18} />
                                    <span>March 15, 2025</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock size={18} />
                                    <span>5 min read</span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Why Personal Branding Is No Longer Optional in the Digital Age
                            </h1>

                            <div className="prose prose-lg prose-slate max-w-none space-y-6 text-gray-700">
                                <p className="lead text-xl text-gray-800 font-medium">
                                    In today’s hyper-connected world, people don’t just buy products or services—they buy <strong>people, trust, and stories</strong>. Whether you are an entrepreneur, corporate professional, freelancer, or business leader, your personal brand has become one of your most valuable assets. A strong personal brand positions you as credible, visible, and influential in your industry.
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What Is Personal Branding?</h2>
                                <p>
                                    Personal branding is the intentional process of shaping how others perceive you—your expertise, values, communication style, and professional identity—both online and offline.
                                </p>
                                <p>It answers three key questions:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Who are you?</li>
                                    <li>What do you stand for?</li>
                                    <li>Why should people trust you?</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Personal Branding Matters More Than Ever</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Trust drives decisions:</strong> People trust individuals more than logos.</li>
                                    <li><strong>Opportunities come to you:</strong> Recruiters, clients, and partners search online before making contact.</li>
                                    <li><strong>Authority equals influence:</strong> A strong brand establishes thought leadership.</li>
                                    <li><strong>Differentiation:</strong> Your personality and experience make you unique, even in crowded markets.</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Real Impact of a Strong Personal Brand</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Higher credibility in your field</li>
                                    <li>Increased speaking, consulting, or business opportunities</li>
                                    <li>Stronger professional network</li>
                                    <li>Long-term career security</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Conclusion</h2>
                                <p>
                                    In the digital age, if you don’t define your personal brand, the internet will do it for you. Building it intentionally allows you to control your narrative and create lasting professional impact.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    );
}
