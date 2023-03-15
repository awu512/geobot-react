import hydra
import pytorch_lightning as pl
from jaxtyping import install_import_hook
from omegaconf import DictConfig
from pytorch_lightning.loggers import WandbLogger
from torch import utils

with install_import_hook("foo", "beartype.beartype"):
    from src.datasets.DatasetGeoguessr50k import DatasetGeoguessr50k
    from src.MainLightningModule import MainLightningModule


@hydra.main(version_base=None, config_path="configs", config_name="main")
def main(cfg: DictConfig):
    assert "geoguessr50k" in cfg.dataset
    dataset = DatasetGeoguessr50k(cfg.dataset.geoguessr50k)

    train_loader = utils.data.DataLoader(
        dataset,
        num_workers=cfg.num_workers,
        batch_size=cfg.batch_size,
        shuffle=True,
    )

    model = MainLightningModule(cfg)
    trainer = pl.Trainer(
        max_epochs=100,
        accelerator="gpu",
        logger=WandbLogger(**cfg.wandb, config=cfg),
        log_every_n_steps=cfg.log_every_n_steps,
    )
    trainer.fit(model=model, train_dataloaders=train_loader)


if __name__ == "__main__":
    main()
