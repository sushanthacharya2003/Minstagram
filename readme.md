Project DEMO VIDEO LINK - https://shorturl.at/a1TGZ

# Instagram-like Social Media Mini Project

A lightweight Instagram-inspired social media web application that allows users to create posts with images, like posts, and add comments. Built with vanilla JavaScript, HTML, and CSS.

## Features

### 📱 Post Management

- View existing posts with images, captions, and author information
- Create new posts by uploading images and adding captions
- Posts display with consistent styling and layout

### 👍 Interactions

- Like posts (with visual feedback)
- Add comments to posts
- View comment counts and like counts
- Toggle comment visibility

### 🎨 UI/UX

- Dark theme interface
- Responsive layout with posts and sidebar
- Clean and modern design
- Image-centric post display
- Interactive buttons with hover effects

## Project Structure

```
social-media/
│
├── index.html          # Main HTML structure
├── styles.css         # Styling and layout
└── script.js          # JavaScript functionality
```

### Key Components

#### HTML (`index.html`)

- Main container with posts feed and sidebar
- Post creation form with caption and image inputs
- Dynamic post container for rendered content

#### CSS (`styles.css`)

- Dark theme color scheme
- Flexbox layout system
- Post card styling
- Form and input styling
- Interactive elements (buttons, hovers)

#### JavaScript (`script.js`)

- Post data management
- Dynamic post rendering
- Like functionality
- Comment system
- New post creation with image upload

## Usage

1. **Viewing Posts**

   - Scroll through the feed to view existing posts
   - Each post shows an image, caption, and interaction buttons

2. **Creating a New Post**

   - Navigate to the "Create new Post" sidebar
   - Enter your caption in the text field
   - Click "Choose File" to select an image
   - Click "Post" to publish

3. **Interacting with Posts**
   - Click "Like" to like a post
   - Type a comment and click "Comment" to add comments
   - Click the likes/comments count to toggle comment visibility

## Technical Details

### Post Object Structure

```javascript
{
  id: number,
  author: string,
  content: string,
  likes: number,
  comments: string[],
  image: string (URL)
}
```

### Features Implementation

- Uses URL.createObjectURL() for image handling
- Maintains post state in memory using arrays
- Event delegation for efficient event handling
- Form submission handling with preventDefault()

## Running the Project

1. Clone or download the project files
2. Open `index.html` in a modern web browser
   - Or use a local server (like Live Server VS Code extension)
3. No build process or dependencies required

## Browser Support

- Works in all modern browsers
- Requires JavaScript enabled
- Supports standard image formats (JPEG, PNG, etc.)

## Future Enhancements

- User authentication
- Persistent storage
- Image filters
- User profiles
- Post sharing
- Responsive image optimization
