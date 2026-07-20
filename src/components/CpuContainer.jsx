import CpuCore from '../components/CpuCore.jsx';

export default function CpuContainer({power=0, efficiency=0, throttle=false, 
    activeCount=0, executionTime=0, ...rest}) {
    const MAX_CORES = 8;
    const coresList = [];

    for (let j = 0; j < MAX_CORES; j ++) {
        coresList.push(<CpuCore key={j} id={j} throttle={throttle} active={j < activeCount}/>)
    }

    const warningMsg = !throttle ? <></> : <div style={styles.throttle}>
                THERMAL THROTTLING DETECTED!
            </div>

    return <>
        {/* Main container */}
        <div style={styles.container}>
            {/* Cpu Cores */}
            <div style={styles.cores}>
                { coresList }            
            </div>

            {/* Actual Power Label */}
            <div style={{...styles.label, ...styles.power}}>
                Actual Power: <span style={{fontWeight: 800}}>{power.toFixed(1)}</span>W
            </div>

            {/* efficiency Label */}
            <div style={{...styles.label, ...styles.efficiency}}>
                Efficiency: <span style={{fontWeight: 800}}>{efficiency}</span>%
            </div>

            {/* Throttling Message */}
            {warningMsg}
            
        </div>
    </>;
}

const styles = {
    container: {
        position: "relative",
        padding: "32px",
    },
    cores: {
        fontFamily: 'Courier New, monospace',
        minWidth: "664px",
        maxWidth: "800px",
        padding: '24px 32px',          
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", 
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "20px",
        background: "linear-gradient(135deg, #2d3238 0%, #1a1d20 100%)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: "24px",
        boxShadow: `
            inset 0 4px 10px rgba(0, 0, 0, 0.8),
            inset 0 -2px 6px rgba(255, 255, 255, 0.1),
            0 10px 30px rgba(0, 0, 0, 0.5)
        `,
    },
    throttle: {
        position: "absolute",
        fontSize: "1.75rem",
        fontWeight: "bold",
        color: "#ff4d4d",
        textShadow: "0 0 10px rgba(255, 77, 77, 0.5)",
        left: "0px",
        top: "-12px"
    },
    label: {
        width: "fit-content",
        position: "absolute",
        padding: "8px 16px",
        fontSize: "0.9rem",
        fontWeight: "500",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "linear-gradient(180deg, #4a5056 0%, #2d3238 100%)",
        border: "1px solid rgba(0, 0, 0, 0.6)",
        color: "#e0e0e0",
        boxShadow: `
            inset 0 2px 2px rgba(255, 255, 255, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.4)
        `
    },
    labelText: {
        color: '#a0a5aa'
    },
    power: {
        top: "8px",
        right: "8px"
    },
    efficiency: {
        bottom: "8px",
        left: "8px"
    }
};