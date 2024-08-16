import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen grid place-items-center container mx-auto px-4 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Welcome to MyCart</h2>
          <p className="mt-4 text-gray-600">Find the best products at the best prices.</p>
            <Link href="/products"><p  className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">Shop Now</p></Link>
        </section>
      </main>
    </>
  );
}
