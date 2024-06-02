document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const messageContainer = document.getElementById("messageContainer");
        messageContainer.classList.add("hidden-message");

        setTimeout(function() {
            messageContainer.style.transform = "translateY(-50px)"; // Di chuyển khối thông điệp lên trên

            // Chờ cho hoạt ảnh di chuyển hoàn tất trước khi hiển thị ảnh và div mới
            setTimeout(function() {
                const newText = document.getElementById("newText");
                newText.classList.remove("hidden"); // Hiển thị ảnh và div mới
            }, 1000); // Thời gian chờ (phải khớp với thời gian hoạt ảnh CSS)
        }, 3000); // Sau 3 giây
    }, 2000); // Sau 2 giây
});
