export default function Categories() {
  const categories = [
    { name: "Lipstick", emoji: "💄" },
    { name: "Foundation", emoji: "🧴" },
    { name: "Eyeshadow", emoji: "👁️" },
    { name: "Skincare", emoji: "✨" }
  ]

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold mb-10">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="h-40 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer"
          >
            <span className="text-4xl mb-2">{cat.emoji}</span>
            <span className="text-lg font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}