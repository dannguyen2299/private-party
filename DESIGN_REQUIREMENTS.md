# 📝 DESIGN REQUIREMENTS DOCUMENT
## THIỆP MỜI PRIVATE PARTY - TEMPLATE SPECIFICATIONS

> **Mục đích:** Document này ghi lại toàn bộ yêu cầu thiết kế của thiệp mời hiện tại để sử dụng làm prompt tạo các thiệp tương tự.

---

## 🎨 1. TỔNG QUAN THIẾT KẾ

### 1.1 Loại Thiệp
- **Type:** Private Party Invitation / Digital Invitation
- **Format:** Single-page HTML website
- **Style:** Modern Luxury / Elegant Private Event
- **Target:** High-end private gathering, intimate celebration

### 1.2 Màu Sắc Chủ Đạo
```css
--party-primary: #1a1a1a      /* Đen chủ đạo */
--party-gold: #d4af37          /* Vàng champagne accent */
--party-champagne: #f7e7ce     /* Kem/champagne */
--party-cream: #faf8f3         /* Trắng kem nền */
--party-accent: #8b7355        /* Nâu taupe */
```

**Nguyên tắc màu:**
- Background chính: Cream (#faf8f3) - Nhẹ nhàng, sang trọng
- Text chính: Đen (#1a1a1a) - Dễ đọc
- Accent: Gold (#d4af37) - Highlight quan trọng
- Gradient: Sử dụng để tạo depth và sophistication

---

## 🚪 2. DOOR OPENING ANIMATION (Yêu cầu bắt buộc)

### 2.1 Cấu Trúc
```
Overlay fullscreen → 2 cánh cửa (50% width mỗi cánh) → Text giữa
```

### 2.2 Yêu cầu Chi Tiết
**Cánh cửa:**
- Position: Fixed fullscreen overlay
- 2 div: door-left (50vw) + door-right (50vw)
- Background: Gradient dark (#1a1a1a → #2d2d2d)
- Border giữa: Vertical gold gradient line (3px)
- Shadow: Inset shadow cho depth
- Animation: `transform: translateX(-100%)` và `translateX(100%)`

**Text giữa:**
- Content: "PRIVATE PARTY\nBY TAM" (hoặc tên event)
- Font: Playfair Display hoặc serif cao cấp
- Size: 3.5-4rem (responsive)
- Color: Gold (#d4af37)
- Effect: Glow shadow với gold color
- Animation: Fade out + scale up khi cửa mở

**Timing:**
- Delay ban đầu: 0ms (start ngay)
- Duration animation: 2 giây
- Easing: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (elastic)
- Remove overlay: Sau 2 giây

**JavaScript:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('door-overlay');
    overlay.classList.add('open');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 2000);
});
```

---

## 📄 3. CẤU TRÚC SECTIONS (Theo thứ tự)

### 3.1 BANNER / HERO SECTION
**Yêu cầu:**
- Background: Black gradient (#1a1a1a → #2d2d2d)
- Padding: 80-100px vertical
- Text align: Center

**Nội dung:**
1. **Subtitle:** "PLEASE JOIN US FOR" (0.9rem, uppercase, letter-spacing 4px, cream color)
2. **Main Title:** "PRIVATE PARTY" (4-5rem, Playfair Display, Gold, Bold)
3. **By Line:** "BY TAM" (2-3rem, Playfair italic, Champagne)
4. **Event Details:**
   - Time: "Start 6h PM to 6h AM"
   - Location: "TƯ GIA" + "Tân Ngọc Phượng"
   - Icon map link

**Elements đặc biệt:**
- Decorative elements (✦, ornaments)
- Gradient divider line
- Background pattern (subtle dots/lines)

**Responsive:**
- Mobile: Font size giảm 30-40%
- Stack vertical
- Padding reduce

---

### 3.2 INVITATION MESSAGE
**Yêu cầu:**
- Background: White hoặc cream gradient
- Padding: 60-80px
- Max-width: 800px centered

**Nội dung:**
1. **Heading:** "A Celebration" hoặc tương tự
2. **Message Tiếng Anh:**
   ```
   "I would be honored to have my dearest family and friends join me 
   for a celebratory gathering at my private residence. Your presence 
   would make this occasion truly special."
   ```
3. **Message Tiếng Việt:**
   ```
   "Tâm rất vinh dự được mời những người thân yêu trong gia đình và 
   bạn bè thân thiết đến tham dự buổi tiệc mừng tại tư gia riêng của 
   gia đình Tâm. Sự hiện diện của các bạn sẽ cho dịp này trở nên thật 
   đặc biệt."
   ```

**Styling:**
- Font: Serif cho heading, Sans-serif cho body
- Line height: 1.8-2
- Color: Taupe (#8b7d6b) cho body text
- Text align: Center
- Italic cho Vietnamese text

---

### 3.3 PARTY HIGHLIGHTS SECTION (Yêu cầu quan trọng!)

**Cấu trúc tổng thể:**
- Background: Gradient cream (#faf8f3 → #ffffff)
- Padding: 80px vertical
- Max-width: 1200px
- AOS animations: fade-up

**Layout:** 4 items xen kẽ photo + info

#### Item 1: DATE INFO
**Grid:** Photo (Circle) | Info Card
- **Photo:**
  - Shape: Perfect circle (border-radius: 50%)
  - Image: media/1.jpg
  - Badge number: "1" trong circle vàng (bottom-right)
  - Shadow: 0 20px 60px rgba(0,0,0,0.15)
  
- **Info Card:**
  - Background: White
  - Border-left: 4px solid gold
  - Padding: 40px
  - Border-radius: 12px
  - Content:
    * Title: "Save The Date" (2rem, gold)
    * Date: "March 13, 2026"
    * Day: "Thursday"
    * Divider: Gold line 60px
    * Subtitle: "Mark your calendar for an unforgettable evening"

#### Item 2: TIME INFO
**Grid:** Info Card | Photo (Square Rotated)
- **Info Card:**
  - Background: Cream
  - Border-right: 4px solid accent
  - Content:
    * Title: "Time to Celebrate"
    * Time: "6:00 PM - 6:00 AM" (1.3rem, gold, bold)
    * Subtitle: "12 hours of celebration, joy, and memories"
    
- **Photo:**
  - Shape: Square với rotation 3deg
  - Image: media/2.jpg rotated -3deg + scale 1.1
  - Border-radius: 20px
  - Transform: rotate(3deg) on container

#### Item 3: LOCATION INFO
**Grid:** Photo (Rounded Rectangle) | Info Card
- **Photo:**
  - Shape: Rounded rectangle với corner curve
  - Border-radius: 30px 30px 120px 30px (organic shape)
  - Aspect ratio: 75% (padding-top)
  - Image: media/3.jpg
  
- **Info Card:**
  - Background: Gradient cream
  - Content:
    * Title: "Venue"
    * Location: "TƯ GIA" (1.3rem, bold)
    * Address: "Tân Ngọc Phượng"
    * Subtitle: "An intimate gathering at a private residence"

#### Item 4: DRESS CODE
**Grid:** Info Card | Photo (Organic Shape)
- **Info Card:**
  - Background: White
  - Border-right: 4px solid gold
  - Content:
    * Title: "Dress to Impress"
    * Dress Code: "Smart Casual to Elegant"
    * **4 Color Swatches:** (YÊU CẦU ĐẶC BIỆT)
      - Beige/Nude: #f5e6d3 → #e8d4bc
      - Gold: #d4af37 → #c19a2e
      - Warm Brown: #c4a57b → #b89968
      - Black: #2d2d2d → #1a1a1a
      - Size: 40px circles
      - Border: 2px white
      - Shadow: soft
      - Hover: Scale + translateY
    * Tagline: "Come as you are, feel fabulous"
    
- **Photo:**
  - Shape: Organic (border-radius: 30px 120px 30px 30px)
  - Transform: rotate(-2deg)
  - Image: media/4.jpg rotated 2deg + scale 1.05
  - Aspect ratio: 85%

**Final CTA:**
- Background: Gradient (primary → accent)
- Padding: 60px 40px
- Border-radius: 20px
- Content:
  * Title: "Join Us for the Celebration" (script font)
  * Message: "Your presence will make this evening truly special..."
  * Map icon button (gold, 60px circle)

**Responsive (QUAN TRỌNG):**
```css
@media (max-width: 768px) {
    .highlight-row {
        grid-template-columns: 1fr !important; /* Stack vertical */
        gap: 25px !important;
    }
    
    .photo-shape {
        max-width: 350px;
        margin: 0 auto;
    }
    
    /* Giảm border-radius phức tạp trên mobile */
    .photo-rounded-rect {
        border-radius: 25px 25px 80px 25px !important;
    }
    
    .photo-organic {
        border-radius: 25px 80px 25px 25px !important;
    }
}
```

---

### 3.4 COUNTDOWN TIMER
**Yêu cầu:**
- Background: Image với overlay gradient
- Countdown format: Days | Hours | Minutes | Seconds
- Style: Glass-morphism boxes
  - Background: rgba(255,255,255,0.1)
  - Backdrop-filter: blur(10px)
  - Border: 2px gold với opacity 0.3
  - Border-radius: 15px
  - Padding: 25px 15px

**Numbers:**
- Font: Playfair Display
- Size: 3rem
- Color: Gold
- Animation: Pulse

**Labels:**
- Font: Montserrat
- Size: 0.9rem
- Uppercase, letter-spacing: 2px
- Color: Champagne

**Title:**
- "COUNTDOWN TO THE PARTY"
- Font-size: 2rem
- Color: Cream
- Letter-spacing: 3px

**Decorative:**
- Clock icon (60px, gold, fade-down)
- Divider line (100px, gold gradient)

---

### 3.5 EVENT DETAILS
**Yêu cầu:**
- Background: White
- Centered layout
- Max-width: 800px

**Content:**
1. **Title:** "EVENT DETAILS" (2rem, uppercase)
2. **Location Card:**
   - Title: "TƯ GIA" (2rem)
   - Address: "Tân Ngọc Phượng"
   - Map link button
3. **Date/Time Info:**
   - Date: "13 / 03" / "2026"
   - Duration: "Party Duration: 6h PM to 6h AM"

**Styling:**
- Icon-based info display
- Card with shadow
- Border-left accent

---

### 3.6 DRESS CODE SECTION (Standalone)
**Yêu cầu:**
- Background: Champagne (#e8dcc4)
- Padding: 80px 20px
- Text-align: center

**Content:**
1. **Title:** "Dress code" 
   - Font: Playfair Display
   - Size: 3rem
   - Color: Burgundy (#8b2332)
   - Letter-spacing: 4px
   
2. **Decorative Line:**
   - Width: 80px
   - Height: 3px
   - Gradient gold
   - Margin: 20px auto

3. **4 Color Circles:** (100px each)
   - Beige/Nude
   - Gold
   - Warm Brown
   - Black
   - Border: 4px white
   - Shadow: soft
   - Hover: translateY(-5px) + scale(1.1)
   - Animation: Float (3s staggered)

4. **Paper Texture:**
   ```css
   background-image: 
       repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px),
       repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px);
   opacity: 0.3;
   ```

**Responsive:**
- Mobile: Circles 70px → 50px
- Title: 3rem → 1.8rem
- Gap reduce

---

### 3.7 PHOTO GALLERY
**Yêu cầu:**
- Background: Cream
- Padding: 60px 20px
- Title: "Moments to Remember" hoặc "Cherished Moments"

**Layout:**
- Grid asymmetric 4x2
- Grid template areas:
  ```
  "a a b c"
  "d b b c"
  ```
- Gap: 20px
- Max-width: 1200px

**Images:**
- Priority: 1.jpg, 2.jpg, 3.jpg, 4.jpg
- Object-fit: cover
- Border-radius: 20px (creative) hoặc 8px (elegant)
- Border: 2-4px white
- Shadow: 0 8px 25px rgba(0,0,0,0.15)

**Hover Effects:**
- Transform: translateY(-8px) + scale(1.02-1.05)
- Border-color: Gold (elegant) hoặc Pink (creative)
- Image scale: 1.1
- Shadow increase

**Responsive:**
- Desktop: 4x2 grid
- Tablet (≤768px): 2x2 grid `"a b" "c d"`
- Mobile (≤480px): 1 column stack

---

### 3.8 THANK YOU / CLOSING
**Yêu cầu:**
- Background: White hoặc gradient
- Padding: 60-80px
- Text-align: center

**Content:**
- Quote: Script font, 2-2.5rem, Gold/accent color
- Message: "Looking forward to celebrating with you"
- Note: "Your presence will make this celebration truly memorable"
- Copyright: "Private Party © 2026"

---

### 3.9 FOOTER
**Yêu cầu:**
- Background: Dark (#1a1a1a)
- Padding: 50px
- Color: Champagne

**Content:**
- Quote or message
- Credits
- Year

---

## 📱 4. RESPONSIVE REQUIREMENTS

### 4.1 Breakpoints
```css
Desktop:  > 992px   /* Full layout */
Tablet:   481-992px /* Simplified */
Mobile:   ≤ 480px   /* Stack vertical */
```

### 4.2 Mobile Adjustments
**Fonts:**
- Main title: -40% (4rem → 2.5rem)
- Subtitles: -30%
- Body: -10%

**Spacing:**
- Padding: 80px → 60px → 40px
- Gap: 40px → 25px → 15px
- Margins: Reduce 30-50%

**Grid:**
- 2 columns → 1 column
- Maintain aspect ratios
- Center align

**Images:**
- Max-width: 350px on mobile
- Simplify border-radius curves
- Reduce rotations (3deg → 1deg)
- Badge size: 60px → 50px

**Colors:**
- No color changes
- Maintain contrast ratios

---

## 🎨 5. TYPOGRAPHY REQUIREMENTS

### 5.1 Font Families
**Primary Fonts:**
- **Serif:** Playfair Display (headings, titles, elegant text)
  - Weights: 400, 600, 700
  - Use for: Main titles, event names, quotes
  
- **Sans-serif:** Montserrat hoặc Lora (body text)
  - Weights: 300, 400, 500
  - Use for: Body text, descriptions, labels

- **Script:** Dancing Script hoặc Great Vibes (decorative)
  - Use for: Quotes, special messages

### 5.2 Font Sizes
```css
/* Desktop */
Main Title:       4-5rem
Section Title:    2-2.5rem
Subtitle:         1.5-2rem
Body:             1-1.1rem
Small/Label:      0.8-0.9rem

