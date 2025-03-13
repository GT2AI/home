from PIL import Image, ImageDraw
import os

# Create directory if it doesn't exist
os.makedirs('public', exist_ok=True)

def create_simple_icon(size, color, output_path):
    """Create a simple square icon with rounded corners"""
    # Create a new image with a white background
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw a rounded rectangle
    # The 20% of size will be the corner radius
    corner_radius = int(size * 0.2)
    draw.rounded_rectangle([(0, 0), (size, size)], fill=color, radius=corner_radius)
    
    # Add a simpler inner element (like a letter or shape)
    # This is just an example - replace with your own design
    inner_margin = int(size * 0.25)
    draw.rounded_rectangle(
        [(inner_margin, inner_margin), (size - inner_margin, size - inner_margin)],
        fill=(255, 255, 255),  # White inner element
        radius=corner_radius // 2
    )
    
    # Save the image
    img.save(output_path)
    print(f"Created {output_path}")

# Generate PWA icons (PNG format)
create_simple_icon(192, (41, 121, 255), 'public/pwa-192x192.png')  # Blue color
create_simple_icon(512, (41, 121, 255), 'public/pwa-512x512.png')  # Blue color

# Apple Touch Icon (PNG format)
create_simple_icon(180, (41, 121, 255), 'public/apple-touch-icon.png')  # Standard size is 180x180

# For favicon.ico (requires multiple sizes in one .ico file)
favicon_sizes = [16, 32, 48, 64]
favicon_images = []

for size in favicon_sizes:
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    corner_radius = max(int(size * 0.2), 1)  # Ensure minimum radius of 1
    draw.rounded_rectangle([(0, 0), (size, size)], fill=(41, 121, 255), radius=corner_radius)
    
    # Simpler inner element for smaller icons
    if size > 32:
        inner_margin = int(size * 0.25)
        draw.rounded_rectangle(
            [(inner_margin, inner_margin), (size - inner_margin, size - inner_margin)],
            fill=(255, 255, 255),
            radius=max(corner_radius // 2, 1)
        )
    
    favicon_images.append(img)

# Save as .ico file with multiple sizes
favicon_images[0].save(
    'public/favicon.ico',
    format='ICO',
    sizes=[(size, size) for size in favicon_sizes],
    append_images=favicon_images[1:]
)
print("Created public/favicon.ico")

print("All icons have been generated in the 'public' folder.")