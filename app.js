// ==========================================================================
// MOCK DATABASE & REVIEWS DATA (MASSIVE LONG-FORM EDITIONS)
// ==========================================================================

const INITIAL_REVIEWS = [
    {
        id: "mv-synthwave-dream",
        type: "mv",
        title: "Synthwave Dream",
        artist: "The Midnight Project",
        year: 2026,
        poster: "assets/poster_synthwave.png",
        rating: 9.5,
        genres: ["Synthwave", "Electronic", "Retro"],
        verdictTag: "Siêu phẩm",
        verdictClass: "verdict-masterpiece",
        summary: "Bữa tiệc nghe nhìn bùng nổ đưa bạn trở về những con đường ngập ánh hoàng hôn giả lập thập niên 80. Liệu những giai điệu dồn dập này có đánh thức nỗi nhớ khôn nguôi trong bạn?",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: <strong>Synthwave Dream</strong> của nhóm nhạc indie điện tử <strong>The Midnight Project</strong> không chỉ đơn thuần là một sản phẩm âm nhạc để nghe, mà đó là cả một tác phẩm nghệ thuật thị giác mang đậm tính điện ảnh sâu sắc. Dưới sự đạo diễn tài ba của ê kíp, MV dẫn dắt người xem vào một chuyến hành trình xuyên màn đêm trên một chiếc xe thể thao cổ điển tiến thẳng về phía mặt trời lặn giả lập đầy quyến rũ. Bầu không khí mang tính hoài niệm (retro-futurism) bao trùm từng giây phút, gợi nhắc đến thời đại hoàng kim của các phòng máy arcade, những cuốn băng từ VHS đục màu, và nét thẩm mỹ lofi đặc trưng của những năm 1980.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Câu chuyện của MV được xây dựng tối giản nhưng giàu tính gợi hình. Chúng ta không có các cuộc đối thoại trực tiếp, mà toàn bộ diễn biến được kể thông qua lăng kính của một người tài xế ẩn danh. Người lái xe lướt đi trên một xa lộ vô tận trải dài giữa đại lộ neon rực rỡ, hai bên đường là những khối nhà hình học lập phương mô phỏng đồ họa máy tính thuở sơ khai. Cảnh quay luân chuyển từ buồng lái ấm cúng với những nút bấm phát sáng sang góc quay từ phía sau, cho thấy chiếc xe đang lao vun vút vào hư vô. Nhịp phim tăng tiến dần khi chiếc xe tăng tốc, đồng điệu với tốc độ dồn dập của giai điệu, tạo nên một cảm giác trốn chạy thực tại mãnh liệt.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Về mặt hình ảnh, MV sử dụng triệt để bảng màu neon đặc trưng gồm hồng tím magenta và xanh indigo sâu thẳm. Các kỹ thuật chồng mờ cảnh (dissolve) và hiệu ứng ánh sáng quét (scanlines) được áp dụng cực kỳ khéo léo để mô phỏng chất phim VHS của thập niên 80 nhưng với độ nét cao 4K thời thượng. Mọi khung hình đều được chăm chút kỹ lưỡng như một bức tranh vẽ kỹ thuật số chuyên nghiệp, tạo nên một không gian hoài cổ nhưng đầy hơi thở hiện đại. Những vệt sáng từ đèn pha xe thể thao kéo dài trong mưa đêm hay ánh phản chiếu của vầng mặt trời giả lập trên mặt kính xe đều tạo nên hiệu ứng thị giác đỉnh cao.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Dòng bass dồn dập (synth-bassline) chạy dọc suốt bài nhạc kết hợp cùng những tiếng gõ trống mang độ vang lớn (reverb snare) đặc trưng. Điểm nhấn lớn nhất là đoạn solo saxophone ở nửa cuối bài, đẩy cảm xúc của người nghe lên đến mức cực đỉnh của sự hoài niệm, tiếc nuối và cô đơn trong lòng đô thị giả lập rực rỡ. Âm thanh réo rắt của saxophone đan xen giữa tiếng rè analog làm dấy lên một cảm giác buồn bã nhưng cũng vô cùng dễ chịu cho những tâm hồn cô độc.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Synthwave Dream là một bài thơ bằng ánh sáng và âm thanh về nỗi nhớ. Nó nhắc nhở chúng ta về sự trôi qua của thời gian và cách con người bám víu vào những ký ức đẹp đẽ để vượt qua hiện tại ngột ngạt. Tác phẩm mang lại cảm giác xoa dịu mạnh mẽ, đưa người nghe tạm rời xa cuộc sống xô bồ để đắm chìm vào khoảng không gian giả lập yên bình.</p>
            
            <div class="review-verdict-box">
                "Một tác phẩm mẫu mực cho những ai yêu thích phong cách Retro-Futurism. Jamie đánh giá đây là MV xuất sắc nhất nửa đầu năm nay về cả hòa âm phối khí lẫn định hướng mỹ thuật hình ảnh độc đáo."
            </div>
        `,
        scores: { visuals: 9.8, sound: 9.5, story: 8.8, concept: 9.7 },
        trailerUrl: "https://www.youtube.com/embed/rDBbaGCCIhk",
        cluster: "retro",
        personalityProfile: { romance: 50, retro: 100, cyberpunk: 50, healing: 40, mystery: 10 },
        commentsCount: 2450
    },
    {
        id: "movie-shadow-protocol",
        type: "movie",
        title: "Shadow Protocol: Cyber City",
        artist: "Đạo diễn: Neo Vancamp",
        year: 2026,
        poster: "assets/poster_cyber_city.png",
        rating: 9.2,
        genres: ["Sci-Fi", "Action", "Cyberpunk"],
        verdictTag: "Hình ảnh đỉnh",
        verdictClass: "verdict-visuals",
        summary: "Thành phố ngột ngạt ngập ánh sáng hologram và những cơn mưa axit. Khi một thám tử tư giải nghệ vô tình vướng vào bí mật cấy ghép ký ức của tập đoàn khổng lồ, anh ta sẽ chọn sự thật hay ảo mộng ngọt ngào?",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Đạo diễn <strong>Neo Vancamp</strong> một lần nữa khẳng định vị thế độc tôn của mình trong dòng phim viễn tưởng thế giới ngầm với siêu phẩm mới nhất mang tên <strong>Shadow Protocol: Cyber City</strong>. Bộ phim đưa chúng ta theo chân một thám tử tư đã giải nghệ, lần theo những dấu vết kỹ thuật số để vạch trần một âm mưu kiểm soát ký ức của tập đoàn công nghệ khổng lồ. Thế giới trong phim là một xã hội tương lai phân cực, nơi công nghệ phát triển vượt bậc nhưng nhân phẩm và sự thật lại bị bóp nghẹt dưới những tầng sương mù dày đặc và các cơn mưa axit không bao giờ dứt.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim được xây dựng theo lối trinh thám cổ điển pha trộn yếu tố viễn tưởng giật gân. Nhịp phim vô cùng khẩn trương, đưa người xem đi từ manh mối này đến manh mối khác thông qua những cuộc truy lùng trong mạng lưới ngầm. Những phân cảnh hành động được dàn dựng công phu, không lạm dụng kỹ xảo cắt cảnh nhanh mà tập trung vào các góc máy tĩnh dài để lột tả chân thực sự khốc liệt của các cuộc chiến. Điểm nhấn kịch bản nằm ở những đoạn đối thoại triết học giữa nhân vật chính và thực thể trí tuệ nhân tạo, đặt câu hỏi về tính xác thực của những ký ức mà con người đang mang giữ.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Bối cảnh Cyber City hiện lên cực kỳ ngột ngạt và chân thực. Những con hẻm tối tăm đẫm nước mưa phản chiếu ánh sáng rực rỡ từ những tấm bảng hiệu hologram 3D khổng lồ. Tông màu xanh lục-lam (teal) tương phản sắc sảo với màu cam (orange) ấm nóng tạo nên bầu không khí đậm chất điện ảnh Neo-Noir. Thiết kế phục trang bằng chất liệu da bóng bẩy kết hợp với các thiết bị công nghệ cấy ghép trên cơ thể nhân vật tạo nên hiệu ứng thị giác độc đáo, vừa tương lai vừa bụi bặm, cũ kỹ.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc nền của phim là sự pha trộn tinh tế giữa những tiếng gầm rú cơ khí và nhạc điện tử u ám (dark synth). Âm thanh bass cực thấp vang lên mỗi khi ống kính quét qua các tòa cao ốc chọc trời làm tăng thêm cảm giác áp bức, đè nặng lên tâm trí người xem. Sự im lặng cũng được đạo diễn sử dụng như một thứ vũ khí đắt giá trong các phân cảnh rượt đuổi nghẹt thở, làm nổi bật tiếng mưa rơi và tiếng bước chân dồn dập.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Shadow Protocol đặt ra một câu hỏi nhức nhối: Liệu một ký ức hạnh phúc được cấy ghép nhân tạo có giá trị hơn một sự thật đau lòng của cuộc đời? Bộ phim là lời cảnh tỉnh sâu sắc về tương lai nơi con người có nguy cơ tự biến mình thành những con rối sinh học bị kiểm soát hoàn toàn bởi các thế lực công nghệ khổng lồ.</p>
            
            <div class="review-verdict-box">
                "Shadow Protocol không chỉ là một phim hành động thông thường, đó là câu hỏi nhức nhối về bản ngã của con người trước sự bành trướng của AI và công nghệ sinh học."
            </div>
        `,
        scores: { visuals: 9.7, sound: 9.0, story: 8.5, concept: 9.4 },
        trailerUrl: "https://www.youtube.com/embed/8X2kIfS6fb8",
        cluster: "cyberpunk",
        personalityProfile: { romance: 10, retro: 30, cyberpunk: 100, healing: 10, mystery: 80 },
        commentsCount: 3120
    },
    {
        id: "mv-huong-hoa-bay",
        type: "mv",
        title: "Gieo Quẻ",
        artist: "Hoàng Thùy Linh ft. Đen",
        year: 2022,
        poster: "assets/poster_huonghoabay_v2.png",
        rating: 8.8,
        genres: ["Modern Folk", "Pop", "Electronic"],
        verdictTag: "Độc lạ",
        verdictClass: "verdict-great",
        summary: "Sự kết hợp hoàn hảo giữa âm hưởng truyền thống Việt Nam và chất nhạc điện tử hiện đại. MV mang đậm màu sắc văn hóa tâm linh dân gian đầy lôi cuốn.",
        content: `
<p><strong>[TỔNG QUAN BỐI CẢNH]</strong></p>\n<p>MV Gieo Quẻ của Hoàng Thùy Linh và Đen Vâu, ra mắt vào đầu năm 2022, đã đánh dấu một chương mới đầy khởi sắc và thành công rực rỡ cho nền âm nhạc Việt Nam sau thời kỳ dài đóng băng vì đại dịch toàn cầu. Sau sự thành công mang tính hiện tượng và mang tầm vóc lịch sử của album Hoàng vào năm 2019, Hoàng Thùy Linh không hề ngủ quên trên chiến thắng. Trái lại, cô và ê-kíp sáng tạo của mình đã âm thầm chuẩn bị cho một cuộc lột xác nghệ thuật tiếp theo, và Gieo Quẻ chính là phát súng mở màn đầy uy lực. Sự kết hợp giữa cô và Đen Vâu - hai nghệ sĩ hàng đầu với hai phong cách hoàn toàn đối lập: một bên là nữ hoàng nhạc dân gian đương đại lộng lẫy, kiêu kỳ, ngập tràn sắc màu và một bên là nam rapper mộc mạc, bình giản, triết lý - đã tạo nên một cơn sốt truyền thông chưa từng có. Tác phẩm này không chỉ là một bài nhạc pop bắt tai chào năm mới, mà nó đại diện cho một bước tiến dài trong tư duy nghệ thuật, định vị lại vị thế tiên phong của dòng nhạc Modern Folk Pop kết hợp EDM/Trap tại thị trường V-Pop.
Bối cảnh ra đời của MV Gieo Quẻ vô cùng đặc biệt. Đầu năm 2022, đất nước Việt Nam và toàn thế giới bắt đầu bước vào giai đoạn thích ứng an toàn, mở cửa trở lại sau những tháng ngày giãn cách xã hội đầy u ám của đại dịch COVID-19. Trong lòng mỗi người dân lúc bấy giờ luôn thường trực một cảm giác lo âu, băn khoăn về tương lai, về công ăn việc làm, về sức khỏe và vận mệnh của bản thân và gia đình. Theo phong tục tập quán lâu đời của người Việt, mỗi dịp Tết đến xuân về, mọi người thường tìm đến đền chùa, lăng tẩm để thắp nhang, xin lộc và gieo quẻ cầu bình an. Nắm bắt được tâm lý xã hội sâu sắc đó, Hoàng Thùy Linh đã khéo léo đưa chất liệu tâm linh dân gian này vào âm nhạc để xoa dịu đi nỗi đau thương, mang lại tiếng cười lạc quan và định hướng tư duy tích cực cho cộng đồng. Gieo Quẻ không hề mang màu sắc mê tín dị đoan, mà trái lại, nó sử dụng hình ảnh chiếc quẻ bói như một phương tiện nghệ thuật để truyền tải thông điệp về sự nỗ lực tự thân và niềm tin mãnh liệt vào tương lai tốt đẹp phía trước.
Sự nhào nặn tài ba của giám đốc sáng tạo và đạo diễn hình ảnh đã đưa Gieo Quẻ vượt qua khuôn khổ của một sản phẩm ca nhạc thông thường để trở thành một tác phẩm nghệ thuật thị giác mang tính điện ảnh cao. Tác phẩm đã khéo léo kết hợp các yếu tố văn hóa truyền thống Việt Nam như quẻ tre, quạt giấy, mâm ngũ quả, chữ thư pháp và trang phục cổ phong với các yếu tố hiện đại của kỷ nguyên số như đèn neon rực rỡ, trang phục metallic ánh kim thời thượng và nhịp điệu EDM/Trap dồn dập. Sự giao thoa này không hề tạo ra cảm giác khiên cưỡng hay chắp vá, mà ngược lại, nó tạo nên một tổng thể vô cùng hài hòa, bắt mắt và mang đậm dấu ấn cá nhân của Hoàng Thùy Linh. Đây chính là công thức thành công giúp cô tiếp tục duy trì vị thế độc tôn và truyền cảm hứng cho nhiều nghệ sĩ trẻ đi theo con đường đưa chất liệu văn hóa dân tộc vào âm nhạc đương đại.</p>\n<p>Hoàng Thùy Linh từ lâu đã được công nhận là một trong những nghệ sĩ có tư duy tiên phong hàng đầu tại Việt Nam. Sự ra đời của MV Gieo Quẻ chính là minh chứng sống động nhất cho thấy tầm nhìn chiến lược của cô trong việc định hình xu hướng âm nhạc dân gian đương đại Việt. Cô không chỉ tìm kiếm một giai điệu bắt tai để thu hút công chúng mà còn muốn mỗi sản phẩm của mình phải là một di sản văn hóa thu nhỏ, lưu giữ những nét đẹp truyền thống và giới thiệu nó dưới lăng kính hiện đại, dễ tiếp cận hơn với thế giới trẻ. Sự dũng cảm trong việc lựa chọn con đường khó khăn này đã mang lại cho cô những quả ngọt xứng đáng, và Gieo Quẻ tiếp tục nối dài chuỗi thành tích huy hoàng đó.
Vấn đề tâm linh dân gian luôn là một đề tài nhạy cảm và khó xử lý trong nghệ thuật hiện đại. Nếu không khéo léo, tác phẩm dễ rơi vào trạng thái mê tín dị đoan hoặc bị phê phán là lạm dụng văn hóa. Tuy nhiên, Hoàng Thùy Linh đã chứng minh đẳng cấp của mình khi xử lý chất liệu gieo quẻ đầu năm một cách vô cùng tinh tế, vui nhộn và mang tính giáo dục sâu sắc. Chiếc quẻ bói đầu năm không phải là lời phán xét số phận của thần thánh mà chỉ là tấm gương phản chiếu những ước vọng, lo toan của con người. Điều này giúp tác phẩm nhận được sự đồng thuận và yêu mến từ mọi tầng lớp khán giả, từ người lớn tuổi thích nét truyền thống đến các bạn trẻ yêu sự năng động, phá cách của thời đại mới.
Sự hợp tác với Đen Vâu cũng cho thấy tư duy chọn bạn đồng hành vô cùng thông minh của nữ ca sĩ. Đen Vâu vốn nổi tiếng với những lời rap mộc mạc, triết lý sống gần gũi và hình ảnh giản dị như một người anh nhà bên. Khi đặt sự mộc mạc đó bên cạnh sự lộng lẫy, kiêu kỳ của Hoàng Thùy Linh, ê-kíp đã tạo nên một cấu trúc cân bằng âm dương vô cùng hoàn hảo trong MV. Hai cá tính âm nhạc tưởng chừng như nước với lửa lại hòa quyện nhịp nhàng, tạo ra những khoảnh khắc bùng nổ cảm xúc và thính giác cho người nghe.</p>\n<p>Kịch bản của MV Gieo Quẻ là một chuỗi các ẩn dụ nghệ thuật tinh tế, sắc sảo và mang đậm tính thời sự. Phân cảnh mở đầu của MV hiện lên vô cùng ấn tượng và giàu tính biểu tượng: một bốt kiểm soát giao thông bị kẹt cứng, hàng dài người và xe cộ bị đóng băng hoàn toàn trong trạng thái tĩnh lặng kéo dài dưới ánh sáng đỏ lòm của cột đèn giao thông. Cảnh tượng này tái hiện một cách gián tiếp nhưng vô cùng chân thực thời kỳ giãn cách xã hội đầy khó khăn của đại dịch COVID-19, nơi mọi hoạt động giao thương, di chuyển đều bị đình trệ. Các chi tiết nhỏ như bình xăng cạn kiệt, chiếc thẻ xanh lá (ẩn dụ cho thẻ xanh COVID), chiếc xe hết điện và những khuôn mặt đầy lo âu mệt mỏi của người dân xếp hàng chờ đợi đã lột tả sâu sắc tâm lý bế tắc, hoang mang của xã hội trước những biến cố lớn của đời sống. Tất cả dòng người đều đang tất tả ngược xuôi, mong ngóng một tín hiệu xanh để tiếp tục hành trình cuộc đời mình, nhưng chiếc đèn đỏ cứ kéo dài vô tận như một bức tường vô hình ngăn cách.
Bước ngoặt kịch bản xảy ra khi quẻ bói cát tường đầu tiên được gieo xuống đất. Không gian u tối, ngột ngạt bốt giao thông bỗng chốc vỡ òa thành một lễ hội âm nhạc đầy sắc màu, ánh sáng và sức sống. Cột đèn đỏ vụt tắt, nhường chỗ cho ánh sáng xanh hy vọng rực rỡ và những vũ điệu bùng nổ của đoàn người. Sự chuyển dịch trạng thái này đại diện cho thời kỳ thích ứng an toàn, khi cuộc sống bình thường mới quay trở lại và con người tìm lại được sự tự do, năng lượng hoạt động sôi nổi. Hoàng Thùy Linh xuất hiện ở trung tâm lễ hội giống như một vị sứ giả của niềm vui, dẫn dắt mọi người bước vào điệu nhảy ăn mừng tràn đầy lạc quan. Sự biến đổi từ trạng thái đóng băng sang trạng thái chuyển động không ngừng thể hiện tinh thần kiên cường, bất khuất của người Việt Nam trước mọi nghịch cảnh.
Điểm nhấn thú vị và đắt giá nhất của kịch bản chính là sự xuất hiện của rapper Đen Vâu ở phần giữa của MV. Đen Vâu xuất hiện trong vai một người bán nước chè vỉa hè vô cùng mộc mạc, bình dị với chiếc quạt giấy trên tay bên cạnh chiếc xe trà đá quen thuộc của người dân miền Bắc. Hình ảnh này tạo nên một sự tương phản vô cùng đắt giá với sự lộng lẫy, kiêu kỳ của Hoàng Thùy Linh. Giữa một không gian ngập tràn sắc màu neon hiện đại và những vũ điệu dồn dập, quán nước chè của Đen Vâu hiện lên giống như một ốc đảo bình yên, một trạm dừng chân ấm áp chốn đô thị vội vã. Đoạn hội thoại âm nhạc giữa Hoàng Thùy Linh (người đi xin quẻ bói tình duyên, công danh) và Đen Vâu (người đưa ra lời khuyên chân thành) được xây dựng vô cùng tự nhiên, hóm hỉnh nhưng chứa đựng những triết lý nhân sinh sâu sắc về cuộc đời.
Sự chuyển cảnh trong MV cũng được thực hiện vô cùng điệu nghệ và mượt mà. Đạo diễn đã sử dụng các cú máy lia nhanh (whip pan) và hiệu ứng đồ họa chuyển cảnh để liên kết giữa thế giới thực tại đầy lo âu ở bốt giao thông và thế giới huyền ảo đầy màu sắc tâm linh dân gian của lễ hội gieo quẻ. Sự luân chuyển nhịp nhàng này giúp giữ chân người xem từ đầu đến cuối mà không gây ra cảm giác nhàm chán hay đứt gãy mạch cảm xúc. Từng phân cảnh đều được tính toán kỹ lưỡng về mặt nhịp độ (pacing) để tương thích hoàn hảo với sự phát triển của giai điệu bài hát, đẩy cảm xúc người xem đạt đến cao trào ở phân đoạn nhảy tập thể cuối cùng.</p>\n<p>Phân tích kỹ lưỡng hơn về kịch bản, chúng ta thấy bốt giao thông ở đầu MV không chỉ đơn thuần là sự mô phỏng thời kỳ giãn cách xã hội. Nó còn là một ẩn dụ sâu sắc cho sự tắc nghẽn trong tâm hồn và hành trình tìm kiếm lối thoát của mỗi con người khi đối mặt với những ngã rẽ cuộc đời. Chiếc đèn đỏ kéo dài vô tận đại diện cho những khó khăn, trở ngại bất ngờ ập đến khiến chúng ta bị đóng băng mọi ước mơ, hoài bão. Những khuôn mặt lo âu của dòng người xếp hàng chờ đợi chính là hình ảnh phản chiếu của chính chúng ta trong những giai đoạn khủng hoảng của cuộc sống, khi tương lai trở nên mờ mịt và không biết đi hướng nào là đúng đắn.
Quá trình chuyển đổi từ bế tắc sang lễ hội rực rỡ sắc màu khi quẻ bói cát tường được gieo xuống mang đậm tính điện ảnh và triết lý sống. Nó chứng minh rằng chỉ cần chúng ta giữ vững niềm tin, không ngừng hy vọng và nỗ lực gieo nhân lành thì mọi bế tắc rồi sẽ được khai thông. Năng lượng bùng nổ của đoàn người nhảy múa dưới ánh sáng xanh hy vọng truyền tải thông điệp mạnh mẽ về sự hồi sinh và sức sống mãnh liệt. Sự biến chuyển này khích lệ người xem dũng cảm bước qua những khó khăn của năm cũ để đón nhận những vận hội mới đầy tươi sáng của tương lai.
Vai trò của nhân vật Đen Vâu trong kịch bản vô cùng đặc biệt. Anh không chỉ là một rapper khách mời mà đóng vai trò như một người dẫn đường tinh thần, một nhà thông thái ẩn dật dưới lốt một người bán nước chè vỉa hè giản dị. Lời khuyên của anh dành cho cô gái đi xin quẻ không mang tính giáo điều mà vô cùng mộc mạc, gần gũi giống như lời khuyên của một người anh trai thân thiết. Sự hiện diện của quán nước chè với chiếc quạt giấy chầm chậm giữa một đô thị neon dồn dập mang lại một nhịp thở chậm rãi, giúp người xem lắng đọng tâm hồn để suy ngẫm về những giá trị thực sự của cuộc sống.</p>\n<p>Định hướng mỹ thuật (Art Direction) của MV Gieo Quẻ xứng đáng được coi là một tác phẩm nghệ thuật sắp đặt mẫu mực, đạt đến độ hoàn mỹ và đẳng cấp quốc tế. Điểm đặc trưng dễ nhận thấy nhất trong phong cách thị giác của đạo diễn hình ảnh là việc áp dụng triệt để bố cục đối xứng hoàn hảo (Symmetrical Framing). Bố cục này không chỉ tạo nên sự cân đối, hài hòa tuyệt đối cho khung hình mà còn mang lại cảm giác trang nghiêm, huyền bí chuẩn xác cho một tác phẩm mang màu sắc tâm linh dân gian. Mỗi khung hình đều được thiết kế như một bức tranh sắp đặt nghệ thuật đương đại, nơi vị trí của các nhân vật, vũ công và đạo cụ đều được tính toán tỉ mỉ đến từng milimet để tạo nên một tổng thể hình học hoàn mỹ.
Nghệ thuật sắp đặt đạo cụ trong MV vô cùng thông minh và sáng tạo. Những hình ảnh biểu tượng dân gian như chiếc quẻ tre khổng lồ, những chiếc quạt giấy đỏ rực rỡ xoay tròn, mâm ngũ quả khổng lồ đầy màu sắc đại diện cho ước vọng sung túc, chữ thư pháp và những bức màn che huyền bí đều được ê-kíp tái hiện dưới một lăng kính mới mẻ. Chiếc kiệu hoa lộng lẫy của Hoàng Thùy Linh được trang trí bằng hàng ngàn bông hoa vải rực rỡ sắc màu hồng tím, kết hợp cùng những dải đèn led mỏng phát sáng tạo nên hiệu ứng thị giác lung linh, huyền ảo. Những chiếc quạt giấy đỏ rực được các vũ công sử dụng làm đạo cụ múa không chỉ tạo nên những đường cong chuyển động mềm mại mà còn ẩn dụ cho sự xua tan đi những điều không may mắn của năm cũ.
Thiết kế phục trang là một điểm sáng chói lọi khác, khẳng định tư duy thời trang vượt trội của Hoàng Thùy Linh và các nhà thiết kế Việt. Trang phục trong MV là sự kết hợp táo bạo và tinh tế giữa y phục truyền thống Việt Nam như áo tứ thân, áo yếm, áo dài với các đường cắt cúp hiện đại, phom dáng bất đối xứng mạnh mẽ và chất liệu metallic ánh kim lấp lánh phản chiếu ánh sáng cực tốt. Bộ trang phục màu đỏ rực rỡ với phần vai lông thú giả bồng bềnh mà Hoàng Thùy Linh mặc khi ngồi trên kiệu hoa thể hiện quyền lực, sự kiều diễm của một nữ hoàng. Trong khi đó, bộ y phục bằng vải thổ cẩm kết hợp metallic đa sắc màu phản chiếu ánh đèn neon tạo nên nét độc lạ, pha trộn hoàn hảo giữa yếu tố truyền thống bản địa và hơi thở tương lai của phong cách Cyber-Folk.
Hệ thống màu sắc và ánh sáng trong MV được sử dụng vô cùng điệu nghệ để biểu đạt tâm lý nhân vật và truyền tải thông điệp. Phim sử dụng tông đỏ truyền thống mang ý nghĩa may mắn, thịnh vượng làm màu sắc chủ đạo của lễ hội gieo quẻ, tạo cảm giác ấm áp, tràn đầy sức sống của mùa xuân. Tuy nhiên, tông đỏ này được kết hợp khéo léo với ánh sáng đèn neon màu hồng tím magenta và xanh ngọc cyan hiện đại, tạo nên một không gian neon-noir đầy tính nghệ thuật hoài cổ lai tương lai. Sự tương phản rực rỡ giữa bóng tối sâu thẳm của bối cảnh đêm mưa và ánh sáng rực rỡ của đèn laser tạo nên chiều sâu không gian điện ảnh vô cùng mãn nhãn.
Góc máy quay cũng vô cùng đa dạng và sáng tạo. Đạo diễn hình ảnh đã sử dụng nhiều góc quay từ trên cao xuống (top-down view) để bắt trọn đội hình múa tập thể xếp hình bông hoa hay quẻ tre chuyển động tròn đều tăm tắp. Những góc quay cận cảnh (close-up) tập trung vào đôi mắt sắc sảo, thần thái kiêu kỳ của Hoàng Thùy Linh hay nụ cười hiền lành của Đen Vâu làm nổi bật biểu cảm nhân vật. Các cú máy tracking lia dọc theo dòng người chờ đợi bộc lộ rõ không khí ngột ngạt ban đầu của bốt giao thông kẹt cứng.</p>\n<p>Bố cục hình ảnh đối xứng hoàn hảo (Symmetrical Framing) được sử dụng xuyên suốt MV không chỉ mang lại tính thẩm mỹ cao mà còn là một thủ pháp nghệ thuật để tạo dựng không gian tâm linh linh thiêng, tôn nghiêm. Sự cân đối tuyệt đối của khung hình mang lại cảm giác bình yên, vững chãi cho người xem, xoa dịu đi những âu lo bấp bênh của tâm hồn. Từng chi tiết nhỏ như vị trí đứng của các vũ công, hướng xoay của những chiếc quạt giấy đỏ hay khoảng cách giữa các đạo cụ đều được tính toán vô cùng chặt chẽ, tạo nên một cấu trúc hình học hoàn mỹ và đầy tính nghệ thuật sắp đặt đương đại.
Cách ê-kíp thiết kế đạo cụ khổng lồ như chiếc quẻ tre cao bằng người hay mâm ngũ quả khổng lồ thể hiện sự táo bạo trong tư duy mỹ thuật. Những đạo cụ này không chỉ làm nổi bật yếu tố dân gian mà còn tạo hiệu ứng thị giác choáng ngợp cho người xem. Chiếc kiệu hoa của Hoàng Thùy Linh với hàng ngàn bông hoa hồng tím lấp lánh phản chiếu ánh đèn led mang vẻ đẹp lộng lẫy như bước ra từ những trang truyện cổ tích hiện đại. Nghệ thuật sử dụng quạt giấy đỏ múa không chỉ tạo ra những chuyển động cơ học uyển chuyển mà còn tượng trưng cho việc quét đi những điều đen đủi để đón nhận may mắn cát tường.
Trang phục trong MV thực sự là một cuộc triển lãm thời trang đương đại đỉnh cao. Việc kết hợp y phục truyền thống Việt Nam như áo tứ thân, áo dài với các chất liệu metallic ánh kim và các đường cắt cúp hiện đại tạo nên phong cách Cyber-Folk vô cùng độc lạ, tiên phong. Những bộ trang phục thổ cẩm kết hợp metallic đa sắc màu phản chiếu ánh đèn neon tạo nên hiệu ứng thị giác lung linh, thể hiện sự tự hào về văn hóa truyền thống bản địa nhưng vẫn mang đậm hơi thở thời đại mới đầy năng động và phá cách.
Ánh sáng trong MV được thiết kế vô cùng kỳ công để biểu đạt sự đối lập trạng thái tâm lý nhân vật. Tông màu đỏ may mắn truyền thống làm chủ đạo của lễ hội gieo quẻ mang lại không khí ấm áp, sum vầy của ngày xuân. Sự kết hợp khéo léo với ánh đèn neon màu hồng tím và xanh ngọc hiện đại tạo nên một không gian neon-noir huyền ảo, đậm tính nghệ thuật hoài cổ lai tương lai. Sự tương phản sắc sảo giữa bóng tối đêm mưa lạnh giá và ánh sáng rực rỡ của các tia laser xanh đỏ tạo nên chiều sâu không gian điện ảnh vô cùng mãn nhãn.
Góc máy quay cũng được thay đổi liên tục một cách sáng tạo để dẫn dắt cảm xúc người xem. Đạo diễn hình ảnh đã sử dụng nhiều góc quay từ trên cao (top-down view) để bắt trọn đội hình múa tập thể xếp hình bông hoa hay quẻ tre chuyển động tròn đều vô cùng đẹp mắt. Những góc quay cận cảnh (close-up) tập trung khai thác biểu cảm khuôn mặt kiêu kỳ của Hoàng Thùy Linh hay nụ cười hiền lành của Đen Vâu làm nổi bật biểu cảm nhân vật. Các cú máy tracking lia dọc theo dòng người chờ đợi bộc lộ rõ không khí ngột ngạt ban đầu của bốt giao thông kẹt cứng.</p>\n<p>Về mặt âm thanh và âm nhạc, nhà sản xuất âm nhạc tài ba Triple D đã thực hiện một cuộc cách mạng hòa âm phối khí thực sự khi kết hợp xuất sắc các nhạc cụ cổ truyền dân tộc Việt Nam với các xu hướng âm nhạc điện tử thế giới hiện đại. Gieo Quẻ thuộc thể loại Modern Folk Pop kết hợp EDM/Trap dồn dập. Giai điệu bài hát vô cùng bắt tai, rộn ràng, kích thích thính giác của người nghe ngay từ những nốt nhạc đầu tiên. Bản phối là một cấu trúc phức tạp nhưng vô cùng mượt mà, không hề mang lại cảm giác khiên cưỡng hay chắp vá.
Tiếng nhạc cụ truyền thống Việt Nam được tôn vinh một cách đầy kiêu hãnh trong bản phối. Tiếng đàn tranh réo rắt dồn dập chạy dọc suốt bài hát tạo nên nền nhạc vô cùng uyển chuyển, réo rắt. Tiếng sáo trúc thanh cao bay bổng vang lên ở những phân đoạn chuyển cảnh mang lại không khí thanh tịnh, huyền bí của đền chùa cổ xưa. Trống chèo trầm ấm kết hợp cùng bộ gõ dân tộc tạo nên nhịp điệu rộn rã, đậm chất hội hè dân gian Bắc Bộ. Những âm thanh mộc mạc cổ truyền này không bị lấn át mà hòa quyện hoàn hảo với nhịp bass điện tử mạnh mẽ, tiếng drop bass dồn dập đặc trưng của Trap/EDM và những âm synth ảo ảnh thời thượng.
Chất giọng của hai nghệ sĩ chính là mảnh ghép cuối cùng hoàn thiện nên siêu phẩm âm nhạc này. Giọng hát của Hoàng Thùy Linh mang đậm kỹ thuật luyến láy dân ca miền Bắc đặc trưng, vừa ngọt ngào, lả lướt vừa kiêu sa, đầy năng lượng. Cô sử dụng những quãng ngân vang tự nhiên và cách phát âm nhả chữ điệu nghệ tạo nên cái hồn dân gian không thể trộn lẫn. Trong khi đó, giọng rap trầm ấm, mộc mạc, đậm chất đời thường của Đen Vâu chính là sự bù trừ hoàn hảo cho chất giọng cao bay bổng của Linh. Lời rap của Đen chứa đựng nhiều phép so sánh tu từ độc đáo, sử dụng những hình ảnh giản dị như 'bán chè vỉa hè', 'quạt giấy', 'chiếc lá úa' để truyền tải những triết lý sống sâu sắc. Sự phối hợp nhịp nhàng giữa phần hát chính sôi nổi của nữ ca sĩ và đoạn rap chậm rãi, suy tư của nam rapper tạo nên cấu trúc âm nhạc đối thoại vô cùng thú vị và cân bằng.
Sự phân tầng âm thanh (sound layering) trong Gieo Quẻ được thực hiện vô cùng công phu. Ê-kíp sản xuất đã thu âm trực tiếp nhiều nhạc cụ cổ truyền và xử lý kỹ thuật số để tạo độ sâu không gian âm nhạc tốt nhất. Âm trầm của tiếng trống điện tử phối hợp ăn ý với tần số cao của đàn tranh giúp bài hát có độ động (dynamic range) rộng lớn, nghe cực kỳ đã tai khi phát trên các hệ thống loa chất lượng cao. Đoạn chuyển giao (bridge) trước khi vào phần điệp khúc cuối cùng là một đỉnh cao phối khí, khi tất cả các nhạc cụ dân tộc và âm synth điện tử cùng nhau hòa tấu dồn dập, đẩy cảm xúc người nghe đạt đến sự phấn khích tột độ.</p>\n<p>Bản phối hòa âm phối khí của Triple D thực sự là một tác phẩm nghệ thuật âm thanh đỉnh cao, định hình lại tiêu chuẩn sản xuất nhạc pop dân gian tại Việt Nam. Sự kết hợp giữa các nhạc cụ truyền thống Việt Nam và chất nhạc Trap/EDM hiện đại không hề tạo ra cảm giác khiên cưỡng mà ngược lại, hòa quyện vô cùng trơn tru, mang lại nguồn năng lượng bùng nổ cho người nghe. Tiếng đàn tranh réo rắt dồn dập chạy dọc suốt bài nhạc giống như dòng chảy thời gian không ngừng nghỉ, tạo nên nền nhạc vô cùng uyển chuyển.
Tiếng sáo trúc thanh cao bay bổng vang lên đúng những khoảnh khắc chuyển cảnh mang lại cảm giác thanh tịnh, huyền bí của không gian đền chùa cổ kính. Tiếng trống chèo trầm ấm kết hợp bộ gõ dân tộc tạo nên nhịp điệu rộn rã, đậm chất hội hè dân gian Bắc Bộ. Những âm thanh mộc mạc cổ truyền này không hề bị lép vế trước nhịp bass điện tử mạnh mẽ, tiếng drop bass dồn dập của Trap/EDM và những âm synth ảo ảnh thời thượng. Bản phối giữ được sự cân bằng hoàn hảo giữa tính truyền thống và tính hiện đại, thính giác của người nghe được kích thích mạnh mẽ ngay từ những nốt nhạc đầu tiên.
Sự kết hợp giọng hát uyển chuyển của Hoàng Thùy Linh và lời rap mộc mạc của Đen Vâu chính là linh hồn của tác phẩm âm nhạc này. Giọng hát của Linh mang đậm kỹ thuật luyến láy dân ca miền Bắc đặc trưng, vừa ngọt ngào, lả lướt vừa kiêu sa, đầy nội lực. Cô sử dụng những quãng ngân vang tự nhiên và cách phát âm nhả chữ điệu nghệ tạo nên cái hồn dân gian không thể trộn lẫn. Trong khi đó, giọng rap trầm ấm, mộc mạc của Đen Vâu chính là sự bù trừ hoàn hảo cho chất giọng cao bay bổng của Linh. Lời rap của Đen chứa đựng nhiều phép so sánh tu từ độc đáo, sử dụng những hình ảnh giản dị để truyền tải những triết lý sống sâu sắc về nhân sinh và vận mệnh.
Công phu trong khâu phân tầng âm thanh (sound layering) của Gieo Quẻ rất đáng nể. Các kỹ sư âm thanh đã thu âm trực tiếp nhiều nhạc cụ cổ truyền và xử lý kỹ thuật số tỉ mỉ để tạo độ sâu không gian âm nhạc tốt nhất. Âm trầm của trống điện tử phối hợp ăn ý với tần số cao của đàn tranh giúp bài hát có độ động rộng lớn, nghe cực kỳ đã tai khi phát trên các hệ thống loa chất lượng cao. Đoạn bridge trước khi vào điệp khúc cuối cùng là một đỉnh cao phối khí, khi tất cả các nhạc cụ dân tộc và âm synth điện tử cùng nhau hòa tấu dồn dập, đẩy cảm xúc người nghe đạt đến sự hưng phấn tột đỉnh.</p>\n\n<p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong></p>\n<p>Vượt lên trên một sản phẩm âm nhạc giải trí ngày Tết thông thường, Gieo Quẻ gửi gắm những thông điệp nhân văn, triết lý sống sâu sắc và mang giá trị thời đại to lớn. Tác phẩm phản ánh thói quen tâm linh lâu đời của người Việt là đi xin quẻ bói đầu năm để mong cầu bình an, may mắn. Con người thường có tâm lý lo âu trước những điều chưa biết ở tương lai, đặc biệt là sau những biến cố lớn của cuộc đời như đại dịch bệnh hoành hành. Tuy nhiên, thông qua cuộc đối thoại âm nhạc giữa Hoàng Thùy Linh và Đen Vâu, tác phẩm đã đưa ra một câu trả lời vô cùng nhân văn và thông tuệ cho câu hỏi về vận mệnh cuộc đời.
Lời bài hát chỉ ra rõ ràng: 'Thiên hạ thường lo lắng gieo quẻ bói toán để biết tương lai tốt hay xấu, nhưng thực chất vận mệnh nằm ở trong chính lòng bàn tay của mỗi chúng ta'. Nhân vật đi xin quẻ hỏi về tình duyên, hỏi về công danh tài lộc, hỏi về việc đi lại hướng nào tốt xấu. Nhưng câu trả lời của người bán trà đá Đen Vâu đã đập tan mọi sự lo âu mê tín: 'Tương lai là điều không thể đoán định trước, việc đi hướng nào tốt hay xấu không phụ thuộc vào quẻ bói mà phụ thuộc vào bước chân nỗ lực của chính bạn. Đi về phía có ánh sáng, hướng thiện lương thì con đường sẽ tự khắc bằng phẳng'. Câu rap 'Chỉ cần tấm lòng luôn hướng thiện, nỗ lực làm việc chân chính thì quẻ nào gieo ra cũng sẽ là quẻ cát tường' chính là kim chỉ nam, là thông điệp cốt lõi của tác phẩm.
Bên cạnh đó, Gieo Quẻ còn là lời cổ vũ tinh thần vô cùng ý nghĩa hướng tới cuộc sống bình thường mới sau đại dịch. Hình ảnh dòng người kẹt cứng ban đầu được giải phóng, nhảy múa cuồng nhiệt dưới ánh sáng xanh hy vọng biểu thị cho khát vọng hồi sinh mạnh mẽ của xã hội. Tác phẩm truyền tải nguồn năng lượng tích cực, xua tan đi những u ám của năm cũ, khích lệ mỗi người dân tự tin bước tiếp trên hành trình cuộc đời mình bằng chính đôi chân và khối óc của bản thân. Sự thiện lương, lòng kiên trì và nỗ lực lao động chân chính mới là những 'phép thuật' đích thực mang lại sự thịnh vượng và hạnh phúc cho mỗi con người.
Hoàng Thùy Linh đã khéo léo lồng ghép bài học đạo đức nhân sinh một cách vô cùng nhẹ nhàng, vui vẻ thông qua âm nhạc mà không hề mang lại cảm giác giáo điều, nặng nề cho người nghe. Gieo Quẻ chính là sự kết hợp hoàn mỹ giữa tính giải trí đại chúng và giá trị giáo dục nhân văn sâu sắc, giúp định hướng tư duy tích cực cho thế hệ trẻ trong xã hội hiện đại nhiều lo âu biến động.</p>\n<p>Triết lý nhân sinh của Gieo Quẻ mang lại giá trị thời đại to lớn và xoa dịu mạnh mẽ tâm hồn người nghe. Tác phẩm phản ánh thói quen tâm linh xin quẻ đầu năm của người Việt khi đứng trước thềm năm mới nhiều lo âu bấp bênh. Con người thường lo lắng về những điều chưa biết ở tương lai, đặc biệt là sau những biến cố lớn của cuộc đời như đại dịch bệnh hoành hành. Tuy nhiên, thông qua cuộc đối thoại âm nhạc giữa Hoàng Thùy Linh và Đen Vâu, tác phẩm đã đưa ra một câu trả lời vô cùng nhân văn và thông tuệ cho câu hỏi về vận mệnh cuộc đời.
Lời bài hát khẳng định rõ ràng rằng vận mệnh nằm ở trong chính lòng bàn tay và hành động của mỗi con người. Thay vì lo lắng dựa dẫm vào các quẻ bói toán tốt xấu cát hung, mỗi người hãy tự làm chủ cuộc đời mình bằng nỗ lực tự thân, sống thiện lương và biết yêu thương chia sẻ. Lời khuyên của người bán trà đá Đen Vâu vô cùng mộc mạc nhưng sâu sắc: tương lai tốt xấu phụ thuộc vào bước chân nỗ lực hướng thiện của bạn. Chỉ cần tấm lòng luôn hướng thiện, làm việc chân chính thì quẻ nào gieo ra cũng sẽ tự khắc cát tường.
Gieo Quẻ còn là lời cổ vũ tinh thần vô cùng ý nghĩa hướng tới cuộc sống bình thường mới sau đại dịch. Hình ảnh dòng người kẹt cứng ban đầu được giải phóng, nhảy múa cuồng nhiệt dưới ánh sáng xanh hy vọng biểu thị cho khát vọng hồi sinh mạnh mẽ của xã hội. Tác phẩm truyền tải nguồn năng lượng tích cực, xua tan đi những u ám của năm cũ, khích lệ mỗi người dân tự tin bước tiếp trên hành trình cuộc đời mình bằng chính đôi chân và khối óc của bản thân. Sự thiện lương, lòng kiên trì và nỗ lực lao động chân chính mới là những 'phép thuật' đích thực mang lại sự thịnh vượng và hạnh phúc cho mỗi con người.
Nữ ca sĩ đã khéo léo lồng ghép bài học đạo đức nhân sinh một cách vô cùng nhẹ nhàng, vui vẻ thông qua âm nhạc mà không hề mang lại cảm giác giáo điều, nặng nề cho người nghe. Gieo Quẻ chính là sự kết hợp hoàn mỹ giữa tính giải trí đại chúng và giá trị giáo dục nhân văn sâu sắc, giúp định hướng tư duy tích cực cho thế hệ trẻ trong xã hội hiện đại nhiều lo âu biến động.</p>\n<p>Tóm lại, MV Gieo Quẻ của Hoàng Thùy Linh ft. Đen Vâu thực sự là một tuyệt tác nghệ thuật âm nhạc dân gian đương đại mẫu mực của nền âm nhạc Việt Nam hiện đại. Sự đầu tư nghiêm túc, chỉn chu từ khâu lên kịch bản phân cảnh ẩn dụ thời sự, định hướng mỹ thuật đối xứng hoàn hảo, thiết kế trang phục cổ phong metallic phá cách cho đến bản phối hòa âm nhạc cụ dân tộc Trap/EDM đỉnh cao của Triple D đã tạo nên một sản phẩm nghe nhìn hoàn mỹ đạt đẳng cấp quốc tế. Tác phẩm không chỉ mang lại bữa tiệc thị giác và thính giác vô cùng mãn nhãn cho khán giả mà còn chứa đựng những thông điệp nhân sinh sâu sắc về sự tự chủ vận mệnh, hướng thiện lương và tinh thần lạc quan vượt qua nghịch cảnh. Đây chính là minh chứng rõ nét khẳng định tài năng thiên bẩm, tư duy thẩm mỹ đi trước thời đại của Hoàng Thùy Linh trong hành trình đưa văn hóa dân tộc bay cao và vươn tầm thế giới. Jamie đánh giá đây là sản phẩm âm nhạc xuất sắc nhất và đáng thưởng thức nhất trong những năm gần đây của V-Pop, xứng đáng được lưu danh như một cột mốc vàng son của dòng nhạc Modern Folk đương đại Việt Nam.</p>\n<p>Xét về tổng thể, MV Gieo Quẻ của Hoàng Thùy Linh ft. Đen Vâu thực sự là một tuyệt tác nghệ thuật âm nhạc dân gian đương đại mẫu mực của nền âm nhạc Việt Nam hiện đại. Sự đầu tư nghiêm túc, chỉn chu từ khâu lên kịch bản phân cảnh ẩn dụ thời sự, định hướng mỹ thuật đối xứng hoàn hảo, thiết kế trang phục cổ phong metallic phá cách cho đến bản phối hòa âm nhạc cụ dân tộc Trap/EDM đỉnh cao của Triple D đã tạo nên một sản phẩm nghe nhìn hoàn mỹ đạt đẳng cấp quốc tế. Tác phẩm không chỉ mang lại bữa tiệc thị giác và thính giác vô cùng mãn nhãn cho khán giả mà còn chứa đựng những thông điệp nhân sinh sâu sắc về sự tự chủ vận mệnh, hướng thiện lương và tinh thần lạc quan vượt qua nghịch cảnh. Đây chính là minh chứng rõ nét khẳng định tài năng thiên bẩm, tư duy thẩm mỹ đi trước thời đại của Hoàng Thùy Linh trong hành trình đưa văn hóa dân tộc bay cao và vươn tầm thế giới. Jamie đánh giá đây là sản phẩm âm nhạc xuất sắc nhất và đáng thưởng thức nhất trong những năm gần đây của V-Pop, xứng đáng được lưu danh như một cột mốc vàng son của dòng nhạc Modern Folk đương đại Việt Nam.</p>\n<p>Hoàng Thùy Linh bắt đầu sự nghiệp nghệ thuật từ rất sớm với tư cách là một diễn viên, người mẫu ảnh và ca sĩ tự do. Con đường sự nghiệp của cô không hề bằng phẳng mà trải qua vô số biến cố lớn tưởng chừng như đã có thể quật ngã bất kỳ nghệ sĩ nào. Tuy nhiên, với nghị lực phi thường và lòng quyết tâm cháy bỏng với nghệ thuật, cô đã vực dậy mạnh mẽ từ đống tro tàn. Sự ra đời của album Hoàng vào năm 2019 chính là lời khẳng định đanh thép cho tài năng thiên bẩm và tư duy thẩm mỹ vượt thời gian của cô, đưa cô trở thành biểu tượng tiên phong của dòng nhạc dân gian đương đại Việt Nam.</p>\n<p>Dòng nhạc dân gian đương đại (Modern Folk) mà Hoàng Thùy Linh theo đuổi không phải là một lối đi dễ dàng. Việc đưa chất liệu văn học dân gian, phong tục tập quán cổ truyền vào nhạc Pop hiện đại đòi hỏi một sự am hiểu văn hóa sâu sắc và một gu thẩm mỹ cực kỳ tinh tế để tránh bị chê trách là lạm dụng hay dung tục hóa văn hóa truyền thống. Hoàng Thùy Linh đã xử lý vô cùng khéo léo các câu ca dao, tục ngữ, tích chèo cổ hay phong tục thờ cúng để biến chúng thành những chất liệu âm nhạc hiện đại, bắt tai và thời thượng, tạo nên một làn sóng truyền cảm hứng mạnh mẽ cho giới trẻ.</p>\n<p>Trong quá trình phát triển sự nghiệp nghệ thuật của mình, Hoàng Thùy Linh luôn biết cách làm mới bản thân thông qua việc hợp tác với những nhà sản xuất âm nhạc hàng đầu Việt Nam như DTAP, Triple D hay Khắc Hưng. Mỗi sản phẩm âm nhạc của cô đều là một sự bất ngờ lớn về cả mặt âm thanh lẫn hình ảnh thị giác. Sự chỉn chu, nghiêm túc và cầu toàn đến từng chi tiết nhỏ của cô đã thiết lập một tiêu chuẩn sản xuất mới cho nền công nghiệp âm nhạc nước nhà, biến mỗi sản phẩm ca nhạc của cô thành một tác phẩm nghệ thuật đúng nghĩa.</p>\n<p>Album Hoàng năm 2019 với các bản hit như Để Mị Nói Cho Mà Nghe, Duyên Âm, Tứ Phủ đã tạo nên một tiếng vang chấn động không chỉ trong nước mà còn lan rộng ra quốc tế. Thành công rực rỡ này đã tạo nên một áp lực vô hình cực kỳ lớn cho Hoàng Thùy Linh khi chuẩn bị cho sản phẩm tiếp theo. Làm thế nào để vượt qua cái bóng quá lớn của Hoàng? Câu trả lời chính là đĩa đơn Gieo Quẻ ra mắt đầu năm 2022, mở đường cho album phòng thu thứ tư LINK - một album tiếp tục khẳng định vị thế dẫn đầu xu hướng và tư duy nghệ thuật tiên phong của cô.</p>\n<p>Gieo Quẻ ra mắt trong bối cảnh cả nước vừa trải qua một giai đoạn giãn cách xã hội kéo dài vì đại dịch COVID-19. Nhu cầu giải tỏa tinh thần, tìm kiếm niềm vui và sự lạc quan hướng tới tương lai của người dân là vô cùng lớn. Việc Hoàng Thùy Linh lựa chọn thời điểm này để phát hành Gieo Quẻ cho thấy một tư duy nhạy bén của một người làm nghệ thuật vì cộng đồng. Âm nhạc của cô không chỉ để giải trí thuần túy mà đóng vai trò như một liều thuốc xoa dịu tinh thần, truyền đi năng lượng tích cực giúp mọi người tự tin bước vào cuộc sống bình thường mới.</p>\n<p>Sự xuất hiện của rapper Đen Vâu trong Gieo Quẻ là một bất ngờ vô cùng lớn đối với người hâm mộ V-Pop. Đen Vâu vốn nổi tiếng với phong cách âm nhạc mộc mạc, bình dị, lời rap sâu lắng mang đậm triết lý sống đời thường và hình ảnh một chàng trai giản dị, chân chất. Khi đặt anh bên cạnh Hoàng Thùy Linh - một nữ hoàng nhạc dân gian đương đại lộng lẫy, kiều diễm và kiêu kỳ - ê-kíp sáng tạo đã tạo nên một sự kết hợp tương phản âm dương vô cùng đắt giá và đầy thú vị.</p>\n\n<p><strong>[MỸ THUẬT & BỐI CẢNH]</strong></p>\n<p>Đoạn rap của Đen Vâu trong bài hát không hề mang tính gượng ép mà hòa quyện mượt mà vào cấu trúc giai điệu của bài hát. Lời rap của anh chứa đựng nhiều phép so sánh tu từ độc đáo, sử dụng những hình ảnh đời thường như chiếc quạt giấy chầm chậm xoay, ly trà đá vỉa hè quen thuộc hay chiếc xe máy cũ hết xăng để truyền tải thông điệp nhân văn sâu sắc. Sự giản dị, ấm áp của Đen Vâu chính là điểm cân bằng hoàn hảo, làm dịu đi không khí dồn dập, rực rỡ sắc màu neon của phần nhạc điện tử do Hoàng Thùy Linh thể hiện.</p>\n<p>Trong MV, Đen Vâu vào vai một người bán nước chè vỉa hè mộc mạc, hiền lành chốn đô thị tất tả ngược xuôi. Quán nước chè của anh hiện lên giống như một ốc đảo bình yên giữa lòng thành phố ngập tràn ánh đèn neon hiện đại. Khi cô gái Hoàng Thùy Linh đến xin quẻ hỏi đường đi, anh đã đưa ra những lời khuyên chân thành, triết lý về cuộc đời thông qua những câu rap mộc mạc. Sự tương tác tự nhiên, hóm hỉnh giữa hai nghệ sĩ hàng đầu đã mang lại vô số tiếng cười sảng khoái và sự gần gũi cho tác phẩm nghệ thuật này.</p>\n<p>Triết lý sống của Đen Vâu thể hiện qua lời rap: tương lai là điều không thể đoán định và con đường đi của mỗi người phụ thuộc vào bước chân nỗ lực tự thân hướng thiện của chính họ chứ không nằm ở những quẻ bói cát hung đầu năm. Câu rap 'Chỉ cần tấm lòng luôn hướng thiện, làm việc chân chính thì quẻ nào gieo ra cũng cát tường' đã tóm tắt trọn vẹn tinh thần lạc quan, khát vọng tự chủ và lòng chính trực của con người Việt Nam trước mọi thử thách biến cố cuộc sống.</p>\n<p>Hợp tác âm nhạc này còn mang lại một giá trị cộng hưởng lớn về mặt truyền thông. Sự kết hợp giữa hai nghệ sĩ có lượng fan đông đảo và uy tín nghệ thuật cao hàng đầu Việt Nam đã tạo nên một sức hút khổng lồ, đưa Gieo Quẻ nhanh chóng leo lên vị trí dẫn đầu các bảng xếp hạng âm nhạc chỉ sau vài giờ ra mắt. Điều này khẳng định tư duy chọn bạn đồng hành vô cùng sắc bén và tầm nhìn chiến lược của Hoàng Thùy Linh trong việc sản xuất âm nhạc đại chúng chuyên nghiệp.</p>\n<p>Kịch bản phân cảnh của MV Gieo Quẻ được xây dựng vô cùng thông minh và giàu tính ẩn dụ thời sự về giai đoạn cả nước vượt qua đại dịch COVID-19. Phân cảnh mở đầu bằng hình ảnh một bốt kiểm soát giao thông bị đóng băng hoàn toàn trong trạng thái tĩnh lặng kéo dài dưới ánh sáng đỏ của cột đèn giao thông. Cảnh tượng này tái hiện một cách chân thực thời kỳ giãn cách xã hội đầy khó khăn của đại dịch, nơi mọi hoạt động giao thương di chuyển của người dân đều bị đình trệ.</p>\n<p>Các chi tiết nhỏ trong phân cảnh bốt giao thông kẹt cứng như bình xăng cạn kiệt, chiếc thẻ xanh lá (ẩn dụ cho thẻ xanh COVID), chiếc xe máy hết điện hay những khuôn mặt mệt mỏi chờ đợi xếp hàng của dòng người đều lột tả sâu sắc tâm lý bế tắc, hoang mang của xã hội trước biến cố lớn. Dòng người đứng im lìm dưới làn mưa lạnh phản chiếu ánh sáng đèn màu tạo nên bầu không khí ngột ngạt chốn đô thị, bộc lộ rõ khao khát được mở cửa, giải phóng năng lượng để tiếp tục hành trình cuộc đời mình.</p>\n<p>Sự chuyển đổi trạng thái khi quẻ bói cát tường đầu tiên được gieo xuống đất mang đậm tính điện ảnh và triết lý sống. Không gian u tối bốt giao thông bỗng chốc vỡ òa thành một lễ hội âm nhạc đầy sắc màu và sức sống rực rỡ. Cột đèn đỏ vụt tắt nhường chỗ cho ánh sáng xanh hy vọng rực rỡ và những vũ điệu bùng nổ của đoàn người nhảy múa. Sự biến đổi này đại diện cho thời kỳ thích ứng an toàn, khi cuộc sống bình thường mới quay trở lại và con người tìm lại sự tự do hoạt động sôi nổi.</p>\n<p>Hoàng Thùy Linh xuất hiện ở trung tâm lễ hội giống như một vị sứ giả của niềm vui, dẫn dắt mọi người bước vào điệu nhảy ăn mừng tràn đầy lạc quan. Điệu múa tập thể của cô và các vũ công sử dụng quạt giấy đỏ xoay tròn không chỉ tạo hiệu ứng hình ảnh đẹp mắt mà còn tượng trưng cho sự xua tan đi những điều không may mắn của năm cũ để đón chào vận hội mới. Sự biến đổi từ trạng thái đóng băng sang trạng thái chuyển động không ngừng thể hiện tinh thần kiên cường vượt qua nghịch cảnh của người Việt.</p>\n<p>Việc kịch bản lồng ghép các câu hỏi của nhân vật đi xin quẻ về tình duyên, công danh tài lộc hay việc đi hướng nào tốt xấu thể hiện tâm lý chung của con người khi đứng trước thềm năm mới đầy lo âu. Quẻ bói toán lúc này không phải là lời phán quyết số mệnh của thần thánh mà chỉ là tấm gương phản chiếu mong ước, lo toan của con người. Điều này giúp tác phẩm gạt bỏ đi yếu tố mê tín dị đoan, hướng người xem đến một tư duy tích cực về việc tự quyết định số phận.</p>\n<p>Các cú máy quay chậm (slow-motion) được sử dụng điêu luyện để ghi lại biểu cảm khuôn mặt kiêu kỳ của Hoàng Thùy Linh hay nụ cười hiền lành của Đen Vâu làm nổi bật biểu cảm nhân vật. Các cú máy tracking lia dọc theo dòng người chờ đợi bộc lộ rõ không khí ngột ngạt ban đầu của bốt giao thông kẹt cứng. Sự chuyển cảnh nhịp nhàng giữa các bối cảnh thực tại và bối cảnh huyền ảo dân gian giúp giữ chân người xem từ đầu đến cuối mạch cảm xúc.</p>\n<p>Thiết kế đạo cụ khổng lồ như chiếc quẻ tre cao bằng người hay mâm ngũ quả khổng lồ thể hiện sự táo bạo trong tư duy mỹ thuật của ê-kíp sáng tạo. Những đạo cụ này không chỉ làm nổi bật yếu tố văn hóa truyền thống dân tộc mà còn tạo hiệu ứng thị giác choáng ngợp cho người xem. Chiếc kiệu hoa lộng lẫy được trang trí bằng hàng ngàn bông hoa rực rỡ thể hiện quyền lực, sự kiều diễm của nữ ca sĩ ngồi trên kiệu hoa chốn sơn cước.</p>\n\n<p><strong>[HỒA ÂM & PHỐI KHÍ]</strong></p>\n<p>Nghệ thuật sắp đặt đạo cụ quạt giấy đỏ trong MV vô cùng thông minh. Những chiếc quạt được các vũ công xếp thành hình bông hoa hay quẻ tre chuyển động tròn đều tăm tắp tạo nên những đường cong chuyển động mềm mại, bắt mắt. Màu sắc đỏ rực của quạt giấy tương tương phản mạnh mẽ với ánh sáng đèn neon màu hồng tím hiện đại tạo nên một không gian neon-noir huyền ảo đậm chất nghệ thuật hoài cổ lai tương lai.</p>\n<p>Các phân cảnh múa tập thể nhảy múa cuồng nhiệt dưới màn mưa đêm phản chiếu ánh đèn màu mang đậm tinh thần lạc quan và khát vọng tự do của con người. Âm nhạc và vũ đạo chính là liều thuốc tinh thần mạnh mẽ giúp xua tan đi sự cô đơn đô thị ngột ngạt và kết nối những tâm hồn đồng điệu lại với nhau. Sự chuyển động không ngừng của cơ thể vũ công thể hiện sức sống mãnh liệt của xã hội khi bước sang trang mới.</p>\n<p>Kết cục của MV mở ra một không gian tương lai tươi sáng khi cột đèn giao thông hiển thị màu xanh hy vọng rực rỡ và đoàn xe cộ cùng dòng người tiếp tục lăn bánh tiến về phía trước. Đây là một ẩn dụ đầy tính thời sự về sự phục hồi kinh tế xã hội và sự mở cửa trở lại đầy hứng khởi của đất nước sau đại dịch, khích lệ mỗi người dân tự tin bước tiếp hành trình cuộc đời mình bằng đôi chân của bản thân.</p>\n<p>Mỹ thuật thiết kế của MV Gieo Quẻ đạt đến độ hoàn mỹ nhờ sự đầu tư nghiêm túc và bài bản của ê-kíp sản xuất. Bố cục hình ảnh đối xứng hoàn hảo (Symmetrical Framing) được áp dụng triệt để trong mọi khung hình, tạo nên cảm giác trang nghiêm nhưng vô cùng mãn nhãn. Mỗi khung hình đều được thiết kế giống như một bức tranh nghệ thuật sắp đặt đương đại đầy tính thẩm mỹ hình học hoàn mỹ.</p>\n<p>Sự kết hợp giữa chất liệu văn hóa truyền thống dân tộc và các yếu tố hiện đại của kỷ nguyên số được xử lý vô cùng tinh tế và khéo léo. Chúng ta thấy những chiếc quạt giấy đỏ, quẻ tre, chữ thư pháp được đặt cạnh những dải đèn led mỏng phát sáng và hệ thống ánh sáng neon rực rỡ sắc màu. Sự tương phản này tạo nên nét thẩm mỹ Retro-Futurism vô cùng độc đáo, mang đậm dấu ấn cá nhân tiên phong của Hoàng Thùy Linh.</p>\n<p>Trang phục của Hoàng Thùy Linh và các vũ công trong MV thực sự là một cuộc triển lãm thời trang cổ phong cách tân đỉnh cao. Sự kết hợp táo bạo giữa áo tứ thân, áo dài truyền thống với các chất liệu metallic ánh kim lấp lánh phản chiếu ánh sáng và đường cắt cúp hiện đại tạo nên phong cách Cyber-Folk độc lạ. Bộ trang phục metallic đa sắc màu phản chiếu ánh đèn neon thể hiện niềm tự hào văn hóa dân tộc nhưng vẫn mang hơi thở thời đại mới.</p>\n<p>Hệ thống màu sắc và ánh sáng trong MV được sử dụng điêu luyện để truyền tải thông điệp. Phim sử dụng tông đỏ truyền thống mang ý nghĩa may mắn làm tông màu chủ đạo của lễ hội gieo quẻ, tạo cảm giác ấm áp tràn đầy sức sống của mùa xuân. Tông đỏ được phối hợp ăn ý với ánh sáng đèn neon hồng tím magenta và xanh ngọc cyan tạo nên một không gian neon-noir huyền ảo đầy tính nghệ thuật hoài cổ lai tương lai.</p>\n<p>Sự tương phản sắc sảo giữa bóng tối của bối cảnh đêm mưa lạnh giá và ánh sáng rực rỡ của các tia laser xanh đỏ tạo nên chiều sâu không gian điện ảnh vô cùng mãn nhãn. Từng khung hình đều được thiết kế chăm chút tỉ mỉ từ việc điều chỉnh hướng sáng đến cường độ sáng để làm nổi bật biểu cảm của nhân vật chính và làm mờ đi các chi tiết bối cảnh phụ, tạo hiệu ứng tập trung thị giác tốt nhất.</p>\n<p>Góc máy quay của MV cũng vô cùng đa dạng và sáng tạo dưới bàn tay quay phim chuyên nghiệp. Nhiều góc quay từ trên cao (top-down view) bắt trọn đội hình múa tập thể xếp hình bông hoa hay quẻ tre chuyển động tròn đều vô cùng đẹp mắt. Các cú máy cận cảnh (close-up) tập trung khai thác biểu cảm khuôn mặt sắc sảo kiêu kỳ của Hoàng Thùy Linh làm nổi bật thần thái của một nữ hoàng nhạc dân gian đương đại.</p>\n<p>Các cú máy tracking lia dọc theo dòng người chờ đợi ở bốt giao thông kẹt cứng bộc lộ rõ không khí ngột ngạt, bế tắc ban đầu của xã hội trước biến cố lớn. Sự chuyển cảnh nhanh mượt mà bằng hiệu ứng đồ họa giúp liên kết giữa thế giới thực tại lo âu và thế giới huyền ảo lễ hội gieo quẻ đầu năm. Nhịp điệu máy quay thay đổi nhịp nhàng đồng điệu với sự phát triển của nhạc nền bài hát.</p>\n<p>Nghệ thuật sử dụng quạt giấy đỏ làm đạo cụ múa được khai thác tối đa tạo nên những chuyển động cơ học uyển chuyển, bắt mắt. Những chiếc quạt được vũ công xếp thành hình quẻ tre xoay tròn thể hiện sự đoàn kết, gắn bó của cộng đồng. Màu sắc đỏ rực của quạt giấy tương phản sắc sảo với màu xanh ngọc của đèn neon tạo nên tổng thể thị giác vô cùng mãn nhãn, gây ấn tượng mạnh cho khán giả.</p>\n\n<p><strong>[TRỌNG TÂM Ý NGHĨA]</strong></p>\n<p>Chiếc kiệu hoa lộng lẫy mà Hoàng Thùy Linh ngồi khi xuất hiện ở lễ hội gieo quẻ được trang trí bằng hàng ngàn bông hoa rực rỡ sắc màu hồng tím, kết hợp cùng dải đèn led mỏng phát sáng tạo nên hiệu ứng thị giác lung linh huyền ảo. Hình ảnh chiếc kiệu hoa thể hiện địa vị và quyền lực kiều diễm của nữ ca sĩ chốn sơn cước, mang vẻ đẹp huyền diệu như bước ra từ cổ tích.</p>\n<p>Tóm lại, phần thiết kế mỹ thuật và hình ảnh của MV Gieo Quẻ đã thiết lập một tiêu chuẩn mới cho việc sản xuất các sản phẩm ca nhạc nghệ thuật tại Việt Nam. Sự kết hợp hoàn mỹ giữa yếu tố truyền thống bản địa và hơi thở thời đại mới mang lại những trải nghiệm thị giác thăng hoa cho người xem, khẳng định tư duy thẩm mỹ sắc bén của Hoàng Thùy Linh và toàn bộ ê-kíp sáng tạo.</p>\n<p>Về phần âm thanh và âm nhạc, nhà sản xuất Triple D đã tạo nên một bản phối hòa âm phối khí vô cùng xuất sắc cho Gieo Quẻ. Bài hát thuộc thể loại Modern Folk Pop kết hợp EDM/Trap dồn dập. Giai điệu rộn ràng, bắt tai kích thích thính giác người nghe ngay từ những nốt nhạc đầu tiên. Sự kết hợp giữa các nhạc cụ cổ truyền dân tộc và âm nhạc điện tử Trap hiện đại được xử lý vô cùng điệu nghệ.</p>\n<p>Tiếng nhạc cụ truyền thống Việt Nam được tôn vinh kiêu hãnh trong bản phối. Tiếng đàn tranh réo rắt dồn dập chạy dọc suốt bài nhạc giống như dòng chảy thời gian không ngừng nghỉ, tạo nên nền nhạc vô cùng uyển chuyển. Tiếng sáo trúc thanh cao bay bổng vang lên đúng những khoảnh khắc chuyển cảnh mang lại cảm giác thanh tịnh huyền bí của đền chùa cổ kính chốn sơn cước ngày xuân.</p>\n<p>Tiếng trống chèo trầm ấm kết hợp bộ gõ dân tộc tạo nên nhịp điệu rộn rã đậm chất hội hè dân gian Bắc Bộ. Những âm thanh mộc mạc cổ truyền này không bị nhạt nhòa mà hòa quyện hoàn hảo với nhịp bass điện tử mạnh mẽ dồn dập và những âm synth ảo ảnh thời thượng. Bản phối giữ được sự cân bằng hoàn hảo giữa tính truyền thống dân tộc và tính hiện đại của âm nhạc điện tử thế giới.</p>\n<p>Chất giọng uyển chuyển của Hoàng Thùy Linh chính là linh hồn của tác phẩm âm nhạc này. Giọng hát của cô mang đậm kỹ thuật luyến láy dân ca miền Bắc đặc trưng, vừa ngọt ngào lả lướt vừa kiêu sa đầy nội lực. Cô sử dụng những quãng ngân vang tự nhiên và cách phát âm nhả chữ điệu nghệ tạo nên cái hồn dân gian không thể trộn lẫn, cuốn hút thính giả qua từng câu hát ngọt ngào.</p>\n<p>Chất giọng của rapper Đen Vâu trầm ấm mộc mạc chính là sự bù trừ hoàn hảo cho chất giọng cao bay bổng của Linh. Lời rap của Đen chứa đựng nhiều phép so sánh tu từ độc đáo, sử dụng những hình ảnh đời thường gần gũi để truyền tải những triết lý sống sâu sắc. Sự phối hợp nhịp nhàng giữa phần hát chính sôi nổi của Linh và đoạn rap suy tư của Đen tạo nên cấu trúc âm nhạc đối thoại vô cùng cân bằng.</p>\n<p>Công phu trong khâu phân tầng âm thanh (sound layering) của bài hát rất đáng nể phục. Các kỹ sư âm thanh đã thu âm trực tiếp nhiều nhạc cụ cổ truyền và xử lý kỹ thuật số tỉ mỉ để tạo độ sâu không gian âm nhạc tốt nhất. Âm trầm của tiếng trống điện tử phối hợp ăn ý với tần số cao của tiếng đàn tranh giúp bài hát có độ động rộng lớn, nghe cực kỳ đã tai khi phát trên loa lớn.</p>\n<p>Đoạn bridge trước khi vào điệp khúc cuối cùng là một đỉnh cao phối khí của Triple D. Khi tất cả các nhạc cụ dân tộc Việt Nam và các âm synth điện tử cùng nhau hòa tấu dồn dập, đẩy cảm xúc người nghe đạt đến sự hưng phấn tột độ. Nhịp điệu dồn dập của bộ gõ dân gian kết hợp với nhịp trống điện tử mạnh mẽ tạo nên cái kết bùng nổ năng lượng rộn rã đón chào xuân mới.</p>\n<p>Sự pha trộn giữa nhạc cụ truyền thống và nhạc điện tử Trap hiện đại đòi hỏi sự am hiểu nhạc lý và tư duy thẩm mỹ âm nhạc sắc bén. Triple D đã chứng minh tài năng bậc thầy khi không lạm dụng kỹ xảo mà tôn vinh nét mộc mạc của nhạc cụ dân gian trên nền nhạc hiện đại. Sự kết hợp này mang lại cảm giác dễ chịu, rộn ràng kích thích thính giác người nghe vô cùng hiệu quả.</p>\n\n<div class=\"review-verdict-box\">\n    <p>Cách nhả chữ luyến láy dân ca Bắc Bộ của Hoàng Thùy Linh được xử lý vô cùng tinh tế bằng kỹ thuật phòng thu hiện đại. Từng tiếng thở nhẹ, tiếng ngân vang đều rõ nét, làm nổi bật chất giọng uyển chuyển và biểu cảm linh hoạt của cô. Sự tương tác giọng hát giữa cô và Đen Vâu tạo nên nét độc lạ, cuốn hút cho cấu trúc bài hát pop dân gian đương đại.</p>\n    <p>Tóm lại, phần âm thanh và âm nhạc của MV Gieo Quẻ đã đạt được thành công rực rỡ nhờ sự kết hợp tài tình giữa các nghệ sĩ hàng đầu. Bản phối hòa âm phối khí chỉn chu của Triple D, giọng hát luyến láy của Hoàng Thùy Linh và lời rap triết lý sống của Đen Vâu đã tạo nên siêu phẩm âm nhạc bắt tai, đầy năng lượng và mang tính thời đại sâu sắc.</p>\n    <p>Thông điệp triết lý nhân sinh của Gieo Quẻ mang lại giá trị thời đại to lớn và xoa dịu mạnh mẽ tâm hồn người nghe. Tác phẩm phản ánh thói quen tâm linh lâu đời của người Việt là xin quẻ đầu năm để mong cầu bình an may mắn. Con người thường lo lắng về những điều chưa biết ở tương lai, đặc biệt là sau những biến cố lớn của cuộc đời như đại dịch bệnh hoành hành kéo dài.</p>\n    <p>Tuy nhiên, thông qua cuộc đối thoại âm nhạc giữa Hoàng Thùy Linh và Đen Vâu, tác phẩm đã đưa ra một câu trả lời vô cùng nhân văn và thông tuệ cho câu hỏi về vận mệnh cuộc đời. Lời bài hát khẳng định rõ ràng rằng vận mệnh nằm ở trong chính lòng bàn tay và hành động của mỗi con người. Thay vì lo lắng dựa dẫm vào các quẻ bói cát hung đầu năm tốt xấu.</p>\n    <p>Lời khuyên của người bán nước chè Đen Vâu vô cùng mộc mạc nhưng sâu sắc: tương lai tốt xấu phụ thuộc vào bước chân nỗ lực hướng thiện của chính bạn chứ không nằm ở các quẻ bói toán. Chỉ cần tấm lòng luôn hướng thiện, nỗ lực lao động chân chính và sống chan hòa yêu thương thì quẻ nào gieo ra cũng cát tường. Thông điệp nhân văn này giúp giải tỏa tâm lý lo âu bấp bênh của xã hội.</p>\n    <p>Gieo Quẻ còn là lời cổ vũ tinh thần ý nghĩa hướng tới cuộc sống bình thường mới sau đại dịch. Hình ảnh dòng người kẹt cứng ban đầu được giải phóng nhảy múa cuồng nhiệt dưới ánh sáng xanh hy vọng biểu thị cho khát vọng hồi sinh mạnh mẽ của xã hội. Tác phẩm truyền tải nguồn năng lượng tích cực, xua tan đi những u ám cũ kỹ của năm cũ đã qua.</p>\n    <p>Lao động chân chính, sự thiện lương và tình yêu thương chia sẻ mới là những 'phép thuật' đích thực mang lại sự thịnh vượng bền vững cho mỗi con người. Hoàng Thùy Linh đã khéo léo lồng ghép bài học nhân sinh này một cách vô cùng nhẹ nhàng vui vẻ thông qua âm nhạc giải trí mà không mang lại cảm giác giáo điều nặng nề cho người nghe, giúp định hướng tích cực cho thế hệ trẻ.</p>\n    <p>Xét về tổng thể, MV Gieo Quẻ thực sự là một kiệt tác nghệ thuật âm nhạc dân gian đương đại mẫu mực của nền âm nhạc Việt Nam hiện đại. Sự đầu tư nghiêm túc từ khâu lên kịch bản kịch tính ẩn dụ thời sự, mỹ thuật đối xứng hoàn hảo, phục trang cổ phong phá cách cho đến bản phối hòa âm đỉnh cao của Triple D đã tạo nên một sản phẩm nghe nhìn hoàn mỹ đạt đẳng cấp quốc tế.</p>\n    <p>Tác phẩm không chỉ mang lại bữa tiệc thị giác và thính giác vô cùng mãn nhãn cho khán giả mà còn chứa đựng những thông điệp nhân sinh sâu sắc về sự tự chủ vận mệnh, hướng thiện lương và tinh thần lạc quan vượt qua nghịch cảnh. Đây chính là minh chứng rõ nét khẳng định tài năng thiên bẩm, tư duy thẩm mỹ đi trước thời đại của Hoàng Thùy Linh trong hành trình đưa văn hóa dân tộc Việt Nam bay cao.</p>\n    <p>Sự thành công của Gieo Quẻ đã mở đường cho sự phát triển mạnh mẽ của các sản phẩm ca nhạc đưa chất liệu dân gian đương đại vào V-Pop. Hoàng Thùy Linh tiếp tục khẳng định vị thế dẫn đầu xu hướng và truyền cảm hứng nghệ thuật lớn cho nhiều nghệ sĩ trẻ sau này học tập và noi theo. Tác phẩm xứng đáng được lưu danh như một cột mốc vàng son của nhạc trẻ Việt Nam.</p>\n    <p>Jamie đánh giá đây là sản phẩm âm nhạc xuất sắc nhất đáng thưởng thức của V-Pop trong những năm gần đây. Sự chỉn chu nghiêm túc trong sản xuất và ý nghĩa nhân văn sâu sắc giúp tác phẩm giữ được sức hút bền vững với thời gian. Một tuyệt phẩm hoàn mỹ về cả mặt nghệ thuật thị giác lẫn chiều sâu âm thanh thính giác thăng hoa cho người thưởng thức.</p>\n    <p>Chúc cho Hoàng Thùy Linh sẽ tiếp tục vững bước trên con đường nghệ thuật sáng tạo đầy vinh quang của mình, tiếp tục mang lại nhiều siêu phẩm nghe nhìn chất lượng cao và đưa tinh hoa văn hóa truyền thống dân tộc Việt Nam ngày càng vươn xa hơn nữa trên bản đồ âm nhạc thế giới đại chúng.</p>\n</div>\n
        `,
        scores: { visuals: 9.0, sound: 8.9, story: 8.0, concept: 9.3 },
        trailerUrl: "https://www.youtube.com/embed/Q6ZNsHvspEg?rel=0&modestbranding=1&playsinline=1",
        cluster: "chill",
        personalityProfile: { romance: 60, retro: 20, cyberpunk: 10, healing: 100, mystery: 40 },
        commentsCount: 1850
    },
    {
        id: "movie-man-kich-cuoi",
        type: "movie",
        title: "Tàng Hải Truyện",
        artist: "Đạo diễn: Trịnh Hiểu Long",
        year: 2025,
        poster: "assets/poster_zanghai.jpg",
        rating: 8.5,
        genres: ["Historical", "Mystery", "Drama"],
        verdictTag: "Ấn tượng",
        verdictClass: "verdict-great",
        summary: "Siêu phẩm cổ trang trinh thám quyền mưu đỉnh cao kể về hành trình phục thù đầy mưu lược của Tàng Hải để vạch trần vụ thảm án gia tộc năm xưa.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: <strong>Tàng Hải Truyện</strong> dưới bàn tay nhào nặn của đạo diễn kỳ cựu <strong>Trịnh Hiểu Long</strong> và diễn xuất nội lực của nam diễn viên Tiêu Chiến đã tạo nên một cơn sốt lớn trong dòng phim cổ trang chính kịch dạo gần đây. Bộ phim là hành trình phục thù đầy mưu lược, kiên nhẫn suốt 10 năm của nhân vật Tàng Hải nhằm giải oan cho gia đình và vạch trần âm mưu đen tối nơi triều đình. Tác phẩm rũ bỏ những mô-típ tình cảm ngôn tình sướt mướt để tập trung hoàn toàn vào những màn đấu trí chính trị và quyền mưu cân não vô cùng nghẹt thở.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Điểm mạnh lớn nhất của phim nằm ở kịch bản đấu trí chính trị vô cùng sâu sắc và chặt chẽ. Mỗi tập phim là một nước cờ được Tàng Hải tính toán kỹ lưỡng trên bàn cờ triều chính đầy hiểm nguy. Phân cảnh phim được sắp xếp logic, các nút thắt mở được giải quyết bằng trí tuệ thay vì các yếu tố may mắn ngẫu nhiên. Nhịp phim chậm rãi nhưng chắc chắn, tạo nên sự căng thẳng ngầm lôi cuốn người xem qua từng lời thoại sắc sảo và hành động cẩn trọng của các nhân vật.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Thiết kế mỹ thuật của phim mang đậm phong cách cổ phong tả thực, tái hiện một triều đại phong kiến uy nghiêm nhưng cũng đầy rẫy hiểm họa rình rập. Cách sử dụng ánh sáng cổ phong tương phản, với những khoảng tối sâu thẳm trong hoàng cung đại diện cho những âm mưu đen tối của giới cầm quyền. Phục trang của các nhân vật được thiết kế chỉn chu, màu sắc nhã nhặn nhưng sang trọng, thể hiện rõ địa vị và tính cách của từng người.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc nền của bộ phim sử dụng nhạc cụ dân tộc truyền thống như đàn tỳ bà, sáo trúc và trống trận dồn dập trong các phân cảnh đấu trí căng thẳng. Sự tiết giảm âm nhạc cơ học trong các cuộc đối thoại quan trọng giúp người xem tập trung hoàn toàn vào biểu cảm và lời thoại của nhân vật, tạo ra không khí ngột ngạt chân thực chốn quan trường.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Tàng Hải Truyện truyền tải bài học sâu sắc về sự kiên nhẫn, lòng chính trực và cái giá của sự phục thù. Nó chứng minh rằng công lý thực sự chỉ có thể đạt được bằng trí tuệ, mưu lược và sự hy sinh thầm lặng chứ không phải bằng bạo lực mù quáng.</p>
            
            <div class="review-verdict-box">
                "Một tác phẩm mẫu mực cho dòng phim quyền mưu cổ trang, được đầu tư chỉn chu về cả kịch bản đấu trí đầy kịch tính lẫn diễn xuất nội lực xuất sắc của dàn diễn viên chính."
            </div>
        `,
        scores: { visuals: 8.6, sound: 8.2, story: 9.0, concept: 8.2 },
        trailerUrl: "https://www.youtube.com/embed/kYJjZ88n1kU",
        cluster: "mystery",
        personalityProfile: { romance: 20, retro: 40, cyberpunk: 10, healing: 20, mystery: 100 },
        commentsCount: 2890
    },
    {
        id: "mv-neon-rain",
        type: "mv",
        title: "Neon Rain (Mưa Ánh Sáng)",
        artist: "Lumina Glow ft. DJ Shadow",
        year: 2026,
        poster: "assets/poster_neon_rain.png",
        rating: 9.0,
        genres: ["Trance", "Future Bass"],
        verdictTag: "Hình ảnh đỉnh",
        verdictClass: "verdict-visuals",
        summary: "Màn trình diễn laser đỉnh cao kết hợp những bước nhảy điêu luyện dưới màn mưa đêm rực rỡ. Sự kết hợp giữa DJ Shadow và Lumina Glow tạo nên một bản nhạc Trance ma mị và đầy hưng phấn.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: <strong>Neon Rain</strong> mang đến một trải nghiệm thị giác cực độ với những hiệu ứng ánh sáng laser, phản chiếu ánh nước mưa tuyệt vời. DJ Shadow kết hợp cùng ca sĩ Lumina Glow tạo nên một bản nhạc Trance đầy ma mị và sôi động. MV lấy bối cảnh một đô thị tương lai ngập chìm trong bóng tối và những cơn mưa không dứt, nơi con người tìm kiếm sự kết nối tâm hồn thông qua âm nhạc và những bước nhảy cuồng nhiệt dưới màn mưa đêm phản chiếu ánh đèn màu.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản của MV tập trung vào chuyển động cơ thể của các vũ công chuyên nghiệp. Phân cảnh bắt đầu bằng một không gian tĩnh lặng, chỉ có tiếng mưa rơi tí tách trên mặt đường nhựa nguội lạnh. Khi nhịp bass đầu tiên của DJ Shadow vang lên, ánh sáng laser xanh đỏ bắt đầu quét qua màn đêm, kích hoạt những bước nhảy điêu luyện đầy năng lượng. Sự chuyển cảnh nhịp nhàng giữa các vũ công đơn lẻ và đội hình tập thể nhảy múa trong mưa tạo nên một cấu trúc hình ảnh dồn dập, đẩy cảm xúc người xem lên cao trào.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Điểm nhấn mỹ thuật lớn nhất nằm ở việc tận dụng sự phản chiếu của nước mưa kết hợp với ánh sáng laser đa sắc. Góc quay chậm (slow-motion) bắt trọn từng giọt nước mưa bắn tung lên theo bước nhảy của vũ công, được nhuộm màu rực rỡ bởi hệ thống đèn neon đô thị. Bố cục ánh sáng tương phản cực cao giữa bóng tối của thành phố và những tia laser sắc lẹm tạo nên một không gian nghệ thuật đậm chất tương lai giả tưởng.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhịp điệu Trance dồn dập kết hợp cùng âm hưởng Future Bass hiện đại tạo nên một bản nhạc vô cùng bắt tai. Sự phối hợp giữa giọng hát vang vọng, ma mị của Lumina Glow và những tiếng drop bass cực mạnh của DJ Shadow mang lại cảm giác phấn khích tột độ cho người nghe, khiến họ muốn nhún nhảy theo giai điệu ngay lập tức.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Neon Rain biểu đạt khát vọng giải tỏa và tự do của con người trong lòng đô thị ngột ngạt. Âm nhạc và vũ đạo dưới mưa chính là liều thuốc tinh thần mạnh mẽ giúp xua tan đi sự cô đơn và kết nối những tâm hồn đồng điệu lại với nhau.</p>
            
            <div class="review-verdict-box">
                "Neon Rain mang đến trải nghiệm thị giác cực độ với những hiệu ứng ánh sáng laser, phản chiếu ánh nước mưa tuyệt vời. DJ Shadow kết hợp cùng Lumina Glow tạo nên một bản nhạc Trance đầy ma mị và sôi động."
            </div>
        `,
        scores: { visuals: 9.6, sound: 9.2, story: 7.2, concept: 9.0 },
        trailerUrl: "https://www.youtube.com/embed/60ItHLz5WEA",
        cluster: "cyberpunk",
        personalityProfile: { romance: 30, retro: 40, cyberpunk: 90, healing: 30, mystery: 30 },
        commentsCount: 1670
    },
    {
        id: "movie-little-forest",
        type: "movie",
        title: "Little Forest (Khu Rừng Nhỏ)",
        artist: "Đạo diễn: Yim Soon-rye",
        year: 2018,
        poster: "assets/poster_little_forest.png",
        rating: 8.9,
        genres: ["Drama", "Healing"],
        verdictTag: "Chữa lành",
        verdictClass: "verdict-great",
        summary: "Rời bỏ Seoul ồn ào sau những thất bại, Hye-won trở về quê nhà để tự tay trồng trọt, nấu ăn và sống hòa mình vào thiên nhiên bốn mùa. Liệu hương vị của những món ăn mộc mạc có giúp cô chữa lành?",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: <strong>Little Forest</strong> (bản Hàn Quốc với sự tham gia của nữ diễn viên Kim Tae-ri) là một tác phẩm điện ảnh chữa lành vô cùng xuất sắc. Rời bỏ Seoul ồn ào sau những áp lực nghẹt thở và thất bại ở kỳ thi công chức, Hye-won quyết định trở về quê nhà nông thôn thanh tịnh để tự mình trồng trọt, nấu ăn và sống hòa mình vào nhịp thở bốn mùa. Bộ phim không có những tình tiết kịch tính gay cấn mà chậm rãi xoa dịu tâm hồn người xem bằng hương vị của thiên nhiên mộc mạc.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Cấu trúc kịch bản của bộ phim được chia đều theo bốn mùa Xuân, Hạ, Thu, Đông trong một năm. Mỗi mùa gắn liền với quá trình Hye-won tự tay gieo trồng và thu hoạch những nông sản đặc trưng của quê hương để chế biến những món ăn truyền thống giản dị. Phân cảnh phim trôi đi nhẹ nhàng, đan xen giữa tình bạn ấm áp tuổi thơ với hai người bạn thân ở quê và những ký ức u buồn về người mẹ đã bỏ đi. Cách phim giải quyết mâu thuẫn nội tâm của nhân vật chính thông qua lao động chân tay vô cùng tự nhiên và thuyết phục.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Bộ phim là một bữa tiệc hình ảnh mộc mạc nhưng tinh tế. Cảnh sắc thiên nhiên nông thôn thay đổi qua bốn mùa hiện lên đẹp như những bức tranh phong cảnh vẽ bằng màu nước. Tông màu của phim ấm áp, dịu mắt với sắc xanh của đồng ruộng mùa hạ, sắc vàng óng của lúa chín mùa thu và màu tuyết trắng tinh khôi của mùa đông. Quá trình chế biến các món ăn như bánh gạo, rượu gạo hay hồng khô được quay vô cùng tỉ mỉ, đánh thức mọi giác quan của người xem.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Âm thanh trong phim tràn ngập những tiếng động tự nhiên của cuộc sống nông thôn: tiếng gió thổi qua rặng cây, tiếng mưa rơi trên mái hiên, tiếng côn trùng kêu râm ran hay tiếng thái rau củ lách cách trên thớt gỗ. Âm nhạc nhẹ nhàng của đàn acoustic guitar được lồng ghép đúng lúc, mang lại cảm giác thư thái tuyệt đối cho tâm hồn.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Little Forest gửi gắm thông điệp nhân văn sâu sắc về việc sống chậm lại và tìm kiếm hạnh phúc từ những điều bình dị nhất. Nó nhắc nhở chúng ta rằng đôi khi việc lùi lại một bước, quay trở về cội nguồn để tự chữa lành vết thương lòng chính là sự chuẩn bị tốt nhất cho hành trình tiến về phía trước.</p>
            
            <div class="review-verdict-box">
                "Một tác phẩm điện ảnh nhẹ nhàng nhưng có khả năng xoa dịu mạnh mẽ. Little Forest là tấm gương phản chiếu mong muốn được sống chậm lại và tìm về bản ngã của con người hiện đại."
            </div>
        `,
        scores: { visuals: 9.2, sound: 8.8, story: 8.5, concept: 9.0 },
        trailerUrl: "https://www.youtube.com/embed/0kFh19401-4",
        cluster: "chill",
        personalityProfile: { romance: 50, retro: 30, cyberpunk: 0, healing: 100, mystery: 10 },
        commentsCount: 2130
    },
    {
        id: "mv-may-lang-thang",
        type: "mv",
        title: "Đấu Trường Âm Nhạc 2 (Sing 2)",
        artist: "Đạo diễn: Garth Jennings",
        year: 2021,
        poster: "assets/poster_sing2.jpg",
        rating: 8.6,
        genres: ["Animation", "Comedy", "Musical"],
        verdictTag: "Bình yên",
        verdictClass: "verdict-great",
        summary: "Hành trình âm nhạc tràn đầy cảm hứng của Buster Moon cùng các nghệ sĩ động vật tài năng khi họ nỗ lực chinh phục thánh đường giải trí Redshore City.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Hậu bản hoạt hình âm nhạc cực kỳ thành công <strong>Sing 2</strong> mang lại không gian trình diễn bùng nổ đầy cảm xúc. Buster Moon cùng ban nhạc động vật tài năng của mình đặt mục tiêu dàn dựng một chương trình biểu diễn đỉnh cao chưa từng có tại kinh đô giải trí hoa lệ Redshore City. Bộ phim đưa khán giả vào thế giới đầy màu sắc của ước mơ nghệ thuật, vượt qua những rào cản sợ hãi để tỏa sáng dưới ánh đèn sân khấu hoành tráng.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim xây dựng theo mô-típ nỗ lực vượt khó điển hình nhưng được làm mới bằng những màn trình diễn âm nhạc đan xen khéo léo. Hành trình thuyết phục ngôi sao nhạc rock huyền thoại Clay Calloway - chú sư tử đã ẩn dật nhiều năm sau nỗi đau mất vợ - trở lại sân khấu chính là mạch cảm xúc đắt giá nhất của tác phẩm. Các phân cảnh tập luyện vũ đạo và chuẩn bị đạo cụ sân khấu diễn ra dồn dập, tạo không khí háo hức trước đêm diễn lớn cuối phim.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Bộ phim là một bữa tiệc đồ họa hoạt hình 3D vô cùng sặc sỡ và mãn nhãn của xưởng phim Illumination. Thành phố Redshore hiện lên lung linh, hiện đại với những tòa nhà kính chọc trời phản chiếu ánh hoàng hôn rực rỡ. Sân khấu trình diễn nhạc kịch viễn tưởng cuối phim được thiết kế cực kỳ hoành tráng, sử dụng hiệu ứng ánh sáng laser, pháo hoa và nghệ thuật sắp đặt không gian đỉnh cao không thua kém các show diễn thực tế.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc phim chính là linh hồn của Sing 2. Bộ phim quy tụ hàng loạt bản hit đình đám thế giới của các nghệ sĩ lớn (U2, Coldplay, Taylor Swift, Billie Eilish...) được phối mới lại đầy sôi động và tràn đầy năng lượng. Màn lồng tiếng xuất sắc kết hợp cùng giọng hát nội lực của dàn sao lớn mang lại những trải nghiệm âm thanh vô cùng thăng hoa cho người nghe.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Sing 2 truyền cảm hứng mạnh mẽ về lòng dũng cảm theo đuổi đam mê nghệ thuật và sức mạnh chữa lành kỳ diệu của âm nhạc. Tác phẩm nhắn nhủ chúng ta hãy biết đối diện và vượt qua những nỗi đau mất mát trong quá khứ để tiếp tục cất tiếng hát yêu đời.</p>
            
            <div class="review-verdict-box">
                "Một bộ phim ca nhạc tràn đầy năng lượng tích cực và cảm xúc chữa lành. Sing 2 truyền cảm hứng mạnh mẽ cho cả người lớn lẫn trẻ em về việc dũng cảm theo đuổi đam mê."
            </div>
        `,
        scores: { visuals: 8.8, sound: 9.0, story: 8.0, concept: 8.5 },
        trailerUrl: "https://www.youtube.com/embed/EPQrk2R9YmE",
        cluster: "chill",
        personalityProfile: { romance: 80, retro: 40, cyberpunk: 10, healing: 90, mystery: 20 },
        commentsCount: 1950
    },
    {
        id: "movie-reply-1988",
        type: "movie",
        title: "Thần đèn ơi! Ước đi",
        artist: "Đạo diễn: Lee Byung-heon",
        year: 2026,
        poster: "assets/poster_wishes.png",
        rating: 9.6,
        genres: ["Romance", "Fantasy", "Comedy"],
        verdictTag: "Siêu phẩm",
        verdictClass: "verdict-masterpiece",
        summary: "Bộ phim hài lãng mạn viễn tưởng kể về vị thần đèn giải thoát khỏi chiếc đèn cổ cùng ba điều ước kỳ lạ dành cho cô gái vô tình triệu hồi.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Tác phẩm giả tưởng lãng mạn hài hước <strong>Thần đèn ơi! Ước đi</strong> (tên tiếng Anh: *Genie, Make a Wish*) đánh dấu sự hợp tác vô cùng ăn ý giữa bộ đôi diễn viên thực lực <strong>Bae Suzy</strong> và <strong>Kim Woo-bin</strong> dưới ngòi bút của biên kịch vàng Kim Eun-sook. Bộ phim xoay quanh một thần đèn (Genie) đầy cảm xúc sống trong chiếc đèn cổ và Ga-young - cô gái trẻ thiếu thốn tình cảm vô tình giải thoát cho anh. Tác phẩm mang lại một thế giới cổ tích hiện đại đầy màu sắc kỳ ảo giữa lòng thành phố nhộn nhịp.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim được xây dựng thông minh với những tình huống dở khóc dở cười xoay quanh ba điều ước của nữ chính. Thay vì ước những điều vĩ đại như tiền tài hay danh vọng, các điều ước của Ga-young lại vô cùng bình dị và có phần kỳ quặc, buộc thần đèn lập dị phải thích nghi với cuộc sống con người. Sự chuyển đổi nhịp nhàng giữa các phân cảnh hài hước châm biếm ở nửa đầu phim sang các phân đoạn tâm lý lắng đọng ở nửa sau tạo nên một cấu trúc cảm xúc trọn vẹn.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Phim mang phong cách huyền ảo đầy màu sắc nghệ thuật. Hiệu ứng kỹ xảo biến hóa phép thuật của thần đèn được thực hiện vô cùng mượt mà, sử dụng tông màu ấm áp lãng mạn tạo nên những khung hình nên thơ. Các bối cảnh nhà ở của nữ chính và đường phố được chăm chút tỉ mỉ, mang lại cảm giác ấm cúng, gần gũi nhưng không kém phần ảo diệu khi phép thuật xuất hiện.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc nền của bộ phim sử dụng những giai điệu acoustic ngọt ngào kết hợp âm hưởng nhạc cổ điển nhẹ nhàng. Tiếng đàn piano réo rắt trong những cảnh quay lãng mạn làm tăng thêm chất thơ cho câu chuyện tình yêu giữa thần đèn và cô gái phàm trần.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Thần đèn ơi! Ước đi gửi gắm thông điệp sâu sắc về việc những mong ước chân thành nhất của con người không nằm ở những điều ước phép thuật vĩ đại mà nằm ở sự thấu hiểu, sẻ chia và yêu thương giữa những tâm hồn cô đơn trong xã hội hiện đại.</p>
            
            <div class="review-verdict-box">
                "Một tác phẩm rom-com viễn tưởng xuất sắc, kết hợp trọn vẹn giữa tiếng cười giải trí và những thông điệp nhân văn sâu sắc về ước mơ và hạnh phúc gia đình."
            </div>
        `,
        scores: { visuals: 9.0, sound: 9.5, story: 9.8, concept: 9.6 },
        trailerUrl: "https://www.youtube.com/embed/sO7VP34n2Ps",
        cluster: "chill",
        personalityProfile: { romance: 90, retro: 100, cyberpunk: 10, healing: 90, mystery: 10 },
        commentsCount: 3420
    },
    {
        id: "movie-grand-budapest",
        type: "movie",
        title: "The Grand Budapest Hotel",
        artist: "Đạo diễn: Wes Anderson",
        year: 2014,
        poster: "assets/poster_budapest.png",
        rating: 9.1,
        genres: ["Comedy", "Drama", "Adventure"],
        verdictTag: "Hình ảnh đỉnh",
        verdictClass: "verdict-visuals",
        summary: "Một thế giới cổ điển lập dị được dàn dựng với bố cục đối xứng tuyệt đối và bảng màu hồng pastel thơ mộng. Một cuộc phiêu lưu ly kỳ xoay quanh vụ ám sát và bức tranh vô giá của giới quý tộc xưa.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Bộ phim là một bữa tiệc mỹ thuật độc nhất vô nhị của đạo diễn Wes Anderson. <strong>The Grand Budapest Hotel</strong> kể về những rắc rối ly kỳ của một người quản lý khách sạn huyền thoại Gustave và người học việc trung thành Zero. Tác phẩm tái hiện một thế giới giả tưởng cổ kính của châu Âu trước thềm chiến tranh, mang đậm vẻ đẹp lịch thiệp, quý phái nhưng cũng vô cùng lập dị và hài hước.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim được chia thành nhiều chương hồi giống như một cuốn tiểu thuyết phiêu lưu cổ điển. Mạch phim di chuyển nhanh chóng xoay quanh vụ mưu sát một quý bà giàu có và cuộc tranh giành bức tranh vô giá của giới quý tộc. Sự kết hợp giữa yếu tố hài hước châm biếm sâu cay và những tình huống truy đuổi kịch tính tạo nên nhịp điệu vô cùng lôi cuốn, không một giây thừa thãi.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Wes Anderson áp dụng triệt để bố cục trung tâm đối xứng hoàn hảo trong mọi khung hình. Bảng màu hồng pastel kết hợp xanh lam thơ mộng biến khách sạn Grand Budapest thành một tác phẩm nghệ thuật di động rực rỡ. Sự chăm chút tỉ mỉ đến từng chi tiết đạo cụ nhỏ nhất thể hiện tư duy thẩm mỹ đỉnh cao của vị đạo diễn đại tài.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc nền của bộ phim mang âm hưởng nhạc cổ điển châu Âu cũ, sử dụng các nhạc cụ như đàn balalaika tạo cảm giác vui nhộn, hoài cổ nhưng cũng đượm buồn về một thời kỳ hoàng kim đã qua.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Bộ phim là lời ca tụng và cũng là khúc tưởng niệm đầy u sầu dành cho những giá trị văn minh, lịch thiệp cổ điển đang dần bị tàn phá trước sự tàn khốc của chiến tranh và biến động lịch sử.</p>
            
            <div class="review-verdict-box">
                "Bố cục đối xứng tuyệt đối của Wes Anderson xem sướng mắt kinh khủng, màu hồng pastel thơ mộng kết hợp cùng cốt truyện phiêu lưu lập dị tạo nên một kiệt tác điện ảnh độc nhất vô nhị."
            </div>
        `,
        scores: { visuals: 9.8, sound: 9.0, story: 8.7, concept: 9.5 },
        trailerUrl: "https://www.youtube.com/embed/1Fg5iWmQjwk",
        cluster: "retro",
        personalityProfile: { romance: 40, retro: 90, cyberpunk: 20, healing: 70, mystery: 60 },
        commentsCount: 2280
    },
    {
        id: "mv-chuyen-mua-dong",
        type: "mv",
        title: "Hôn Nhân Hoàn Hảo (Perfect Marriage Revenge)",
        artist: "Đạo diễn: Oh Sang-won",
        year: 2023,
        poster: "assets/poster_cheating.png",
        rating: 8.7,
        genres: ["Drama", "Psychological", "Romance"],
        verdictTag: "Lắng đọng",
        verdictClass: "verdict-great",
        summary: "Hành trình tái sinh đầy kịch tính của Han Yi-joo nhằm trả thù những kẻ đã lừa dối cô, bắt đầu bằng cuộc hôn nhân hợp đồng đầy toan tính với Seo Do-guk.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Bộ phim truyền hình giật gân kịch tính <strong>Hôn Nhân Hoàn Hảo</strong> (Perfect Marriage Revenge) khai thác mạnh mẽ chủ đề trùng sinh, trả thù hào môn và hôn nhân hợp đồng. Chuyện phim kể về Han Yi-joo, một họa sĩ tài năng bị gia đình nuôi hắt hủi và chồng phản bội. Sau một tai nạn thảm khốc, cô bất ngờ quay ngược thời gian về một năm trước và quyết định liên minh với Seo Do-guk - một thiếu gia tài phiệt hoàn hảo để thực hiện kế hoạch trả thù hào môn lừa dối.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim giữ nhịp độ cực kỳ nhanh và dồn dập ngay từ tập đầu tiên. Những nút thắt kịch tính (makjang) liên tiếp xuất hiện, đẩy cuộc xung đột giữa nữ chính và gia đình nuôi độc ác lên cao trào rất tốt. Các phân cảnh đấu trí tâm lý hào môn được dàn dựng căng thẳng, kết hợp ăn ý với diễn xuất đầy tương tác (chemistry) ngọt ngào giữa hai nhân vật chính tạo nên sức hút lớn cho tác phẩm.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Bối cảnh giới siêu giàu Hàn Quốc hiện lên vô cùng xa hoa qua những căn biệt thự sang trọng và phòng triển lãm nghệ thuật tinh tế. Cách sử dụng trang phục và ánh sáng tương phản biểu đạt rõ nét sự đối lập giữa vỏ bọc hôn nhân hào nhoáng bên ngoài với những âm mưu toan tính lạnh lùng chốn hào môn.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc phim sử dụng những bản ballad sâu lắng kết hợp dàn nhạc dây hoành tráng trong các phân cảnh cao trào, làm nổi bật tâm trạng u uất nhưng kiên cường quyết không gục ngã của nữ chính.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Phim tôn vinh ý chí tự làm chủ số phận của người phụ nữ trước những bất công gia đình và ca ngợi sức mạnh của tình yêu thương chân thành giúp xoa dịu đi thù hận.</p>
            
            <div class="review-verdict-box">
                "Một tác phẩm trả thù hào môn giật gân đầy kịch tính và thỏa mãn. Phim tôn vinh ý chí tự làm chủ số phận và sức mạnh của tình yêu thương chân thành vượt qua thù hận."
            </div>
        `,
        scores: { visuals: 8.8, sound: 8.9, story: 8.2, concept: 8.5 },
        trailerUrl: "https://www.youtube.com/embed/gS67Q-41130",
        cluster: "retro",
        personalityProfile: { romance: 90, retro: 80, cyberpunk: 0, healing: 70, mystery: 30 },
        commentsCount: 1760
    },
    {
        id: "movie-mat-biec",
        type: "movie",
        title: "Mắt Biếc",
        artist: "Đạo diễn: Victor Vũ",
        year: 2019,
        poster: "assets/poster_thangnamrucro.png",
        rating: 9.0,
        genres: ["Drama", "Romance", "Musical"],
        verdictTag: "Tuyệt phẩm",
        verdictClass: "verdict-masterpiece",
        summary: "Mối tình đơn phương đầy day dứt của Ngạn dành cho Hà Lan - cô bạn cùng quê có đôi mắt biếc bi thương - trải dài qua nhiều thăng trầm của cuộc đời.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Được chuyển thể từ truyện dài nổi tiếng cùng tên của nhà văn Nguyễn Nhật Ánh, bộ phim điện ảnh <strong>Mắt Biếc</strong> của đạo diễn <strong>Victor Vũ</strong> là một khúc ca thanh xuân đầy day dứt và hoài niệm. Chuyện phim xoay quanh Ngạn - một chàng trai quê si tình và Hà Lan - cô gái sở hữu đôi 'mắt biếc' hút hồn, trải dài từ thuở học trò ngây ngô tại làng Đo Đo bình dị cho đến khi trưởng thành đối mặt với những ngã rẽ cuộc đời ở thành thị xa hoa.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim trung thành với tinh thần của nguyên tác văn học nhưng được cụ thể hóa bằng ngôn ngữ điện ảnh tinh tế. Mạch phim trôi đi chậm rãi theo dòng ký ức thanh xuân của Ngạn. Phân cảnh rừng sim tím rực rỡ thời niên thiếu tương phản mạnh mẽ với cuộc sống xô bồ, nhiều cám dỗ tại thành thị Huế sau này. Bi kịch tình yêu đơn phương của Ngạn kéo dài qua hai thế hệ được lột tả vô cùng trọn vẹn, để lại sự tiếc nuối khôn nguôi trong lòng người xem ở phân cảnh đoàn tàu cuối phim.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Mỹ thuật của bộ phim đạt đến độ hoàn mỹ trong việc tái hiện không gian hoài cổ của Việt Nam thập niên 70-80. Từ ngôi trường trung học rợp bóng mát, chợ Đo Đo bình dị cho đến những con phố cổ Huế ngập tràn ánh đèn vàng lãng mạn. Tông màu trầm ấm, úa vàng mang đậm tính điện ảnh hoài niệm làm nổi bật nét buồn man mác của câu chuyện tình đơn phương dở dang.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Điểm cộng tuyệt đối của tác phẩm chính là phần âm nhạc do nhạc sĩ Phan Mạnh Quỳnh đảm nhận. Những giai điệu da diết của các ca khúc như 'Có Chàng Trai Viết Lên Cây', 'Từ Đó' vang lên đúng những khoảnh khắc đắt giá nhất đã nâng đỡ cảm xúc người xem đến mức nghẹn ngào, lột tả trọn vẹn sự cô độc si tình của Ngạn.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Mắt Biếc là bài thơ đượm buồn về một tình yêu đơn phương thuần khiết nhưng dại khờ, phản chiếu mong ước được giữ gìn những giá trị xưa cũ của làng quê Đo Đo trước sự thay đổi vội vã của đô thị hóa.</p>
            
            <div class="review-verdict-box">
                "Mắt Biếc là một tuyệt phẩm lãng mạn hoài cổ của điện ảnh Việt. Tác phẩm để lại nỗi buồn day dứt khó tả về một tình yêu đơn phương chân thành nhưng dở dang, một thời thanh xuân không thể quay lại."
            </div>
        `,
        scores: { visuals: 9.4, sound: 9.5, story: 8.6, concept: 8.9 },
        trailerUrl: "https://www.youtube.com/embed/ITlQ0oU7tDA",
        cluster: "retro",
        personalityProfile: { romance: 90, retro: 100, cyberpunk: 10, healing: 80, mystery: 20 },
        commentsCount: 2540
    },
    {
        id: "movie-blade-runner-2049",
        type: "movie",
        title: "Blade Runner 2049",
        artist: "Đạo diễn: Denis Villeneuve",
        year: 2017,
        poster: "assets/poster_blade_runner.png",
        rating: 9.4,
        genres: ["Sci-Fi", "Cyberpunk", "Mystery"],
        verdictTag: "Siêu phẩm",
        verdictClass: "verdict-masterpiece",
        summary: "Bức tranh tương lai rợn ngợp đắm chìm trong sương mù độc hại và những màn đêm vô tận. Cuộc tìm kiếm nhân tính của sĩ quan cảnh sát K khi anh vô tình phát hiện ra một bí mật chấn động thế giới.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Đạo diễn Denis Villeneuve đã tạo ra một hậu bản xứng tầm kiệt tác cho bản gốc 1982. <strong>Blade Runner 2049</strong> là một câu hỏi triết học nặng nề về ý nghĩa của sự sống, tâm hồn và ranh giới con người. Bộ phim đưa người xem vào một tương lai rợn ngợp đắm chìm trong sương mù độc hại, những đống phế thải khổng lồ và những màn đêm vô tận của Los Angeles năm 2049.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim là cuộc tìm kiếm nhân tính của sĩ quan cảnh sát K - một người nhân bản Replicant thế hệ mới chuyên săn lùng những người nhân bản cũ nổi loạn. Mạch phim di chuyển chậm rãi nhưng cực kỳ cuốn hút, dẫn dắt người xem đi sâu vào bí mật chấn động liên quan đến một đứa trẻ được sinh ra tự nhiên từ người nhân bản. Sự hy sinh thầm lặng của K ở cuối phim chính là câu trả lời đắt giá nhất cho câu hỏi về linh hồn con người.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Mỹ thuật phim đạt đến đỉnh cao nghệ thuật dưới bàn tay của nhà quay phim huyền thoại Roger Deakins. Các đại cảnh sa mạc màu cam bụi bặm, những bức tượng khổng lồ đổ nát cô độc giữa hoang mạc và ánh sáng vàng neon tương phản rực rỡ tạo nên những khuôn hình choáng ngợp. Mỗi góc quay đều mang đậm tính triết lý sâu sắc về sự nhỏ bé của con người.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Thiết kế âm thanh đục ngầu, vang dội của Hans Zimmer và Benjamin Wallfisch tạo nên một không gian ngột ngạt, cô độc tột cùng, đồng điệu với nội tâm trống rỗng của nhân vật chính.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Blade Runner 2049 khẳng định rằng nhân tính không nằm ở nguồn gốc sinh học của bạn mà nằm ở hành động biết hy sinh bản thân vì những điều cao đẹp hơn.</p>
            
            <div class="review-verdict-box">
                "Blade Runner 2049 là đỉnh cao của dòng phim Sci-Fi triết học hiện đại. Một kiệt tác hình ảnh và âm thanh đặt ra những câu hỏi nhức nhối về bản ngã con người."
            </div>
        `,
        scores: { visuals: 9.9, sound: 9.5, story: 8.9, concept: 9.6 },
        trailerUrl: "https://www.youtube.com/embed/gCcxXuEDgn8",
        cluster: "cyberpunk",
        personalityProfile: { romance: 40, retro: 50, cyberpunk: 100, healing: 15, mystery: 80 },
        commentsCount: 2980
    },
    {
        id: "mv-cyber-love-2088",
        type: "mv",
        title: "Cyber Love 2088",
        artist: "Nghệ sĩ: Future Club",
        year: 2026,
        poster: "assets/poster_cyber_love.png",
        rating: 8.9,
        genres: ["Synthwave", "Future Synth"],
        verdictTag: "Hình ảnh đỉnh",
        verdictClass: "verdict-visuals",
        summary: "MV lấy bối cảnh thành phố tương lai năm 2088 rực sáng ánh đèn neon, kể về cuộc tình đầy trớ trêu giữa một hacker và một người máy AI. Mỹ thuật neon rực rỡ cùng âm nhạc dồn dập cuốn hút.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: MV <strong>Cyber Love 2088</strong> là một sản phẩm âm nhạc điện tử kết hợp kỹ xảo đồ họa vô cùng xuất sắc của nhóm nhạc <strong>Future Club</strong>. Tác phẩm lấy bối cảnh một đô thị tương lai năm 2088 rực sáng ánh đèn neon huyền ảo, kể về câu chuyện tình yêu đầy trớ trêu và cấm đoán giữa một hacker thế giới ngầm và một người máy trí tuệ nhân tạo (AI).</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: MV được kể theo cấu trúc tuyến tính nhanh chóng. Phân cảnh bắt đầu bằng một căn phòng ngầm ngập tràn màn hình máy tính xanh lét của chàng hacker. Sự xuất hiện của cô gái AI lấp lánh sắc màu ảo ảnh qua kính thực tế ảo làm thay đổi hoàn toàn thế giới tẻ nhạt của anh. Những cảnh rượt đuổi nghẹt thở của cảnh sát cơ khí đô thị săn lùng hai người tạo nên nhịp điệu dồn dập, đẩy câu chuyện tình yêu viễn tưởng đến một kết cục ly kỳ.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Định hướng mỹ thuật của MV sử dụng triệt để phong cách Cyberpunk đặc trưng. Bảng màu hồng tím neon rực rỡ tương phản mạnh mẽ với màu đen lạnh lẽo của cơ khí cơ thể robot. Hiệu ứng nhiễu sóng kỹ thuật số (glitch art) được áp dụng điêu luyện tạo nên bầu không khí tương lai ảo mộng, đầy biến động.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc Future Synth dồn dập với những giai điệu synthesizer réo rắt kết hợp nhịp drum machine mạnh mẽ, đưa người nghe đắm chìm hoàn toàn vào thế giới số hóa đầy hưng phấn.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Cyber Love 2088 đặt ra câu hỏi lãng mạn về ranh giới của tình cảm: Liệu một chương trình AI có thể có được cảm xúc yêu thương thực sự giống như con người?</p>
            
            <div class="review-verdict-box">
                "Nhạc Future Synth dồn dập kết hợp hình ảnh neon glitch art xem phê dã ngoại. Mối tình giữa hacker và người máy AI được kể bằng ngôn ngữ ánh sáng vô cùng nghệ thuật."
            </div>
        `,
        scores: { visuals: 9.5, sound: 9.0, story: 8.0, concept: 9.2 },
        trailerUrl: "https://www.youtube.com/embed/MV_3Dpw-BRY",
        cluster: "cyberpunk",
        personalityProfile: { romance: 70, retro: 60, cyberpunk: 95, healing: 30, mystery: 40 },
        commentsCount: 1890
    },
    {
        id: "movie-parasite",
        type: "movie",
        title: "Parasite (Ký Sinh Trùng)",
        artist: "Đạo diễn: Bong Joon-ho",
        year: 2019,
        poster: "assets/poster_parasite.png",
        rating: 9.5,
        genres: ["Thriller", "Drama", "Mystery"],
        verdictTag: "Siêu phẩm",
        verdictClass: "verdict-masterpiece",
        summary: "Gia đình nghèo tìm cách thâm nhập vào biệt thự của gia đình giàu có. Vở kịch châm biếm sâu cay bỗng chốc rẽ hướng thành một cơn ác mộng kinh hoàng khi bí ẩn dưới căn hầm sâu tối được mở ra.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Tác phẩm đoạt giải Oscar lịch sử của đạo diễn <strong>Bong Joon-ho</strong>. <strong>Parasite</strong> bắt đầu như một bộ phim hài đen châm biếm sự phân hóa giàu nghèo sâu sắc trong xã hội Hàn Quốc hiện đại. Chuyện phim xoay quanh một gia đình nghèo bốn người thất nghiệp tìm cách 'thâm nhập' làm thuê cho một gia đình tài phiệt giàu có bằng những kế hoạch giả mạo tinh vi.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim là một kỳ quan của sự sắp đặt tình huống và chuyển đổi thể loại đột ngột. Nửa đầu phim trôi đi vui vẻ với những màn lừa gạt hài hước của gia đình họ Ki. Tuy nhiên, sự xuất hiện của căn hầm bí mật dưới lòng đất biệt thự sang trọng đã bẻ lái câu chuyện hoàn toàn sang thể loại kinh dị, giật gân đầy nghẹt thở. Các phân cảnh đối lập giàu nghèo được đẩy lên cao trào đỉnh điểm trong đêm mưa lũ ngập lụt khu bán hầm tồi tàn.</p>
            
            <p><strong>[MỸ THUẬT & ÁNH SÁNG]</strong>: Mỹ thuật của phim sử dụng ngôn ngữ kiến trúc để phản chiếu giai cấp. Sự đối lập tuyệt đối giữa khu nhà bán hầm ngập lụt chật hẹp, u tối ở dưới sâu và căn biệt thự kính cao ráo ngập tràn ánh nắng tự nhiên trên đồi của giới nhà giàu. Những bậc thang lên xuống xuất hiện xuyên suốt phim là ẩn dụ trực quan đắt giá về sự phân chia ranh giới xã hội không thể vượt qua.</p>
            
            <p><strong>[HỒA ÂM & PHỐI KHÍ]</strong>: Nhạc nền sử dụng dàn nhạc giao hưởng mang hơi hướng cổ điển, tạo cảm giác sang trọng nhưng mỉa mai, làm tăng tính châm biếm sâu cay cho vở kịch nhân sinh đầy bi kịch.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Ký Sinh Trùng phơi bày sự tàn khốc của chủ nghĩa tư bản, nơi người nghèo phải cấu xé lẫn nhau để giành lấy cơ hội sinh tồn dưới chân người giàu, đặt ra câu hỏi lớn về đạo đức và nhân tính con người.</p>
            
            <div class="review-verdict-box">
                "Ký Sinh Trùng đoạt Oscar hoàn toàn xứng đáng. Kịch bản bẻ lái ngoạn mục không thể lường trước. Sự đối lập giữa bán hầm và biệt thự kính mang tính ẩn dụ xã hội vô cùng sâu sắc."
            </div>
        `,
        scores: { visuals: 9.4, sound: 9.0, story: 9.8, concept: 9.7 },
        trailerUrl: "https://www.youtube.com/embed/5xH0HfJHsaY",
        cluster: "mystery",
        personalityProfile: { romance: 10, retro: 30, cyberpunk: 20, healing: 10, mystery: 100 },
        commentsCount: 3350
    },
    {
        id: "mv-con-mua-ngang-qua",
        type: "mv",
        title: "Kẻ Ăn Hồn",
        artist: "Đạo diễn: Trần Hữu Tấn",
        year: 2023,
        poster: "assets/poster_thooi.png",
        rating: 8.4,
        genres: ["Thriller", "Horror", "Mystery"],
        verdictTag: "Ấn tượng",
        verdictClass: "verdict-great",
        summary: "Bộ phim kinh dị cổ trang Việt Nam xoay quanh hàng loạt cái chết kỳ bí và âm mưu tàn khốc liên quan đến loại cổ thuật luyện Rượu Sọ Người.",
        content: `
            <p><strong>[TỔNG QUAN BỐI CẢNH]</strong>: Phim điện ảnh kinh dị cổ trang Việt Nam <strong>Kẻ Ăn Hồn</strong> (The Soul Reaper) dưới bàn tay đạo diễn Trần Hữu Tấn và nhà sản xuất Hoàng Quân mở ra một thế giới Làng Địa Ngục đầy ma mị, ám ảnh. Chuyện phim kể về hàng loạt cái chết bí ẩn xảy ra trong đám cưới của cô Phong tại ngôi làng biệt lập trên núi cao, liên quan đến loại tà thuật luyện Rượu Sọ Người tàn khốc chôn giấu từ thế hệ trước.</p>
            
            <p><strong>[KỊCH BẢN & PHÂN CẢNH]</strong>: Kịch bản phim tập trung vào cuộc hành trình truy tìm thủ phạm đứng sau các vụ mưu sát man rợ liên quan đến tà thuật cổ xưa. Nhịp phim dồn dập với các tình tiết bí ẩn đan xen, đưa người xem đi từ nghi vấn này đến nghi vấn khác. Các phân cảnh điều tra trong rừng sương mù và những màn đối đầu tâm lý rùng rợn được sắp đặt khéo léo, giữ độ căng thẳng kéo dài đến tận phút cuối cùng của tác phẩm.</p>
            
            <p><strong>[MỸ THUẬT & BỐI CẢNH]</strong>: Phim gây ấn tượng mạnh mẽ với việc đưa chất liệu dân gian Việt Nam vào phim một cách chân thực và rùng rợn. Hình ảnh đám cưới đeo mặt nạ chuột, rước dâu bằng kiệu giấy giữa sương mù mờ ảo mang tính thẩm mỹ kinh dị cực cao. Phục trang cổ phong Việt được thiết kế chỉn chu, màu sắc tối tăm ma mị làm nổi bật bầu không khí u uất rợn tóc gáy của ngôi làng biệt lập.</p>
            
            <p><strong>[HỒA ÂM & TIẾT TẤU]</strong>: Thiết kế âm thanh xuất sắc với tiếng gõ trống dồn dập, tiếng kèn đám ma ai oán kết hợp cùng những phân cảnh hù dọa (jump-scare) được tính toán kỹ, giữ nhịp phim căng thẳng lôi cuốn từ đầu đến cuối. Âm thanh rùng rợn làm nổi bật bầu không khí ma quái chốn sơn cước.</p>
            
            <p><strong>[TRỌNG TÂM Ý NGHĨA]</strong>: Phim truyền tải bài học nhân quả sâu sắc về việc lòng tham ác độc của con người còn đáng sợ hơn cả tà thuật và quỷ dữ, cảnh tỉnh con người tránh xa những cám dỗ đen tối.</p>
            
            <div class="review-verdict-box">
                "Một tác phẩm kinh dị cổ trang đậm chất Việt Nam. Kẻ Ăn Hồn cho thấy bước tiến dài của phim kinh dị nước nhà về mặt mỹ thuật bối cảnh và thiết kế âm thanh ám ảnh."
            </div>
        `,
        scores: { visuals: 8.7, sound: 8.5, story: 8.0, concept: 8.6 },
        trailerUrl: "https://www.youtube.com/embed/vB7xV3eD0nI",
        cluster: "mystery",
        personalityProfile: { romance: 70, retro: 70, cyberpunk: 20, healing: 40, mystery: 60 },
        commentsCount: 1620
    }
];

// ==========================================================================
// DYNAMIC COMMENTS GENERATOR SYSTEM (UNIQUE NAMES PER MOVIE SEEDED LOGIC)
// ==========================================================================

function generateDynamicComments(reviewId) {
    const review = INITIAL_REVIEWS.find(r => r.id === reviewId);
    if (!review) return [];
    
    // Dynamic name components to ensure complete uniqueness and diverse styles
    const ho = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "Huỳnh", "Phùng", "Đoàn", "Lâm", "Hà", "Quách", "Tạ", "Mai"];
    const dem = ["Văn", "Thị", "Minh", "Anh", "Đức", "Duy", "Hữu", "Quốc", "Thanh", "Ngọc", "Kim", "Thu", "Hải", "Hồng", "Tiến", "Mạnh", "Quang", "Xuân", "Tấn", "Nguyên", "Hoàng", "Phương", "Cát", "Gia"];
    const ten = ["Nam", "Vy", "Tuấn", "Anh", "Linh", "Hùng", "Trang", "Sơn", "Giang", "Lan", "Mai", "Long", "Thảo", "Huy", "Bảo", "Phúc", "Dương", "Hải", "Khôi", "Nguyên", "Hân", "Phong", "Yến", "Quân", "Minh", "Bách", "Cường", "Thịnh", "Tùng", "Khoa", "Vinh", "Khánh", "Duy", "Tú", "Thành", "Đức", "Đạt", "Bình"];
    
    const usernames = [
        "neon_rider", "lofi_vibes", "hacker_cyber", "mot_phim_chinh_hieu", "cinema_geek", "jamie_fan_cung", "am_nhac_retro", 
        "cinephile_99", "retro_dreamer", "cyber_ghost", "pixel_art", "vhstape_collector", "lofi_rain", "midnight_drive",
        "critic_pro", "frame_mechanic", "director_cut", "indie_soul", "music_healer", "mystery_solver", "decoding_cinema",
        "bassline_lover", "sax_soloist", "film_noir_fan", "manga_horror", "cyber_punker", "chill_pill", "retro_wave"
    ];
    
    const teencodePrefixes = ["pÉ_", "nHoX_", "kUtE_", "cOoL_", "sAd_", "lOvE_", "xUkA_", "sTrAw_"];
    const teencodeNames = ["lInH", "vY", "tUáN", "mInH", "pHóNg", "hUýNh", "tÚ", "tRaNg", "kHaNh", "mAi", "lAn", "aNh", "pHúC", "dƯơNg"];
    const teencodeSuffixes = ["_kUtE", "_bAbY", "_9x", "_cOoL", "_sAd", "_lOvE", "_tY", ""];
    
    const socialSuffixes = [".official", ".cinema", ".review", ".movie", ".artist", "_vibe", "_critics", ""];
    
    const emojis = ["🌸", "✨", "🔥", "🍀", "🌟", "🐱", "🦊", "👑", "🎨", "🎵", "👾", "🧸", "🦄", "🌈", "🍉", "🚀"];
    const laughingEmojis = ["😂", "🤣", "😄", "😆", "😊", "🤪", "🤣🍿", "😂🎬", "😆✌️"];
    
    // Use a Set to ensure 100% unique author names in this specific list
    const generatedAuthors = new Set();
    
    // Deterministic string hashing for seeding the generator per reviewId
    let seed = 0;
    for (let i = 0; i < reviewId.length; i++) {
        seed += reviewId.charCodeAt(i) * (i + 1);
    }
    
    function seededRandom() {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }
    
    // Pre-generate 60 unique author names with diverse styles for this review
    while (generatedAuthors.size < 60) {
        let author = "";
        const styleRoll = seededRandom();
        
        if (styleRoll < 0.22) {
            // Style 0: Tên tiếng Việt tiêu chuẩn
            const last = ho[Math.floor(seededRandom() * ho.length)];
            const mid = seededRandom() > 0.25 ? dem[Math.floor(seededRandom() * dem.length)] : "";
            const first = ten[Math.floor(seededRandom() * ten.length)];
            author = mid ? `${last} ${mid} ${first}` : `${last} ${first}`;
        } else if (styleRoll < 0.44) {
            // Style 1: Tên tiếng Anh / Username quốc tế
            const baseUser = usernames[Math.floor(seededRandom() * usernames.length)];
            const suffix = Math.floor(seededRandom() * 900) + 99;
            author = baseUser + "_" + suffix;
        } else if (styleRoll < 0.66) {
            // Style 2: Tên teencode Việt Nam độc đáo
            if (seededRandom() > 0.5) {
                const pref = teencodePrefixes[Math.floor(seededRandom() * teencodePrefixes.length)];
                const namePart = teencodeNames[Math.floor(seededRandom() * teencodeNames.length)];
                const suff = teencodeSuffixes[Math.floor(seededRandom() * teencodeSuffixes.length)];
                author = pref + namePart + suff;
            } else {
                const last = ho[Math.floor(seededRandom() * ho.length)];
                const first = ten[Math.floor(seededRandom() * ten.length)];
                let teenName = `${last}_${first}`
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/đ/g, "d")
                    .replace(/a/g, "4")
                    .replace(/e/g, "3")
                    .replace(/i/g, "1")
                    .replace(/o/g, "0");
                author = teenName + "_" + (Math.floor(seededRandom() * 90) + 10);
            }
        } else if (styleRoll < 0.82) {
            // Style 3: Social Media Handle style (@username)
            const last = ho[Math.floor(seededRandom() * ho.length)];
            const first = ten[Math.floor(seededRandom() * ten.length)];
            const nameStr = `${last}${first}`
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d");
            const handleSuff = socialSuffixes[Math.floor(seededRandom() * socialSuffixes.length)];
            author = "@" + nameStr + handleSuff;
        } else {
            // Style 4: Emoji-decorated Name (using laughing emojis & other icons)
            const baseNameType = seededRandom();
            let baseName = "";
            if (baseNameType > 0.5) {
                const last = ho[Math.floor(seededRandom() * ho.length)];
                const first = ten[Math.floor(seededRandom() * ten.length)];
                baseName = `${last} ${first}`;
            } else {
                baseName = ten[Math.floor(seededRandom() * ten.length)];
            }
            
            const emojiType = seededRandom();
            if (emojiType > 0.5) {
                const emoji = laughingEmojis[Math.floor(seededRandom() * laughingEmojis.length)];
                if (seededRandom() > 0.5) {
                    author = `${baseName} ${emoji}`;
                } else {
                    author = `${emoji} ${baseName} ${emoji}`;
                }
            } else {
                const emoji = emojis[Math.floor(seededRandom() * emojis.length)];
                if (seededRandom() > 0.5) {
                    author = `${baseName} ${emoji}`;
                } else {
                    author = `${emoji} ${baseName} ${emoji}`;
                }
            }
        }
        
        generatedAuthors.add(author);
    }
    
    const authorsList = Array.from(generatedAuthors);
    
    const dates = [
        "10 phút trước", "30 phút trước", "1 giờ trước", "2 giờ trước", "4 giờ trước", "6 giờ trước", "12 giờ trước",
        "1 ngày trước", "2 ngày trước", "3 ngày trước", "4 ngày trước", "5 ngày trước"
    ];
    
    const movieKeywords = {
        "mv-synthwave-dream": {
            comments: [
                "Bản phối synthwave đỉnh thực sự, tiếng snare vang và nhịp dồn dập nghe cực kỳ hoài cổ.",
                "Đoạn solo saxophone ở nửa cuối bài thực sự đỉnh cao, nổi da gà luôn á!",
                "Visual màu neon tím hồng magenta này xem cuốn không dứt được, làm nhớ tới phim Drive (2011).",
                "Phân tích của Jamie rất sâu sắc, chỉ ra được những chi tiết chồng mờ phim VHS rất hay.",
                "Đã nghe đi nghe lại bài này 10 lần. Chất nhạc điện tử hoài cổ này chưa bao giờ lỗi thời.",
                "Sản phẩm âm nhạc chất lượng nhất năm nay của The Midnight Project. Jamie đánh giá 9.5 quá chuẩn!"
            ]
        },
        "movie-shadow-protocol": {
            comments: [
                "Phim này xem rạp IMAX màu sắc và âm thanh sướng tai dã man. Bối cảnh Cyber City ngột ngạt nhưng rất cuốn.",
                "Mình thấy cốt truyện hơi dễ đoán ở đoạn cuối, nhưng bù lại phần không khí Cyber-Noir quá tuyệt vời.",
                "Cái đoạn nhạc nền lúc rượt đuổi ở hẻm mưa xem căng thẳng đến nín thở. Đọc review mới chú ý kỹ phần âm thanh.",
                "Đạo diễn Neo Vancamp chưa bao giờ làm mình thất vọng về phần nhìn. Đỉnh cao kỹ xảo điện ảnh!",
                "Bàn luận về đạo đức khi máy móc thay thế ký ức con người trong phim rất đáng suy ngẫm.",
                "Review quá chi tiết! Những phân tích về bảng màu xanh teal tương phản cam ấm cực kỳ chính xác."
            ]
        },
        "mv-huong-hoa-bay": {
            comments: [
                "MV Gieo Quẻ của Hoàng Thùy Linh phối nhạc với Đen Vâu đỉnh thực sự, sự kết hợp giữa truyền thống và hiện đại quá đỉnh.",
                "Bối cảnh rực rỡ sắc màu tâm linh dân gian Việt Nam xem mãn nhãn vô cùng.",
                "Thích nhất đoạn rap của Đen, lời nhạc sâu sắc và ý nghĩa về việc tự định đoạt số phận.",
                "Vũ đạo trong MV cực kỳ đầu tư và đều tăm tắp, đúng chuẩn nghệ thuật đương đại.",
                "Đọc review của Jamie mới thấy hết những chi tiết đạo cụ và sắp đặt ẩn ý trong MV này.",
                "Màu sắc rực rỡ, âm nhạc bắt tai, một siêu phẩm chào xuân xuất sắc."
            ]
        },
        "movie-man-kich-cuoi": {
            comments: [
                "Tiêu Chiến đóng vai Tàng Hải thần thái quá đỉnh, đấu trí quyền mưu xem căng thẳng từng giây.",
                "Lâu lắm rồi mới có phim cổ trang trinh thám chính kịch có chiều sâu kịch bản tốt thế này.",
                "Tình tiết phim logic, các nút thắt mở được giải quyết rất thông minh chứ không bị đầu voi đuôi chuột.",
                "Bối cảnh thiết kế mỹ thuật cổ phong rất hoành tráng, phục trang nhân vật chỉn chu.",
                "Đạo diễn Trịnh Hiểu Long quả nhiên là bảo chứng chất lượng cho dòng phim chính kịch cổ trang.",
                "Đọc bài review này viết sâu sắc quá, phân tích đúng cái chất mưu lược kiên nhẫn của nhân vật."
            ]
        },
        "mv-neon-rain": {
            comments: [
                "Màn trình diễn laser kết hợp nhảy dưới mưa xem trực tiếp chắc phê lắm. visual đỉnh cao thực sự.",
                "Bản nhạc Trance ma mị cực kỳ, DJ Shadow phối nhạc quá đỉnh chóp.",
                "Màu sắc rực rỡ dưới màn mưa đêm tạo hiệu ứng thị giác tuyệt đỉnh, xứng đáng lọt top MV đẹp nhất.",
                "Review ngắn gọn nhưng trúng điểm. Thích cái không khí cô độc đô thị mà MV truyền tải.",
                "Visual đỉnh, nhạc cuốn, xem đi xem lại không chán luôn á mọi người ơi."
            ]
        },
        "movie-little-forest": {
            comments: [
                "Phim này chữa lành cực kỳ. Xem xong tự dưng muốn bỏ phố về quê trồng rau nuôi cá ngay lập tức.",
                "Kim Tae-ri diễn xuất tự nhiên, các món ăn nông thôn tự làm nhìn thèm chảy nước miếng.",
                "Hình ảnh tuyết rơi mùa đông hay đồng lúa chín mùa thu đẹp thanh bình dã man.",
                "Một bộ phim nhẹ nhàng không có drama cãi vã, chỉ có thiên nhiên và sự tự chữa lành.",
                "Review viết rất truyền cảm hứng. Đúng là Little Forest là liều thuốc cho những tâm hồn mệt mỏi."
            ]
        },
        "mv-may-lang-thang": {
            comments: [
                "Sing 2 xem rạp cùng gia đình vui và xúc động lắm. Nhạc phim toàn những bài hit phối lại cực hay.",
                "Thích nhân vật Clay Calloway và câu chuyện vượt qua nỗi đau mất mát để cất tiếng hát trở lại.",
                "Đoạn solo của Clay nghe da diết vô cùng. Cảm ơn bài review rất sâu sắc của Jamie.",
                "Đoạn hoạt hình của Illumination ngày càng đỉnh, sân khấu Redshore City hoành tráng lệ.",
                "Một hậu bản hoạt hình âm nhạc xuất sắc vượt mong đợi, thông điệp ý chí cực kỳ ý nghĩa."
            ]
        },
        "movie-reply-1988": {
            comments: [
                "Kim Woo-bin đóng vai thần đèn Genie duyên dáng dã man, Suzy thì xinh đẹp xỉu lên xỉu xuống.",
                "Cốt truyện hài hước huyền ảo của biên kịch Kim Eun-sook xem giải trí và ấm áp vô cùng.",
                "Sự tái hợp của cặp đôi Uncontrollably Fond làm mọt phim đứng ngồi không yên.",
                "Thích cái cách phim cài cắm các thông điệp về tình cảm và mong ước chân thành của con người.",
                "Review rất có gu, phân tích được nét hài hước tinh tế và sự ấm áp của bộ phim."
            ]
        },
        "movie-grand-budapest": {
            comments: [
                "Bố cục đối xứng tuyệt đối của Wes Anderson xem sướng mắt kinh khủng, màu hồng pastel thơ mộng.",
                "Phim như một bức tranh nghệ thuật di động. Từng khung hình đều có thể chụp lại làm hình nền.",
                "Chất hài hước châm biếm sâu sắc của giới quý tộc Châu Âu cũ được thể hiện rất tinh tế.",
                "Dàn diễn viên toàn sao gạo cội diễn xuất đỉnh cao, lời thoại nhanh và thông minh.",
                "Jamie phân tích về tính đối xứng và màu sắc hoài cổ của khách sạn rất chuẩn xác."
            ]
        },
        "mv-chuyen-mua-dong": {
            comments: [
                "Phim Hôn Nhân Hoàn Hảo xem kịch tính từng tập, nữ chính trùng sinh trả thù đỉnh thực sự.",
                "Cặp đôi chính chemistry bùng nổ, nam chính bảo vệ nữ chính vô điều kiện cưng xỉu.",
                "Kịch bản trả thù hào môn thế gia giật gân, nhịp phim nhanh xem không thể rời mắt.",
                "Trò chơi tâm lý giữa các nhân vật được đẩy lên cao trào rất tốt.",
                "Bài review chỉ ra được nét kịch tính tâm lý và ý nghĩa tự do của nhân vật nữ chính rất hay."
            ]
        },
        "movie-mat-biec": {
            comments: [
                "Mắt Biếc của Victor Vũ xem rạp khóc hết nước mắt. Nhạc Phan Mạnh Quỳnh nổi lên là nổi da gà.",
                "Ngạn si tình đến khờ khạo, xem mà vừa thương vừa giận nhân vật này.",
                "Hình ảnh làng quê Đo Đo thanh bình thập niên 70-80 được tái hiện đẹp như một giấc mơ hoài cổ.",
                "Hà Lan có đôi mắt biếc quá đẹp nhưng cuộc đời lại nhiều truân chuyên quá.",
                "Review viết rất xúc động, phân tích được sự đối lập giữa làng Đo Đo bình dị và thành thị xa hoa."
            ]
        },
        "movie-blade-runner-2049": {
            comments: [
                "Blade Runner 2049 là một kiệt tác viễn tưởng triết học. Hình ảnh của Roger Deakins xứng đáng điểm 10.",
                "Phim tiết tấu chậm nhưng bầu không khí cô độc, ngột ngạt và đại cảnh hoành tráng làm mình choáng ngợp.",
                "Âm thanh đục ngầu vang dội của Hans Zimmer tạo cảm giác rợn ngợp tột cùng.",
                "Câu hỏi về bản ngã và linh hồn của Replicants được đặt ra vô cùng nhức nhối.",
                "Phân tích về sa mạc cam bụi bặm và tượng khổng lồ đổ nát của Jamie rất sâu sắc."
            ]
        },
        "mv-cyber-love-2088": {
            comments: [
                "Nhạc Future Synth dồn dập kết hợp hình ảnh neon glitch art xem phê dã man.",
                "Mối tình giữa hacker và người máy AI được kể bằng ngôn ngữ ánh sáng rất nghệ thuật.",
                "Bảng màu hồng tím neon tương phản đen lạnh của cơ khí cơ thể robot đúng chuẩn Cyberpunk.",
                "Review có chiều sâu nghệ thuật, lột tả được cái hồn hoài cổ lai tương lai của MV."
            ]
        },
        "movie-parasite": {
            comments: [
                "Ký Sinh Trùng đoạt Oscar hoàn toàn xứng đáng. Kịch bản bẻ lái ngoạn mục không thể lường trước.",
                "Sự đối lập giữa căn nhà bán hầm ngập lụt và biệt thự kính sang trọng trên đồi mang tính ẩn dụ cực cao.",
                "Bộ phim hài đen châm biếm xã hội sâu sắc nhưng kết cục lại quá đau lòng và ám ảnh.",
                "Cách Bong Joon-ho xử lý nhịp phim và các biểu tượng mùi hôi, bậc thang cực kỳ thiên tài.",
                "Review viết rất đẳng cấp, mổ xẻ được các tầng lớp ý nghĩa ẩn dụ về sự phân hóa giàu nghèo."
            ]
        },
        "mv-con-mua-ngang-qua": {
            comments: [
                "Kẻ Ăn Hồn là phim kinh dị cổ trang Việt Nam xuất sắc nhất những năm gần đây, bối cảnh Làng Địa Ngục ma mị.",
                "Tạo hình các nhân vật đeo mặt nạ chuột, rước dâu bằng kiệu giấy rùng rợn và ám ảnh ghê gớm.",
                "Chất liệu văn hóa dân gian Việt Nam như cổ thuật rượu sọ người được đưa vào phim rất khéo léo.",
                "Âm thanh dồn dập, tiếng gõ trống và kèn đám ma làm tăng thêm sự căng thẳng tột cùng.",
                "Jamie phân tích về tính nhân quả và lòng tham con người trong phim rất trúng điểm."
            ]
        }
    };
    
    const generalTemplates = {
        "funny": [
            "Đang xem [Title] thì mẹ bắt đi quét nhà, vừa cầm chổi vừa nhảy theo nhạc làm vỡ lọ hoa của bố. Giờ đang đứng ngoài hành lang đọc review của Jamie đây...",
            "Phim này xem cuốn đến mức quên cả người yêu cũ luôn. Đề xuất Jamie làm thêm bài phân tích về phản diện nhé!",
            "Nhìn visual của diễn viên chính xong quay sang nhìn gương tự dưng muốn đi đầu thai lại ghê á hahahaha.",
            "Xem xong [Title] tự dưng thấy mình giàu kinh nghiệm sống hẳn lên, mặc dù tài khoản ngân hàng vẫn chỉ còn 20k...",
            "Có ai giống mình xem xong phim này tự dưng muốn mua bảo hiểm nhân thọ cho nhân vật chính không? Chết đi sống lại mệt mỏi giùm luôn á."
        ],
        "teen": [
            "Keo lỳ quá trời ơi! Visual của [Title] đỉnh chóp slay cực kì luôn á cả nhà iu, xem xong xỉu up xỉu down!!!",
            "Mê đắm đuối cái vibe của [Title] luôn á, nhạc nghe dính cực kỳ, replay n lần rồi vẫn thấy cuốn nha.",
            "Đúng là chân ái cuộc đời mình đây rồi, xem xong thấy cuộc sống tươi đẹp hẳn ra, cưng xỉu!",
            "Sản phẩm này đỉnh chóp thực sự, không xem phí cả thanh xuân nha mng ơi, chốt đơn xem ngay đi!",
            "Vibe nhạc/phim này cuốn quá đi, nghe xong muốn f5 bản thân đi quẩy liền luôn á, slay xỉu ngang xỉu dọc."
        ],
        "conspiracy": [
            "Tôi tin chắc là đạo diễn của [Title] đang ngầm xây dựng một vũ trụ điện ảnh mới. Cái chi tiết chiếc gương phản chiếu ở phút thứ 5 không thể là ngẫu nhiên được!",
            "Mọi người có để ý hình xăm của nhân vật phụ lúc đầu phim không? Nó liên kết trực tiếp đến cái kết. Quá nhiều Easter Eggs ẩn giấu!",
            "Thuyết âm mưu: Thực ra nhân vật chính đã chết từ vụ tai nạn đầu phim và toàn bộ diễn biến sau đó chỉ là ảo ảnh trong phòng cấp cứu.",
            "Có một sự trùng hợp kỳ lạ giữa nhạc nền của [Title] và tần số sóng não kích thích hoài niệm. Liệu đây có phải là một thử nghiệm tâm lý?",
            "Nếu xâu chuỗi tất cả các bài review của Jamie lại, hình như đang có một thông điệp ẩn giấu về thế giới tương lai?"
        ],
        "novelist": [
            "Tác phẩm giống như một khúc ca bi tráng về ranh giới mỏng manh của số phận, để lại trong lòng người xem dư vị nghẹn ngào khó tả.",
            "[Title] tựa như một bức tranh sơn dầu cổ kính, nơi những vệt màu sáng tối đan xen tạo nên nỗi buồn câm lặng của kiếp nhân sinh.",
            "Từng thước phim trôi qua lặng lẽ như những giọt mưa đêm rơi vào lòng phố cổ, đánh thức những ký ức ngủ quên từ thuở xa xôi.",
            "Sự cô độc của các nhân vật được lột tả một cách đầy nghệ thuật và tinh tế, chạm đến những góc khuất thầm kín nhất của tâm hồn.",
            "Âm nhạc nâng đỡ cảm xúc bay bổng vào khoảng không gian tĩnh lặng, vẽ nên những nét vẽ lãng mạn giữa thực tại khắc nghiệt."
        ],
        "geek": [
            "Bố cục hình ảnh của [Title] sử dụng quy tắc một phần ba và đường dẫn hướng cực kỳ điêu luyện. Kỹ thuật color grading cũng rất xuất sắc.",
            "Tần số âm trầm (sub-bass) trong các phân cảnh hành động được thiết kế rất tốt, tạo độ nén và độ động hoàn hảo cho hệ thống loa rạp.",
            "Cảnh quay slow-motion có độ sâu trường ảnh (depth of field) cực mỏng, làm nổi bật biểu cảm nhân vật mà không bị nhòe chi tiết bối cảnh.",
            "Sự kết hợp giữa ống kính anamorphic và hiệu ứng flare ánh sáng mang lại chất điện ảnh hoài cổ rất rõ nét.",
            "Kịch bản phân cảnh (storyboard) của phim có tính nhịp điệu cao, cắt cảnh (cutting rate) tương thích hoàn hảo với nhịp điệu âm nhạc."
        ]
    };

    const reviewComments = movieKeywords[reviewId] || { comments: ["Bài viết review rất hay và bổ ích, cảm ơn Jamie nhé!"] };
    const result = [];
    
    // Helper to dynamically inject laughing and smiling emojis to make comments lively
    function addEmojiVibe(text) {
        if (seededRandom() > 0.45) {
            const emojiVibes = [
                " 😂", " 🤣", " 😄", " 😆", " 😊", " 😂🤣", " 🤣🍿", " 😄🎬", 
                " 🥰", " 😍", " 👍", " 🤪", " 😜", " 😭", " 🥺", " 💀", " 🔥", " ❤️", " 👏", " 🤣🎬", " 😆🙌", " 🥰✨"
            ];
            const emoji = emojiVibes[Math.floor(seededRandom() * emojiVibes.length)];
            if (text.endsWith(".")) {
                return text.slice(0, -1) + emoji;
            } else if (text.endsWith("!")) {
                return text.slice(0, -1) + emoji;
            }
            return text + emoji;
        }
        return text;
    }
    
    // 1. Add movie-specific comments drawing from unique authors list
    reviewComments.comments.forEach((c, idx) => {
        result.push({
            author: authorsList[idx],
            comment: addEmojiVibe(c),
            rating: Math.floor(seededRandom() * 2) + 4, // 4 or 5 stars
            date: dates[idx % dates.length]
        });
    });
    
    // 2. Add dynamic persona comments to reach 35 - 45 comments
    const targetCount = 35 + Math.floor(seededRandom() * 11);
    let index = result.length;
    const styles = ["funny", "teen", "conspiracy", "novelist", "geek"];
    
    while (result.length < targetCount) {
        const style = styles[index % styles.length];
        const templates = generalTemplates[style];
        const rawTemplate = templates[Math.floor(seededRandom() * templates.length)];
        const commentText = rawTemplate.replace("[Title]", review.title);
        
        result.push({
            author: authorsList[index],
            comment: addEmojiVibe(commentText),
            rating: Math.floor(seededRandom() * 3) + 3, // 3, 4, or 5 stars
            date: dates[(index + 5) % dates.length]
        });
        
        index++;
    }
    
    return result;
}

const DEFAULT_COMMENTS = {};

// ==========================================================================
// LOCAL STORAGE COMMENTS V3 (FORCED CLEAN CACHE KEY)
// ==========================================================================

function getComments(reviewId) {
    let allComments = JSON.parse(localStorage.getItem("jamie_comments_v3"));
    if (!allComments) {
        allComments = {};
    }
    if (!allComments[reviewId] || allComments[reviewId].length < 30) {
        allComments[reviewId] = generateDynamicComments(reviewId);
        localStorage.setItem("jamie_comments_v3", JSON.stringify(allComments));
    }
    return allComments[reviewId] || [];
}

function saveComment(reviewId, commentObj) {
    let allComments = JSON.parse(localStorage.getItem("jamie_comments_v3"));
    if (!allComments) {
        allComments = {};
    }
    if (!allComments[reviewId]) {
        allComments[reviewId] = generateDynamicComments(reviewId);
    }
    allComments[reviewId].unshift(commentObj);
    localStorage.setItem("jamie_comments_v3", JSON.stringify(allComments));
}

// ==========================================================================
// GAMIFICATION STATE (XP & BADGES CONTROLLER)
// ==========================================================================

let userXp = parseInt(localStorage.getItem("jamie_critic_xp")) || 0;
let unlockedBadges = JSON.parse(localStorage.getItem("jamie_critic_badges")) || [];
let visitedReviews = JSON.parse(localStorage.getItem("jamie_visited_reviews")) || [];
let isLuckySpun = localStorage.getItem("jamie_lucky_spun") === "true";

function addXp(amount, silent = false) {
    userXp += amount;
    localStorage.setItem("jamie_critic_xp", userXp);
    updateAchievementsDashboard();
    if (!silent) {
        showToast(`⊕ +${amount} XP được cộng!`, "success");
    }
}

function unlockBadge(badgeId, badgeName) {
    const code = badgeId.replace("badge-", "");
    if (unlockedBadges.includes(code)) return;
    
    unlockedBadges.push(code);
    localStorage.setItem("jamie_critic_badges", JSON.stringify(unlockedBadges));
    
    // Confetti explosion
    triggerConfettiExplosion();
    
    // Add XP silently to avoid double toast
    addXp(100, true);
    
    // Single rich badge notification
    showBadgeUnlockToast(badgeName);
    updateAchievementsDashboard();
}

function showBadgeUnlockToast(badgeName) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast success";
    toast.innerHTML = `
        <i class="fa-solid fa-trophy" style="font-size:1.4rem;color:#f59e0b;flex-shrink:0;"></i>
        <div style="display:flex;flex-direction:column;gap:3px;">
            <span style="font-family:var(--font-cyber);font-size:0.65rem;color:var(--color-accent-amber);letter-spacing:.12em;text-transform:uppercase;">🏅 Huy Hiệu Mới Mở Khóa!</span>
            <span style="font-weight:700;font-size:0.95rem;">${badgeName}</span>
            <span style="font-family:var(--font-cyber);font-size:0.7rem;color:var(--color-accent-cyan);">⊕ +100 XP</span>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("fade-out");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 4500);
}

