const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

app.disableHardwareAcceleration();

app.whenReady().then(async () => {
  console.log('🚀 Launching 4K Video Renderer Engine (3840x2160 @ 60 FPS - 68s Extended Timeline)...');

  const win = new BrowserWindow({
    width: 3840,
    height: 2160,
    show: false,
    webPreferences: {
      offscreen: true,
      contextIsolation: false,
      nodeIntegration: true
    }
  });

  const trailerPath = path.join(__dirname, '..', 'fel7o_trailer_ULTIMATE.html');
  const ffmpegPath  = path.join(__dirname, '..', 'bin', 'ffmpeg.exe');
  const audioPath   = path.join(__dirname, '..', '..', 'demo', 'phonk.mp3');
  const outputPath  = path.join(__dirname, '..', 'fel7o_trailer_4K.mp4');

  console.log(`📁 Source HTML: ${trailerPath}`);
  console.log(`🎬 Target Video: ${outputPath}`);

  await win.loadURL(`file://${trailerPath}`);

  // Configure FFmpeg process for 4K 60FPS H.264 MP4 encoding
  const ffmpegArgs = [
    '-y',
    '-f', 'image2pipe',
    '-vcodec', 'png',
    '-r', '60',
    '-i', '-',
  ];

  if (fs.existsSync(audioPath)) {
    ffmpegArgs.push('-i', audioPath, '-c:a', 'aac', '-b:a', '320k');
  }

  ffmpegArgs.push(
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-crf', '18',
    '-preset', 'medium',
    '-shortest',
    outputPath
  );

  const ffmpeg = spawn(ffmpegPath, ffmpegArgs);

  ffmpeg.stderr.on('data', data => {
    // console.log(`FFmpeg: ${data}`);
  });

  ffmpeg.on('close', code => {
    console.log(`✅ 4K Video Render Complete! Saved to: ${outputPath}`);
    app.quit();
  });

  const FPS = 60;
  const TOTAL_SECONDS = 68;
  const TOTAL_FRAMES = TOTAL_SECONDS * FPS;
  let frameCount = 0;

  console.log(`🎥 Capturing ${TOTAL_FRAMES} frames (68.0s @ 60 FPS)...`);

  const interval = setInterval(async () => {
    if (frameCount >= TOTAL_FRAMES) {
      clearInterval(interval);
      ffmpeg.stdin.end();
      console.log('⏹ Frame capture finished. Finalizing MP4 file...');
      return;
    }

    try {
      const image = await win.webContents.capturePage();
      const pngBuffer = image.toPNG();
      if (ffmpeg.stdin.writable) {
        ffmpeg.stdin.write(pngBuffer);
      }
      frameCount++;
      if (frameCount % 300 === 0) {
        const pct = Math.floor((frameCount / TOTAL_FRAMES) * 100);
        console.log(`⏳ Render progress: ${pct}% (${frameCount}/${TOTAL_FRAMES} frames)`);
      }
    } catch (err) {
      console.error('Frame capture error:', err);
    }
  }, 1000 / FPS);
});
