# 📧 Professional Email Signature Generator

A modern, interactive web application for creating beautiful, professional email signatures with live preview and multiple design templates.

![Version](https://img.shields.io/badge/version-1.3-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **🎨 Multiple Templates**: Choose from 4 professionally designed layouts:
  - **Classic**: Traditional horizontal layout with profile photo
  - **Compact**: Minimalist design perfect for brief signatures
  - **Stacked**: Centered vertical layout with emphasis on visual hierarchy
  - **Banner**: Modern design with colored bottom bar

- **🎯 Live Preview**: See your signature update in real-time as you type
- **🌈 Customizable Themes**: Pick your brand color with preset options or custom color picker
- **📱 Social Media Integration**: Add links to LinkedIn, X (Twitter), BlueSky, GitHub, and Google Scholar
- **🖼️ Image Support**: 
  - Upload profile photos or use image URLs
  - Optional company logo integration
- **📋 One-Click Copy**: Copy your signature to clipboard and paste directly into your email client
- **📧 Email-Compatible**: Uses HTML tables for maximum compatibility across email clients
- **🎭 Realistic Preview**: View your signature in a simulated email context

## 🚀 Demo

Try it live: [Email Signature Generator](https://javedali99.github.io/email-signature-generator/)

## 📸 Screenshots

The application features an intuitive split-screen interface:
- **Left Panel**: Input forms organized in tabs (Details, Social, Design)
- **Right Panel**: Live preview in a realistic email environment

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with modern animations
- **JavaScript (Vanilla)**: Dynamic signature generation and state management
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Font Awesome**: Icon library for social media and contact icons
- **Google Fonts**: Inter font family for clean typography

## 💻 Usage

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/javedali99/email-signature-generator.git
cd email-signature-generator
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or simply drag and drop the `index.html` file into your browser.

### Creating Your Signature

1. **Enter Your Details**:
   - Navigate to the "Details" tab
   - Fill in your personal info, company details, and contact information

2. **Add Social Links**:
   - Switch to the "Social" tab
   - Enter your social media profile URLs

3. **Customize Design**:
   - Go to the "Design" tab
   - Upload or link to your profile photo
   - Choose your theme color
   - Select your preferred template layout

4. **Copy & Use**:
   - Click "Copy Signature" button
   - Paste into your email client's signature settings

### Email Client Setup

#### Gmail
1. Click the gear icon → "See all settings"
2. Scroll to "Signature" section
3. Click "Create new"
4. Paste your signature (Ctrl+V / Cmd+V)

#### Outlook
1. File → Options → Mail → Signatures
2. Click "New"
3. Paste your signature in the editor

#### Apple Mail
1. Mail → Preferences → Signatures
2. Click "+" to add new signature
3. Paste your signature

## 📁 Project Structure

```
email-signature-generator/
├── index.html          # Main application file (single-page app)
├── LICENSE            # MIT License
└── README.md          # Documentation
```

## 🎨 Customization

The application stores all configuration in a JavaScript state object:

```javascript
const state = {
    template: 'classic',      // Current template
    details: { ... },         // Personal & company info
    social: { ... },          // Social media links
    design: { ... }           // Theme color, images
};
```

You can modify the templates by editing the `renderSignature()` function in the JavaScript section.

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions

- Additional template designs
- More social media platforms
- Export to different formats (PNG, PDF)
- Dark mode support
- Signature templates library
- Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Javed Ali**
- GitHub: [@javedali99](https://github.com/javedali99)

## 🙏 Acknowledgments

- Icons provided by [Flaticon](https://www.flaticon.com/)
- Font Awesome for additional icons
- Tailwind CSS for the styling framework
- Google Fonts for typography

## 📝 Changelog

### v1.3 (Current)
- Multiple template options
- Enhanced UI with tab navigation
- Improved color picker
- File upload support for profile photos
- Better email client compatibility

---

⭐ If you find this project useful, please consider giving it a star!

**Made with ❤️ by Javed Ali**