<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;bleomycin&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/&quot;},{&quot;label&quot;:&quot;Groselj_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bleomycin_Kramer1978_group_i&quot;,&quot;label&quot;:&quot;Kramer_1978_group_i&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_group_i.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Kramer1978_iii&quot;,&quot;label&quot;:&quot;Kramer_1978_iii&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Kramer1978_iii.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Wilde2007_reference&quot;,&quot;label&quot;:&quot;Wilde_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Wilde2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bleomycin_Zhao2025_reference&quot;,&quot;label&quot;:&quot;Zhao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bleomycin/Bleomycin_Zhao2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bleomycin — `Bleomycin_Groselj2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The volume of distribution value 32.17 L is dimensionally incompatible with the murine population, causing a unit mismatch.

<div class="pk-model-meta" hidden drug="bleomycin" model-id="Bleomycin_Groselj2018_reference" status="rejected" stale="false" population="B16F1 melanoma and TS/A carcinoma tumours in mice" measured-compound="bleomycin" parameterization="mechanistic" topology="1C"></div>

## Citation
Groselj A, Kranjc S, Bosnjak M, Krzan M, Kosjek T, Prevc A et al. Vascularization of the tumours affects the pharmacokinetics of bleomycin and the effectiveness of electrochemotherapy. Basic & clinical pharmacology & toxicology 123(3):247–256 (2018).
  ·  DOI: [10.1111/bcpt.13012](https://doi.org/10.1111/bcpt.13012)

## Population and dosing

**Population:** B16F1 melanoma and TS/A carcinoma tumours in mice · condition tumour.

**Dosing:** 350 mg, iv, single.

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| EP 15 min. after BLM injectionc | t1/2z | 20.7 | days |
| EP 2 hr after BLM injectionf | Ct | 4.5 | days |
| Plasma clearance (ml/min) | CL | 0.52 | ml/min |
| Vd(L) Younger Patients AVG | V | 32.17 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The volume of distribution value 32.17 L is dimensionally incompatible with the murine population, causing a unit mismatch.**

The record assigns a volume of distribution of 32.17 L to mice, a magnitude that is physiologically impossible for this small animal model. This error indicates the parameter likely retains a human-scale reference value rather than reflecting murine kinetics. Furthermore, the unit for one parameter could not be converted to standard SI units, preventing consistent dimensional analysis. Extracted — bleomycin: t1/2z 20.7 days, Ct 4.5 days, CL 0.52 ml/min, V 32.2 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ep 15 min. after blm injectionc: this record has 20.7, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| EP 15 min. after BLM injectionc | `Q57` · t1/2z | 20.7 | days | 1.788e+06 | s | d | llm (0.6) | Groselj_2018_table_p20_1:row2:col3, Groselj_2018_table_p20_1:row2:col4 |
| EP 2 hr after BLM injectionf | `Q75` · Ct | 4.5 | days |  |  | d | llm (0.6) | Groselj_2018_table_p20_1:row5:col3, Groselj_2018_table_p20_1:row5:col4 |
| Plasma clearance (ml/min) | `Q22` · CL | 0.52 | ml/min | 8.667e-09 | m3/s | L/h | boundary (0.8) | Groselj_2018:other_prose |
| Vd(L) Younger Patients AVG | `Q61` · V | 32.17 | L | 0.03217 | m3 | L | review_gapfill (0.7) | Groselj_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'cr (n ( % ))' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'EP 5 min. after BLM injectionb' — extend the ontology if this is a real PK parameter (source ['Groselj_2018_table_p20_1:row1:col3', 'Groselj_2018_table_p20_1:row1:col4'])
- dropped unlinked row (NIL): 'EP 30 min. after BLM injectiond' — extend the ontology if this is a real PK parameter (source ['Groselj_2018_table_p20_1:row3:col3', 'Groselj_2018_table_p20_1:row3:col4'])
- dropped unlinked row (NIL): 'EP 1 hr after BLM injectione' — extend the ontology if this is a real PK parameter (source ['Groselj_2018_table_p20_1:row4:col3', 'Groselj_2018_table_p20_1:row4:col4'])
- unit_dimension_mismatch: 'EP 2 hr after BLM injectionf' → Q75 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- salvaged Q22 ('Plasma clearance (ml/min)'=0.52) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bleomycin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Groselj_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Groselj_2018_table_p20_1: unbound_uncertainty
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ep 15 min. after blm injectionc]` | 20.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ep 2 hr after blm injectionf]` | 4.5 |  | only_one_extracted |

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
| C5_dimension_Q57 | pass | [time] |  | ['Groselj_2018_table_p20_1:row2:col3', 'Groselj_2018_table_p20_1:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Groselj_2021:review'] |
| C5_dimension_Q75 | fail | [time] | days | ['Groselj_2018_table_p20_1:row5:col3', 'Groselj_2018_table_p20_1:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.52 | ['Groselj_2018:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0312 L/h | ['Groselj_2018:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 32.2 L | ['Groselj_2021:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbleomycin%5D%20Bleomycin_Groselj2018_reference&body=Drug%3A%20bleomycin%0ARecord%3A%20Bleomycin_Groselj2018_reference%0APaper%3A%20Groselj_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bleomycin/Bleomycin_Groselj2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:42 UTC</sub>
