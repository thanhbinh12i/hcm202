export const sections = [
  {
    id: 'intro',
    title: 'TƯ TƯỞNG HỒ CHÍ MINH VỀ CHỦ NGHĨA XÃ HỘI',
    description: 'Một hệ thống lý luận mở, luôn coi trọng thực tiễn và lợi ích của nhân dân.',
    type: 'intro',
    layout: 'intro',
    items: []
  },
  {
    id: 'sec1',
    title: 'I. BẢN CHẤT VÀ ĐẶC TRƯNG TỔNG QUÁT CỦA CNXH',
    description: 'Hồ Chí Minh tiếp cận CNXH từ nhiều phương diện: lý luận Mác-Lênin, đạo đức, văn hoá và lòng yêu nước.',
    layout: 'gallery', // 4 items → gallery (4 cards ngang)
    items: [
      {
        id: '1-1',
        title: 'Về Chính Trị',
        description: 'CNXH là một chế độ do nhân dân làm chủ. Nhà nước là của dân, do dân, vì dân, dựa trên khối đại đoàn kết toàn dân mà nòng cốt là liên minh công - nông - trí thức, do Đảng Cộng sản lãnh đạo.',
        context: 'Quyền làm chủ của nhân dân',
        citation: 'Tư tưởng Hồ Chí Minh về nhà nước pháp quyền',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571132/img1_kyalav.jpg'
      },
      {
        id: '1-2',
        title: 'Về Kinh Tế',
        description: 'CNXH có nền kinh tế phát triển cao, gắn liền với sự phát triển của khoa học - kỹ thuật. Đây là xã hội có chế độ sở hữu công cộng về tư liệu sản xuất và thực hiện nguyên tắc "làm nhiều hưởng nhiều, làm ít hưởng ít".',
        context: 'Phân phối theo lao động',
        citation: 'Hồ Chí Minh bàn về kinh tế CNXH',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571130/img2_ias2gj.jpg'
      },
      {
        id: '1-3',
        title: 'Về Văn Hoá - Đạo Đức',
        description: 'Là xã hội không còn tình trạng người bóc lột người, không còn áp bức, bất công. Đó là một xã hội có hệ thống quan hệ lành mạnh, công bằng, bình đẳng, nơi con người được giải phóng và có điều kiện phát triển toàn diện.',
        context: 'Giải phóng con người',
        citation: 'Đạo đức cách mạng Hồ Chí Minh',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571129/img3_uxvzii.jpg'
      },
      {
        id: '1-4',
        title: 'Về Bản Chất Tổng Quát',
        description: 'CNXH là chế độ xã hội nhằm mục tiêu giải phóng con người, mang lại tự do và hạnh phúc, nơi "sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người".',
        context: 'Mục tiêu cao nhất của CNXH',
        citation: 'Tuyên ngôn Đảng Cộng sản',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571131/img4_ior1tk.jpg'
      },
    ]
  },
  {
    id: 'sec2',
    title: 'II. MỤC TIÊU VÀ ĐỘNG LỰC CỦA CNXH',
    description: 'Hệ thống mục tiêu chung và cụ thể, cùng các nguồn động lực để xây dựng CNXH.',
    layout: 'slabs', // 2 items → slabs (2 panels mở rộng)
    items: [
      {
        id: '2-1',
        title: '1. Mục tiêu của CNXH',
        description: 'Hồ Chí Minh chia mục tiêu thành mục tiêu chung và các mục tiêu cụ thể trên từng lĩnh vực:\n\n• Mục tiêu chung: Độc lập cho dân tộc, tự do và hạnh phúc cho nhân dân; làm cho nước ta trở nên hoàn toàn độc lập, dân ta được tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành.\n\n• Mục tiêu chính trị: Xây dựng chế độ do nhân dân lao động làm chủ, phát huy quyền dân chủ của nhân dân và củng cố bộ máy nhà nước trong sạch, hiệu quả.\n\n• Mục tiêu kinh tế: Xây dựng nền kinh tế vững mạnh với công nghiệp và nông nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, nhằm không ngừng nâng cao đời sống vật chất của nhân dân.\n\n• Mục tiêu văn hoá - xã hội: Xóa nạn mù chữ, phát triển giáo dục, nâng cao dân trí, xây dựng nếp sống mới và đạo đức cách mạng.',
        context: 'Đích đến cao nhất của CNXH',
        citation: 'Di chúc Hồ Chí Minh',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571129/img5_crpzug.jpg'
      },
      {
        id: '2-2',
        title: '2. Động lực của CNXH',
        description: 'Để đạt được các mục tiêu trên, cần phát huy các nguồn lực:\n\n• Động lực con người: Đây là động lực quan trọng và quyết định nhất. Phải phát huy sức mạnh đoàn kết của toàn dân và bồi dưỡng con người có cả "đức" (hồng) lẫn "tài" (chuyên).\n\n• Động lực kinh tế: Giải phóng sức sản xuất, thực hiện chế độ khoán, và ứng dụng khoa học - kỹ thuật để tăng năng suất.\n\n• Sức mạnh thời đại: Kết hợp sức mạnh dân tộc với sự đoàn kết quốc tế và thành tựu khoa học thế giới.\n\n• Khắc phục lực cản: Phải quyết liệt chống lại "giặc nội xâm" là tham ô, lãng phí và quan liêu, vì chúng kìm hãm sự phát triển của CNXH.',
        context: 'Nguồn sức mạnh xây dựng CNXH',
        citation: 'Tư tưởng Hồ Chí Minh về động lực phát triển',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571129/img6_nulf0v.jpg'
      },
    ]
  },
  {
    id: 'sec3',
    title: 'III. CON ĐƯỜNG QUÁ ĐỘ LÊN CNXH TẠI VIỆT NAM',
    description: 'Đặc điểm, nhiệm vụ và phương châm xây dựng CNXH trong điều kiện Việt Nam.',
    layout: 'slabs', // 3 items → slabs (giữ nguyên)
    items: [
      {
        id: '3-1',
        title: 'Đặc Điểm Thời Kỳ Quá Độ',
        description: 'Việt Nam đi lên CNXH từ một nước nông nghiệp lạc hậu, bỏ qua giai đoạn phát triển tư bản chủ nghĩa. Đây là cuộc cách mạng làm đảo lộn mọi mặt đời sống xã hội, nên nó là một quá trình "lâu dài, gian khổ và phức tạp".',
        context: 'Xuất phát điểm thấp',
        citation: 'Hồ Chí Minh về thời kỳ quá độ',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571129/img7_gs2yb7.jpg'
      },
      {
        id: '3-2',
        title: 'Nhiệm Vụ Xây Dựng & Cải Tạo',
        description: 'Xây dựng nền tảng vật chất và kỹ thuật cho CNXH, xây dựng các tiền đề về kinh tế, chính trị, văn hoá. Cải tạo xã hội cũ, xây dựng xã hội mới, trong đó lấy xây dựng làm trọng tâm.',
        context: 'Xây dựng là nội dung cốt yếu',
        citation: 'Nghị quyết về xây dựng CNXH',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571129/img8_qn1sy0.jpg'
      },
      {
        id: '3-3',
        title: 'Nội Dung Xây Dựng Các Lĩnh Vực',
        description: 'Chính trị: Giữ vững vai trò lãnh đạo của Đảng. Kinh tế: Phát triển nền kinh tế nhiều thành phần, ưu tiên nông nghiệp và công nghiệp như "hai chân" của nền kinh tế. Văn hoá: Đào tạo con người mới XHCN.',
        context: 'Phát triển toàn diện',
        citation: 'Chiến lược phát triển quốc gia',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571128/img9_zffi2j.jpg'
      },
    ]
  },
  {
    id: 'sec4',
    title: 'IV. PHƯƠNG CHÂM VÀ BIỆN PHÁP XÂY DỰNG',
    description: 'Những nguyên tắc chỉ đạo và biện pháp cơ bản trong quá trình xây dựng CNXH theo tư tưởng Hồ Chí Minh.',
    layout: 'single', // 1 item → layout mới "single"
    items: [
      {
        id: '4-1',
        title: 'Phương châm và Biện pháp xây dựng CNXH',
        description: '• Vận dụng sáng tạo, không máy móc: Xây dựng CNXH là hiện tượng phổ biến mang tính quốc tế nhưng phải căn cứ vào điều kiện thực tế của dân tộc, nhu cầu và khả năng của nhân dân. Không được "sao chép máy móc" từ các nước khác.\n\n• Tiến bước vững chắc: Thực hiện phương châm "tiến nhanh, tiến mạnh, tiến vững chắc" nhưng không có nghĩa là làm bừa, làm ẩu hay "đốt cháy giai đoạn" mà phải phù hợp với trình độ của lực lượng sản xuất.\n\n• Biện pháp cơ bản: Biện pháp quyết định nhất là "đem của dân, tài dân, sức dân làm lợi cho dân" dưới sự lãnh đạo của Đảng. Phải biến sự nghiệp xây dựng CNXH thành công việc của toàn dân.',
        context: 'Nguyên tắc và cách thức thực hiện',
        citation: 'Tư tưởng Hồ Chí Minh về xây dựng CNXH',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571143/img10_yfkayx.png'
      }
    ]
  },
  {
    id: 'sec5',
    title: 'V. VẬN DỤNG TƯ TƯỞNG HỒ CHÍ MINH VỀ CNXH HIỆN NAY',
    description: 'Tư tưởng Hồ Chí Minh về CNXH còn phù hợp không? Có — nhưng cần hiểu và vận dụng theo cách thích ứng, sáng tạo.',
    layout: 'slabs', // 3 items → slabs
    items: [
      {
        id: '5-1',
        title: '1. Mục tiêu phổ quát',
        description: 'Mục tiêu "dân giàu, nước mạnh, công bằng, văn minh" là phổ quát và không lỗi thời. Dù phương tiện đạt mục tiêu thay đổi (thị trường, công nghệ), mục tiêu xã hội vẫn phù hợp với thời đại.',
        context: 'Giá trị trường tồn',
        citation: 'Cương lĩnh xây dựng đất nước',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571141/img11_tya09b.jpg'
      },
      {
        id: '5-2',
        title: '2. Kinh tế thị trường định hướng XHCN',
        description: 'Hình thức tổ chức kinh tế có thể dùng cơ chế thị trường, nhưng phải định hướng xã hội chủ nghĩa: tức là giữ vai trò điều tiết của Nhà nước để bảo đảm công bằng, tránh lợi ích tư nhân chi phối toàn bộ.',
        context: 'Mô hình kinh tế Việt Nam',
        citation: 'Đường lối đổi mới của Đảng',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571141/img12_nsjklx.jpg'
      },
      {
        id: '5-3',
        title: '3. CMCN 4.0 và tư tưởng Bác',
        description: 'Cách mạng công nghiệp 4.0 không mâu thuẫn với tư tưởng Bác mà trái lại là phương tiện để tăng năng suất, nâng cao đời sống, mở rộng cơ hội học tập. Tuy nhiên cũng đặt ra rủi ro cần chính sách kịp thời.',
        context: 'Cơ hội và thách thức',
        citation: 'Vận dụng sáng tạo trong thời đại mới',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571140/img13_ikkqou.jpg'
      }
    ]
  },
  {
    id: 'sec6',
    title: 'VI. VẬN DỤNG CỤ THỂ TRONG THỰC TIỄN HIỆN ĐẠI',
    description: 'Trong thực tiễn hiện đại cần hiểu CNXH kiểu "Hồ Chí Minh" thế nào cho đúng?',
    layout: 'portal', // 5 items → portal (5 columns)
    items: [
      {
        id: '6-1',
        title: '1. Đổi mới công cụ',
        description: 'Mục tiêu "dân giàu, nước mạnh" vẫn là kim chỉ nam; công cụ là phát triển lực lượng sản xuất bằng thị trường + đổi mới công nghệ, đầu tư cho khoa học–giáo dục.',
        context: 'Kế thừa và phát triển',
        citation: 'Đường lối đổi mới của Đảng',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571139/img14_vbza0j.jpg'
      },
      {
        id: '6-2',
        title: '2. Bảo đảm an sinh',
        description: 'Để thị trường tạo của cải nhưng Nhà nước phải can thiệp để hạn chế phân hoá, bảo vệ nhóm yếu thế và cung cấp dịch vụ công cơ bản (y tế, giáo dục, bảo hiểm).',
        context: 'Vai trò của Nhà nước',
        citation: 'Chính sách an sinh xã hội',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571138/img15_ikbsit.jpg'
      },
      {
        id: '6-3',
        title: '3. Con người toàn diện',
        description: 'Đầu tư mạnh cho giáo dục, đào tạo lại lực lượng lao động trong kỷ nguyên 4.0, và chú trọng giáo dục đạo đức — đúng tinh thần "có đức, có tài" của Bác.',
        context: 'Con người là trung tâm',
        citation: 'Tư tưởng Hồ Chí Minh về giáo dục',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571138/img16_y6ggyd.jpg'
      },
      {
        id: '6-4',
        title: '4. Phát triển bền vững',
        description: 'Không chạy theo GDP mà bỏ quên công bằng, môi trường, văn hoá — điều này hoàn toàn trùng khớp với quan điểm Hồ Chí Minh về phát triển toàn diện.',
        context: 'Cân bằng tăng trưởng',
        citation: 'Quan điểm phát triển toàn diện',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571136/img17_aw1imx.png'
      },
      {
        id: '6-5',
        title: '5. Đổi mới thể chế',
        description: 'Minh bạch, pháp quyền, chống tham nhũng để nguồn lực phục vụ nhân dân thực sự. Đây là hệ quả thực tiễn từ mục tiêu dân giàu, nước mạnh.',
        context: 'Nhà nước pháp quyền',
        citation: 'Cải cách hành chính',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571135/img18_hg8eom.jpg'
      }
    ]
  },
  {
    id: 'sec7',
    title: 'VII. THÁCH THỨC HIỆN NAY',
    description: 'Những thách thức lớn cần giải quyết khi triển khai tư tưởng Hồ Chí Minh trong thời đại mới.',
    layout: 'slabs', // 3 items → timeline (layout 2-1-2 nhưng chỉ dùng 3)
    items: [
      {
        id: '7-1',
        title: '1. Bất bình đẳng',
        description: 'Thị trường có thể làm giãn cách khoảng cách giàu–nghèo giữa các tầng lớp xã hội và bất bình đẳng giữa các vùng miền. Cần chính sách điều tiết để đảm bảo phát triển đồng đều.',
        context: 'Thách thức về công bằng xã hội',
        citation: 'Mặt trái của kinh tế thị trường',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571134/img19_nyx55m.png'
      },
      {
        id: '7-2',
        title: '2. Thất nghiệp cơ cấu',
        description: 'Thay đổi công nghệ nhanh chóng trong kỷ nguyên 4.0 gây thất nghiệp cơ cấu nếu không có chính sách đào tạo lại kịp thời. Cần đầu tư mạnh vào giáo dục và chuyển đổi nghề nghiệp.',
        context: 'Thách thức về lao động việc làm',
        citation: 'Tác động của CMCN 4.0',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571134/img20_b3ipyj.jpg'
      },
      {
        id: '7-3',
        title: '3. Thể chế yếu',
        description: 'Quản trị, thể chế chưa đủ mạnh để nhận diện và giải quyết "mặt trái" của thị trường như tham nhũng, trục lợi. Cần hoàn thiện hệ thống pháp luật.',
        context: 'Thách thức về thể chế',
        citation: 'Yêu cầu cải cách hành chính',
        image: 'https://res.cloudinary.com/dbyupgagn/image/upload/v1768571133/img21_kcvkun.png'
      }
    ]
  },
  {
    id: 'outro',
    title: 'LỜI KẾT',
    description: '"Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành." — Hồ Chí Minh',
    type: 'outro',
    layout: 'outro',
    conclusion: 'Tư tưởng Hồ Chí Minh về CNXH là một hệ thống lý luận mở, luôn coi trọng thực tiễn và lợi ích của nhân dân. Trong thế giới hiện đại, tư tưởng này chính là cơ sở để Việt Nam hội nhập nhưng không mất bản sắc, phát triển kinh tế gắn liền với công bằng xã hội.',
    items: []
  }
];