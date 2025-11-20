import { InfoCircleOutlined } from "@ant-design/icons";
import { TextInput, Button, Select, Textarea } from "flowbite-react";
import { useState } from "react";

const FormBalasanKonseling = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    status: "",
    tgl_sesi: "",
    jam_sesi: "",
    link_atau_ruang: "",
    balasan_untuk_siswa: "",
    catatan_guru_bk: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.status === "Disetujui") {
      if (!formData.tgl_sesi || !formData.jam_sesi) {
        alert("Tanggal dan Jam Sesi wajib diisi jika status Disetujui");
        return;
      }
    }
    
    if (onSubmit) onSubmit(formData);
  };
  const isApproved = formData.status === "Disetujui";
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h1 className="text-base font-semibold mb-6">Balas Ajuan Konseling</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-8">
        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="status">
            Status Pengajuan <span className="text-red-500">*</span>
          </label>
          <Select 
            id="status" 
            color="primary" 
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Pilih Status Pengajuan</option>
            <option value="Disetujui">Disetujui</option>
            <option value="Ditolak">Ditolak</option>
          </Select>
        </div>
        {isApproved && (
          <div className="flex flex-row gap-8">
            <div className="w-full flex flex-col space-y-2">
              <label htmlFor="tgl_sesi">
                Tanggal Konseling <span className="text-red-500">*</span>
              </label>
              <TextInput 
                color="primary" 
                type="date" 
                id="tgl_sesi" 
                value={formData.tgl_sesi}
                onChange={handleChange}
                required={isApproved}
              />
            </div>

            <div className="w-full flex flex-col space-y-2">
              <label htmlFor="jam_sesi">
                Jam Sesi <span className="text-red-500">*</span>
              </label>
              <TextInput 
                color="primary" 
                type="time" 
                id="jam_sesi" 
                value={formData.jam_sesi}
                onChange={handleChange}
                required={isApproved}
              />
            </div>
          </div>
        )}

        {isApproved && (
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="link_atau_ruang">Link Google Meet / Ruangan</label>
            <TextInput
              color="primary"
              type="text"
              id="link_atau_ruang"
              placeholder="Link google meet atau ruangan"
              value={formData.link_atau_ruang}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="flex flex-col gap-8">
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="balasan_untuk_siswa">
              Tulis Balasan Untuk Siswa <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="balasan_untuk_siswa"
              rows={4}
              color="primary"
              placeholder="Tulis balasan untuk siswa..."
              value={formData.balasan_untuk_siswa}
              onChange={handleChange}
              required
            />
            <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
              <InfoCircleOutlined />
              <span>Balasan akan dikirim ke email siswa secara otomatis</span>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="catatan_guru_bk">Catatan Guru BK</label>
            <Textarea
              id="catatan_guru_bk"
              rows={4}
              color="primary"
              placeholder="Tulis catatan untuk guru BK..."
              value={formData.catatan_guru_bk}
              onChange={handleChange}
            />
            <div className="flex flex-row gap-2 p-2 bg-blue-50 text-blue-500 rounded">
              <InfoCircleOutlined />
              <span>Catatan ini hanya untuk internal guru BK</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <Button color="secondary" size="md" type="button" onClick={onCancel} className="mt-4">
            Batal
          </Button>
          <Button color="primary" size="md" type="submit" className="mt-4">
            Kirim
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormBalasanKonseling;