import ScrollFloatingCTA from "../components/aarikacarecomponents/aarikacareweights";
import Navbar from "../components/Navbar";

export default function AarikacareLayout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollFloatingCTA />
      {children}
    </>
  );
}