# 見せ合いちゃんねる

オンラインでビデオ通話やチャットを楽しみたい方の募集掲示板LP

## 🚀 デプロイ手順（Vercel + GitHub）

### 1. GitHubリポジトリの作成

```bash
# GitHubで新しいリポジトリを作成後
git init
git add .
git commit -m "Initial commit: 見せ合いちゃんねる LP"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Vercelへのデプロイ

#### オプション A: Vercel CLI を使用

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel

# 本番環境へデプロイ
vercel --prod
```

#### オプション B: Vercel Web Dashboard を使用

1. [Vercel](https://vercel.com) にアクセスしてログイン
2. 「New Project」をクリック
3. GitHubリポジトリをインポート
4. プロジェクト設定:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. 「Deploy」をクリック

### 3. 自動デプロイの設定

GitHubリポジトリにプッシュすると、Vercelが自動的にデプロイします：

- `main` ブランチへのプッシュ → 本番環境に自動デプロイ
- その他のブランチへのプッシュ → プレビュー環境に自動デプロイ

## 🛠️ ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## 📁 プロジェクト構成

```
misseai-channel/
├── components/          # Reactコンポーネント
│   ├── ui/             # shadcn/uiコンポーネント
│   ├── figma/          # Figma関連コンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PostCard.tsx    # 投稿カード（ぼかし機能付き）
│   └── ...
├── styles/             # CSSファイル
│   └── globals.css     # グローバルスタイル + アニメーション
├── App.tsx             # メインコンポーネント
├── main.tsx            # エントリーポイント
├── index.html          # HTMLテンプレート
└── package.json        # 依存関係
```

## ✨ 主な機能

- **段階的ぼかし機能**: 1〜5件目は少しぼかし、6件目は完全ぼかし
- **動画配信風エフェクト**: スキャンライン・ノイズ効果
- **アプリ限定コンテンツ**: 6件目をアプリ誘導用に設定
- **LIVE配信バッジ**: オンライン状態・視聴者数表示
- **レビューセクション**: 信頼性を高める利用者の声

## 🔧 カスタマイズ

### 投稿データの編集

`App.tsx` の `samplePosts` 配列を編集:

```typescript
const samplePosts = [
  {
    id: "1",
    username: "あいり💕",
    age: 21,
    blurLevel: 1,  // 0: 通常, 1: 少しぼかし, 2: 完全ぼかし
    isAppExclusive: false,
    // ...
  },
  // ...
];
```

### ぼかしレベルの変更

- `blurLevel: 0` - 通常表示
- `blurLevel: 1` - 少しぼかし（1〜5件目）
- `blurLevel: 2` - 完全ぼかし（6件目・アプリ限定）

## 📝 注意事項

- このサイトはアダルトコンテンツを含むため、年齢確認や利用規約の実装を推奨
- 実際のアフィリエイトリンクは各ボタンの `onClick` イベントに追加してください
- 画像はUnsplashから取得していますが、本番環境では適切な画像に差し替えてください

## 🌐 環境変数（必要に応じて）

Vercelの環境変数設定で追加:

```env
VITE_APP_URL=https://your-domain.vercel.app
VITE_AFFILIATE_LINK=https://your-affiliate-link.com
```

## 📞 サポート

問題が発生した場合は、GitHubのIssuesで報告してください。

---

Made with ❤️ for Figma Make
