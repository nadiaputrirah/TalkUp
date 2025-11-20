import {
  UserOutlined,
  MessageOutlined,
  CommentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import DetailCard from "../../../../../theme/konsultasi/DetailCard";
import StatusBadge from "../../../../../theme/StatusBadge";

const DetailPermintaanKonseling = ({ data }) => {
  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";
    
    const date = new Date(tanggal);
    
    if (isNaN(date.getTime())) {
      return tanggal;
    }
    
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const fields = [
    {
      label: "Nama",
      value: data.nama || "-",
    },
    {
      label: "Kelas",
      value: data.kelas || "-",
    },
    {
      label: "Guru BK",
      value: data.guruBK || "-",
      icon: <UserOutlined />,
    },
    {
      label: "Jenis Sesi",
      value: data.jenisSesi || "-",
      icon: <MessageOutlined />,
    },
    {
      label: "Topik Konseling",
      value: data.topikKonseling || "-",
      icon: <CommentOutlined />,
    },
    {
      label: "Tanggal Pengajuan",
      value: formatTanggal(data.tanggal),
      icon: <CalendarOutlined />,
    },
    {
      label: "Deskripsi",
      value: data.deskripsi || "-",
      icon: <MessageOutlined />,
      fullWidth: true,
    },
  ];

  return (
    <DetailCard
      title="Detail Permintaan Konseling"
      badge={<StatusBadge status={data.status} showIcon={true} />}
      fields={fields}
    />
  );
};

export default DetailPermintaanKonseling;