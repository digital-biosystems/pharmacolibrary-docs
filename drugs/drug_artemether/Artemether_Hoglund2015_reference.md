<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/&quot;},{&quot;label&quot;:&quot;Hoglund_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemether — `Artemether_Hoglund2015_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The artemether model was rejected because the metabolite desbutyl-lumefantrine, formed from lumefantrine, has no path from the administered dose, leaving an unlinked metabolite in the structure.

<div class="pk-model-meta" hidden drug="artemether" model-id="Artemether_Hoglund2015_reference" status="rejected" stale="false" population="HIV-infected patients treated with antiretroviral therapy" measured-compound="artemether" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Hoglund RM, Byakika-Kibwika P, Lamorde M, Merry C, Ashton M, Hanpithakpong W et al. Artemether-lumefantrine co-administration with antiretrovirals: population pharmacokinetics and dosing implications. British journal of clinical pharmacology 79(4):636–649 (2015).
  ·  DOI: [10.1111/bcp.12529](https://doi.org/10.1111/bcp.12529)

## Population and dosing

**Population:** HIV-infected patients treated with antiretroviral therapy · condition HIV infection/malaria · age group adult.

**Dosing:** 80, 480 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed artemether-lumefantrine, measured artemether.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Number of trans comp | n_transit | 3 | l |
| Bioavailability (%) | Fab | 1 | l |
| MMAX | Vmax | 1 | l |
| MF50 | equation variable | 62 |  |
| RSE of between subject variability of the elimination clearance of dihydroartemisinin | CL | 168 | % |
| ka (h−1) | kabs | 0.0577 | h−1 |
| Lag time (h) | tlag | 1.31 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.583). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The artemether model was rejected because the metabolite desbutyl-lumefantrine, formed from lumefantrine, has no path from the administered dose, leaving an unlinked metabolite in the structure.**

The record lists two metabolism links: artemether to dihydroartemisinin, and lumefantrine to desbutyl-lumefantrine. Lumefantrine is not a drug of this model (only artemether is dosed), so desbutyl-lumefantrine is an orphan metabolite with no connection to the dose. Additionally, several lumefantrine parameters carry the unit 'l' although they are dimensionless quantities (number of transit compartments = 3, bioavailability = 1, Vmax = 1); this unit could not be converted to SI, so these parameters reached the model without SI values. Extracted — lumefantrine: n_transit 3 l, Fab 1 l, Vmax 1 l; artemether: CL 168 %, kabs 0.0577 h−1, tlag 1.31 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of ka: this record has 0.0577, the second reading none; it also differs on 4 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Number of trans comp | `Q311` · n_transit | 3 | l |  |  | l | llm (0.6) | tbl3:row4:col1, Hoglund_2015_table_2:row5:col1 |
| Bioavailability (%) | `Q40` · Fab | 1 | l |  |  |  | exact (1) | tbl3:row6:col1, Hoglund_2015_table_2:row7:col1 |
| MMAX | `Q66` · Vmax | 1 | l | 0.001 | m3 | l | llm (0.6) | tbl3:row8:col1 |
| MF50 | `Q900` · equation variable | 62 |  |  |  |  | llm (0.6) | tbl3:row9:col1 |
| RSE of between subject variability of the elimination clearance of dihydroartemisinin | `Q22` · CL | 168 | % |  |  | % | boundary (0.8) | Hoglund_2015:other_prose |
| ka (h−1) | `Q49` · kabs | 0.0577 | h−1 | 1.603e-05 | 1/s | 1/h | review_gapfill (0.7) | Kloprogge_2015:review |
| Lag time (h) | `Q83` · tlag | 1.31 | h | 4716 | s | h | review_gapfill (0.7) | Kloprogge_2015:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL/F (l h−1)' (captured trailing unit 'l h−1' for child rows)
- dropped value-less row: 'MTT (h)' (captured trailing unit 'h' for child rows)
- salvaged Q22 ('RSE of between subject variability of the elimination clearance of dihydroartemisinin'=168) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=artemether
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 5 linked by role; re-tagged parent→lumefantrine ×13
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kloprogge_2015's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kloprogge_2015's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tbl3:row2:col1 = '317 [8.25]'
- unparsed cell tbl3:row2:col2 = '270, 374'
- unparsed cell tbl3:row2:col3 = '9.8 [60.6]'
- unparsed cell tbl3:row2:col4 = '2.75, 16.1'
- unparsed cell tbl3:row5:col1 = '0.970 [6.58]'
- unparsed cell tbl3:row5:col2 = '0.853, 1.10'
- unparsed cell tbl3:row5:col3 = '51.6 [18.6]'
- unparsed cell tbl3:row5:col4 = '41.1, 61.6'
- unparsed cell tbl3:row6:col3 = '58.6 [27.6]'
- unparsed cell tbl3:row6:col4 = '39.9, 76.6'
- unparsed cell tbl3:row7:col1 = '0.724 [5.60]'
- unparsed cell tbl3:row7:col2 = '0.644, 0.803'
- unparsed cell tbl3:row15:col1 = '160 [4.93]'
- unparsed cell tbl3:row15:col2 = '145, 174'
- unparsed cell tbl3:row15:col3 = '53.9 [31.5]'
- unparsed cell tbl3:row15:col4 = '33.4, 70.4'
- unparsed cell tbl3:row17:col1 = '0.707 [4.40]'
- unparsed cell tbl3:row17:col2 = '0.645, 0.764'
- unparsed cell Hoglund_2015_table_2:row1:col1 = '4.77 [5.30]'
- unparsed cell Hoglund_2015_table_2:row1:col2 = '4.31, 5.30'
- unparsed cell Hoglund_2015_table_2:row1:col3 = '14.8 [50.7]'
- unparsed cell Hoglund_2015_table_2:row1:col4 = '5.68, 22.7'
- unparsed cell Hoglund_2015_table_2:row6:col1 = '6.27 [21.2]'
- unparsed cell Hoglund_2015_table_2:row6:col2 = '3.75, 8.35'
- unparsed cell Hoglund_2015_table_2:row6:col3 = '31.4 [106]'
- unparsed cell Hoglund_2015_table_2:row6:col4 = '15.1, 94.6'
- unparsed cell Hoglund_2015_table_2:row7:col3 = '47.4 [18.3]'
- unparsed cell Hoglund_2015_table_2:row7:col4 = '38.2, 57.4'
- unparsed cell Hoglund_2015_table_2:row8:col1 = '0.566 [7.83]'
- unparsed cell Hoglund_2015_table_2:row8:col2 = '0.479, 0.643'
- unparsed cell Hoglund_2015_table_2:row15:col1 = '0.465 [13.3]'
- unparsed cell Hoglund_2015_table_2:row15:col2 = '0.357, 0.591'
- companion parameter table 2 transcribed (7 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.0577 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 1.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mf50]` | 62 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[number of trans comp].value` | 3 | 1 | mismatch |
| `gpt-oss-120b` | `parameters[rse of between subject variability of the elimination clearance of dihydroartemisinin]` | 168 |  | only_one_extracted |

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
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kloprogge_2015:review'] |
| C5_dimension_Q66 | pass | [length] ** 3 |  | ['tbl3:row8:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kloprogge_2015:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | % | ['Hoglund_2015:other_prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 168 | ['Hoglund_2015:other_prose'] |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartemether%5D%20Artemether_Hoglund2015_reference&body=Drug%3A%20artemether%0ARecord%3A%20Artemether_Hoglund2015_reference%0APaper%3A%20Hoglund_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artemether/Artemether_Hoglund2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:52 UTC</sub>
