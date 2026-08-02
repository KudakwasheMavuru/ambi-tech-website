const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.52128703852!2d30.129958800000004!3d-1.9443101999999963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca716a61de41b%3A0xabbb518f4e0018bb!2s34%20KG%206%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1785508116643!5m2!1sen!2srw";

export function GoogleMap() {
  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-teal-mid/15">
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="AMBI Tech office location"
      />
    </div>
  );
}
