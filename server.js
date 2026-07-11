const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.'));

const DATA_FILE = path.join(__dirname, 'data.json');

function readData() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        }
    } catch (e) {}
    return [
        {id:1, icon:'fa-envelope', title:'CREATE GMAIL FRESH', status:'open', rate:'Rp 4.500 - Rp 5.000', slot:'Banyak slot', description:'RULES BUAT GMAIL FRESH\n\n<i class="fas fa-envelope icon-desc"></i> email harus fresh, tidak boleh bekas\n<i class="fas fa-folder icon-desc"></i> akun bisnis/pribadi\n<i class="fas fa-user icon-desc"></i> menggunakan nama manusia\n<i class="fas fa-calendar icon-desc"></i> tanggal lahir bebas\n<i class="fas fa-venus-mars icon-desc"></i> jenis kelamin bebas\n<i class="fas fa-key icon-desc"></i> PASSWORD: aass1122\n<i class="fas fa-sort-numeric-up icon-desc"></i> angka maks 2\n\nCONTOH EMAIL BENAR:\nrayhanescobar@gmail.com\nalbianahmad12@gmail.com\n\n<i class="fas fa-credit-card icon-desc"></i> Payment 1-2 hari\n<i class="fas fa-coins icon-desc"></i> rate Rp 4.500 - Rp 5.000\n<i class="fas fa-clock icon-desc"></i> maks setor jam 19:30'},
        {id:2, icon:'fa-star', title:'REVIEW GOOGLE MAPS', status:'open', rate:'Rp 1.000 - Rp 2.000', slot:'20 slot', description:'RULES REVIEW GOOGLE MAPS\n━━━━━━━━━━━━━━━━━━━\n\nWAJIB DIPATUHI:\n\n1. <i class="fas fa-ban icon-desc"></i> Jangan Copy-Paste dari AI\n2. <i class="fas fa-key icon-desc"></i> Wajib Memasukkan Kata Kunci\n3. <i class="fas fa-pen-fancy icon-desc"></i> Tulis dengan Gaya Natural\n4. <i class="fas fa-bullhorn icon-desc"></i> Hindari Kata-Kata Promosi\n5. <i class="fas fa-check-circle icon-desc"></i> Perhatikan Penulisan\n6. <i class="fas fa-user-plus icon-desc"></i> Satu Akun, Satu Review\n7. <i class="fas fa-camera icon-desc"></i> Wajib Mengirim Bukti\n8. <i class="fas fa-thumbs-up icon-desc"></i> Review Wajib Positif\n\n<i class="fas fa-clock icon-desc"></i> Cara Posting: Jeda 1 jam\n\n<i class="fas fa-coins icon-desc"></i> Rate: Rp 1.000 - Rp 2.000'},
        {id:3, icon:'fa-mobile-screen-button', title:'FOLLOW / LIKE / KOMEN', status:'closed', rate:'Rp 500 - Rp 1.000', slot:'15 slot', description:'SYARAT FOLIKOM\n\n1. <i class="fas fa-users icon-desc"></i> Gunakan akun sosial media aktif\n2. <i class="fas fa-comment-dots icon-desc"></i> Ikuti arahan admin\n3. <i class="fas fa-user-tag icon-desc"></i> Nama akun harus manusia\n4. <i class="fas fa-image icon-desc"></i> Photo Profile bebas\n\n<i class="fas fa-coins icon-desc"></i> Rate: Rp 500 - Rp 1.000'}
    ];
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/jobs', (req, res) => {
    res.json(readData());
});

app.post('/api/jobs', (req, res) => {
    const jobs = req.body;
    writeData(jobs);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
