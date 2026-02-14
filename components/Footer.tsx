export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink/50 py-8 mt-16">
      <div className="reading-column text-center">
        <p className="font-garamond text-sm text-parchment/50">
          © {new Date().getFullYear()} Fire on the Mountain – A Digital Scripture Narrative
        </p>
        <p className="font-garamond text-xs text-parchment/30 mt-2">
          “The Lord—He is God!”
        </p>
      </div>
    </footer>
  );
}