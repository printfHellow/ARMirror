// Products Data List
const productsData = [
    {
        id: 1,
        name: "Gương Tròn Baroque",
        title: "Gương Tròn Baroque Cổ Điển",
        category: "guong-tron",
        categoryName: "Gương tròn",
        price: 1250000,
        priceDisplay: "1.250.000 đ",
        image: "DemoImage/image/Model1.jpg",
        glb: "DemoImage/glb/Model1.glb",
        thumbnails: [
            "DemoImage/image/Model1.jpg",
            "productImage/15f429f06284eedab795.jpg",
            "productImage/a51ac20c897805265c69.jpg"
        ],
        colors: [
            { name: "Vàng đồng", value: "gold", hex: "#D4AF37", active: true },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" },
            { name: "Đen", value: "black", hex: "#333333" }
        ],
        sizes: [
            { value: "40cm", label: "Ø 40cm", priceAdd: 0 },
            { value: "50cm", label: "Ø 50cm", priceAdd: 200000, active: true },
            { value: "60cm", label: "Ø 60cm", priceAdd: 400000 },
            { value: "80cm", label: "Ø 80cm", priceAdd: 700000 }
        ],
        description: "Gương tròn Baroque phong cách cổ điển Châu Âu, được chế tác tinh xảo với họa tiết phức tạp, mang đến vẻ đẹp sang trọng và đẳng cấp. Khung gương được làm từ hợp kim cao cấp, phủ lớp sơn vàng đồng sáng bóng, tạo nên điểm nhấn hoàn hảo cho không gian nội thất."
    },
    {
        id: 2,
        name: "Gương Vuông Minimalist",
        title: "Gương Vuông Phong Cách Tối Giản",
        category: "guong-vuong",
        categoryName: "Gương vuông",
        price: 890000,
        priceDisplay: "890.000 đ",
        image: "DemoImage/image/Model2.jpg",
        glb: "DemoImage/glb/Model2.glb",
        thumbnails: [
            "DemoImage/image/Model2.jpg",
            "productImage/a51ac20c897805265c69.jpg",
            "productImage/e9d657e91c9d90c3c98c.jpg"
        ],
        colors: [
            { name: "Trắng", value: "white", hex: "#FFFFFF", active: true },
            { name: "Đen", value: "black", hex: "#333333" },
            { name: "Gỗ tự nhiên", value: "wood", hex: "#8B4513" }
        ],
        sizes: [
            { value: "40x40", label: "40x40 cm", priceAdd: 0, active: true },
            { value: "50x50", label: "50x50 cm", priceAdd: 150000 },
            { value: "60x60", label: "60x60 cm", priceAdd: 300000 },
            { value: "80x80", label: "80x80 cm", priceAdd: 500000 }
        ],
        description: "Gương vuông hiện đại với thiết kế tối giản, phù hợp với không gian nội thất hiện đại. Khung gương được làm từ chất liệu nhôm cao cấp, mang đến vẻ đẹp thanh lịch và sang trọng."
    },
    {
        id: 3,
        name: "Gương Tròn LED",
        title: "Gương Tròn Đèn LED Thông Minh",
        category: "guong-tron",
        categoryName: "Gương tròn",
        price: 2100000,
        priceDisplay: "2.100.000 đ",
        image: "DemoImage/image/Model3.jpg",
        glb: "DemoImage/glb/Model3.glb",
        thumbnails: [
            "DemoImage/image/Model3.jpg",
            "productImage/e9d657e91c9d90c3c98c.jpg",
            "productImage/f0da71ed3a99b6c7ef88.jpg"
        ],
        colors: [
            { name: "Viền bạc", value: "silver", hex: "#C0C0C0", active: true },
            { name: "Viền vàng", value: "gold", hex: "#D4AF37" }
        ],
        sizes: [
            { value: "50cm", label: "Ø 50cm", priceAdd: 0 },
            { value: "60cm", label: "Ø 60cm", priceAdd: 300000, active: true },
            { value: "80cm", label: "Ø 80cm", priceAdd: 600000 },
            { value: "100cm", label: "Ø 100cm", priceAdd: 900000 }
        ],
        description: "Gương tròn với đèn LED tích hợp, có 3 chế độ ánh sáng (trắng, vàng, trung tính). Tính năng chống sương mù, cảm ứng chạm điều chỉnh độ sáng. Phù hợp cho phòng tắm và phòng trang điểm."
    },
    {
        id: 4,
        name: "Gương Oval Vintage",
        title: "Gương Oval Phong Cách Cổ Điển",
        category: "guong-oval",
        categoryName: "Gương oval",
        price: 1680000,
        priceDisplay: "1.680.000 đ",
        image: "DemoImage/image/Model4.jpg",
        glb: "DemoImage/glb/Model4.glb",
        thumbnails: [
            "DemoImage/image/Model4.jpg",
            "productImage/f0da71ed3a99b6c7ef88.jpg",
            "productImage/15f429f06284eedab795.jpg"
        ],
        colors: [
            { name: "Vàng cổ", value: "antique-gold", hex: "#CFB53B", active: true },
            { name: "Đồng đỏ", value: "bronze", hex: "#CD7F32" },
            { name: "Bạc cổ", value: "antique-silver", hex: "#A8A8A8" }
        ],
        sizes: [
            { value: "40x60", label: "40x60 cm", priceAdd: 0 },
            { value: "50x70", label: "50x70 cm", priceAdd: 250000, active: true },
            { value: "60x80", label: "60x80 cm", priceAdd: 450000 },
            { value: "70x100", label: "70x100 cm", priceAdd: 700000 }
        ],
        description: "Gương oval phong cách vintage với khung hoa văn tinh xảo, mang đến vẻ đẹp hoài cổ và sang trọng. Thích hợp cho phòng khách, phòng ngủ hoặc hành lang."
    },
    {
        id: 5,
        name: "Gương Toàn Thân",
        title: "Gương Đứng Toàn Thân Khung Gỗ",
        category: "guong-dung",
        categoryName: "Gương đứng",
        price: 2450000,
        priceDisplay: "2.450.000 đ",
        image: "DemoImage/image/Model5.jpg",
        glb: "DemoImage/glb/Model5.glb",
        thumbnails: [
            "DemoImage/image/Model5.jpg",
            "productImage/15f429f06284eedab795.jpg",
            "productImage/a51ac20c897805265c69.jpg"
        ],
        colors: [
            { name: "Gỗ sồi", value: "oak", hex: "#806517", active: true },
            { name: "Gỗ óc chó", value: "walnut", hex: "#5C4033" },
            { name: "Trắng", value: "white", hex: "#FFFFFF" },
            { name: "Đen", value: "black", hex: "#333333" }
        ],
        sizes: [
            { value: "50x150", label: "50x150 cm", priceAdd: 0, active: true },
            { value: "60x170", label: "60x170 cm", priceAdd: 400000 },
            { value: "70x180", label: "70x180 cm", priceAdd: 700000 }
        ],
        description: "Gương đứng toàn thân với khung gỗ tự nhiên cao cấp, thiết kế đơn giản nhưng sang trọng. Có thể đặt sàn hoặc treo tường, phù hợp cho phòng ngủ và phòng thay đồ."
    },
    {
        id: 6,
        name: "Gương Nghệ Thuật Sunburst",
        title: "Gương Trang Trí Nghệ Thuật Sunburst",
        category: "guong-trang-tri",
        categoryName: "Gương trang trí",
        price: 1890000,
        priceDisplay: "1.890.000 đ",
        image: "DemoImage/image/Model6.jpg",
        glb: "DemoImage/glb/Model6.glb",
        thumbnails: [
            "DemoImage/image/Model6.jpg",
            "productImage/e9d657e91c9d90c3c98c.jpg",
            "productImage/f0da71ed3a99b6c7ef88.jpg"
        ],
        colors: [
            { name: "Vàng", value: "gold", hex: "#FFD700", active: true },
            { name: "Bạc", value: "silver", hex: "#C0C0C0" },
            { name: "Đồng", value: "copper", hex: "#B87333" }
        ],
        sizes: [
            { value: "60cm", label: "Ø 60cm", priceAdd: 0, active: true },
            { value: "80cm", label: "Ø 80cm", priceAdd: 350000 },
            { value: "100cm", label: "Ø 100cm", priceAdd: 650000 }
        ],
        description: "Gương trang trí nghệ thuật kiểu Sunburst với các tia sáng tỏa ra từ trung tâm, tạo điểm nhấn ấn tượng cho không gian. Thích hợp làm điểm nhấn cho phòng khách hoặc phòng ăn."
    }
];

