# 🌟 AI-Powered Digital Exhibit: Showcasing Inventors
Welcome to the **AI-Powered Digital Exhibit: Showcasing Inventors**, an interactive and educational platform highlighting inventors from diverse backgrounds whose work has positively impacted society. This exhibit celebrates innovation in areas such as **Healthcare**, **Accessibility**, **Social Justice**, and beyond — with a focus on inclusion, representation, and social change.

---

## ✨ Project Purpose
This project was built to:
- 🎓 Educate users about groundbreaking inventors and their contributions.
- 🌍 Promote diversity and inclusion in innovation and invention.
- 💡 Inspire change by showing how creativity intersects with real-world challenges.
- 🧭 Offer an engaging and interactive way to explore stories that matter.

## 📦 Features (MVP)
- 🌐 **Interactive Web Interface** built with Next.js and React.
- 📁 **Inventor Profiles**: Concise stories with images and media.
- 📂 **Thematic Navigation**: Explore inventors by themes like Healthcare or Social Justice.
- 🔍 **Basic Recommendations**: View related inventors by category (optional AI-driven feature).
- 🎥 **Multimedia Support**: Images and embedded videos for an immersive experience.
- ♿ **Accessibility-Friendly**: Designed with accessibility in mind.

## 🛠 Tech Stack
| Area         | Technology           |
|--------------|----------------------|
| Frontend     | React + Next.js      |
| Styling      | Tailwind CSS / MUI   |
| Backend      | Node.js + Express (or Flask) |
| Database     | MongoDB / JSON       |
| Deployment   | Vercel (Frontend), Heroku/DigitalOcean (Backend) |
| Media Hosting| AWS S3 / Google Cloud Storage |
| AI (optional)| OpenAI GPT / Custom Logic |

---

## 🚀 Getting Started
### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/showcasing-inventors.git
cd showcasing-inventors
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory with:
```
MONGODB_URI=your_mongo_uri
OPENAI_API_KEY=your_openai_key
MEDIA_HOST_URL=https://your-cdn-link.com
```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser to see the app.

## 📱 AI Training Component

Our exhibit includes an innovative AI training component using Google's Teachable Machine. Here's how it works:

### For Students:
1. **Choose an Inventor**: Select any featured inventor from our exhibit
2. **Collect Images**: Gather 5-10 different images of your chosen inventor
3. **Train Your Model**: Use Teachable Machine to create a computer vision model
4. **Test & Refine**: See if your AI can recognize new images of your inventor
5. **Reflect**: Analyze what visual patterns your AI detected and missed

### Educational Benefits:
- Hands-on experience with machine learning concepts
- Critical thinking about AI capabilities and limitations
- Understanding pattern recognition and classification
- Reflection on how computers "see" versus how humans perceive

## 🔄 Project Structure

```
showcasing-inventors/
├── public/              # Static assets
│   └── inventors/       # Inventor images
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   ├── data/            # Inventor data (JSON)
│   └── utils/           # Helper functions
├── ai-training/         # Teachable Machine integration
└── server/              # Backend code (if applicable)
```

## 👩‍💻 Key Components

### Home Page
- Featured inventors carousel
- Thematic exploration sections
- Quick navigation to AI training component

### Inventor Explorer
- Searchable and filterable gallery
- Diversity representation metrics
- Timeline visualization of innovations

### AI Training Section
- Step-by-step tutorial for using Teachable Machine
- Visual explanation of how image classification works
- Interactive reflection prompts for students

### Teacher Resources
- Downloadable lesson plans
- Integration guides for classroom use
- Assessment templates for student projects

## 🤝 Contributing

We welcome contributions to enhance this educational exhibit! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- **Collaborative Galleries**: Allow classes to create shared exhibits
- **VR/AR Integration**: Immersive experiences showcasing inventions
- **Advanced AI Features**: Custom recommendation algorithms
- **Interactive Timeline**: Explore the evolution of inventions over time
- **Community Submissions**: User-contributed inventor profiles

## 👏 Acknowledgments

- Google's Teachable Machine for providing an accessible AI learning platform
- The countless inventors who inspire this project
- Educators and students who provide feedback and suggestions



---

*This project was created as an educational resource to celebrate innovation and inspire the next generation of inventors.*
