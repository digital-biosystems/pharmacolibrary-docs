<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Akil_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# citalopram — `Citalopram_Akil2016_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.385), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V/F, CL, Vss and add_error have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (add_error), so that value has no SI equivalent. Extracted — citalopram: V/F 1.39e+03, CL 24.4, Vss 167, add_error 13.4 additive.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has citalopram (racemic), the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:25:22.205824+00:00) predates the upstream re-run (2026-10-06 22:12:18.134487+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `citalopram (racemic)`, measured `R,S-citalopram and R,S-desmethylcitalopram`.

## Citation
Akil A et al., A population pharmacokinetic model for…, Journal of pharmacokinetics… (2016)
  ·  DOI: [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6)

<div class="pk-model-meta" hidden drug="citalopram" model-id="Citalopram_Akil2016_reference" status="rejected" stale="true" population="Alzheimer&#39;s disease patients with agitation" measured-compound="R,S-citalopram and R,S-desmethylcitalopram" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V/F, L | `Q76` · V/F | 1390 | L | 1.3900000000000001 | [l] | not captured | exact (1.0) | Tab3:row4:col1, Tab3:row16:col1 | — | not captured |
| Ka, h−1 | `Q49` · kabs | 1 | h−1 | 0.0002777777777777778 | [1] / [h] | not captured | exact (1.0) | Tab3:row5:col1, Tab3:row17:col1 | — | not captured |
| CLRm/F, L/h | `Q27` · CL/F | 24.4 | L/h | 6.777777777777777e-06 | [l] / [h] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| CLSm/F, L/h | `Q27` · CL/F | 38.8 | L/h | 1.0777777777777778e-05 | [l] / [h] | not captured | exact (1.0) | Tab3:row18:col1 | — | not captured |
| theta_q26_category | `Q900` · theta_q26_category | 13 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row2:col1 | — | not captured |
| theta_q27_em | `Q900` · theta_q27_em | 22.1 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row13:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.385 (5/13 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>20 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q26_category]` | 13 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q27_category]` | not captured | 13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 1390 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 1390 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | citalopram (racemic) | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | R,S-citalopram and R,S-desmethylcitalopram | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl rm /f]` | 24.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[r]` | 13.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_category]` | not captured | 13 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_em]` | not captured | 22.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_im]` | not captured | 16.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q27_rm]` | not captured | 24.4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f].value` | 1390 | 1830 | mismatch |
| `gpt-oss:120b` | `parameters[x clm , %]` | not captured | 30.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[x clp , %]` | not captured | 26.38 | only_one_extracted |
| `gpt-oss:120b` | `parameters[x v , %].parameter_id` | Q65 | Q61 | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | R- and S-citalopram and desmethylcitalopram | citalopram | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row18:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row17:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row16:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CLRm (formation clearance)', 'CLSm (formation clearance)'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 24.4 L/h | not captured | not captured | ['Tab3:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 38.8 L/h | not captured | not captured | ['Tab3:row18:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.39e+03 L | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row16:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_citalopram/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Akil_2016` / `Akil_2016::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:12 UTC</sub>
