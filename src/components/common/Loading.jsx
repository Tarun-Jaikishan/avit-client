export default function Loading() {
  return (
    <div>
      <div class="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-white border-r-2"></div>
      </div>
    </div>
  );
}
