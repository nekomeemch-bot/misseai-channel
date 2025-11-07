# PowerShellスクリプト: すべてのバージョン指定を削除

$files = Get-ChildItem -Path "src/components/ui" -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # @radix-ui のバージョン指定を削除
    $content = $content -replace '@radix-ui/([a-z-]+)@[\d\.]+', '@radix-ui/$1'
    
    # lucide-react のバージョン指定を削除
    $content = $content -replace 'lucide-react@[\d\.]+', 'lucide-react'
    
    # class-variance-authority のバージョン指定を削除
    $content = $content -replace 'class-variance-authority@[\d\.]+', 'class-variance-authority'
    
    # その他のバージョン指定を削除
    $content = $content -replace 'cmdk@[\d\.]+', 'cmdk'
    $content = $content -replace 'input-otp@[\d\.]+', 'input-otp'
    $content = $content -replace 'react-day-picker@[\d\.]+', 'react-day-picker'
    $content = $content -replace 'embla-carousel-react@[\d\.]+', 'embla-carousel-react'
    $content = $content -replace 'react-resizable-panels@[\d\.]+', 'react-resizable-panels'
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Host "完了！すべてのバージョン指定を削除しました。" -ForegroundColor Green
