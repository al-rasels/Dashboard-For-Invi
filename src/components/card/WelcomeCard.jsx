import img from './../../assets/card-advance-sale.png'
export default function SalesCard() {
  return (
    <div className="w-full bg-white h-[250px] rounded-2xl shadow p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Congratulations John! 🎉</h2>
        <p className="text-gray-500">Today's total sell</p>
        <p className="text-4xl font-bold mt-5">$48.9k</p>
        <button className="mt-4 bg-linear-to-r from-teal-500 to-emerald-500 text-white px-5 py-2 rounded-xl hover:bg-purple-700">
          View Sales
        </button>
      </div>

      <img
        src={img}
        alt="User"
        className="w-32"
      />
    </div>
  );
}
