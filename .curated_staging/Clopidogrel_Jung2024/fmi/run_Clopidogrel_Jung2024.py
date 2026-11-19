"""Simulate Clopidogrel_Jung2024.fmu (FMI 2.0, co-simulation) and write Clopidogrel_Jung2024.csv/.png.

    pip install fmpy matplotlib
    python run_Clopidogrel_Jung2024.py [--step 0.02] [--record-every 250] [--stop 86400]

WHY THE STEP IS SMALL

The dose is a RECTANGULAR PULSE one second wide (amplitude = dose / adminDuration) inside a
24-hour simulation. This FMU embeds CVODE but steps on an equidistant grid with root
finding OFF, so it cannot detect the pulse edges: a communication step wider than the pulse
integrates it for longer than it lasts and delivers too much drug. Measured against the
authored Modelica model, the peak comes out 89x too high at the model's own 176 s interval,
2.1x too high at 1 s, and within about 1% at 0.02 s.

So the step below is an ACCURACY setting. Widening it does not trade a little precision for
speed — it silently overdoses the model. The run prints a check against the reference peaks
at the end; if those lines say FAIL, the step is too wide.
"""
import argparse
import re
import numpy as np
from fmpy import extract, read_model_description
from fmpy.fmi2 import FMU2Slave, fmi2OK

NAME = "Clopidogrel_Jung2024"
OBSERVABLES = ['central.C', 'central_H4.C', 'central_carboxylic_acid.C']
REFERENCE = {'central.C': 1.23883e-05, 'central_H4.C': 0.000418679, 'central_carboxylic_acid.C': 0.0103504}          # peak values from the authored Modelica model
STOP, STEP, EVERY = 86400, 0.02, 250

ap = argparse.ArgumentParser()
ap.add_argument("--step", type=float, default=STEP, help="communication step (s)")
ap.add_argument("--record-every", type=int, default=EVERY, help="keep every Nth step")
ap.add_argument("--stop", type=float, default=STOP, help="stop time (s)")
a = ap.parse_args()

md = read_model_description(NAME + ".fmu")
vr = {v.name: v.valueReference for v in md.modelVariables}
missing = [o for o in OBSERVABLES if o not in vr]
if missing:
    raise SystemExit("not in the FMU: " + ", ".join(missing))

s = FMU2Slave(guid=md.guid, unzipDirectory=extract(NAME + ".fmu"),
              modelIdentifier=md.coSimulation.modelIdentifier, instanceName="run")
s.instantiate()
s.setupExperiment(startTime=0.0, stopTime=a.stop)
s.enterInitializationMode()
s.exitInitializationMode()

t, n, rows, failures = 0.0, 0, [], 0
while t < a.stop - 1e-9:
    h = min(a.step, a.stop - t)
    st = s.doStep(currentCommunicationPoint=t, communicationStepSize=h)
    if st is not None and st != fmi2OK:
        failures += 1
    t += h
    n += 1
    if n % a.record_every == 0 or t >= a.stop - 1e-9:
        rows.append((t,) + tuple(s.getReal([vr[o]])[0] for o in OBSERVABLES))
s.terminate()
s.freeInstance()

data = np.array(rows)
with open(NAME + ".csv", "w") as fh:
    fh.write("time," + ",".join(OBSERVABLES) + "\n")
    for r in data:
        fh.write(",".join("%.10g" % v for v in r) + "\n")
print("wrote %s.csv (%d rows, step %g s)" % (NAME, len(data), a.step))
if failures:
    print("WARNING: %d solver step(s) did not return fmi2OK" % failures)

print("peak check against the authored Modelica model:")
worst = 0.0
for k, o in enumerate(OBSERVABLES, start=1):
    peak = float(data[:, k].max())
    ref = REFERENCE.get(o)
    if not ref:
        print("  %-30s %.6g  (no reference)" % (o, peak))
        continue
    dev = abs(peak - ref) / ref * 100
    worst = max(worst, dev)
    print("  %-30s %.6g vs %.6g  %5.1f%%  %s"
          % (o, peak, ref, dev, "ok" if dev <= 5 else "FAIL - widen? see the docstring"))
if worst > 5:
    print("The step (%g s) is too wide to resolve the 1 s dose pulse." % a.step)

try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    for k, o in enumerate(OBSERVABLES, start=1):
        plt.plot(data[:, 0] / 3600, data[:, k], label=o)
    plt.xlabel("time (h)"); plt.ylabel("concentration (kg/m3 = g/L)")
    plt.legend(); plt.grid(True); plt.tight_layout()
    plt.savefig(NAME + ".png", dpi=150)
    print("wrote %s.png" % NAME)
except ImportError:
    print("matplotlib not installed - skipped the plot")
