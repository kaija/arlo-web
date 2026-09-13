/**
 * Arlo AI Website — i18n
 *
 * English lives in the markup, so a crawler or a JS-less visitor gets a complete
 * English page. This file only holds the overrides for the other locales.
 *
 * Loaded with a plain <script> and not fetch(), so the page also works when
 * index.html is opened straight off disk over file://.
 *
 * Used by the hub (index.html) and the blog index (blog/index.html). Blog posts
 * don't load it — each translation of a post is its own static page.
 *
 * ponytail: one file, three locales, two short pages. Split per-locale and
 * lazy-load if a fourth language shows up or the dictionaries grow much further.
 */
(function () {
  'use strict';

  var DICT = {
    'zh-Hant': {
      'meta.title': 'Arlo AI — 從頭到尾都開源的 Agentic AI',
      'meta.description': 'Arlo AI 打造自由、開源的 agentic AI：以 Rust 寫成、在本機運行的私密 agent，直連自有 LLM 的 iOS 客戶端，以及 AG-UI 協定的 Rust 實作。',

      'nav.projects': '專案',
      'nav.stack': '如何串接',
      'nav.principles': '原則',
      'nav.blog': '部落格',
      'nav.language': '選擇語言',
      'nav.toggle': '開關選單',

      'hero.badge': '自由且開源 · MIT',
      'hero.title': '從頭到尾<br/>都開源的 Agentic AI。',
      'hero.subtitle': 'Arlo AI 是一組開源專案，讓你依自己的方式運行 AI agent — 在自己機器上的私密 agent runtime、直連供應商的行動客戶端，以及把 agent 接上任何前端的協定層。中間沒有我們的伺服器，永遠不會有。',
      'hero.ctaPrimary': '看看這些專案',
      'hero.ctaSecondary': '在 GitHub 上查看',

      'projects.heading': '三個專案，同一個信念',
      'projects.sub': '每一個都免費、採用 MIT 授權，隨你運行。',
      'projects.visit': '前往網站 →',
      'pills.byok': '自備金鑰',
      'projects.rust.body': '在本機優先運行的私密 agent，介面隨你挑 — 互動式 TUI、單次執行的 CLI，或嵌入你自己程式的函式庫 — 並可在 macOS、Windows 與 Linux 上運行。你的金鑰，你的機器。',
      'projects.lite.body': '用 React Native 打造的 iOS App，隨時隨地與 LLM 對話。帶著自己的 API 金鑰直連供應商 — 不必註冊、不必訂閱，中間不經過任何人。',
      'projects.agui.body': '緊跟規範的 AG-UI 協定 Rust 實作 — 這套以事件為基礎的標準介面，讓 Web 或 App 前端能驅動 Arlo Rust，並與 TypeScript、Python SDK 完全相容。',

      'stack.heading': '如何串接',
      'stack.sub': '兩條各自獨立的路徑，通往同一個目的地：你自己的模型，中間沒有仲介。',
      'stack.frontends.title': 'Web · 桌面 · 行動前端',
      'stack.frontends.body': '你想打造的任何介面',
      'stack.agui.body': 'AG-UI 標準介面',
      'stack.rust.body': '在本機運行的私密 agent runtime',
      'stack.provider.title': '你自己的 LLM 供應商',
      'stack.provider.body': '雲端、自架或本機皆可',
      'stack.or': '或者，直接從你的口袋出發',
      'stack.lite.body': 'iOS，獨立運作',
      'stack.lite.direct': '直接連線，不經過後端',

      'principles.heading': '我們不會妥協的事',
      'principles.sub': '每個專案都共享同樣的四項承諾。',
      'principles.keys.title': '帶著自己的金鑰',
      'principles.keys.body': '你的憑證留在自己機器上，直接送往你的供應商。我們看不到，因為它根本無處可去。',
      'principles.backend.title': '沒有後端，沒有訂閱',
      'principles.backend.body': '沒有 Arlo 伺服器要註冊，沒有席次要付費，也沒有帳號要建立。你只付錢給模型供應商，不必付給任何人。',
      'principles.agnostic.title': '不綁定供應商',
      'principles.agnostic.body': 'Anthropic、任何相容 OpenAI 的 API，或跑在你自家硬體上的模型伺服器。想指向哪裡就指向哪裡，想換就換。',
      'principles.mit.title': 'MIT 授權，公開開發',
      'principles.mit.body': '每個專案都在 MIT 授權下公開開發。讀它、fork 它、放進你自己的產品裡 — 沒有附帶條件。',

      'footer.license': '授權條款',

      'blog.meta.title': '部落格 — Arlo AI',
      'blog.meta.description': '關於系統設計與工程實務的實戰筆記。',
      'blog.badge': '部落格',
      'blog.heading': '軟體開發筆記',
      'blog.sub': '關於系統設計與工程實務的實戰筆記。每篇文章都有 English、繁體中文與日本語版本。',
      'blog.readMore': '閱讀全文 →',
      'pills.systemDesign': '系統設計',
      'pills.architecture': '架構',
      'blog.systemDesign.href': 'system-design-before-code/zh-Hant/',
      'blog.systemDesign.title': '大公司裡的軟體開發：寫 Code 之前，你該先想清楚的事',
      'blog.systemDesign.excerpt': '從「為什麼要做」到 Design Review，設計系統時該問哪些問題、每個問題背後在防什麼風險，用一個客服通話摘要系統的例子從頭講到尾。',
      'blog.systemDesign.readTime': '閱讀時間約 25 分鐘'
    },

    ja: {
      'meta.title': 'Arlo AI — すべてがオープンソースのエージェンティック AI',
      'meta.description': 'Arlo AI は自由でオープンソースなエージェンティック AI を開発しています。Rust 製のローカルで動くプライベートなエージェント、自分の LLM に直接つなぐ iOS クライアント、そして AG-UI プロトコルの Rust 実装。',

      'nav.projects': 'プロジェクト',
      'nav.stack': '構成',
      'nav.principles': '理念',
      'nav.blog': 'ブログ',
      'nav.language': '言語を選択',
      'nav.toggle': 'メニューを開閉',

      'hero.badge': '無料・オープンソース · MIT',
      'hero.title': 'すべてがオープンソースの<br/>エージェンティック AI。',
      'hero.subtitle': 'Arlo AI は、AI エージェントを自分のやり方で動かすためのオープンソース・プロジェクト群です。手元のマシンで動くプライベートなエージェントランタイム、プロバイダーに直結するモバイルクライアント、そしてエージェントを任意のフロントエンドにつなぐプロトコル層。あいだに私たちのサーバーはありません。これからも。',
      'hero.ctaPrimary': 'プロジェクトを見る',
      'hero.ctaSecondary': 'GitHub で見る',

      'projects.heading': '3 つのプロジェクト、1 つの考え方',
      'projects.sub': 'どれも無料、MIT ライセンス、あなたが自由に動かせます。',
      'projects.visit': 'サイトへ →',
      'pills.byok': '自分の鍵で',
      'projects.rust.body': 'ローカル優先で動くプライベートなエージェント。対話型 TUI、ワンショット CLI、組み込みライブラリと、必要なインターフェースを選べます。macOS・Windows・Linux で動作。鍵もマシンもあなたのもの。',
      'projects.lite.body': 'React Native 製の iOS アプリで、外出先でも LLM と対話。自分の API キーでプロバイダーへ直接接続 — アカウントもサブスクもなく、あいだには何も入りません。',
      'projects.agui.body': '仕様に追従した AG-UI プロトコルの Rust 実装。Web やアプリのフロントエンドから Arlo Rust を動かすための、イベントベースの標準インターフェースで、TypeScript・Python SDK とワイヤー互換です。',

      'stack.heading': 'どう組み合わさるか',
      'stack.sub': '独立した 2 つの経路が、同じ場所へ。仲介者なしで、自分のモデルへ。',
      'stack.frontends.title': 'Web · デスクトップ · モバイルのフロントエンド',
      'stack.frontends.body': 'あなたが作りたいもの',
      'stack.agui.body': 'AG-UI 標準インターフェース',
      'stack.rust.body': 'ローカルで動くプライベートなエージェントランタイム',
      'stack.provider.title': 'あなた自身の LLM プロバイダー',
      'stack.provider.body': 'ホスト型・自己ホスト型・ローカル',
      'stack.or': 'あるいは、ポケットから直接',
      'stack.lite.body': 'iOS・単体で動作',
      'stack.lite.direct': '直接接続、バックエンドなし',

      'principles.heading': '譲らないこと',
      'principles.sub': 'すべてのプロジェクトに共通する 4 つの約束。',
      'principles.keys.title': '自分の鍵を使う',
      'principles.keys.body': '認証情報は手元のマシンに留まり、プロバイダーへ直接送られます。私たちには見えません。送られる先がそもそも無いからです。',
      'principles.backend.title': 'バックエンドもサブスクもなし',
      'principles.backend.body': '登録すべき Arlo のサーバーも、支払うシートも、作るアカウントもありません。お金を払う相手はモデルプロバイダーだけです。',
      'principles.agnostic.title': 'プロバイダーを選ばない',
      'principles.agnostic.body': 'Anthropic、OpenAI 互換の API、自前のハードウェアで動くモデルサーバー。好きな先に向けて、好きなときに乗り換えられます。',
      'principles.mit.title': 'MIT ライセンス、開かれた開発',
      'principles.mit.body': 'すべてのプロジェクトを MIT ライセンスのもとで公開開発しています。読んで、フォークして、自分のプロダクトに載せてください。条件はありません。',

      'footer.license': 'ライセンス',

      'blog.meta.title': 'ブログ — Arlo AI',
      'blog.meta.description': 'システム設計とエンジニアリングの実践についての現場ノート。',
      'blog.badge': 'ブログ',
      'blog.heading': 'ソフトウェア開発ノート',
      'blog.sub': 'システム設計とエンジニアリングの実践についての現場ノート。すべての記事を English・繁體中文・日本語で読めます。',
      'blog.readMore': '続きを読む →',
      'pills.systemDesign': 'システム設計',
      'pills.architecture': 'アーキテクチャ',
      'blog.systemDesign.href': 'system-design-before-code/ja/',
      'blog.systemDesign.title': '大企業のソフトウェア開発：コードを書く前に考え抜くべきこと',
      'blog.systemDesign.excerpt': '「なぜ作るのか」からデザインレビューまで。システム設計で問うべきことと、その問いが防ごうとしているリスクを、コールセンターの通話要約システムという実例を通して解説します。',
      'blog.systemDesign.readTime': '読了時間 約35分'
    }
  };

  var STORAGE_KEY = 'arloLang';
  var nodes = document.querySelectorAll('[data-i18n]');
  var attrNodes = document.querySelectorAll('[data-i18n-attr]');

  // Snapshot the English markup so switching back to EN restores it exactly
  // (including the <br/> in the hero headline).
  var EN = {};
  nodes.forEach(function (el) {
    EN[el.dataset.i18n] = el.innerHTML;
  });
  var EN_ATTR = [];
  attrNodes.forEach(function (el) {
    var parts = el.dataset.i18nAttr.split(':');
    EN_ATTR.push({ el: el, attr: parts[0], key: parts[1], value: el.getAttribute(parts[0]) });
  });

  function apply(lang) {
    var dict = DICT[lang];
    document.documentElement.lang = lang;

    nodes.forEach(function (el) {
      var key = el.dataset.i18n;
      // Values are authored in this file, never user input — markup is intentional.
      el.innerHTML = dict && dict[key] ? dict[key] : EN[key];
    });

    EN_ATTR.forEach(function (item) {
      var value = dict && dict[item.key] ? dict[item.key] : item.value;
      item.el.setAttribute(item.attr, value);
      if (item.el.tagName === 'TITLE') {
        document.title = value;
      }
    });

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.setAttribute('aria-current', String(btn.dataset.lang === lang));
    });
  }

  function store(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private mode — the choice just won't persist */
    }
  }

  function initial() {
    var param = new URLSearchParams(location.search).get('lang');
    if (param && (param === 'en' || DICT[param])) return param;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'en' || DICT[saved])) return saved;
    } catch (e) {
      /* ignore */
    }
    // No navigator.language sniffing — a silent language switch on first load is
    // more surprising than helpful, and the switcher is right there in the nav.
    return 'en';
  }

  document.querySelectorAll('.lang-switch button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.dataset.lang;
      apply(lang);
      store(lang);
    });
  });

  apply(initial());
})();
