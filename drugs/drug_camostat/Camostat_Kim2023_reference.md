<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;camostat&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/&quot;},{&quot;label&quot;:&quot;Kim_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Camostat_Kosinsky2022_reference&quot;,&quot;label&quot;:&quot;Kosinsky_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_camostat/Camostat_Kosinsky2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# camostat — `Camostat_Kim2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q61 unit h ([time]) vs [length] ** 3; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="camostat" model-id="Camostat_Kim2023_reference" status="rejected" stale="false" population="healthy adults" measured-compound="GBPA" parameterization="apparent" topology="general_linear"></div>

## Citation
Kim G, Moon HK, Kim T, Yun SH, Yun HY, Hong JH et al. Safety Evaluation and Population Pharmacokinetics of Camostat Mesylate and Its Major Metabolites Using a Phase I Study. Pharmaceutics 15(9) (2023).
  ·  DOI: [10.3390/pharmaceutics15092357](https://doi.org/10.3390/pharmaceutics15092357)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 100, 200, 300 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed camostat mesylate, measured GBPA.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Half-life (h) | t1/2z | 1.012 | h |
| Cmax (ng/mL) | Cmax | 72.68 | ng/mL |
| AUClast (h × ng/mL) | AUClast | 152.3 | h × ng/mL |
| AUCinf (h × ng/mL) | AUC∞ | 156.5 | h × ng/mL |
| CL/F (L/h) | CL/F | 141.7 | L/h |
| Vd (h) | V | 1046 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.188). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q61 unit h ([time]) vs [length] ** 3; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (Cmax, AUClast, AUC∞ and V), so that value has no SI equivalent. None of the extracted parameters is camostat's own; they describe GBA. Extracted — GBA: t1/2z 1.01 h, Cmax 72.7 ng/mL, AUClast 152 h × ng/mL, AUC∞ 156 h × ng/mL, CL/F 142 L/h, V 1.05e+03 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has camostat mesylate → gbpa (metabolism); gbpa → gba (metabolism), the second reading camostat mesylate → gbpa (metabolism); camostat mesylate → gba (metabolism); it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Half-life (h) | `Q57` · t1/2z | 1.012 | h | 3643 | s | h | llm (0.6) | pharmaceutics-15-02357-t002:row2:col1, pharmaceutics-15-02357-t002:row2:col2, pharmaceutics-15-02357-t002:row2:col3, pharmaceutics-15-02357-t002:row2:col4, pharmaceutics-15-02357-t002:row2:col5, pharmaceutics-15-02357-t002:row2:col6 |
| Cmax (ng/mL) | `Q32` · Cmax | 72.68 | ng/mL |  |  | ng/ml | exact (1) | pharmaceutics-15-02357-t002:row3:col1, pharmaceutics-15-02357-t002:row3:col2, pharmaceutics-15-02357-t002:row3:col3, pharmaceutics-15-02357-t002:row3:col4, pharmaceutics-15-02357-t002:row3:col5, pharmaceutics-15-02357-t002:row3:col6 |
| AUClast (h × ng/mL) | `Q74` · AUClast | 152.3 | h × ng/mL |  |  | (h·ng)/ml | exact (1) | pharmaceutics-15-02357-t002:row4:col1, pharmaceutics-15-02357-t002:row4:col2, pharmaceutics-15-02357-t002:row4:col3, pharmaceutics-15-02357-t002:row4:col4, pharmaceutics-15-02357-t002:row4:col5, pharmaceutics-15-02357-t002:row4:col6 |
| AUCinf (h × ng/mL) | `Q17` · AUC∞ | 156.5 | h × ng/mL |  |  | (h·ng)/ml | exact (1) | pharmaceutics-15-02357-t002:row5:col1, pharmaceutics-15-02357-t002:row5:col2, pharmaceutics-15-02357-t002:row5:col3, pharmaceutics-15-02357-t002:row5:col4, pharmaceutics-15-02357-t002:row5:col5, pharmaceutics-15-02357-t002:row5:col6 |
| CL/F (L/h) | `Q27` · CL/F | 141.7 | L/h | 3.936e-05 | m3/s | l/h | exact (1) | pharmaceutics-15-02357-t002:row6:col1, pharmaceutics-15-02357-t002:row6:col2, pharmaceutics-15-02357-t002:row6:col3, pharmaceutics-15-02357-t002:row6:col4, pharmaceutics-15-02357-t002:row6:col5, pharmaceutics-15-02357-t002:row6:col6 |
| Vd (h) | `Q61` · V | 1046 | h |  |  | h | exact (1) | pharmaceutics-15-02357-t002:row7:col1, pharmaceutics-15-02357-t002:row7:col2, pharmaceutics-15-02357-t002:row7:col3, pharmaceutics-15-02357-t002:row7:col4, pharmaceutics-15-02357-t002:row7:col5, pharmaceutics-15-02357-t002:row7:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'gbpa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'gba' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'h × ng/mL' (AUClast)
- unit_dimension_unknown: 'h × ng/mL' (AUC∞)
- unit_dimension_mismatch: 'Vd (h)' → Q61 (unit '[time]' vs ontology '[length] ** 3') — route to review
- implicit units: 'AUClast (h × ng/mL)' — the LLM proposed 'h × ng/mL', whose dimension does not fit Q74; left unset
- implicit units: 'AUCinf (h × ng/mL)' — the LLM proposed 'h × ng/mL', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=GBPA
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 6/6 row label(s) assigned, 0 linked by role; re-tagged GBPA→GBA ×18
- molar mass: none of 1 PubChem candidate(s) is 'GBPA' (LLM) — left in mass units
- molar mass: none found for 'GBPA' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'GBPA', not camostat — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.188 (3/16 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['camostat mesylate', 'gbpa', 'metabolism'], ['gbpa', 'gba', 'metabolism']] | [['camostat mesylate', 'gbpa', 'metabolism'], ['camostat mesylate', 'gba', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[aucinf]` |  | 156.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf].value` | 156.5 | 762.8 | mismatch |
| `gpt-oss-120b` | `parameters[auclast]` |  | 152.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast].value` | 152.3 | 618.2 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 141.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].value` | 141.7 | 718.6 | mismatch |
| `gpt-oss-120b` | `parameters[cmax]` |  | 72.68 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax].value` | 72.68 | 175.5 | mismatch |
| `gpt-oss-120b` | `parameters[half-life]` |  | 1.012 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life].value` | 1.012 | 1.942 | mismatch |
| `gpt-oss-120b` | `parameters[vd]` |  | 1046 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd].value` | 1046 | 404.5 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-15-02357-t002:row6:col1', 'pharmaceutics-15-02357-t002:row6:col2', 'pharmaceutics-15-02357-t002:row6:col3', 'pharmaceutics-15-02357-t002:row6:col4', 'pharmaceutics-15-02357-t002:row6:col5', 'pharmaceutics-15-02357-t002:row6:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['pharmaceutics-15-02357-t002:row3:col1', 'pharmaceutics-15-02357-t002:row3:col2', 'pharmaceutics-15-02357-t002:row3:col3', 'pharmaceutics-15-02357-t002:row3:col4', 'pharmaceutics-15-02357-t002:row3:col5', 'pharmaceutics-15-02357-t002:row3:col6'] |
| C5_dimension_Q57 | pass | [time] |  | ['pharmaceutics-15-02357-t002:row2:col1', 'pharmaceutics-15-02357-t002:row2:col2', 'pharmaceutics-15-02357-t002:row2:col3', 'pharmaceutics-15-02357-t002:row2:col4', 'pharmaceutics-15-02357-t002:row2:col5', 'pharmaceutics-15-02357-t002:row2:col6'] |
| C5_dimension_Q61 | fail | [length] ** 3 | h ([time]) | ['pharmaceutics-15-02357-t002:row7:col1', 'pharmaceutics-15-02357-t002:row7:col2', 'pharmaceutics-15-02357-t002:row7:col3', 'pharmaceutics-15-02357-t002:row7:col4', 'pharmaceutics-15-02357-t002:row7:col5', 'pharmaceutics-15-02357-t002:row7:col6'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | h × ng/mL | ['pharmaceutics-15-02357-t002:row5:col1', 'pharmaceutics-15-02357-t002:row5:col2', 'pharmaceutics-15-02357-t002:row5:col3', 'pharmaceutics-15-02357-t002:row5:col4', 'pharmaceutics-15-02357-t002:row5:col5', 'pharmaceutics-15-02357-t002:row5:col6'] |
| C5_unit_missing_Q74 | fail | [mass] * [time] / [length] ** 3 | h × ng/mL | ['pharmaceutics-15-02357-t002:row4:col1', 'pharmaceutics-15-02357-t002:row4:col2', 'pharmaceutics-15-02357-t002:row4:col3', 'pharmaceutics-15-02357-t002:row4:col4', 'pharmaceutics-15-02357-t002:row4:col5', 'pharmaceutics-15-02357-t002:row4:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'CLmet'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 142 L/h | ['pharmaceutics-15-02357-t002:row6:col1', 'pharmaceutics-15-02357-t002:row6:col2', 'pharmaceutics-15-02357-t002:row6:col3', 'pharmaceutics-15-02357-t002:row6:col4', 'pharmaceutics-15-02357-t002:row6:col5', 'pharmaceutics-15-02357-t002:row6:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcamostat%5D%20Camostat_Kim2023_reference&body=Drug%3A%20camostat%0ARecord%3A%20Camostat_Kim2023_reference%0APaper%3A%20Kim_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_camostat/Camostat_Kim2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-05 16:45 UTC</sub>
