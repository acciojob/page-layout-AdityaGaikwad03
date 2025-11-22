
import React from "react";
import './../styles/App.css';

const App = () => {
   const Header = (
    <h1 className="text-5xl font-bold">Welcome to my website</h1>
  );

  const Footer = (
    <p className="text-lg">© 2023 My Website. All rights reserved.</p>
  );
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout header={Header} footer={Footer}>
        <p className="text-xl mt-4">This is the content of my website.</p>
      </PageLayout>
    </div>
  )
}

export default App
