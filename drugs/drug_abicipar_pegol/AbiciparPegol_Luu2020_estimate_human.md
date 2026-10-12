<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;abicipar pegol&quot;,&quot;href&quot;:&quot;drugs/drug_abicipar_pegol/&quot;},{&quot;label&quot;:&quot;Luu_2020 \u00b7 estimate_human&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abicipar pegol — `AbiciparPegol_Luu2020_estimate_human`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

**Model:** No model was generated from this record.

### Reviewer guidance

**Only volume was extracted — no clearance; ktr, CL_CRRT, V and kint have no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (ktr, CL_CRRT, equation variable and V), so that value has no SI equivalent. Extracted — abicipar pegol: ktr 609 Human, CL_CRRT 3.55e+04 Human, V 4.05e+04 Human, kint 9.25 Human.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abicipar_pegol, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Luu KT et al., A Mechanistic and Translational Pharmac…, The Journal of pharmacology… (2020)
  ·  DOI: [10.1124/jpet.119.263178](https://doi.org/10.1124/jpet.119.263178)

<div class="pk-model-meta" hidden drug="abicipar pegol" model-id="AbiciparPegol_Luu2020_estimate_human" status="needs_review" stale="false" population="patients with diabetic macular edema and neovascular age-related macular degeneration" measured-compound="abicipar_pegol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k_RV | `Q306` · ktr | 609 | Human | not captured | [h] · [µM] · [an] | not captured | pd_twin_relink (0.6) | Luu_2020_table_2:row2:col3 | — | not captured |
| k_CR | `Q357` · CL_CRRT | 35500 | Human | not captured | [h] · [µM] · [an] | not captured | llm (0.6) | Luu_2020_table_2:row5:col3 | — | not captured |
| k_CS | `Q900` · equation variable | 6460 | Human | not captured | [h] · [µM] · [an] | not captured | llm (0.6) | Luu_2020_table_2:row6:col3 | — | not captured |
| V_S | `Q61` · V | 40495 | Human | not captured | [h] · [µM] · [an] | not captured | llm (0.6) | Luu_2020_table_2:row10:col3 | — | not captured |
| k_INT | `Q334` · kint | 9.25 | Human | not captured | [h] · [µM] · [an] | not captured | exact (1.0) | Luu_2020_table_2:row11:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'k_VR' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row0:col3'])
- dropped unlinked row (NIL): 'k_VA' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row1:col3'])
- relinked 'k_RV' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- unit_dimension_unknown: 'Human' (ktr)
- dropped unlinked row (NIL): 'k_RC' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row3:col3'])
- dropped unlinked row (NIL): 'k_RS' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row4:col3'])
- unit_dimension_unknown: 'Human' (CL_CRRT)
- unit_dimension_unknown: 'Human' (equation variable)
- dropped unlinked row (NIL): 'k_AS' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row7:col3'])
- dropped unlinked row (NIL): 'k_SC' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row8:col3'])
- dropped unlinked row (NIL): 'k_S' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row9:col3'])
- unit_dimension_unknown: 'Human' (V)
- unit_dimension_unknown: 'Human' (kint)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abicipar_pegol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'estimate (human)' subgroup of Luu_2020 (paper reports 2 populations: estimate (human), estimate (rabbit))
- molar mass: none found for 'abicipar_pegol' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Luu_2020
- companion parameter table 2 transcribed (35 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[k_cr]` | 35500 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_cs]` | 6460 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_rv].parameter_id` | Q306 | Q50 | mismatch |
| `gpt-oss-120b` | `parameters[k_sc]` | not captured | 18.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_va]` | not captured | 0.0256 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | abicipar_pegol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | abicipar_pegol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q306 | fail | 1 / [time] | Human | not captured | not captured | ['Luu_2020_table_2:row2:col3'] |
| C5_unit_missing_Q334 | fail | 1 / [time] | Human | not captured | not captured | ['Luu_2020_table_2:row11:col3'] |
| C5_unit_missing_Q357 | fail | [length] ** 3 / [time] | Human | not captured | not captured | ['Luu_2020_table_2:row5:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | Human | not captured | not captured | ['Luu_2020_table_2:row10:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_abicipar_pegol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Luu_2020` / `Luu_2020::estimate_human`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:14 UTC</sub>
