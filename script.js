//tangkap element absensi form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// kita buat array untuk menampung data absensi
let absensi_data = [];

//tambahkan event listener submit ke element form absensi
absensi_form.addEventListener('submit', (event) => {
  //mencegah reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;
  //validasi mini
  if (fullname == '') {
    alert('Silahkan Masukkan Nama');
    return;
  }

  //push data kedalam array
  absensi_data.push({
    namalengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  //reset input field
  event.target.fullname.value = '';

  //panggil function renderToHTML()
  renderToHTML();
});

//function render data array ke dov root
function renderToHTML() {
  //reset element div root
  root.innerHTML = '';

  //mapping array to html element
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
    <span> ${i + 1}. &nbsp; ${e.namalengkap}</span> 
    <span> ${e.waktu} ${e.tanggal} </span>
    </div>
    `;
  });
}

//delete function
function handleDelete(index) {
  absensi_data.splice(index, 1);
  renderToHTML();
}
