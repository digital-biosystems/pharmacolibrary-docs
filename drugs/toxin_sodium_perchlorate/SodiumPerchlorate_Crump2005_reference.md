<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Sodium perchlorate&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/&quot;},{&quot;label&quot;:&quot;Crump_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumPerchlorate_Kotzerke1998_reference&quot;,&quot;label&quot;:&quot;Kotzerke_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Kotzerke1998_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumPerchlorate_Yu2002_reference&quot;,&quot;label&quot;:&quot;Yu_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Yu2002_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumPerchlorate_Eder2020_reference&quot;,&quot;label&quot;:&quot;Eder_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Eder2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium perchlorate — `SodiumPerchlorate_Crump2005_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record lacks essential kinetic parameters like clearance or volume for sodium perchlorate, and contains a non-convertible unit (mg/day) for a binding capacity parameter.

<div class="pk-model-meta" hidden drug="Sodium perchlorate" model-id="SodiumPerchlorate_Crump2005_reference" status="rejected" stale="false" population="clinical study of volunteers exposed to perchlorate" measured-compound="perchlorate" parameterization="mechanistic" topology="1C"></div>

## Citation
Crump KS, Gibbs JP. Benchmark calculations for perchlorate from three human cohorts. Environmental health perspectives 113(8):1001–1008 (2005).
  ·  DOI: [10.1289/ehp.7814](https://doi.org/10.1289/ehp.7814)

## Population and dosing

**Population:** clinical study of volunteers exposed to perchlorate · condition healthy · age group adult.

**Dosing:** 0.007, 0.02, 0.1, 0.5 mg/kg-day, oral, multiple, every 6 h.

**Dosed compound ≠ measured compound:** dosed Sodium perchlorate, measured perchlorate.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| P (0) | Q | 0.025 | L/h |
| BMR | Bmax | 0.05 | mg/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record lacks essential kinetic parameters like clearance or volume for sodium perchlorate, and contains a non-convertible unit (mg/day) for a binding capacity parameter.**

The model for sodium perchlorate is missing standard pharmacokinetic parameters such as half-life, rate constants, volume, or clearance, characterizing it as an exposure/outcome paper rather than a kinetic model. Additionally, the parameter Bmax (0.05) uses the unit mg/day, which is not convertible to SI units in the review system. Extracted — sodium perchlorate: Q 0.025 L/h, Bmax 0.05 mg/day.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| P (0) | `Q30` · Q | 0.025 | L/h | 6.944e-09 | m3/s | L/h | llm (0.6) | t1-ehp0113-001001:row2:col1, t1-ehp0113-001001:row3:col1, t1-ehp0113-001001:row4:col1, t1-ehp0113-001001:row6:col1, t1-ehp0113-001001:row9:col1, t1-ehp0113-001001:row10:col1, t1-ehp0113-001001:row13:col1, Crump_2005_table_2:row1:col1, Crump_2005_table_2:row4:col1 |
| BMR | `Q332` · Bmax | 0.05 | mg/day |  |  | mg/d | llm (0.6) | t1-ehp0113-001001:row2:col2, t1-ehp0113-001001:row3:col2, t1-ehp0113-001001:row6:col2, t1-ehp0113-001001:row9:col2, t1-ehp0113-001001:row10:col2, t1-ehp0113-001001:row13:col2, Crump_2005_table_2:row1:col2, Crump_2005_table_2:row4:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'fti' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'P (0)'; source reconciliation required
- table representations disagree for 'BMR'; source reconciliation required
- table representations disagree for 'Q'; source reconciliation required
- table representations disagree for 'BMD'; source reconciliation required
- table representations disagree for 'BMDL'; source reconciliation required
- table representations disagree for 'BMDL Ka'; source reconciliation required
- dropped duplicate Q30 ('Q', value '0.52') — already have one for this compound
- dropped unlinked row (NIL): 'BMD' — extend the ontology if this is a real PK parameter (source ['t1-ehp0113-001001:row2:col4', 't1-ehp0113-001001:row3:col4', 't1-ehp0113-001001:row4:col4', 't1-ehp0113-001001:row9:col4', 't1-ehp0113-001001:row10:col4', 't1-ehp0113-001001:row11:col4'])
- dropped unlinked row (NIL): 'BMDL' — extend the ontology if this is a real PK parameter (source ['t1-ehp0113-001001:row2:col5', 't1-ehp0113-001001:row3:col5', 't1-ehp0113-001001:row4:col5', 't1-ehp0113-001001:row6:col5', 't1-ehp0113-001001:row7:col5', 't1-ehp0113-001001:row9:col5', 't1-ehp0113-001001:row10:col5', 't1-ehp0113-001001:row11:col5', 't1-ehp0113-001001:row13:col5', 't1-ehp0113-001001:row14:col5', 'Crump_2005_table_2:row1:col5', 'Crump_2005_table_2:row2:col5', 'Crump_2005_table_2:row4:col5', 'Crump_2005_table_2:row5:col5'])
- dropped unlinked row (NIL): 'BMDL Ka' — extend the ontology if this is a real PK parameter (source ['t1-ehp0113-001001:row2:col6', 't1-ehp0113-001001:row3:col6', 't1-ehp0113-001001:row4:col6', 't1-ehp0113-001001:row6:col6', 't1-ehp0113-001001:row7:col6', 't1-ehp0113-001001:row9:col6', 't1-ehp0113-001001:row10:col6', 't1-ehp0113-001001:row11:col6', 't1-ehp0113-001001:row13:col6', 't1-ehp0113-001001:row14:col6', 'Crump_2005_table_2:row1:col6', 'Crump_2005_table_2:row2:col6', 'Crump_2005_table_2:row4:col6', 'Crump_2005_table_2:row5:col6'])
- implicit units: 'P (0)' → L/h (from the popPK convention: 'The paper does not state units for intercompartmental clearances. Priority 2 rules assign L/h for clearances and interco')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=perchlorate
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record measures 'perchlorate', not sodium_perchlorate — the review values are the parent's

**Extraction notes:**
- transposed table t1-ehp0113-001001: logical view retains original source coordinates
- table t1-ehp0113-001001: representations disagree; selected evidence retained, not merged
- transposed table Crump_2005_table_2: logical view retains original source coordinates
- companion parameter table 2 transcribed (26 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['t1-ehp0113-001001:row2:col1', 't1-ehp0113-001001:row3:col1', 't1-ehp0113-001001:row4:col1', 't1-ehp0113-001001:row6:col1', 't1-ehp0113-001001:row9:col1', 't1-ehp0113-001001:row10:col1', 't1-ehp0113-001001:row13:col1', 'Crump_2005_table_2:row1:col1', 'Crump_2005_table_2:row4:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_perchlorate%5D%20SodiumPerchlorate_Crump2005_reference&body=Drug%3A%20sodium_perchlorate%0ARecord%3A%20SodiumPerchlorate_Crump2005_reference%0APaper%3A%20Crump_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_perchlorate/SodiumPerchlorate_Crump2005_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 07:52 UTC</sub>
