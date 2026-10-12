<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/toxin_amoxicillin/&quot;},{&quot;label&quot;:&quot;Keij_2023 \u00b7 neonates&quot;}]"></div>

# amoxicillin — `Amoxicillin_Keij2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised

**Steps:**
1. No curator action. Run the engineer for this drug.
2. Advisory only — the base model still replicates.
3. Check the record's covariate_definitions in _interpretv2.yaml.
4. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **engineer** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `not_modelled` (reviewed 2026-09-11 08:46:40.377693+00:00) predates the upstream re-run (2026-09-16 16:40:26.612718+00:00). Current validate status: `extracted`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Keij FM; Schouwenburg S; Kornelisse RF; Preijers T; Mir F; Degraeuwe P; et al. et al. (2023). Clinical infectious diseases : an official publication of the Infectious Diseases Society of America 77
  ·  DOI: [10.1093/cid/ciad432](https://doi.org/10.1093/cid/ciad432)

<div class="pk-model-meta" hidden drug="amoxicillin" model-id="Amoxicillin_Keij2023_reference" status="extracted" stale="true" population="neonates" measured-compound="amoxicillin" parameterization="mechanistic" topology="1C"></div>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (h−1) | `Q49` · kabs | 0.085 | h−1 | 2.3611111111111114e-05 | [1] / [h] | not captured | exact (1.0) | ciad432-T2:row2:col1 | — | not captured |
| F (%) | `Q40` · Fab | 0.873 | not captured | not captured | not captured | not captured | exact (1.0) | ciad432-T2:row7:col1 | — | not captured |
| θPNA | `Q900` · θPNA | 0.357 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θGA | `Q900` · θGA | 2.37 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| TVCL | `Q900` · TVCL | 3.22 | L/h | 8.944444444444445e-07 | not captured | not captured | not captured (not captured) | ciad432-T2:row4:col1 | — | not captured |
| TVV1 | `Q900` · TVV1 | 43 | L | 0.043000000000000003 | not captured | not captured | not captured (not captured) | ciad432-T2:row6:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| TVCL (L/h) | Q22 | not captured | tv_prefix |
| TVV1 (L) | Q61 | not captured | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- kept covariate coefficient θPNA=0.357 (covariate PNA) — not an ontology parameter
- kept covariate coefficient θGA=2.37 (covariate GA) — not an ontology parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- bound model equation to Q22 (CL): CLA = TVCL*(BW/70)^0.75*(PNA/6.8)^θPNA*(GA/35.8)^θGA
- bound model equation to Q63 (V1): VA = TVV1*(BW/70)^1.00
- Q22 (CL) is equation-defined: value moved to equation-variable 'TVCL (L/h)'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'TVV1 (L)'; equation kept verbatim
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'TVV1 (L)' is the general volume)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell ciad432-T2:row2:col2 = '0.091 (.06–.11)'
- unparsed cell ciad432-T2:row4:col2 = '3.22 (3.09–3.35)'
- unparsed cell ciad432-T2:row6:col2 = '43 (41.61–44.32)'
- unparsed cell ciad432-T2:row7:col2 = '0.832 (.72–1.02)'
- unparsed cell ciad432-T2:row9:col2 = '0.359 (.30–.41)'
- unparsed cell ciad432-T2:row10:col2 = '2.37 (2.13–2.61)'
- unparsed cell ciad432-T2:row14:col2 = '0.133 (.11–.15)'
- unparsed cell ciad432-T2:row15:col2 = '4.38 (3.59–5.37)'
- LLM selected parameter table(s) 2
- captured model equation CLA = TVCL*(BW/70)^0.75*(PNA/6.8)^θPNA*(GA/35.8)^θGA
- captured model equation VA = TVV1*(BW/70)^1.00

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['ciad432-T2:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['ciad432-T2:row2:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['ciad432-T2:row6:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Keij_2023` / `Keij_2023::neonates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
