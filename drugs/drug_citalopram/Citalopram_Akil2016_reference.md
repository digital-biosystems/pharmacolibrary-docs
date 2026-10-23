<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Akil_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# citalopram — `Citalopram_Akil2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-05 09:25 UTC) predates the latest extraction (2026-10-06 22:12 UTC); the status shown comes from the current checks. V/F, CL, Vss and add_error have no unit.

<div class="pk-model-meta" hidden drug="citalopram" model-id="Citalopram_Akil2016_reference" status="rejected" stale="true" population="Alzheimer&#39;s disease patients with agitation" measured-compound="R,S-citalopram and R,S-desmethylcitalopram" parameterization="apparent" topology="general_linear"></div>

## Citation
Akil A, Bies RR, Pollock BG, Avramopoulos D, Devanand DP, Mintzer JE et al. A population pharmacokinetic model for R- and S-citalopram and desmethylcitalopram in Alzheimer's disease patients with agitation. Journal of pharmacokinetics and pharmacodynamics 43(1):99–109 (2016).
  ·  DOI: [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6)

## Population and dosing

**Population:** Alzheimer's disease patients with agitation · condition Alzheimer's disease with agitation · age group elderly.

**Dosing:** 10, 30 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed citalopram (racemic), measured R,S-citalopram and R,S-desmethylcitalopram.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| V/F, L | V/F | 1390 | L |
| Ka, h−1 | kabs | 1 | h−1 |
| CLRm/F, L/h | CL/F | 24.4 | L/h |
| CLSm/F, L/h | CL/F | 38.8 | L/h |
| theta_q26_category | theta_q26_category | 13 |  |
| theta_q27_em | theta_q27_em | 22.1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V/F, CL, Vss and add_error have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (add_error), so that value has no SI equivalent. Extracted — citalopram: V/F 1.39e+03, CL 24.4, Vss 167, add_error 13.4 additive.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has citalopram (racemic), the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| V/F, L | `Q76` · V/F | 1390 | L | 1.39 | m3 | l | exact (1) | Tab3:row4:col1, Tab3:row16:col1 |
| Ka, h−1 | `Q49` · kabs | 1 | h−1 | 0.0002778 | 1/s | 1/h | exact (1) | Tab3:row5:col1, Tab3:row17:col1 |
| CLRm/F, L/h | `Q27` · CL/F | 24.4 | L/h | 6.778e-06 | m3/s | l/h | exact (1) | Tab3:row6:col1 |
| CLSm/F, L/h | `Q27` · CL/F | 38.8 | L/h | 1.078e-05 | m3/s | l/h | exact (1) | Tab3:row18:col1 |
| theta_q26_category | `Q900` · theta_q26_category | 13 |  |  |  |  |  | Tab3:row2:col1 |
| theta_q27_em | `Q900` · theta_q27_em | 22.1 |  |  |  |  |  | Tab3:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate effect for Q26 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=R,S-citalopram and R,S-desmethylcitalopram
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at route_to_review — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CLRp/F for male, L/h, CLSp/F for EM/RM, L/h
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 8 linked by role; re-tagged parent→R-citalopram ×1, parent→R,S-citalopram and R,S-desmethylcitalopram ×10, parent→R-desmethylcitalopram ×1, parent→S-citalopram ×1, parent→S-desmethylcitalopram ×1
- molar mass: no plausible PubChem entry for 'R-citalopram' ('R-citalopram') — left in mass units
- molar mass: none of 3 PubChem candidate(s) is 'S-desmethylcitalopram' (LLM) — left in mass units
- molar mass: none found for 'R-citalopram' — its concentrations stay mass-only
- molar mass: none found for 'S-desmethylcitalopram' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row2:col2 = '13.8 (13.5–14.1)'
- unparsed cell Tab3:row3:col2 = '10.3 (10.1–10.5)'
- unparsed cell Tab3:row4:col2 = '1605 (1440–2090)'
- unparsed cell Tab3:row6:col2 = '23.5 (23.1–23.7)'
- unparsed cell Tab3:row7:col2 = '28.7 (27.8–30)'
- unparsed cell Tab3:row8:col2 = '107.2 (92.6–121.2)'
- unparsed cell Tab3:row9:col2 = '34.9 (34.5–35.9)'
- unparsed cell Tab3:row10:col2 = '13.6 (13.3–13.9)'
- unparsed cell Tab3:row11:col2 = '20.7 (20.4–21.3)'
- unparsed cell Tab3:row13:col2 = '21.9 (21.2–22.8)'
- unparsed cell Tab3:row14:col2 = '16.7 (15.9–17.2)'
- unparsed cell Tab3:row15:col2 = '17 (16.1–17.6)'
- unparsed cell Tab3:row16:col2 = '1310 (1130–1420)'
- unparsed cell Tab3:row18:col2 = '38.9 (38.4–39.2)'
- unparsed cell Tab3:row19:col2 = '36.7 (35.8–38.5)'
- unparsed cell Tab3:row20:col2 = '62.3 (59.5–68.9)'
- unparsed cell Tab3:row21:col2 = '67 (54–82.7)'
- unparsed cell Tab3:row22:col2 = '20.1 (19.4–20.6)'
- unparsed cell Tab3:row23:col2 = '21.6 (21–22.1)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q26_category]` | 13 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_category]` |  | 13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 1390 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 1390 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | citalopram (racemic) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | R,S-citalopram and R,S-desmethylcitalopram | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab3:row18:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row5:col1', 'Tab3:row17:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab3:row4:col1', 'Tab3:row16:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLRm (formation clearance)', 'CLSm (formation clearance)'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.4 L/h | ['Tab3:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 38.8 L/h | ['Tab3:row18:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.39e+03 L | ['Tab3:row4:col1', 'Tab3:row16:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitalopram%5D%20Citalopram_Akil2016_reference&body=Drug%3A%20citalopram%0ARecord%3A%20Citalopram_Akil2016_reference%0APaper%3A%20Akil_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_citalopram/Citalopram_Akil2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:12 UTC</sub>
