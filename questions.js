const questionSets = [
    {
        setId: 1,
        setName: "Bộ 1: Ôn tập cơ bản",
        questions: [
            {
                id: 1,
                type: "reorder",
                title: "Sắp xếp câu: 'Chiếc xe không khởi động—bạn có thể sửa nó không?'",
                words: ["The car", "won't start", "can you", "fix it"],
                correctOrder: ["The car", "won't start", "can you", "fix it"],
                explain: "The car won't start—can you fix it?"
            },
            {
                id: 2,
                type: "matching",
                title: "Nối các từ tiếng Việt với từ tiếng Anh tương ứng:",
                pairs: [
                    { vi: "Sửa chữa", en: "Fix" },
                    { vi: "Điều chỉnh", en: "Adjust" },
                    { vi: "Trang thiết bị", en: "Equipment" },
                    { vi: "Bắt tay", en: "Shake hand" }
                ],
                explain: "Các từ vựng hành động và danh từ cơ bản đã được nối chính xác."
            },
            {
                id: 3,
                type: "multiple",
                title: "Chọn câu tiếng Anh dịch đúng nghĩa cho câu: 'Chiếc xe không nổ máy—bạn có thể sửa nó không?'",
                options: [
                    "The car won't start—can you fix it?",
                    "We need to get the TV fixed.",
                    "I adjusted the seat before driving.",
                    "Could you please adjust the air conditioner?"
                ],
                correct: 0,
                explain: "The car won't start—can you fix it?"
            }
        ]
    },
    {
        setId: 2,
        setName: "Bộ 2: Luyện tập Dual-Reorder",
        questions: [
            {
                id: 4,
                type: "dual-reorder",
                title: "Sắp xếp nghĩa tiếng Việt và Pinyin cho câu tiếng Anh:",
                englishSentence: "The car won't start—can you fix it?",
                viWords: ["Chiếc xe", "không nổ máy", "bạn có thể", "sửa nó không?"],
                correctViOrder: ["Chiếc xe", "không nổ máy", "bạn có thể", "sửa nó không?"],
                pinyinWords: ["qì chē", "qǐ dòng", "bù liǎo", "nǐ néng", "xiū ma"],
                correctPinyinOrder: ["qì chē", "qǐ dòng", "bù liǎo", "nǐ néng", "xiū ma"],
                explain: "Câu tiếng Anh: The car won't start—can you fix it? | Tiếng Trung tương ứng: 汽车启动不了——你能修吗？"
            },
            {
                id: 5,
                type: "audio-dual-reorder",
                title: "Nghe câu tiếng Trung và sắp xếp Chữ Hán & Tiếng Việt:",
                chineseText: "你吃饭了吗？",
                pinyinText: "Nǐ chī fàn le ma?",
                hanziWords: ["你", "吃", "饭", "了", "吗"],
                correctHanziOrder: ["你", "吃", "饭", "了", "吗"],
                viWords: ["Bạn", "ăn", "cơm", "chưa", "?"],
                correctViOrder: ["Bạn", "ăn", "cơm", "chưa", "?"],
                explain: "Nghĩa: Bạn ăn cơm chưa? (Nǐ chī fàn le ma?)"
            }
        ]
    }
];