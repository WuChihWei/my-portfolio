export default function GridOverlay() {
    return (
      <div className="grid-overlay">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="grid-column"></div>
        ))}
      </div>
    );
  }
  