/* Mobile */
Main Title:       2.5-3rem
Section Title:    1.8-2rem
Subtitle:         1.2-1.5rem
Body:             0.95-1rem
Small/Label:      0.75-0.85rem
```

### 5.3 Text Styling
```css
Letter-spacing:
- Uppercase headings: 2-4px
- Normal text: 0-1px
- Titles: 2-5px

Line-height:
- Headings: 1.2-1.3
- Body: 1.8-2
- Tight: 1.1

Font-weight:
- Headings: 600-700
- Body: 400
- Emphasis: 500-600
```

---

## 🎭 6. ANIMATION & EFFECTS

### 6.1 AOS (Animate On Scroll)
**Cài đặt:**
```html
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
```

**Sử dụng:**
```html
<div data-aos="fade-up" data-aos-duration="1000">
```

**Animations:**
- fade-up: Phần lớn sections
- fade-down: Headers, icons
- fade-left/right: Alternating items
- zoom-in: Photos, cards

**Duration:**
- Standard: 1000ms (1s)
- Fast: 600-800ms
- Slow: 1200-1500ms

**Delays:**
- Stagger: 100-200ms giữa items
- Groups: 300-500ms between groups

### 6.2 Hover Effects
**Cards:**
```css
transition: all 0.3s ease;
transform: translateY(-5px) scale(1.02);
box-shadow: increase intensity;
border-color: highlight color;
```

**Buttons:**
```css
transition: all 0.3s ease;
transform: translateY(-3px);
background: darken or change color;
box-shadow: larger glow;
```

**Images:**
```css
transition: transform 0.4s ease;
transform: scale(1.1);
```

**Color Swatches:**
```css
transition: all 0.4s cubic-bezier;
transform: translateY(-5px) scale(1.15);
box-shadow: glow effect;
```

### 6.3 Custom Animations
**Float Animation:**
```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}
animation: float 3s ease-in-out infinite;
```

**Pulse (Numbers):**
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
```

