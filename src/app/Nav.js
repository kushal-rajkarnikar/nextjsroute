import Link from "next/link";
export default function Nav() {
  return (
    <ul
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
      }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
    </ul>
  );
}
