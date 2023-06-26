export function HomePage({loggedIn}) {
  return (
    <div>
      <p>Welcome. {!loggedIn?'Navigate over the menu to continue.':'Please, log in to continue.'}</p>
    </div>
  )
}
