<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Fenofibrate&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/&quot;},{&quot;label&quot;:&quot;Back_2018 \u00b7 estimates_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fenofibrate_Lee2026_fdc_1&quot;,&quot;label&quot;:&quot;Lee_2026_fdc_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_fdc_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Lee2026_fdc_2&quot;,&quot;label&quot;:&quot;Lee_2026_fdc_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_fdc_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Lee2026_loose_combination_1&quot;,&quot;label&quot;:&quot;Lee_2026_loose_combination_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_loose_combination_1.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Lee2026_loose_combination_2&quot;,&quot;label&quot;:&quot;Lee_2026_loose_combination_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Lee2026_loose_combination_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Najib2002_reference&quot;,&quot;label&quot;:&quot;Najib_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Najib2002_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fenofibrate_Younis2025_reference&quot;,&quot;label&quot;:&quot;Younis_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_fenofibrate/Fenofibrate_Younis2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Fenofibrate — `Fenofibrate_Back2018_estimates_rse`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The transit rate constant for fenofibric acid is recorded with time units instead of inverse time, preventing valid unit conversion and leading to rejection.

<div class="pk-model-meta" hidden drug="Fenofibrate" model-id="Fenofibrate_Back2018_estimates_rse" status="rejected" stale="false" population="healthy volunteers" measured-compound="Fenofibric acid" parameterization="apparent" topology="retention"></div>

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
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| kg (hr−1) | kabs | 0.0412 | hr−1 | 8.5 |
| km&a (hr− 1) | kfm | 0.198 | hr− 1 | 28.9 |
| Vc/F (L) | V1/F | 12.9 | L | 27.8 |
| kg’ (hr−1) | kel | 0.00971 | hr−1 | 58.9 |
| E bile | E | 0.0239 | L | 22.2 |
| MTIME2 (hr) | MTT | 6.94 | hr | 12.4 |
| E food | ktr | 0.617 | hr | 40.4 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The transit rate constant for fenofibric acid is recorded with time units instead of inverse time, preventing valid unit conversion and leading to rejection.**

The parameter ktr, defined as a first-order transit rate constant, is listed with the value 0.617 and the unit hr. This time dimension contradicts the required inverse time dimension for a rate constant. The unit hour could not be converted to standard units, so the parameter lacked a valid converted value for model construction. Extracted — fenofibrate: kabs 0.0412 hr−1, kfm 0.198 hr− 1, V1/F 12.9 L, kel 0.00971 hr−1, E 0.0239 L, MTT 6.94 hr, ktr 0.617 hr.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| kg (hr−1) | `Q49` · kabs | 0.0412 | hr−1 | 1.144e-05 | 1/s | 1/h | 8.5 | llm (0.6) | Tab3:row1:col1 |
| km&a (hr− 1) | `Q305` · kfm | 0.198 | hr− 1 | 5.5e-05 | 1/s | 1/h | 28.9 | exact (1) | Tab3:row2:col1 |
| Vc/F (L) | `Q290` · V1/F | 12.9 | L | 0.0129 | m3 | l | 27.8 | exact (1) | Tab3:row4:col1 |
| kg’ (hr−1) | `Q47` · kel | 0.00971 | hr−1 | 2.697e-06 | 1/s | 1/h | 58.9 | llm (0.6) | Tab3:row7:col1 |
| E bile | `Q38` · E | 0.0239 | L |  |  | l | 22.2 | llm (0.6) | Tab3:row9:col1 |
| MTIME2 (hr) | `Q81` · MTT | 6.94 | hr | 2.498e+04 | s | h | 12.4 | llm (0.6) | Tab3:row11:col1 |
| E food | `Q306` · ktr | 0.617 | hr |  |  | h | 40.4 | pd_twin_relink (0.6) | Tab3:row12:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error (% RSE)' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Vstomach (L)' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1'])
- dropped PD-category row 'kout (hr−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab3:row8:col1'])
- relinked 'E food' Q338 → Q306 — same-named PK parameter preferred over the PD code in a popPK record
- unit_dimension_mismatch: 'E food' → Q306 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'E Vc1' — extend the ontology if this is a real PK parameter (source ['Tab3:row13:col1'])
- dropped duplicate Q38 ('E Vc2', value '-0.461') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Fenofibric acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'estimates (% rse)' subgroup of Back_2018 (paper reports 4 populations: estimates (% rse), group 1, group 2, group 3)
- row roles (LLM): model_class=other; 15/15 row label(s) assigned, 6 linked by role
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

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
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab3:row4:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Tab3:row2:col1'] |
| C5_dimension_Q306 | fail | 1 / [time] | hr ([time]) | ['Tab3:row12:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab3:row7:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab3:row1:col1'] |
| C5_dimension_Q81 | pass | [time] |  | ['Tab3:row11:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 12.9 L | ['Tab3:row4:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfenofibrate%5D%20Fenofibrate_Back2018_estimates_rse&body=Drug%3A%20fenofibrate%0ARecord%3A%20Fenofibrate_Back2018_estimates_rse%0APaper%3A%20Back_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_fenofibrate/Fenofibrate_Back2018_estimates_rse%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 17:52 UTC</sub>
