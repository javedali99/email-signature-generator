# 📧 Professional Email Signature Generator

A modern, interactive web application for creating beautiful, professional email signatures with live preview and multiple design templates.

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML](https://img.shields.io/badge/HTML-100%25-orange)

## 🌐 Live Demo

**[Try it now → Email Signature Generator](https://javedali99.github.io/email-signature-generator/)**

## ✨ Features

### 🎨 Multiple Templates
Choose from 4 professionally designed layouts:
- **Classic**: Traditional horizontal layout with profile photo and accent border
- **Compact**: Minimalist design perfect for brief, clean signatures
- **Stacked**: Centered vertical layout with emphasis on visual hierarchy
- **Banner**: Modern design with a colored footer bar

### 🎯 Live Preview
See your signature update in real-time as you type, displayed in a realistic email window simulation.

### 🌈 Customizable Themes
- Pick your brand color with an intuitive color picker
- Quick-select from 5 preset colors (Blue, Emerald, Rose, Violet, Slate)
- See your hex color value in real-time

### 📱 Social Media Integration
Add links to 10 popular platforms:
- LinkedIn
- X (Twitter)
- Instagram
- Facebook
- WhatsApp
- YouTube
- TikTok
- BlueSky
- GitHub
- Google Scholar

### 🖼️ Image Support
- Upload profile photos directly or use image URLs
- Optional company logo integration
- Supports Base64 encoded images for email compatibility

### 📋 One-Click Copy
Copy your signature to clipboard and paste directly into any email client.

### 📧 Email-Compatible
Uses HTML tables for maximum compatibility across all email clients including Gmail, Outlook, and Apple Mail.

## 📸 Interface

The application features an intuitive split-screen interface:
- **Left Panel**: Input forms organized in tabs (Details, Social, Design)
- **Right Panel**: Live preview in a realistic email environment with macOS-style window chrome

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup structure |
| **CSS3** | Custom styling with modern animations |
| **JavaScript (Vanilla)** | Dynamic signature generation and state management |
| **Tailwind CSS** | Utility-first CSS framework via CDN |
| **Font Awesome** | Icon library for social media and contact icons |
| **Google Fonts** | Plus Jakarta Sans font family for clean typography |

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
   - Fill in your personal info (name, job title, department)
   - Add company details and contact information

2. **Add Social Links**:
   - Switch to the "Social" tab
   - Enter your social media profile URLs
   - Leave fields empty to hide those icons

3. **Customize Design**:
   - Go to the "Design" tab
   - Upload or link to your profile photo
   - Optionally add a company logo
   - Choose your theme/accent color
   - Select your preferred template layout

4. **Copy & Use**:
   - Click the "Copy Signature" button
   - Paste into your email client's signature settings

### Email Client Setup

#### Gmail
1. Click the gear icon → "See all settings"
2. Scroll to "Signature" section
3. Click "Create new"
4. Paste your signature (Ctrl+V / Cmd+V)
5. Click "Save Changes"

#### Outlook
1. File → Options → Mail → Signatures
2. Click "New"
3. Name your signature
4. Paste your signature in the editor
5. Click "OK"

#### Apple Mail
1. Mail → Preferences → Signatures
2. Click " + " to add new signature
3. Uncheck "Always match my default message font"
4. Paste your signature

## 📁 Project Structure

```
email-signature-generator/
├── index.html          # Main application file (single-page app)
├── LICENSE             # MIT License
└── README.md           # Documentation
```

## 🎨 Customization

The application stores all configuration in a JavaScript state object:

```javascript
const state = {
    template: 'classic',      // Current template: classic, compact, stacked, banner
    details: {
        firstName: '', lastName: '', jobTitle: '', department: '',
        companyName: '', website: '',
        mobilePhone: '', officePhone: '', email: '', address: ''
    },
    social: {
        linkedin: '', twitter: '', instagram: '', facebook: '',
        whatsapp: '', youtube: '', tiktok: '', bluesky: '', github: '', scholar: ''
    },
    design: {
        photoUrl: '', logoUrl: '', themeColor: '#2563EB'
    }
};
```

You can modify the templates by editing the `renderSignature()` function in the JavaScript section.

## 🌐 Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome | ✅ Recommended |
| Firefox | ✅ Supported |
| Safari | ✅ Supported |
| Edge | ✅ Supported |
| Opera | ✅ Supported |

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
- Save/load signature configurations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Javed Ali**
- GitHub: [@javedali99](https://github.com/javedali99)

## 🙏 Acknowledgments

- Icons provided by [Flaticon](https://www.flaticon.com/)
- [Font Awesome](https://fontawesome.com/) for additional icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Google Fonts](https://fonts.google.com/) for typography

## 📝 Changelog

### v2.0 (Current)
- **New UI**: Complete redesign with Plus Jakarta Sans font and modern aesthetics
- **Expanded Social Media**: Added Instagram, Facebook, WhatsApp, YouTube, and TikTok
- **Enhanced Color Picker**: Quick-select preset colors with live hex display
- **Improved Templates**: Visual template previews with selection indicators
- **Better UX**: Segmented tab navigation, toast notifications, macOS-style email preview
- **Branding**: New "SigGen" branding with signature icon

### v1.3
- Multiple template options
- Enhanced UI with tab navigation
- Improved color picker
- File upload support for profile photos
- Better email client compatibility

### v1.0
- Initial release
- Basic signature generation
- Single template

---

⭐ If you find this project useful, please consider giving it a star!

**Made with ❤️ by Javed Ali**