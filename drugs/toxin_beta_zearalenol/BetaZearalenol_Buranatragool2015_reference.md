<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;beta-Zearalenol&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_zearalenol/&quot;},{&quot;label&quot;:&quot;Buranatragool_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BetaZearalenol_Qin2026_reference&quot;,&quot;label&quot;:&quot;Qin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_beta_zearalenol/BetaZearalenol_Qin2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# beta-Zearalenol — `BetaZearalenol_Buranatragool2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="beta-Zearalenol" model-id="BetaZearalenol_Buranatragool2015_reference" status="rejected" stale="false" population="broiler chickens" measured-compound="beta-Zearalenol" parameterization="mechanistic" topology="1C"></div>

## Citation
Buranatragool K, Poapolathep S, Isariyodom S, Imsilp K, Klangkaew N, Poapolathep A. Dispositions and tissue residue of zearalenone and its metabolites α-zearalenol and β-zearalenol in broilers. Toxicology reports 2:351–356 (2015).
  ·  DOI: [10.1016/j.toxrep.2014.12.011](https://doi.org/10.1016/j.toxrep.2014.12.011)

## Population and dosing

**Population:** broiler chickens · n = 5.

**Dosing:** 84 mg, other, single.

**Dosed compound ≠ measured compound:** dosed zearalenone, measured beta-Zearalenol.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Kel (h) | kel | 0.53 | h |
| K12 (h−1) | k12 | 1.33 | h−1 |
| K21 (h−1) | k21 | 0.68 | h−1 |
| t1/2α (h) | t1/2α | 0.10 | h |
| t1/2β (h) | t1/2β | 1.36 | h |
| CL (L/h/kg) | CL | 0.34 | L/h/kg |
| Vd (L/kg) | V | 6.40 | L/kg |
| MRT (h) | MRT | 2.1 | h |
| Cmax (ng/ml) | Cmax | 15.9 | ng/ml |
| Tmax (min) | tmax | 15.0 | min |
| Fpo (%) | Fab | 29.66 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Kel (h) | `Q47` · kel | 0.53 | h |  |  | h | exact (1) | tbl0005:row2:col1 |
| K12 (h−1) | `Q301` · k12 | 1.33 | h−1 | 0.0003694 | 1/s | 1/h | exact (1) | tbl0005:row3:col1 |
| K21 (h−1) | `Q302` · k21 | 0.68 | h−1 | 0.0001889 | 1/s | 1/h | exact (1) | tbl0005:row4:col1 |
| t1/2α (h) | `Q59` · t1/2α | 0.10 | h | 360 | s | h | half_life_rule (0.95) | tbl0005:row5:col1 |
| t1/2β (h) | `Q60` · t1/2β | 1.36 | h | 4896 | s | h | half_life_rule (0.95) | tbl0005:row6:col1 |
| CL (L/h/kg) | `Q22` · CL | 0.34 | L/h/kg | 6.611e-06 | m3/s | l/(h·kg) | exact (1) | tbl0005:row7:col1 |
| Vd (L/kg) | `Q61` · V | 6.40 | L/kg | 0.448 | m3 | l/kg | exact (1) | tbl0005:row8:col1 |
| MRT (h) | `Q53` · MRT | 2.1 | h | 7560 | s | h | exact (1) | tbl0005:row9:col1 |
| Cmax (ng/ml) | `Q32` · Cmax | 15.9 | ng/ml | 1.59e-05 | kg/m3 | ng/ml | exact (1) | tbl0005:row12:col1 |
| Tmax (min) | `Q56` · tmax | 15.0 | min | 900 | s | min | exact (1) | tbl0005:row13:col1 |
| Fpo (%) | `Q40` · Fab | 29.66 | % | 0.2966 |  | % | route_fold (0.9) | tbl0005:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'value' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Kel (h)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped value-less row: 'Kel'
- dropped value-less row: 'K12'
- dropped value-less row: 'K21'
- dropped value-less row: 't1/2α'
- dropped value-less row: 't1/2β'
- dropped value-less row: 'CL'
- dropped value-less row: 'Vd'
- dropped value-less row: 'MRT'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'Tmax'
- dropped value-less row: 'Fpo'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=beta-Zearalenol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 1.36 | 13.05 | 9.593 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['tbl0005:row7:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] |  |  |  | ['tbl0005:row3:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] |  |  |  | ['tbl0005:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  |  |  | ['tbl0005:row12:col1'] |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) |  |  | ['tbl0005:row2:col1'] |
| C5_dimension_Q53 | pass | [time] |  |  |  | ['tbl0005:row9:col1'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['tbl0005:row13:col1'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['tbl0005:row5:col1'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['tbl0005:row6:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['tbl0005:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.34 |  |  | ['tbl0005:row7:col1'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.8 L/h |  |  | ['tbl0005:row7:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 448 L |  |  | ['tbl0005:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbeta_zearalenol%5D%20BetaZearalenol_Buranatragool2015_reference&body=Drug%3A%20beta_zearalenol%0ARecord%3A%20BetaZearalenol_Buranatragool2015_reference%0APaper%3A%20Buranatragool_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_beta_zearalenol/BetaZearalenol_Buranatragool2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 17:41 UTC</sub>
