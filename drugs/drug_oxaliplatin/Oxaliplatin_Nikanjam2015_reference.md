<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;oxaliplatin&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/&quot;},{&quot;label&quot;:&quot;Nikanjam_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxaliplatin_Deyme2019_reference&quot;,&quot;label&quot;:&quot;Deyme_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Deyme2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxaliplatin_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxaliplatin_Zhu2023_reference&quot;,&quot;label&quot;:&quot;Zhu_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxaliplatin/Oxaliplatin_Zhu2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# oxaliplatin — `Oxaliplatin_Nikanjam2015_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; aUCt has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is oxaliplatin's own; they describe platinum ultrafiltrate. Extracted — platinum ultrafiltrate: CLH 0.58 L/h, CLR 0.34 L/h, CL 0.78 L/h, AUC 14.2 ng·h/mL, AUCt 16.8 µg h/mL.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has oxaliplatin, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `oxaliplatin`, measured `platinum ultrafiltrate`.

## Citation
Nikanjam M et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2015)
  ·  DOI: [10.1007/s00280-014-2667-6](https://doi.org/10.1007/s00280-014-2667-6)

<div class="pk-model-meta" hidden drug="oxaliplatin" model-id="Oxaliplatin_Nikanjam2015_reference" status="needs_review" stale="false" population="adults and children" measured-compound="platinum ultrafiltrate" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Median CL (Hepatic) | `Q25` · CLH | 0.58 | L/h | 1.611111111111111e-07 | L/h | not captured | llm_corrected (0.6) | Nikanjam_2015:abstract | — | not captured |
| Median CL (Renal) | `Q26` · CLR | 0.34 | L/h | 9.444444444444445e-08 | L/h | not captured | llm_corrected (0.6) | Nikanjam_2015:abstract | — | not captured |
| Median CL (Peds1) | `Q22` · CL | 0.78 | L/h | 2.166666666666667e-07 | L/h | not captured | llm_confirmed (0.6) | Nikanjam_2015:abstract | — | not captured |
| median AUC (2-6 years) | `Q88` · AUC | 14.2 | ng·h/mL | not captured | ng·h/mL | not captured | llm_confirmed (0.6) | Nikanjam_2015:abstract | — | not captured |
| median AUC (6-12 years) | `Q19` · AUCt | 16.8 | µg h/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm_corrected (0.6) | Nikanjam_2015:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/h/kg(0.75)' (CLH)
- unit_dimension_unknown: 'L/h/kg(0.75)' (CLR)
- unit_dimension_unknown: 'L/h/kg(0.75)' (CL)
- dropped duplicate Q22 ('Median CL (Peds2)', value 0.74) — already have one for this compound
- dropped duplicate Q22 ('Median CL (Peds3)', value 0.81) — already have one for this compound
- unit_dimension_unknown: 'µg h/mL' (AUC)
- unit_dimension_unknown: 'µg h/mL' (AUCt)
- dropped duplicate Q19 ('median AUC (12-18 years)', value 16.5) — already have one for this compound
- dropped duplicate Q88 ('median AUC (&gt;18 years)', value 17.3) — already have one for this compound
- implicit units: 'Median CL (Hepatic)' → L/h (from the popPK convention: 'Hepatic clearance (CL) is a first-order rate constant representing volume of plasma cleared per unit time; the standard ')
- implicit units: 'Median CL (Renal)' → L/h (from the popPK convention: 'Renal clearance (CL) is a first-order rate constant representing volume of plasma cleared per unit time; the standard un')
- implicit units: 'Median CL (Peds1)' → L/h (from the popPK convention: 'Total clearance (CL) is a first-order rate constant representing volume of plasma cleared per unit time; the standard un')
- implicit units: 'median AUC (2-6 years)' → ng·h/mL (from the popPK convention: 'AUC is the integral of concentration over time. While the specific concentration unit (e.g., ng/mL, ng/L) is not specifi')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=platinum ultrafiltrate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'platinum ultrafiltrate' ('no full name in the paper') — left in mass units
- molar mass: none found for 'platinum ultrafiltrate' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'platinum ultrafiltrate', not oxaliplatin — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Nikanjam_2015_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[12-18 years]` | not captured | 16.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2-6 years]` | not captured | 14.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[hepatic]` | not captured | 0.58 | only_one_extracted |
| `gpt-oss-120b` | `parameters[median auc]` | 14.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[median cl]` | 0.58 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[peds1]` | not captured | 0.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal]` | not captured | 0.34 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | oxaliplatin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | platinum ultrafiltrate | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nikanjam_2015:abstract'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nikanjam_2015:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Nikanjam_2015:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Nikanjam_2015:abstract'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | µg h/mL | not captured | not captured | ['Nikanjam_2015:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.78 | not captured | not captured | ['Nikanjam_2015:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.78 L/h | not captured | not captured | ['Nikanjam_2015:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxaliplatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nikanjam_2015` / `Nikanjam_2015::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:33 UTC</sub>
