import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  const query=router.query.id;
  return (
    <div>
      <Link href="/" scroll={false}>Back to home</Link>
    </div>
  );
};

export default CoffeeStore;
