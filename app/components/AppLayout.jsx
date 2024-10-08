import clsx from "clsx";

export function AppLayout({ children }) {
  return (
    <>
      <div className={clsx("text-slate-900")}>{children}</div>
      <div id="modals"></div>
    </>
  );
}
