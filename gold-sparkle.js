/**
 * ========================================
 * GOLD SPARKLE EFFECT SYSTEM
 * JavaScript Controller
 * ========================================
 *
 * Tạo và quản lý các ánh sao lấp lánh xung quanh text vàng
 * Professional & Optimized Performance
 */

class GoldSparkleEffect {
    constructor(options = {}) {
        // Configuration
        this.config = {
            sparkleCount: options.sparkleCount || 3,
            interval: options.interval || 800,
            sparkleChars: options.sparkleChars || ['✦', '✧', '★', '✨', '⋆'],
            animationDuration: options.animationDuration || 2000,
            sizes: options.sizes || ['small', 'medium', 'large'],
            enabled: options.enabled !== false,
            delayAfterDoor: options.delayAfterDoor || 2000
        };

        this.elements = [];
        this.intervals = new Map();
        this.isActive = false;
    }

    /**
     * Khởi tạo hiệu ứng cho tất cả elements có class gold-sparkle
     */
    init() {
        // Tìm tất cả elements
        this.elements = Array.from(document.querySelectorAll('.gold-sparkle'));

        if (this.elements.length === 0) {
            console.warn('Không tìm thấy element nào có class .gold-sparkle');
            return;
        }

        // Wrap mỗi element trong container
        this.elements.forEach(element => {
            this.wrapElement(element);
        });

        // Chờ cửa mở xong rồi bật sparkle
        this.startAfterDoorOpens();

        console.log(`✨ Gold Sparkle Effect initialized for ${this.elements.length} element(s)`);
    }

    /**
     * Wrap element trong container để chứa sparkles
     */
    wrapElement(element) {
        if (element.parentElement.classList.contains('gold-sparkle-container')) {
            return; // Đã wrap rồi
        }

        const container = document.createElement('span');
        container.className = 'gold-sparkle-container';
        element.parentNode.insertBefore(container, element);
        container.appendChild(element);

        // Store reference
        element.sparkleContainer = container;
    }

    /**
     * Bắt đầu tạo sparkles sau khi cửa mở
     */
    startAfterDoorOpens() {
        const doorOverlay = document.getElementById('wedding-overlay');

        if (doorOverlay) {
            // Chờ cửa mở (2s) + delay thêm
            setTimeout(() => {
                this.start();
            }, 2000 + this.config.delayAfterDoor);
        } else {
            // Không có door overlay, bắt đầu ngay
            setTimeout(() => {
                this.start();
            }, this.config.delayAfterDoor);
        }
    }

    /**
     * Bắt đầu tạo sparkles
     */
    start() {
        if (!this.config.enabled || this.isActive) return;

        this.isActive = true;

        this.elements.forEach((element, index) => {
            // Tạo sparkle ngay lập tức
            this.createSparklesForElement(element);

            // Tiếp tục tạo sparkle theo interval
            const intervalId = setInterval(() => {
                this.createSparklesForElement(element);
            }, this.config.interval + (index * 200)); // Stagger effect

            this.intervals.set(element, intervalId);
        });

        console.log('✨ Sparkles started');
    }

    /**
     * Dừng tạo sparkles
     */
    stop() {
        this.isActive = false;

        this.intervals.forEach(intervalId => {
            clearInterval(intervalId);
        });
        this.intervals.clear();

        console.log('✨ Sparkles stopped');
    }

    /**
     * Tạm dừng/tiếp tục
     */
    toggle() {
        if (this.isActive) {
            this.stop();
        } else {
            this.start();
        }
    }

    /**
     * Tạo sparkles cho một element
     */
    createSparklesForElement(element) {
        const container = element.sparkleContainer || element.parentElement;
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        for (let i = 0; i < this.config.sparkleCount; i++) {
            setTimeout(() => {
                this.createSingleSparkle(element, container, rect, containerRect);
            }, i * 150); // Stagger sparkles
        }
    }

    /**
     * Tạo một sparkle đơn
     */
    createSingleSparkle(element, container, rect, containerRect) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle-particle';

        // Random character
        const char = this.config.sparkleChars[Math.floor(Math.random() * this.config.sparkleChars.length)];
        sparkle.textContent = char;

