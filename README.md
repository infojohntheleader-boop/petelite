# Petelite - Shopify Theme

A premium direct-to-consumer pet e-commerce Shopify theme built with modern web technologies and best practices.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript Support**: Type-safe development
- **Liquid Templates**: Shopify's templating language
- **Customizable**: Settings schema for easy customization
- **Performance Optimized**: Asset optimization and lazy loading
- **Accessible**: WCAG 2.1 AA compliant
- **SEO Friendly**: Built-in SEO best practices

## Project Structure

```
petelite/
├── config/
│   ├── settings_schema.json    # Theme customization settings
│   └── settings_data.json      # Default settings
├── sections/
│   ├── hero.liquid             # Hero banner section
│   ├── product.liquid          # Product display section
│   └── ...
├── snippets/
│   ├── header.liquid           # Header component
│   ├── footer.liquid           # Footer component
│   └── head.liquid             # Head meta tags
├── templates/
│   ├── index.liquid            # Homepage
│   ├── product.liquid          # Product page
│   ├── collection.liquid       # Collection page
│   └── page.liquid             # Generic page
├── layout/
│   └── theme.liquid            # Main theme layout
├── assets/
│   ├── theme.css               # Main stylesheet
│   └── tailwind.css            # Tailwind directives
└── theme.toml                  # Theme configuration
```

## Getting Started

### Prerequisites

- Shopify CLI v3.x or higher
- Node.js 18.x or higher
- A Shopify development store

### Installation

1. **Initialize Shopify CLI**:
   ```bash
   shopify login --store [store-url].myshopify.com
   ```

2. **Configure theme.toml**:
   Update the `theme.toml` file with your store credentials:
   ```toml
   [development]
   password = "your_api_password"
   store = "your-store.myshopify.com"
   theme_id = "your_theme_id"
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

4. **Start development**:
   ```bash
   shopify theme dev
   ```

## Customization

### Colors

Edit the color variables in `config/settings_schema.json` or through Shopify Admin:

- **Primary Color**: Main brand color
- **Secondary Color**: Background/contrast color
- **Accent Color**: Highlight/CTA color

### Typography

Fonts can be customized via the theme settings. Supports Google Fonts integration.

### Sections

Create new sections by adding `.liquid` files to the `sections/` directory:

```liquid
<section class="my-section">
  <!-- Section content -->
</section>

{% schema %}
{
  "name": "My Section",
  "settings": []
}
{% endschema %}
```

## Development

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Testing

```bash
npm run test
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lazy loading for images
- CSS optimization
- Asset minification
- CDN integration
- Core Web Vitals optimized

## Accessibility

- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance
- Focus management

## Security

- CSP headers
- XSS protection
- CSRF tokens
- Secure dependencies

## Deployment

### Deploy to Shopify

```bash
shopify theme push
```

### Deploy to Theme Store

```bash
shopify theme publish
```

## License

Proprietary - Petelite © 2024

## Support

For support, please contact: support@petelite.com

## Changelog

### Version 1.0.0
- Initial release
- Hero section
- Product showcase
- Collection listing
- Responsive design
- Customizable settings
