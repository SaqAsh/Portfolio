import Input from "./Input";
import Output from "./Output";

export type CommandProps = {
    command: string;
    output: string;
    onSubmit: () => void;
};
/**
 * Command component that combines Input and Output components.
 * @param {Object} props
 * @param {string} [props.command]
 * @param {string} [props.output]
 * @param {Function} [props.onSubmit]
 * @returns {JSX.Element}
 */
export default function Command({ command, output, onSubmit }: CommandProps) {
    return (
        <div>
            <Input
                command={command}
                onSubmit={(command: any) => onSubmit(command)}
            />
            {output && <Output output={output} />}
        </div>
    );
}
