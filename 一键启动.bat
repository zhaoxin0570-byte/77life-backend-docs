@echo off
chcp 65001 >nul
cd /d %~dp0

REM ========== 七七生活 · 成长值模块操作文档 一键启动 ==========

REM 1) 检查 5173 端口：已在运行则直接打开浏览器
netstat -ano | findstr ":5173" | findstr "LISTENING" >nul
if not errorlevel 1 (
    echo [1/2] 服务已在运行，正在打开浏览器...
    start http://localhost:5173
    echo.
    echo 已在浏览器打开 http://localhost:5173
    timeout /t 5
    exit /b 0
)

REM 2) 依赖缺失时先安装
if not exist node_modules (
    echo [1/3] 首次运行，正在安装依赖...
    call npm install --no-fund --no-audit
)

REM 3) 启动服务，并延迟几秒自动打开浏览器
echo [2/3] 正在启动服务...
start "" /min cmd /c "timeout /t 5 >nul & start http://localhost:5173"

echo [3/3] 服务启动中：http://localhost:5173
echo.
echo 提示：关闭本窗口或按 Ctrl+C 即可停止服务。
echo.

npm run dev
