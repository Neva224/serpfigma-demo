import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * 全域錯誤邊界：任一元件 render 例外時，顯示友善錯誤頁而非整頁白屏，
 * 並提供「重新載入」。（健檢中等項目 M1）
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // 未來可在此接上錯誤監控（如 Sentry）
    console.error("[ErrorBoundary] 未捕捉的錯誤：", error, info.componentStack);
  }

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-2xl">
            ⚠️
          </div>
          <h1 className="text-lg font-bold text-slate-800">頁面發生錯誤</h1>
          <p className="mt-2 text-sm text-slate-500">
            系統遇到未預期的問題，您的資料仍安全保存。請重新載入頁面再試一次。
          </p>
          <pre className="mt-4 max-h-28 overflow-auto rounded-lg bg-slate-50 px-3 py-2 text-left text-[11px] leading-relaxed text-slate-400">
            {this.state.error.message}
          </pre>
          <button
            type="button"
            onClick={this.handleReload}
            className="mt-5 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            重新載入
          </button>
        </div>
      </div>
    );
  }
}
