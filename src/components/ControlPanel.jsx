import { useState } from "react";

const TDP_OPTIONS = [
  { label: "65W", value: 65 },
  { label: "100W", value: 100 },
  { label: "150W", value: 150 },
];

export default function ControlPanel({onChange, defaultCores = 4, defaultClock = 4.0, defaultTdp = 65 }) {
  const [cores, setCores] = useState(defaultCores);
  const [clock, setClock] = useState(defaultClock);
  const [tdp, setTdp] = useState(defaultTdp);

  const emit = (next) => {
    if (onChange) onChange(next);
  };

  const handleCores = (e) => {
    const val = Number(e.target.value);
    setCores(val);
    emit({ cores: val, clock, tdp });
  };

  const handleClock = (e) => {
    const val = Number(e.target.value);
    setClock(val);
    emit({ cores, clock: val, tdp });
  };

  const handleTdp = (val) => {
    setTdp(val);
    emit({ cores, clock, tdp: val });
  };

  return (
    <div style={styles.panel}>
      <Row label="Active Cores">
        <Slider
          min={1}
          max={8}
          step={1}
          value={cores}
          onChange={handleCores}
          display={cores}
        />
      </Row>

      <Row label="Clock Speed (GHz)">
        <Slider
          min={1.0}
          max={5.0}
          step={0.1}
          value={clock}
          onChange={handleClock}
          display={clock.toFixed(1)}
        />
      </Row>

      <Row label="Cooling Solution (TDP)">
        <div style={styles.segmentGroup}>
          {TDP_OPTIONS.map((opt, i) => {
            const selected = tdp === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => handleTdp(opt.value)}
                aria-pressed={selected}
                style={{
                  ...styles.segmentButton,
                  ...(selected ? styles.segmentButtonSelected : {}),
                  borderTopLeftRadius: i === 0 ? 999 : 0,
                  borderBottomLeftRadius: i === 0 ? 999 : 0,
                  borderTopRightRadius:
                    i === TDP_OPTIONS.length - 1 ? 999 : 0,
                  borderBottomRightRadius:
                    i === TDP_OPTIONS.length - 1 ? 999 : 0,
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </Row>
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}</span>
      <div style={styles.control}>{children}</div>
    </div>
  );
}

function Slider({ min, max, step, value, onChange, display }) {
  return (
    <div style={styles.sliderGroup}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        style={styles.slider}
      />
      <span style={styles.valueTag}>{display}</span>
    </div>
  );
}

const styles = {
  panel: {
    display: "flex",
    flexDirection: "column",
    gap: 28,
    fontFamily: "Noto Sans Variable",
    fontWeight:"600",
    width: "100%",
    boxSizing: "border-box",
    contain: "inline-size",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap",
  },
  label: {
    fontSize: "1.05rem",
    color: "#1a1a1a",
    minWidth: 190,
    flexShrink: 0,
  },
  control: {
    flex: "1 1 260px",
    minWidth: 0,
  },
  sliderGroup: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  slider: {
    flex: 1,
    minWidth: 0,
    height: 5,
    accentColor: "#1a1a1a",
    cursor: "pointer",
  },
  valueTag: {
    minWidth: 44,
    textAlign: "center",
    background: "#e8e8e8",
    borderRadius: 999,
    padding: "8px 14px",
    fontSize: "1rem",
    color: "#1a1a1a",
    flexShrink: 0,
  },
  segmentGroup: {
    display: "flex",
    width: "100%",
    background: "#e8e8e8",
    borderRadius: 999,
    overflow: "hidden",
  },
  segmentButton: {
    flex: 1,
    border: "none",
    background: "transparent",
    padding: "14px 0",
    fontSize: "1rem",
    color: "#1a1a1a",
    cursor: "pointer",
    transition: "background 0.15s ease, color 0.15s ease",
  },
  segmentButtonSelected: {
    background: "#8a8a8a",
    color: "#ffffff",
  },
};