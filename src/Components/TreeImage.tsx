import React from "react";
import { Image } from "react-konva";

interface ImageProps {
  src: string;
}
interface ImageState {
  image?: HTMLImageElement;
}

class TreeImage extends React.Component<ImageProps, ImageState> {
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
  };

  render() {
    return <Image image={this.state?.image} />;
  }
}

export default TreeImage;
