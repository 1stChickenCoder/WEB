# WEB: Lộ trình học Web chuyên sâu 12 tháng

Repo này là "lớp học" của chúng ta: lộ trình, tài liệu, bài tập và bài nộp đều ở đây.

- 📍 **Lộ trình đầy đủ:** [ROADMAP.md](./ROADMAP.md)
- 📚 **Tuần hiện tại:** [Tuần 1: Tư duy viết hàm, mảng/chuỗi, Big-O](./month-01/week-01/README.md)

## Cấu trúc repo

```
WEB/
├── ROADMAP.md               # Lộ trình 12 tháng
├── README.md                # File này: cách học & nộp bài
├── month-01/
│   └── week-01/
│       ├── README.md        # Bài giảng + kế hoạch 7 ngày
│       ├── exercises/       # File bài tập (bạn viết code vào đây)
│       ├── tests/           # Test có sẵn để tự kiểm tra
│       ├── complexity.md    # Bài tập phân tích Big-O (viết câu trả lời vào đây)
│       └── NOTES.md         # Nhật ký học tập của bạn
└── ...
```

## Yêu cầu môi trường

- Node.js **≥ 20** (kiểm tra: `node --version`). Không cần cài thêm thư viện nào cho tháng 1; test dùng `node:test` có sẵn.
- Tắt AI autocomplete trong repo này (xem quy tắc dùng AI trong ROADMAP).

## Cách làm & nộp bài mỗi tuần

1. **Lấy bài mới nhất**
   ```bash
   git checkout main
   git pull
   ```
2. **Tạo nhánh cho tuần đó**
   ```bash
   git checkout -b submit/week-01
   ```
3. **Làm bài**: viết code vào các file trong `exercises/`, không sửa file trong `tests/`.
4. **Tự chấm bằng test**
   ```bash
   cd month-01/week-01
   node --test            # chạy tất cả test
   node --test tests/04-is-anagram.test.js   # chạy 1 bài
   ```
5. **Viết `NOTES.md`**: tóm tắt điều học được bằng lời của bạn, chỗ bị bí, bài nào phải tra cứu/hỏi AI (thành thật, để thầy biết chỗ cần củng cố).
6. **Commit & đẩy lên**
   ```bash
   git add .
   git commit -m "feat(week-01): nộp bài tuần 1"
   git push -u origin submit/week-01
   ```
7. **Mở Pull Request** từ `submit/week-01` vào `main`, tiêu đề `Nộp bài Tuần 1`. Trong mô tả PR ghi: số test pass, thời gian đã học, câu hỏi cho thầy.
8. **Báo thầy** bằng cách gửi link PR trong cuộc trò chuyện. Thầy sẽ review từng dòng ngay trên PR (comment góp ý, edge case còn sót, cách viết gọn hơn). Bạn sửa theo góp ý, push thêm commit vào cùng nhánh; khi đạt thì merge.

> Không cần làm xong 100% mới nộp. Nộp đúng hạn với phần đã làm + ghi rõ chỗ bí còn tốt hơn nộp trễ.

## Quy ước

- Commit theo [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `refactor:`, `docs:`, `test:`.
- Code dễ đọc hơn code "thông minh". Đặt tên biến có nghĩa.
- Mỗi hàm nên có comment ngắn về độ phức tạp, ví dụ `// O(n) time, O(n) space`.
