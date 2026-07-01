import CpuContainer from '../components/CpuContainer';
import CpuStatus from '../components/CpuStatus';
import ControlPanel from './ControlPanel';
import StatusTable from './StatusTable';
import { useState } from "react";

/*
workload = 5000 (fixed task units constant)
basePower = cores × clock² × 1.5 + cores × 5
throttling = basePower > TDP
effectiveClock = throttling ? clock × √(TDP / basePower) : clock
actualPower = throttling ? TDP : basePower
efficiency = throttling ? TDP / basePower : 1.0
execTime = workload / (cores × effectiveClock × efficiency)
energyScore = actualPower × execTime
*/

export default function InteractiveCpu() {
    // Reactive states
    const [cores, setCores] = useState(5);
    const [clock, setClock] = useState(4.1);
    const [tdp, setTdp] = useState(65);
    
    // Computed vals
    const WORKLOAD = 5000;
    const basePower = cores * clock**2 * 1.5 + cores * 5;
    const throttle = basePower > tdp;
    const effectiveClock = throttle ? clock * Math.sqrt(basePower) : clock
    const actualPower = throttle ? tdp : basePower;
    const effeciency = throttle ? tdp / basePower : 1.0;
    const execTime = WORKLOAD / (cores * effectiveClock * effeciency);
    const energyScore = actualPower * execTime;


    const handlePanelChange = ({ cores, clock, tdp }) => {
        setCores(cores);
        setClock(clock);
        setTdp(tdp);
    };

    return <div style={styles.container}>
        {/* Main cores */}
        <CpuContainer 
            activeCount={cores} 
            throttle={throttle} 
            power={actualPower}
            effeciency={Math.round(effeciency * 100)}
            executionTime = {execTime}
        />

        {/* Status of cpu */}
        <CpuStatus 
            throttle={throttle}
            executionTime = {execTime}
        />

        {/* Table of extra values */}
        <StatusTable
            throttle={throttle} 
            effectiveClock={Math.round(effectiveClock)}
            energyScore={Math.round(energyScore)}
        />

        {/* Control Panel */}
        <ControlPanel
            defaultCores={cores}
            defaultClock={clock}
            defaultTdp={tdp}
            onChange={handlePanelChange}
        />
    </div>
}

const styles = {
    container: {
        minWidth: "700px",
    }
}