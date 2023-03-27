import hydra
import pytorch_lightning as pl
from jaxtyping import install_import_hook
from omegaconf import DictConfig
from pytorch_lightning.loggers import WandbLogger
from torch import Generator, utils

with install_import_hook("foo", "beartype.beartype"):
    from src.datasets.DatasetGeoguessr50k import DatasetGeoguessr50k
    from src.MainLightningModule import MainLightningModule


@hydra.main(version_base=None, config_path="configs", config_name="main")
def main(cfg: DictConfig):
    assert "geoguessr50k" in cfg.dataset
    dataset = DatasetGeoguessr50k(cfg.dataset.geoguessr50k)

    seed = Generator().manual_seed(42)
    train_set, val_set, test_set = utils.data.random_split(
        dataset, [0.7, 0.2, 0.1], generator=seed
    )

    train_loader = utils.data.DataLoader(
        train_set,
        num_workers=cfg.num_workers,
        batch_size=cfg.batch_size,
        shuffle=True,
    )

    test_loader = utils.data.DataLoader(
        test_set,
        num_workers=cfg.num_workers,
        batch_size=cfg.batch_size,
        shuffle=False,
    )

    val_loader = utils.data.DataLoader(
        val_set,
        num_workers=cfg.num_workers,
        batch_size=cfg.batch_size,
        shuffle=False,
    )

    model = MainLightningModule(cfg)
    trainer = pl.Trainer(
        max_epochs=100,
        accelerator="gpu",
        logger=WandbLogger(**cfg.wandb, config=cfg),
        log_every_n_steps=cfg.log_every_n_steps,
    )
    trainer.fit(model=model, train_dataloaders=train_loader, val_dataloaders=val_loader)


if __name__ == "__main__":
    main()
