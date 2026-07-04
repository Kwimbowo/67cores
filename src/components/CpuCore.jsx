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
        border: "3px solid black",
        borderRadius: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: "1 / 1",
    },
    'label': {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    'inactive': {
        backgroundColor: '#ffffff',
    },
    'active': {
        backgroundColor: '#80ed80',
    },
    'throttle': {
        backgroundColor: '#F09191',
    },
}

// Glowing effect when cpiu throttling
const keyframes = `
@keyframes throttle-flash {
    0%, 100% { background-color: #F09191; }
    50% { background-color: #e65b5b; }
}
.cpu-core-throttle {
    animation: throttle-flash 1.2s ease-in-out infinite;
}
`;