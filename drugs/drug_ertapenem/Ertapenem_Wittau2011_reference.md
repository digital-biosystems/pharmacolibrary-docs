<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ertapenem&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/&quot;},{&quot;label&quot;:&quot;Wittau_2011 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ertapenem_Chauzy2022_reference&quot;,&quot;label&quot;:&quot;Chauzy_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Chauzy2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Muangkasem2025_reference&quot;,&quot;label&quot;:&quot;Muangkasem_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Muangkasem2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Wittau2017_reference&quot;,&quot;label&quot;:&quot;Wittau_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Wittau2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Cardone2012_reference&quot;,&quot;label&quot;:&quot;Cardone_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Cardone2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ertapenem — `Ertapenem_Wittau2011_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Ertapenem clearance of 12.5 l/h is implausible, and the AUC ratio unit l/h prevented standardization to SI units.

<div class="pk-model-meta" hidden drug="ertapenem" model-id="Ertapenem_Wittau2011_reference" status="rejected" stale="false" population="patients with colorectal surgery" measured-compound="ertapenem" parameterization="apparent" topology="2C"></div>

## Citation
Wittau M, Scheele J, Bulitta JB, Mayer B, Kaever V, Burhenne H et al. Pharmacokinetics of ertapenem in colorectal tissue. Chemotherapy 57(5):437–448 (2011).
  ·  DOI: [10.1159/000333377](https://doi.org/10.1159/000333377)

## Population and dosing

**Population:** patients with colorectal surgery · condition colorectal tissue (surgical patients) · age group adult · n = # 38 (The paper states 38 patients were in the dataset: '38 patients in total'.).

**Dosing:** 1000 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC in the colon divided by area under the unbound concentration time curve in plasma | AUC ratio | 0.856 | l/h |
| theta_q331_category | theta_q331_category | 32.0 |  |
| Total clearance of unbound ertapenem | CL | 12.5 | l/h |
| apparent volume of distribution of the colon compartment | V/F | 0.231 | liters |
| volume of distribution at steady state | V | 7.3 | liters |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Ertapenem clearance of 12.5 l/h is implausible, and the AUC ratio unit l/h prevented standardization to SI units.**

The total clearance value of 12.5 l/h falls outside the physiological window, suggesting a magnitude error. The AUC ratio parameter is also recorded with the unit l/h, which is dimensionally incorrect for a ratio. Because l/h could not be resolved to a standard SI equivalent in this context, the parameter lacked a valid numerical value for model estimation. Extracted — ertapenem: AUC ratio 0.856 l/h, CL 12.5 l/h, V/F 0.231 liters, V 7.3 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of 165-194: this record has none, the second reading 5; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC in the colon divided by area under the unbound concentration time curve in plasma | `Q21` · AUC ratio | 0.856 | l/h |  |  | l/h | llm_corrected (0.6) | Wittau_2011_table_p4_1:row7:col2 |
| theta_q331_category | `Q900` · theta_q331_category | 32.0 |  |  |  |  |  | Wittau_2011_table_p4_1:row10:col2 |
| Total clearance of unbound ertapenem | `Q22` · CL | 12.5 | l/h | 3.472e-06 | m3/s | L/h | boundary (0.8) | Wittau_2011:other_prose |
| apparent volume of distribution of the colon compartment | `Q76` · V/F | 0.231 | liters | 0.000231 | m3 | L | boundary (0.8) | Wittau_2011:other_prose |
| volume of distribution at steady state | `Q61` · V | 7.3 | liters | 0.0073 | m3 | L | boundary (0.8) | Wittau_2011:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Intercompartmental clearance to the first peripheral compartment, l/h' routed out of structural estimates ('BSV')
- table section iiv: 'Intercompartmental clearance to the colon compartment, l/h' routed out of structural estimates ('BSV')
- table section iiv: 'Volume of distribution of the central compartment, liters' routed out of structural estimates ('BSV')
- table section iiv: 'Volume of distribution of the first peripheral compartment, liters' routed out of structural estimates ('BSV')
- table section iiv: 'Volume of distribution of the colon compartment, liters' routed out of structural estimates ('BSV')
- table section iiv: 'AUC in the colon divided by area under the unbound concentration time curve in plasma' routed out of structural estimates ('BSV')
- table section iiv: 'Linear binding component' routed out of structural estimates ('BSV')
- table section iiv: 'Dissociation constant for saturable binding' routed out of structural estimates ('BSV')
- table section iiv: 'Ratio of maximum binding capacity and Kd' routed out of structural estimates ('BSV')
- table section residual_error: 'Additive residual error for total plasma concentrations, mg/l' routed out of structural estimates ('Standard deviations of residual error terms')
- table section residual_error: 'Proportional residual error for total plasma concentrations' routed out of structural estimates ('Standard deviations of residual error terms')
- table section residual_error: 'Additive residual error for concentrations in colon tissue, mg/l' routed out of structural estimates ('Standard deviations of residual error terms')
- table section residual_error: 'Proportional residual error for concentrations in colon tissue' routed out of structural estimates ('Standard deviations of residual error terms')
- table section residual_error: 'Additive residual error for unbound plasma concentrations, mg/l' routed out of structural estimates ('Standard deviations of residual error terms')
- table section residual_error: 'Proportional residual error for unbound plasma concentrations' routed out of structural estimates ('Standard deviations of residual error terms')
- dropped unlinked row (NIL): 'Linear binding component' — extend the ontology if this is a real PK parameter (source ['Wittau_2011_table_p4_1:row9:col2'])
- dropped unlinked row (NIL): 'Ratio of maximum binding capacity and Kd' — extend the ontology if this is a real PK parameter (source ['Wittau_2011_table_p4_1:row11:col2'])
- covariate effect for Q331 has no base parameter row (kept as unattached equation-variable)
- salvaged Q22 ('Total clearance of unbound ertapenem'=12.5) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution of the colon compartment'=0.231) from results prose — parameter table was unreadable
- salvaged Q61 ('volume of distribution at steady state'=7.3) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ertapenem
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Wittau_2011
- unparsed cell Wittau_2011_table_p4_1:row2:col2 = '16.5 (10)1'
- unparsed cell Wittau_2011_table_p4_1:row3:col2 = '0.605 (15)1'
- unparsed cell Wittau_2011_table_p4_1:row4:col1 = 'V1'
- unparsed cell Wittau_2011_table_p4_1:row4:col2 = '24.3 (29)1'
- unparsed cell Wittau_2011_table_p4_1:row5:col1 = 'V2'
- unparsed cell Wittau_2011_table_p4_1:row5:col2 = '15.7 (16)1'
- unparsed cell Wittau_2011_table_p4_1:row6:col1 = 'V3'
- unparsed cell Wittau_2011_table_p4_1:row6:col2 = '0.231 (23)1'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.571 (8/14 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[165-194]` |  | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[375-404]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[435-464]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance]` |  | 30 | only_one_extracted |
| `gpt-oss-120b` | `parameters[linear binding component]` |  | 1.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance of unbound ertapenem]` | 12.5 |  | only_one_extracted |

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
| C0c_disposition_complete | pass |  |  |  |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 12.5 L/h | ['Wittau_2011:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.3 L | ['Wittau_2011:discussion_prose'] |
| C9_phys_window_Q76 | fail | volume within physiological range | 0.231 L | ['Wittau_2011:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bertapenem%5D%20Ertapenem_Wittau2011_reference&body=Drug%3A%20ertapenem%0ARecord%3A%20Ertapenem_Wittau2011_reference%0APaper%3A%20Wittau_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ertapenem/Ertapenem_Wittau2011_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 10:51 UTC</sub>
