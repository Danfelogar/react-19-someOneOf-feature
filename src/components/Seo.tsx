interface SeoProps {
  title: string;
  description: string;
}
//solo usar este tipo de componentes una vez para no andar creando títulos innecesarios ya que esto no reemplaza title sino que crea uno nuevo y lo mismo con la descripción
export const Seo = ({ description, title }: SeoProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};
