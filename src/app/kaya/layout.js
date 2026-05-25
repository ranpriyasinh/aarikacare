import ScrollFloatingCTA from "../components/kayacomponents/kayaweights";

export default function KayaLayout({ children }) {
  return (
    <>
      <ScrollFloatingCTA />
      {children}
    </>
  );
}