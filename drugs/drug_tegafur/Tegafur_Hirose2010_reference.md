<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tegafur&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/&quot;},{&quot;label&quot;:&quot;Hirose_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tegafur_Kim2017_multiple_dose&quot;,&quot;label&quot;:&quot;Kim_2017_multiple_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_multiple_dose.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Kim2017_single_dose&quot;,&quot;label&quot;:&quot;Kim_2017_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Kim2017_single_dose.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tegafur_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tegafur/Tegafur_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tegafur — `Tegafur_Hirose2010_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Tegafur was rejected because its metabolites lack formation paths and a clearance unit was unconvertible.

<div class="pk-model-meta" hidden drug="tegafur" model-id="Tegafur_Hirose2010_reference" status="rejected" stale="false" population="Japanese patients with advanced cancer" measured-compound="tegafur" parameterization="apparent" topology="general_linear"></div>

## Citation
Hirose T, Fujita K, Nishimura K, Ishida H, Yamashita K, Sunakawa Y et al. Pharmacokinetics of S-1 and CYP2A6 genotype in Japanese patients with advanced cancer. Oncology reports 24(2):529–536 (2010).
  ·  DOI: [10.3892/or_00000889](https://doi.org/10.3892/or_00000889)

## Population and dosing

**Population:** Japanese patients with advanced cancer · condition advanced cancer · age group adult · n = &gt;${'58'}.

**Dosing:** 80, 100 mg/m2, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed S-1, measured tegafur.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| FT | Fab | 20.3 |  |
| Creatinine clearance a (ml/min) | CL | 80.5 | (39-174) |
| CDHP Ka (h -1 ) | kabs | 1.2 | 174.6 |
| V/F (l) | V/F | 38.8 | 24.6 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Tegafur was rejected because its metabolites lack formation paths and a clearance unit was unconvertible.**

The metabolites 5-FU and CDHP are unreachable from the central compartment dose. The clearance parameter of 80.5 ml/min had a unit that could not be converted to standard SI values. Extracted — tegafur: Fab 20.3, CL 80.5 (39-174), kabs 1.2 174.6, V/F 38.8 24.6.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has S-1, the second reading tegafur; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| FT | `Q40` · Fab | 20.3 |  |  | llm (0.6) | Hirose_2010_table_p3_2:row4:col2, Hirose_2010_table_p3_2:row6:col1, Hirose_2010_table_p3_2:row6:col2, Hirose_2010_table_p3_2:row7:col1, Hirose_2010_table_p3_2:row7:col2, Hirose_2010_table_p3_2:row8:col2, Hirose_2010_table_p3_2:row9:col2 |
| Creatinine clearance a (ml/min) | `Q22` · CL | 80.5 | (39-174) | (39-174) | boundary (0.8) | Hirose_2010:other_prose |
| CDHP Ka (h -1 ) | `Q49` · kabs | 1.2 | 174.6 | 174.6 | boundary (0.8) | Hirose_2010:other_prose |
| V/F (l) | `Q76` · V/F | 38.8 | 24.6 | 24.6 | exact (1) | Hirose_2010:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CDHP' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: 'FT' routed out of structural estimates ('Interindividual variability (%)')
- table section iiv: '5-FU' routed out of structural estimates ('Interindividual variability (%)')
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CDHP' — extend the ontology if this is a real PK parameter (source ['Hirose_2010_table_p3_2:row0:col2', 'Hirose_2010_table_p3_2:row1:col2', 'Hirose_2010_table_p3_2:row2:col2', 'Hirose_2010_table_p3_2:row3:col2'])
- dropped unlinked row (NIL): '5-FU' — extend the ontology if this is a real PK parameter (source ['Hirose_2010_table_p3_2:row10:col2', 'Hirose_2010_table_p3_2:row11:col2', 'Hirose_2010_table_p3_2:row12:col2'])
- salvaged Q22 ('Creatinine clearance a (ml/min)'=80.5) from results prose — parameter table was unreadable
- salvaged Q49 ('CDHP Ka (h -1 )'=1.2) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F (l)'=38.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tegafur
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 3/3 row label(s) assigned, 0 linked by role; re-tagged parent→CDHP ×7, parent→tegafur ×10, parent→5-FU ×5
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (1/10 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tegafur', '5-fu', 'metabolism'], ['tegafur', 'cdhp', 'metabolism']] | [['tegafur', '5-fu', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[cdhp ka]` | 1.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cdhp]` |  | 25.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[creatinine clearance a]` | 80.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ft]` |  | 20.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ft]` | 20.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 38.8 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | S-1 | tegafur | mismatch |

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
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | (39-174) | ['Hirose_2010:other_prose'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | 174.6 | ['Hirose_2010:other_prose'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 | 24.6 | ['Hirose_2010:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btegafur%5D%20Tegafur_Hirose2010_reference&body=Drug%3A%20tegafur%0ARecord%3A%20Tegafur_Hirose2010_reference%0APaper%3A%20Hirose_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tegafur/Tegafur_Hirose2010_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 17:20 UTC</sub>
