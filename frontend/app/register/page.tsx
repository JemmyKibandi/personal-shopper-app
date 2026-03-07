import SignUpForm from "@/components/auth/signupform"

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-neutral-100">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-8">
        <div className="relative w-full h-full max-w-lg flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
            alt="Makeup products"
            className="w-full h-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <SignUpForm />
      </div>
    </main>
  )
}