"use client" ;
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ConfirmationPage() {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }

    const { name, mobile, date, guests, timeSlot } = router.query;

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto text-center">
                <h2 className="text-2xl font-semibold text-green-500 mb-4">Booking Confirmed!</h2>
                <p className="text-lg text-gray-700">Thank you, <strong>{name}</strong>!</p>
                <p className="text-lg text-gray-700">Your booking for {guests} guests on {date} at {timeSlot} has been confirmed.</p>
                <p className="text-gray-600 mt-2">We look forward to serving you!</p>
                <button
                    onClick={() => router.push('/')}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Go Back to Booking
                </button>
            </div>
        </div>
    );
}
