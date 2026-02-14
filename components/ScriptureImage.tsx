import Image from 'next/image';

interface ScriptureImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ScriptureImage = ({ src, alt = '', width = 1200, height = 800, className = '' }: ScriptureImageProps) => {
  return (
    <div className={`my-8 rounded-sm overflow-hidden border border-gold/20 shadow-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
    </div>
  );
};

export default ScriptureImage;