// Categories list
const categoriesData = [
    { id: "all", name: "Tất cả", icon: "🪞" },
    { id: "guong-tron", name: "Gương tròn", icon: "⭕" },
    { id: "guong-vuong", name: "Gương vuông", icon: "⬜" },
    { id: "guong-oval", name: "Gương oval", icon: "🥚" },
    { id: "guong-dung", name: "Gương đứng", icon: "🚪" },
    { id: "guong-trang-tri", name: "Gương trang trí", icon: "✨" }
];

// Price ranges for filter
const priceRanges = [
    { id: "all", name: "Tất cả giá", min: 0, max: Infinity },
    { id: "under-1m", name: "Dưới 1 triệu", min: 0, max: 1000000 },
    { id: "1m-2m", name: "1 - 2 triệu", min: 1000000, max: 2000000 },
    { id: "2m-3m", name: "2 - 3 triệu", min: 2000000, max: 3000000 },
    { id: "above-3m", name: "Trên 3 triệu", min: 3000000, max: Infinity }
];

// All available colors
const allColors = [
    { value: "gold", name: "Vàng", hex: "#D4AF37" },
    { value: "silver", name: "Bạc", hex: "#C0C0C0" },
    { value: "black", name: "Đen", hex: "#333333" },
    { value: "white", name: "Trắng", hex: "#FFFFFF" },
    { value: "wood", name: "Gỗ", hex: "#8B4513" },
    { value: "bronze", name: "Đồng", hex: "#CD7F32" }
];

