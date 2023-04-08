import torchvision
from jaxtyping import Float
from torch import Tensor, nn


class Baseline(nn.Module):
    def __init__(self) -> None:
        super().__init__()
        self.resnet = torchvision.models.resnet50()

    def forward(
        self,
        image: Float[Tensor, "batch 3 height width"],
    ) -> Float[Tensor, "batch num_locations"]:
        prediction = self.resnet(image)

        # TODO: Don't hard-code this!
        num_locations = 124

        # Return logits that correspond to probabilities.
        return prediction[:, :num_locations]
