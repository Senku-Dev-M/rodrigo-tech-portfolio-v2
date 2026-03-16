import { useReducer, useEffect, useCallback, useRef, useMemo } from 'react';
import profileImg from '../../assets/profile.jpg';
import { reducer } from './reducer';
import { WhatsappSVG, CloseSVG, CheckSVG, SendSVG } from './Icons';
import css from './styles.module.css';

export default function WhatsAppButton({
    onClick,
    onSubmit,
    onClose,
    onNotification,
    onLoopDone,
    phoneNumber = '59176234058',
    accountName = 'Rodrigo Machaca',
    avatar = profileImg,
    statusMessage = 'Normalmente responde en menos de 1 hora',
    chatMessage = 'Hola. Gracias por visitar mi portfolio.\nComo puedo ayudarte?',
    placeholder = 'Escribe un mensaje...',
    allowClickAway = true,
    allowEsc = true,
    notification = false,
    notificationDelay = 60,
    notificationLoop = 1,
    notificationSound = false,
    notificationSoundSrc,
    notificationStyle,
    notificationClassName = '',
    buttonStyle,
    buttonClassName = '',
    chatboxHeight = 370,
    chatboxStyle,
    chatboxClassName = '',
    darkMode = false,
    style,
    className = '',
}) {
    const [{ isOpen, isDelay, isNotification }, dispatch] = useReducer(reducer, {
        isOpen: false,
        isDelay: true,
        isNotification: false,
    });

    const timeNow = useMemo(
        () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        []
    );

    const inputRef = useRef(null);
    const soundRef = useRef(null);
    const loops = useRef(0);
    const notificationInterval = useRef(0);
    const typingTimeout = useRef(0);

    const handleNotification = useCallback(() => {
        if (!notification) {
            return;
        }

        dispatch({ type: 'notification' });

        if (onNotification) {
            onNotification();
        }

        if (notificationLoop > 0) {
            loops.current += 1;

            if (notificationSound && soundRef.current) {
                soundRef.current.currentTime = 0;
                soundRef.current.play().catch(() => {});
            }

            if (loops.current >= notificationLoop) {
                window.clearInterval(notificationInterval.current);

                if (onLoopDone) {
                    onLoopDone();
                }
            }
        }
    }, [notification, notificationLoop, notificationSound, onNotification, onLoopDone]);

    useEffect(() => {
        if (!notification) {
            return undefined;
        }

        const delayInMs = notificationDelay * 1000;

        notificationInterval.current = window.setInterval(handleNotification, delayInMs);

        return () => window.clearInterval(notificationInterval.current);
    }, [handleNotification, notification, notificationDelay]);

    const handleOpen = useCallback(
        (event) => {
            event.stopPropagation();

            if (isOpen) {
                return;
            }

            window.clearInterval(notificationInterval.current);
            window.clearTimeout(typingTimeout.current);
            dispatch({ type: 'open' });
            typingTimeout.current = window.setTimeout(() => dispatch({ type: 'delay' }), 1400);

            if (onClick) {
                onClick(event);
            }
        },
        [isOpen, onClick]
    );

    const handleClose = useCallback(() => {
        window.clearTimeout(typingTimeout.current);
        dispatch({ type: 'close' });

        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const rawValue = inputRef.current?.value?.trim();
        if (!rawValue) {
            return;
        }

        const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(rawValue)}`;
        window.open(url, '_blank', 'noopener,noreferrer');

        if (onSubmit) {
            onSubmit(event, rawValue);
        }

        inputRef.current.value = '';
    };

    useEffect(() => {
        const onClickOutside = () => {
            if (!allowClickAway || !isOpen) {
                return;
            }

            handleClose();
        };

        document.addEventListener('click', onClickOutside, false);
        return () => document.removeEventListener('click', onClickOutside);
    }, [allowClickAway, isOpen, handleClose]);

    useEffect(() => {
        const onEscKey = (event) => {
            if (!allowEsc || !isOpen) {
                return;
            }

            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', onEscKey, false);
        return () => document.removeEventListener('keydown', onEscKey);
    }, [allowEsc, isOpen, handleClose]);

    useEffect(() => () => {
        window.clearInterval(notificationInterval.current);
        window.clearTimeout(typingTimeout.current);
    }, []);

    return (
        <div
            className={[css.floatingWhatsapp, darkMode ? css.dark : '', className].filter(Boolean).join(' ')}
            style={style}
        >
            <button
                type="button"
                className={[css.whatsappButton, buttonClassName].filter(Boolean).join(' ')}
                onClick={handleOpen}
                style={buttonStyle}
                title="Contactar por WhatsApp"
                aria-label="Contactar por WhatsApp"
            >
                <WhatsappSVG />
                {isNotification && (
                    <span
                        className={[css.notificationIndicator, notificationClassName].filter(Boolean).join(' ')}
                        style={notificationStyle}
                    >
                        1
                    </span>
                )}
            </button>

            <div
                className={[
                    css.whatsappChatBox,
                    isOpen ? css.chatboxOpen : css.chatboxClosed,
                    chatboxClassName,
                ]
                    .filter(Boolean)
                    .join(' ')}
                onClick={(event) => event.stopPropagation()}
                style={{ height: isOpen ? chatboxHeight : 0, ...chatboxStyle }}
            >
                <header className={css.chatHeader}>
                    <div className={css.avatar}>
                        <img src={avatar} width="60" height="60" alt={accountName} />
                    </div>

                    <div className={css.status}>
                        <span className={css.statusTitle}>{accountName}</span>
                        <span className={css.statusSubtitle}>{statusMessage}</span>
                    </div>

                    <button type="button" className={css.closeButton} onClick={handleClose} aria-label="Cerrar chat">
                        <CloseSVG />
                    </button>
                </header>

                <div className={css.chatBody}>
                    {isDelay ? (
                        <div className={css.chatBubble}>
                            <div className={css.typing}>
                                <div className={css.dot} />
                                <div className={css.dot} />
                                <div className={css.dot} />
                            </div>
                        </div>
                    ) : (
                        <div className={css.message}>
                            <span className={css.triangle} />
                            <span className={css.accountName}>{accountName}</span>
                            <p className={css.messageBody}>{chatMessage}</p>
                            <span className={css.messageTime}>
                                {timeNow}
                                <span style={{ marginLeft: 4 }}>
                                    <CheckSVG />
                                </span>
                            </span>
                        </div>
                    )}
                </div>

                <footer className={css.chatFooter}>
                    <form onSubmit={handleSubmit}>
                        <input className={css.input} placeholder={placeholder} ref={inputRef} dir="auto" />
                        <button type="submit" className={css.buttonSend} aria-label="Enviar mensaje">
                            <SendSVG />
                        </button>
                    </form>
                </footer>
            </div>

            {notificationSound && notificationSoundSrc && <audio ref={soundRef} hidden src={notificationSoundSrc} />}
        </div>
    );
}
