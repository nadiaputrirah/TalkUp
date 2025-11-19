import React from "react";
import RiwayatPengajuanTable from "./Tabel";

export default function Index() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium">Daftar Permintaan Konseling</h1>
        <h3 className="text-base">Daftar permintaan konseling siswa-siswi</h3>
      </div>

      <RiwayatPengajuanTable />
    </div>
  );
}