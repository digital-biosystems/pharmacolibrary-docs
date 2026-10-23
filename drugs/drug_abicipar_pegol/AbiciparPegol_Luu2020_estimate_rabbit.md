<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01L&quot;,&quot;href&quot;:&quot;atc/S01L.md&quot;},{&quot;label&quot;:&quot;abicipar pegol&quot;,&quot;href&quot;:&quot;drugs/drug_abicipar_pegol/&quot;},{&quot;label&quot;:&quot;Luu_2020 \u00b7 estimate_rabbit&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abicipar pegol — `AbiciparPegol_Luu2020_estimate_rabbit`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> The peripheral elimination rate constant for abicipar pegol was extracted as 34300 per hour, an implausible magnitude inconsistent with the vitreous volume.

<div class="pk-model-meta" hidden drug="abicipar pegol" model-id="AbiciparPegol_Luu2020_estimate_rabbit" status="rejected" stale="false" population="patients with diabetic macular edema and neovascular age-related macular degeneration" measured-compound="abicipar_pegol" parameterization="mechanistic" topology="1C"></div>

## Citation
Luu KT, Seal JR, Attar M. A Mechanistic and Translational Pharmacokinetic-Pharmacodynamic Model of Abicipar Pegol and Vascular Endothelial Growth Factor Inhibition. The Journal of pharmacology and experimental therapeutics 373(2):184–192 (2020).
  ·  DOI: [10.1124/jpet.119.263178](https://doi.org/10.1124/jpet.119.263178)

## Population and dosing

**Population:** patients with diabetic macular edema and neovascular age-related macular degeneration · condition diabetic macular edema, neovascular age-related macular degeneration · age group adult.

**Dosing:** 0.4, 2 mg, intravitreal, single.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k_RC | kout_peripheral | 34300 | 1/h |
| k_INT | kint | 404 | 1/h |
| Vitreous volume | V | 4.4 | ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.273). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The peripheral elimination rate constant for abicipar pegol was extracted as 34300 per hour, an implausible magnitude inconsistent with the vitreous volume.**

The record lists a first-order rate constant for irreversible elimination from the peripheral compartment at 34300 1/h. This value is orders of magnitude larger than physiological expectations for a molecule with a vitreous volume of 4.4 ml. The finding identifies this as a clearance or volume extraction error due to implausible magnitude. Extracted — abicipar pegol: kout_peripheral 3.43e+04 1/h, kint 404 1/h, V 4.4 ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abicipar_pegol, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k_RC | `Q346` · kout_peripheral | 34300 | 1/h | 9.528 | 1/s | 1/h | llm (0.6) | Luu_2020_table_2:row3:col2 |
| k_INT | `Q334` · kint | 404 | 1/h | 0.1122 | 1/s | 1/h | exact (1) | Luu_2020_table_2:row11:col2 |
| Vitreous volume | `Q61` · V | 4.4 | ml | 4.4e-06 | m3 | L | review_gapfill (0.7) | Luu_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'k_VR' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row0:col2'])
- dropped unlinked row (NIL): 'k_VA' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row1:col2'])
- dropped unlinked row (NIL): 'k_RV' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row2:col2'])
- unit_dimension_unknown: 'Rabbit' (kout_peripheral)
- dropped unlinked row (NIL): 'k_RS' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row4:col2'])
- dropped unlinked row (NIL): 'k_CR' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row5:col2'])
- dropped unlinked row (NIL): 'k_CS' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row6:col2'])
- dropped unlinked row (NIL): 'k_AS' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row7:col2'])
- dropped unlinked row (NIL): 'k_SC' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row8:col2'])
- dropped unlinked row (NIL): 'k_S' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row9:col2'])
- dropped unlinked row (NIL): 'V_S' — extend the ontology if this is a real PK parameter (source ['Luu_2020_table_2:row10:col2'])
- unit_dimension_unknown: 'Rabbit' (kint)
- implicit units: 'k_RC' → 1/h (from the popPK convention: 'First-order rate constants in population PK models are conventionally expressed in reciprocal time (1/h). The paper desc')
- implicit units: 'k_INT' → 1/h (from the popPK convention: 'k_INT is described as a first-order rate constant for internalization/elimination of the drug-receptor complex. By conve')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abicipar_pegol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- amount-only peripheral compartment: a peripheral output rate (kout_peripheral) is present with no reported volume — model its AMOUNT; concentration is not identifiable without an assumed volume
- population split: 'estimate (rabbit)' subgroup of Luu_2020 (paper reports 2 populations: estimate (human), estimate (rabbit))
- molar mass: none found for 'abicipar_pegol' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Luu_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Luu_2020
- companion parameter table 2 transcribed (35 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.273 (3/11 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss-120b` | `parameters[k_as]` |  | 0.253 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_cr]` |  | 30400 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k_rc].parameter_id` | Q346 | Q329 | mismatch |
| `gpt-oss-120b` | `parameters[v_s]` |  | 2530 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vitreous volume]` | 4.4 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | abicipar_pegol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | abicipar_pegol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q334 | pass | 1 / [time] |  | ['Luu_2020_table_2:row11:col2'] |
| C5_dimension_Q346 | pass | 1 / [time] |  | ['Luu_2020_table_2:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Luu_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0044 L | ['Luu_2020:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babicipar_pegol%5D%20AbiciparPegol_Luu2020_estimate_rabbit&body=Drug%3A%20abicipar_pegol%0ARecord%3A%20AbiciparPegol_Luu2020_estimate_rabbit%0APaper%3A%20Luu_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abicipar_pegol/AbiciparPegol_Luu2020_estimate_rabbit%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:14 UTC</sub>
