import React from 'react';

// SyntheticEvent<T>

export const Click: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked:', event.type);
  };

  return <button onClick={handleClick}>Click me</button>;
};

// SyntheticAnimationEvent<T>

export const AnimationStart: React.FC = () => {
  const handleAnimationStart = (event: React.AnimationEvent<HTMLDivElement>) => {
    console.log('Animation started:', event.animationName);
  };

  return <div onAnimationStart={handleAnimationStart}>Animate me</div>;
};

// SyntheticCompositionEvent<T>

export const CompositionEnd: React.FC = () => {
    const handleCompositionEnd = (event: React.CompositionEvent<HTMLInputElement>) => {
      console.log('Composition ended:', event.data);
    };
  
    return <input type="text" onCompositionEnd={handleCompositionEnd} />;
};

// SyntheticInputEvent<T>

export const Change: React.FC = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Input changed:', event.target.value);
    };
  
    return <input type="text" onChange={handleChange} />;
  };

// SyntheticUIEvent<T>
  
export const Scroll: React.FC = () => {
    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
      console.log('Scrolled:', event.currentTarget.scrollTop);
    };
  
    return <div onScroll={handleScroll}>Scroll me</div>;
};

// SyntheticFocusEvent<T>

export const Focus: React.FC = () => {
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      console.log('Focused:', event.target.id);
    };
  
    return <input id="myInput" onFocus={handleFocus} />;
  };

// SyntheticKeyboardEvent<T>
  
export const KeyDown: React.FC = () => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      console.log('Key pressed:', event.key);
    };
  
    return <input onKeyDown={handleKeyDown} />;
};

// SyntheticMouseEvent<T>

export const MouseDown: React.FC = () => {
    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log('Mouse down:', event.button);
    };
  
    return <button onMouseDown={handleMouseDown}>Press me</button>;
};

// SyntheticDragEvent<T>

export const DragStart: React.FC = () => {
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
      console.log('Drag started:', event.dataTransfer.getData('text'));
    };
  
    return <div draggable onDragStart={handleDragStart}>Drag me</div>;
};

// SyntheticWheelEvent<T>

export const Wheel: React.FC = () => {
    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
      console.log('Wheel scrolled:', event.deltaY);
    };
  
    return <div onWheel={handleWheel}>Scroll wheel over me</div>;
};

// SyntheticTouchEvent<T>

export const Touch: React.FC = () => {
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      console.log('Touch start:', event.touches.length);
    };
  
    return <div onTouchStart={handleTouchStart}>Touch me</div>;
};

// SyntheticTransitionEvent<T>

export const Transition: React.FC = () => {
    const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
      console.log('Transition ended:', event.propertyName);
    };
  
    return <div style={{ transition: 'all 0.5s' }} onTransitionEnd={handleTransitionEnd}>Fade out</div>;
  };
