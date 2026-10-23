<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;kanamycin&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/&quot;},{&quot;label&quot;:&quot;Strydom_2019_2 \u00b7 inh&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Kanamycin_Dijkstra2015_reference&quot;,&quot;label&quot;:&quot;Dijkstra_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Dijkstra2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_cfz&quot;,&quot;label&quot;:&quot;Strydom_2019_2_cfz&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_cfz.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_kan&quot;,&quot;label&quot;:&quot;Strydom_2019_2_kan&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_kan.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_lzd&quot;,&quot;label&quot;:&quot;Strydom_2019_2_lzd&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_lzd.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_mfx&quot;,&quot;label&quot;:&quot;Strydom_2019_2_mfx&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_mfx.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Kanamycin_Strydom2019v2_rif&quot;,&quot;label&quot;:&quot;Strydom_2019_2_rif&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_kanamycin/Kanamycin_Strydom2019v2_rif.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# kanamycin — `Kanamycin_Strydom2019v2_inh`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The two-compartment model for kanamycin was rejected because the peripheral compartment is unreachable, lacking an intercompartmental clearance parameter.

<div class="pk-model-meta" hidden drug="kanamycin" model-id="Kanamycin_Strydom2019v2_inh" status="rejected" stale="false" population="adults with tuberculosis" measured-compound="kanamycin" parameterization="mechanistic" topology="2C"></div>

## Citation
Strydom N, Gupta SV, Fox WS, Via LE, Bang H, Lee M et al. Tuberculosis drugs' distribution and emergence of resistance in patient's lung lesions: A mechanistic model and tool for regimen and dose optimization. PLoS medicine 16(4):e1002773 (2019).
  ·  DOI: [10.1371/journal.pmed.1002773](https://doi.org/10.1371/journal.pmed.1002773)

## Population and dosing

**Population:** adults with tuberculosis · condition tuberculosis · age group adult · n = &gt;15&lt;.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Rate of absorption (h−1) | kabs | 0.738 | h−1 |
| Lag time (h) | tlag | 0.130 | h |
| Central volume (L) | V1 | 48.9 | L |
| Peripheral volume (L) | V2 | 40.4 | L |
| CL (L/h) | CL | 4.62 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The two-compartment model for kanamycin was rejected because the peripheral compartment is unreachable, lacking an intercompartmental clearance parameter.**

The record defines peripheral volume (V2) as 40.4 L but omits the intercompartmental clearance, making the second compartment unlinked from the dose path. A second reader disagreed on the central volume, citing 52.3 L instead of 48.9 L, and on clearance, citing 5.72 L/h instead of 4.62 L/h. The reviewer also noted a discrepancy in the absorption rate constant, suggesting 1.55 h−1 rather than the recorded 0.738 h−1. Extracted — kanamycin: kabs 0.738 h−1, tlag 0.13 h, V1 48.9 L, V2 40.4 L, CL 4.62 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[central volume].parameter_id`: this record has Q61, the second reading Q63; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Rate of absorption (h−1) | `Q49` · kabs | 0.738 | h−1 | 0.000205 | 1/s | 1/h | llm_corrected (0.6) | pmed.1002773.t002:row1:col2 |
| Lag time (h) | `Q83` · tlag | 0.130 | h | 468 | s | h | exact (1) | pmed.1002773.t002:row2:col2 |
| Central volume (L) | `Q63` · V1 | 48.9 | L | 0.0489 | m3 | l | exact (1) | pmed.1002773.t002:row4:col2 |
| Peripheral volume (L) | `Q64` · V2 | 40.4 | L | 0.0404 | m3 | l | exact (1) | pmed.1002773.t002:row6:col2 |
| CL (L/h) | `Q22` · CL | 4.62 | L/h | 1.283e-06 | m3/s | L/h | review_gapfill (0.7) | Dijkstra_2015:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Intercomp clearance' — extend the ontology if this is a real PK parameter (source ['pmed.1002773.t002:row5:col2'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Central volume (L)); Q64 (Peripheral volume (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=kanamycin
- population split: 'inh' subgroup of Strydom_2019_2 (paper reports 6 populations: cfz, inh, kan, lzd, mfx, rif)
- gap-filled Q22 (CL) from Dijkstra_2015's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[central volume].value` | 30.6 | 52.3 | mismatch |
| `gpt-oss-120b` | `parameters[clearance].value` | 4.61 | 5.72 | mismatch |
| `gpt-oss-120b` | `parameters[intercomp clearance]` |  | 6.43 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` |  | 0.130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume]` |  | 40.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rate of absorption].value` | 1.65 | 1.55 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Dijkstra_2015:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pmed.1002773.t002:row1:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pmed.1002773.t002:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pmed.1002773.t002:row6:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['pmed.1002773.t002:row2:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.62 | ['Dijkstra_2015:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.62 L/h | ['Dijkstra_2015:review'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 48.9 L | ['pmed.1002773.t002:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 40.4 L | ['pmed.1002773.t002:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bkanamycin%5D%20Kanamycin_Strydom2019v2_inh&body=Drug%3A%20kanamycin%0ARecord%3A%20Kanamycin_Strydom2019v2_inh%0APaper%3A%20Strydom_2019_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_kanamycin/Kanamycin_Strydom2019v2_inh%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 13:11 UTC</sub>
