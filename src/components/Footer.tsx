export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">見せ合いちゃんねる</h3>
            <p className="text-gray-600 text-sm">
              オンラインで楽しめるアダルトビデオチャット掲示板
            </p>
          </div>
          <div>
            <h4 className="mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  利用規約
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">注意事項</h4>
            <p className="text-gray-600 text-sm">
              18歳未満の方の利用は禁止されています。
              <br />
              オンラインでの交流のみです。実際に会うことはできません。
              <br />
              不適切な投稿は予告なく削除されます。
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
          © 2025 見せ合いちゃんねる. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
