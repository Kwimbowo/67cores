import { useState } from "react";

const TDP_OPTIONS = [
  { label: "65W", value: 65 },
  { label: "100W", value: 100 },
  { label: "150W", value: 150 },
];

const isMobile = window.innerWidth < 768

export default function ComparisonTable({onChange, defaultCores = 4, defaultClock = 4.0, defaultTdp = 65 }) {
  
  return (
	<div style={styles.table}>
		<div style={styles.panel}>
			<div style={styles.singlecoreheader}>
				Single Core Processor
			</div>
			<ul style={styles.ul}>
				<li>
					A <span style={styles.bold}>singular</span> core executes instructions
				</li>
				<li>
					<span style={styles.bold}>Lacks multi-core efficiency</span>, leaving tasks to be done sequentially
				</li>
				<li>
					Simulates multitasking by time-sharing
				</li>
			</ul>
		</div>
		<div style={styles.panel}>
			<div style={styles.multicoreheader}>
				Multi Core Processor
			</div>
			<ul style={styles.ul}>
				<li>
					Allows multiple cores to execute multiple instructions <span style={styles.bold}>simultaneously</span>
				</li>
				<li>
					Allows tasks to be <span style={styles.bold}>distributed across multiple cores</span>
				</li>
				<li>
					Handles multitasking more efficiently by running multiple applications or processes at the same time
				</li>
			</ul>
		</div>
	</div>
  );
}

const styles = 
{	
	bold:{
		fontWeight:"600",
	},
	ul:{
		fontWeight: "400",
		margin: "0",
		paddingLeft: "1em",
	},
    singlecoreheader: {
        color: "#ff4d4d",
		borderBottom: "1px dashed rgba(255, 77, 77, 0.6)"   
	},
	multicoreheader: {
        color: "#3cd66a",
		borderBottom: "1px dashed rgba(60, 214, 106, 0.4)"
    },
	table:{
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
	gap:"3em"
	},
  panel: {
    display: "flex",
    flexDirection: "column",
    gap: 28,
    fontFamily: "Noto Sans Variable, sans-serif",
    fontWeight: "600",
    width: "100%",
    boxSizing: "border-box",
    contain: "inline-size",
    background: "linear-gradient(135deg, #373c43 0%, #22262a 100%)",
    padding: "32px",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)",
  },
  label: {
    fontSize: "1.05rem",
    color: "#a0a5aa",
    minWidth: 210,
    flexShrink: 0,
    textShadow: "0 -1px 0 rgba(0,0,0,0.5)",
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
  valueTag: {
    minWidth: 44,
    textAlign: "center",
    background: "linear-gradient(180deg, #4a5056 0%, #2d3238 100%)",
    border: "1px solid rgba(0, 0, 0, 0.4)",
    borderRadius: 14,
    padding: "6px 14px",
    fontSize: "1rem",
    color: "#ffffff",
    textShadow: "0 -1px 0 rgba(0, 0, 0, 0.8), 0 1px 1px rgba(255, 255, 255, 0.2)",
    flexShrink: 0,
    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15), 0 4px 6px rgba(0,0,0,0.3)",
  },
  
  slider: {
    flex: 1,
    minWidth: 0,
    height: 8,
    accentColor: "#3cafd6",
    cursor: "pointer",
    borderRadius: 999,
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.6), 0 1px 1px rgba(255,255,255,0.05)",
    appearance: "none",
  },
  segmentGroup: {
    display: "flex",
    position: "relative",
    width: "100%",
    background: "#16191b",
    borderRadius: 14,
    padding: "3px",
    boxShadow: "inset 0 3px 6px rgba(0,0,0,0.7), 0 1px 1px rgba(255,255,255,0.05)",
    isolation: "isolate",
  },
  slidingPill: {
    position: "absolute",
    top: 3,
    bottom: 3,
    width: "calc(33% - 6px)", 
    borderRadius: 11,
    zIndex: 0,
    background: "linear-gradient(180deg, #535a61 0%, #363b40 100%)",
    border: "1px solid rgba(0,0,0,0.3)",
    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2), 0 3px 6px rgba(0,0,0,0.4), 0 0 10px rgba(60, 214, 106, 0.15)",
    transition: "left 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
  },
  segmentButton: {
    flex: 1,
    border: "none",
    background: "transparent",
    padding: "12px 0",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    zIndex: 1,
    transition: "color 0.2s ease",
  },
};