import style from './Loading.module.css';

export default function Loading({text = "Carregando..."}) {
    return (
        <>
            <div className={style.container}>
                <div>
                    <h1 className={style.simpleTitle}>{text}</h1>
                    <div className={style.lds_roller}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}