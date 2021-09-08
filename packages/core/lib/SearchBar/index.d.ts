interface SearchBarProps {
    onChangeText?: (value: string) => void;
    options?: Array<OptionsState>;
    onChange?: (value: string) => void;
    onFocus?: (e: any | string) => void;
    labelInValue?: Boolean;
    disabled?: Boolean;
    value?: String;
    loading?: Boolean;
    placeholder?: String;
    extra?: JSX.Element;
}
interface OptionsState {
    label: string;
    value: string | number;
}
export default function SearchBar({ onChangeText, options, onChange, labelInValue, disabled, value, onFocus, loading, placeholder, extra, }: SearchBarProps): JSX.Element;
export {};
