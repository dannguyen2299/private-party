# 📐 THIỆP MỜI - EXACT STRUCTURE & SEQUENCE
## Format Chuẩn Xác - Thứ Tự Sections & Nội Dung

> **Mục đích:** Document này ghi lại CHÍNH XÁC format, structure, sequence và thông tin từ thiệp gốc để replicate 100%

---

## 🎬 TRÌNH TỰ XUẤT HIỆN (EXACT SEQUENCE)

### ⏱️ Timeline Load Page:

```
0.0s  → Page starts loading
      → Body shows (background visible)
      
0.0s  → DOOR OVERLAY appears
      ├─ 2 cánh cửa đóng (covering full screen)
      ├─ Text "PRIVATE PARTY BY TAM" ở giữa
      └─ Background: Dark gradient
      
0.0s  → Door animation starts IMMEDIATELY (no delay)
      ├─ Left door slides to left: translateX(-100%)
      ├─ Right door slides to right: translateX(100%)
      ├─ Text fades out & scales up
      └─ Duration: 2 seconds
      
2.0s  → Door overlay HIDDEN
      → Main content becomes visible
      → AOS animations start triggering as user scrolls
```

**Quan trọng:**
- ❌ KHÔNG có delay ban đầu
- ✅ Cửa bắt đầu mở NGAY LẬP TỨC
- ✅ Nội dung phía sau đã sẵn sàng (không đen màn hình)
- ✅ 2 giây sau cửa hoàn toàn biến mất

---

## 📋 CẤU TRÚC SECTIONS (THEO THỨ TỰ CHÍNH XÁC)

### 🗂️ Document Structure:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Meta tags -->
    <!-- Google Fonts -->
    <!-- CSS Libraries -->
    <!-- Door Animation CSS -->
    <!-- Party Theme CSS -->
    <!-- All Custom CSS -->
</head>
<body>
    
    ┌─────────────────────────────────────────────────┐
    │ 0. DOOR OVERLAY (Fixed, z-index: 99999)        │
    │    - Appears first, covers everything           │
    │    - Auto-opens, then disappears                │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 1. PRELOADER (Optional, display after door)    │
    │    - Logo animation                             │
    │    - "PRIVATE PARTY BY TAM" text               │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 2. BANNER / HERO SECTION                        │
    │    id="banner"                                  │
    │    - Background: Dark (#1a1a1a)                │
    │    - Main title: "PRIVATE PARTY"               │
    │    - Subtitle: "BY TAM"                        │
    │    - Event details preview                     │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 3. ABOUT / INVITATION MESSAGE                   │
    │    id="about"                                   │
    │    - Background: White/Cream                   │
    │    - Invitation text (EN + VN)                 │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 4. PARTY HIGHLIGHTS ⭐ QUAN TRỌNG               │
    │    id="party-highlights"                        │
    │    - Background: Cream gradient                │
    │    - 4 Items với 4 Photos (1.jpg → 4.jpg)     │
    │    - Layout xen kẽ Photo + Info                │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 5. COUNTDOWN SECTION                            │
    │    id="countdown-section"                       │
    │    - Countdown timer to event                  │
    │    - Glass-morphism style                      │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 6. EVENT DETAILS                                │
    │    - Date, Time, Location chi tiết             │
    │    - Map link                                  │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 7. DRESS CODE SECTION                           │
    │    id="dress-code"                              │
    │    - 4 Color swatches                          │
    │    - Title & description                       │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 8. TIMELINE (Optional - display: none)          │
    │    id="time-line"                               │
    │    - Event timeline/schedule                   │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 9. ALBUM / PHOTO GALLERY                        │
    │    id="album"                                   │
    │    - Swiper slider với nhiều ảnh              │
    │    - Priority: 1.jpg, 2.jpg, 3.jpg, 4.jpg     │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 10. GIFT SECTION (Optional - display: none)     │
    │     id="gift"                                   │
    │     - Gift registry info                       │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 11. THANK YOU SECTION                           │
    │     id="thankyou"                               │
    │     - Thank you message                        │
    │     - Closing note                             │
    └─────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────┐
    │ 12. FOOTER                                      │
    │     - Copyright                                │
    │     - Credits                                  │
    └─────────────────────────────────────────────────┘
    
    <!-- All JavaScript at end -->
    <!-- Door animation script -->
    <!-- AOS initialization -->
    <!-- Countdown script -->
    
</body>
</html>
```

---

## 🎯 CHI TIẾT TỪNG SECTION (EXACT CONTENT)

### 0️⃣ DOOR OVERLAY (z-index: 99999)

**HTML Structure:**
```html
<div id="door-overlay">
    <div class="door door-left"></div>
    <div class="door door-right"></div>
    <div class="door-text">
        PRIVATE PARTY<br>BY TAM
    </div>
</div>
```

**CSS Key Points:**
```css
#door-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 99999;
    background: transparent; /* Quan trọng: nội dung phía sau visible */
}

