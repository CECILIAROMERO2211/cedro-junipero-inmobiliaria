export const FeatureBlock = ({ feature }) => {
  const { title, text, image, isSolid } = feature;

  const blockStyle = isSolid 
    ? {} 
    : { backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})` };

  return (
    <div className={`feature-block ${isSolid ? 'solid-bg' : 'image-bg'}`} style={blockStyle}>
      <div className="feature-content">
        <h4 className="feature-title">{title}</h4>
        <p className="feature-text">{text}</p>
      </div>
    </div>
  );
};