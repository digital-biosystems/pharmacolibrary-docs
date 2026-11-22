<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Simvastatin&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/&quot;},{&quot;label&quot;:&quot;Kumagai_2020 \u00b7 simvastatin_alone_day_1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Simvastatin_Kumagai2020_simvastatin_tas_303_day_19&quot;,&quot;label&quot;:&quot;Kumagai_2020_simvastatin_tas_303_day_19&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/Simvastatin_Kumagai2020_simvastatin_tas_303_day_19.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Wu2016_reference&quot;,&quot;label&quot;:&quot;Wu_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/Simvastatin_Wu2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Simvastatin — `Simvastatin_Kumagai2020_simvastatin_alone_day_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record contains only descriptive exposure metrics like Cmax and AUCt for simvastatin, lacking essential kinetic parameters such as clearance or volume, leading to rejection.

<div class="pk-model-meta" hidden drug="Simvastatin" model-id="Simvastatin_Kumagai2020_simvastatin_alone_day_1" status="rejected" stale="false" population="12 healthy participants" measured-compound="Simvastatin" parameterization="apparent" topology="1C"></div>

## Citation
Kumagai Y, Fujita T, Maeda M, Sasaki Y, Nagaoka M, Huang J et al. A Drug-Drug Interaction Study to Evaluate the Effect of TAS-303 on CYP3A Activity in the Small Intestine and Liver. Journal of clinical pharmacology 60(6):702–710 (2020).
  ·  DOI: [10.1002/jcph.1583](https://doi.org/10.1002/jcph.1583)

## Population and dosing

**Population:** 12 healthy participants · condition healthy · age group adult · n = 12.

**Dosing:** 1, 3, 5 mg, mixed, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax, ng/mL | Cmax | 0.98 | ng/mL |
| tmax, h | tmax | 1.00 | h |
| AUC0–t, ng•h/mL | AUCt | 3.735 | ng·h/mL |
| ka (h−1) | kabs | 4.226 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record contains only descriptive exposure metrics like Cmax and AUCt for simvastatin, lacking essential kinetic parameters such as clearance or volume, leading to rejection.**

The extracted parameters include Cmax (0.98 ng/mL), tmax (1.00 h), AUCt (3.735 ng·h/mL), and kabs (4.226 h⁻¹), but fields for half-life, clearance, and volume of distribution are empty. Consequently, the model lacks the kinetic quantities required for a mechanistic PK description, being classified instead as an exposure/outcome paper. Extracted — simvastatin: Cmax 0.98 ng/mL, tmax 1 h, AUCt 3.73 ng·h/mL, kabs 4.23 h−1.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax, ng/mL | `Q32` · Cmax | 0.98 | ng/mL | 9.8e-07 | kg/m3 | ng/ml | exact (1) | Kumagai_2020_table_p5_1:row0:col1 |
| tmax, h | `Q56` · tmax | 1.00 | h | 3600 | s | h | exact (1) | Kumagai_2020_table_p5_1:row1:col1 |
| AUC0–t, ng•h/mL | `Q19` · AUCt | 3.735 | ng·h/mL |  |  | ng·h/mL | llm_confirmed (0.6) | Kumagai_2020_table_p5_1:row2:col1 |
| ka (h−1) | `Q49` · kabs | 4.226 | h−1 | 0.001174 | 1/s | 1/h | review_gapfill (0.7) | Chang_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| AUC0–inf, ng•h/mL | Q17 | llm_confirmed |
| t1/2, h | Q57 | half_life_rule |
| CL/F, L/h | Q27 | exact |
| Vd/F, L | Q76 | exact |

## Departures & gaps

**Interpretation flags:**
- implicit units: 'AUC0–t, ng•h/mL' → ng·h/mL (from the paper text: "Table 2 footnote defines 'AUC0‐t, area under the plasma concentration‐time curve...', and the text states 'arithmetic me")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Simvastatin
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- population split: 'simvastatin alone (day 1)' subgroup of Kumagai_2020 (paper reports 2 populations: simvastatin + tas-303 (day 19), simvastatin alone (day 1))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chang_2022's review values (primary lacked it)

**Extraction notes:**
- table Kumagai_2020_table_3: unknown_column_role
- table Kumagai_2020_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Kumagai_2020_table_p5_1:row2:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kumagai_2020_table_p5_1:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kumagai_2020_table_p5_1:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chang_2022:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kumagai_2020_table_p5_1:row1:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kumagai_2020_table_p5_1:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kumagai_2020_table_p5_1:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsimvastatin%5D%20Simvastatin_Kumagai2020_simvastatin_alone_day_1&body=Drug%3A%20simvastatin%0ARecord%3A%20Simvastatin_Kumagai2020_simvastatin_alone_day_1%0APaper%3A%20Kumagai_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_simvastatin/Simvastatin_Kumagai2020_simvastatin_alone_day_1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 03:45 UTC</sub>
