export default function FooterMap() {
  return (
    <div className="relative h-[350px] w-full overflow-hidden rounded-[40px]">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac5fec5f9301e195597d07d92d06b9f7b6ccc4029fc35d90320b9ce2ca98fca94&source=constructor"
        width="100%"
        height="427"
        frameBorder="0"
        className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-50"
        title="Карта планетария"
      ></iframe>
    </div>
  );
}