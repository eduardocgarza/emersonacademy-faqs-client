import React, { useState } from "react";

const videoData = {
  "Pre-Workshop": {
    "Workshop Announcements":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "Workshop Hand-Outs":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "Workshop Promo Videos":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "Workshop Preview":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "About the Workshop":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "About Emerson":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
  },
  "Post-Workshop": {
    "Student Spotlight":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "Q&A Sessions":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "Workshop Recaps":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
    "Student and Alumni Showcases":
      "https://www.loom.com/embed/fec8a6ca52ba4484ac510e55f2919d0f",
  },
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("Pre-Workshop");
  const [selectedTopic, setSelectedTopic] = useState(
    Object.keys(videoData["Pre-Workshop"])[0]
  );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gray-50 border-b">
          <div className="flex space-x-4">
            <select
              className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              {Object.keys(videoData).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              className="form-select block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setSelectedTopic(e.target.value)}
              value={selectedTopic}
            >
              {Object.keys(videoData[selectedCategory]).map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={videoData[selectedCategory][selectedTopic]}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
