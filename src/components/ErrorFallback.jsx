
/**
 * 
 * @param {import('react-error-boundary').FallbackProps} 
 * @returns 
 */
export default function ErrorFallback () {
  return <div><pre>Oops! Something went wrong....</pre>
    <button type="button">Retry</button>
    <button type="button">Refresh</button>
  </div>
}