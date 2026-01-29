# Autobon Landing Page Structure

## 📁 Folder Structure

```
app/
├── (landing)/                    # Route group for landing pages
│   ├── page.tsx                 # Main landing page (/)
│   ├── about/
│   │   └── page.tsx            # About page (/about)
│   ├── services/
│   │   └── page.tsx            # Services page (/services)
│   ├── contact/
│   │   └── page.tsx            # Contact page (/contact)
│   └── pricing/
│       └── page.tsx            # Pricing page (/pricing)
├── auth/                        # Authentication pages
│   ├── login/
│   └── signup/
├── layout.tsx                   # Root layout with navigation
├── globals.css                  # Global styles
└── page.tsx                     # Original home page (can be removed)

components/
├── landing/                     # Landing page specific components
│   ├── hero/
│   │   └── Hero.tsx            # Hero section component
│   ├── features/
│   │   └── Features.tsx        # Features section component
│   ├── testimonials/
│   │   └── Testimonials.tsx    # Testimonials section component
│   ├── cta/
│   │   └── CTA.tsx             # Call-to-action section component
│   ├── footer/
│   │   └── Footer.tsx          # Footer component
│   └── index.ts                # Export all landing components
├── shared/                      # Shared components across all pages
│   ├── Navigation.tsx          # Main navigation component
│   ├── PageHeader.tsx          # Reusable page header component
│   └── index.ts                # Export all shared components
└── ui/                          # Existing UI components (button, input, etc.)
```

## 🚀 Key Features

### Route Groups
- Uses Next.js 13+ route groups `(landing)` to organize landing pages without affecting URL structure
- All landing pages are accessible at root level: `/`, `/about`, `/services`, `/contact`, `/pricing`

### Component Organization
- **Landing Components**: Specific to the landing page experience
- **Shared Components**: Reusable across different pages
- **UI Components**: Basic UI elements (existing)

### Optimized Structure Benefits
1. **Scalability**: Easy to add new pages and components
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Shared components reduce code duplication
4. **SEO Friendly**: Proper metadata and structure for each page
5. **Performance**: Modular components for better code splitting

## 🛠️ Usage

### Adding New Landing Components
1. Create component in `components/landing/[component-name]/`
2. Export from `components/landing/index.ts`
3. Import and use in landing page

### Adding New Pages
1. Create new folder in `app/(landing)/[page-name]/`
2. Add `page.tsx` file
3. Update navigation in `components/shared/Navigation.tsx`

### Customization
- Modify components in `components/landing/` for landing-specific changes
- Update `components/shared/Navigation.tsx` for site-wide navigation
- Customize styles in `app/globals.css` or component-specific CSS modules

## 📱 Responsive Design
All components are built with mobile-first responsive design using Tailwind CSS classes.

## 🔗 Navigation Structure
- Home (/) - Main landing page with all sections
- About (/about) - Company information
- Services (/services) - Service offerings
- Pricing (/pricing) - Pricing plans
- Contact (/contact) - Contact form
- Login (/auth/login) - User authentication
- Sign Up (/auth/signup) - User registration