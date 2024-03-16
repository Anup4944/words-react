# Multi-Language Learning App

Welcome to the Multi-Language Learning App! This web application allows users to choose from a variety of languages such as Japanese, Hindi, Spanish, French, Greek, Chinese, and German, and learn different words with audio pronunciation. Additionally, users can take a multiple-choice quiz to test their language skills. Google login is required to access the app.

## Features

- **Language Selection**: Users can choose from a variety of languages to learn, including Japanese, Hindi, Spanish, French, Greek, Chinese, and German.
- **Word Learning**: Users can view and listen to different words in their chosen language, with audio pronunciation fetched from Voicerss Text-to-Speech API.
- **Multiple-Choice Quiz**: Users can take a quiz to test their language skills, with questions based on the words they've learned.
- **Google Login**: Users are required to log in using their Google account to access the app.
- **Text Translation**: Microsoft Text Translator API is used to fetch text translations for the chosen words.
- **Audio Pronunciation**: Voicerss Text-to-Speech API from RapidAPI is used to fetch audio pronunciations for the words.

## Technologies Used

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with TypeScript
- **Authentication**: Google OAuth for user login
- **Text Translation**: Microsoft Text Translator API
- **Text-to-Speech**: Voicerss Text-to-Speech API from RapidAPI
- **Database**: MongoDB for storing user information and language data

## Usage

1. **Login with Google**: Users must log in using their Google account to access the app.
2. **Language Selection**: Once logged in, users can choose the language they want to learn, including Japanese, Hindi, Spanish, French, Greek, Chinese, and German.
3. **Word Learning**: Users can view a list of words in the chosen language, accompanied by audio pronunciation fetched from Voicerss Text-to-Speech API.
4. **Quiz**: Users can take a multiple-choice quiz to test their language skills. Questions are based on the words learned.
5. **Progress Tracking**: Users can track their progress, including quiz scores and words learned.

## Getting Started

To get started with the development of this project:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the frontend and backend directories and install dependencies using `npm install`.
3. Set up Google OAuth for authentication and obtain API keys for Microsoft Text Translator and Voicerss Text-to-Speech APIs.
4. Configure environment variables for the frontend and backend with necessary credentials and API keys.
5. Run the frontend and backend servers using `npm start`.

## Contributing

Contributions to the Multi-Language Learning App are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
