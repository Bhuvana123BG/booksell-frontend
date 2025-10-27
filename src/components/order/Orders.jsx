import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axiosConfig";
import { motion } from "framer-motion";
import { Calendar, PackageCheck, MapPin } from "lucide-react";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    // 🔹 Fetch user's orders
    const fetchOrders = async () => {
        try {
            const response = await api.get("/api/orders");
            setOrders(response.data);
        } catch (err) {
            console.error("Error fetching orders:", err);
            navigate("/login");
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="p-4 sm:p-8 max-w-5xl mx-auto space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center sm:text-left">
                📦 Your Orders
            </h1>

            {orders.length === 0 ? (
                <p className="text-gray-600 text-base sm:text-lg text-center">
                    You have not placed any orders yet.
                </p>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <motion.div
                            key={order.id}
                            className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-all"
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2 sm:gap-0">
                                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                                    <PackageCheck size={18} />
                                    <span>Order #{order.id}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Calendar size={16} />
                                    <span>
                                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                            </div>

                            {/* Order details */}
                            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                                <p>
                                    <span className="font-semibold">Total Amount:</span>{" "}
                                    ₹{order.totalAmount}
                                </p>
                                <p>
                                    <span className="font-semibold">Status:</span>{" "}
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${order.status === "Delivered"
                                                ? "bg-green-100 text-green-700"
                                                : order.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold">Payment:</span>{" "}
                                    {order.paymentStatus}
                                </p>
                                <div className="flex items-start gap-2">
                                    <MapPin size={16} className="mt-1 text-gray-500" />
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {order.shippingAddress}
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="text-right mt-4 text-xs sm:text-sm text-gray-500">
                                Updated:{" "}
                                {new Date(order.updatedAt).toLocaleString("en-IN", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );

};

export default Orders;
