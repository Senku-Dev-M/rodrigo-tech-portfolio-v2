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
import QABoundaryValuesSim from './simulations/QABoundaryValuesSim';
import QABugTriageSim from './simulations/QABugTriageSim';
import QAEquivalenceSim from './simulations/QAEquivalenceSim';
import QAFaultToleranceSim from './simulations/QAFaultToleranceSim';
import QAPairwiseSim from './simulations/QAPairwiseSim';
import QARiskMatrixSim from './simulations/QARiskMatrixSim';
import QASessionCharterSim from './simulations/QASessionCharterSim';
import QATourBasedSim from './simulations/QATourBasedSim';

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
    'qa-tour-based': {
        Component: QATourBasedSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en una card para revisar el estado que quieras, las veces que necesites.',
    },
    'qa-session-charter': {
        Component: QASessionCharterSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en una card para revisar el estado que quieras, las veces que necesites.',
    },
    'qa-risk-matrix': {
        Component: QARiskMatrixSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en una card para revisar el estado que quieras, las veces que necesites.',
    },
    'qa-fault-tolerance': {
        Component: QAFaultToleranceSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en una etapa para revisar el flujo y volver a cualquier estado sin autoplay.',
    },
    'qa-equivalence': {
        Component: QAEquivalenceSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en una partición para revisar su ejemplo y el comportamiento esperado.',
    },
    'qa-boundary-values': {
        Component: QABoundaryValuesSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en cada valor para comparar bordes y adyacencias a tu ritmo.',
    },
    'qa-pairwise': {
        Component: QAPairwiseSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en un caso para ver qué cobertura aporta sin ejecutar una rotación automática.',
    },
    'qa-bug-triage': {
        Component: QABugTriageSim,
        isWide: true,
        hasInternalControls: true,
        hintKey: 'sim.manualSelectionHint',
        hintText: 'Haz clic en cada fase para revisar el flujo operativo del bug cuando lo necesites.',
    },
};

export function getSimulationConfig(type) {
    return simulationRegistry[type] ?? simulationRegistry['client-server'];
}
