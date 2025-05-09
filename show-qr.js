import qrcode from 'qrcode-terminal';
import os from 'os';

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const config of iface) {
      if (config.family === 'IPv4' && !config.internal) {
        return config.address;
      }
    }
  }
  return 'localhost';
}

const ip = getLocalIP();
const port = 5173;
const url = `http://${ip}:${port}`;

console.log(`📱 QR 코드로 접속: ${url}`);
qrcode.generate(url, { small: true });