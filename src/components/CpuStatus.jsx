
export default function CpuStatus({throttle=false, executionTime=0, ...rest}) {
    const safeMsg = <>Running efficiently within thermal limits.<br />⁠</>;
    const badMsg = <>CPU is overheating! Clock speeds reduced to stay within thermal limits. <br />
    Efficiency heavily penalized.</>;
    const status = throttle ? badMsg : safeMsg;



    return <div style={styles.container}>
        {/* Execution Time */}
        <div style={styles.execution}>
            Execution Time: {executionTime.toFixed(1)}s
        </div>

        {/* Status Message */}
        <div style={styles.message}>
            {status}
        </div>
    </div>
}

const styles = {
    container: {
        width: "full",
        fontSize: '1.2rem',
        textAlign: 'center'
    },
    execution: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        marginBottom: "8px"
    },
    message: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}