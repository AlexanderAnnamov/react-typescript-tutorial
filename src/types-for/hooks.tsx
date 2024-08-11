import React, {useEffect, useRef, useState} from 'react'

type User = {
    name: string;
    lastName: string;
}

const hooks = () => {
    const [user, setUser] = useState<User>({} as User)
    // const [user, setUser] = useState<User | null>(null)

    const refInput = useRef<HTMLInputElement>(null!)
    // const refInput = useRef<HTMLInputElement>(null)

    const [timer, setTimer] = useState(0)
    const intervalValue = useRef<number | null>(null)

    const stopTimer = () => {
        if (intervalValue.current) window.clearInterval(intervalValue.current)
    }

    useEffect(() => {
        intervalValue.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => stopTimer()
    }, [])

    useEffect(() => {
        refInput.current.focus()
    }, [])

    // useEffect(() => {
    //     refInput.current?.focus()
    // }, [])

  return (
    <div>
        timer - {timer}
        <button onClick={stopTimer}>Стоп</button>
        <input ref={refInput}/>
        {user.name}
        {/* {user?.name} */}
    </div>
  )
}

export default hooks