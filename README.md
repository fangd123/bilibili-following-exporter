# bilibili-following-exporter

A toolkit for exporting Bilibili following list, supporting both Python script and browser extension methods.

[![GitHub license](https://img.shields.io/github/license/fangd123/bilibili-following-exporter)](https://github.com/fangd123/bilibili-following-exporter/blob/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/fangd123/bilibili-following-exporter)](https://github.com/fangd123/bilibili-following-exporter/stargazers)

[![EN](https://img.shields.io/badge/Language-English-blue.svg)](README.md)

## Features

- ✨ Export complete Bilibili following list
- 📊 Export data in Excel format for easy viewing and analysis
- 🚀 Dual implementation: Python script and browser extension
- 🔄 Automatic pagination handling for large following lists
- 💡 Rich user information (verification status, membership status, etc.)

## Exported Data Fields

- UID
- Username
- Bio/Sign
- Following Time
- Verification Status
- Verification Info
- Membership Status

## Usage

### Python Script Version

1. Clone the repository
```bash
git clone https://github.com/fangd123/bilibili-following-exporter.git
cd bilibili-following-exporter
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Run the script
```bash
python bili_following.py
```

4. Follow the prompts to input:
   - Target user's UID
   - SESSDATA value from Bilibili cookie (requires login)

#### How to get Bilibili Cookie from Chrome


Method 1: Using Developer Tools

1. Open Chrome and visit [Bilibili](https://www.bilibili.com/)
2. Make sure you are logged in to your Bilibili account
3. Press `F12` or `Right-click → Inspect` to open Chrome Developer Tools
4. Go to the "Network" tab in Developer Tools
5. Click the "Preserve log" checkbox to keep the network logs
6. Refresh the page
7. Click on any request to bilibili.com in the network log
8. In the request details, find the "Headers" section
9. Scroll down to find the "Cookie" field under "Request Headers"
10. Find the `SESSDATA=xxx` part in the cookie string
11. Copy only the value part after `SESSDATA=` (do not include the semicolon at the end)

Method 2: Using Application Tab

1. Open Chrome and visit [Bilibili](https://www.bilibili.com/)
2. Make sure you are logged in
3. Press `F12` or `Right-click → Inspect` to open Developer Tools
4. Go to the "Application" tab
   - If you don't see the Application tab, click the `>>` icon to find it
5. In the left sidebar, expand "Cookies" and click on "https://www.bilibili.com"
6. Find the row with "SESSDATA" in the Name column
7. Copy the value in the "Value" column

Important Notes:
- Cookie values are sensitive information, keep them secure
- Don't share your cookies with others
- Cookies expire after a certain time
- If you log out, the cookie will become invalid

### Browser Extension Version (Tampermonkey)

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension

2. Click [here](https://github.com/fangd123/bilibili-following-exporter/raw/main/userscript/bili_following.user.js) to install the script

3. Visit any Bilibili user space page (e.g., https://space.bilibili.com/xxxxxx)

4. Click the "Export Following List" button in the bottom right corner

## Important Notes

- Requires Bilibili account login to access data
- Please maintain reasonable request rates to avoid server strain
- Exported data is for personal use only
- Python version requires Python 3.6 or higher

## Project Structure

```
bilibili-following-exporter/
├── README.md
├── README_CN.md
├── requirements.txt
├── python/
│   └── bili_following.py
└── userscript/
    └── bili_following.user.js
```

## Changelog

### v1.0.0 (2024-01-04)
- 🎉 Initial release
- ✨ Support for both Python script and browser extension
- 📦 Complete following list export functionality

## Contributing

Contributions are welcome! Feel free to submit Issues and Pull Requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Author

- GitHub: [@fangd123](https://github.com/fangd123)

## Acknowledgments

- Thanks to Bilibili for providing the API service
- Thanks to all contributors

## Disclaimer

This tool is for educational and research purposes only. Please follow Bilibili's user agreement and relevant laws and regulations when using this tool. The project assumes no responsibility for any issues arising from the use of this tool.

## Development Environment Setup

1. Requirements for Python script:
```
requests
openpyxl
```

2. Requirements for userscript:
- Modern web browser
- Tampermonkey extension installed

## FAQ

**Q: Why can't I export the following list?**
A: Make sure you:
- Are logged into Bilibili
- Have provided the correct SESSDATA
- Have proper network connectivity
- Are not making too many requests in a short time

**Q: Is there a limit to how many followers I can export?**
A: The tool can handle any number of followers, but larger lists will take longer to export. The script includes appropriate delays to avoid rate limiting.

**Q: Can I modify the exported data format?**
A: Yes, you can modify the Python script or userscript to customize the output format according to your needs.

## Support

If you encounter any issues or have suggestions:
1. Check the [Issues](https://github.com/fangd123/bilibili-following-exporter/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide as much detail as possible about your problem

## Future Plans

- [ ] Add support for following/unfollowing batch operations
- [ ] Implement data comparison between different export dates
- [ ] Add more data visualization features
- [ ] Support for exporting other user data (favorites, etc.)