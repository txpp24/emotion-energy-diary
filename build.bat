@echo off
echo ========================================
echo   情绪能量日记 - 快速打包工具
echo ========================================
echo.

echo [1/3] 检查环境...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误: 未检测到Node.js，请先安装Node.js
    pause
    exit /b 1
)
echo ✓ Node.js已安装

echo.
echo [2/3] 安装依赖...
call npm install
if %errorlevel% neq 0 (
    echo 错误: 依赖安装失败
    pause
    exit /b 1
)
echo ✓ 依赖安装完成

echo.
echo [3/3] 开始打包Windows应用...
call npm run build:win
if %errorlevel% neq 0 (
    echo 错误: 打包失败
    pause
    exit /b 1
)

echo.
echo ========================================
echo   打包完成！
echo ========================================
echo.
echo 安装包位置: dist\情绪能量日记 Setup 1.0.0.exe
echo 便携版位置: dist\情绪能量日记 1.0.0.exe
echo.
pause
