let siswa = [
    ['1', 'Blek', 'Ngawi'],
    ['2', 'Reja', 'Dampit'],
    ['3', 'Maden', 'Panjen']
];

console.log('No \t Nama Siswa \t Asal');
console.log('--- \t ---------- \t ----');
for (let i = 0; i < siswa.length; i++) {
    for (let j = 0; j < siswa[i].length; j++) {
        Process.stdout.write(siswa[i][j].toString());
        if (j < siswa[i].length - 1) {
            Process.stdout.write(' \t  ');
        }
    }
    console.log();
}