
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl transition-all border-b-4 border-slate-300 active:translate-y-1 active:border-b-0 z-[110]"
      >
        <X size={24} />
      </button>

      <div className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center group">
        {images.length > 1 && (
          <>
            <button 
              onClick={onPrev}
              className="absolute left-4 p-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl transition-all border-b-4 border-slate-300 active:translate-y-1 active:border-b-0 z-[110] md:-left-16 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={onNext}
              className="absolute right-4 p-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl transition-all border-b-4 border-slate-300 active:translate-y-1 active:border-b-0 z-[110] md:-right-16 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={32} />
            </button>
          </>
        )}

        <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl overflow-hidden border-2 border-slate-200">
          <img 
            src={images[currentIndex]} 
            alt="Preview" 
            className="max-w-full max-h-[75vh] object-contain rounded-[1.5rem]"
          />
          
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-100/80 text-slate-800 text-xs font-black uppercase tracking-widest rounded-full backdrop-blur-sm border border-slate-200">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};

export default ImageModal;