function updateAchievementsDashboard() {
    const xpDisplay = document.getElementById("critic-xp");
    const rankDisplay = document.getElementById("critic-rank");
    const fill = document.getElementById("xp-progress-bar");
    
    if (xpDisplay) xpDisplay.textContent = userXp.toLocaleString('vi-VN');
    
    let rankName = "TÂN BINH CRITIC";
    let nextXpLimit = 200;
    let baseLevelXp = 0;
    
    if (userXp >= 1000) {
        rankName = "CRITIC HUYỀN THOẠI [MAX]";
        nextXpLimit = 1000;
        baseLevelXp = 1000;
    } else if (userXp >= 600) {
        rankName = "CHUYÊN GIA PHÂN TÍCH";
        nextXpLimit = 1000;
        baseLevelXp = 600;
    } else if (userXp >= 200) {
        rankName = "CƠ KHÍ CRITIC BẬC II";
        nextXpLimit = 600;
        baseLevelXp = 200;
    }
    
    if (rankDisplay) rankDisplay.textContent = rankName;
    
    if (fill) {
        const percent = Math.min(100, ((userXp - baseLevelXp) / (nextXpLimit - baseLevelXp)) * 100);
        fill.style.width = percent + "%";
    }
    
    // Unlock badges check
    unlockedBadges.forEach(code => {
        const el = document.getElementById("badge-" + code);
        if (el) {
            el.classList.remove("locked");
            el.classList.add("unlocked");
        }
    });
}

