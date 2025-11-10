function RiwayatKonseling() {
  const data = [
    { id: 1, guru: "Guru BK", email: "gurubk@gmail.com", sesi: "Online", status: "Disetujui" },
    { id: 2, guru: "Guru BK", email: "gurubk@gmail.com", sesi: "Online", status: "Menunggu" },
    { id: 3, guru: "Guru BK", email: "gurubk@gmail.com", sesi: "Ruang BK", status: "Menunggu" },
    { id: 4, guru: "Guru BK", email: "gurubk@gmail.com", sesi: "Online", status: "Menunggu" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Disetujui":
        return "bg-green-100 text-green-700";
      case "Menunggu":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">Riwayat Konseling</h2>
      <p className="text-gray-600 mb-6">Daftar riwayat konseling anda</p>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3">No</th>
            <th className="p-3">Guru BK</th>
            <th className="p-3">Jenis Konseling</th>
            <th className="p-3">Jenis Sesi</th>
            <th className="p-3">Status</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.guru}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">{item.sesi}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td className="p-3 text-green-600 hover:text-green-800 cursor-pointer">
                👁
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center space-x-2">
        <button className="bg-red-700 text-white px-3 py-1 rounded-md">1</button>
        <button className="px-3 py-1 border rounded-md">2</button>
        <button className="px-3 py-1 border rounded-md">3</button>
      </div>
    </div>
  );
}

export default RiwayatKonseling;
