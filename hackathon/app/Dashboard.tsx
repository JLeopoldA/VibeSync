// components/SignedInPage.tsx
import React from 'react';

const Dashboard = () => {
  return (
    <main className="flex-grow flex items-center justify-center">
      <div className="max-w-4xl w-full p-4">
        <h1>Welcome to the Signed-In Page!</h1>
        <p>You are now signed in and can access exclusive content.</p>
        {/* Additional content for signed-in users */}
      </div>
    </main>
  );
};

export default Dashboard;
