const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const soKm = $("#sokm");
const tgCho = $("#tgcho");
const divThanhTien = $("#divThanhTien");
const tinhTien = $("#tinhtien");
const xuatTien = $("#xuatTien");
const grabCar = $("#grabCar");
const grabSuv = $("#grabSUV");
const grabBlack = $("#grabBlack");

tinhTien.addEventListener("click", () => {
    divThanhTien.style.display = "block";
    soKm.value = parseFloat(soKm.value);
    tgCho.value = parseFloat(tgCho.value);
    let loaiXe = LayLoaiXe();
    let thanhTien = 0;


    switch (loaiXe) {
        case "Grab Car":
            if (soKm.value <= 1) {
                thanhTien = (soKm.value * 8000 ) + (tgCho.value * 2000);
            } else if (soKm.value > 1 && soKm.value <= 19) {
                thanhTien = (1 * 8000) + (soKm.value - 1) * 7500 + tgCho.value * 2000;
            } else if (soKm.value > 19) {
                thanhTien = (1 * 8000) + (20 * 7500) + ((soKm.value - 20) * 7000) + (tgCho.value * 2000);
            }
            break;
        case "Grab SUV":
            if (soKm.value <= 1) {
                thanhTien = (soKm.value * 9000 ) + (tgCho.value * 3000);
            } else if (soKm.value > 1 && soKm.value <= 19) {
                thanhTien = (1 * 9000) + (soKm.value - 1) * 8500 + tgCho.value * 3000;
            } else if (soKm.value > 19) {
                thanhTien = (1 * 9000) + (20 * 8500) + ((soKm.value - 20) * 8000) + (tgCho.value * 3000);
            }
            break;
        case "Grab Black":
            if (soKm.value <= 1) {
                thanhTien = (soKm.value * 10000)  +( tgCho.value * 3500);
            } else if (soKm.value > 1 && soKm.value <= 19) {
                thanhTien = (1 * 10000) + (soKm.value - 1) * 9500 + tgCho.value * 3500;
            } else if (soKm.value > 19) {
                thanhTien = (1 * 10000) + (20 * 9500) + ((soKm.value - 20) * 9000) + (tgCho.value * 3500);
            }
            break;
    }
    xuatTien.innerHTML = thanhTien;
});

function LayLoaiXe() {
    let ketQua = "";

    if (grabCar.checked) {
        ketQua = "Grab Car";
    } else if (grabSuv.checked) {
        ketQua = "Grab SUV";
    } else if (grabBlack.checked) {
        ketQua = "Grab Black";
    }
    return ketQua;
}
