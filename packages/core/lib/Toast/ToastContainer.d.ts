import { Component } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { IconsName } from '../Icon';
export interface ToastProps {
    type: 'info' | 'success' | 'warning' | 'error';
    content: string;
    duration?: number;
    showIcon?: boolean;
    icon?: IconsName;
    onClose?: () => void;
    onAnimationEnd?: () => void;
    style?: StyleProp<ViewStyle>;
}
export default class ToastContainer extends Component<ToastProps, any> {
    static defaultProps: {
        duration: number;
        type: string;
    };
    anim: Animated.CompositeAnimation | null | undefined;
    constructor(props: ToastProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderIcon: () => {
        icon: "link" | "search" | "menu" | "left" | "right" | "map" | "picture" | "table" | "time" | "filter" | "stop" | "warning" | "loading" | "adobe" | "alipay" | "aliwangwang" | "android-o" | "android" | "apple" | "appstore-o" | "appstore" | "area-chart" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "arrows-alt" | "asterisk" | "backward" | "baidu" | "bar-chart" | "barcode" | "bell" | "camera-o" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "check-square-o" | "check-square" | "check" | "chrome" | "circle-check-o" | "circle-check" | "circle-close-o" | "circle-close" | "circle-o" | "close-square-o" | "close-square" | "close" | "cloud-download-o" | "cloud-download" | "cloud-upload-o" | "cloud-upload" | "coffee" | "component" | "copy" | "copyright" | "css3" | "cut" | "d-arrow-left" | "d-arrow-right" | "d-caret" | "dashboard" | "date" | "delete" | "dingding" | "dislike-o" | "document" | "dot-chart" | "down-circle-o" | "down-circle" | "down-square-o" | "down-square" | "down" | "download" | "edit" | "enter" | "environment-o" | "environment" | "eye-o" | "eye" | "facebook" | "file-add" | "file-excel" | "file-jpg" | "file-pdf" | "file-text" | "file-unknown" | "firefox" | "folder-add" | "folder-open" | "folder" | "forward" | "foursquare" | "frown-o" | "frown" | "github-o" | "github" | "global" | "heart-off" | "heart-on" | "home" | "html5" | "ie" | "inbox" | "information-o" | "information" | "laptop" | "left-circle-o" | "left-circle" | "left-square-o" | "left-square" | "like-o" | "linkedin" | "linux" | "lock" | "login" | "logout" | "mail-o" | "mail" | "man" | "meh-o" | "meh" | "menu-fold" | "menu-unfold" | "message" | "minus-circle-o" | "minus-circle" | "minus-square-o" | "minus-square" | "minus" | "mobile" | "more" | "notification" | "opera" | "paper-clip" | "pause-circle-o" | "pause-circle" | "pause" | "pay-circle-o" | "pay" | "picasa" | "pie-chart" | "pinterest" | "play-circle-o" | "play-circle" | "plus-circle-o" | "plus-circle" | "plus-square-o" | "plus-square" | "plus" | "poweroff" | "printer" | "qq" | "qrcode" | "question-circle-o" | "question-circle" | "reddit" | "reload" | "right-circle-o" | "right-circle" | "right-square-o" | "right-square" | "rollback" | "safari" | "safety" | "save" | "setting-o" | "setting" | "share" | "shopping-cart" | "shrink" | "smile-o" | "smile" | "square-o" | "star-off" | "star-on" | "stop-o" | "swap-left" | "swap-right" | "swap" | "tag-o" | "tag" | "tags-o" | "tags" | "taobao" | "time-o" | "twitter" | "uiw" | "unlock" | "up-circle-o" | "up-circle" | "up-square-o" | "up-square" | "up" | "upload" | "user-add" | "user-delete" | "user" | "usergroup-add" | "usergroup-delete" | "verification" | "verticle-left" | "verticle-right" | "video-camera" | "warning-o" | "weibo" | "weixin" | "wifi" | "windows" | "woman" | "zoom-in" | "zoom-out" | undefined;
        color: string;
    };
    render(): JSX.Element;
}
