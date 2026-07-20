// src/components/CpuCore.jsx
export default function CpuCore({ id = "#", active, throttle, ...rest }) {
    const statusStyle = !active ? styles.inactive : (throttle ? styles.throttle : styles.active);
    const coreStyle = { ...styles.border, ...statusStyle };
    return <>
        <style>{keyframes}</style>
        <div style={coreStyle} className={(throttle && active) ? "cpu-core-throttle" : undefined}>
            <p style={styles.label}>CORE {id}</p>
        </div>
    </>;
}

const styles = {
    'border': {
        maxWidth: "150px",
        maxHeight: "150px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: "1 / 1",
        borderRadius: "16px",
        border: "1px solid rgba(0, 0, 0, 0.4)",
        transition: "all 0.15s ease-in-out",
        boxSizing: "border-box",
    },
    'label': {
        fontWeight: '800',
        fontSize: '1.3rem',
        margin: 0,
        letterSpacing: "0.5px",
        textShadow: "0px -1px 1px rgba(0, 0, 0, 0.7), 0px 1px 1px rgba(120, 120, 120, 0.4)",
    },
    'inactive': {
        background: "linear-gradient(180deg, #ffffff 0%, #e0e0e0 50%, #b8b8b8 100%)",
        color: "#8c8c8c",
        textShadow: "0 1px 0 rgba(255, 255, 255, 0.8)",
        boxShadow: `
            inset 0 2px 2px rgba(255, 255, 255, 1), 
            inset 0 -4px 8px rgba(0, 0, 0, 0.2), 
            0 5px 8px rgba(0, 0, 0, 0.5)
        `,
    },
    'active': {
        background: "linear-gradient(180deg, #71f594 0%, #3cd66a 40%, #1fa64b 100%)",
        color: "#0c3b1a",
        textShadow: "0 1px 1px rgba(255, 255, 255, 0.4)",
        boxShadow: `
            inset 0 2px 3px rgba(255, 255, 255, 0.6), 
            inset 0 -4px 10px rgba(0, 0, 0, 0.4), 
            0 0 15px rgba(60, 214, 106, 0.5), 
            0 6px 10px rgba(0, 0, 0, 0.6)
        `,
    },
    'throttle': {
        backgroundColor: '#ff6b6b',
        color: '#4a0d0d',
        textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)',
    },
}

// Glowing effect when cpiu throttling
const keyframes = `
@keyframes throttle-flash {
    0%, 100% { 
        background-color: #ff6b6b; 
        box-shadow: 
            inset 0 2px 3px rgba(255, 255, 255, 0.6), 
            inset 0 -4px 10px rgba(0, 0, 0, 0.4), 
            0 0 15px rgba(255, 77, 77, 0.6), 
            0 6px 10px rgba(0, 0, 0, 0.6);
    }
    50% { 
        background-color: #d63030; 
        box-shadow: 
            inset 0 2px 3px rgba(255, 255, 255, 0.4), 
            inset 0 -4px 10px rgba(0, 0, 0, 0.5), 
            0 0 25px rgba(214, 48, 48, 0.9), 
            0 6px 10px rgba(0, 0, 0, 0.6);
    }
}
.cpu-core-throttle {
    animation: throttle-flash 1.0s ease-in-out infinite;
}
`;