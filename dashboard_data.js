// ---------------------------------------------------------------
// 1. DANH SÁCH 100 MÃ VN100 (mã : tên công ty)
// ---------------------------------------------------------------
const VN100 = [
["AAA","Nhựa An Phát Xanh"],["ACB","NH TMCP Á Châu"],["AGG","Đầu tư PT BĐS An Gia"],
["ANV","Nam Việt"],["ASM","Tập đoàn Sao Mai"],["BCG","Tập đoàn Bamboo Capital"],
["BCM","Đầu tư PT Công nghiệp"],["BID","NH TMCP Đầu tư & PT VN (BIDV)"],["BMP","Nhựa Bình Minh"],
["BSI","Chứng khoán BIDV"],["BVH","Tập đoàn Bảo Việt"],["BWE","Nước - Môi trường Bình Dương"],
["CII","Đầu tư Hạ tầng Kỹ thuật TPHCM"],["CMG","Tập đoàn Công nghệ CMC"],["CRE","BĐS Thế Kỷ"],
["CTD","Xây dựng Coteccons"],["CTG","NH TMCP Công Thương (VietinBank)"],["CTR","Công trình Viettel"],
["DBC","Tập đoàn Dabaco"],["DCM","Phân bón Dầu khí Cà Mau"],["DGC","Hóa chất Đức Giang"],
["DGW","Thế Giới Số (Digiworld)"],["DHC","Đông Hải Bến Tre"],["DIG","Đầu tư PT Xây dựng DIC"],
["DPM","Phân bón Dầu khí (Đạm Phú Mỹ)"],["DXG","Tập đoàn Đất Xanh"],["DXS","DV BĐS Đất Xanh"],
["EIB","NH TMCP Xuất Nhập Khẩu (Eximbank)"],["FPT","Tập đoàn FPT"],["FRT","Bán lẻ KTS FPT (FPT Retail)"],
["FTS","Chứng khoán FPT"],["GAS","Tổng công ty Khí Việt Nam (PV GAS)"],["GEG","Điện Gia Lai"],
["GEX","Tập đoàn GELEX"],["GMD","Gemadept"],["GVR","Tập đoàn Cao su Việt Nam"],
["HCM","Chứng khoán TPHCM"],["HDB","NH TMCP Phát triển TPHCM (HDBank)"],["HDC","PT Nhà Bà Rịa Vũng Tàu"],
["HDG","Tập đoàn Hà Đô"],["HHV","Hạ tầng Giao thông Đèo Cả"],["HPG","Tập đoàn Hòa Phát"],
["HSG","Tập đoàn Hoa Sen"],["HT1","Xi măng Vicem Hà Tiên"],["IMP","Dược phẩm Imexpharm"],
["KBC","PT Đô thị Kinh Bắc"],["KDC","Tập đoàn Kido"],["KDH","Đầu tư KD Nhà Khang Điền"],
["KOS","Kosy"],["LPB","NH TMCP Bưu điện Liên Việt (LPBank)"],["MBB","NH TMCP Quân Đội"],
["MSB","NH TMCP Hàng Hải"],["MSN","Tập đoàn Masan"],["MWG","Đầu tư Thế Giới Di Động"],
["NKG","Thép Nam Kim"],["NLG","Đầu tư Nam Long"],["NT2","Điện lực Dầu khí Nhơn Trạch 2"],
["NVL","Tập đoàn Đầu tư Địa ốc No Va (Novaland)"],["OCB","NH TMCP Phương Đông"],["PAN","Tập đoàn PAN"],
["PC1","Tập đoàn PC1"],["PDR","PT BĐS Phát Đạt"],["PHR","Cao su Phước Hòa"],
["PLX","Tập đoàn Xăng dầu Việt Nam (Petrolimex)"],["PNJ","Vàng bạc Đá quý Phú Nhuận"],["POW","Điện lực Dầu khí VN (PV Power)"],
["PPC","Nhiệt điện Phả Lại"],["PTB","Phú Tài"],["PVD","PV Drilling"],
["PVT","Vận tải Dầu khí (PVTrans)"],["REE","Cơ Điện Lạnh"],["SAB","Sabeco"],
["SAM","SAM Holdings"],["SBT","Thành Thành Công - Biên Hòa"],["SCR","Địa ốc Sài Gòn Thương Tín"],
["SCS","DV Hàng hóa Sài Gòn (SCSC)"],["SHB","NH TMCP Sài Gòn - Hà Nội"],["SJS","PT Đô thị & KCN Sông Đà"],
["SSB","NH TMCP Đông Nam Á (SeABank)"],["SSI","Chứng khoán SSI"],["STB","NH TMCP Sài Gòn Thương Tín (Sacombank)"],
["SZC","Sonadezi Châu Đức"],["TCB","NH TMCP Kỹ Thương (Techcombank)"],["TCH","Đầu tư DV Tài chính Hoàng Huy"],
["TMS","Transimex"],["TPB","NH TMCP Tiên Phong (TPBank)"],["VCB","NH TMCP Ngoại Thương (Vietcombank)"],
["VCG","Vinaconex"],["VCI","Chứng khoán Vietcap"],["VHC","Vĩnh Hoàn"],
["VHM","Vinhomes"],["VIB","NH TMCP Quốc Tế"],["VIC","Tập đoàn Vingroup"],
["VIX","Chứng khoán VIX"],["VJC","Vietjet Air"],["VND","Chứng khoán VNDirect"],
["VNM","Vinamilk"],["VPB","NH TMCP Việt Nam Thịnh Vượng (VPBank)"],["VPI","Đầu tư Văn Phú - Invest"],
["VRE","Vincom Retail"],["VSH","Thủy điện Vĩnh Sơn - Sông Hinh"]
];