        // Random size
        const size = this.config.sizes[Math.floor(Math.random() * this.config.sizes.length)];
        sparkle.classList.add(size);

        // Random position around element edges
        const position = this.getRandomEdgePosition(rect.width, rect.height);
        sparkle.style.left = position.x + 'px';
        sparkle.style.top = position.y + 'px';

        // Random float direction
        const floatX = (Math.random() - 0.5) * 30;
        const floatY = -(Math.random() * 30 + 10);
        sparkle.style.setProperty('--float-x', floatX + 'px');
        sparkle.style.setProperty('--float-y', floatY + 'px');

        // Add to container
        container.appendChild(sparkle);

        // Remove after animation
        setTimeout(() => {
            if (sparkle.parentElement) {
                sparkle.remove();
            }
        }, this.config.animationDuration);
    }

    /**
     * Lấy vị trí ngẫu nhiên ở cạnh element
     */
    getRandomEdgePosition(width, height) {
        const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
        const offset = 5; // Khoảng cách từ edge

        switch (edge) {
            case 0: // Top
                return {
                    x: Math.random() * width,
                    y: -offset
                };
            case 1: // Right
                return {
                    x: width + offset,
                    y: Math.random() * height
                };
            case 2: // Bottom
                return {
                    x: Math.random() * width,
                    y: height + offset
                };
            case 3: // Left
                return {
                    x: -offset,
                    y: Math.random() * height
                };
        }
    }

    /**
     * Cập nhật config
     */
    updateConfig(newConfig) {
        Object.assign(this.config, newConfig);

        // Restart nếu đang chạy
        if (this.isActive) {
            this.stop();
            setTimeout(() => this.start(), 100);
        }
    }

    /**
     * Destroy và cleanup
     */
    destroy() {
        this.stop();
        this.elements = [];
        console.log('✨ Gold Sparkle Effect destroyed');
    }
}

// ========================================
// AUTO INITIALIZATION
// ========================================

// Global instance
let goldSparkleEffect = null;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGoldSparkle);
} else {
    initGoldSparkle();
}

function initGoldSparkle() {
    // Configuration options
    const sparkleConfig = {
        sparkleCount: 3,           // Số sparkle mỗi lần (1-5)
        interval: 800,             // Thời gian giữa các lần (ms) - càng nhỏ càng nhiều sparkle
        animationDuration: 2000,   // Thời gian animation (ms)
        delayAfterDoor: 2000,      // Delay sau khi cửa mở (ms)
        sparkleChars: ['✦', '✧', '⋆', '✨'],  // Ký tự sparkle
        sizes: ['small', 'medium', 'large'],  // Kích thước
        enabled: true              // Bật/tắt
    };

    goldSparkleEffect = new GoldSparkleEffect(sparkleConfig);
    goldSparkleEffect.init();

    // Expose to window for manual control
    window.goldSparkle = goldSparkleEffect;
}

// ========================================
// UTILITY FUNCTIONS (Global)
// ========================================

/**
 * Bật sparkle effect
 */
function enableSparkles() {
    if (window.goldSparkle) {
        window.goldSparkle.config.enabled = true;
        window.goldSparkle.start();
    }
}

/**
 * Tắt sparkle effect
 */
function disableSparkles() {
    if (window.goldSparkle) {
        window.goldSparkle.stop();
        window.goldSparkle.config.enabled = false;
    }
}

/**
 * Toggle sparkle effect
 */
function toggleSparkles() {
    if (window.goldSparkle) {
        window.goldSparkle.toggle();
    }
}

/**
 * Chỉnh mật độ sparkle (1-10)
 * 1 = ít nhất, 10 = nhiều nhất
 */
function setSparkleIntensity(level) {
    if (window.goldSparkle) {
        level = Math.max(1, Math.min(10, level));

        const config = {
            sparkleCount: Math.ceil(level / 3),
            interval: 1200 - (level * 100)
        };

        window.goldSparkle.updateConfig(config);
        console.log(`✨ Sparkle intensity set to ${level}`);
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GoldSparkleEffect,
        enableSparkles,
        disableSparkles,
        toggleSparkles,
        setSparkleIntensity
    };
}

