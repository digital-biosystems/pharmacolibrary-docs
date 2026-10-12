<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;isosorbide dinitrate&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/&quot;},{&quot;label&quot;:&quot;Straehl_1985 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;IsosorbideDinitrate_Jaruratanasirikul2020_reference&quot;,&quot;label&quot;:&quot;Jaruratanasirikul_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Jaruratanasirikul2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;IsosorbideDinitrate_Taylor1981_reference&quot;,&quot;label&quot;:&quot;Taylor_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_isosorbide_dinitrate/IsosorbideDinitrate_Taylor1981_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# isosorbide dinitrate — `IsosorbideDinitrate_Straehl1985_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545), gpt-oss:120b (not confirmed, agreement 0.188). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The isosorbide dinitrate record was rejected because its metabolites, isosorbide 5-mononitrate and isosorbide 2-mononitrate, are unlinked from the dose, and the model was built from the abstract only.**

The metabolism links from isosorbide dinitrate to both mononitrate metabolites carry no usable rate constant, so the metabolites have no path from the dose and the structure check failed. The record is abstract-only: the reported summary statistics (t1/2z 4.7 minutes, Vss 90 L, CL 136 L/hr, bioavailability 29%) stand in for a fitted model rather than coming from one. Extracted — isosorbide dinitrate: t1/2z 4.7 minutes, Vss 90 L, CL 136 L/hr, Fab 29 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has isosorbide dinitrate, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:26.428849+00:00) predates the upstream re-run (2026-10-06 10:26:20.663237+00:00). Current validate status: `needs_review`.

## Citation
Straehl P et al., Isosorbide dinitrate bioavailability, k…, Clinical pharmacology and t… (1985)
  ·  DOI: [10.1038/clpt.1985.150](https://doi.org/10.1038/clpt.1985.150)

<div class="pk-model-meta" hidden drug="isosorbide dinitrate" model-id="IsosorbideDinitrate_Straehl1985_reference" status="needs_review" stale="true" population="healthy adults" measured-compound="isosorbide dinitrate" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t1/2 | `Q57` · t1/2z | 4.7 | minutes | 282.0 | [min] | not captured | exact (1.0) | Straehl_1985:abstract, Straehl_1985:abstract | — | not captured |
| volume of distribution at steady state | `Q65` · Vss | 90 | L | 0.09 | [l] | not captured | llm_corrected (0.6) | Straehl_1985:abstract | — | not captured |
| Total plasma clearance | `Q22` · CL | 136 | L/hr | 3.777777777777778e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | Straehl_1985:abstract | — | not captured |
| ISDN bioavailability | `Q40` · Fab | 29 | % | not captured | not captured | not captured | llm_confirmed (0.6) | Straehl_1985:abstract | — | not captured |
| V | `Q61` · V | 30.3 | L | 0.0303 | L | not captured | review_gapfill (0.7) | Jaruratanasirikul_2020:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('terminal disappearance t1/2', value 54.7) — already have one for this compound
- dropped duplicate Q57 ('terminal t1/2', value 4.33) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=isosorbide dinitrate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 1 linked by role; re-tagged isosorbide dinitrate→parent ×10
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Jaruratanasirikul_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Straehl_1985_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |
| `gpt-oss:120b` | not confirmed | 0.188 (3/16 fields) | 13 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[isdn bioavailability]` | 29 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[isdn bioavailability]` | not captured | 29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 30.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | isosorbide dinitrate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | isosorbide dinitrate | unknown | mismatch |
| `gpt-oss:120b` | `parameters[dose]` | not captured | 5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[isdn bioavailability]` | 29 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[isdn bioavailability]` | not captured | 29 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | 4.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | not captured | 4.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal disappearance t1/2]` | not captured | 54.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal t1/2]` | not captured | 4.33 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma clearance]` | 136 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[total plasma clearance]` | not captured | 136 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state]` | 90 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state]` | not captured | 90 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | isosorbide dinitrate | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | isosorbide dinitrate | unknown | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Straehl_1985:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Straehl_1985:abstract', 'Straehl_1985:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jaruratanasirikul_2020:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Straehl_1985:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 136.0 | not captured | not captured | ['Straehl_1985:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 136 L/h | not captured | not captured | ['Straehl_1985:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.3 L | not captured | not captured | ['Jaruratanasirikul_2020:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 90 L | not captured | not captured | ['Straehl_1985:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_isosorbide_dinitrate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Straehl_1985` / `Straehl_1985::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 10:26 UTC</sub>