// ---------------------------------------------------------------
// 2. TOP MÃ ĐÃ NGHIÊN CỨU CANSLIM + CATALYST (dựa trên báo cáo CTCK, tháng 6-7/2026)
// ---------------------------------------------------------------
const TOP_ANALYSIS = {
"HPG": {
  verdict:"buy", target:"Mirae Asset kỳ vọng tăng giá mạnh",
  canslim:{
    C:"LNST quý 1/2026 đạt 8.994 tỷ đồng, +169% svck nhờ mảng thép cốt lõi và lợi nhuận một lần từ chuyển nhượng dự án Phố Nối.",
    A:"Đà tăng trưởng lợi nhuận nhiều quý liên tiếp nhờ chu kỳ giá thép hồi phục; dự phóng LNST Q2/2026 đạt 5.056 tỷ đồng (+19% svck).",
    N:"Giá HRC được điều chỉnh tăng 0%/+5%/+15% trong T4/T5/T6 so với đỉnh T3/2026 - tín hiệu chu kỳ giá mới; công suất vận hành gần tối đa (~1,2 triệu tấn/tháng).",
    S:"Cổ phiếu vốn hóa lớn, thanh khoản top đầu VN100, thuộc rổ VN30.",
    L:"Doanh nghiệp đầu ngành thép Việt Nam, dẫn dắt nhóm vật liệu xây dựng.",
    I:"Được nhiều CTCK lớn (Mirae Asset, SSI, VNDirect) duy trì khuyến nghị theo dõi/mua.",
    M:"Hưởng lợi trực tiếp từ chu kỳ giá thép tăng và giải ngân đầu tư công/hạ tầng."
  },
  catalysts:[
    "Giá thép HRC tăng liên tục 3 tháng (T4-T6/2026), kỳ vọng biên lợi nhuận mảng thép mở rộng trong Q2-Q3/2026.",
    "Doanh thu mảng thép Q2/2026 dự phóng 57.400 tỷ đồng (+71% svck), lợi nhuận hoạt động thép ước 5.900 tỷ đồng (+47% svck).",
    "Lợi nhuận một lần từ chuyển nhượng dự án Phố Nối đã ghi nhận trong Q1/2026, hỗ trợ định giá lại cổ phiếu."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"SSI", rating:"Mua", target:"36.000", upside:"+27,7%"},
    {ctck:"Vietcap (VCSC)", rating:"Mua", target:"35.300", upside:"—"},
    {ctck:"Agriseco", rating:"Mua", target:"32.000", upside:"+21%"}
  ]
},
"VNM": {
  verdict:"buy", target:"Mirae Asset: doanh thu 2026F 66.193 tỷ đồng (+3,9% svck), LNST 9.500 tỷ đồng",
  canslim:{
    C:"Q1/2026: doanh thu +24,6% svck, LNST +54,9% svck nhờ tái cấu trúc kênh phân phối.",
    A:"Tăng trưởng lợi nhuận cải thiện rõ rệt so với các năm trước sau tái cấu trúc.",
    N:"Sản phẩm tái tung giúp tăng giá bán nội địa; doanh thu nước ngoài kỳ vọng +10% năm 2026.",
    S:"Vốn hóa lớn, thanh khoản ổn định, thuộc VN30.",
    L:"Doanh nghiệp sữa số 1 Việt Nam, dẫn dắt ngành hàng tiêu dùng thiết yếu.",
    I:"Được khối phân tích các CTCK lớn theo dõi sát, nằm trong danh mục khuyến nghị trung dài hạn của Mirae Asset.",
    M:"Nhóm tiêu dùng phòng thủ, ít nhạy cảm với biến động vĩ mô ngắn hạn."
  },
  catalysts:[
    "Kết quả tái cấu trúc kênh phân phối bắt đầu phản ánh vào KQKD Q1/2026 tích cực.",
    "Chiến lược tái tung sản phẩm giúp cải thiện giá bán bình quân trong nước.",
    "Giả định giá sữa bột đầu vào ổn định quanh 2.600 USD/tấn giúp kiểm soát chi phí."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"ACBS", rating:"Mua", target:"72.000", upside:"+25,5%"},
    {ctck:"SSI", rating:"Trung lập", target:"67.500", upside:"—"}
  ]
},
"MWG": {
  verdict:"buy", target:"LNST ròng dự báo CAGR 18,1% giai đoạn 2026-2028F",
  canslim:{
    C:"Doanh thu và LNST 2026F dự báo tăng lần lượt 18,3% và 20,8% svck.",
    A:"CAGR lợi nhuận ròng 18,1% trong 3 năm 2026-2028F, xu hướng cải thiện liên tục.",
    N:"Tiếp tục xu hướng tái cấu trúc chuỗi bán lẻ, tối ưu hiệu quả vận hành.",
    S:"Vốn hóa lớn, thanh khoản cao, thuộc VN30.",
    L:"Doanh nghiệp bán lẻ ICT/điện máy số 1 Việt Nam.",
    I:"Nằm trong danh mục khuyến nghị của Mirae Asset nhóm bán lẻ - dịch vụ.",
    M:"Ngành bán lẻ hưởng lợi khi sức mua tiêu dùng nội địa phục hồi."
  },
  catalysts:[
    "Biên lợi nhuận cải thiện nhờ tối ưu chi phí vận hành chuỗi cửa hàng.",
    "Kế hoạch tăng trưởng doanh nghiệp 2026 (+18%/+30% DT/LN) cho thấy kỳ vọng nội bộ tích cực dù ước tính CTCK thận trọng hơn."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"SSI", rating:"Mua", target:"97.700", upside:"+22%"},
    {ctck:"VNDirect", rating:"Giữ nguyên GMT", target:"108.100", upside:"—"}
  ]
},
"VCB": {
  verdict:"watch", target:"Nhóm ngân hàng - nền tảng tài sản vững chắc",
  canslim:{
    C:"Quy mô tài sản và tín dụng tăng trưởng đồng đều; tỷ lệ nợ xấu Q1/2026 chỉ 0,6% - thấp nhất hệ thống.",
    A:"Tăng trưởng lợi nhuận ổn định qua các năm, chất lượng tài sản đầu ngành.",
    N:"Duy trì vị thế cho vay ròng lớn trên thị trường liên ngân hàng.",
    S:"Vốn hóa lớn nhất ngành ngân hàng, thanh khoản cao.",
    L:"Ngân hàng quốc doanh dẫn đầu về chất lượng tài sản và an toàn vốn.",
    I:"Cổ phiếu nền tảng (core holding) được nhiều quỹ lớn nắm giữ dài hạn.",
    M:"Nhóm ngân hàng hưởng lợi khi tăng trưởng tín dụng toàn ngành phục hồi 2026."
  },
  catalysts:[
    "Tỷ lệ nợ xấu thấp nhất ngành (0,6%) giúp giảm áp lực trích lập dự phòng.",
    "Vị thế dẫn đầu về vốn hóa giúp VCB thường là lựa chọn phòng thủ khi thị trường biến động."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"SSI", rating:"Mua", target:"84.900", upside:"—"},
    {ctck:"Vietcap (VCSC)", rating:"Mua", target:"73.500", upside:"—"},
    {ctck:"BVSC", rating:"Mua", target:"87.000", upside:"—"}
  ]
},
"VPB": {
  verdict:"buy", target:"Mirae Asset dự phóng LNTT 2026 đạt 37.300 tỷ đồng",
  canslim:{
    C:"Tăng trưởng tín dụng Q1/2026 đạt 10,2%, cao hơn mặt bằng chung ngành.",
    A:"TTTD cả năm ước +25%, vượt trội so với ngành; LNTT 2026F 37.300 tỷ đồng.",
    N:"Kế hoạch phát hành riêng lẻ (private placement) là động lực tăng vốn mới.",
    S:"Thanh khoản cao, nằm trong VN30.",
    L:"Một trong những NHTM tư nhân tăng trưởng nhanh nhất, dẫn đầu nhóm bán lẻ - tài chính tiêu dùng.",
    I:"Được Mirae Asset đưa vào danh mục khuyến nghị trung - dài hạn tháng 7/2026.",
    M:"Nhóm ngân hàng bán lẻ hưởng lợi khi cho vay KHCN khởi sắc trở lại."
  },
  catalysts:[
    "Kế hoạch phát hành riêng lẻ có thể là catalyst tăng vốn và định giá lại.",
    "NIM dự phóng ổn định quanh 5,5% năm 2026 trước khi bình thường hóa dần về 5,1% trong dài hạn - cần theo dõi cạnh tranh ngành.",
    "Tăng trưởng cho vay KHCN kỳ vọng khởi sắc hơn so với cho vay doanh nghiệp."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"VPBankS", rating:"Mua", target:"42.800", upside:"—"},
    {ctck:"KBSV", rating:"Mua", target:"38.000", upside:"—"},
    {ctck:"HSC", rating:"Mua", target:"36.800", upside:"+39%"},
    {ctck:"BSC", rating:"Mua", target:"36.500", upside:"—"}
  ]
},
"HDB": {
  verdict:"watch", target:"MASVN - danh mục khuyến nghị tháng 7/2026",
  canslim:{
    C:"Thuộc nhóm ngân hàng được MASVN đưa vào danh mục khuyến nghị tháng 7/2026 nhờ nền tảng cơ bản ổn định.",
    A:"Tăng trưởng lợi nhuận ổn định trong nhóm ngân hàng TMCP tư nhân tầm trung.",
    N:"Chiến lược bán lẻ và tài chính nông thôn tiếp tục mở rộng.",
    S:"Thanh khoản khá, thuộc VN30.",
    L:"Một trong các ngân hàng TMCP có tốc độ tăng trưởng khá trong nhóm midcap.",
    I:"Được MASVN đưa vào rổ khuyến nghị cùng nhóm VCB, VPB, EIB, STB.",
    M:"Hưởng lợi chung xu hướng phục hồi tín dụng ngành ngân hàng 2026."
  },
  catalysts:[
    "Nằm trong danh mục 10 cổ phiếu khuyến nghị trung-dài hạn của Mirae Asset công bố cuối tháng 6/2026.",
    "Cần theo dõi thêm báo cáo KQKD Q2/2026 để xác nhận catalyst cụ thể hơn."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"SSI", rating:"Mua", target:"35.000", upside:"+37,3%"},
    {ctck:"HSC", rating:"Khả quan", target:"33.000", upside:"—"},
    {ctck:"Mirae Asset", rating:"Mua", target:"32.000", upside:"+21%"},
    {ctck:"FPTS", rating:"Mua", target:"32.550", upside:"—"},
    {ctck:"ACBS / SHS", rating:"Khả quan", target:"30.000", upside:"—"}
  ]
},
"EIB": {
  verdict:"watch", target:"MASVN - danh mục khuyến nghị tháng 7/2026",
  canslim:{
    C:"Nằm trong nhóm ngân hàng được MASVN khuyến nghị tháng 7/2026.",
    A:"Đang trong giai đoạn tái cấu trúc, cần theo dõi thêm tăng trưởng lợi nhuận các quý tới.",
    N:"Thay đổi cơ cấu cổ đông/quản trị gần đây là yếu tố cần theo dõi.",
    S:"Thanh khoản trung bình so với nhóm ngân hàng lớn.",
    L:"Chưa phải nhóm dẫn đầu ngành nhưng có định giá hấp dẫn theo đánh giá của MASVN.",
    I:"Được đưa vào danh mục khuyến nghị cùng VCB, VPB, HDB, STB.",
    M:"Phụ thuộc nhiều vào xu hướng chung ngành ngân hàng và tiến độ tái cơ cấu nội bộ."
  },
  catalysts:[
    "Định giá được xem là hấp dẫn hơn tương quan so với nhóm ngân hàng cùng quy mô.",
    "Cần theo dõi sát diễn biến tái cấu trúc và KQKD Q2/2026 để xác nhận xu hướng."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"Mirae Asset (MASVN)", rating:"Tăng tỷ trọng", target:"26.000", upside:"—"}
  ]
},
"STB": {
  verdict:"watch", target:"MASVN - danh mục khuyến nghị tháng 7/2026",
  canslim:{
    C:"Được MASVN đưa vào danh mục khuyến nghị tháng 7/2026 nhóm ngân hàng.",
    A:"Kỳ vọng lợi nhuận cải thiện khi hoàn tất xử lý tài sản tồn đọng (VAMC).",
    N:"Tiến độ xử lý nợ xấu/tài sản tồn đọng là câu chuyện tái cơ cấu dài hạn.",
    S:"Thanh khoản tốt trong nhóm ngân hàng tầm trung.",
    L:"Một trong nhóm ngân hàng tái cơ cấu được thị trường theo dõi sát nhiều năm.",
    I:"Được nhiều CTCK và nhà đầu tư tổ chức theo dõi do câu chuyện tái cơ cấu.",
    M:"Nhạy cảm với thông tin liên quan đến kế hoạch chia cổ tức/tái cơ cấu."
  },
  catalysts:[
    "Kỳ vọng hoàn tất xử lý tài sản tồn đọng có thể mở khóa lợi nhuận tích lũy nhiều năm.",
    "Là một trong các mã ngân hàng được MASVN chọn cho danh mục nửa cuối 2026."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"VPBankS", rating:"Khác/Tham chiếu", target:"63.200", upside:"—"},
    {ctck:"Vietcap (VCSC)", rating:"Nắm giữ (hạ từ Khả quan)", target:"58.300", upside:"—"},
    {ctck:"MBS", rating:"Trung lập", target:"58.800", upside:"—"}
  ]
},
"CTR": {
  verdict:"buy", target:"Mirae Asset - triển vọng xây lắp & năng lượng mặt trời áp mái",
  canslim:{
    C:"Tăng trưởng nhờ hai mảng chính: xây lắp hạ tầng viễn thông và năng lượng mặt trời áp mái.",
    A:"Xu hướng tăng trưởng ổn định nhiều năm nhờ mở rộng hạ tầng viễn thông/dữ liệu.",
    N:"Mảng năng lượng mặt trời áp mái là động lực tăng trưởng mới, hưởng lợi xu hướng chuyển dịch năng lượng.",
    S:"Vốn hóa vừa, thanh khoản khá trong nhóm VN100.",
    L:"Công ty con Viettel dẫn đầu mảng xây lắp hạ tầng viễn thông tại Việt Nam.",
    I:"Được Mirae Asset đưa vào danh mục khuyến nghị nhóm sản xuất - dịch vụ.",
    M:"Hưởng lợi từ xu hướng đầu tư hạ tầng số và năng lượng tái tạo quốc gia."
  },
  catalysts:[
    "Mảng năng lượng mặt trời áp mái mở ra dư địa tăng trưởng doanh thu mới ngoài mảng xây lắp truyền thống.",
    "Hưởng lợi gián tiếp từ đà mở rộng hạ tầng viễn thông/dữ liệu của Viettel."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"Vietcap (VCSC)", rating:"Mua", target:"137.700", upside:"—"},
    {ctck:"MBS", rating:"Khả quan (Mua)", target:"119.900", upside:"—"},
    {ctck:"HSC", rating:"Tăng tỷ trọng", target:"99.000", upside:"+17%"},
    {ctck:"Agriseco", rating:"Nắm giữ", target:"98.000", upside:"—"},
    {ctck:"SSI", rating:"Trung lập", target:"96.000", upside:"+10%"},
    {ctck:"BSC", rating:"Theo dõi (Trung lập)", target:"93.800", upside:"+11%"}
  ]
},
"GVR": {
  verdict:"buy", target:"Mirae Asset dự phóng LNST 2026 đạt 6.870 tỷ đồng (+22% svck)",
  canslim:{
    C:"LNST 2026F dự phóng tăng 22% svck nhờ thanh lý cây cao su và mảng cao su cốt lõi.",
    A:"Doanh thu mảng cao su cốt lõi dự kiến đạt 26.851 tỷ đồng, tăng ổn định.",
    N:"Giá dầu Brent tăng kéo giá cao su tổng hợp đi lên, cải thiện cạnh tranh cao su tự nhiên; giá bán bình quân 2026F kỳ vọng cao hơn 10% svck.",
    S:"Vốn hóa lớn trong nhóm nguyên vật liệu, thuộc VN30.",
    L:"Tập đoàn cao su nhà nước lớn nhất Việt Nam, sở hữu quỹ đất công nghiệp lớn.",
    I:"Nằm trong danh mục khuyến nghị của Mirae Asset nhóm sản xuất tháng 7/2026.",
    M:"Hưởng lợi kép từ chu kỳ giá cao su và câu chuyện chuyển đổi đất cao su sang KCN."
  },
  catalysts:[
    "Giá dầu Brent neo cao kéo theo giá cao su tổng hợp tăng, hỗ trợ giá bán cao su tự nhiên của GVR.",
    "Sản lượng tiêu thụ cao su ước tăng 4% svck nhờ nhu cầu duy trì tích cực.",
    "Thu nhập từ thanh lý cây cao su tiếp tục đóng góp lợi nhuận đột biến."
  ],
  sources:[["CafeF - CTCK chỉ ra 10 doanh nghiệp tiềm năng nửa cuối 2026","https://cafef.vn/ctck-chi-ra-10-doanh-nghiep-co-nen-tang-co-ban-va-tiem-nang-tang-truong-tot-phu-hop-xuong-tien-nua-cuoi-2026-188260627223528475.chn"]],
  valuations:[
    {ctck:"KBSV", rating:"Trung lập", target:"37.500", upside:"—"},
    {ctck:"SSI", rating:"Trung lập (hạ từ Mua)", target:"36.200", upside:"—"},
    {ctck:"MBS", rating:"Trung lập", target:"36.100", upside:"—"},
    {ctck:"Vietcap (VCSC)", rating:"Phù hợp thị trường", target:"31.200", upside:"—"}
  ]
},
"FPT": {
  verdict:"buy", target:"BVSC: giá mục tiêu 94.500 đồng/cp",
  canslim:{
    C:"Tăng trưởng lợi nhuận đều đặn hai chữ số nhiều quý liên tiếp, chủ yếu từ mảng CNTT nước ngoài (xuất khẩu phần mềm).",
    A:"Xu hướng tăng trưởng lợi nhuận dài hạn ổn định nhất nhóm công nghệ VN100.",
    N:"Đẩy mạnh mảng AI, chuyển đổi số và mở rộng thị trường Nhật Bản/APAC - câu chuyện tăng trưởng mới.",
    S:"Thanh khoản cao, vốn hóa lớn, thuộc VN30.",
    L:"Doanh nghiệp công nghệ dẫn đầu Việt Nam, không có đối thủ tương đương về quy mô xuất khẩu phần mềm.",
    I:"Được nhiều CTCK lớn (BVSC, MBS, SSI) duy trì khuyến nghị khả quan/mua.",
    M:"Hưởng lợi từ xu hướng toàn cầu về chuyển đổi số và đầu tư AI."
  },
  catalysts:[
    "BVSC đưa ra giá mục tiêu 94.500 đồng/cp, phản ánh kỳ vọng tăng trưởng doanh thu ký mới mảng CNTT nước ngoài.",
    "MBS duy trì khuyến nghị khả quan nhờ biên lợi nhuận mảng phần mềm cải thiện.",
    "Câu chuyện đầu tư hạ tầng AI (trung tâm dữ liệu, GPU) là catalyst trung hạn."
  ],
  sources:[["Tin nhanh Chứng khoán - MBS khuyến nghị khả quan FPT","https://m.tinnhanhchungkhoan.vn/bcpt/mbs-khuyen-nghi-kha-quan-danh-cho-co-phieu-fpt-4604.html"],["Bnews - Khuyến nghị cổ phiếu FPT, GMD","https://bnews.vn/khuyen-nghi-co-phieu-fpt-gmd-va-trien-vong-nhom-ban-le-2026/426737.html"]],
  valuations:[
    {ctck:"SSI", rating:"Khả quan", target:"153.100", upside:"+12,3%"},
    {ctck:"BVSC", rating:"Mua", target:"94.500", upside:"—"},
    {ctck:"MBS", rating:"Khả quan (Mua)", target:"Chưa nêu cụ thể", upside:"—"},
    {ctck:"CTCK khác (chưa xác định rõ)", rating:"Nâng lên Khả quan", target:"142.800", upside:"—"}
  ]
},
"MBB": {
  verdict:"buy", target:"HSC nâng giá mục tiêu lên 30.400 đồng/cp (khuyến nghị Mua)",
  canslim:{
    C:"HSC nâng khuyến nghị lên Mua trên cơ sở định giá hấp dẫn; Yuanta duy trì Mua với giá mục tiêu 29.500 đồng/cp.",
    A:"Tăng trưởng tín dụng và lợi nhuận thuộc nhóm ổn định trong ngành ngân hàng tư nhân.",
    N:"Định giá về vùng hấp dẫn sau nhịp điều chỉnh, tạo điểm mua tích lũy theo đánh giá HSC.",
    S:"Thanh khoản cao, thuộc VN30.",
    L:"Một trong những NHTM tư nhân có chất lượng tài sản và hiệu quả sinh lời (ROE) tốt nhất ngành.",
    I:"Được cả HSC và Yuanta đồng thuận khuyến nghị Mua trong các báo cáo gần nhất.",
    M:"Hưởng lợi khi mặt bằng lãi suất và tăng trưởng tín dụng ngành ngân hàng cải thiện."
  },
  catalysts:[
    "HSC nâng khuyến nghị từ Nắm giữ lên Mua, nâng giá mục tiêu thêm 2,7% lên 30.400 đồng/cp.",
    "Yuanta duy trì Mua với giá mục tiêu 29.500 đồng/cp, đồng thuận về định giá hấp dẫn.",
    "Định giá P/B hiện tại được đánh giá thấp hơn trung bình lịch sử của nhóm ngân hàng tư nhân top đầu."
  ],
  sources:[["Đầu tư Cổ phiếu - HSC nâng khuyến nghị MBB lên Mua","https://dautucophieu.net/cap-nhat-co-phieu-mbb-nang-khuyen-nghi-len-mua-vao-tren-co-so-dinh-gia-hap-dan/"]],
  valuations:[
    {ctck:"HSC", rating:"Mua", target:"30.400", upside:"—"},
    {ctck:"Yuanta", rating:"Mua", target:"29.500", upside:"—"}
  ]
},
"VHM": {
  verdict:"watch", target:"HSC nâng giá mục tiêu +33% lên 163.400 đồng/cp (Nắm giữ); MBS đánh giá tích cực",
  canslim:{
    C:"Hoạt động bán buôn (bulk sale) khởi sắc giúp HSC nâng dự báo lợi nhuận và giá mục tiêu.",
    A:"KQKD cải thiện theo từng quý nhờ đẩy nhanh bàn giao và bán buôn dự án lớn.",
    N:"Dòng tiền khối ngoại quay lại mua ròng mạnh nhóm Vingroup cuối tháng 6/2026 (VHM +380 tỷ đồng phiên 26/6).",
    S:"Vốn hóa lớn nhất nhóm bất động sản, thanh khoản cao, thuộc VN30.",
    L:"Doanh nghiệp bất động sản dân dụng lớn nhất Việt Nam.",
    I:"Được khối ngoại mua ròng trở lại sau giai đoạn bán ròng - tín hiệu dòng tiền tổ chức cải thiện.",
    M:"Định giá P/B ~1,5x, thấp hơn trung bình 5 năm - MBS đánh giá vùng giá hấp dẫn để tích lũy."
  },
  catalysts:[
    "Khối ngoại mua ròng khoảng 380 tỷ đồng cổ phiếu VHM trong phiên 26/6/2026, là điểm sáng dòng tiền cuối tháng 6.",
    "HSC nâng giá mục tiêu thêm 33% lên 163.400 đồng/cp theo phương pháp SoTP nhờ hoạt động bán buôn khởi sắc.",
    "MBS đánh giá định giá hấp dẫn khi P/B ~1,5x, thấp hơn trung bình 5 năm."
  ],
  sources:[["Vietstock - Dòng tiền cá mập 26/06: Khối ngoại mua ròng mạnh cổ phiếu họ Vingroup","https://vietstock.vn/2026/06/theo-dau-dong-tien-ca-map-2606-khoi-ngoai-mua-rong-manh-co-phieu-ho-vingroup-830-1459394.htm"],["Đầu tư Cổ phiếu - Cập nhật VHM, HSC nâng giá mục tiêu","https://dautucophieu.net/cap-nhat-co-phieu-vhm-hoat-dong-ban-buon-khoi-sac-nang-du-bao-loi-nhuan-va-gia-muc-tieu/"]],
  valuations:[
    {ctck:"HSC", rating:"Nắm giữ", target:"163.400", upside:"+33% (điều chỉnh GMT)"},
    {ctck:"Vietcap (VCSC)", rating:"Phù hợp thị trường (hạ từ Mua)", target:"153.700", upside:"+25% (điều chỉnh GMT)"},
    {ctck:"MBS", rating:"Khả quan", target:"123.200", upside:"—"},
    {ctck:"SSI", rating:"Khả quan", target:"69.400", upside:"—"},
    {ctck:"VNDirect", rating:"Trung lập", target:"65.000", upside:"+10,4%"}
  ]
},
"VIC": {
  verdict:"watch", target:"Hưởng lợi dòng tiền khối ngoại nhóm Vingroup",
  canslim:{
    C:"Nhóm Vingroup (VIC/VHM/VRE) được khối ngoại mua ròng mạnh trở lại cuối tháng 6/2026.",
    A:"Đóng góp lợi nhuận đa dạng từ các mảng BĐS, công nghiệp - công nghệ (VinFast, Vinhomes...).",
    N:"Câu chuyện mở rộng hệ sinh thái công nghiệp - xe điện tiếp tục là động lực dài hạn.",
    S:"Vốn hóa lớn nhất thị trường, thanh khoản rất cao, thuộc VN30.",
    L:"Tập đoàn tư nhân đa ngành lớn nhất Việt Nam.",
    I:"Khối ngoại mua ròng ~120 tỷ đồng phiên 26/6/2026, ~1.100 tỷ đồng trong tuần 22-26/6/2026.",
    M:"Tâm điểm dòng tiền thị trường khi nhóm vốn hóa lớn dẫn dắt chỉ số."
  },
  catalysts:[
    "Khối ngoại mua ròng hơn 1.100 tỷ đồng cổ phiếu nhóm Vingroup trong tuần 22-26/6/2026.",
    "Là điểm sáng hiếm hoi khi khối ngoại toàn thị trường vẫn đang bán ròng chung."
  ],
  sources:[["Thương hiệu Công luận - Khối ngoại thu hẹp bán ròng, gom mạnh VIC","https://thuonghieucongluan.com.vn/khoi-ngoai-thu-hep-ban-rong-bat-ngo-gom-manh-co-phieu-vic-a324288.html"],["Tin nhanh Chứng khoán - GD khối ngoại tuần 22-26/6","https://www.tinnhanhchungkhoan.vn/giao-dich-chung-khoan-khoi-ngoai-tuan-22-266-mua-rong-hon-1100-ty-dong-mot-co-phieu-lon-post393031.html"]],
  valuations:[
    {ctck:"SSI", rating:"Trung lập", target:"65.000", upside:"+10,4%"},
    {ctck:"Vietcap (VCSC)", rating:"Bán", target:"Đã hạ 3% (chưa rõ số tuyệt đối)", upside:"—"}
  ]
},
"ANV": {
  verdict:"buy", target:"VDSC: 26.000 đồng/cp (+26%) | HSC: 31.100 đồng/cp (+39%)",
  canslim:{
    C:"LNST Q2/2026 đạt 408 tỷ đồng, +23% svck nhờ sản lượng tiêu thụ cá tra & cá rô phi tích cực.",
    A:"Tăng trưởng lợi nhuận cải thiện rõ so với giai đoạn khó khăn trước đó của ngành thủy sản.",
    N:"Mảng cá rô phi là động lực tăng trưởng mới bên cạnh cá tra truyền thống.",
    S:"Vốn hóa vừa, thanh khoản trung bình trong nhóm thủy sản VN100.",
    L:"Một trong các doanh nghiệp xuất khẩu cá tra hàng đầu Việt Nam.",
    I:"Được cả VDSC và HSC đồng thuận khuyến nghị Mua.",
    M:"Ngành thủy sản hưởng lợi khi nhu cầu xuất khẩu phục hồi và giá bán cải thiện."
  },
  catalysts:[
    "LNST quý 2/2026 tăng 23% svck lên 408 tỷ đồng nhờ sản lượng tiêu thụ tích cực.",
    "VDSC đặt giá mục tiêu 26.000 đồng/cp, tổng mức sinh lời kỳ vọng 26%.",
    "HSC duy trì khuyến nghị Mua với giá mục tiêu 31.100 đồng/cp, tiềm năng tăng giá ~39% nhờ tăng trưởng kép cá tra và cá rô phi."
  ],
  sources:[["Elibook - ANV: LNST quý 2 đạt 408 tỷ đồng, tăng 23% svck","https://elibook.vn/2026/07/01/anv-loi-nhuan-sau-thue-quy-2-dat-408-ty-dong-tang-23-so-voi-cung-ky-nho-san-luong-tieu-thu-ca-tra-va-ca-ro-phi-tich-cuc.html/"]],
  valuations:[
    {ctck:"VDSC", rating:"Mua", target:"26.000", upside:"+26%"},
    {ctck:"HSC", rating:"Mua", target:"31.100", upside:"+39%"}
  ]
}
};

