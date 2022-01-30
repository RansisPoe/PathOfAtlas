import React from "react";
import { Stage, Layer, Image, Circle } from "react-konva";

class ColoredCircle extends React.Component {
  state = {
    toggled: false,
  };
  handleClick = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  };
  render() {
    return (
      <Circle
        x={1981}
        y={2987}
        width={30}
        height={30}
        fill={this.state.toggled ? "green" : "red"}
        shadowBlur={5}
        onClick={this.handleClick}
        onMouseEnter={(e: any) => {
          // style stage container:
          const container = e.target.getStage().container();
          container.style.cursor = "pointer";
        }}
        onMouseLeave={(e: any) => {
          const container = e.target.getStage().container();
          container.style.cursor = "default";
        }}
      />
    );
  }
}

interface ImageProps {
  src: string;
}
interface ImageState {
  image?: HTMLImageElement;
}

const dragmove = (pos: any) => {
  return {
    x: Math.max(Math.min(pos.x, 0), -3956 + window.innerWidth),
    y: Math.max(Math.min(pos.y, 0), -3654 + window.innerHeight),
  };
};

class LionImage extends React.Component<ImageProps, ImageState> {
  image?: HTMLImageElement;

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(oldProps: ImageProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    if (this.image) {
      this.image.removeEventListener("load", this.handleLoad);
    }
  }
  loadImage() {
    if (this.image) {
      this.image.removeEventListener("load", this.handleLoad);
    }
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener("load", this.handleLoad);
  }

  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image,
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };

  render() {
    return <Image image={this.state?.image} />;
  }
}

export default function CanvasExample() {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer draggable x={-1200} y={-2100} dragBoundFunc={dragmove}>
        <LionImage src="./tree.png" />
        <ColoredCircle></ColoredCircle>
      </Layer>
    </Stage>
  );
}