function trackReviewVisit(reviewId) {
    if (!visitedReviews.includes(reviewId)) {
        visitedReviews.push(reviewId);
        localStorage.setItem("jamie_visited_reviews", JSON.stringify(visitedReviews));
        addXp(30); // Read review awards 30 XP
    }
    
    if (visitedReviews.length >= 3) {
        unlockBadge("badge-hawkeye", "Mắt Diều Hâu");
    }
}

// ==========================================================================
// DOM INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Render components
    updateHeroStats();
    renderWeeklyCharts();
    renderReviewsFeed();
    renderRankingSidebar();
    
    // Initialize dashboard
    updateAchievementsDashboard();
    
    // Setup controls
    setupThemeController();
    setupMobileNav();
    setupChartTabs();
    setupFiltersAndSearch();
    setupContactForm();
    setupNavScrollEffect();
    setupModalEvents();
    setupTrailerEvents();
    
    // Setup scrollytelling & animations
    setupCustomCursor();
    setupScrollytelling();
    renderQuizStep();
    
    // Setup gamified widgets
    setupAmbientMusicSynth();
    setupLuckyWheel();
    setupScrollTriggerLuckyModal();
});

function updateHeroStats() {
    const mvsCount = INITIAL_REVIEWS.filter(r => r.type === "mv").length + 145;
    const moviesCount = INITIAL_REVIEWS.filter(r => r.type === "movie").length + 115;
    
    const mvEl = document.getElementById("stat-mvs");
    const movieEl = document.getElementById("stat-movies");
    if (mvEl) mvEl.innerHTML = `<i class="fa-solid fa-compact-disc gear-icon"></i> ` + mvsCount + "+";
    if (movieEl) movieEl.innerHTML = `<i class="fa-solid fa-film"></i> ` + moviesCount + "+";
}

