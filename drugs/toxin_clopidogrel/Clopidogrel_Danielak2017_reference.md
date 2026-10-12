<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/toxin_clopidogrel/&quot;},{&quot;label&quot;:&quot;Danielak_2017 \u00b7 patients undergoing elective coronarography or percutaneous coronary intervention&quot;}]"></div>

# clopidogrel — `Clopidogrel_Danielak2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-11 08:46:45.562259+00:00) predates the upstream re-run (2026-09-16 19:15:34.395517+00:00). Current validate status: `rejected`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Danielak D; Karaźniewicz-Łada M; Komosa A; Burchardt P; Lesiak M; Kruszyna Ł; et al. et al. (2017). European journal of clinical pharmacology 73
  ·  DOI: [10.1007/s00228-017-2334-z](https://doi.org/10.1007/s00228-017-2334-z)

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Danielak2017_reference" status="rejected" stale="true" population="patients undergoing elective coronarography or percutaneous coronary intervention" measured-compound="clopidogrel" parameterization="apparent" topology="parent_metabolite"></div>

**Parameterization:** CL/F, Q2/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k12 [1/h] | `Q301` · k12 | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col3 | — | 25.3 (None% RSE) |
| V2/F [L] | `Q82` · V2/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3 | — | 63.7 (None% RSE) |
| CL/F [L/h] | `Q27` · CL/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3 | — | 49.8 (None% RSE) |
| FM | `Q45` · fm | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3 | — | 71.4 (None% RSE) |
| V3/F [L] | `Q78` · V3/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col3 | — | not captured |
| Q2/F [L/h] | `Q80` · Q2/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3 | — | not captured |
| V/F (L) | `Q76` · V/F | —(suppressed) | L | — | L | not captured | review_gapfill (0.7) | Jiang_2025:review | — | not captured |
| ka (1/h) | `Q49` · kabs | —(suppressed) | 1/h | — | 1/h | not captured | review_gapfill (0.7) | Henrich_2021:review | — | not captured |
| absorption delay in patients with ACS | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Schilling_2020:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'on FM (COV)b' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col2'])
- dropped duplicate Q301 ('k12 and V2/F', value '-0.087') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clopidogrel
- gap-filled Q76 (V/F) from Jiang_2025's review values (primary lacked it)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Henrich_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Schilling_2020's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row13:col3 = '−0.48–−0.41'
- unparsed cell Tab2:row16:col3 = '−0.49–−0.42'
- unparsed cell Tab2:row17:col3 = '−0.68–−0.58'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Henrich_2021:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jiang_2025:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Schilling_2020:review'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.045 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 140 L | not captured | not captured | ['Jiang_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clopidogrel/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Danielak_2017` / `Danielak_2017::patients undergoing elective coronarography or percutaneous coronary intervention`)


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
