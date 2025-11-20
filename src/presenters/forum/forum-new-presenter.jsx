import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useForumNewPresenter = () => {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [identity, setIdentity] = useState("anonim");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Judul diskusi harus diisi!");
      return;
    }

    if (!content.trim()) {
      alert("Konten diskusi harus diisi!");
      return;
    }

    if (content.trim().length < 10) {
      alert("Konten minimal 10 karakter!");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      
      const payload = {
        judul: title.trim(),
        konten: content.trim(),
        is_anonim: identity === "anonim"
      };

      console.log("Payload yang dikirim:", payload);

      const res = await axios.post(
        "http://40.117.43.104/api/v1/diskusi",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        }
      );

      console.log("HASIL POST:", res.data);
      alert("Diskusi berhasil dibuat!");
      navigate("/forum");
    } catch (err) {
      console.error("ERROR TAMBAH DISKUSI:", err.response?.data);
      
      if (err.response?.data?.errors) {
        alert(`Gagal: ${err.response.data.errors.join(", ")}`);
      } else if (err.response?.data?.message) {
        alert(`Gagal: ${err.response.data.message}`);
      } else {
        alert("Gagal menambah diskusi!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/forum");
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    identity,
    setIdentity,
    loading,
    handleSubmit,
    handleCancel,
  };
};