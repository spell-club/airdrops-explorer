import { useEffect, useRef, useState } from 'react'

const useDebouncedValue = <T>(value: T, delay?: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

		return () => {
			clearTimeout(timer)
		}
	}, [value, delay])

	return debouncedValue
}

const useDebouncedCallback = <A extends unknown[]>(
	callback: (...args: A) => void,
	wait: number,
): ((...args: A) => void) => {
	const argsRef = useRef<A>()
	const timeout = useRef<ReturnType<typeof setTimeout>>()

	const cleanup = () => {
		if (timeout.current) {
			clearTimeout(timeout.current)
		}
	}

	useEffect(() => cleanup, [])

	const debouncedCallback = (...args: A) => {
		argsRef.current = args

		cleanup()

		timeout.current = setTimeout(() => {
			if (argsRef.current) {
				callback(...argsRef.current)
			}
		}, wait)
	}

	return debouncedCallback
}

export { useDebouncedValue, useDebouncedCallback }
