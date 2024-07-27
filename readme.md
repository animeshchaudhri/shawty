# Shawty - Short-Form Content Automation Platform

Shawty is an innovative platform designed to streamline the creation of short-form content for various social media platforms. By leveraging advanced AI and automation techniques, Shawty helps content creators and marketers produce engaging, platform-specific content quickly and efficiently.

## Features

- **Multi-platform Support**: Generate content for TikTok, Instagram Reels, Instagram Stories, and Twitter.
- **AI-Powered Content Generation**: Utilize state-of-the-art AI to create compelling short-form content.
- **User-friendly Interface**: Intuitive design for easy content ideation and generation.
- **Customization Options**: Tailor generated content to match your brand voice and style.

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: Next.js (React)
- **AI Integration**: Google's Generative AI

## Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.8+
- Node.js 14+
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Create a virtual environment:

   ```
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows: `venv\Scripts\activate`
   - On macOS and Linux: `source venv/bin/activate`

4. Install the required packages:

   ```
   pip install -r requirements.txt
   ```

5. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add your Google AI API key: `GOOGLE_AI_API_KEY=your_api_key_here`

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn install
   ```

## Running the Application

### Backend

1. From the backend directory, run:
   ```
   flask run
   ```
   The backend will start running on `http://localhost:5000`

### Frontend

1. From the frontend directory, run:
   ```
   npm run dev
   ```
   or if you're using yarn:
   ```
   yarn dev
   ```
   The frontend will start running on `http://localhost:3000`

## Usage

1. Open your browser and go to `http://localhost:3000`
2. Select the type of content you want to create (TikTok, Instagram Reel, etc.)
3. Enter your content idea or topic
4. Click "Generate Content" and wait for Shawty to work its magic!

## Contributing

We welcome contributions to Shawty! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the Flask and Next.js communities for their excellent documentation and resources.
- Special thanks to Google for providing the Generative AI API that powers our content generation.

## Contact

For any queries or support, please email us at support@shawty.com or open an issue in this repository.

Happy content creating with Shawty!
