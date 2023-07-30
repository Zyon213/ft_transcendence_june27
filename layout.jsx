import "@styles/globals.css";
import styles from "@styles/Layout.modules.css";

export const metadata = {
  title: "Transcendence",
  description: "Transcendence project",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="main">
        <div className="main-bg flex flex-center w-screen"></div>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
