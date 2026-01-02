import api from './api';

export interface LandingServiceData {
    id: string;
    title: string;
    description: string;
    icon: string;
    price: string;
    is_active: boolean;
}

export interface LandingReviewData {
    id: string;
    customer_name: string;
    customer_role: string;
    testimonial: string;
    rating: number;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

export const landingService = {
    async getServices(): Promise<LandingServiceData[]> {
        const response = await api.get('/public/services');
        return response.data.data;
    },

    async getReviews(): Promise<LandingReviewData[]> {
        const response = await api.get('/public/reviews');
        return response.data.data;
    },

    async sendContact(data: ContactFormData) {
        const response = await api.post('/public/contact', data);
        return response.data;
    },

    async getSettings(): Promise<Record<string, string>> {
        const response = await api.get('/public/settings');
        return response.data.data;
    }
};