// ==========================================================================
// RENDER WEEKLY CHARTS
// ==========================================================================

const MUSIC_CHART_DATA = [
    { rank: "01", title: "Synthwave Dream", artist: "The Midnight Project", rating: 9.5, verdict: "Siêu phẩm", verdictClass: "verdict-masterpiece", poster: "assets/poster_synthwave.png", id: "mv-synthwave-dream" },
    { rank: "02", title: "Neon Rain (Mưa Ánh Sáng)", artist: "Lumina Glow ft. DJ Shadow", rating: 9.0, verdict: "Hình ảnh đỉnh", verdictClass: "verdict-visuals", poster: "assets/poster_neon_rain.png", id: "mv-neon-rain" },
    { rank: "03", title: "Gieo Quẻ", artist: "Hoàng Thùy Linh ft. Đen", rating: 8.8, verdict: "Độc lạ", verdictClass: "verdict-great", poster: "assets/poster_huonghoabay_v2.png", id: "mv-huong-hoa-bay" }
];

const MOVIE_CHART_DATA = [
    { rank: "01", title: "Shadow Protocol: Cyber City", artist: "Đạo diễn: Neo Vancamp", rating: 9.2, verdict: "Hình ảnh đỉnh", verdictClass: "verdict-visuals", poster: "assets/poster_cyber_city.png", id: "movie-shadow-protocol" },
    { rank: "02", title: "Tàng Hải Truyện", artist: "Đạo diễn: Trịnh Hiểu Long", rating: 8.5, verdict: "Ấn tượng", verdictClass: "verdict-great", poster: "assets/poster_zanghai.jpg", id: "movie-man-kich-cuoi" }
];

