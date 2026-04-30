# Luxe - Professional Salla Theme

ثيم فاخر وعصري لمتاجر سلة، يدعم اللغة العربية بالكامل مع RTL.

## المميزات
- تصميم احترافي وعصري بالكامل
- دعم RTL عربي 100%
- متجاوب مع جميع الشاشات (Responsive)
- سرعة تحميل عالية
- سلايدر رئيسي مع دعم الجوال
- بنرات ترويجية متعددة الأنماط
- عداد تنازلي للعروض
- بطاقة منتج احترافية مع تأثيرات
- صفحة منتج متكاملة مع تبويبات
- صفحة تصنيف مع فلترة متقدمة
- هيدر ثابت / شفاف / داكن
- قائمة جوال سلسة
- فوتر متكامل مع روابط التواصل
- دعم كامل لـ Salla Web Components

## التثبيت

```bash
npm install
npm run dev
```

## الرفع على سلة بارتنرز

1. سجّل على https://salla.partners
2. أنشئ ثيم جديد
3. ارفع الملفات
4. راجع وانشر

## هيكل الملفات

```
salla-theme-luxe/
├── src/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── master.twig
│   │   ├── pages/
│   │   │   ├── index.twig
│   │   │   ├── product.twig
│   │   │   ├── category.twig
│   │   │   └── cart.twig
│   │   └── components/
│   │       ├── header/
│   │       ├── footer/
│   │       ├── home/
│   │       ├── product/
│   │       └── widgets/
│   └── assets/
│       ├── css/theme.css
│       └── js/theme.js
├── twilight.json
├── package.json
└── tailwind.config.js
```