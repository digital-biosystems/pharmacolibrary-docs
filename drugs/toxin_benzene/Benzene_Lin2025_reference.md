<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Benzene&quot;,&quot;href&quot;:&quot;drugs/toxin_benzene/&quot;},{&quot;label&quot;:&quot;Lin_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benzene_Ohtsu2018_reference&quot;,&quot;label&quot;:&quot;Ohtsu_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzene/Benzene_Ohtsu2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benzene_Qu2003v2_reference&quot;,&quot;label&quot;:&quot;Qu_2003_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_benzene/Benzene_Qu2003v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Benzene — `Benzene_Lin2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The clearance (1.16 L/h/kg) and volume of distribution (2.0 mL) for benzene are implausible and likely unit extraction errors, violating physiological constraints.

<div class="pk-model-meta" hidden drug="Benzene" model-id="Benzene_Lin2025_reference" status="rejected" stale="false" population="female humans" measured-compound="Benzene" parameterization="mechanistic" topology="1C"></div>

## Citation
Lin N, Li Z, Ding N, Park SK, Batterman S, Du W et al. Estimation of Dermal Exposure to Volatile Organic Compounds (VOCs) from Feminine Hygiene Products: Integrating Measurement Data and Physiologically Based Toxicokinetic (PBTK) Model. Environmental health perspectives 133(6):67020 (2025).
  ·  DOI: [10.1289/EHP15418](https://doi.org/10.1289/EHP15418)

## Population and dosing

**Population:** female humans · condition dermal exposure to feminine hygiene products · age group adult · n = 25.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Kp41,42 (cm/h) | Kp_derm | 0.0207 | cm/h |
| Ptissue/blood / Adipose | Kp | 51.4957 |  |
| Pblood/air | blood_air_partition | 7.3757 |  |
| Km (ng/mL) | Km | 3.12460 | ng/mL |
| Table 2 Row 4 CLtotal | CL | 1.16 | L/h/kg |
| 2 mL | V | 2.0 | mL |
| Lag time (h) | tlag | 0.0 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance (1.16 L/h/kg) and volume of distribution (2.0 mL) for benzene are implausible and likely unit extraction errors, violating physiological constraints.**

The record lists a volume of distribution of 2.0 mL, which is physiologically impossible for a human as it is less than a single drop of fluid. Simultaneously, the total clearance is recorded as 1.16 L/h/kg, a magnitude inconsistent with this microscopic volume, suggesting severe scaling or unit conversion errors. These parameter values fall far outside any physiological window for benzene kinetics. Extracted — benzene: Kp_derm 0.0207 cm/h, Kp 51.5, blood_air_partition 7.38, Km 3.12 ng/mL, CL 1.16 L/h/kg, V 2 mL, tlag 0 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Kp41,42 (cm/h) | `Q412` · Kp_derm | 0.0207 | cm/h | 5.75e-08 | s | cm/h | llm (0.6) | t1:row4:col2 |
| Ptissue/blood / Adipose | `Q410` · Kp | 51.4957 |  |  |  |  | llm (0.6) | t1:row4:col3 |
| Pblood/air | `Q411` · blood_air_partition | 7.3757 |  |  |  |  | llm (0.6) | t1:row4:col7 |
| Km (ng/mL) | `Q1` · Km | 3.12460 | ng/mL | 3.125e-06 | kg/m3 | ng/ml | exact (1) | t1:row4:col9 |
| Table 2 Row 4 CLtotal | `Q22` · CL | 1.16 | L/h/kg | 2.256e-05 | m3/s | L/h | review_gapfill (0.7) | Ohtsu_2018:review |
| 2 mL | `Q61` · V | 2.0 | mL | 2e-06 | m3 | L | review_gapfill (0.7) | Hernández-Soto_2025:review |
| Lag time (h) | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Fasinu_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'log Kow' — extend the ontology if this is a real PK parameter (source ['t1:row4:col1'])
- dropped unlinked row (NIL): 'Ptissue/blood / Kidney' — extend the ontology if this is a real PK parameter (source ['t1:row4:col4'])
- dropped duplicate Q410 ('Ptissue/blood / Liver', value '3.0757') — already have one for this compound
- dropped duplicate Q410 ('Ptissue/blood / Rest of body', value '2.2357') — already have one for this compound
- NIL: refused to back-fill base 'Kp' from footnote/prose loose number None (source ['t1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Benzene
- gap-filled Q22 (CL) from Ohtsu_2018's review values (primary lacked it)
- gap-filled Q61 (V) from Hernández-Soto_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Fasinu_2022's review values (primary lacked it)

**Extraction notes:**
- table t1: unparsed_numeric_cell
- transposed table t1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['t1:row4:col9'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ohtsu_2018:review'] |
| C5_dimension_Q412 | pass | [length] / [time] |  | ['t1:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hernández-Soto_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Fasinu_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.16 | ['Ohtsu_2018:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 81.2 L/h | ['Ohtsu_2018:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.002 L | ['Hernández-Soto_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbenzene%5D%20Benzene_Lin2025_reference&body=Drug%3A%20benzene%0ARecord%3A%20Benzene_Lin2025_reference%0APaper%3A%20Lin_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_benzene/Benzene_Lin2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 16:46 UTC</sub>
