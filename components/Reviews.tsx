import React, { useEffect, useState } from 'react';
import { landingService, LandingReviewData } from '../services/landingService';
import SectionHeading from './SectionHeading';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
    const [reviews, setReviews] = useState<LandingReviewData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews = async () => {
        try {
            const data = await landingService.getReviews();
            setReviews(data);
        } catch (error) {
            console.error("Erro ao carregar avaliações:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return null;
    if (reviews.length === 0) return null;

    return (
        <section id="reviews" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-900/10 to-brand-cyan/5 -rotate-12 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Depoimentos"
                    subtitle="O que nossos clientes dizem"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 relative hover:border-brand-cyan/30 transition-all duration-300"
                        >
                            <div className="absolute -top-4 -left-2 bg-brand-cyan text-brand-dark rounded-full p-2">
                                <span className="text-4xl leading-none font-serif">"</span>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className={`${i < review.rating ? 'text-brand-yellow fill-brand-yellow' : 'text-gray-600'} mr-1`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-6 italic leading-relaxed">
                                "{review.testimonial}"
                            </p>

                            <div className="flex items-center mt-auto border-t border-white/5 pt-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                    {review.customer_name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{review.customer_name}</h4>
                                    <p className="text-brand-cyan text-xs">{review.customer_role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
