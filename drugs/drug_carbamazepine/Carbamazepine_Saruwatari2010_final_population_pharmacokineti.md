# carbamazepine — `Carbamazepine_Saruwatari2010_final_population_pharmacokineti`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Saruwatari J; Ishitsu T; Nakagawa K et al. (2010). Pharmaceuticals (Basel, Switzerland) 3
  ·  DOI: [10.3390/ph3082709](https://doi.org/10.3390/ph3082709)

## Model component
<dbs-pgx drug="carbamazepine" model-id="Carbamazepine_Saruwatari2010_final_population_pharmacokineti" status="" stale="false" population="patients with epilepsy" measured-compound="antiepileptic drugs" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL | Q22 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Carbamazepine' — extend the ontology if this is a real PK parameter (source ['Saruwatari_2010_table_2:row0:col1'])
- dropped unlinked row (NIL): 'Phenobarbital' — extend the ontology if this is a real PK parameter (source ['Saruwatari_2010_table_2:row1:col1'])
- dropped unlinked row (NIL): 'Phenytoin' — extend the ontology if this is a real PK parameter (source ['Saruwatari_2010_table_2:row3:col1'])
- dropped unlinked row (NIL): 'Valproic acid' — extend the ontology if this is a real PK parameter (source ['Saruwatari_2010_table_2:row5:col1'])
- dropped unlinked row (NIL): 'Zonisamide' — extend the ontology if this is a real PK parameter (source ['Saruwatari_2010_table_2:row6:col1'])
- table mostly unlinked (5/5 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=antiepileptic drugs
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- bound model equation to Q22 (CL): CL = 0.17 * (BW/40)^0.11 * Dose0.45 * 1.40PHT * 1.21PB * 1.08CYP3A5*3/*3 * eηCL
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'final population pharmacokinetic model' subgroup of Saruwatari_2010 (paper reports 2 populations: final population pharmacokinetic model, genetic polymorphisms)

**Extraction notes:**
- unparsed cell pharmaceuticals-03-02709-t003:row1:col3 = '[12,43,44]'
- unparsed cell pharmaceuticals-03-02709-t003:row8:col3 = '[12]'
- unparsed cell Saruwatari_2010_table_2:row0:col3 = '[12,43]'
- unparsed cell Saruwatari_2010_table_2:row1:col3 = '[12,36]'
- unparsed cell Saruwatari_2010_table_2:row3:col3 = '[33]'
- unparsed cell Saruwatari_2010_table_2:row5:col3 = '[120]'
- unparsed cell Saruwatari_2010_table_2:row6:col3 = '[12,38]'
- companion parameter table 2 transcribed (5 record(s))
- LLM selected parameter table(s) 2
- captured model equation CL = 0.17 * (BW/40)^0.11 * Dose0.45 * 1.40PHT * 1.21PB * 1.08CYP3A5*3/*3 * eηCL

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_carbamazepine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Saruwatari_2010` / `Saruwatari_2010::final_population_pharmacokinetic_model`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