// ---------------------------------------------------------------
// DỮ LIỆU CƠ BẢN THEO QUÝ (Doanh thu / LNST / %YoY / P/E / P/B)
// Tổng hợp từ tin tức công bố KQKD trên cafef.vn, vietstock.vn, tinnhanhchungkhoan.vn,
// dnse.com.vn, elibook.vn... KHÔNG phải dữ liệu chuẩn từ BCTC kiểm toán — một số quý
// thiếu số liệu (nguồn không công bố tách quý) hoặc là số trước thuế đối với ngân hàng.
// P/E, P/B chỉ có giá trị hiện tại (tại thời điểm thu thập), KHÔNG có lịch sử theo quý
// vì nguồn miễn phí không công bố P/E, P/B lịch sử theo từng quý.
// ---------------------------------------------------------------
const FUNDAMENTALS = {
  HPG: {
    currentPE: 6.86, currentPB: 2.58,
    quarters: [
      {quarter:"Q2/2024",revenue:39556,profit:3319.26,yoyRevenue:34,yoyProfit:127.34},
      {quarter:"Q3/2024",revenue:34000,profit:3022.95,yoyRevenue:19,yoyProfit:50.79},
      {quarter:"Q4/2024",revenue:35232,profit:2806.8,yoyRevenue:1,yoyProfit:-5.58},
      {quarter:"Q1/2025",revenue:37900,profit:3344.28,yoyRevenue:22,yoyProfit:16.5},
      {quarter:"Q2/2025",revenue:36000,profit:4256.75,yoyRevenue:-9,yoyProfit:28.24},
      {quarter:"Q3/2025",revenue:36794,profit:4012,yoyRevenue:7,yoyProfit:33},
      {quarter:"Q4/2025",revenue:47302,profit:3888,yoyRevenue:34,yoyProfit:38},
      {quarter:"Q1/2026",revenue:53300,profit:9056,yoyRevenue:40,yoyProfit:170}
    ]
  },
  VNM: {
    currentPE: 15.22, currentPB: 4.76,
    quarters: [
      {quarter:"Q2/2024",revenue:16665,profit:2695,yoyRevenue:9.5,yoyProfit:20.9},
      {quarter:"Q3/2024",revenue:15537,profit:2404,yoyRevenue:-0.6,yoyProfit:-4},
      {quarter:"Q4/2024",revenue:15477,profit:2147,yoyRevenue:-1,yoyProfit:-9},
      {quarter:"Q1/2025",revenue:12935,profit:null,yoyRevenue:null,yoyProfit:null},
      {quarter:"Q2/2025",revenue:16745,profit:2489,yoyRevenue:null,yoyProfit:null},
      {quarter:"Q3/2025",revenue:16968,profit:2511,yoyRevenue:9.1,yoyProfit:4.5},
      {quarter:"Q4/2025",revenue:17000,profit:2827,yoyRevenue:10,yoyProfit:32},
      {quarter:"Q1/2026",revenue:16147,profit:2429,yoyRevenue:25,yoyProfit:55}
    ]
  },
  MWG: {
    currentPE: 20.48, currentPB: 4.1,
    quarters: [
      {quarter:"Q2/2024",revenue:34100,profit:1172.28,yoyRevenue:16,yoyProfit:6635.03},
      {quarter:"Q3/2024",revenue:34147,profit:806,yoyRevenue:13,yoyProfit:2000},
      {quarter:"Q1/2025",revenue:36135,profit:1548,yoyRevenue:15,yoyProfit:71},
      {quarter:"Q2/2025",revenue:null,profit:null,yoyRevenue:null,yoyProfit:null},
      {quarter:"Q3/2025",revenue:39853,profit:1784,yoyRevenue:17,yoyProfit:120},
      {quarter:"Q4/2025",revenue:42850,profit:2086,yoyRevenue:24,yoyProfit:144.59},
      {quarter:"Q1/2026",revenue:46508,profit:2700,yoyRevenue:29,yoyProfit:75}
    ]
  },
  VCB: {
    currentPE: 15.6, currentPB: 2.35,
    isBank:true,
    quarters: [
      {quarter:"Q2/2024",revenue:34032,profit:8119.41,yoyRevenue:null,yoyProfit:9.38},
      {quarter:"Q3/2024",revenue:null,profit:8566.6,yoyRevenue:null,yoyProfit:17.85},
      {quarter:"Q1/2025",revenue:17264.73,profit:8696.23,yoyRevenue:-0.09,yoyProfit:1.35},
      {quarter:"Q2/2025",revenue:null,profit:8831.88,yoyRevenue:null,yoyProfit:8.77},
      {quarter:"Q3/2025",revenue:null,profit:9020.5,yoyRevenue:null,yoyProfit:5.3},
      {quarter:"Q4/2025",revenue:null,profit:10900,yoyRevenue:null,yoyProfit:1.7},
      {quarter:"Q1/2026",revenue:21180,profit:9456.57,yoyRevenue:22.7,yoyProfit:8.74}
    ]
  },
  VPB: {
    currentPE: 13.35, currentPB: 2.64,
    isBank:true,
    quarters: [
      {quarter:"Q2/2024",revenue:null,profit:6215,yoyRevenue:null,yoyProfit:null},
      {quarter:"Q3/2024",revenue:15063,profit:5186,yoyRevenue:null,yoyProfit:66},
      {quarter:"Q4/2024",revenue:null,profit:6100,yoyRevenue:null,yoyProfit:140},
      {quarter:"Q1/2025",revenue:15566,profit:3934,yoyRevenue:15,yoyProfit:25.2},
      {quarter:"Q2/2025",revenue:null,profit:5753,yoyRevenue:null,yoyProfit:61},
      {quarter:"Q3/2025",revenue:null,profit:9166,yoyRevenue:null,yoyProfit:76.7},
      {quarter:"Q4/2025",revenue:22416,profit:10229,yoyRevenue:27,yoyProfit:70},
      {quarter:"Q1/2026",revenue:19900,profit:6198.66,yoyRevenue:26.3,yoyProfit:59.15}
    ]
  },
  HDB: {
    currentPE: null, currentPB: null,
    isBank:true,
    quarters: [
      {quarter:"Q4/2024",revenue:9448.13,profit:3114.65,yoyRevenue:14.42,yoyProfit:-6.86},
      {quarter:"Q1/2025",revenue:null,profit:4028,yoyRevenue:null,yoyProfit:46.8},
      {quarter:"Q2/2025",revenue:null,profit:3514.86,yoyRevenue:null,yoyProfit:12.84},
      {quarter:"Q3/2025",revenue:null,profit:3646.64,yoyRevenue:null,yoyProfit:6.51},
      {quarter:"Q4/2025",revenue:null,profit:6500,yoyRevenue:null,yoyProfit:60},
      {quarter:"Q1/2026",revenue:null,profit:6107,yoyRevenue:null,yoyProfit:14}
    ]
  },
  EIB: {
    currentPE: 37.11, currentPB: 1.81,
    isBank:true,
    quarters: [
      {quarter:"Q2/2024",revenue:null,profit:813,yoyRevenue:null,yoyProfit:52.0},
      {quarter:"Q3/2024",revenue:null,profit:904,yoyRevenue:null,yoyProfit:194.4},
      {quarter:"Q4/2024",revenue:null,profit:1810,yoyRevenue:null,yoyProfit:79.7},
      {quarter:"Q1/2025",revenue:null,profit:832,yoyRevenue:null,yoyProfit:25.8},
      {quarter:"Q2/2025",revenue:null,profit:656.9,yoyRevenue:null,yoyProfit:-19.2},
      {quarter:"Q3/2025",revenue:null,profit:560,yoyRevenue:null,yoyProfit:-38.02},
      {quarter:"Q1/2026",revenue:1528,profit:338,yoyRevenue:null,yoyProfit:-59.0}
    ]
  },
  STB: {
    currentPE: 28.0, currentPB: 2.1,
    isBank:true,
    quarters: [
      {quarter:"Q2/2024",revenue:null,profit:2688,yoyRevenue:null,yoyProfit:13.1},
      {quarter:"Q3/2024",revenue:null,profit:2752,yoyRevenue:null,yoyProfit:null},
      {quarter:"Q2/2025",revenue:null,profit:4500,yoyRevenue:null,yoyProfit:67.0},
      {quarter:"Q3/2025",revenue:null,profit:3657,yoyRevenue:null,yoyProfit:32.9},
      {quarter:"Q4/2025",revenue:null,profit:-3360,yoyRevenue:null,yoyProfit:null},
      {quarter:"Q1/2026",revenue:null,profit:2106,yoyRevenue:null,yoyProfit:-43.0}
    ]
  },
  CTR: {
    currentPE: 13.5, currentPB: null,
    quarters: [
      {quarter:"Q2/2024",revenue:1045.3,profit:null,yoyRevenue:14.0,yoyProfit:null},
      {quarter:"Q3/2024",revenue:null,profit:178,yoyRevenue:null,yoyProfit:null},
      {quarter:"Q2/2025",revenue:3236,profit:145,yoyRevenue:7.0,yoyProfit:16.0},
      {quarter:"Q3/2025",revenue:null,profit:168.94,yoyRevenue:14.09,yoyProfit:15.5},
      {quarter:"Q4/2025",revenue:3999.5,profit:163.9,yoyRevenue:14.2,yoyProfit:8.8},
      {quarter:"Q1/2026",revenue:3804.8,profit:null,yoyRevenue:38.9,yoyProfit:22.6}
    ]
  },
  GVR: {
    currentPE: 25.39, currentPB: 2.2,
    quarters: [
      {quarter:"Q1/2024",revenue:4590,profit:650,yoyRevenue:11.0,yoyProfit:-14.0},
      {quarter:"Q3/2024",revenue:6963,profit:802,yoyRevenue:12.4,yoyProfit:62.7},
      {quarter:"Q2/2025",revenue:6017,profit:1523,yoyRevenue:30.0,yoyProfit:53.0},
      {quarter:"Q3/2025",revenue:9294,profit:2187,yoyRevenue:20.4,yoyProfit:95.0},
      {quarter:"Q4/2025",revenue:8500,profit:1000,yoyRevenue:-9.0,yoyProfit:-49.0},
      {quarter:"Q1/2026",revenue:8845,profit:2513,yoyRevenue:56.0,yoyProfit:85.0}
    ]
  },
  FPT: {
    currentPE: 18.5, currentPB: null,
    quarters: [
      {quarter:"Q2/2024",revenue:15245,profit:1874,yoyRevenue:22.0,yoyProfit:24.16},
      {quarter:"Q3/2024",revenue:15903,profit:2090,yoyRevenue:16.0,yoyProfit:21.0},
      {quarter:"Q1/2025",revenue:16058,profit:2174,yoyRevenue:13.9,yoyProfit:20.9},
      {quarter:"Q4/2025",revenue:null,profit:2502.7,yoyRevenue:14.87,yoyProfit:19.48},
      {quarter:"Q1/2026",revenue:12480,profit:2487,yoyRevenue:8.7,yoyProfit:14.4}
    ]
  },
  MBB: {
    currentPE: 6.55, currentPB: 1.36,
    isBank:true,
    quarters: [
      {quarter:"Q2/2024",revenue:null,profit:6026.75,yoyRevenue:null,yoyProfit:23.16},
      {quarter:"Q2/2025",revenue:12372.12,profit:5877.6,yoyRevenue:17.48,yoyProfit:-2.47},
      {quarter:"Q3/2025",revenue:15596.69,profit:5571.02,yoyRevenue:22.77,yoyProfit:-3.78},
      {quarter:"Q1/2026",revenue:17430,profit:7515.51,yoyRevenue:13.8,yoyProfit:14.43}
    ]
  },
  VHM: {
    currentPE: 10.2, currentPB: 3.67,
    quarters: [
      {quarter:"Q2/2024",revenue:28200,profit:10600,yoyRevenue:null,yoyProfit:10},
      {quarter:"Q3/2024",revenue:33323,profit:8980,yoyRevenue:null,yoyProfit:-16},
      {quarter:"Q1/2025",revenue:15700,profit:2700,yoyRevenue:null,yoyProfit:193},
      {quarter:"Q4/2025",revenue:103000,profit:26797,yoyRevenue:null,yoyProfit:85},
      {quarter:"Q1/2026",revenue:65114,profit:25625,yoyRevenue:315,yoyProfit:866}
    ]
  },
  VIC: {
    currentPE: 44.2, currentPB: 10,
    quarters: [
      {quarter:"Q2/2024",revenue:43304,profit:684,yoyRevenue:-8.4,yoyProfit:71},
      {quarter:"Q3/2024",revenue:62850,profit:2015,yoyRevenue:31,yoyProfit:200},
      {quarter:"Q4/2024",revenue:65247,profit:1182,yoyRevenue:139,yoyProfit:130},
      {quarter:"Q2/2025",revenue:null,profit:-581,yoyRevenue:9.42,yoyProfit:83.49},
      {quarter:"Q3/2025",revenue:null,profit:3025,yoyRevenue:null,yoyProfit:50},
      {quarter:"Q1/2026",revenue:104352,profit:5611,yoyRevenue:24,yoyProfit:150}
    ]
  },
  ANV: {
    currentPE: 15.1, currentPB: null,
    quarters: [
      {quarter:"Q2/2024",revenue:1193,profit:17.5,yoyRevenue:11,yoyProfit:null},
      {quarter:"Q3/2024",revenue:1341,profit:null,yoyRevenue:22,yoyProfit:null},
      {quarter:"Q1/2025",revenue:null,profit:132.02,yoyRevenue:null,yoyProfit:681.03},
      {quarter:"Q2/2025",revenue:1726,profit:332.81,yoyRevenue:45,yoyProfit:14651.17},
      {quarter:"Q3/2025",revenue:2000,profit:300,yoyRevenue:45,yoyProfit:710},
      {quarter:"Q4/2025",revenue:2119,profit:251.57,yoyRevenue:56,yoyProfit:4610.83},
      {quarter:"Q1/2026",revenue:1844.9,profit:195.3,yoyRevenue:65.9,yoyProfit:47.9}
    ]
  }
};
