"""Simulate Clopidogrel_Jung2024.cellml and write Clopidogrel_Jung2024.csv/.png.

The .cellml file is CellML 2.0 and opens in OpenCOR as it is. This runner does not need a
CellML runtime: it integrates the same system directly with SciPy, so the bundle is runnable
with  pip install scipy matplotlib  alone.
"""
import numpy as np
from scipy.integrate import solve_ivp

V = [1.46392, 1.46392, 2.82398, 0.05145, 0.01734, 0.05189]                    # m^3, in compartment order
NAMES = ['hepatic', 'central', 'peripheral', 'central_H4', 'central_carboxylic_acid', 'peripheral_carboxylic_acid']
DOSE, KA, TLAG, DOSE_IDX = 0.0003, 0.0054555555555555555, 705.6, 0
TWO_WAY = [(0, 1, 0.00023491666666666667), (1, 2, 0.00016331388888888887), (4, 5, 1.2433333333333332e-06)]        # (i, j, CL)  two-way distribution
ONE_WAY = [(0, 3, 0.00030857499999999995), (0, 4, 0.002160033333333333)]        # (i, j, CL)  ONE-WAY metabolite formation
ELIM = [(0, 0.00010285833333333333), (3, 2.0625e-05), (4, 2.0133333333333333e-06)]              # (i, CL)

def rhs(t, y):
    dy = np.zeros_like(y)
    C = y[1:] / np.asarray(V)
    absorbed = KA * y[0] if t >= TLAG else 0.0
    dy[0] -= absorbed
    dy[1 + DOSE_IDX] += absorbed
    for i, j, cl in TWO_WAY:
        f = cl * (C[i] - C[j]);  dy[1+i] -= f;  dy[1+j] += f
    for i, j, cl in ONE_WAY:
        f = cl * C[i];           dy[1+i] -= f;  dy[1+j] += f
    for i, cl in ELIM:
        dy[1+i] -= cl * C[i]
    return dy

y0 = np.zeros(1 + len(V));  y0[0] = DOSE
t_eval = np.linspace(0, 86400, 4001)
sol = solve_ivp(rhs, (0, 86400), y0, t_eval=t_eval, method="LSODA", rtol=1e-8, atol=1e-16)
conc = {n: sol.y[1+k] / V[k] for k, n in enumerate(NAMES)}

with open("Clopidogrel_Jung2024.csv", "w") as fh:
    fh.write("time," + ",".join(NAMES) + "\n")
    for k in range(len(sol.t)):
        fh.write(",".join(["%.10g" % float(sol.t[k])]
                          + ["%.10g" % float(conc[n][k]) for n in NAMES]) + "\n")
print("wrote Clopidogrel_Jung2024.csv")

try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    for n in ['central', 'central_H4', 'central_carboxylic_acid']:
        plt.plot(sol.t / 3600, conc[n], label=n)
    plt.xlabel("time (h)"); plt.ylabel("concentration (kg/m3 = g/L)")
    plt.legend(); plt.grid(True); plt.tight_layout(); plt.savefig("Clopidogrel_Jung2024.png", dpi=150)
    print("wrote Clopidogrel_Jung2024.png")
except ImportError:
    print("matplotlib not installed — skipped the plot")
