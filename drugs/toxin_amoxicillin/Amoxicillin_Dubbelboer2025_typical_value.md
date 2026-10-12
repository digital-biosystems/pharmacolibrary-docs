<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;amoxicillin&quot;,&quot;href&quot;:&quot;drugs/toxin_amoxicillin/&quot;},{&quot;label&quot;:&quot;Dubbelboer_2025 \u00b7 typical_value&quot;}]"></div>

# amoxicillin — `Amoxicillin_Dubbelboer2025_typical_value`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Dubbelboer IR; Olsén L; Pelander L; Lacroix MZ; Claustre L; Roques B; et al. et al. (2025). Journal of veterinary pharmacology and therapeutics 48
  ·  DOI: [10.1111/jvp.70003](https://doi.org/10.1111/jvp.70003)

<div class="pk-model-meta" hidden drug="amoxicillin" model-id="Amoxicillin_Dubbelboer2025_typical_value" status="extracted" stale="false" population="healthy cats" measured-compound="amoxicillin" parameterization="mechanistic" topology="2C"></div>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V 1 | `Q63` · V1 | 0.12 | not captured | not captured | not captured | not captured | space_fold (0.95) | jvp70003-tbl-0002:row1:col2 | — | not captured |
| V 2 | `Q64` · V2 | 0.092 | not captured | not captured | not captured | not captured | space_fold (0.95) | jvp70003-tbl-0002:row2:col2 | — | not captured |
| V 3 | `Q77` · V3 | 0.021 | not captured | not captured | not captured | not captured | space_fold (0.95) | jvp70003-tbl-0002:row3:col2 | — | not captured |
| Cl | `Q22` · CL | 0.18 | not captured | not captured | not captured | not captured | exact (1.0) | jvp70003-tbl-0002:row4:col2 | — | not captured |
| Q 1 | `Q30` · Q | 0.39 | not captured | not captured | not captured | not captured | space_fold (0.95) | jvp70003-tbl-0002:row5:col2 | — | not captured |
| T lagpo | `Q83` · tlag | 0.25 | not captured | not captured | not captured | not captured | llm (0.6) | jvp70003-tbl-0002:row8:col2 | — | not captured |
| K asc | `Q49` · kabs | 0.31 | not captured | not captured | not captured | not captured | llm (0.6) | jvp70003-tbl-0002:row12:col2 | — | not captured |
| F oral | `Q40` · Fab | 33 | not captured | not captured | not captured | not captured | llm (0.6) | jvp70003-tbl-0002:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('Q 2', value '0.009') — already have one for this compound
- dropped duplicate Q83 ('T lagsc', value '0.06') — already have one for this compound
- dropped unlinked row (NIL): 'k apo' — extend the ontology if this is a real PK parameter (source ['jvp70003-tbl-0002:row10:col2'])
- routed 'K apo_covariate sex “male”' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'F sc' — extend the ontology if this is a real PK parameter (source ['jvp70003-tbl-0002:row14:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amoxicillin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- population split: 'typical value' subgroup of Dubbelboer_2025 (paper reports 8 populations: cat 1, cat 2, cat 3, cat 4, cat 5, cat 6, median, typical value)

**Extraction notes:**
- companion parameter table 1 transcribed (103 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 | not captured | not captured | ['jvp70003-tbl-0002:row4:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amoxicillin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dubbelboer_2025` / `Dubbelboer_2025::typical_value`)


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
