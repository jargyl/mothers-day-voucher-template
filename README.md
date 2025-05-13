# Mothers Day Voucher Template 🎁

A beautiful, animated gift voucher website template built with React and Framer Motion. Create stunning, interactive gift experiences for your customers with this elegant and customizable template.

![Preview](public/placeholder.svg)

## ✨ Features

- 🎁 Interactive gift box animation
- 🔒 Password-protected voucher reveal
- 📱 Fully responsive design
- 🎨 Beautiful animations using Framer Motion
- 💅 Modern UI with Tailwind CSS
- 📄 Downloadable voucher PDF
- 🌸 Elegant design with customizable colors

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mothers-day-voucher-template.git
cd mothers-day-voucher-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Customization

### Changing Colors

The template uses Tailwind CSS for styling. You can customize the colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'mothersday-pink': '#FFB6C1',
      'mothersday-pink-dark': '#FF69B4',
      'mothersday-lavender': '#E6E6FA',
      // ... other colors
    }
  }
}
```

### Updating Content

1. Voucher Details: Edit `src/components/VoucherReveal.tsx`
2. Gift Box Text: Modify `src/components/GiftBox.tsx`
3. Closing Message: Update `src/components/ClosingMessage.tsx`

### Adding Your Voucher PDF

1. Place your voucher PDF in the `public/vouchers` directory
2. Update the voucher path in `VoucherReveal.tsx` if needed

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## 🎨 Customization Examples

### Changing the Voucher Code

```typescript
// In VoucherReveal.tsx
export default function VoucherReveal({
  voucherCode = "YOUR-CODE-HERE",
}: VoucherRevealProps) {
  // ...
}
```

### Updating Business Details

```typescript
// In VoucherReveal.tsx
<a href="https://your-business.com">
  Your Business Name
</a>{" "}
in Your City.
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
