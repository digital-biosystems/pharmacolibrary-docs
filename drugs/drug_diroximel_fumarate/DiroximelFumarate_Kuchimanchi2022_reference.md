<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;diroximel fumarate&quot;,&quot;href&quot;:&quot;drugs/drug_diroximel_fumarate/&quot;},{&quot;label&quot;:&quot;Kuchimanchi_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diroximel fumarate — `DiroximelFumarate_Kuchimanchi2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because 2-hydroxyethyl succinimide has no path from the dose.

<div class="pk-model-meta" hidden drug="diroximel fumarate" model-id="DiroximelFumarate_Kuchimanchi2022_reference" status="rejected" stale="false" population="healthy participants and patients with multiple sclerosis" measured-compound="monomethyl fumarate" parameterization="apparent" topology="general_linear"></div>

## Citation
Kuchimanchi M, Bockbrader H, Dolphin N, Epling D, Quinlan L, Chapel S et al. Development of a Population Pharmacokinetic Model for the Diroximel Fumarate Metabolites Monomethyl Fumarate and 2-Hydroxyethyl Succinimide Following Oral Administration of Diroximel Fumarate in Healthy Participants and Patients with Multiple Sclerosis. Neurology and therapy 11(1):353–371 (2022).
  ·  DOI: [10.1007/s40120-021-00316-6](https://doi.org/10.1007/s40120-021-00316-6)

## Population and dosing

**Population:** healthy participants and patients with multiple sclerosis · condition multiple sclerosis · age group adult · n = # The paper states 389 participants, but the final analysis dataset likely has a different number (implied by 341 HV + 48 MS = 389 total mentioned, but 'final analysis dataset' has samples, not explicitly stated subject count for final model, though 389 is the total included). I will use 389 as it's the total participants across studies..

**Dosing:** 49, 980 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed diroximel fumarate, measured monomethyl fumarate.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| 1 | CLm/F | 13.5 | L/h | 3.1 |
| 2 | V | 30.4 | L | 1.3 |
| 3 | kabs | 5.04 | 1/h | 2.5 |
| 6 | CL | 3.24 | L/h | 2.4 |
| 7 | kabs | 1.49 | 1/h | 1.2 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because 2-hydroxyethyl succinimide has no path from the dose.**

The model structure lists 2-hydroxyethyl succinimide as a metabolite of diroximel fumarate but assigns it zero compartments. This configuration leaves the metabolite unlinked, making it an orphan that cannot be reached from the administered dose. Extracted — monomethyl fumarate: CLm/F 13.5 L/h, V 30.4 L, kabs 5.04 1/h; 2-hydroxyethyl succinimide: CL 3.24 L/h, kabs 1.49 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has diroximel fumarate, the second reading diroximel_fumarate; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `Q351` · CLm/F | 13.5 | L/h | 3.75e-06 | m3/s | L/h | 3.1 | exact (1) | Tab2:row1:col2, Tab2:row1:col3, Tab2:row1:col4, Tab2:row1:col5 |
| 2 | `Q61` · V | 30.4 | L | 0.0304 | m3 | L | 1.3 | exact (1) | Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4, Tab2:row2:col5 |
| 3 | `Q49` · kabs | 5.04 | 1/h | 0.0014 | 1/s | 1/h | 2.5 | exact (1) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 |
| 6 | `Q22` · CL | 3.24 | L/h | 9e-07 | m3/s | L/h | 2.4 | exact (1) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5 |
| 7 | `Q49` · kabs | 1.49 | 1/h | 0.0004139 | 1/s | 1/h | 1.2 | exact (1) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col4, Tab2:row5:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: '4' routed out of structural estimates ('Residual variability')
- table section residual_error: '5' routed out of structural estimates ('Residual variability')
- table section residual_error: '29' routed out of structural estimates ('Residual variability')
- table section residual_error: '30' routed out of structural estimates ('Residual variability')
- table section residual_error: '31' routed out of structural estimates ('Residual variability')
- table section residual_error: '32' routed out of structural estimates ('Residual variability')
- table section residual_error: '33' routed out of structural estimates ('Residual variability')
- table section residual_error: '34' routed out of structural estimates ('Residual variability')
- table section iiv: '1' routed out of structural estimates ('IIV')
- table section iiv: '2' routed out of structural estimates ('IIV')
- table section iiv: '4' routed out of structural estimates ('IIV')
- table section iiv: '5' routed out of structural estimates ('IIV')
- table section iiv: '8' routed out of structural estimates ('IIV')
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col5'])
- dropped unlinked row (NIL): '15' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col4', 'Tab2:row13:col5'])
- dropped unlinked row (NIL): '17' — extend the ontology if this is a real PK parameter (source ['Tab2:row15:col2'])
- dropped unlinked row (NIL): '23' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col4', 'Tab2:row21:col5'])
- dropped unlinked row (NIL): '24' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- dropped unlinked row (NIL): '25' — extend the ontology if this is a real PK parameter (source ['Tab2:row23:col2'])
- dropped unlinked row (NIL): '26' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col2', 'Tab2:row24:col3', 'Tab2:row24:col4', 'Tab2:row24:col5'])
- dropped unlinked row (NIL): '27' — extend the ontology if this is a real PK parameter (source ['Tab2:row25:col2', 'Tab2:row25:col3', 'Tab2:row25:col4', 'Tab2:row25:col5'])
- dropped unlinked row (NIL): '28' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2', 'Tab2:row26:col3', 'Tab2:row26:col4', 'Tab2:row26:col5'])
- dropped value-less row: '35'
- dropped value-less row: '36'
- implicit units: '1' → L/h (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF), volume of distribution, and absorption rate constant (Ka) were 13.5 L")
- implicit units: '2' → L (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF), volume of distribution, and absorption rate constant (Ka) were 13.5 L")
- implicit units: '3' → 1/h (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF), volume of distribution, and absorption rate constant (Ka) were 13.5 L")
- implicit units: '6' → L/h (from the paper text: "The text states: 'Estimated MMF clearance (CLMMF)... were 13.5 L/h...'. Parameter 4 (3.24) is a clearance parameter (lab")
- implicit units: '7' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (kabs). The text provides the unit for the MMF absorption rate constant as ')
- metabolite monomethyl fumarate: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: '2' Q63→Q61 for monomethyl fumarate — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=monomethyl fumarate
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 11 per-group rows of monomethyl fumarate covariate_effect but 0 reference group(s) — kept as printed
- row roles: 3 per-group rows of 2-hydroxyethyl succinimide covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 26/26 row label(s) assigned, 30 linked by role; re-tagged parent→monomethyl fumarate ×79, parent→2-hydroxyethyl succinimide ×24

**Extraction notes:**
- unparsed cell Tab2:row3:col6 = 'h−1'
- unparsed cell Tab2:row4:col6 = 'h−1'
- unparsed cell Tab2:row6:col1 = 'F4'
- unparsed cell Tab2:row7:col1 = 'F1'
- unparsed cell Tab2:row15:col1 = 'LOW on F1'
- unparsed cell Tab2:row22:col1 = 'HES ALAG4 PM dosing'
- unparsed cell Tab2:row23:col1 = 'HES ALAG4 LOW'
- unparsed cell Tab2:row27:col2 = '− 0.284'
- unparsed cell Tab2:row27:col5 = '(− 0.363 to − 0.204)'
- unparsed cell Tab2:row28:col2 = '− 0.122'
- unparsed cell Tab2:row28:col5 = '(− 0.180 to − 0.0642)'
- unparsed cell Tab2:row39:col1 = 'ETA1–CLMMF'
- unparsed cell Tab2:row40:col1 = 'ETA2–Vc'
- unparsed cell Tab2:row41:col1 = 'ETA4–CLHES'
- unparsed cell Tab2:row42:col1 = 'ETA4–CLHES'
- unparsed cell Tab2:row43:col1 = 'ETA8–KaHES'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.0 (0/17 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['diroximel fumarate', 'monomethyl fumarate', 'metabolism'], ['diroximel fumarate', '2-hydroxyethyl succinimide', 'metabolism']] | [['diroximel_fumarate', 'monomethyl_fumarate', 'metabolism'], ['diroximel_fumarate', '2-hydroxyethyl_succinimide', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[15]` |  | 0.843 | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` | 13.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[1]` |  | 13.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` |  | 30.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[2]` | 30.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` | 5.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[3]` |  | 5.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[6]` | 3.24 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[6]` |  | 3.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` | 1.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` |  | 1.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[8]` |  | 0.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[9]` |  | 0.162 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | diroximel fumarate | diroximel_fumarate | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | monomethyl fumarate | monomethyl_fumarate, 2-hydroxyethyl succinimide | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col4', 'Tab2:row1:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.24 L/h | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 30.4 L | ['Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4', 'Tab2:row2:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiroximel_fumarate%5D%20DiroximelFumarate_Kuchimanchi2022_reference&body=Drug%3A%20diroximel_fumarate%0ARecord%3A%20DiroximelFumarate_Kuchimanchi2022_reference%0APaper%3A%20Kuchimanchi_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diroximel_fumarate/DiroximelFumarate_Kuchimanchi2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:49 UTC</sub>
