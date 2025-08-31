import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video3.mp4";
export default function UpcomingEvents() {
  const events = [
    {
      title: "Teaser Release",
      date: "15th November 2025",
      video: video1, // 👉 replace with your path
    },
    {
      title: "Social Media Kickoff",
      date: "December 2025",
      video: video2, // 👉 replace with your path
    },
    {
      title: "Player Auction",
      date: "15th November 2025",
      video: video3, // 👉 replace with your path
    },
  ];

  return (
    <section id="upcoming" className="py-20 bg-gray-100 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6">Upcoming League</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto px-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-center"
          >
            {/* Video Section */}
            <video
              src={event.video}
              controls
              className="rounded-lg shadow-md w-full h-112 object-cover mb-4"
            />

            {/* Title & Date */}
            <h4 className="text-lg sm:text-xl font-semibold">{event.title}</h4>
            <p className="mt-2 text-sm sm:text-base">{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
