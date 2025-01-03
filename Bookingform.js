"use client";

import { useState } from 'react';

export default function BookingForm({ onCheckAvailability, onBook }) {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        name: '',
        contact: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckAvailability = (e) => {
        e.preventDefault();
        onCheckAvailability(formData);
    };

    const handleBooking = (e) => {
        e.preventDefault();
    
        const formData = {
            name,
            email,
            date,
            time,
            guests
        };
    
        if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
            alert('Please fill in all fields');
            return;
        }
        onBook(formData); 
    };
    

    return (
        <form>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
            />
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleInputChange}
                required
            />
            <button type="submit" onClick={handleCheckAvailability}>
                Check Availability
            </button>
            <button type="button" onClick={handleBooking}>
                Confirm Booking
            </button>
        </form>
    );
}
