function tampilkanData() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const alamat = document.getElementById("alasan").value;
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;

  // Ambil peminatan yang dipilih
  const peminatan = document.querySelector('input[name="peminatan"]:checked').value;

  const hasil = 
  `Data yang Anda masukkan:
    Nama : ${nama}
    NIM : ${nim}
    Peminatan : ${peminatan}
    Alasan : ${alamat}
    Angkatan : ${angkatan}
    Tanggal : ${tanggal}`;

  alert(hasil);
}
