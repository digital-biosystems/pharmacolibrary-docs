<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fenofibrate&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/&quot;},{&quot;label&quot;:&quot;Back_2018 \u00b7 group_3&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fenofibrate_Lee2026_fdc_1&quot;,&quot;label&quot;:&quot;Lee_2026_fdc_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_fdc_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Lee2026_fdc_2&quot;,&quot;label&quot;:&quot;Lee_2026_fdc_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_fdc_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Lee2026_loose_combination_1&quot;,&quot;label&quot;:&quot;Lee_2026_loose_combination_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_loose_combination_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Lee2026_loose_combination_2&quot;,&quot;label&quot;:&quot;Lee_2026_loose_combination_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_loose_combination_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Najib2002_reference&quot;,&quot;label&quot;:&quot;Najib_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Najib2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Younis2025_reference&quot;,&quot;label&quot;:&quot;Younis_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Younis2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fenofibrate — `Fenofibrate_Back2018_group_3`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because Fenofibric acid units imply invalid squared mass dimensions, and the system cannot convert these microgram-based units to SI values.

<div class="pk-model-meta" hidden drug="Fenofibrate" model-id="Fenofibrate_Back2018_group_3" status="rejected" stale="false" population="healthy volunteers" measured-compound="Fenofibric acid" parameterization="apparent" topology="retention"></div>

## Citation
Back HM, Song B, Pradhan S, Chae JW, Han N, Kang W et al. A mechanism-based pharmacokinetic model of fenofibrate for explaining increased drug absorption after food consumption. BMC pharmacology & toxicology 19(1):4 (2018).
  ·  DOI: [10.1186/s40360-018-0194-5](https://doi.org/10.1186/s40360-018-0194-5)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = 24.

**Dosing:** 250 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Fenofibrate, measured Fenofibric acid.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (μ g/mL) | Cmax | 4.83 | μ g/mL |
| AUC168➔192 (μ g∙hr./mL) | AUC | 483.63 | μ g∙hr./mL |
| Vc/F | V1/F | 12.9 | L |
| kel | kel | 0.27 | h− 1 |
| drug release was delayed by almost 8 hours | tlag | 8.0 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because Fenofibric acid units imply invalid squared mass dimensions, and the system cannot convert these microgram-based units to SI values.**

Cmax and AUC for Fenofibric acid are reported in μg/mL and μg·hr./mL, which introduce an erroneous squared mass dimension. Furthermore, these specific microgram-based units cannot be translated into standard international units for the model. Extracted — fenofibrate: Cmax 4.83 μ g/mL, AUC 484 μ g∙hr./mL, V1/F 12.9 L, kel 0.27 h− 1, tlag 8 hours.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (μ g/mL) | `Q32` · Cmax | 4.83 | μ g/mL |  |  | (g·u)/ml | exact (1) | Back_2018_table_4:row1:col3 |
| AUC168➔192 (μ g∙hr./mL) | `Q88` · AUC | 483.63 | μ g∙hr./mL |  |  | (h·g·u)/ml | llm (0.6) | Back_2018_table_4:row2:col3 |
| Vc/F | `Q290` · V1/F | 12.9 | L | 0.0129 | m3 | L | exact (1) | Back_2018:other_prose |
| kel | `Q47` · kel | 0.27 | h− 1 | 7.5e-05 | 1/s | 1/h | exact (1) | Back_2018:other_prose |
| drug release was delayed by almost 8 hours | `Q83` · tlag | 8.0 | hours | 2.88e+04 | s | h | review_gapfill (0.7) | Li_2019_2:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Cmax (μ g/mL)' → Q32 (unit '[mass] ** 2 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUC168➔192 (μ g∙hr./mL)' → Q88 (unit '[mass] ** 2 * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- salvaged Q290 ('Vc/F'=12.9) from results prose — parameter table was unreadable
- salvaged Q47 ('kel'=0.27) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Fenofibric acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'group 3' subgroup of Back_2018 (paper reports 4 populations: estimates (% rse), group 1, group 2, group 3)
- row roles (LLM): model_class=other; 15/15 row label(s) assigned, 6 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Li_2019_2's review values (primary lacked it)

**Extraction notes:**
- table Tab3: conflicting_units
- table Tab3: unparsed_numeric_cell
- table Back_2018_table_1: no_numeric_grid
- table Back_2018_table_1: ragged_grid
- table Back_2018_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (0 record(s))
- table Back_2018_table_2: no_numeric_grid
- table Back_2018_table_2: ragged_grid
- table Back_2018_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (0 record(s), model stage 'final')
- companion parameter table 4 transcribed (6 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2, 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | μ g/mL ([mass] ** 2 / [length] ** 3) | ['Back_2018_table_4:row1:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Li_2019_2:review'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | μ g∙hr./mL ([mass] ** 2 * [time] / [length] ** 3) | ['Back_2018_table_4:row2:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 12.9 L | ['Back_2018:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfenofibrate%5D%20Fenofibrate_Back2018_group_3&body=Drug%3A%20fenofibrate%0ARecord%3A%20Fenofibrate_Back2018_group_3%0APaper%3A%20Back_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fenofibrate/Fenofibrate_Back2018_group_3%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 17:52 UTC</sub>
