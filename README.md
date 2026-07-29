<div align="center">

<img src="assets/logo.png" alt="Fel7o Logo" width="120" />

# FEL7O Media Downloader
### Download Anything. Keep It Forever.

[![Live Web Trailer](https://img.shields.io/badge/⚡_Live_Trailer-Interactive-00F0FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://Ahmed77khaled.github.io/Fel7o-Media-Downloader/)
[![YouTube Trailer](https://img.shields.io/badge/🎬_Watch_Trailer-YouTube_4K-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/EvoN_8lZY4k)
[![Download Windows](https://img.shields.io/badge/📥_Download_Executable-.exe_v5.0.1-8B5CF6?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/Ahmed77khaled/Fel7o-Media-Downloader/releases/latest)

[![Version](https://img.shields.io/badge/version-5.0.1-00d4ff?style=flat-square)](https://github.com/Ahmed77khaled/Fel7o-Media-Downloader/releases)
[![Platform](https://img.shields.io/badge/platform-Windows_10%2F11-lightgrey?style=flat-square&logo=windows)](https://github.com/Ahmed77khaled/Fel7o-Media-Downloader)
[![Electron](https://img.shields.io/badge/Electron-31-47848F?style=flat-square&logo=electron)](https://www.electronjs.org/)
[![License](https://img.shields.io/badge/license-MIT-3ce89b?style=flat-square)](LICENSE)

A production-ready, ultra-fast media downloader for Windows. Download 4K videos and high-bitrate MP3 audio from 1000+ sites with zero ads and zero tracking.

[🎬 Watch Official Trailer on YouTube](https://youtu.be/EvoN_8lZY4k) · [🌐 Open Live Web Trailer](https://ahmed77khaled.github.io/Fel7o-Media-Downloader/) · [📥 Download Installer (.exe)](https://github.com/Ahmed77khaled/Fel7o-Media-Downloader/releases/latest) · [📋 Changelog](CHANGELOG.md)

[![Fel7o Official Launch Trailer](assets/fel7o_youtube_4k_thumbnail.jpg)](https://youtu.be/EvoN_8lZY4k)

</div>

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| ⚡ **Extreme Download Speed** | Multi-stream parallel engine delivering up to **124 MB/S** peak download speed |
| 🎬 **4K Ultra HD & MP3 320k** | Full resolution video extraction (480p → 4K UHD) and 320kbps high-quality MP3 audio |
| 🔊 **Smart Audio Normalization** | Built-in EBU R128 loudnorm audio processing to prevent clipping and volume imbalance |
| 🧠 **Smart Concurrent Queue** | Download single videos, full playlists, or entire channels seamlessly without waiting |
| ⏯ **Pause, Resume & Retry** | Granular per-item control with automatic error recovery and instant retry |
| 📺 **Built-in Media Player** | Instant HTTP 206 streaming protocol for zero-buffer video/audio playback |
| 🚫 **100% Free & No Ads** | Open source, zero telemetry, zero adware, and privacy-focused |

---

## 🚀 Quick Start & Installation

### Method A — Download Windows Installer (Recommended)

1. Go to [**Latest Releases**](https://github.com/Ahmed77khaled/Fel7o-Media-Downloader/releases/latest)
2. Download `Fel7o.Setup.5.0.1.exe`
3. Run the installer and launch **Fel7o**

### Method B — Run from Source

```bash
# 1. Clone the repository
git clone https://github.com/Ahmed77khaled/Fel7o-Media-Downloader.git
cd Fel7o-Media-Downloader

# 2. Install dependencies (ffmpeg is extracted automatically)
npm install

# 3. Launch the app
npm start
```

---

## 🛠️ Technology Stack

- **[Electron v31](https://www.electronjs.org/)** — High-performance desktop container
- **[yt-dlp](https://github.com/yt-dlp/yt-dlp)** — Media extraction core
- **[FFmpeg](https://ffmpeg.org/)** — Audio normalization and stream multiplexing
- **Vanilla JavaScript & CSS3** — Zero runtime framework overhead (60 FPS UI)
- **[electron-builder](https://www.electron.build/)** — NSIS Windows executable packager

---

## 🗂️ Project Structure

```
Fel7o-Media-Downloader/
├── main.js              # Electron main process & IPC handlers
├── preload.js           # ContextBridge secure bridge
├── renderer.js          # UI controller & download queue manager
├── index.html           # Main application interface
├── styles.css           # Custom Midnight Velocity design system
├── assets/              # Logos and brand assets
├── bin/                 # ffmpeg and yt-dlp executables
├── docs/                # Technical documentation & architecture reports
└── fel7o_trailer_ULTIMATE.html # Official interactive product launch trailer
```

---

## 📄 Technical Documentation

For developers and contributors, detailed technical guides are available in [`docs/`](docs/):

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Engineering Report v5.0.1](docs/Engineering_Report_v5.0.1.md)
- [Security Protocol & IPC Guidelines](docs/SECURITY.md)
- [Roadmap & Upcoming Features](docs/ROADMAP.md)

---

## 📜 License

[MIT License](LICENSE) © 2026 Ahmed Khaled Elfalah. Free and Open Source Software.
