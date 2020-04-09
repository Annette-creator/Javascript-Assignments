<?php

namespace DesignPatterns\Structural\Facade;

/**
 * Class BiosInterface.
 */
interface BiosInterface{
    public function execute();
    public function waitForKeyPress();

    /**
     * launches the OS.
     *
     * @param OsInterface $os
     */
    public function launch(OsInterface $os);
    public function powerDown();
}