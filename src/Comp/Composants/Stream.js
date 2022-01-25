import { useState, useEffect } from "react";
import useInterval from '@use-it/interval';

function Stream(props) {

    const valid = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!|{}[]^~`;

    const minr = 5;
    const maxr = 15;
    const muta = 0.02;
    const MIN_INTERVAL_DELAY = 50;
    const MAX_INTERVAL_DELAY = 100;
    const MIN_DELAY_BETWEEN_STREAMS = 0;
    const MAX_DELAY_BETWEEN_STREAMS = 8000;

    const range = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const char = () => valid.charAt(Math.floor(Math.random() * valid.length));

    const randomStream = () =>
        new Array(range(minr, maxr))
            .fill()
            .map(_ => char());

    const mutation = stream => {
        const newStream = [];
        for (let i = 1; i < stream.length; i++) {
            if (Math.random() < muta) {
                newStream.push(char());
            } else {
                newStream.push(stream[i]);
            }
        }
        newStream.push(char());
        return newStream;
    };

    useEffect(() => {
        setTimeout(() => {
            setIntervalDelay(range(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
        }, range(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
    }, []);

    useInterval(() => {
        if (!props.height) return;

        if (!intervalDelay) return;

        if (topPadding > window.innerHeight) {
            setTopPadding(0)
        } else {
            setTopPadding(topPadding + 44)
            setStream(mutation)
        }
    }, 100)

    const [intervalDelay, setIntervalDelay] = useState(null);
    const [stream, setStream] = useState(randomStream())
    const [topPadding, setTopPadding] = useState(stream.length * -50)

    return (
        <div style={{
            marginTop: topPadding,
            color: '#61dbfb',
            writingMode: "vertical-rl",
            textOrientation: 'upright',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            textShadow: '0px 0px 2px rgba(32, 194, 14, 0.8)',
            fontSize: 50,
        }}>
            {stream.map((char, index) => (
                <a
                    style={{
                        opacity: index < 6 ? 0.1 + index * 0.15 : 1,
                        color: index === stream.length - 1 ? '#111' : undefined,
                        marginTop: -12,
                        fontFamily: 'matrix',
                        textShadow:
                            index === stream.length - 1
                                ? '0px 0px 20px rgba(17, 17, 17, 0.253)'
                                : undefined,
                    }}
                    href="#pouet"
                >{char}</a>
            ))}
        </div>
    )
}

export { Stream as default }