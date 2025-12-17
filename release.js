const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// --- НАСТРОЙКИ ---
const BUILD_DIR = path.join(__dirname, '.next');
const STANDALONE_DIR = path.join(BUILD_DIR, 'standalone');
const RELEASE_DIR = path.join(__dirname, 'release_build');
const ARCHIVE_NAME = 'sendinglight-client-build.zip';

console.log('🚀 Начинаем сборку релиза для клиента...');

// 1. Очистка предыдущего релиза
if (fs.existsSync(RELEASE_DIR)) {
  console.log('🧹 Очистка старой папки релиза...');
  fs.rmSync(RELEASE_DIR, { recursive: true, force: true });
}
fs.mkdirSync(RELEASE_DIR);

// 2. Проверка, был ли build
if (!fs.existsSync(STANDALONE_DIR)) {
  console.error('❌ Ошибка: Папка .next/standalone не найдена.');
  console.error('👉 Сначала выполните: npm run build');
  process.exit(1);
}

try {
  // 3. Копируем Standalone (основной сервер)
  console.log('📦 Копирование сервера (Standalone)...');
  fs.cpSync(STANDALONE_DIR, RELEASE_DIR, { recursive: true });

  // 4. Копируем public (картинки, шрифты)
  // В standalone public не попадает по умолчанию
  console.log('🖼️  Копирование папки public...');
  fs.cpSync(
    path.join(__dirname, 'public'),
    path.join(RELEASE_DIR, 'public'),
    { recursive: true }
  );

  // 5. Копируем статику .next/static
  // Она нужна для CSS и JS на клиенте
  console.log('🎨 Копирование статики (.next/static)...');
  const destStatic = path.join(RELEASE_DIR, '.next', 'static');
  // Создаем папку, если нет
  fs.mkdirSync(path.join(RELEASE_DIR, '.next'), { recursive: true });
  
  fs.cpSync(
    path.join(BUILD_DIR, 'static'),
    destStatic,
    { recursive: true }
  );

  // 6. Копируем ключи (.env)
  console.log('🔑 Копирование ключей окружения (.env)...');
  // Копируем .env.local, если есть (там обычно секреты)
  if (fs.existsSync(path.join(__dirname, '.env.local'))) {
    fs.copyFileSync(
      path.join(__dirname, '.env.local'),
      path.join(RELEASE_DIR, '.env.local')
    );
    console.log('   ✅ .env.local скопирован');
  } else if (fs.existsSync(path.join(__dirname, '.env'))) {
     // Если нет local, берем обычный
    fs.copyFileSync(
      path.join(__dirname, '.env'),
      path.join(RELEASE_DIR, '.env')
    );
    console.log('   ✅ .env скопирован');
  } else {
    console.warn('   ⚠️ Внимание: .env файлы не найдены!');
  }

  // 7. Создаем скрипт запуска для клиента (Windows)
  const batContent = `@echo off
echo Starting SendingLight Server...
echo Open http://localhost:3000 in your browser
node server.js
pause`;
  fs.writeFileSync(path.join(RELEASE_DIR, 'start.bat'), batContent);

  // 8. Архивация
  console.log('zip Сжатие в архив...');
  const output = fs.createWriteStream(path.join(__dirname, ARCHIVE_NAME));
  const archive = archiver('zip', {
    zlib: { level: 9 } // Максимальное сжатие
  });

  output.on('close', function() {
    console.log(`\n✅ Готово! Архив создан: ${ARCHIVE_NAME}`);
    console.log(`📊 Размер: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
    console.log(`\n📁 Папка для проверки: ${RELEASE_DIR}`);
    console.log('📝 Инструкция для клиента: Распаковать и запустить start.bat');
  });

  archive.on('error', function(err) {
    throw err;
  });

  archive.pipe(output);
  archive.directory(RELEASE_DIR, false);
  archive.finalize();

} catch (err) {
  console.error('❌ Произошла ошибка при сборке:', err);
}