"""Simulate Clopidogrel_Jung2024.sbml and write Clopidogrel_Jung2024.csv/.png.

Needs libroadrunner:  pip install libroadrunner matplotlib
Any SBML-capable simulator will also load the file — it is plain SBML L3 with no extensions.
"""
import roadrunner

rr = roadrunner.RoadRunner("Clopidogrel_Jung2024.sbml")
sel = ["time"] + ['A_central', 'A_central_H4', 'A_central_carboxylic_acid']
rr.selections = sel
res = rr.simulate(0, 86400, 4001)

with open("Clopidogrel_Jung2024.csv", "w") as fh:
    fh.write(",".join(sel) + "\n")
    for row in res:
        fh.write(",".join("%.10g" % float(v) for v in row) + "\n")
print("wrote Clopidogrel_Jung2024.csv")

try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    for k, name in enumerate(sel[1:], start=1):
        plt.plot(res[:, 0] / 3600, res[:, k], label=name)
    plt.xlabel("time (h)"); plt.ylabel("concentration (kg/m3 = g/L)")
    plt.legend(); plt.grid(True); plt.tight_layout()
    plt.savefig("Clopidogrel_Jung2024.png", dpi=150)
    print("wrote Clopidogrel_Jung2024.png")
except ImportError:
    print("matplotlib not installed — skipped the plot")
