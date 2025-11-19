export function Footer() {
  return (
    <footer className="mt-10 bg-black text-white py-6">
      <div className="max-w-6xl mx-auto text-center px-4">

        <p className="text-sm text-gray-300">
          © 2025 <span className="font-semibold">Younique</span>. All Rights Reserved.
        </p>

        <div className="mt-3 flex flex-col sm:flex-row justify-center items-center gap-1 text-gray-200 text-sm">
          <p>Phone: <span className="font-medium">7087565707</span></p>
          <span className="hidden sm:block mx-2">•</span>
          <p>Phone: <span className="font-medium">8054309378</span></p>
        </div>
        
      </div>
    </footer>
  );
}
