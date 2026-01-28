/* 
==============================================================================
FILE: chitiet.js
TÁC VỤ CHÍNH:
  • Lấy dữ liệu từ localStorage được gửi từ trang chủ
  • Hiển thị thông tin chi tiết của một khu du lịch cụ thể
  • Hiển thị hình ảnh chính và thư viện ảnh bổ sung
  • Mô tả chi tiết về địa điểm du lịch
  • Xử lý nút quay lại trang chủ
==============================================================================
*/

// Nút quay lại trang chủ
const quayVe = document.getElementById("quay-ve-trang-chu");
if (quayVe) {
    quayVe.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

// Lấy và tải dữ liệu lên trang chi tiết
const dulieuNhan = JSON.parse(localStorage.getItem("dulieuTrangChu"));

function hienThiChiTiet(data) {
    if (!data) {
        document.body.innerHTML = "<p>Đìm không tìm thấy thông tin địa điểm.</p>";
        return;
    }

    const detailContainer = document.getElementById("noi-dung");

    // Tạo nội dung chính
    detailContainer.innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.image}" alt="${data.name}">
        <p>${data.description}</p>
        <h2>Thư viện hình ảnh</h2>
        <div id="thu-vien-hinh-anh" class="thu-vien-hinh-anh"></div>
    `;

    // Hiển thị thư viện ảnh bổ sung
    const galleryContainer = document.getElementById("thu-vien-hinh-anh");
    for (let i = 0; i < data.hinhAnh.length; i++) {
        const img = document.createElement("img");
        img.src = data.hinhAnh[i];
        img.alt = `${data.name} ${i + 1}`;
        galleryContainer.appendChild(img);
    }
}

// Gọi hàm hiển thị khi trang tải
hienThiChiTiet(dulieuNhan);