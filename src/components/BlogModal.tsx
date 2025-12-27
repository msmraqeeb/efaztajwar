import { X, Calendar, Clock } from 'lucide-react';
import { useEffect, ReactNode } from 'react';

export interface BlogPost {
    title: string;
    date: string;
    readTime: string;
    image: string;
    content: ReactNode;
}

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    post: BlogPost | null;
}

export default function BlogModal({ isOpen, onClose, post }: BlogModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !post) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-colors z-20 border border-gray-200"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                <div className="aspect-[21/9] w-full relative">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-8 md:p-12">
                    <div className="flex items-center space-x-6 text-gray-500 mb-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <Calendar size={18} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock size={18} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="prose prose-lg prose-slate max-w-none space-y-6 text-gray-700">
                        {post.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
