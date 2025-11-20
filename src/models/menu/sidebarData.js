export const sideBarData = [
  {
    name: "Dashboard",
    path: "/dashboard/superadmin",
    breadcrumbKey: "dashboard-superadmin",
    roles: ["super_admin", "superadmin"]
  },
  {
    name: "Daftar Guru BK",
    path: "/dashboard/superadmin/daftar-guru-bk",
    roles: ["super_admin", "superadmin"]
  },
  {
    name: "Daftar Siswa",
    path: "/dashboard/superadmin/daftar-siswa",
    roles: ["super_admin", "superadmin"]
  },

  {
    name: "Dashboard",
    path: "/dashboard/gurubk",
    breadcrumbKey: "dashboard-gurubk",
    roles: ["guru_bk", "gurubk"]
  },
  {
    name: "Permintaan Konseling",
    path: "/dashboard/permintaankonseling",
    roles: ["guru_bk", "gurubk"]
  },
  {
    name: "Jadwal Konseling",
    path: "/dashboard/jadwalkonseling",
    roles: ["guru_bk", "gurubk"]
  },
  {
    name: "Riwayat Konseling",
    path: "/dashboard/riwayatkonseling",
    roles: ["guru_bk", "gurubk"]
  },

  {
    name: "Konsultasi",
    path: "/dashboard/konsultasi",
    breadcrumbKey: "dashboard-siswa",
    roles: ["siswa"]
  },
  {
    name: "Riwayat Konseling",
    path: "/dashboard/riwayat",
    roles: ["siswa"]
  },

  {
    name: "Logout",
    path: "#",
    roles: ["guru_bk", "gurubk", "siswa", "super_admin", "superadmin"]
  },
];