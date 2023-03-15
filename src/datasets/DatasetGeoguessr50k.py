from pathlib import Path
from typing import List, Tuple, TypedDict

import torch
import torchvision.transforms as tf
from jaxtyping import Float, Int
from omegaconf import DictConfig
from PIL import Image
from torch import Tensor
from torch.utils.data import Dataset


class ExampleDatasetGeoguessr50k(TypedDict):
    label: Int[Tensor, ""]
    image: Float[Tensor, "3 height width"]


class DatasetGeoguessr50k(Dataset):
    ordered_locations: List[str]
    examples: List[Tuple[int, Path]]
    transforms: tf.Compose

    def __init__(self, dataset_cfg: DictConfig) -> None:
        super().__init__()

        # Get all locations.
        root = Path(dataset_cfg.root)
        location_paths = sorted([path for path in root.iterdir() if path.is_dir()])
        self.ordered_locations = [path.name for path in location_paths]

        # Read each location to get examples.
        self.examples = []
        for i, location_path in enumerate(location_paths):
            for image_path in location_path.iterdir():
                if image_path.suffix != ".jpg":
                    raise Exception(f"Unexpected file extension at {image_path}")
                example = (i, image_path)
                self.examples.append(example)

        # Define image loader transformations.
        transforms = [
            tf.ToTensor(),
        ]
        self.transforms = tf.Compose(transforms)

    def __len__(self) -> int:
        return len(self.examples)

    def __getitem__(self, index) -> ExampleDatasetGeoguessr50k:
        label, image_path = self.examples[index]
        return {
            "label": torch.tensor(label),
            "image": self.transforms(Image.open(image_path)),
        }
