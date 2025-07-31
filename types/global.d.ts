// types/global.d.ts

interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
    SpeechGrammarList: typeof SpeechGrammarList;
    webkitSpeechGrammarList: typeof SpeechGrammarList;
    SpeechRecognitionEvent: typeof SpeechRecognitionEvent;
    webkitSpeechRecognitionEvent: typeof SpeechRecognitionEvent;
    SpeechSynthesisUtterance: typeof SpeechSynthesisUtterance;
    speechSynthesis: SpeechSynthesis;
}

// Bu interface-lər mövcud olmaya bilər, buna görə də onları təyin edirik
interface SpeechRecognition extends EventTarget {
    grammars: SpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;

    onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;

    start(): void;
    stop(): void;
    abort(): void;
}

interface SpeechRecognitionStatic {
    new (): SpeechRecognition;
}

declare var SpeechRecognition: SpeechRecognitionStatic;
declare var webkitSpeechRecognition: SpeechRecognitionStatic;

interface SpeechGrammarList extends EventTarget {
    length: number;
    addFromString(string: string, weight?: number): void;
    addFromURI(src: string, weight?: number): void;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
}

interface SpeechGrammar {
    src: string;
    weight: number;
}

interface SpeechGrammarListStatic {
    new (): SpeechGrammarList;
}

declare var SpeechGrammarList: SpeechGrammarListStatic;
declare var webkitSpeechGrammarList: SpeechGrammarListStatic;

interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
    readonly interpretation: any; // Type for the interpretation property
    readonly emma: Document;     // Type for the emma property
}

interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
}

interface SpeechRecognitionEventStatic {
    new (): SpeechRecognitionEvent;
}

declare var SpeechRecognitionEvent: SpeechRecognitionEventStatic;
declare var webkitSpeechRecognitionEvent: SpeechRecognitionEventStatic;


// SpeechSynthesisUtterance üçün də tiplər
interface SpeechSynthesisUtterance extends EventTarget {
    text: string;
    lang: string;
    volume: number;
    rate: number;
    pitch: number;
    voice: SpeechSynthesisVoice;
    onerror: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisErrorEvent) => any;
    onend: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any;
}

interface SpeechSynthesisUtteranceStatic {
    new (): SpeechSynthesisUtterance;
}

declare var SpeechSynthesisUtterance: SpeechSynthesisUtteranceStatic;