.door {
    width: 50vw;
    height: 100vh;
    background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
    transition: transform 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.door-left { left: 0; }
.door-right { right: 0; }

#door-overlay.open .door-left { transform: translateX(-100%); }
#door-overlay.open .door-right { transform: translateX(100%); }
```

**JavaScript:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('door-overlay');
    overlay.classList.add('open'); // Start immediately
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 2000);
});
```

---

### 1️⃣ PRELOADER (Optional)

**Nội dung:**
- Logo hoặc icon
- Text: "PRIVATE PARTY BY TAM"
- Loading animation

**Thời điểm:** Xuất hiện sau khi door mở (nếu có)

---

### 2️⃣ BANNER / HERO SECTION

**ID:** `id="banner"`

**Background:** Dark gradient (#1a1a1a → #2d2d2d)

**Nội dung chính xác:**
```
┌─────────────────────────────────────┐
│         [Decorative Icon ✦]        │
│                                     │
│     PLEASE JOIN US FOR              │
│     (0.9rem, uppercase, cream)      │
│                                     │
│        PRIVATE PARTY                │
│        (4-5rem, Playfair, Gold)     │
│                                     │
│           BY TAM                    │
│        (2rem, italic, champagne)    │
│                                     │
│      ─────────────────              │
│                                     │
│     Start 6h PM to 6h AM            │
│     (1.3rem, script font)           │
│                                     │
│          TƯ GIA                     │
│      (2rem, gold, bold)             │
│                                     │
│     Tân Ngọc Phượng                 │
│     (1.1rem, champagne)             │
│                                     │
│      [📍 Map Icon Button]           │
│                                     │
└─────────────────────────────────────┘
```

**Colors:**
- Background: `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)`
- Main text: Gold `#d4af37`
- Secondary: Champagne `#f7e7ce`
- Accents: Cream `#faf8f3`

---

### 3️⃣ INVITATION MESSAGE

**ID:** `id="about"`

**Background:** White or cream gradient

**Nội dung chính xác:**

**English:**
```
"I would be honored to have my dearest family and friends 
join me for a celebratory gathering at my private residence. 
Your presence would make this occasion truly special."
```

**Tiếng Việt:**
```
"Tâm rất vinh dự được mời những người thân yêu trong gia đình 
và bạn bè thân thiết đến tham dự buổi tiệc mừng tại tư gia riêng 
của gia đình Tâm. Sự hiện diện của các bạn sẽ cho dịp này trở nên 
thật đặc biệt."
```

**Styling:**
- Font: Lora (serif) cho body
- Size: 1.1rem
- Line-height: 1.8-2
- Color: Taupe `#8b7d6b`
- Max-width: 800px centered
- Italic cho Vietnamese text

---

### 4️⃣ PARTY HIGHLIGHTS ⭐ (SECTION QUAN TRỌNG NHẤT)

**ID:** `id="party-highlights"`

**Background:** `linear-gradient(180deg, #faf8f3 0%, #ffffff 100%)`

**Padding:** 80px vertical

**Title:**
```
CELEBRATION MOMENTS (subtitle)
Party Highlights (main title - 2.5rem)
```

---

#### 📸 Item 1: DATE + PHOTO 1

**Layout:** Photo (Left) | Info Card (Right)

**Photo 1 (media/1.jpg):**
```css
Shape: Perfect Circle
- border-radius: 50%
- width: 100%
- padding-top: 100% (aspect 1:1)
- box-shadow: 0 20px 60px rgba(0,0,0,0.15)

Badge:
- Position: absolute, bottom-right
- Size: 60px circle
- Background: Gold rgba(212,175,55,0.9)
- Content: "1"
- Font-size: 1.5rem, bold, white
```

**Info Card:**
```
┌─────────────────────────────────────┐
│  Save The Date                      │
│  (2rem, gold, Playfair)             │
│                                     │
│  Thursday                           │
│  March 13, 2026                     │
│  (1.1rem, body text)                │
│                                     │
│  ─────────                          │
│  (60px gold line)                   │
│                                     │
│  Mark your calendar for an          │
│  unforgettable evening              │
│  (0.9rem, subtitle)                 │
└─────────────────────────────────────┘

Card Style:
- Background: White
- Border-left: 4px solid gold
- Padding: 40px
- Border-radius: 12px
- Box-shadow: 0 10px 40px rgba(0,0,0,0.1)
```

---

#### 📸 Item 2: TIME + PHOTO 2

**Layout:** Info Card (Left) | Photo (Right)

**Info Card:**
```
┌─────────────────────────────────────┐
│  Time to Celebrate                  │
│  (2rem, primary color)              │
│                                     │
│  6:00 PM - 6:00 AM                  │
│  (1.3rem, gold, bold)               │
│                                     │
│  ─────────                          │
│                                     │
│  12 hours of celebration,           │
│  joy, and memories                  │
│  (0.9rem, subtitle)                 │
└─────────────────────────────────────┘

Card Style:
- Background: Cream
- Border-right: 4px solid accent
- Padding: 40px
```

**Photo 2 (media/2.jpg):**
```css
Shape: Square Rotated
- Container: rotate(3deg)
- Image: rotate(-3deg) scale(1.1)
- border-radius: 20px
- box-shadow: 0 20px 60px rgba(0,0,0,0.15)
```

---

#### 📸 Item 3: LOCATION + PHOTO 3

**Layout:** Photo (Left) | Info Card (Right)

**Photo 3 (media/3.jpg):**
```css
Shape: Rounded Rectangle (Organic)
- border-radius: 30px 30px 120px 30px
- padding-top: 75% (aspect 4:3)
- box-shadow: 0 20px 60px rgba(0,0,0,0.15)
```

**Info Card:**
```
┌─────────────────────────────────────┐
│  Venue                              │
│  (2rem, primary color)              │
│                                     │
│  TƯ GIA                             │
│  (1.3rem, bold)                     │
│                                     │
│  Tân Ngọc Phượng                    │
│  (1.1rem, body text)                │
│                                     │
│  ─────────                          │
│                                     │
│  An intimate gathering at a         │
│  private residence                  │
│  (0.9rem, subtitle)                 │
└─────────────────────────────────────┘

Card Style:
- Background: Gradient cream
- Border-left: 4px solid gold
```

---

#### 📸 Item 4: DRESS CODE + PHOTO 4

**Layout:** Info Card (Left) | Photo (Right)

**Info Card:**
```
┌─────────────────────────────────────┐
│  Dress to Impress                   │
│  (2rem, gold)                       │
│                                     │
│  Dress Code:                        │
│  Smart Casual to Elegant            │
│  (1.1rem, body text)                │
│                                     │
│  ○ ○ ○ ○                            │
│  (4 color swatches - 40px each)     │
│  Beige | Gold | Brown | Black       │
│                                     │
│  ─────────                          │
│                                     │
│  Come as you are, feel fabulous     │
│  (0.9rem, subtitle, centered)       │
└─────────────────────────────────────┘

Color Swatches (Mini):
- Size: 40px × 40px circles
- Border: 2px white
- Box-shadow: 0 2px 8px rgba(0,0,0,0.15)
- Gap: 12px
- Display: flex, justify-center
- Hover: scale(1.1) + translateY(-3px)

Colors:
1. Beige: linear-gradient(135deg, #f5e6d3, #e8d4bc)
2. Gold: linear-gradient(135deg, #d4af37, #c19a2e)
3. Brown: linear-gradient(135deg, #c4a57b, #b89968)
4. Black: linear-gradient(135deg, #2d2d2d, #1a1a1a)
```

**Photo 4 (media/4.jpg):**
```css
Shape: Organic (Curved corners)
- border-radius: 30px 120px 30px 30px
- transform: rotate(-2deg)
- Image: rotate(2deg) scale(1.05)
- padding-top: 85%
- box-shadow: 0 20px 60px rgba(0,0,0,0.15)
```

---

#### 🎯 Final CTA (Trong Party Highlights)

```
┌─────────────────────────────────────┐
│  Join Us for the Celebration        │
│  (2.5rem, script font, gold)        │
│                                     │
│  Your presence will make this       │
│  evening truly special. We can't    │
│  wait to celebrate with you!        │
│  (1.1rem, cream color)              │
│                                     │
│       [📍 Map Icon]                 │
│     (60px circle, gold)             │
└─────────────────────────────────────┘

Style:
- Background: linear-gradient(135deg, primary, accent)
- Padding: 60px 40px
- Border-radius: 20px
- Text-align: center
- Max-width: 600px text
```

---

### 5️⃣ COUNTDOWN SECTION

**ID:** `id="countdown-section"`

**Background:** Image với dark overlay

**Nội dung:**
```
┌─────────────────────────────────────┐
│        COUNTDOWN TO THE PARTY       │
│        (2rem, uppercase, cream)     │
│                                     │
│      ─────────────────              │
│                                     │
│   [🕐 Clock Icon - 60px, gold]      │
│                                     │
│   ┌────┐  ┌────┐  ┌────┐  ┌────┐   │
│   │ 99 │  │ 23 │  │ 59 │  │ 59 │   │
│   │Days│  │Hrs │  │Min │  │Sec │   │
│   └────┘  └────┘  └────┘  └────┘   │
│   (Glass-morphism boxes)            │
│                                     │
│   Countdown to: March 13, 2026      │
│   (0.9rem, champagne)               │
└─────────────────────────────────────┘
```

**Glass Box Style:**
```css
.countdown-box {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(212,175,55,0.3);
    border-radius: 15px;
    padding: 25px 15px;
}

.countdown-number {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: #d4af37;
    font-weight: 700;
}

.countdown-label {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #f7e7ce;
}
```

---

### 6️⃣ EVENT DETAILS

**Nội dung đầy đủ:**

```
┌─────────────────────────────────────┐
│         EVENT DETAILS               │
│         (2rem, centered)            │
│                                     │
│  ┌───────────────────────────────┐  │
│  │      📍 TƯ GIA                │  │
│  │                               │  │
│  │   Tân Ngọc Phượng             │  │
│  │   Private Residence           │  │
│  │                               │  │
│  │   [View on Map Button]        │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  📅 DATE & TIME               │  │
│  │                               │  │
│  │  13 / 03                      │  │
│  │  (large date display)         │  │
│  │                               │  │
│  │  2026                         │  │
│  │  (year)                       │  │
│  │                               │  │
│  │  Party Duration:              │  │
│  │  6h PM to 6h AM               │  │
│  │  (0.9rem, body text)          │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

### 7️⃣ DRESS CODE SECTION (Standalone)

**ID:** `id="dress-code"`

**Background:** Champagne (#e8dcc4) với paper texture

**Nội dung:**
```
┌─────────────────────────────────────┐
│         Dress code                  │
│    (3rem, Playfair, Burgundy)       │
│                                     │
│      ─────────────                  │
│      (80px gold gradient)           │
│                                     │
│   ⚪ ⚪ ⚪ ⚪                          │
│   (100px circles)                   │
│   Beige | Gold | Brown | Black      │
│                                     │
│   Suggested Color Tones             │
│   (0.9rem, subtitle)                │
│                                     │
│   Come as you are, feel fabulous    │
│   (italic)                          │
└─────────────────────────────────────┘
```

**Color Circles (Large):**
```css
.color-swatch {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ffffff;
    box-shadow: 
        0 4px 15px rgba(0,0,0,0.1),
        0 2px 8px rgba(0,0,0,0.05),
        inset 0 1px 2px rgba(255,255,255,0.3);
    transition: all 0.3s ease;
}

.color-swatch:hover {
    transform: translateY(-5px) scale(1.1);
}

/* Float animation */
.color-swatch:nth-child(1) {
    animation: floatSwatch 3s ease-in-out infinite;
    animation-delay: 0s;
}
.color-swatch:nth-child(2) {
    animation-delay: 0.3s;
}
/* etc... */
```

**Paper Texture:**
```css
.dress-code-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px);
    opacity: 0.3;
    pointer-events: none;
}
```

---

### 8️⃣ TIMELINE (Optional - display: none)

**ID:** `id="time-line"`

**Default:** Hidden (`style="display: none;"`)

**Nội dung:** Schedule/Timeline của event (nếu cần)

---

### 9️⃣ ALBUM / PHOTO GALLERY

**ID:** `id="album"`

**Background:** White or cream

**Nội dung:**
```
┌─────────────────────────────────────┐
│         Photo Gallery               │
│    or "Moments to Remember"         │
│         (2.5rem, centered)          │
│                                     │
│   ┌─────────────────────────────┐   │
│   │  Swiper Slider Container    │   │
│   │                             │   │
│   │  [Photo 1] [Photo 2] ...    │   │
│   │  (Swipeable slider)         │   │
│   │                             │   │
│   │  • • • • (Pagination)       │   │
│   └─────────────────────────────┘   │
│                                     │
│   Hoặc Grid Layout:                 │
│                                     │
│   [Photo 1][Photo 1][Photo 2][Photo 3] │
│   [Photo 4][Photo 2][Photo 2][Photo 3] │
│   (Grid asymmetric 4x2)             │
└─────────────────────────────────────┘
```

**Priority Photos (THỨ TỰ QUAN TRỌNG):**
1. **media/1.jpg** - Ảnh chính, priority cao nhất
2. **media/2.jpg** - Ảnh phụ quan trọng
3. **media/3.jpg** - Ảnh phụ quan trọng
4. **media/4.jpg** - Ảnh phụ quan trọng
5. Các ảnh khác (nếu có)

**Grid Layout (Recommended):**
```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 300px);
    grid-template-areas: 
        "a a b c"
        "d b b c";
    gap: 20px;
}

