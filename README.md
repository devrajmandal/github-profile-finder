🔍 GitHub Profile Finder
A sleek and responsive web application built with React.js that allows users to search and explore GitHub profiles with detailed information and statistics.
✨ Features

🔎 Real-time Search: Search GitHub users by username with instant results
📊 Comprehensive Profile Data: Display user information including:

Profile picture, name, and bio
Follower and following counts
Public repository count
Account creation date and location
Company and website information


📱 Responsive Design: Optimized for desktop, tablet, and mobile devices
⚡ Fast Performance: Efficient API calls with loading states
🛡️ Error Handling: Graceful handling of invalid usernames and API rate limits
🎨 Clean UI: Modern and intuitive user interface

🚀 Demo
Live Demo | View Repository
🛠️ Technologies Used

React.js - Frontend framework
JavaScript (ES6+) - Programming language
HTML5 - Markup language
CSS3 - Styling and animations
GitHub REST API - Data source
Fetch API - HTTP requests

📦 Installation & Setup
Prerequisites

Node.js (v14 or higher)
npm or yarn package manager
Git

Clone the Repository
bashgit clone https://github.com/devrajmandal/github-profile-finder.git
cd github-profile-finder
Install Dependencies
bashnpm install
# or
yarn install
Start Development Server
bashnpm start
# or
yarn start
The application will open in your browser at http://localhost:3000
Build for Production
bashnpm run build
# or
yarn build
🔧 Configuration
GitHub API Rate Limiting
The application uses GitHub's public API which has rate limiting:

Unauthenticated requests: 60 requests per hour per IP
Authenticated requests: 5,000 requests per hour

To increase rate limits, you can add a GitHub personal access token:

Create a .env file in the root directory
Add your GitHub token:

REACT_APP_GITHUB_TOKEN=your_personal_access_token_here
📖 Usage

Search Users: Enter a GitHub username in the search bar
View Profile: Click search or press Enter to view the profile
Explore Data: Browse through user statistics, repositories, and information
Error Handling: Invalid usernames will display appropriate error messages

🌟 Screenshots
The application features a clean, modern interface with:

Search Interface: Simple and intuitive search bar for entering GitHub usernames
Profile Display: Comprehensive user information layout with statistics and details
Responsive Design: Seamless experience across desktop, tablet, and mobile devices

🔮 Future Enhancements

 Repository details and sorting options
 User's recent activity timeline
 Favorite profiles bookmark system
 Dark/Light theme toggle
 Advanced search filters
 Export profile data functionality
 Social sharing capabilities

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 API Reference
This project uses the GitHub REST API v3:
Get User Profile
GET https://api.github.com/users/{username}
Response Example
json{
  "login": "username",
  "name": "User Name",
  "avatar_url": "https://avatars.githubusercontent.com/...",
  "bio": "User bio",
  "public_repos": 50,
  "followers": 100,
  "following": 75,
  "created_at": "2020-01-01T00:00:00Z",
  "location": "City, Country",
  "company": "Company Name"
}
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
