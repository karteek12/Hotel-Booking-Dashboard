"use client" ;

export default function Availability({ slots }) {
    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold text-center text-gray-800">Available Time Slots</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {slots.map((slot, index) => (
                    <div
                        key={index}
                        className={`p-4 border rounded-md ${slot.status === 'Available' ? 'bg-green-100' : 'bg-red-100'}`}
                    >
                        <p className="text-lg font-medium">{slot.time}</p>
                        <p className="text-sm text-gray-600">{slot.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
