project-name/
├── dist/                     // Code đã build để chạy (thường không cần quan tâm trực tiếp)
├── node_modules/             // Các thư viện đã cài đặt
├── src/                      // Nơi chứa toàn bộ mã nguồn của bạn
│   ├── app.module.ts         // Module gốc (root module) của ứng dụng
│   ├── main.ts               // File khởi chạy ứng dụng (bootstrap)
│
│   ├── core/                 // (Tùy chọn, khuyến khích cho dự án lớn)
│   │   ├── auth/             // Logic xác thực, phân quyền (nếu là core)
│   │   │   ├── guards/
│   │   │   ├── strategies/
│   │   │   └── ...
│   │   ├── config/           // Quản lý cấu hình (ví dụ: @nestjs/config)
│   │   ├── database/         // Cấu hình kết nối database (ví dụ: TypeORM, Mongoose)
│   │   ├── logger/           // Dịch vụ logging
│   │   └── core.module.ts    // Module tập hợp các service/module dùng một lần toàn cục
│
│   ├── shared/               // (Tùy chọn, khuyến khích)
│   │   ├── pipes/            // Các pipes tái sử dụng
│   │   ├── filters/          // Các exception filters tái sử dụng
│   │   ├── interceptors/     // Các interceptors tái sử dụng
│   │   ├── services/         // Các services tiện ích stateless
│   │   ├── constants/        // Các hằng số chung
│   │   └── shared.module.ts  // Module tập hợp các thành phần tái sử dụng ở nhiều feature modules
│
│   ├── modules/              // Hoặc `features/` hoặc đặt trực tiếp trong `src/`
│   │   ├── users/            // Ví dụ: Module quản lý người dùng
│   │   │   ├── dto/          // Data Transfer Objects (định nghĩa dữ liệu request/response)
│   │   │   ├── entities/     // Định nghĩa cấu trúc dữ liệu (ví dụ: User entity cho database)
│   │   │   ├── interfaces/   // (Tùy chọn) Các TypeScript interfaces
│   │   │   ├── users.controller.ts // Xử lý các HTTP request
│   │   │   ├── users.service.ts    // Chứa logic nghiệp vụ
│   │   │   ├── users.module.ts     // Module định nghĩa cho "users"
│   │   │   └── ... (ví dụ: users.repository.ts nếu tách riêng)
│   │   │
│   │   ├── products/         // Ví dụ: Module quản lý sản phẩm
│   │   │   ├── dto/
│   │   │   ├── entities/
│   │   │   ├── products.controller.ts
│   │   │   ├── products.service.ts
│   │   │   ├── products.module.ts
│   │   │   └── ...
│   │   └── ... (các feature modules khác)
│
│   └── common/               // (Tùy chọn) Các tiện ích, hằng số, decorators không thuộc module cụ thể
│       ├── decorators/
│       ├── enums/
│       ├── interfaces/       // Interfaces chung
│       └── utils/            // Các hàm tiện ích
│
├── test/                     // Chứa các file test (thường là E2E tests)
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
│
├── .env                      // (Không commit) File chứa biến môi trường cho local dev
├── .env.example              // File ví dụ về biến môi trường
├── .eslintrc.js              // Cấu hình ESLint (kiểm tra code style)
├── .gitignore                // Khai báo các file/thư mục bỏ qua khi commit code
├── .prettierrc               // Cấu hình Prettier (format code tự động)
├── nest-cli.json             // Cấu hình cho NestJS CLI
├── package.json              // Quản lý dependencies và scripts của project
├── README.md                 // Thông tin về project
├── tsconfig.build.json       // Cấu hình TypeScript cho quá trình build
└── tsconfig.json             // Cấu hình TypeScript cho project