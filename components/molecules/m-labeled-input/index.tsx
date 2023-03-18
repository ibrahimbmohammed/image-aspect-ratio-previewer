import Input, { InputProp } from '@atoms/a-input';
import Label, { LabelProps } from '@atoms/a-input-label';

interface LabelClassName {
    labelClassName?: string;
    labelTextClassName?: string;
}
type LabelInputProps<T> = InputProp<T> & LabelProps & LabelClassName;

const LabeledInput = <T,>({
    id,
    name,
    type,
    placeholder,
    htmlFor,
    label,
    error,
    className,
    required,
    value,
    min,
    max,
    accept,
    labelClassName,
    labelTextClassName,
    disabled,
    register,
    handleChange,
}: LabelInputProps<T>) => {
    return (
        <div className={labelClassName}>
            <Label htmlFor={htmlFor} label={label} className={`${labelTextClassName} capitalize`} />
            <Input
                id={id}
                min={min}
                max={max}
                type={type}
                name={name}
                placeholder={placeholder}
                className={className}
                required={required}
                value={value}
                error={error}
                disabled={disabled}
                register={register}
                handleChange={handleChange}
                accept={accept}
            />
        </div>
    );
};

export default LabeledInput;
