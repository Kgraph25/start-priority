コーディング指示書: aircon-priority-app
1. ディレクトリ構成

aircon-priority-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── landing/
│   │   │   │   └── landing.component.ts
│   │   │   │   └── landing.component.html
│   │   │   │   └── landing.component.scss
│   │   │   ├── priority/
│   │   │   │   └── priority.component.ts
│   │   │   │   └── priority.component.html
│   │   │   │   └── priority.component.scss
│   │   │   ├── priority-confirm/
│   │   │   │   └── priority-confirm.component.ts
│   │   │   │   └── priority-confirm.component.html
│   │   │   │   └── priority-confirm.component.scss
│   │   │   ├── question/
│   │   │   │   └── question.component.ts
│   │   │   │   └── question.component.html
│   │   │   │   └── question.component.scss
│   │   │   ├── completion/
│   │   │   │   └── completion.component.ts
│   │   │   │   └── completion.component.html
│   │   │   │   └── completion.component.scss
│   │   │   ├── result/
│   │   │   │   └── result.component.ts
│   │   │   │   └── result.component.html
│   │   │   │   └── result.component.scss
│   │   │   ├── shared/
│   │   │       └── progress-bar/
│   │   │          └── progress-bar.component.ts
│   │   │          └── progress-bar.component.html
│   │   │          └── progress-bar.component.scss
│   │   │   
│   │   ├── services/
│   │   │   └── priority-selection.service.ts
│   │   ├── models/
│   │   │   └── choice.model.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   │   
│   ├── assets/
│   │   └── ...
│   ├── styles.scss
│   ├── index.html
│   └── ...
├── angular.json
├── package.json
├── tsconfig.json
└── ...
2. モジュール設計

AppModule: アプリケーションのルートモジュール (Angular 17 では app.config.ts で設定)
AppRoutingModule: ルーティングモジュール (app.routes.ts で定義)
ルーティング定義：
/: LandingComponent
/priority/1: PriorityComponent (1回目の優先順位選択)
/priority/confirm/1: PriorityConfirmComponent (1回目の優先順位確認)
/priority/2: PriorityComponent (2回目の優先順位選択)
/priority/confirm/2: PriorityConfirmComponent (2回目の優先順位確認)
/question: QuestionComponent
/completion: CompletionComponent
/result: ResultComponent
3. コンポーネント実装

AppComponent
router-outlet を配置
ProgressBarComponent を配置
グローバルなスタイルを適用
LandingComponent
ランディングページを表示
優先順位選択画面への遷移ボタンを配置
PriorityComponent
@Input() で step を受け取り、1回目か2回目かの選択かを判別
PrioritySelectionService から選択肢のデータを取得して表示
選択肢をクリックで Choice の isSelected を true に更新
ドラッグ&ドロップ機能は一旦保留
進むボタンを配置し、PrioritySelectionService に保存された情報を元に、次の画面へ遷移
エラー表示は SnackBar を表示
PriorityConfirmComponent * @Input() で step を受け取り、1回目か2回目かの選択かを判別 * PrioritySelectionService から選択された優先順位のデータを取得して表示 * 1回目の確認画面には補足説明を表示 * 次の画面へ進むボタンを配置
QuestionComponent
PrioritySelectionService から選択された優先順位に基づいて質問内容を動的に生成
質問への回答を PrioritySelectionService に保存
進むボタンを配置し、完了画面へ遷移
CompletionComponent
完了画面を表示
結果画面へ遷移するボタンを配置
ResultComponent
PrioritySelectionService から選択結果と回答を取得
アドバイスとおすすめのエアコンの機能・メーカーを動的に生成して表示
(Firebase実装時) 選択結果と回答をFirebaseに保存
ProgressBarComponent * @Input() で現在のステップ数とステップ総数を受け取り、プログレスバーを表示
4. サービス実装

PrioritySelectionService
choices: Choice[] プロパティ (選択肢データ)
初期データとして下記を定義
choices: Choice[] = [
    { id: 'environment', name: '使用場所の環境', isSelected: false, priority: null },
    { id: 'function', name: '重視する機能', isSelected: false, priority: null },
    { id: 'manufacturer', name: 'メーカー', isSelected: false, priority: null }
];
selectedChoices: BehaviorSubject<Choice[]> : 選択された選択肢をコンポーネントに通知
answers: { [questionId: string]: string } : 回答を格納
setPriority(choice: Choice, priority:number) : 選択された優先順位を設定
getPriority(): Choice[] : 優先順位を元にソートした選択肢を返す
addAnswer(questionId: string, answer: string): 回答を追加
getAnswers(): 回答を取得
resetChoices(): 選択状態をリセット
saveToFirebase(): (Firebase実装時) データをFirebaseに保存
loadFromFirebase(): (Firebase実装時) データをFirebaseから取得
saveToIndexedDB(): オフラインデータをIndexedDBに保存
loadFromIndexedDB(): オフラインデータをIndexedDBから取得
syncWithFirebase(): オンライン復帰時にIndexedDBのデータをFirebaseに送信
5. UI/UX 実装

Angular Material を活用し、レスポンシブで洗練されたUIを構築
各コンポーネントは画面中央に要素を大きく配置
選択肢ボタンは縦並びで配置
material.io の Container transform アニメーションを参考に、スムーズな画面遷移を実現
プログレスバーは各画面遷移時に表示
SnackBar コンポーネントを使用して、エラーメッセージを表示
6. Firebase 実装

Firebase プロジェクトを作成し、設定ファイルを environments/environment.ts に記述
Firebase Realtime Database を使用して、選択結果と回答を保存
Firebase Authentication を使用して、ユーザーIDを発行（未ログイン時はランダムなIDを生成）
Firebase セキュリティルールを設定し、データへの不正アクセスを防止
7. オフライン対応

Service Worker を登録し、アプリケーションの基本的な機能をキャッシュ
オフライン時は IndexedDB を使用して、選択結果と回答を保存
オンライン復帰時に、IndexedDB のデータを Firebase に同期
8. エラー処理

未選択項目がある場合は、SnackBar コンポーネントを使用してエラーメッセージを表示
バリデーションチェックを各画面遷移時に実施
9. 戻るボタン対応

PrioritySelectionService に選択状態を保持し、ブラウザの戻るボタン操作時に状態を復元
10. コーディング規約

TypeScript コーディング規約に従う
Angular スタイルガイドに従う
コメントを適切に記述する
変数名、関数名、クラス名は意味のある名称を使用する
DRY原則 (Don't Repeat Yourself) を意識し、コードの重複を避ける
コンポーネントの責務を明確にする
変更に強く、テストしやすいコードを書く