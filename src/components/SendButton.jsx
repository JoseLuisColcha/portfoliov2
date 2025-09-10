export const SendButton = () => {
  return (
    <button
      className="noutched-btn py-[14px] active:scale-90 transition-all"
      style={{
        clipPath: 'polygon(0 0, 95% 0, 100% 35%, 100% 100%, 5% 100%, 0% 65%)',
      }}
    >
      ENVIAR MENSAJE
    </button>
  )
}
