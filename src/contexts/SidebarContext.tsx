import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface SidebarContextType {
  sidebar: boolean
  toggleSidebar: Dispatch<SetStateAction<boolean>>
}

export const SidebarContext = createContext<SidebarContextType>({
  sidebar: false,
  toggleSidebar: () => {},
})

export const useSidebar = () => useContext<SidebarContextType>(SidebarContext)

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = useCallback(setSidebar, [setSidebar])

  const value = useMemo<SidebarContextType>(
    () => ({
      sidebar: sidebar,
      toggleSidebar: toggleSidebar,
    }),
    [sidebar, toggleSidebar],
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}
