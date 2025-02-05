import React, { useState } from 'react';

const MainContent = ({ isWalletConnected }: any) => {
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);

  const handleCreateEventClick = () => {
    setIsCreatingEvent(true);
  };

  const handleViewEventsClick = () => {
    // Implement the functionality to view events if needed
    alert('View Events Clicked');
  };

  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="max-w-4xl w-full p-4">
        {isWalletConnected ? (
          <>
            <div className="flex justify-center mb-6">
              <span className="dark:text-white text-black text-6xl font-bold">DJ SET NFT - Connected</span>
            </div>
            <p className="text-center mb-6">
              Welcome to the exclusive DJ Set NFT page! You are now connected.
            </p>

            <div className="flex justify-center gap-4 mb-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleViewEventsClick}
              >
                View Events
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                onClick={handleCreateEventClick}
              >
                Create Event
              </button>
            </div>

            {isCreatingEvent && (
              <div className="w-full max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg">
                <h3 className="text-center text-xl font-bold mb-4">Create Event</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Genre</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter genre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Theme</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter theme"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Show Title</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter show title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date / Time</label>
                    <input
                      type="datetime-local"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Set Duration (hours)</label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter set duration"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Ticket Cost</label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter ticket cost"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DJ Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter DJ name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">DJ Links</label>
                    <input
                      type="url"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter DJ social/media links"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mint Window Length</label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter mint window length in hours"
                    />
                  </div>

                  <div className="mt-6 flex justify-center gap-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg"
                    >
                      Submit Event
                    </button>
                    <button
                      type="button"
                      className="px-6 py-2 bg-gray-300 text-black rounded-lg"
                      onClick={() => setIsCreatingEvent(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="w-1/3 mx-auto mb-6">
              {/* Your default content when wallet is not connected */}
            </div>
            <div className="flex justify-center mb-6">
              <span className="dark:text-white text-black text-6xl font-bold">DJ SET NFT</span>
            </div>
            <p className="text-center mb-6">
              Sign In or Sign Up by connecting Wallet below.
            </p>
            {/* Additional content for non-signed-in users */}
          </>
        )}
      </div>
    </main>
  );
};

export default MainContent;