**Fade In Up:**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Glow:**
```css
@keyframes textGlow {
    0%, 100% {
        text-shadow: 0 0 20px rgba(212,175,55,0.6);
    }
    50% {
        text-shadow: 0 0 30px rgba(212,175,55,0.8);
    }
}
```

---

## 🎨 7. SPECIAL EFFECTS

### 7.1 Glassmorphism
```css
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 7.2 Gradient Text
```css
.gradient-text {
    background: linear-gradient(135deg, #fff, #a78bfa, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### 7.3 Shadows
```css
/* Soft shadow */
box-shadow: 0 4px 15px rgba(0,0,0,0.1);

/* Medium shadow */
box-shadow: 0 10px 40px rgba(0,0,0,0.15);

/* Deep shadow */
box-shadow: 0 20px 60px rgba(0,0,0,0.2);

/* Glow shadow */
box-shadow: 0 0 20px rgba(212,175,55,0.5);
```

### 7.4 Border Radius
```css
/* Simple */
border-radius: 8-12px;

/* Rounded */
border-radius: 20-30px;

/* Organic shapes */
border-radius: 30px 120px 30px 30px;
border-radius: 30px 30px 120px 30px;

/* Circle */
border-radius: 50%;
```

---

## 🎯 8. ICON & DECORATIVE ELEMENTS

### 8.1 Icons Sử Dụng
```
📅 Date/Calendar
🕕 Time/Clock
📍 Location/Map
👔 Dress code/Fashion
✨ Sparkle/Magic
✦ Decorative star
🎉 Party/Celebration
🥂 Toast/Cheers
💌 Invitation/Message
```

### 8.2 Icon Libraries
- Remix Icon (recommended)
- Font Awesome
- Material Icons
- Custom SVG

### 8.3 Decorative Elements
**Corner Ornaments:**
```css
.corner-ornament {
    position: absolute;
    width: 80px;
    height: 80px;
    border-style: solid;
    border-color: gold;
    opacity: 0.3;
}
/* 4 corners: top-left, top-right, bottom-left, bottom-right */
```

**Divider Lines:**
```css
.divider {
    width: 60-100px;
    height: 2-3px;
    background: linear-gradient(90deg, transparent, gold, transparent);
    margin: 20px auto;
}
```

**Background Patterns:**
- Subtle dots/circles
- Lines pattern
- Noise texture
- Gradient overlays

---

## 📸 9. IMAGE REQUIREMENTS

### 9.1 Folder Structure
```
media/
├── 1.jpg  (Priority - Main highlight)
├── 2.jpg  (Priority - Second highlight)
├── 3.jpg  (Priority - Third highlight)
├── 4.jpg  (Priority - Fourth highlight)
├── [other images for gallery]
└── background.jpg (optional)
```

### 9.2 Image Specs
**Format:** JPG (preferred), PNG
**Size:** 800-1200px width
**Aspect Ratio:** Any (use object-fit: cover)
**Quality:** 80-85%
**Optimization:** Compress for web

### 9.3 Object Fit
```css
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; /* or top, bottom, etc */
}
```

### 9.4 Photo Shapes
1. **Circle:** Perfect circle, good for portraits
2. **Square Rotated:** Dynamic, modern feel
3. **Rounded Rectangle:** Organic, soft
4. **Organic Shape:** Creative, unique curves

---

## 🎨 10. CSS VARIABLES (REQUIRED)

### 10.1 Color Variables
```css
:root {
    /* Primary Colors */
    --party-primary: #1a1a1a;      /* Dark/Black */
    --party-gold: #d4af37;          /* Gold accent */
    --party-champagne: #f7e7ce;     /* Champagne */
    --party-cream: #faf8f3;         /* Cream background */
    --party-accent: #8b7355;        /* Taupe/Brown */
    
    /* Optional Extended */
    --party-burgundy: #6b2737;      /* Deep red */
    --party-white: #ffffff;
    --party-gray: #e5e7eb;
}
```

### 10.2 Spacing Variables (Optional)
```css
:root {
    --spacing-xs: 10px;
    --spacing-sm: 20px;
    --spacing-md: 40px;
    --spacing-lg: 60px;
    --spacing-xl: 80px;
}
```

---

## 🛠️ 11. TECHNICAL REQUIREMENTS

### 11.1 HTML Structure
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- SEO Meta Tags -->
    <!-- Google Fonts -->
    <!-- AOS CSS -->
    <!-- Custom CSS -->
</head>
<body>
    <!-- Door Overlay -->
    <!-- Preloader (optional) -->
    <!-- Banner/Hero -->
    <!-- Invitation Message -->
    <!-- Party Highlights -->
    <!-- Countdown -->
    <!-- Event Details -->
    <!-- Dress Code -->
    <!-- Gallery -->
    <!-- Thank You -->
    <!-- Footer -->
    
    <!-- Scripts -->
</body>
</html>
```

### 11.2 CSS Organization
1. Reset/Base styles
2. CSS Variables
3. Door animation
4. Typography
5. Layout/Grid
6. Components (cards, buttons, etc)
7. Sections (in order)
8. Animations
9. Responsive (media queries at end)

### 11.3 JavaScript Requirements
```javascript
// 1. Door opening animation
// 2. AOS initialization
// 3. Countdown timer (UIKit or custom)
// 4. Smooth scroll (optional)
// 5. Lazy loading (optional)
```

### 11.4 External Libraries
**Required:**
- Google Fonts
- AOS (Animate On Scroll)

**Optional:**
- UIKit (for countdown)
- Swiper (for gallery slider)
- Fancybox (for image lightbox)

### 11.5 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## ✅ 12. CHECKLIST YÊU CẦU

### 12.1 Bắt Buộc Có
- [x] Door opening animation (2 cánh từ giữa)
- [x] Banner với event name
- [x] Invitation message (EN + VN)
- [x] Party Highlights (4 items với 4 photos)
- [x] Dress Code section với 4 màu
- [x] Photo gallery (grid layout)
- [x] Event details (date, time, location)
- [x] Map link
- [x] Thank you message
- [x] Footer
- [x] Responsive mobile/tablet/desktop
- [x] AOS animations

### 12.2 Highly Recommended
- [x] Countdown timer
- [x] Color swatches trong highlights
- [x] Gradient backgrounds
- [x] Hover effects
- [x] Corner ornaments
- [x] Divider lines
- [x] Icon decorations
- [x] Paper texture background

### 12.3 Optional Enhancements
- [ ] Preloader animation
- [ ] Background music
- [ ] Gallery lightbox
- [ ] RSVP form
- [ ] Guest book
- [ ] Timeline section
- [ ] Video section
- [ ] Gift registry
- [ ] Share buttons

---

## 🎯 13. PROMPT TEMPLATE ĐỀ XUẤT

```markdown
Tạo một thiệp mời digital cho [EVENT NAME] với các yêu cầu sau:

### 1. Door Opening Animation
- 2 cánh cửa từ giữa màn hình kéo sang 2 bên
- Background: [COLOR]
- Text giữa: "[EVENT NAME]"
- Animation: 2 giây, elastic easing
- Font: [FONT NAME]

### 2. Color Scheme
- Primary: [COLOR + HEX]
- Accent: [COLOR + HEX]
- Background: [COLOR + HEX]
- Text: [COLOR + HEX]

### 3. Nội Dung
**Event:** [EVENT TYPE]
**Date:** [DATE]
**Time:** [TIME RANGE]
**Location:** [VENUE NAME], [ADDRESS]

**Message:** 
[Your invitation message here]

### 4. Party Highlights Section
Tạo 4 items xen kẽ photo + info card:
1. Date info + Circle photo (media/1.jpg)
2. Time info + Square rotated photo (media/2.jpg)
3. Location info + Rounded rectangle photo (media/3.jpg)
4. Dress code info + Organic shape photo (media/4.jpg)

### 5. Dress Code
4 màu sắc: [COLOR 1], [COLOR 2], [COLOR 3], [COLOR 4]
Text: "[DRESS CODE DESCRIPTION]"

### 6. Gallery
Grid 4x2 asymmetric với ảnh từ media/1.jpg đến 4.jpg
Hover effects: lift + scale + border highlight

### 7. Style Requirements
- Typography: [SERIF FONT] + [SANS-SERIF FONT]
- Responsive: mobile/tablet/desktop
- Animations: AOS fade-up, hover effects
- Effects: Shadows, gradients, glassmorphism

### 8. Technical
- HTML + CSS + JavaScript thuần
- No frameworks except AOS
- Browser compatible
- SEO optimized
```

---

## 📝 14. NOTES & TIPS

### 14.1 Design Philosophy
- **Less is more:** Elegant restraint
- **Hierarchy:** Clear visual hierarchy
- **Consistency:** Maintain design system
- **Accessibility:** Readable fonts, contrast ratios
- **Performance:** Optimize images, minimize code

### 14.2 Common Mistakes to Avoid
❌ Quá nhiều màu sắc (stick to 3-4 colors)
❌ Font size quá nhỏ trên mobile
❌ Thiếu white space
❌ Animations quá mạnh/nhiều
❌ Images không optimize
❌ Không test responsive
❌ Border-radius quá phức tạp trên mobile

### 14.3 Best Practices
✅ Start với mobile-first
✅ Use CSS variables
✅ Optimize images before upload
✅ Test trên nhiều devices
✅ Keep code organized
✅ Comment các sections
✅ Version control (Git)

---

## 🎉 15. KẾT LUẬN

Document này cung cấp **đầy đủ yêu cầu thiết kế** để tạo thiệp mời tương tự. 

**Key Features:**
1. ✅ Door opening animation
2. ✅ Party Highlights với 4 photos + shapes
3. ✅ Dress Code với 4 color swatches
4. ✅ Responsive design
5. ✅ Elegant styling với gold accents
6. ✅ AOS animations
7. ✅ Gallery grid layout

**Customizable:**
- Event name & details
- Color scheme
- Images
- Messages
- Typography
- Layout variations

**Production Ready:**
- Tested responsive
- Browser compatible
- Performance optimized
- SEO friendly

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Status:** ✅ Complete

**Author:** Design Team
**Purpose:** Template specification for creating similar invitations

---

## 📚 APPENDIX

### A. CSS Code Snippets
### B. JavaScript Code Snippets
### C. HTML Structure Templates
### D. Color Palette Examples
### E. Typography Combinations
### F. Layout Variations

[See separate files for detailed code snippets]

---

**END OF DOCUMENT**

💡 **Pro Tip:** Sử dụng document này như một checklist khi tạo thiệp mới. Đảm bảo các yêu cầu "Bắt Buộc" được implement đầy đủ trước khi thêm các tính năng optional.

