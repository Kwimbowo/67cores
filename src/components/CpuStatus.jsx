
export default function CpuStatus({throttle=false, executionTime=0, ...rest}) {
    const safeMsg = <>Running efficiently within thermal limits.<br />⁠</>;
    const badMsg = <>CPU is overheating! Clock speeds reduced to stay within thermal limits. <br />
    Efficiency heavily penalized.</>;
    const status = throttle ? badMsg : safeMsg;

    const messageStyle = {
        ...styles.message,
        ...(throttle ? styles.messageThrottled : styles.messageSafe)
    };

    return (
        <div style={styles.container}>
            <style>{keyframes}</style>
            <div style={messageStyle} className={throttle ? "status-text-blink" : undefined}>
                {/* Execution Time */}
                <div style={styles.execution}>
                    Execution Time: <span style={styles.timeValue}>{executionTime.toFixed(1)}s</span>
                </div>

                {/* Status Message */}
                <div style={styles.textBody}>
                    {status}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        fontSize: '1.1rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 0'
    },
    message: {
        width: "100%",
        maxWidth: "600px",
        padding: "16px 24px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        border: "1px solid rgba(0, 0, 0, 0.4)",
        transition: "all 0.3s ease",
    },
    messageSafe: {
        background: "#16191b",
        color: "#3cd66a",
        textShadow: "0 0 6px rgba(60, 214, 106, 0.4)",
        boxShadow: "inset 0 3px 6px rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.05)",
    },
    messageThrottled: {
        background: "#2a0d0d",
        color: "#ff4d4d",
        textShadow: "0 0 8px rgba(255, 77, 77, 0.6)",
        boxShadow: "inset 0 3px 6px rgba(0,0,0,0.9), 0 0 15px rgba(214, 48, 48, 0.3)",
    },
    execution: {
        fontWeight: '800',
        fontSize: '1.25rem',
        marginBottom: "10px",
        letterSpacing: "0.5px"
    },
    timeValue: {
        color: "#ffffff",
        textShadow: "none"
    },
    textBody: {
        fontSize: "0.95rem",
        lineHeight: "1.4",
        opacity: 0.9
    }
};

const keyframes = `
@keyframes critical-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}
.status-text-blink {
    animation: critical-blink 1.5s ease-in-out infinite;
}
`;