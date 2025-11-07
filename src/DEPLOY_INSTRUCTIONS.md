# 🚀 デプロイ手順

## 修正完了！

以下の問題を修正しました：
✅ ビルド出力ディレクトリを `dist` に修正
✅ CSS の `@import` 位置を修正

---

## 📤 GitHubにプッシュ

PowerShellで以下のコマンドを実行してください：

```powershell
# 変更をステージング
git add .

# コミット
git commit -m "fix: ビルド設定修正 - distディレクトリ指定とCSS import順序修正"

# GitHubにプッシュ
git push origin main
```

---

## ✅ 完了後

GitHubにプッシュすると、Vercelが自動的に再デプロイを開始します。

### Vercel Dashboardで確認：
1. https://vercel.com/dashboard にアクセス
2. プロジェクトを選択
3. 「Deployments」タブで進行状況を確認

数分後、デプロイが完了します！🎉

---

## 🌐 デプロイ成功後のURL

```
https://your-project.vercel.app
```

Vercel Dashboardで確認できます。

---

## 🔧 今後の更新方法

```powershell
# 変更を加えたら
git add .
git commit -m "変更内容の説明"
git push origin main
```

自動的にVercelが再デプロイします！