.gallery-item:nth-child(1) { grid-area: a; } /* Photo 1 */
.gallery-item:nth-child(2) { grid-area: b; } /* Photo 2 */
.gallery-item:nth-child(3) { grid-area: c; } /* Photo 3 */
.gallery-item:nth-child(4) { grid-area: d; } /* Photo 4 */
```

---

### 🔟 GIFT SECTION (Optional - display: none)

**ID:** `id="gift"`

**Default:** Hidden (`style="display:none"`)

**Nội dung:** Gift registry / Mừng cưới info (nếu cần)

---

### 1️⃣1️⃣ THANK YOU SECTION

**ID:** `id="thankyou"`

**Background:** `linear-gradient(135deg, var(--party-cream), #ffffff)`

**Nội dung:**
```
┌─────────────────────────────────────┐
│    Looking forward to               │
│    celebrating with you             │
│    (2rem, script font, gold)        │
│                                     │
│    Your presence will make this     │
│    celebration truly memorable      │
│    (1.1rem, body text)              │
│                                     │
│    Thank you!                       │
│    (1.5rem, italic)                 │
└─────────────────────────────────────┘
```

**Styling:**
- Text-align: center
- Padding: 80px vertical
- No images (text only)
- Simple & elegant

---

### 1️⃣2️⃣ FOOTER

**Background:** Dark (#1a1a1a)

**Nội dung:**
```
┌─────────────────────────────────────┐
│    Private Party by TAM             │
│    (1rem, champagne)                │
│                                     │
│    © 2026                           │
│    (0.8rem, gray)                   │
└─────────────────────────────────────┘
```

---

## 📸 THỨ TỰ & SỬ DỤNG ẢNH (EXACT ORDER)

### 🎯 Priority Photos (Bắt buộc):

```
📁 media/
├── 1.jpg ⭐⭐⭐⭐⭐ PRIORITY 1 (Highest)
│   ├─ Sử dụng: Party Highlights Item 1 (Circle)
│   ├─ Sử dụng: Photo Gallery grid area 'a' (large)
│   └─ Style: Circle shape, badge "1"
│
├── 2.jpg ⭐⭐⭐⭐ PRIORITY 2
│   ├─ Sử dụng: Party Highlights Item 2 (Square rotated)
│   ├─ Sử dụng: Photo Gallery grid area 'b' (tall)
│   └─ Style: Square rotated 3deg
│
├── 3.jpg ⭐⭐⭐⭐ PRIORITY 3
│   ├─ Sử dụng: Party Highlights Item 3 (Rounded rect)
│   ├─ Sử dụng: Photo Gallery grid area 'c' (tall)
│   └─ Style: Rounded rectangle organic
│
└── 4.jpg ⭐⭐⭐⭐ PRIORITY 4
    ├─ Sử dụng: Party Highlights Item 4 (Organic shape)
    ├─ Sử dụng: Photo Gallery grid area 'd'
    └─ Style: Organic curved corners
```

### 📊 Image Usage Map:

| Ảnh | Party Highlights | Gallery | Shape | Priority |
|-----|------------------|---------|-------|----------|
| 1.jpg | Item 1 (Circle + Badge) | Grid A (Large) | Circle | ⭐⭐⭐⭐⭐ |
| 2.jpg | Item 2 (Square rotated) | Grid B (Tall) | Square | ⭐⭐⭐⭐ |
| 3.jpg | Item 3 (Rounded rect) | Grid C (Tall) | Rounded | ⭐⭐⭐⭐ |
| 4.jpg | Item 4 (Organic) | Grid D | Organic | ⭐⭐⭐⭐ |

### ⚠️ QUY TẮC QUAN TRỌNG:

✅ **BẮT BUỘC:**
- 4 ảnh phải có đầy đủ: 1.jpg, 2.jpg, 3.jpg, 4.jpg
- Thứ tự không được đổi
- Mỗi ảnh có shape riêng biệt

❌ **KHÔNG ĐƯỢC:**
- Đổi thứ tự ảnh (1→4 bắt buộc)
- Bỏ qua bất kỳ ảnh nào
- Sử dụng ảnh khác thay thế

---

## 🎨 THÔNG TIN THIỆP (EXACT CONTENT)

### 📝 Event Information (Chuẩn xác):

```yaml
Event Name: "PRIVATE PARTY"
Host: "TAM"
Event Type: "Private gathering / Celebratory gathering"

Date:
  Day: "Thursday"
  Date: "March 13, 2026"
  Date Short: "13 / 03"
  Year: "2026"

Time:
  Start: "6:00 PM" (hoặc "6h PM")
  End: "6:00 AM" (hoặc "6h AM")
  Duration: "12 hours"
  Display: "Start 6h PM to 6h AM"

Location:
  Venue: "TƯ GIA" (Private Residence)
  Address: "Tân Ngọc Phượng"
  Type: "Private residence"

Dress Code:
  Style: "Smart Casual to Elegant"
  Colors:
    - Beige/Nude (#f5e6d3 → #e8d4bc)
    - Gold (#d4af37 → #c19a2e)
    - Warm Brown (#c4a57b → #b89968)
    - Black (#2d2d2d → #1a1a1a)
  Tagline: "Come as you are, feel fabulous"
```

### 💬 Messages (Exact Text):

**English Invitation:**
```
"I would be honored to have my dearest family and friends 
join me for a celebratory gathering at my private residence. 
Your presence would make this occasion truly special."
```

**Vietnamese Invitation:**
```
"Tâm rất vinh dự được mời những người thân yêu trong gia đình 
và bạn bè thân thiết đến tham dự buổi tiệc mừng tại tư gia riêng 
của gia đình Tâm. Sự hiện diện của các bạn sẽ cho dịp này trở nên 
thật đặc biệt."
```

**Thank You Message:**
```
"Looking forward to celebrating with you"

"Your presence will make this celebration truly memorable"
```

---

## 🎯 PROMPT TEMPLATE CẬP NHẬT (Với Structure Chính Xác)

```markdown
Tạo thiệp mời digital với CẤU TRÚC VÀ THỨ TỰ SAU:

═══════════════════════════════════════════════════════

📋 EVENT INFO:
- Name: [Event Name]
- Host: [Host Name]
- Date: [Day], [Month DD, YYYY]
- Time: [Start Time] to [End Time]
- Location: [Venue Name], [Address]

═══════════════════════════════════════════════════════

🎬 SEQUENCE (BẮT BUỘC THEO THỨ TỰ):

1. DOOR OVERLAY (Fixed z-index: 99999)
   - 2 cánh từ giữa sang 2 bên
   - Text: "[EVENT NAME] BY [HOST]"
   - Duration: 2s
   - Auto-start, no delay
   - Background transparent (nội dung visible phía sau)

2. PRELOADER (Optional)
   - Logo/icon animation
   - Event name

3. BANNER/HERO
   - Background: Dark gradient
   - Title: "[EVENT NAME]"
   - Subtitle: "BY [HOST]"
   - Event details preview
   - Map button

4. INVITATION MESSAGE
   - English message
   - Vietnamese message
   - Centered, serif font

5. PARTY HIGHLIGHTS ⭐ (QUAN TRỌNG)
   - Title: "CELEBRATION MOMENTS" + "Party Highlights"
   - 4 Items với 4 photos (THỨ TỰ BẮT BUỘC):
   
   Item 1: Circle Photo (1.jpg) + Date Card
   - Photo: Perfect circle, badge "1"
   - Info: Date, Day, Message
   
   Item 2: Time Card + Square Photo (2.jpg)
   - Photo: Square rotated 3deg
   - Info: Time range, Duration
   
   Item 3: Rounded Photo (3.jpg) + Location Card
   - Photo: Rounded rectangle organic
   - Info: Venue, Address
   
   Item 4: Dress Code Card + Organic Photo (4.jpg)
   - Photo: Organic curved corners
   - Info: Dress code + 4 color swatches (40px)
   
   Final CTA:
   - "Join Us for the Celebration"
   - Message + Map button

6. COUNTDOWN SECTION
   - Glass-morphism boxes
   - Days | Hours | Mins | Secs
   - Title: "COUNTDOWN TO THE PARTY"

7. EVENT DETAILS
   - Date display: DD / MM / YYYY
   - Time: Duration text
   - Location: Full address
   - Map link button

8. DRESS CODE (Standalone Section)
   - Title: "Dress code" (Burgundy)
   - 4 color swatches (100px):
     * Beige/Nude
     * Gold
     * Warm Brown
     * Black
   - Paper texture background
   - Float animation
   - Tagline: "Come as you are, feel fabulous"

9. TIMELINE (Optional - display: none)

10. PHOTO GALLERY
    - Grid 4x2 asymmetric:
      [1][1][2][3]
      [4][2][2][3]
    - Priority photos: 1.jpg → 4.jpg
    - Hover effects
    - Responsive stack

11. GIFT SECTION (Optional - display: none)

12. THANK YOU
    - Simple text only
    - No images
    - Centered message

13. FOOTER
    - Copyright
    - Year

═══════════════════════════════════════════════════════

📸 IMAGES (THỨ TỰ BẮT BUỘC):

Required:
- media/1.jpg → Circle, Party Highlights Item 1, Gallery A
- media/2.jpg → Square, Party Highlights Item 2, Gallery B
- media/3.jpg → Rounded, Party Highlights Item 3, Gallery C
- media/4.jpg → Organic, Party Highlights Item 4, Gallery D

KHÔNG ĐƯỢC đổi thứ tự hoặc bỏ qua ảnh nào!

═══════════════════════════════════════════════════════

🎨 COLORS:
- Primary: #1a1a1a (Black)
- Gold: #d4af37 (Champagne gold)
- Background: #faf8f3 (Cream)
- Accent: #8b7355 (Taupe)
- Burgundy: #8b2332 (For dress code title)

═══════════════════════════════════════════════════════

✅ REQUIREMENTS:
- HTML + CSS + JS thuần (chỉ dùng AOS library)
- Responsive: Desktop/Tablet/Mobile
- AOS animations: fade-up
- Hover effects: lift + scale + zoom
- Door animation: Elastic 2s
- Countdown: UIKit hoặc custom
- Comments rõ ràng cho từng section

═══════════════════════════════════════════════════════

Tạo code hoàn chỉnh theo ĐÚNG structure và sequence trên!
```

---

## ✅ CHECKLIST HOÀN CHỈNH

### Structure & Sequence:
- [ ] Door overlay (z-index 99999, auto-start)
- [ ] Preloader (optional)
- [ ] Banner/Hero
- [ ] Invitation message (EN + VN)
- [ ] Party Highlights (4 items, đúng thứ tự)
- [ ] Countdown section
- [ ] Event details
- [ ] Dress Code standalone
- [ ] Timeline (optional, hidden)
- [ ] Photo gallery
- [ ] Gift section (optional, hidden)
- [ ] Thank you
- [ ] Footer

### Images:
- [ ] 1.jpg - Circle, Item 1, Priority 1
- [ ] 2.jpg - Square, Item 2, Priority 2
- [ ] 3.jpg - Rounded, Item 3, Priority 3
- [ ] 4.jpg - Organic, Item 4, Priority 4
- [ ] Đúng thứ tự 1→4
- [ ] Không đổi, không bỏ qua

### Content:
- [ ] Event name đúng
- [ ] Date/Time đúng format
- [ ] Location đúng
- [ ] Messages đúng (EN + VN)
- [ ] Dress code 4 màu đúng
- [ ] Taglines đúng

### Technical:
- [ ] Door animation 2s, no delay
- [ ] AOS animations
- [ ] Responsive 3 breakpoints
- [ ] Hover effects
- [ ] Countdown working
- [ ] Map links
- [ ] Comments clear

---

**Version:** 2.0 - Exact Structure  
**Updated:** February 7, 2026  
**Status:** ✅ Complete & Accurate

---

**💡 LƯU Ý QUAN TRỌNG:**

1. **THỨ TỰ SECTIONS** không được đổi
2. **THỨ TỰ ẢNH** 1→4 bắt buộc
3. **NỘI DUNG** phải giống y hệt
4. **DOOR ANIMATION** bắt đầu ngay, không delay
5. **PARTY HIGHLIGHTS** là section quan trọng nhất - phải có đầy đủ 4 items

Sử dụng document này làm checklist khi tạo thiệp mới để đảm bảo 100% giống format gốc!

