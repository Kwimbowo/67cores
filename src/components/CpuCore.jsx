// src/components/CpuCore.jsx
export default function CpuCore({id="#", active, throttle, ...rest}) {
    const statusStyle = !active ? styles.inactive : (throttle ? styles.throttle : styles.active);
    const coreStyle = { ...styles.border, ...statusStyle };

    return <>
        <div style={coreStyle}>
            <p style={styles.label}>CORE {id}</p>
        </div>
    </>;
}

const styles = {
    'border': {
        maxWidth: "150px",
        maxHeight: "150px",
        border: "6px solid black",
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