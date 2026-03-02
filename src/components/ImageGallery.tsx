import { Plus, X } from "lucide-react";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  previews: string[];
  selectedIndex: number;
  imageNames: string[];
  onSelectImage: (index: number) => void;
  onAddImages: () => void;
  onRemoveImage: (index: number) => void;
}

export function ImageGallery({
  previews,
  selectedIndex,
  imageNames,
  onSelectImage,
  onAddImages,
  onRemoveImage,
}: ImageGalleryProps) {
  return (
    <div className={styles.gallery}>
      <div className={styles.label}>Fotos do produto</div>

      <div className={styles.previewContainer}>
        {previews.length > 0 ? (
          <>
            <img
              src={previews[selectedIndex]}
              alt={`Preview ${selectedIndex + 1}`}
              className={styles.mainImage}
            />
            <button
              className={styles.removeBtn}
              onClick={() => onRemoveImage(selectedIndex)}
              type="button"
              title="Remover imagem"
              aria-label="Remover imagem"
            >
              <X size={20} />
            </button>
          </>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📷</div>
            <div className={styles.emptyText}>Nenhuma imagem</div>
            <button
              className={styles.emptyAddBtn}
              onClick={onAddImages}
              type="button"
            >
              <Plus size={20} />
              Adicionar
            </button>
          </div>
        )}
      </div>

      <div className={styles.thumbnailsContainer}>
        <div className={styles.thumbnails}>
          {previews.map((preview, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${
                selectedIndex === index ? styles.thumbnailActive : ""
              }`}
              onClick={() => onSelectImage(index)}
              type="button"
              title={imageNames[index] || `Imagem ${index + 1}`}
              aria-label={`Selecionar imagem ${index + 1}`}
            >
              <img src={preview} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}

          <button
            className={styles.addThumbnail}
            onClick={onAddImages}
            type="button"
            title="Adicionar imagem"
            aria-label="Adicionar imagem"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <p className={styles.tip}>
        Dica: use imagens com boa resolução para identificar o produto.
      </p>
    </div>
  );
}
