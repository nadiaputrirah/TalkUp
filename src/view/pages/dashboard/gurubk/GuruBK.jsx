import JadwalKonselingTable from "./jadwalKonseling/Tabel";
import RiwayatPengajuanTable from "./permintaanKonseling/Tabel";

export default function Guru_BK() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <h3 className="text-base">Daftar Konseling Siswa-Siswi</h3>
      </div>

      <JadwalKonselingTable />
      <RiwayatPengajuanTable />
    </div>
  );
}