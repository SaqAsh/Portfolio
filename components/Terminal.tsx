"use client";

import { useRef, useState } from "react";
import { CONTENTS } from "../utils/commandHelper";
import Command from "./Command";
import styles from "./Terminal.module.css";

export type CommandsStateType = {
    command: string;
    output: string;
};

/**
 * Terminal component that provides an interactive command-line interface.
 * @returns {JSX.Element}
 */
export default function Terminal() {
    const [commands, setCommands] = useState<CommandsStateType[]>([]);
    const [loading, setLoading] = useState(false);
    const terminalRef = useRef(null);

    const escapeHTML = (str: string) =>
        str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    const addCommand = async (command: string) => {
        command = command.trim().toLowerCase();
        let output;
        setLoading(true);
        setCommands([...commands, { command, output: "Loading..." }]);

        if (`${command}` in CONTENTS) {
            output = await CONTENTS[`${command}`]();
        } else if (command === "clear") {
            setLoading(false);
            return setCommands([]);
        } else {
            output = CONTENTS.error(escapeHTML(command));
        }

        setLoading(false);
        setCommands([
            ...commands.slice(0, commands.length),
            { command, output },
        ]);

        if (terminalRef) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    return (
        <div className={styles.terminal} ref={terminalRef}>
            {commands.map(({ command, output }, index) => (
                <Command command={command} output={output} key={index} />
            ))}
            {!loading && (
                <Command onSubmit={(command) => addCommand(command)} />
            )}
        </div>
    );
}
