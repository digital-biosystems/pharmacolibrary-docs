<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;eflornithine&quot;,&quot;href&quot;:&quot;drugs/drug_eflornithine/&quot;},{&quot;label&quot;:&quot;Johansson_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eflornithine_Boberg2025_reference&quot;,&quot;label&quot;:&quot;Boberg_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eflornithine/Eflornithine_Boberg2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eflornithine_Jansson2008_d_eflornithine_estimate_rse&quot;,&quot;label&quot;:&quot;Jansson_2008_d_eflornithine_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eflornithine/Eflornithine_Jansson2008_d_eflornithine_estimate_rse.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eflornithine_Jansson2008_l_eflornithine_estimate_rse&quot;,&quot;label&quot;:&quot;Jansson_2008_l_eflornithine_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eflornithine/Eflornithine_Jansson2008_l_eflornithine_estimate_rse.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eflornithine_Jansson2008_value_for_d_eflornithine&quot;,&quot;label&quot;:&quot;Jansson_2008_value_for_d_eflornithine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eflornithine/Eflornithine_Jansson2008_value_for_d_eflornithine.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eflornithine_Jansson2008_value_for_l_eflornithine&quot;,&quot;label&quot;:&quot;Jansson_2008_value_for_l_eflornithine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eflornithine/Eflornithine_Jansson2008_value_for_l_eflornithine.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eflornithine_Jansson2008_value_for_r_eflornithine_estimate_r&quot;,&quot;label&quot;:&quot;Jansson_2008_value_for_r_eflornithine_estimate_rse_iiv_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eflornithine/Eflornithine_Jansson2008_value_for_r_eflornithine_estimate_r.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eflornithine — `Eflornithine_Johansson2013_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> L-eflornithine volume of distribution 0.15 L and clearance 3.36 mL/min fell outside physiological windows.

<div class="pk-model-meta" hidden drug="eflornithine" model-id="Eflornithine_Johansson2013_reference" status="rejected" stale="false" population="rat" measured-compound="L-eflornithine" parameterization="mechanistic" topology="1C"></div>

## Citation
Johansson CC, Gennemark P, Artursson P, Äbelö A, Ashton M, Jansson-Löfmark R. Population pharmacokinetic modeling and deconvolution of enantioselective absorption of eflornithine in the rat. Journal of pharmacokinetics and pharmacodynamics 40(1):117–128 (2013).
  ·  DOI: [10.1007/s10928-012-9293-x](https://doi.org/10.1007/s10928-012-9293-x)

## Population and dosing

**Population:** rat · condition healthy.

**Dosed compound ≠ measured compound:** dosed eflornithine hydrochloride, measured L-eflornithine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance | CL | 3.36 | mL/min |
| Oral bioavailability | Fab | 30 | % |
| V CSF (L) | V | 0.15 | L |
| K a (h -1 ) | kabs | 1.16 | h -1 |
| T lag (h) | tlag | 0.447 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**L-eflornithine volume of distribution 0.15 L and clearance 3.36 mL/min fell outside physiological windows.**

The clearance and volume of distribution parameters were flagged as having implausible magnitudes, suggesting a unit or scale extraction error. Because the record was built from the abstract alone, these summary statistics stood in for a fitted model rather than representing direct model estimates. Extracted — L-eflornithine: CL 3.36 mL/min, Fab 30 %, V 0.15 L, kabs 1.16 h -1, tlag 0.447 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has eflornithine hydrochloride, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance | `Q22` · CL | 3.36 | mL/min | 5.6e-08 | m3/s | ml/min | exact (1) | Johansson_2013:abstract |
| Oral bioavailability | `Q40` · Fab | 30 | % |  |  |  | exact (1) | Johansson_2013:abstract, Johansson_2013:abstract |
| V CSF (L) | `Q61` · V | 0.15 | L | 0.00015 | m3 | L | review_gapfill (0.7) | Boberg_2025:review |
| K a (h -1 ) | `Q49` · kabs | 1.16 | h -1 | 0.0003222 | 1/s | 1/h | review_gapfill (0.7) | Boberg_2025:review |
| T lag (h) | `Q83` · tlag | 0.447 | h | 1609 | s | h | review_gapfill (0.7) | Boberg_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'D:L concentration ratio in feces' — extend the ontology if this is a real PK parameter (source ['Johansson_2013:abstract'])
- dropped unlinked row (NIL): 'Caco-2 cell permeability' — extend the ontology if this is a real PK parameter (source ['Johansson_2013:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=L-eflornithine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none of 1 PubChem candidate(s) is 'L-eflornithine' (LLM) — left in mass units
- molar mass: none found for 'L-eflornithine' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Boberg_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Boberg_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Boberg_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Johansson_2013_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clearance]` | 3.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 3.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 1.16 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral bioavailability]` | 30 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral bioavailability]` |  | 30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag]` | 0.447 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v csf]` | 0.15 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | eflornithine hydrochloride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | L-eflornithine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Johansson_2013:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Boberg_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Boberg_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Boberg_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.36 | ['Johansson_2013:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.202 L/h | ['Johansson_2013:abstract'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.15 L | ['Boberg_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beflornithine%5D%20Eflornithine_Johansson2013_reference&body=Drug%3A%20eflornithine%0ARecord%3A%20Eflornithine_Johansson2013_reference%0APaper%3A%20Johansson_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eflornithine/Eflornithine_Johansson2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 08:18 UTC</sub>
