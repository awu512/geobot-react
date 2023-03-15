import os

import hydra
import pytorch_lightning as pl
from jaxtyping import install_import_hook
from omegaconf import DictConfig
from torch import utils
from torchvision.datasets import MNIST
from torchvision.transforms import ToTensor

with install_import_hook("foo", "beartype.beartype"):
    from src.MainLightningModule import MainLightningModule


@hydra.main(version_base=None, config_path="configs", config_name="main")
def main(cfg: DictConfig):
    dataset = MNIST(os.getcwd(), download=True, transform=ToTensor())
    train_loader = utils.data.DataLoader(dataset)

    autoencoder = MainLightningModule()
    trainer = pl.Trainer(limit_train_batches=100, max_epochs=1)
    trainer.fit(model=autoencoder, train_dataloaders=train_loader)


if __name__ == "__main__":
    main()
