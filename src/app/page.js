import Nav from "./Nav";

export default function Home() {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Nav />
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
        }}
      >
        Routing
      </h1>
    </main>
  );
}
