import ClientServerSim from './simulations/ClientServerSim';
import DHCPSim from './simulations/DHCPSim';
import DNSSim from './simulations/DNSSim';
import GitFlowSim from './simulations/GitFlowSim';
import HybridLayersSim from './simulations/HybridLayersSim';
import HybridWebRequestSim from './simulations/HybridWebRequestSim';
import ICMPSim from './simulations/ICMPSim';
import JavaArrayIterateSim from './simulations/JavaArrayIterateSim';
import JavaArrayMemorySim from './simulations/JavaArrayMemorySim';
import JavaCommandLineArgsSim from './simulations/JavaCommandLineArgsSim';
import JavaCompilationSim from './simulations/JavaCompilationSim';
import JavaCondFlowSim from './simulations/JavaCondFlowSim';
import JavaDeskcheckSim from './simulations/JavaDeskcheckSim';
import JavaForEachSim from './simulations/JavaForEachSim';
import JavaLoopSim from './simulations/JavaLoopSim';
import JavaMatrixSim from './simulations/JavaMatrixSim';
import JavaMemorySim from './simulations/JavaMemorySim';
import JavaMethodFlowSim from './simulations/JavaMethodFlowSim';
import JavaMethodSignatureSim from './simulations/JavaMethodSignatureSim';
import JavaOOPPillarsSim from './simulations/JavaOOPPillarsSim';
import JavaParamPassSim from './simulations/JavaParamPassSim';
import JavaReferenceSim from './simulations/JavaReferenceSim';
import JavaScopeSim from './simulations/JavaScopeSim';
import P2PSim from './simulations/P2PSim';
import ScrumBoardSim from './simulations/ScrumBoardSim';
import ScrumFlowSim from './simulations/ScrumFlowSim';
import SDLCSim from './simulations/SDLCSim';
import TCPHTTPSim from './simulations/TCPHTTPSim';

const simulationRegistry = {
    'client-server': { Component: ClientServerSim, duration: 4000 },
    p2p: { Component: P2PSim, duration: 4000 },
    dhcp: { Component: DHCPSim, duration: 8500 },
    icmp: { Component: ICMPSim, duration: 4000 },
    dns: { Component: DNSSim, duration: 4000 },
    'tcp-http': { Component: TCPHTTPSim, duration: 10000 },
    'hybrid-layers': { Component: HybridLayersSim, isAuto: true, isWide: true, duration: 7600 },
    'hybrid-web-request': { Component: HybridWebRequestSim, isWide: true, hasInternalControls: true },
    sdlc: { Component: SDLCSim, duration: 8500, isWide: true },
    'git-flow': { Component: GitFlowSim, duration: 7000, isWide: true },
    'scrum-flow': { Component: ScrumFlowSim, duration: 9000, isWide: true },
    'scrum-board': { Component: ScrumBoardSim, isAuto: true },
    'java-compile': { Component: JavaCompilationSim, isAuto: true, isWide: true },
    'java-memory': { Component: JavaMemorySim, isAuto: true, isWide: true },
    'java-references': { Component: JavaReferenceSim, isAuto: true, isWide: true },
    'java-cond-flow': { Component: JavaCondFlowSim, isAuto: true, isWide: true },
    'java-loop': { Component: JavaLoopSim, isAuto: true, isWide: true },
    'java-foreach': { Component: JavaForEachSim, isAuto: true, isWide: true },
    'java-array-memory': { Component: JavaArrayMemorySim, isAuto: true, isWide: true },
    'java-array-iterate': { Component: JavaArrayIterateSim, isAuto: true, isWide: true },
    'java-matrix': { Component: JavaMatrixSim, isAuto: true, isWide: true },
    'java-deskcheck': { Component: JavaDeskcheckSim, isAuto: true, isWide: true },
    'java-method-flow': { Component: JavaMethodFlowSim, isAuto: true, isWide: true },
    'java-method-signature': { Component: JavaMethodSignatureSim, isAuto: true, isWide: true },
    'java-oop-pillars': { Component: JavaOOPPillarsSim, isAuto: true, isWide: true, duration: 7600 },
    'java-scope': { Component: JavaScopeSim, isAuto: true, isWide: true },
    'java-param-pass': { Component: JavaParamPassSim, isAuto: true, isWide: true },
    'java-command-line': { Component: JavaCommandLineArgsSim, isAuto: true, isWide: true },
};

export function getSimulationConfig(type) {
    return simulationRegistry[type] ?? simulationRegistry['client-server'];
}
