# Hessab Pro Website

A professional, modern website for Hessab Pro - Point of Sale and Business Management Solution.

## 📁 Website Structure

```
website/
├── index.html              # Homepage with features, pricing, and CTA
├── features.html           # Detailed features page
├── about.html             # About us page
├── contact.html           # Contact form and information
├── terms.html             # Terms and conditions
├── privacy-policy.html    # Privacy policy
├── refund-policy.html     # Refund and cancellation policy
├── style.css              # Main stylesheet
└── script.js              # JavaScript functionality
```

## ✨ Features

### Pages Included

1. **Homepage (index.html)**
   - Hero section with call-to-action
   - Feature highlights (8 key features)
   - Simple pricing display (Starting at ₹399/month)
   - Statistics showcase
   - Responsive navigation
   - Play Store download link

2. **Features Page (features.html)**
   - Detailed explanation of all features
   - Sales Management
   - Sales Reports & Analytics
   - Attendance & Employee Management
   - Inventory Management
   - Customer Relationship Management
   - Payment Integration
   - Mobile & Cloud Access
   - Security & Reliability

3. **About Us (about.html)**
   - Company story
   - Mission and vision
   - Values and principles
   - Statistics and achievements
   - Why choose Hessab Pro

4. **Contact Page (contact.html)**
   - Contact form with validation
   - Business contact information
   - Office address and hours
   - Social media links
   - Frequently Asked Questions

5. **Legal Pages**
   - **Terms & Conditions** - Complete T&C for service usage
   - **Privacy Policy** - GDPR-compliant privacy policy
   - **Refund Policy** - Clear refund and cancellation terms

## 🎨 Design Features

- **Modern Gradient Design** - Purple and blue gradients throughout
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Scroll animations and transitions
- **Interactive Elements** - Hover effects and form validation
- **Professional Typography** - Clean, readable fonts
- **Icon Integration** - Font Awesome icons
- **Mobile-First** - Hamburger menu for mobile devices
- **Direct App Download** - Google Play Store integration

## 🔗 App Download

**Play Store URL:** https://play.google.com/store/apps/details?id=com.hissabpro.www.hissabpro&hl=en

All "Get Started" and "Download" buttons now link directly to the Play Store.

## 💰 Pricing

**Starting at ₹399/month**

Simple, transparent pricing with all essential features included. Contact for detailed plan information.

## 🚀 Key Highlights

### Sales Features
- ✅ Quick transaction processing
- ✅ Multiple payment methods (Cash, Card, UPI, Wallets)
- ✅ Instant receipts
- ✅ Discount and coupon support

### Reporting
- ✅ Daily, weekly, monthly reports
- ✅ Product performance analysis
- ✅ Employee performance tracking
- ✅ Profit/loss statements
- ✅ Tax and GST reports

### Attendance Management
- ✅ Digital clock-in/out
- ✅ Shift scheduling
- ✅ Automatic timesheets
- ✅ Leave management
- ✅ Overtime tracking

### Payment Integration
- ✅ All major payment gateways
- ✅ UPI support (Google Pay, PhonePe, Paytm)
- ✅ Digital wallet integration
- ✅ Secure processing

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome 6.4.0** - Icon library

## 📱 Mobile Responsive

The website is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Color Scheme

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #ec4899 (Pink)
- **Success**: #10b981 (Green)
- **Dark**: #1e293b (Slate)
- **Light**: #f8fafc (Gray)

## 🌐 How to Use

1. **Local Development**
   ```bash
   # Simply open index.html in a web browser
   open website/index.html
   ```

2. **Live Server (Recommended)**
   ```bash
   # If you have Python installed
   cd website
   python -m http.server 8000
   # Visit http://localhost:8000
   ```


### Play Store Link
Already configured:
- URL: `https://play.google.com/store/apps/details?id=com.hissabpro.www.hissabpro&hl=en`
- All download buttons point to the Play Store
- Opens in new tab for better user experience
3. **Deploy to Web**
   - Upload all files to your web hosting
   - Ensure all files maintain the same directory structure
   - Update contact emails and phone numbers in all pages
   - Configure the contact form backend

## 📝 Customization

### Update Contact Information
The pricing section displays a simple "Starting at ₹399/month" message:
- To change the amount, edit `index.html` line with `₹399`
- The pricing section is simplified to encourage app downloads
- Detailed pricing can be shared via contact form or app
### Modify Pricing
Edit the pricing section in `index.html`:
- Update plan names
- Change pricing amounts
- Modify feature lists
- Update CTA buttons

### Connect Contact Form
Update the form submission in `script.js`:
```javascript
// Replace the simulated API call with your backend endpoint
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});
```

## 🔒 Security Notes

- Contact form currently shows simulation only
- Implement proper backend validation
- Use HTTPS in production
- Sanitize all user inputs
- Implement CSRF protection
- Add reCAPTCHA for spam protection

## 📊 SEO Optimization

Each page includes:
- Semantic HTML5 structure
- Descriptive title tags
- Meta descriptions (add as needed)
- Heading hierarchy (H1, H2, H3)
- Alt text for images (add when images are added)

## 🎨 Future Enhancements

Consider adding:
- [ ] Blog section
- [ ] Customer testimonials with photos
- [ ] Video demonstrations
- [ ] Live chat integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Case studies/success stories
- [ ] Knowledge base/documentation
- [ ] API documentation
- [ ] Integration marketplace

## 📞 Support

For questions or issues with the website:
- Email: support@hessabpro.com
- Phone: +91 98765 43210

## 📄 License

© 2026 Hessab Pro. All rights reserved.

---

**Built with ❤️ for Hessab Pro**
