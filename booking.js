import axios from 'axios';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, date, time, guests } = req.body;
        try {
            const bookingData = { name, email, date, time, guests };
            const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
            res.status(201).json(response.data);
        } catch (error) {
            res.status(500).json({ message: 'Error booking table' });
        }
    }
}
