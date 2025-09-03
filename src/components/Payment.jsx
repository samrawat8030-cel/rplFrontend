import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qr from "../assets/images/qr.jpeg";

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

  // Payment state
  const [showQR, setShowQR] = useState(false);
  const [screenshot, setScreenshot] = useState(null);

  // Charges
  const registrationFee = 999;
  const gst = 180;
  const totalAmount = registrationFee + gst;

  // 📩 Function to call backend API for sending email
  const sendEmailNotification = async () => {
    if (!screenshot) {
      alert("⚠️ Please upload payment screenshot before submitting.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("recipients", JSON.stringify(["samrawat8030@gmail.com"])); // Organizer emails
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("category", user?.category || "N/A");
      formData.append("village", user?.village || "N/A");
      formData.append("transactionId", `MANUAL-${Date.now()}`);
      formData.append("screenshot", screenshot);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/send-email`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        alert(
          "✅ Congratulations registration successful! Check your email for details."
        );
        navigate("/", {
          state: {
            paymentId: `MANUAL-${Date.now()}`,
            name,
            email,
            phone,
          },
        });
      } else {
        alert("❌ Email sending failed: " + data.message);
      }
    } catch (err) {
      console.error("Error calling email API:", err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 📤 Handle screenshot upload
  const handleScreenshotUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

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

        {/* Pay Button or QR Upload Flow */}
        <div className="mt-6">
          {!showQR ? (
            <button
              onClick={() => setShowQR(true)}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-orange-400 transition"
            >
              Proceed to Pay ₹{totalAmount}
            </button>
          ) : (
            <div className="space-y-4 text-center">
              <p className="text-yellow-300 font-semibold">
                Scan the QR Code below to make the payment
              </p>
              <img
                src={qr}
                alt="QR Code"
                className="w-108 h-108 mx-auto border-4 border-yellow-400 rounded-lg shadow-lg"
              />

              <div className="mt-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshotUpload}
                  className="w-full bg-gray-200 text-black p-2 rounded-lg"
                />
              </div>

              <button
                onClick={sendEmailNotification}
                disabled={loading || !screenshot}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-400 disabled:opacity-50"
              >
                {loading
                  ? "Sending Email..."
                  : screenshot
                  ? "Submit Payment Proof"
                  : "Upload Screenshot to Continue"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