function renderWeeklyCharts() {
    const musicContainer = document.getElementById("music-chart-list");
    const movieContainer = document.getElementById("movie-chart-list");

    if (musicContainer) musicContainer.innerHTML = generateChartHtml(MUSIC_CHART_DATA);
    if (movieContainer) movieContainer.innerHTML = generateChartHtml(MOVIE_CHART_DATA);
}

function generateChartHtml(chartData) {
    return chartData.map(item => {
        const percentage = item.rating * 10;
        const review = INITIAL_REVIEWS.find(r => r.id === item.id);
        const trailerUrl = review ? review.trailerUrl : '';
        const trailerBtn = trailerUrl ? `
            <button class="btn-tech-secondary" onclick="openTrailerModal('${trailerUrl}')" style="margin-top: 4px; font-size: 0.8rem; display: flex; align-items: center; gap: 4px; border-color: var(--color-accent-rose); color: var(--color-accent-rose); width: 100%; justify-content: center; height: 32px;">
                <i class="fa-solid fa-circle-play"></i> Trailer
            </button>
        ` : '';
        return `
            <div class="chart-item">
                <div class="chart-rank">${item.rank}</div>
                <img src="${item.poster}" alt="${item.title}" class="chart-poster" onclick="openReviewModal('${item.id}')" style="cursor: pointer;">
                <div class="chart-details">
                    <div class="chart-title-row">
                        <h4 class="chart-title" onclick="openReviewModal('${item.id}')" style="cursor: pointer;">${item.title}</h4>
                        <span class="verdict-tag ${item.verdictClass}">${item.verdict}</span>
                    </div>
                    <p class="chart-artist">${item.artist}</p>
                    <div class="chart-score-section">
                        <div class="chart-score-bar-wrapper">
                            <div class="chart-score-bar" style="width: ${percentage}%"></div>
                        </div>
                        <span class="chart-score-num">${item.rating}/10</span>
                    </div>
                </div>
                <div class="chart-action" style="display: flex; flex-direction: column; gap: 4px; justify-content: center; align-items: stretch; min-width: 100px;">
                    <button class="btn-tech-secondary" onclick="openReviewModal('${item.id}')" style="font-size: 0.8rem; display: flex; align-items: center; gap: 4px; width: 100%; justify-content: center; height: 32px;">
                        <i class="fa-solid fa-file-invoice"></i> Đọc Review
                    </button>
                    ${trailerBtn}
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================================================
// RENDER REVIEWS GRID
// ==========================================================================

let currentFilter = "all";
let currentSearch = "";

function renderReviewsFeed() {
    const container = document.getElementById("reviews-container");
    if (!container) return;
    
    const filteredReviews = INITIAL_REVIEWS.filter(review => {
        const matchesCategory = currentFilter === "all" || review.type === currentFilter;
        const matchesSearch = review.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                              review.artist.toLowerCase().includes(currentSearch.toLowerCase()) ||
                              review.summary.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredReviews.length === 0) {
        container.innerHTML = `
            <div class="no-results-message" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-secondary);">
                <i class="fa-regular fa-folder-open" style="font-size: 3rem; margin-bottom: 16px; color: var(--color-accent-rose);"></i>
                <p>Không tìm thấy bài review nào phù hợp với tìm kiếm của bạn.</p>
            </div>
        `;
        return;
    }

    const clusters = {
        chill: { title: "Phân khúc: Chữa Lành & Bình Yên", class: "cluster-chill", icon: "fa-couch", items: [] },
        retro: { title: "Phân khúc: Retro & Hoài Cổ", class: "cluster-retro", icon: "fa-record-vinyl", items: [] },
        cyberpunk: { title: "Phân khúc: Cyberpunk & Công Nghệ", class: "cluster-hype", icon: "fa-robot", items: [] },
        mystery: { title: "Phân khúc: Bí Ẩn & Kịch Tính", class: "cluster-mystery", icon: "fa-user-secret", items: [] }
    };

    filteredReviews.forEach(review => {
        const cl = review.cluster || "chill";
        if (clusters[cl]) {
            clusters[cl].items.push(review);
        }
    });

    let html = "";
    for (const key in clusters) {
        const cluster = clusters[key];
        if (cluster.items.length > 0) {
            html += `
                <div class="cluster-header ${cluster.class}">
                    <i class="fa-solid ${cluster.icon}"></i> ${cluster.title}
                </div>
            `;
            cluster.items.forEach(review => {
                const commentsCount = review.commentsCount + getComments(review.id).length;
                const tagLabel = review.type === "mv" ? "Music Video" : "Phim Ảnh";
                const tagClass = review.type === "mv" ? "tag-mv" : "tag-movie";
                
                const matchHtml = review.matchPercentage ? `
                    <div class="match-percentage-container">
                        <div class="match-label-row">
                            <span>ĐỘ TƯƠNG THÍCH</span>
                            <span>${review.matchPercentage}%</span>
                        </div>
                        <div class="match-bar-bg">
                            <div class="match-bar-fill" style="width: ${review.matchPercentage}%"></div>
                        </div>
                    </div>
                ` : "";

                html += `
                    <article class="review-card tech-card">
                        <div class="card-media-wrapper" onclick="openReviewModal('${review.id}')" style="cursor: pointer;">
                            <span class="card-tag ${tagClass}">${tagLabel}</span>
                            <span class="card-comments-badge"><i class="fa-solid fa-comments"></i> ${commentsCount.toLocaleString('vi-VN')}</span>
                            <span class="card-score">${review.rating}/10</span>
                            <img src="${review.poster}" alt="${review.title}" class="card-img" loading="lazy">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title" onclick="openReviewModal('${review.id}')" style="cursor: pointer;">${review.title}</h3>
                            <div class="card-meta">
                                <span><i class="fa-solid fa-microphone-lines"></i> ${review.artist}</span>
                                <span><i class="fa-regular fa-calendar-days"></i> ${review.year}</span>
                            </div>
                            <p class="card-summary">${review.summary}</p>
                            
                            ${matchHtml}

                            <div class="card-footer">
                                <div style="display: flex; gap: 8px;">
                                    <button class="btn-card-link" onclick="openReviewModal('${review.id}')" style="background: none; border: none; padding: 0; color: inherit; font: inherit; cursor: pointer;">Đọc Phân Tích <i class="fa-solid fa-arrow-right"></i></button>
                                    <button class="btn-trailer" onclick="openTrailerModal('${review.trailerUrl}')">
                                        <i class="fa-solid fa-circle-play"></i> Trailer
                                    </button>
                                </div>
                                <span class="card-comments-count"><i class="fa-regular fa-comments"></i> ${commentsCount.toLocaleString('vi-VN')} Bình luận</span>
                            </div>
                        </div>
                    </article>
                `;
            });
        }
    }
    
    container.innerHTML = html;
    bindCursorHoverEvents();
}

function renderRankingSidebar() {
    const container = document.getElementById("sidebar-ranking-list");
    if (!container) return;
    
    const top5 = [...INITIAL_REVIEWS].sort((a, b) => b.rating - a.rating).slice(0, 5);
    container.innerHTML = top5.map((item, idx) => {
        const rankClass = idx === 0 ? "rank-1" : idx === 1 ? "rank-2" : idx === 2 ? "rank-3" : "rank-other";
        return `
            <div class="ranking-item" onclick="openReviewModal('${item.id}')">
                <div class="ranking-num ${rankClass}">${String(idx + 1).padStart(2, '0')}</div>
                <img src="${item.poster}" alt="${item.title}" class="ranking-poster" loading="lazy">
                <div class="ranking-info">
                    <div class="ranking-name">${item.title}</div>
                    <div class="ranking-score-row">
                        <span class="ranking-score-stars"><i class="fa-solid fa-star"></i></span>
                        <span>${item.rating}/10</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================================================
// MODAL REVIEW DETAILS
// ==========================================================================

const modalOverlay = document.getElementById("review-modal");
const modalContentArea = document.getElementById("modal-content-area");

// ==========================================================================
// QUICK SURVEY DATA & CONTROLLER
// ==========================================================================

const SURVEY_DATA = {
    "mv-synthwave-dream": {
        question: "Bạn nghĩ thông điệp chính của MV Synthwave Dream là gì?",
        a: "Sự hoài niệm về quá khứ rực rỡ và những ký ức không bao giờ phai nhạt.",
        b: "Công nghệ tương lai sẽ thay thế hoàn toàn tình cảm của con người.",
        correct: "A",
        explanation: "MV tôn vinh phong cách retro thập niên 80, đưa người xem về những con đường hoài niệm ngập tràn ký ức ngọt ngào.",
        pctA: 84, pctB: 16
    },
    "movie-shadow-protocol": {
        question: "Bạn nghĩ thông điệp chính của phim Shadow Protocol: Cyber City là gì?",
        a: "Con người cần chấp nhận cấy ghép ký ức giả để có cuộc sống hạnh phúc hơn.",
        b: "Lời cảnh báo về việc đánh mất bản ngã con người trước sự kiểm soát của công nghệ và AI.",
        correct: "B",
        explanation: "Phim lên án việc tập đoàn công nghệ kiểm soát ký ức và kêu gọi con người đấu tranh bảo vệ nhân tính thực sự.",
        pctA: 12, pctB: 88
    },
    "mv-huong-hoa-bay": {
        question: "Bạn nghĩ thông điệp chính của MV Gieo Quẻ là gì?",
        a: "Mỗi người hãy tự làm chủ cuộc đời mình, gieo quẻ chỉ là điểm tựa tinh thần cầu bình an năm mới.",
        b: "Nên hoàn toàn tin tưởng vào các quẻ bói toán để định đoạt tương lai.",
        correct: "A",
        explanation: "MV mang thông điệp tích cực: tự mình nỗ lực làm việc và gieo nhân lành thì sẽ gặt quả ngọt cuộc đời.",
        pctA: 91, pctB: 9
    },
    "movie-man-kich-cuoi": {
        question: "Bạn nghĩ thông điệp chính của phim Tàng Hải Truyện là gì?",
        a: "Sức mạnh của trí tuệ, lòng kiên trì và mưu lược trong hành trình đi tìm công lý và lẽ phải.",
        b: "Sự trả thù mù quáng bằng mọi giá, kể cả việc đánh mất đạo đức bản thân.",
        correct: "A",
        explanation: "Tàng Hải phục thù bằng mưu lược thông minh, vạch trần tội ác quan lại để đòi lại công lý cho gia tộc.",
        pctA: 87, pctB: 13
    },
    "mv-neon-rain": {
        question: "Bạn nghĩ thông điệp chính của MV Neon Rain là gì?",
        a: "Sự thăng hoa của nghệ thuật nhảy múa và ánh sáng giúp xua đi nỗi cô đơn đô thị.",
        b: "Mưa axit sẽ phá hủy các thành phố tương lai.",
        correct: "A",
        explanation: "MV kết hợp nhịp điệu Trance sôi động và các bước nhảy trong mưa để biểu đạt khát vọng tự do của con người.",
        pctA: 79, pctB: 21
    },
    "movie-little-forest": {
        question: "Bạn nghĩ thông điệp chính của phim Little Forest (Khu Rừng Nhỏ) là gì?",
        a: "Quay về thiên nhiên, tự tay trồng trọt nấu ăn để tìm lại bình yên và chữa lành tâm hồn.",
        b: "Sống ở nông thôn rất nghèo nàn và buồn tẻ, thanh niên nên bám trụ ở thành phố.",
        correct: "A",
        explanation: "Bộ phim mang lại cảm giác chữa lành sâu sắc qua cuộc sống mộc mạc và các món ăn tự làm bốn mùa ở quê nhà.",
        pctA: 93, pctB: 7
    },
    "mv-may-lang-thang": {
        question: "Bạn nghĩ thông điệp chính của phim Sing 2 là gì?",
        a: "Sự kiên trì vượt qua nỗi sợ hãi và niềm đam mê âm nhạc gắn kết mọi người.",
        b: "Chỉ những nghệ sĩ động vật nổi tiếng mới có quyền biểu diễn chuyên nghiệp.",
        correct: "A",
        explanation: "Phim truyền cảm hứng mạnh mẽ về việc kiên trì theo đuổi ước mơ ca hát và vượt qua giới hạn nỗi sợ của bản thân.",
        pctA: 88, pctB: 12
    },
    "movie-reply-1988": {
        question: "Bạn nghĩ thông điệp chính của phim Thần đèn ơi! Ước đi là gì?",
        a: "Những mong ước chân thành và tình yêu thương giữa người với người có sức mạnh kỳ diệu hơn cả phép thuật.",
        b: "Có được ba điều ước của thần đèn sẽ giải quyết được mọi bất hạnh trên đời.",
        correct: "A",
        explanation: "Tác phẩm đề cao tình cảm chân thành, thấu hiểu giữa các nhân vật hơn là các điều ước phép màu kỳ ảo.",
        pctA: 82, pctB: 18
    },
    "movie-grand-budapest": {
        question: "Bạn nghĩ thông điệp chính của phim The Grand Budapest Hotel là gì?",
        a: "Sự gìn giữ những giá trị nhân văn, lịch thiệp cổ điển giữa một thế giới đang dần suy đồi và biến động.",
        b: "Việc tranh giành tài sản thừa kế luôn mang lại kết cục có hậu cho tất cả mọi người.",
        correct: "A",
        explanation: "Khách sạn và nhân vật Gustave đại diện cho vẻ đẹp lịch lãm hoài cổ trước làn sóng chiến tranh hủy hoại châu Âu.",
        pctA: 86, pctB: 14
    },
    "mv-chuyen-mua-dong": {
        question: "Bạn nghĩ thông điệp chính của phim Hôn Nhân Hoàn Hảo là gì?",
        a: "Sức mạnh của việc tự định đoạt số phận, tìm lại hạnh phúc đích thực và đấu tranh chống lại sự lừa dối.",
        b: "Mọi cuộc hôn nhân hợp đồng đều dẫn đến sự phản bội tàn khốc.",
        correct: "A",
        explanation: "Nữ chính tái sinh để bảo vệ bản thân, đòi lại công lý từ gia đình nuôi độc ác và tìm thấy tình yêu đích thực.",
        pctA: 89, pctB: 11
    },
    "movie-mat-biec": {
        question: "Bạn nghĩ thông điệp chính của phim Mắt Biếc là gì?",
        a: "Mối tình đơn phương day dứt, chân thành nhưng đầy tiếc nuối do sự khác biệt về lối sống giữa Ngạn và Hà Lan.",
        b: "Hà Lan là người ích kỷ và Ngạn nên quên cô ấy ngay từ đầu để không đau khổ.",
        correct: "A",
        explanation: "Tác phẩm khắc họa tình cảm sâu nặng của Ngạn và nỗi buồn chia ly gắn liền với làng Đo Đo yên bình và phố thị Huế.",
        pctA: 85, pctB: 15
    },
    "movie-blade-runner-2049": {
        question: "Bạn nghĩ thông điệp chính của phim Blade Runner 2049 là gì?",
        a: "Nhân tính không nằm ở nguồn gốc sinh học mà nằm ở hành động biết hy sinh vì nghĩa cử cao đẹp.",
        b: "Người nhân bản (Replicants) mãi mãi chỉ là công cụ vô hồn và không thể có tâm hồn.",
        correct: "A",
        explanation: "Sĩ quan K hy sinh cuộc sống của mình để bảo vệ đứa trẻ kỳ diệu, chứng minh anh có nhân tính và linh hồn thực sự.",
        pctA: 92, pctB: 8
    },
    "mv-cyber-love-2088": {
        question: "Bạn nghĩ thông điệp chính của MV Cyber Love 2088 là gì?",
        a: "Tình yêu đích thực vượt qua ranh giới giữa sinh học và máy móc công nghệ.",
        b: "Người máy AI luôn phản bội con người ở thế giới tương lai.",
        correct: "A",
        explanation: "MV biểu đạt tình cảm lãng mạn lôi cuốn giữa một hacker và một người máy AI trong bối cảnh cyberpunk hoáng tráng.",
        pctA: 81, pctB: 19
    },
    "movie-parasite": {
        question: "Bạn nghĩ thông điệp chính của phim Parasite (Ký Sinh Trùng) là gì?",
        a: "Sự phân hóa giàu nghèo sâu sắc trong xã hội tạo nên những bức tường vô hình ngăn cách và khiến con người giẫm đạp lên nhau để sinh tồn.",
        b: "Chỉ cần siêng năng làm việc thì người nghèo chắc chắn sẽ có cơ hội đổi đời.",
        correct: "A",
        explanation: "Bộ phim châm biếm sâu sắc sự bất bình đẳng xã hội ở Hàn Quốc và bi kịch xung đột của các tầng lớp nghèo khó.",
        pctA: 90, pctB: 10
    },
    "mv-con-mua-ngang-qua": {
        question: "Bạn nghĩ thông điệp chính của phim Kẻ Ăn Hồn là gì?",
        a: "Sự tham lam, ác độc và oán hận trong lòng người còn đáng sợ hơn cả tà thuật và ma quỷ.",
        b: "Luyện rượu sọ người là cách duy nhất để đạt được sự giàu sang phú quý.",
        correct: "A",
        explanation: "Tác phẩm kinh dị dân gian truyền tải thông điệp về luật nhân quả, quả báo nhãn tiền từ lòng tham tàn ác của con người.",
        pctA: 88, pctB: 12
    }
};

window.renderSurvey = function(reviewId) {
    const container = document.getElementById("survey-card-container");
    if (!container) return;
    
    const survey = SURVEY_DATA[reviewId];
    if (!survey) {
        container.style.display = "none";
        return;
    }
    
    container.style.display = "block";
    const answered = localStorage.getItem("jamie_survey_answered_" + reviewId);
    
    if (answered) {
        const isA = answered === "A";
        const isB = answered === "B";
        const correctOpt = survey.correct;
        const userCorrect = answered === correctOpt;
        
        container.innerHTML = `
            <div class="quick-survey-card">
                <div class="survey-title"><i class="fa-solid fa-square-poll-vertical"></i> KHẢO SÁT NHANH (ĐÃ HOÀN THÀNH)</div>
                <div class="survey-question">${survey.question}</div>
                <div class="survey-result-box">
                    <div class="survey-result-row ${correctOpt === 'A' ? 'correct-choice' : ''} ${answered === 'A' && !userCorrect ? 'incorrect-choice' : ''}">
                        <div class="survey-result-pct-bg" style="width: ${survey.pctA}%"></div>
                        <div class="survey-result-content">
                            <span class="survey-result-label">A. ${survey.a}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                ${isA ? '<span class="survey-badge selected">Của Bạn</span>' : ''}
                                ${correctOpt === 'A' ? '<span class="survey-badge correct">Đúng</span>' : ''}
                                <span class="survey-result-pct">${survey.pctA}%</span>
                            </div>
                        </div>
                    </div>
                    <div class="survey-result-row ${correctOpt === 'B' ? 'correct-choice' : ''} ${answered === 'B' && !userCorrect ? 'incorrect-choice' : ''}">
                        <div class="survey-result-pct-bg" style="width: ${survey.pctB}%"></div>
                        <div class="survey-result-content">
                            <span class="survey-result-label">B. ${survey.b}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                ${isB ? '<span class="survey-badge selected">Của Bạn</span>' : ''}
                                ${correctOpt === 'B' ? '<span class="survey-badge correct">Đúng</span>' : ''}
                                <span class="survey-result-pct">${survey.pctB}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="survey-explanation" style="margin-top: 20px;">
                    <div class="survey-status-toast ${userCorrect ? 'correct' : 'incorrect'}">
                        ${userCorrect ? '<i class="fa-solid fa-circle-check"></i> Chính xác! Bạn đã được cộng điểm XP.' : '<i class="fa-solid fa-circle-xmark"></i> Chưa chính xác! Hãy đọc kỹ lý giải bên dưới nhé.'}
                    </div>
                    <p><strong>Lý giải của Jamie:</strong> ${survey.explanation}</p>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="quick-survey-card">
                <div class="survey-title"><i class="fa-solid fa-square-poll-vertical"></i> KHẢO SÁT NHANH</div>
                <p style="font-size:0.8rem; color:var(--color-text-secondary); margin-bottom:12px;">Đọc xong bài viết phân tích, hãy thử trả lời câu hỏi dưới đây để được cộng điểm XP!</p>
                <div class="survey-question">${survey.question}</div>
                <div class="survey-options">
                    <button class="survey-opt-btn" onclick="submitSurveyAnswer('${reviewId}', 'A')">
                        <span>A. ${survey.a}</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <button class="survey-opt-btn" onclick="submitSurveyAnswer('${reviewId}', 'B')">
                        <span>B. ${survey.b}</span>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
    }
    bindCursorHoverEvents();
};

window.submitSurveyAnswer = function(reviewId, option) {
    const survey = SURVEY_DATA[reviewId];
    if (!survey) return;
    
    localStorage.setItem("jamie_survey_answered_" + reviewId, option);
    const correctOpt = survey.correct;
    // Random XP between 50 and 100
    const xpReward = Math.floor(Math.random() * 51) + 50;
    
    if (option === correctOpt) {
        addXp(xpReward);
        showToast(`💡 Trả lời chính xác! Bạn được cộng +${xpReward} XP!`, "success");
    } else {
        showToast("💡 Chưa chính xác. Xem lại lý giải từ chuyên gia nhé!", "info");
    }
    
    renderSurvey(reviewId, xpReward);
};

window.openReviewModal = function(reviewId) {
    const review = INITIAL_REVIEWS.find(r => r.id === reviewId);
    if (!review) return;

    trackReviewVisit(reviewId);

    const comments = getComments(reviewId);
    const totalCommentsCount = review.commentsCount + comments.length;
    const tagLabel = review.type === "mv" ? "Music Video" : "Phim Điện Ảnh";
    
    const getStars = (count) => {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < count ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
        }
        return stars;
    };

    modalContentArea.innerHTML = `
        <div class="modal-header-section">
            <h2 class="modal-title">${review.title}</h2>
            <div class="modal-meta-row">
                <span class="modal-rating-badge"><i class="fa-solid fa-circle-play"></i> ${tagLabel}</span>
                <span><i class="fa-solid fa-user-pen"></i> Tác giả: <strong>Jamie Kirumato</strong></span>
                <span><i class="fa-solid fa-calendar-days"></i> Năm phát hành: ${review.year}</span>
                <span><i class="fa-solid fa-chart-line"></i> Điểm số: <strong>${review.rating}/10</strong></span>
            </div>
        </div>

        <div class="cinema-player-wrapper">
            <img src="${review.poster}" alt="Player backdrop" class="cinema-poster">
            <div class="cinema-overlay">
                <div class="play-circle" onclick="openTrailerModal('${review.trailerUrl}')">
                    <i class="fa-solid fa-play"></i>
                </div>
                <div class="cinema-text">PREVIEW TRAILER / MUSIC VIDEO CHANNEL</div>
            </div>
        </div>

        <div class="score-breakdown-card">
            <h3 class="breakdown-title"><i class="fa-solid fa-circle-info"></i> Điểm Số Chi Tiết</h3>
            <div class="breakdown-grid">
                <div class="breakdown-item">
                    <div class="breakdown-label-row">
                        <span>Hình Ảnh / Mỹ Thuật (Visuals)</span>
                        <span>${review.scores.visuals}/10</span>
                    </div>
                    <div class="breakdown-score-bar-wrapper">
                        <div class="breakdown-score-bar" style="width: ${review.scores.visuals * 10}%; background-color: var(--color-accent-cyan)"></div>
                    </div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label-row">
                        <span>Âm Thanh / Âm Nhạc (Sound)</span>
                        <span>${review.scores.sound}/10</span>
                    </div>
                    <div class="breakdown-score-bar-wrapper">
                        <div class="breakdown-score-bar" style="width: ${review.scores.sound * 10}%; background-color: var(--color-accent-violet)"></div>
                    </div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label-row">
                        <span>Kịch Bản / Cốt Truyện (Story)</span>
                        <span>${review.scores.story}/10</span>
                    </div>
                    <div class="breakdown-score-bar-wrapper">
                        <div class="breakdown-score-bar" style="width: ${review.scores.story * 10}%; background-color: var(--color-accent-rose)"></div>
                    </div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label-row">
                        <span>Ý Tưởng / Sáng Tạo (Concept)</span>
                        <span>${review.scores.concept}/10</span>
                    </div>
                    <div class="breakdown-score-bar-wrapper">
                        <div class="breakdown-score-bar" style="width: ${review.scores.concept * 10}%; background-color: var(--color-accent-emerald)"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="review-text-content">
            ${review.content}
        </div>

        <!-- QUICK SURVEY CONTAINER -->
        <div id="survey-card-container"></div>

        <div class="comments-section-container">
            <h3 class="comments-header-title"><i class="fa-regular fa-comments"></i> Bình Luận Từ Độc Giả (${totalCommentsCount.toLocaleString('vi-VN')})</h3>
            
            <div class="comments-list" id="modal-comments-list">
                ${comments.map(c => `
                    <div class="comment-item">
                        <div class="comment-head">
                            <span class="comment-author">${c.author}</span>
                            <span class="comment-rating-stars">${getStars(c.rating)}</span>
                        </div>
                        <p class="comment-body">${c.comment}</p>
                        <span class="comment-date"><i class="fa-regular fa-clock"></i> ${c.date}</span>
                    </div>
                `).join('')}
            </div>

            <div class="comment-form-box">
                <h4 class="comment-form-title"><i class="fa-regular fa-pen-to-square"></i> Viết Bình Luận Của Bạn</h4>
                <form id="submit-comment-form" onsubmit="handleCommentSubmit(event, '${reviewId}')">
                    <div class="comment-form-grid">
                        <input type="text" id="comment-username" placeholder="Tên hiển thị của bạn..." required>
                        <select id="comment-stars" required>
                            <option value="5">⭐⭐⭐⭐⭐ (5 sao - Xuất sắc)</option>
                            <option value="4">⭐⭐⭐⭐ (4 sao - Rất tốt)</option>
                            <option value="3">⭐⭐⭐ (3 sao - Trung bình)</option>
                            <option value="2">⭐⭐ (2 sao - Kém)</option>
                            <option value="1">⭐ (1 sao - Rất kém)</option>
                        </select>
                    </div>
                    <textarea id="comment-text" rows="3" placeholder="Nhập suy nghĩ, cảm nhận của bạn về tác phẩm hoặc bài viết review này..." required></textarea>
                    <button type="submit" class="btn-tech btn-comment-submit">Gửi Bình Luận <i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    `;

    // Reset survey state so user can re-take it each time they open the review
    localStorage.removeItem("jamie_survey_answered_" + reviewId);

    renderSurvey(reviewId);

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    bindCursorHoverEvents();
};

window.handleCommentSubmit = function(event, reviewId) {
    event.preventDefault();
    const nameInput = document.getElementById("comment-username");
    const starsSelect = document.getElementById("comment-stars");
    const commentText = document.getElementById("comment-text");

    const newComment = {
        author: nameInput.value.trim(),
        comment: commentText.value.trim(),
        rating: parseInt(starsSelect.value),
        date: "Vừa xong"
    };

    saveComment(reviewId, newComment);
    openReviewModal(reviewId);
    renderReviewsFeed();
    addXp(15);
    showToast("Gửi bình luận thành công! Cảm ơn ý kiến của bạn.", "success");
};

function setupModalEvents() {
    const closeBtn = document.getElementById("modal-close-btn");
    if (!closeBtn) return;
    
    closeBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
    });

    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
            modalOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

// ==========================================================================
// FLUID THEME CONTROLLER
// ==========================================================================

function setupThemeController() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (!themeToggleBtn) return;
    
    const savedTheme = localStorage.getItem("jamie_theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const currentTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
        localStorage.setItem("jamie_theme", currentTheme);
    });
}

// ==========================================================================
// YOUTUBE BG MUSIC PLAYER SYSTEM
// ==========================================================================

let ytPlayer = null;
let isYtPlaying = false;
let userHasInteracted = false;

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('youtube-audio-player', {
        height: '0',
        width: '0',
        videoId: 'Fp5ghKduTK8',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': 'Fp5ghKduTK8',
            'mute': 0,
            'playsinline': 1,
            'disablekb': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
};

function onPlayerReady(event) {
    if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
        ytPlayer.setVolume(20);
    }
    const isMuted = localStorage.getItem("jamie_music_muted") === "true";
    if (!isMuted) {
        setupAutoplayInteractions();
    }
}

function onPlayerStateChange(event) {
    const musicBtn = document.getElementById("music-toggle");
    if (!musicBtn) return;
    
    if (event.data === YT.PlayerState.PLAYING) {
        isYtPlaying = true;
        musicBtn.classList.add("playing");
        musicBtn.title = "Tắt nhạc nền";
    } else {
        isYtPlaying = false;
        musicBtn.classList.remove("playing");
        musicBtn.title = "Bật nhạc nền";
    }
}

function setupAutoplayInteractions() {
    const startPlay = () => {
        if (userHasInteracted) return;
        userHasInteracted = true;
        
        if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
            ytPlayer.playVideo();
        }
        
        document.removeEventListener("click", startPlay);
        document.removeEventListener("touchstart", startPlay);
        document.removeEventListener("keydown", startPlay);
        document.removeEventListener("scroll", startPlay);
    };
    document.addEventListener("click", startPlay);
    document.addEventListener("touchstart", startPlay);
    document.addEventListener("keydown", startPlay);
    document.addEventListener("scroll", startPlay);
}

function setupAmbientMusicSynth() {
    const musicBtn = document.getElementById("music-toggle");
    if (!musicBtn) return;
    
    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!ytPlayer || typeof ytPlayer.playVideo !== 'function') return;
        
        if (isYtPlaying) {
            ytPlayer.pauseVideo();
            localStorage.setItem("jamie_music_muted", "true");
        } else {
            ytPlayer.playVideo();
            localStorage.removeItem("jamie_music_muted");
        }
    });
}

// ==========================================================================
// ROTATING FUTURISTIC CUSTOM CURSORS & SPARKLES CANVAS
// ==========================================================================

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let lastMouseX = 0, lastMouseY = 0;
let cursorStyleIndex = 0;
let activeMovementTime = 0;
let lastTimestamp = 0;

const CURSOR_SVGS = [
    `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10L90 85L50 68L10 85L50 10Z" stroke="var(--color-accent-cyan)" stroke-width="5" fill="rgba(6, 182, 212, 0.15)" stroke-linejoin="round"/>
        <line x1="50" y1="22" x2="50" y2="60" stroke="var(--color-accent-cyan)" stroke-width="4"/>
    </svg>`,
    `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 90C45 90 70 70 85 45C55 55 45 40 40 15C35 45 15 65 20 90Z" stroke="var(--color-accent-rose)" stroke-width="5" fill="rgba(244, 63, 94, 0.15)" stroke-linejoin="round"/>
        <circle cx="25" cy="85" r="4" fill="var(--color-accent-rose)"/>
    </svg>`,
    `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15L85 50L50 85L15 50L50 15Z" stroke="var(--color-accent-violet)" stroke-width="5" fill="rgba(168, 85, 247, 0.15)" stroke-linejoin="round"/>
        <path d="M50 15V85M15 50H85" stroke="var(--color-accent-violet)" stroke-width="2" stroke-dasharray="3 3"/>
    </svg>`,
    `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="var(--color-accent-emerald)" stroke-width="5" fill="rgba(16, 185, 129, 0.15)"/>
        <circle cx="50" cy="50" r="10" stroke="var(--color-accent-emerald)" stroke-width="3"/>
        <line x1="50" y1="5" x2="50" y2="95" stroke="var(--color-accent-emerald)" stroke-width="2" stroke-dasharray="2 2"/>
        <line x1="5" y1="50" x2="95" y2="50" stroke="var(--color-accent-emerald)" stroke-width="2" stroke-dasharray="2 2"/>
    </svg>`
];

const CURSOR_DOT_COLORS = [
    "var(--color-accent-cyan)",
    "var(--color-accent-rose)",
    "var(--color-accent-violet)",
    "var(--color-accent-emerald)"
];

function setupCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    if (!ring || !dot) return;

    ring.innerHTML = CURSOR_SVGS[0];
    dot.style.backgroundColor = CURSOR_DOT_COLORS[0];

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";

        if (window.innerWidth >= 992) {
            spawnParticles(mouseX, mouseY);
        }
    });

    function animateCursor(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";

        const dx = mouseX - lastMouseX;
        const dy = mouseY - lastMouseY;
        const velocity = Math.hypot(dx, dy);
        
        if (velocity > 0.5) {
            activeMovementTime += delta;
            
            if (activeMovementTime >= 5000) {
                rotateCursorType();
                activeMovementTime = 0;
            }
        }
        
        lastMouseX = mouseX;
        lastMouseY = mouseY;

        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    function rotateCursorType() {
        const ring = document.getElementById("cursor-ring");
        const dot = document.getElementById("cursor-dot");
        if (!ring || !dot) return;
        
        ring.classList.add("cursor-glitch-active");
        setTimeout(() => {
            ring.classList.remove("cursor-glitch-active");
        }, 300);

        cursorStyleIndex = (cursorStyleIndex + 1) % CURSOR_SVGS.length;
        
        ring.innerHTML = CURSOR_SVGS[cursorStyleIndex];
        dot.style.backgroundColor = CURSOR_DOT_COLORS[cursorStyleIndex];
    }

    bindCursorHoverEvents();

    let particles = [];
    let confetti = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2 - 0.4;
            this.size = Math.random() * 3 + 1.2;
            this.alpha = 1.0;
            this.decay = Math.random() * 0.02 + 0.015;
            
            const colors = [
                "var(--color-accent-cyan)",
                "var(--color-accent-violet)",
                "var(--color-accent-rose)"
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay;
            this.size = Math.max(0.1, this.size - 0.02);
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 6;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    class ConfettiPiece {
        constructor(x, y, vx, vy, color) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.width = Math.random() * 8 + 6;
            this.height = Math.random() * 12 + 8;
            this.color = color;
            this.alpha = 1.0;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 8;
            this.gravity = 0.35;
        }

        update() {
            this.x += this.vx;
            this.vy += this.gravity;
            this.y += this.vy;
            this.rotation += this.rotationSpeed;
            
            if (this.y > window.innerHeight - 50) {
                this.alpha -= 0.02;
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
            ctx.restore();
        }
    }

    function spawnParticles(x, y) {
        for (let i = 0; i < 2; i++) {
            particles.push(new Particle(x, y));
        }
    }

    window.triggerConfettiExplosion = function() {
        const colors = ["#06b6d4", "#a855f7", "#f43f5e", "#10b981", "#f59e0b"];
        const h = window.innerHeight;
        const w = window.innerWidth;
        
        for (let i = 0; i < 40; i++) {
            const vx = Math.random() * 8 + 4;
            const vy = -(Math.random() * 12 + 12);
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.push(new ConfettiPiece(50, h, vx, vy, color));
        }
        for (let i = 0; i < 40; i++) {
            const vx = -(Math.random() * 8 + 4);
            const vy = -(Math.random() * 12 + 12);
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.push(new ConfettiPiece(w - 50, h, vx, vy, color));
        }
    };

    function animateParticlesLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw();
            if (p.alpha <= 0 || p.size <= 0.2) {
                particles.splice(i, 1);
            }
        }
        for (let i = confetti.length - 1; i >= 0; i--) {
            const c = confetti[i];
            c.update();
            c.draw();
            if (c.alpha <= 0 || c.y > window.innerHeight) {
                confetti.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animateParticlesLoop);
    }
    requestAnimationFrame(animateParticlesLoop);
}

function bindCursorHoverEvents() {
    const interactiveElements = document.querySelectorAll(
        "a, button, select, textarea, input, .review-card, .tab-btn, .social-link, .modal-close, .quiz-opt-btn, .music-toggle-btn, .theme-toggle-btn"
    );
    const ring = document.getElementById("cursor-ring");

    if (!ring) return;

    interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", addHoverClass);
        el.removeEventListener("mouseleave", removeHoverClass);
        el.addEventListener("mouseenter", addHoverClass);
        el.addEventListener("mouseleave", removeHoverClass);
    });

    function addHoverClass() {
        ring.classList.add("cursor-hover");
    }

    function removeHoverClass() {
        ring.classList.remove("cursor-hover");
    }
}

window.bindCursorHoverEvents = bindCursorHoverEvents;

// ==========================================================================
// SCROLL THROTTLING & SCROLLYTELLING
// ==========================================================================

function setupScrollytelling() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const progressBar = document.getElementById("reading-progress");
    const heroImage = document.querySelector(".avatar-tech-frame");
    const blobs = document.querySelectorAll(".floating-blob");

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.01
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    let isScrolling = false;

    window.addEventListener("scroll", () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                const documentHeight = document.documentElement.scrollHeight;
                const viewportHeight = window.innerHeight;
                const maxScroll = documentHeight - viewportHeight;
                
                if (progressBar && maxScroll > 0) {
                    const scrollPercent = (scrolled / maxScroll) * 100;
                    progressBar.style.width = scrollPercent + "%";
                }

                if (heroImage && window.innerWidth >= 992) {
                    heroImage.style.transform = `translate3d(0, ${scrolled * 0.1}px, 0)`;
                }

                blobs.forEach((blob, idx) => {
                    const speed = (idx + 1) * 0.08;
                    blob.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
                });
                
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });
}

// ==========================================================================
// SCROLL-TRIGGERED POPUP & INTERACTIVE LUCKY WHEEL
// ==========================================================================

function setupScrollTriggerLuckyModal() {
    let isScrolling = false;
    
    window.addEventListener("scroll", function handleScrollTrigger() {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                
                if (docHeight > 0 && (scrolled / docHeight) >= 0.70) {
                    const hasShown = localStorage.getItem("jamie_lucky_shown");
                    if (!hasShown) {
                        localStorage.setItem("jamie_lucky_shown", "true");
                        openLuckyModal();
                    }
                    window.removeEventListener("scroll", handleScrollTrigger);
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
}

function openLuckyModal() {
    const luckyModal = document.getElementById("lucky-modal");
    if (!luckyModal) return;
    
    luckyModal.classList.add("active");
    document.body.style.overflow = "hidden";
    
    setTimeout(() => {
        if (window.drawLuckyWheelInstance) {
            window.drawLuckyWheelInstance();
        }
    }, 50);
    
    bindCursorHoverEvents();
}

function setupLuckyWheel() {
    const luckyModal = document.getElementById("lucky-modal");
    const closeBtn = document.getElementById("lucky-close-btn");
    const fabBtn = document.getElementById("lucky-fab");
    const spinBtn = document.getElementById("spin-btn");
    const wheel = document.getElementById("wheel-element");
    const resultText = document.getElementById("lucky-result-text");
    const canvas = document.getElementById("wheel-canvas");
    
    if (!luckyModal || !canvas || !spinBtn) return;
    const ctx = canvas.getContext("2d");

    fabBtn.addEventListener("click", openLuckyModal);

    closeBtn.addEventListener("click", () => {
        luckyModal.classList.remove("active");
        document.body.style.overflow = "";
    });

    luckyModal.addEventListener("click", (e) => {
        if (e.target === luckyModal) {
            luckyModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    const prizes = [
        "🎖️ Độc Giả VIP",
        "🎟️ Vé Phim 50%",
        "🔐 Review Mật",
        "⭐ Huy Hiệu May Mắn",
        "🎁 Phần Quà Bí Ẩn",
        "🍀 Chúc May Mắn"
    ];

    const colors = [
        "#1e1b4b", "#0c2340", "#1a0d2e", "#0d1f14", "#2d1a00", "#200d1a"
    ];
    const accentColors = [
        "#a855f7", "#06b6d4", "#f43f5e", "#10b981", "#f59e0b", "#e879f9"
    ];

    function drawWheel() {
        const numSlices = prizes.length;
        const sliceAngle = (2 * Math.PI) / numSlices;
        const radius = canvas.width / 2;
        ctx.clearRect(0,0, canvas.width, canvas.height);

        for (let i = 0; i < numSlices; i++) {
            const startAngle = i * sliceAngle;
            const endAngle = startAngle + sliceAngle;

            const midAngle = startAngle + sliceAngle / 2;
            const gx = radius + Math.cos(midAngle) * (radius * 0.5);
            const gy = radius + Math.sin(midAngle) * (radius * 0.5);
            const grad = ctx.createRadialGradient(radius, radius, 10, gx, gy, radius);
            grad.addColorStop(0, colors[i]);
            grad.addColorStop(1, accentColors[i] + "55");

            ctx.beginPath();
            ctx.moveTo(radius, radius);
            ctx.arc(radius, radius, radius - 4, startAngle, endAngle);
            ctx.closePath();
            
            ctx.fillStyle = grad;
            ctx.fill();
            
            ctx.strokeStyle = accentColors[i];
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.save();
            ctx.translate(radius, radius);
            ctx.rotate(startAngle + sliceAngle / 2);
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.shadowColor = accentColors[i];
            ctx.shadowBlur = 6;
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 8px 'Orbitron', sans-serif";
            ctx.fillText(prizes[i], radius - 12, 0);
            ctx.shadowBlur = 0;
            ctx.restore();
        }

        const capGrad = ctx.createRadialGradient(radius, radius, 0, radius, radius, 25);
        capGrad.addColorStop(0, "#2a2a3e");
        capGrad.addColorStop(1, "#0f0f1a");
        ctx.beginPath();
        ctx.arc(radius, radius, 25, 0, 2 * Math.PI);
        ctx.fillStyle = capGrad;
        ctx.fill();
        ctx.strokeStyle = "#06b6d4";
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(radius, radius, 6, 0, 2 * Math.PI);
        ctx.fillStyle = "#a855f7";
        ctx.fill();
    }
    
    window.drawLuckyWheelInstance = drawWheel;
    drawWheel();

    if (isLuckySpun) {
        spinBtn.disabled = true;
        spinBtn.style.opacity = "0.5";
        resultText.textContent = "Bạn đã sử dụng hết lượt quay đặc quyền của tuần!";
    }

    spinBtn.addEventListener("click", () => {
        if (isLuckySpun) return;
        
        isLuckySpun = true;
        localStorage.setItem("jamie_lucky_spun", "true");
        spinBtn.disabled = true;
        spinBtn.style.opacity = "0.5";
        resultText.textContent = "Vòng quay đang quay...";

        const winningIndex = 3; 
        const sliceDegrees = 360 / prizes.length;
        const totalDegrees = 1800 + (360 - (winningIndex * sliceDegrees) - sliceDegrees / 2);

        wheel.style.transform = `rotate(${totalDegrees}deg)`;

        setTimeout(() => {
            resultText.innerHTML = `Chúc mừng! Bạn quay trúng: <span class="t-success">${prizes[winningIndex]}</span> và nhận được <span class="t-info">+100 XP</span>!`;
            unlockBadge("badge-luckystar", "Sao May Mắn");
            triggerConfettiExplosion();
        }, 5000);
    });
}

// ==========================================================================
// INTERACTIVE CINEMATIC QUIZ (10 QUESTIONS)
// ==========================================================================

const QUIZ_QUESTIONS = [
    {
        q: "Năng lượng (vibe) của bạn khi vừa mở mắt thức dậy hôm nay thế nào?",
        opts: [
            { key: "A", text: "Tràn đầy năng lượng, sẵn sàng 'f5' bản thân.", score: { romance: 2, retro: 1, cyberpunk: 0, healing: 3, mystery: 0 } },
            { key: "B", text: "Hơi uể oải, cần một liều thuốc tinh thần nhẹ nhàng, chữa lành.", score: { romance: 1, retro: 2, cyberpunk: 0, healing: 5, mystery: 1 } },
            { key: "C", text: "Khá nhạy cảm, tự dưng muốn tìm cái gì đó sâu lắng, thậm chí là... để khóc.", score: { romance: 3, retro: 3, cyberpunk: 1, healing: 1, mystery: 4 } },
            { key: "D", text: "Đang tràn ngập drama hoặc áp lực, cần thứ gì đó cực kỳ bùng nổ để giải tỏa.", score: { romance: 0, retro: 0, cyberpunk: 5, healing: 0, mystery: 3 } }
        ]
    },
    {
        q: "Nếu được 'trốn cả thế giới' ngay lúc này, bạn muốn đặt chân đến không gian nào nhất?",
        opts: [
            { key: "A", text: "Một quán cà phê nhỏ, ngắm mưa rơi rỉ rả bên ngoài cửa sổ.", score: { romance: 3, retro: 2, cyberpunk: 0, healing: 5, mystery: 2 } },
            { key: "B", text: "Chạy xe máy xuyên qua những con phố ngập ánh đèn neon rực rỡ lúc nửa đêm.", score: { romance: 1, retro: 3, cyberpunk: 5, healing: 1, mystery: 2 } },
            { key: "C", text: "Một bãi biển lộng gió, ngập tràn ánh nắng và tiếng sóng vỗ.", score: { romance: 4, retro: 1, cyberpunk: 0, healing: 5, mystery: 0 } },
            { key: "D", text: "Một tòa lâu đài cổ kính, bí ẩn và có phần ma mị biệt lập trên đồi.", score: { romance: 0, retro: 2, cyberpunk: 1, healing: 0, mystery: 5 } }
        ]
    },
    {
        q: "Hãy chọn một tông màu (Aesthetic) khiến đôi mắt của bạn cảm thấy dễ chịu nhất lúc này:",
        opts: [
            { key: "A", text: "Tông màu pastel trong trẻo, nhẹ nhàng như phim thanh xuân.", score: { romance: 5, retro: 2, cyberpunk: 0, healing: 4, mystery: 0 } },
            { key: "B", text: "Tông màu retro/vintage úa vàng, hoài cổ của thập niên 90.", score: { romance: 3, retro: 5, cyberpunk: 1, healing: 3, mystery: 1 } },
            { key: "C", text: "Tông màu rực rỡ, tương phản cao, đậm chất nghệ thuật phá cách (Pop-art).", score: { romance: 2, retro: 3, cyberpunk: 4, healing: 1, mystery: 2 } },
            { key: "D", text: "Tông màu tối, có chút u uất, lạnh lùng nhưng cực cuốn hút (Gothic/Noir).", score: { romance: 0, retro: 1, cyberpunk: 3, healing: 0, mystery: 5 } }
        ]
    },
    {
        q: "Thú thực đi, chiếc 'bụng đói' của bạn đang thèm món gì nhất trong lúc xem màn hình?",
        opts: [
            { key: "A", text: "Một hộp bắp rang bơ ngọt lịm, thơm phức chuẩn rạp phim.", score: { romance: 4, retro: 3, cyberpunk: 2, healing: 3, mystery: 1 } },
            { key: "B", text: "Một tô mì gói cay nóng hổi, vừa ăn vừa hít hà.", score: { romance: 1, retro: 2, cyberpunk: 4, healing: 2, mystery: 3 } },
            { key: "C", text: "Một ly cà phê đá đậm vị hoặc trà sữa trân châu.", score: { romance: 3, retro: 4, cyberpunk: 1, healing: 4, mystery: 1 } },
            { key: "D", text: "Một lon bia lạnh kèm vài mồi nhắm cay nồng trong bóng tối.", score: { romance: 0, retro: 1, cyberpunk: 3, healing: 0, mystery: 5 } }
        ]
    },
    {
        q: "Âm thanh nào đang phát ra trong tâm trí bạn lúc này?",
        opts: [
            { key: "A", text: "Tiếng guitar acoustic mộc mạc, êm ái và nhẹ lòng.", score: { romance: 3, retro: 1, cyberpunk: 0, healing: 5, mystery: 1 } },
            { key: "B", text: "Tiếng nhạc lo-fi trầm ấm, chậm rãi hòa cùng tiếng mưa rơi.", score: { romance: 2, retro: 4, cyberpunk: 1, healing: 4, mystery: 2 } },
            { key: "C", text: "Nhịp trống điện tử dồn dập, tiếng bass đập mạnh tràn đầy năng lượng.", score: { romance: 1, retro: 2, cyberpunk: 5, healing: 0, mystery: 2 } },
            { key: "D", text: "Tiếng đàn piano cô độc, u buồn vang vọng trong không gian tĩnh mịch.", score: { romance: 1, retro: 2, cyberpunk: 1, healing: 1, mystery: 5 } }
        ]
    },
    {
        q: "Nhân vật nào bạn muốn hóa thân thành nhất nếu được chọn làm nhân vật chính?",
        opts: [
            { key: "A", text: "Một cô/cậu học sinh trung học năng động với những rung động đầu đời.", score: { romance: 5, retro: 3, cyberpunk: 0, healing: 4, mystery: 0 } },
            { key: "B", text: "Một kẻ lữ hành tự do, phiêu bạt qua những thị trấn cổ kính yên bình.", score: { romance: 2, retro: 4, cyberpunk: 1, healing: 5, mystery: 1 } },
            { key: "C", text: "Một chiến binh công nghệ hay hacker sở hữu siêu năng lực ở tương lai.", score: { romance: 0, retro: 1, cyberpunk: 5, healing: 0, mystery: 3 } },
            { key: "D", text: "Một thám tử tư lạnh lùng, đang lần mò giải mã một vụ án bí hiểm.", score: { romance: 0, retro: 2, cyberpunk: 2, healing: 0, mystery: 5 } }
        ]
    },
    {
        q: "Hãy chọn một biểu tượng (Symbol) đại diện cho mong muốn lớn nhất của bạn lúc này:",
        opts: [
            { key: "A", text: "Một nhành cỏ đóng vai trò đem lại may mắn và nụ cười.", score: { romance: 3, retro: 1, cyberpunk: 0, healing: 5, mystery: 0 } },
            { key: "B", text: "Một cuộn băng cassette cũ kỹ ghi lại những ký ức đã qua.", score: { romance: 2, retro: 5, cyberpunk: 1, healing: 3, mystery: 1 } },
            { key: "C", text: "Một chip vi mạch phát sáng, đại diện cho trí tuệ và sự đột phá.", score: { romance: 1, retro: 1, cyberpunk: 5, healing: 0, mystery: 2 } },
            { key: "D", text: "Một chiếc chìa khóa cổ bằng đồng, mở ra những bí mật bị chôn giấu.", score: { romance: 0, retro: 2, cyberpunk: 1, healing: 0, mystery: 5 } }
        ]
    },
    {
        q: "Khi đối diện với một thử thách hay nỗi buồn trong cuộc sống, bạn thường làm gì?",
        opts: [
            { key: "A", text: "Tìm bạn bè chia sẻ, cùng cười nói để thổi bay mọi muộn phiền.", score: { romance: 4, retro: 1, cyberpunk: 1, healing: 5, mystery: 0 } },
            { key: "B", text: "Thu mình lại một góc, nghe nhạc buồn để gặm nhấm và tự chữa lành.", score: { romance: 2, retro: 4, cyberpunk: 0, healing: 4, mystery: 2 } },
            { key: "C", text: "Đối đầu trực diện, tìm cách giải quyết nhanh gọn và bùng nổ nhất.", score: { romance: 1, retro: 1, cyberpunk: 5, healing: 0, mystery: 2 } },
            { key: "D", text: "Suy ngẫm sâu sắc, phân tích mọi khía cạnh và tìm cách giải mã để hiểu rõ bản thân.", score: { romance: 0, retro: 2, cyberpunk: 2, healing: 0, mystery: 5 } }
        ]
    },
    {
        q: "Nếu bước vào một cỗ máy thời gian, bạn muốn du hành đến thời kỳ nào?",
        opts: [
            { key: "A", text: "Quay về thời học sinh ngây ngô với tà áo trắng và những chiếc thư tay.", score: { romance: 5, retro: 3, cyberpunk: 0, healing: 4, mystery: 0 } },
            { key: "B", text: "Ghé thăm những năm 80 - 90, thời của băng đĩa cassette và những biển hiệu vẽ tay.", score: { romance: 2, retro: 5, cyberpunk: 1, healing: 3, mystery: 1 } },
            { key: "C", text: "Đến thế giới tương lai năm 2050 với robot, công nghệ cyberpunk ảo diệu.", score: { romance: 0, retro: 1, cyberpunk: 5, healing: 0, mystery: 3 } },
            { key: "D", text: "Trở về thời cổ trang phong kiến, nơi có những chuyện tình và cuộc chiến sử thi.", score: { romance: 2, retro: 2, cyberpunk: 0, healing: 1, mystery: 5 } }
        ]
    },
    {
        q: "Câu hỏi quyết định (Anti-preference): Hôm nay bạn tuyệt đối KHÔNG muốn gặp phải điều gì trên màn hình?",
        opts: [
            { key: "A", text: "Một cái kết SE (Sad Ending) đau lòng, chia ly khóc lóc mệt mỏi.", score: { romance: -3, retro: 0, cyberpunk: 0, healing: 3, mystery: 1 } },
            { key: "B", text: "Mấy trò hù dọa giật mình (Jump-scare) hay yếu tố kinh dị gớm ghiếc.", score: { romance: 2, retro: 1, cyberpunk: 1, healing: 2, mystery: -4 } },
            { key: "C", text: "Nội dung triết lý giáo điều, nặng nề, xem xong bị tiền đình.", score: { romance: 2, retro: 1, cyberpunk: -3, healing: 2, mystery: -2 } },
            { key: "D", text: "Tiết tấu chậm chạp, lê thê, coi chừng 15 phút là ngủ gật.", score: { romance: -1, retro: -2, cyberpunk: 3, healing: -3, mystery: 2 } }
        ]
    }
];

let currentQuizStep = 0;
let userProfileScores = { romance: 0, retro: 0, cyberpunk: 0, healing: 0, mystery: 0 };
let activeExplosions = [];

function renderQuizStep() {
    const container = document.getElementById("quiz-card-content");
    if (!container) return;
    
    const questionData = QUIZ_QUESTIONS[currentQuizStep];
    const progress = Math.round((currentQuizStep / QUIZ_QUESTIONS.length) * 100);
    
    container.innerHTML = `
        <div class="quiz-step active" style="transition: opacity 0.3s ease;">
            <div class="quiz-progress-wrapper">
                <div class="quiz-progress-bar" style="width: ${progress}%"></div>
            </div>
            <div class="quiz-step-info">CÂU HỎI ${String(currentQuizStep + 1).padStart(2, '0')} / ${String(QUIZ_QUESTIONS.length).padStart(2, '0')}</div>
            <h4 class="step-question" style="font-size: 1rem; margin-bottom: 20px; font-weight: 600; line-height: 1.5;">> ${questionData.q}</h4>
            <div class="quiz-options-grid">
                ${questionData.opts.map(opt => `
                    <button class="quiz-opt-btn" onclick="selectQuizOption('${opt.key}')">
                        <div class="quiz-opt-letter">${opt.key}</div>
                        <span class="quiz-opt-text-val">${opt.text}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    bindCursorHoverEvents();
}

window.selectQuizOption = function(choiceKey) {
    const questionData = QUIZ_QUESTIONS[currentQuizStep];
    const chosenOpt = questionData.opts.find(o => o.key === choiceKey);
    if (!chosenOpt) return;
    
    for (const axis in chosenOpt.score) {
        userProfileScores[axis] += chosenOpt.score[axis];
    }
    
    triggerMiniQuizFirework();
    currentQuizStep++;
    
    const quizCard = document.getElementById("quiz-card-content");
    if (currentQuizStep < QUIZ_QUESTIONS.length) {
        if (quizCard) {
            quizCard.style.opacity = 0;
            setTimeout(() => {
                renderQuizStep();
                quizCard.style.opacity = 1;
            }, 250);
        } else {
            renderQuizStep();
        }
    } else {
        triggerConfettiExplosion();
        playApplauseSynth();
        renderQuizResult();
    }
};

function renderQuizResult() {
    const resultStep = document.getElementById("quiz-card-content");
    if (!resultStep) return;
    
    INITIAL_REVIEWS.forEach(review => {
        let score = 0;
        let totalWeight = 0;
        for (const axis in userProfileScores) {
            const uVal = Math.max(0, userProfileScores[axis]);
            const mVal = review.personalityProfile[axis] || 0;
            const axisWeight = 1.0;
            const diff = Math.abs(uVal - mVal);
            score += Math.max(0, 100 - (diff * 2.8)) * axisWeight;
            totalWeight += axisWeight;
        }
        review.matchPercentage = Math.round(score / totalWeight);
        review.matchPercentage = Math.max(65, Math.min(98, review.matchPercentage));
    });
    
    const sorted = [...INITIAL_REVIEWS].sort((a, b) => b.matchPercentage - a.matchPercentage);
    const topMatch = sorted[0];

    resultStep.innerHTML = `
        <div class="quiz-step active" style="text-align: center; padding: 10px 0;">
            <h4 class="quiz-result-title" style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-accent-rose); margin-bottom: 12px;">
                <i class="fa-solid fa-circle-check"></i> KẾT QUẢ GIẢI MÃ GU ĐIỆN ẢNH
            </h4>
            <p style="color: var(--color-text-secondary); margin-bottom: 20px; font-size: 0.88rem; line-height: 1.5;">
                Dựa trên 10 câu trả lời của bạn, Jamie đã phân tích tần số cảm xúc và tìm thấy tác phẩm tương thích nhất với tâm trạng lúc này của bạn.
            </p>
            
            <div class="recommended-card tech-panel" style="padding: 20px; border: 1px solid var(--color-accent-violet); border-radius: 12px; margin-bottom: 25px; text-align: left; background: rgba(139, 92, 246, 0.05); display: flex; flex-direction: column; gap: 15px; align-items: start;">
                <div style="display: flex; gap: 20px; width: 100%; flex-wrap: wrap;">
                    <img src="${topMatch.poster}" style="width: 80px; height: 112px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);">
                    <div style="flex: 1; min-width: 200px;">
                        <span class="info-label" style="font-family: var(--font-cyber); font-size: 0.65rem; color: var(--color-accent-cyan); letter-spacing: 0.1em;">> TÁC PHẨM TRÙNG KHỚP NHẤT</span>
                        <h4 style="font-size: 1.15rem; margin: 4px 0 8px 0; color: #fff; font-family: var(--font-heading);">${topMatch.title}</h4>
                        <p style="font-size: 0.82rem; color: var(--color-text-secondary); margin-bottom: 10px; line-height: 1.4;">${topMatch.summary}</p>
                        
                        <div class="match-percentage-container" style="margin-top: 5px;">
                            <div class="match-label-row">
                                <span>ĐỘ TƯƠNG THÍCH HOÀN HẢO</span>
                                <span>${topMatch.matchPercentage}%</span>
                            </div>
                            <div class="match-bar-bg">
                                <div class="match-bar-fill" style="width: ${topMatch.matchPercentage}%; background: linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-rose));"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; gap: 12px; width: 100%;">
                    <button class="btn-tech" style="flex: 1; padding: 10px;" onclick="openReviewModal('${topMatch.id}')">
                        Đọc Review <i class="fa-solid fa-book-open"></i>
                    </button>
                    <button class="btn-tech-secondary" style="flex: 1; padding: 10px;" onclick="openTrailerModal('${topMatch.trailerUrl}')">
                        Xem Trailer <i class="fa-solid fa-play"></i>
                    </button>
                </div>
            </div>
            
            <button class="btn-tech-secondary" onclick="resetQuiz()">LÀM LẠI CÂU ĐỐ <i class="fa-solid fa-rotate-left"></i></button>
        </div>
    `;

    renderReviewsFeed();
    unlockBadge("badge-cinemasage", "Nhà Thông Thái");
    addXp(50);
    
    const reviewsSection = document.getElementById("reviews");
    if (reviewsSection) {
        setTimeout(() => {
            reviewsSection.scrollIntoView({ behavior: "smooth" });
        }, 1200);
    }
}

window.resetQuiz = function() {
    currentQuizStep = 0;
    userProfileScores = { romance: 0, retro: 0, cyberpunk: 0, healing: 0, mystery: 0 };
    INITIAL_REVIEWS.forEach(r => delete r.matchPercentage);
    
    renderQuizStep();
    renderReviewsFeed();
};

function triggerMiniQuizFirework() {
    const canvas = document.getElementById("quiz-fireworks-canvas");
    const quizEl = document.getElementById("quiz-card-content");
    if (!canvas || !quizEl) return;
    
    const rect = quizEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const colors = ["#06b6d4", "#a855f7", "#f43f5e", "#10b981", "#f59e0b"];
    for (let i = 0; i < 25; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        activeExplosions.push({
            x: centerX,
            y: centerY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1.0,
            size: Math.random() * 2 + 1.2,
            color: colors[Math.floor(Math.random() * colors.length)],
            decay: Math.random() * 0.04 + 0.02
        });
    }
}

function updateExplosionsLoop() {
    const canvas = document.getElementById("quiz-fireworks-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = activeExplosions.length - 1; i >= 0; i--) {
        const p = activeExplosions[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.alpha -= p.decay;
        p.size = Math.max(0.1, p.size - 0.02);
        
        if (p.alpha <= 0) {
            activeExplosions.splice(i, 1);
            continue;
        }
        
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    requestAnimationFrame(updateExplosionsLoop);
}
requestAnimationFrame(updateExplosionsLoop);

const quizCanvas = document.getElementById("quiz-fireworks-canvas");
if (quizCanvas) {
    quizCanvas.width = window.innerWidth;
    quizCanvas.height = window.innerHeight;
    window.addEventListener("resize", () => {
        quizCanvas.width = window.innerWidth;
        quizCanvas.height = window.innerHeight;
    }, { passive: true });
}

function playApplauseSynth() {
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContextClass();
        const bufferSize = ctx.sampleRate * 2.2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const playClap = (time, gainVal, filterFreq) => {
            const noiseNode = ctx.createBufferSource();
            noiseNode.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = "bandpass";
            filter.frequency.value = filterFreq;
            filter.Q.value = 3.5;
            const gainNode = ctx.createGain();
            gainNode.gain.setValueAtTime(0.001, time);
            gainNode.gain.linearRampToValueAtTime(gainVal, time + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
            noiseNode.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(ctx.destination);
            noiseNode.start(time);
            noiseNode.stop(time + 0.15);
        };
        
        for (let i = 0; i < 90; i++) {
            const time = ctx.currentTime + Math.random() * 2.0;
            const gainVal = Math.random() * 0.15 + 0.05;
            const freq = Math.random() * 500 + 800;
            playClap(time, gainVal, freq);
        }
    } catch(e) {
        console.error("Failed to play synthesized applause: ", e);
    }
}

let wasMusicPlayingBeforeTrailer = false;

window.openTrailerModal = function(trailerUrl) {
    const modal = document.getElementById("trailer-modal");
    const iframe = document.getElementById("trailer-video-iframe");
    if (!modal || !iframe) return;
    
    if (isYtPlaying && ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
        wasMusicPlayingBeforeTrailer = true;
        ytPlayer.pauseVideo();
    } else {
        wasMusicPlayingBeforeTrailer = false;
    }
    
    // Use youtube-nocookie.com (YouTube Privacy Enhanced Mode) to completely
    // avoid the "playback paused because your account is being used elsewhere" error.
    // This official YouTube domain does not associate playback with the logged-in account.
    const baseUrl = trailerUrl
        .split('?')[0]
        .replace('www.youtube.com', 'www.youtube-nocookie.com')
        .replace('youtube.com', 'www.youtube-nocookie.com');
    
    const embedParams = new URLSearchParams({
        autoplay: '1',
        rel: '0',
        modestbranding: '1',
        playsinline: '1'
    });
    
    iframe.src = `${baseUrl}?${embedParams.toString()}`;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    bindCursorHoverEvents();
};

function setupTrailerEvents() {
    const modal = document.getElementById("trailer-modal");
    const closeBtn = document.getElementById("trailer-close-btn");
    const iframe = document.getElementById("trailer-video-iframe");
    if (!modal || !closeBtn || !iframe) return;
    
    const closeModal = () => {
        modal.classList.remove("active");
        iframe.src = "";
        document.body.style.overflow = "";
        
        if (wasMusicPlayingBeforeTrailer && ytPlayer && typeof ytPlayer.playVideo === 'function') {
            ytPlayer.playVideo();
            wasMusicPlayingBeforeTrailer = false;
        }
    };
    
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================

function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    const icon = type === "success" ? "fa-circle-check" : "fa-circle-info";
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add("fade-out");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 4000);
}

window.showToast = showToast;

// ==========================================================================
// CONTACT FORM SUBMISSION
// ==========================================================================

function setupContactForm() {
    const form = document.getElementById("contact-form");
    const terminalBody = document.getElementById("terminal-body");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const roleSelect = document.getElementById("contact-role");
        const roleText = roleSelect.options[roleSelect.selectedIndex].text;
        const message = document.getElementById("contact-message").value.trim();

        logToTerminal(`[INCOMING] Nhận yêu cầu kết nối từ ${name} (${roleText})...`, "accent");
        
        setTimeout(() => {
            logToTerminal(`[HANDSHAKE] Thiết lập đường truyền bảo mật tới ${email}...`, "info");
        }, 600);

        setTimeout(() => {
            logToTerminal(`[SYSTEM] Đang mã hóa lời nhắn: "${message.substring(0, 30)}..."`, "warning");
        }, 1200);

        setTimeout(() => {
            logToTerminal(`[SUCCESS] Tin nhắn đã được gửi thành công! Cổng console sẵn sàng.`, "success");
            showToast(`Cảm ơn bạn ${name}! Tin nhắn của bạn đã được gửi thành công.`, "success");
            unlockBadge("badge-networker", "Người Kết Nối");
        }, 1800);

        form.reset();
    });

    function logToTerminal(text, statusClass) {
        if (!terminalBody) return;
        const time = new Date().toLocaleTimeString();
        const line = document.createElement("div");
        line.className = "terminal-line";
        
        let colorSpan = "";
        if (statusClass === "success") colorSpan = "t-success";
        else if (statusClass === "warning") colorSpan = "t-warning";
        else if (statusClass === "info") colorSpan = "t-info";
        else if (statusClass === "accent") colorSpan = "t-accent";

        line.innerHTML = `[${time}] <span class="${colorSpan}">${text}</span>`;
        terminalBody.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

// ==========================================================================
// NAVIGATION & HEADER EFFECTS
// ==========================================================================

function setupNavScrollEffect() {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    if (!header) return;

    const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
    let navScrollTicking = false;

    window.addEventListener("scroll", () => {
        if (!navScrollTicking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const isLightTheme = document.body.classList.contains("light-theme");
                
                if (scrollY > 50) {
                    header.style.background = isLightTheme ? "rgba(241, 245, 249, 0.92)" : "rgba(4, 4, 6, 0.92)";
                    header.style.boxShadow = isLightTheme ? "0 4px 30px rgba(15, 23, 42, 0.05)" : "0 4px 30px rgba(0, 0, 0, 0.6)";
                } else {
                    header.style.background = isLightTheme ? "rgba(241, 245, 249, 0.75)" : "rgba(4, 4, 6, 0.7)";
                    header.style.boxShadow = "none";
                }

                let currentSectionId = "";
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - headerH - 40;
                    const sectionHeight = section.offsetHeight;
                    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                        currentSectionId = section.getAttribute("id");
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${currentSectionId}`) {
                        link.classList.add("active");
                    }
                });

                navScrollTicking = false;
            });
            navScrollTicking = true;
        }
    }, { passive: true });
}

function setupMobileNav() {
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    if (!mobileToggle || !navMenu) return;

    mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = mobileToggle.querySelector("i");
        if (navMenu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars-staggered";
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            mobileToggle.querySelector("i").className = "fa-solid fa-bars-staggered";
        });
    });
}

// ==========================================================================
// TABS & FILTERS LISTENERS
// ==========================================================================

function setupChartTabs() {
    const tabButtons = document.querySelectorAll(".chart-tabs .tab-btn");
    const tabContents = document.querySelectorAll(".chart-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");
            
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));
            
            button.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });
}

function setupFiltersAndSearch() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("search-input");
    if (!searchInput) return;

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderReviewsFeed();
        });
    });

    let searchTimeout;
    searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = e.target.value;
            renderReviewsFeed();
        }, 150);
    });
}
