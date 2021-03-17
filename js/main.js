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
            thanhTien = TinhTien(8000, 7500, 7000) + TinhTienThoiGianCho(tgCho.value, 2000);
            break;
        case "Grab SUV":
            thanhTien = TinhTien(9000, 8500, 8000) + TinhTienThoiGianCho(tgCho.value, 3000);
            break;
        case "Grab Black":
            thanhTien = TinhTien(10000, 9500, 9000) + TinhTienThoiGianCho(tgCho.value, 3500);
            break;
    }
  
    xuatTien.innerHTML = thanhTien;
});


function TinhTien(km1, km2, km3){
    let thanhTien = 0;
    if(soKm.value < 1) {
        thanhTien = 0
    } else if (soKm.value == 1){
        thanhTien = km1;
    }else if(soKm.value > 1 && soKm.value <= 19){
        thanhTien = km1 + (soKm.value - 1) * km2;
    }else if (soKm.value > 19){
        thanhTien = km1 + (km2 * 18) + (soKm.value - 19) * km3;
    }

    return thanhTien;
}



function TinhTienThoiGianCho(NhapTGCho, TienTGCho) {
    let TongTienTGCho = 0;
    if(NhapTGCho < 0){
        TongTienTGCho = 0
    }else{
        TongTienTGCho = Math.floor(NhapTGCho / 3) *TienTGCho;
    }
    console.log(TongTienTGCho);
    return TongTienTGCho;
    
}


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








