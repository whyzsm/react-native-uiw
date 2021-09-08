import { MaskLayerProps } from '../MaskLayer';
export interface ModalProps extends MaskLayerProps {
    placement?: 'top' | 'right' | 'bottom' | 'left';
    onClosed?: () => void;
}
declare const _default: (props?: ModalProps) => JSX.Element;
export default _default;
