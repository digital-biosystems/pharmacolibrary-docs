"""Simulate Clopidogrel_Jung2024.mo with OpenModelica and write Clopidogrel_Jung2024.csv/.png.

Needs OMPython and an OpenModelica install, plus the Pharmacolibrary Modelica library the
model's components come from:  https://github.com/digital-biosystems/Pharmacolibrary

    export PHARMACOLIBRARY_MO=/path/to/Pharmacolibrary/package.mo
    python run_Clopidogrel_Jung2024.py
"""
import os
import sys

from OMPython import ModelicaSystem

LIB = os.environ.get("PHARMACOLIBRARY_MO", "/home/vagrant/Pharmacolibrary/Pharmacolibrary/package.mo")
VARS = ['central.C', 'central_H4.C', 'central_carboxylic_acid.C']

if not os.path.exists(LIB):
    sys.exit("Pharmacolibrary not found. Set PHARMACOLIBRARY_MO to its package.mo — the model "
             "extends classes from that library and cannot be built without it.")

m = ModelicaSystem("Clopidogrel_Jung2024.mo", "Clopidogrel_Jung2024", [LIB])
m.setSimulationOptions(["startTime=0", "stopTime=86400", "tolerance=1e-8", "stepSize=5"])
m.simulate()
sol = m.getSolutions(["time"] + VARS)
t, curves = sol[0], sol[1:]

with open("Clopidogrel_Jung2024.csv", "w") as fh:
    fh.write("time," + ",".join(VARS) + "\n")
    for k in range(len(t)):
        fh.write(",".join(["%.10g" % float(t[k])]
                          + ["%.10g" % float(c[k]) for c in curves]) + "\n")
print("wrote Clopidogrel_Jung2024.csv (%d rows)" % len(t))

try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    for name, c in zip(VARS, curves):
        plt.plot([x / 3600 for x in t], c, label=name)
    plt.xlabel("time (h)"); plt.ylabel("concentration (kg/m3 = g/L)")
    plt.legend(); plt.grid(True); plt.title("Clopidogrel_Jung2024")
    plt.tight_layout(); plt.savefig("Clopidogrel_Jung2024.png", dpi=150)
    print("wrote Clopidogrel_Jung2024.png")
except ImportError:
    print("matplotlib not installed — skipped the plot")
