import pytorch_lightning as pl
import torch.nn.functional as F
from omegaconf import DictConfig
from torch import optim

from src.models.Baseline import Baseline


class MainLightningModule(pl.LightningModule):
    cfg: DictConfig

    def __init__(self, cfg: DictConfig):
        super().__init__()
        self.model = Baseline()
        self.cfg = cfg

    def training_step(self, batch, batch_idx):
        ground_truth = batch["label"]
        image = batch["image"]
        prediction = self.model(image)
        loss = F.cross_entropy(prediction, ground_truth)
        return loss

    def configure_optimizers(self):
        optimizer = optim.Adam(self.parameters(), lr=self.cfg.learning_rate)
        return optimizer
