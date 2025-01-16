import Link from "next/link";
import Title from "./title";

export default function Page() {
  return (
    <div>
      <Title />
      <h1>My app week-2 - page 2</h1>
      <p><Link href="/">Go to Home</Link></p>
    </div>
  );
}