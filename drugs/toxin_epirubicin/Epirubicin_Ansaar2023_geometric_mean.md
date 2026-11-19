<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Epirubicin&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/&quot;},{&quot;label&quot;:&quot;Ansaar_2023 \u00b7 geometric_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epirubicin_Camaggi1988_reference&quot;,&quot;label&quot;:&quot;Camaggi_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Camaggi1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Janssen2023_reference&quot;,&quot;label&quot;:&quot;Janssen_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Janssen2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Robert1994_reference&quot;,&quot;label&quot;:&quot;Robert_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Robert1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_1&quot;,&quot;label&quot;:&quot;Twelves_1992_group_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_1.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_2&quot;,&quot;label&quot;:&quot;Twelves_1992_group_2&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_2.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Epirubicin_Twelves1992_group_3&quot;,&quot;label&quot;:&quot;Twelves_1992_group_3&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_epirubicin/Epirubicin_Twelves1992_group_3.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Epirubicin — `Epirubicin_Ansaar2023_geometric_mean`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because epirubicin's volume of distribution is 200.0 µL, a unit error incompatible with the 40.3 L/h clearance and physiological limits.

<div class="pk-model-meta" hidden drug="Epirubicin" model-id="Epirubicin_Ansaar2023_geometric_mean" status="rejected" stale="false" population="Sim-Cancer oncology patients" measured-compound="Epirubicin" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Ansaar R, Meech R, Rowland A. A Physiologically Based Pharmacokinetic Model to Predict Determinants of Variability in Epirubicin Exposure and Tissue Distribution. Pharmaceutics 15(4) (2023).
  ·  DOI: [10.3390/pharmaceutics15041222](https://doi.org/10.3390/pharmaceutics15041222)

## Population and dosing

**Population:** Sim-Cancer oncology patients · condition cancer · age group adult · n = 2000.

**Dosing:** 50 mg/m2, iv, multiple, every 504 h.

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (ng/mL·h) | AUC | 5252 | ng/mL·h |
| CL (Dose/AUC) (L/h) | CL | 40.3 | L/h |
| total volume | V | 200.0 | µL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because epirubicin's volume of distribution is 200.0 µL, a unit error incompatible with the 40.3 L/h clearance and physiological limits.**

The volume of distribution is recorded as 200.0 µL, which is orders of magnitude too small for a systemic drug in oncology patients and indicates a unit extraction error. This results in an implausible clearance-to-volume ratio when paired with the 40.3 L/h clearance. Additionally, the metabolic pathway for epirubicin glucuronidation cannot be reconstructed within the available model structures. Extracted — epirubicin: AUC 5.25e+03 ng/mL·h, CL 40.3 L/h, V 200 µL.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (ng/mL·h) | `Q88` · AUC | 5252 | ng/mL·h | 18.91 | kg*s/m3 | ng/(h·ml) | exact (1) | Ansaar_2023_table_3:row2:col1 |
| CL (Dose/AUC) (L/h) | `Q22` · CL | 40.3 | L/h | 1.119e-05 | m3/s | l/h | space_fold (0.95) | Ansaar_2023_table_3:row2:col4 |
| total volume | `Q61` · V | 200.0 | µL | 2e-07 | m3 | L | review_gapfill (0.7) | Ansaar_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.869 (source ['pharmaceutics-15-01222-t005:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Epirubicin
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'geometric mean' subgroup of Ansaar_2023 (paper reports 2 populations: geometric mean, std. error of the estimate)
- row roles (LLM): model_class=other; 13/13 row label(s) assigned, 13 linked by role; re-tagged Epirubicin→parent ×30
- gap-filled Q61 (V) from Ansaar_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 1 transcribed (20 record(s))
- table Ansaar_2023_table_3: ambiguous_numeric_format
- transposed table Ansaar_2023_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (39 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ansaar_2023_table_3:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ansaar_2023:review'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Ansaar_2023_table_3:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 40.3 | ['Ansaar_2023_table_3:row2:col4'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 40.3 L/h | ['Ansaar_2023_table_3:row2:col4'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | ['Ansaar_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepirubicin%5D%20Epirubicin_Ansaar2023_geometric_mean&body=Drug%3A%20epirubicin%0ARecord%3A%20Epirubicin_Ansaar2023_geometric_mean%0APaper%3A%20Ansaar_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_epirubicin/Epirubicin_Ansaar2023_geometric_mean%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 13:06 UTC</sub>
