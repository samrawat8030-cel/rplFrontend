import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user details from Register page
  const { user } = location.state || {};

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [isEditing, setIsEditing] = useState(!user);
  const [loading, setLoading] = useState(false);

  // Charges
  const registrationFee = 999;
  const gst = 180;
  const totalAmount = registrationFee + gst;

  // Load Razorpay script dynamically
  const loadRazorpay = () => {
    if (document.getElementById("razorpay-script")) return;
    const script = document.createElement("script");
    script.id = "razorpay-script";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  // 📩 Function to call backend API for sending email
  const sendEmailNotification = async (paymentId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/send-email`, // ✅ Replace with Vercel backend URL if deployed
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipients: ["samrawat8030@gmail.com"], // ✅ replace with real organizer emails
            name,
            email,
            phone,
            category: user?.category || "N/A",
            village: user?.village || "N/A",
            transactionId: paymentId,
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        console.log("✅ Emails sent successfully");
      } else {
        console.error("❌ Email sending failed", data.message);
      }
    } catch (err) {
      console.error("Error calling email API:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    if (!name || !email || !phone) {
      alert("⚠️ Please fill all details before proceeding.");
      return;
    }

    if (!window.Razorpay) {
      alert("⚠️ Payment gateway is still loading. Please try again.");
      return;
    }

    const options = {
      key: "rzp_test_RBH7xkf09qHI34", // ✅ Replace with your Razorpay Key ID
      amount: totalAmount * 100, // paise
      currency: "INR",
      name: "Tournament Registration",
      description: "Player Registration Fee",
      handler: function (response) {
        alert(
          `✅ Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        );

        // 🔥 Trigger email API after successful payment
        sendEmailNotification(response.razorpay_payment_id);

        navigate("/success", {
          state: {
            paymentId: response.razorpay_payment_id,
            name,
            email,
            phone,
          },
        });
      },
      prefill: {
        name,
        email,
        contact: phone,
      },
      theme: {
        color: "#F59E0B",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    loadRazorpay();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 mt-24">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md text-left">
        <h1 className="text-2xl font-bold mb-4 text-yellow-400">
          Confirm Your Details
        </h1>

        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-black"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-black"
            />
            <button
              onClick={() => setIsEditing(false)}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-400"
            >
              Save Details
            </button>
          </div>
        ) : (
          <div>
            <div className="space-y-3 text-lg">
              <p>
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {email}
              </p>
              <p>
                <span className="font-semibold">Contact:</span> {phone}
              </p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-3 text-sm text-blue-400 underline"
            >
              Edit Details
            </button>
          </div>
        )}

        {/* Payment Summary */}
        <div className="mt-10 bg-gray-700 p-4 rounded-xl shadow-inner">
          <p className="text-lg mb-2 font-semibold text-yellow-300">
            Payment Summary
          </p>
          <div className="space-y-1 text-md">
            <p>
              Registration Fee:{" "}
              <span className="font-bold text-white">₹{registrationFee}/-</span>
            </p>
            <p>
              GST: <span className="font-bold text-white">₹{gst}/-</span>
            </p>
            <hr className="border-gray-600 my-2" />
            <p className="text-xl">
              Total Payable:{" "}
              <span className="font-bold text-green-400">
                ₹{totalAmount}/- only
              </span>
            </p>
          </div>
        </div>

        {/* Pay Button */}
        <div className="mt-6">
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-orange-400 transition disabled:opacity-50"
          >
            {loading ? "Sending Email..." : `Proceed to Pay ₹${totalAmount}`}
          </button>
        </div>
      </div>
    </div>
  );
}
