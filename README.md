# 🎬 Jamie Kirumato's Movie & MV Review Portal

Một trang web đánh giá phim và MV ca nhạc cá nhân được thiết kế theo phong cách **Cyberpunk / Retro Synthwave** đầy ấn tượng dành cho reviewer **Jamie Kirumato**. Trang web tích hợp hệ thống gamification độc đáo, bảng khảo sát nhanh tương tác và hệ thống bình luận động chân thực.

---

## ✨ Các Tính Năng Nổi Bật

1. **Giao Diện Cyberpunk / Synthwave**: Thiết kế đậm chất tương lai với tông màu tím neon, hồng magenta và xanh teal tương phản. Các hiệu ứng chuyển động, neon glow, khung kính mờ (glassmorphism) mang lại cảm giác cao cấp và hiện đại.
2. **Hệ Thống Đánh Giá Chuyên Sâu**: Hơn 15 bài review phim điện ảnh và MV âm nhạc được phân tích chuyên sâu (đặc biệt bài viết MV Gieo Quẻ dài hơn 10.000 từ tiếng Việt) với cấu trúc phân tích 6 phần rõ ràng.
3. **Bảng Điều Khiển Critic Dashboard (Gamification)**:
   - Theo dõi điểm tích lũy **XP** và cấp độ rank của người đọc.
   - Mở khóa các huy hiệu thành tích độc đáo (như *Mắt Diều Hâu*).
   - Vòng quay may mắn nhận XP hàng ngày.
4. **Khảo Sát Nhanh Tương Tác (Quick Survey)**: Tích hợp câu hỏi trắc nghiệm riêng biệt dưới mỗi bài review. Tự động reset mỗi khi mở bài viết, cộng điểm XP ngẫu nhiên (50-100 XP) khi trả lời đúng.
5. **Hệ Thống Bình Luận Sinh Động (Dynamic Comments v3)**:
   - Tự động tạo 35 - 45 bình luận riêng biệt cho từng bài viết mà không bị trùng lặp danh tính.
   - Phân bổ 5 phong cách tên người dùng: Tên tiếng Việt, tên tiếng Anh, teencode Việt Nam, handle mạng xã hội (@) và tên đính kèm emoji.
   - Chèn ngẫu nhiên các emoji cười, cười lăn lộn (`😂`, `🤣`, `😄`) để phần bình luận chân thực và sống động.
6. **Nhạc Nền Ambient Synth**: Người dùng có thể bật nhạc nền nhẹ nhàng phong cách lo-fi synth trực tiếp từ thanh điều khiển phía dưới.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: Vanilla HTML5, Vanilla CSS3 (Custom Properties, Flexbox, Grid), JavaScript (ES6+).
- **Icons**: FontAwesome v6.
- **Fonts**: Orbitron (dành cho các tiêu đề mang phong cách công nghệ) và Inter (dành cho nội dung văn bản chính).
- **Backend Server (Chạy thử)**: Python Built-in HTTP Server.

---

## 🚀 Hướng Dẫn Chạy Dự Án Cục Bộ

1. Đảm bảo máy tính của bạn đã cài đặt **Python**.
2. Mở terminal tại thư mục chứa dự án và chạy lệnh:
   ```bash
   python -m http.server 8080
   ```
3. Truy cập địa chỉ **`http://localhost:8080`** trên trình duyệt của bạn để trải nghiệm toàn bộ các tính năng.