// All available sizes (simplified for filter)
const allSizes = [
    { value: "small", name: "Nhỏ (≤50cm)", maxDimension: 50 },
    { value: "medium", name: "Vừa (51-80cm)", minDimension: 51, maxDimension: 80 },
    { value: "large", name: "Lớn (>80cm)", minDimension: 81 }
];

// Function to get product by ID
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

// Function to get all products
function getAllProducts() {
    return productsData;
}

// Function to get categories
function getCategories() {
    return categoriesData;
}

// Function to get price ranges
function getPriceRanges() {
    return priceRanges;
}

// Function to get all colors
function getColors() {
    return allColors;
}

// Function to get all sizes
function getSizes() {
    return allSizes;
}

// Function to filter products
function filterProducts(filters) {
    let filtered = [...productsData];
    
    // Filter by search term
    if (filters.search && filters.search.trim()) {
        const searchTerm = filters.search.toLowerCase().trim();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Filter by category
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(product => product.category === filters.category);
    }
    
    // Filter by price range
    if (filters.priceRange && filters.priceRange !== 'all') {
        const range = priceRanges.find(r => r.id === filters.priceRange);
        if (range) {
            filtered = filtered.filter(product => 
                product.price >= range.min && product.price < range.max
            );
        }
    }
    
    // Filter by color
    if (filters.color && filters.color !== 'all') {
        filtered = filtered.filter(product => 
            product.colors.some(c => c.value === filters.color)
        );
    }
    
    // Filter by size
    if (filters.size && filters.size !== 'all') {
        const sizeFilter = allSizes.find(s => s.value === filters.size);
        if (sizeFilter) {
            filtered = filtered.filter(product => {
                // Check if any size matches the filter
                return product.sizes.some(size => {
                    // Extract dimension from label (e.g., "Ø 50cm" -> 50, "40x60 cm" -> 60)
                    const matches = size.label.match(/(\d+)/g);
                    if (matches) {
                        const maxDim = Math.max(...matches.map(Number));
                        if (sizeFilter.value === 'small') {
                            return maxDim <= 50;
                        } else if (sizeFilter.value === 'medium') {
                            return maxDim >= 51 && maxDim <= 80;
                        } else if (sizeFilter.value === 'large') {
                            return maxDim > 80;
                        }
                    }
                    return false;
                });
            });
        }
    }
    
    return filtered;
}

// Function to format price
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' đ';
}
