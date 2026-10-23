<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amitriptyline&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/&quot;},{&quot;label&quot;:&quot;Koh_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amitriptyline_Yukawa2002_reference&quot;,&quot;label&quot;:&quot;Yukawa_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Yukawa2002_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amitriptyline_Brsen2001_reference&quot;,&quot;label&quot;:&quot;Br\u00f8sen_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amitriptyline/Amitriptyline_Brsen2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amitriptyline — `Amitriptyline_Koh2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:23 UTC (Needs review), but the paper was screened again on 2026-10-06 21:39 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="amitriptyline" model-id="Amitriptyline_Koh2019_reference" status="rejected" stale="true" population="healthy Korean adult male volunteers" measured-compound="amitriptyline" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Koh A, Pak KC, Choi HY, Ryu S, Choi SE, Kim KS et al. Quantitative Modeling Analysis Demonstrates the Impact of CYP2C19 and CYP2D6 Genetic Polymorphisms on the Pharmacokinetics of Amitriptyline and Its Metabolite, Nortriptyline. Journal of clinical pharmacology 59(4):532–540 (2019).
  ·  DOI: [10.1002/jcph.1344](https://doi.org/10.1002/jcph.1344)

## Population and dosing

**Population:** healthy Korean adult male volunteers · condition healthy · age group adult · n = 24.

**Dosing:** 25 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| TVCL TRM, AMIT , L/h | CL | 92.1 | L/h | 0.203 (None% RSE) |
| TVV c, AMIT , L | V1 | 155 | L |  |
| TVQ, L/h | Q | 109 | L/h |  |
| TVV p, AMIT , L | V | 1670 | L |  |
| TVKa, 1/h | kabs | 0.125 | 1/h | 0.137 (None% RSE) |
| TVALAG, h | tlag | 0.414 | h | 0.339 (None% RSE) |
| D1, h | D1 | 1.13 | h |  |
| K24, 1/h | kcomp | 0.00581 | 1/h | 0.123 (None% RSE) |
| K41, 1/h | k41 | 80.4 | 1/h | 0.174 (None% RSE) |
| MTIME1 a , h | MTT | 4 | h |  |
| CL T, NOR , L/h | CL | 58.2 | L/h |  |
| K56, 1/h | Q | 1.09 | 1/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — amitriptyline: CL 92.1 L/h, V 155 L, Q 109 L/h, kabs 0.125 1/h, tlag 0.414 h, D1 1.13 h, kcomp 0.00581 1/h, k41 80.4 1/h, … (+1); nortriptyline: CL 58.2 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has amitriptyline, the second reading unknown; it also differs on 23 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| TVCL TRM, AMIT , L/h | `Q22` · CL | 92.1 | L/h | 2.558e-05 | m3/s | l/h | llm (0.6) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3 | 0.203 (None% RSE) |
| TVV c, AMIT , L | `Q63` · V1 | 155 | L | 0.155 | m3 | l | llm (0.6) | tab_1:row11:col1, tab_1:row11:col2, tab_1:row11:col3 |  |
| TVQ, L/h | `Q30` · Q | 109 | L/h | 3.028e-05 | m3/s | l/h | tv_prefix (0.95) | tab_1:row13:col1, tab_1:row13:col2, tab_1:row13:col3 |  |
| TVV p, AMIT , L | `Q61` · V | 1670 | L | 1.67 | m3 | l | llm (0.6) | tab_1:row14:col1, tab_1:row14:col2, tab_1:row14:col3 |  |
| TVKa, 1/h | `Q49` · kabs | 0.125 | 1/h | 3.472e-05 | 1/s | 1/h | exact (1) | tab_1:row16:col1, tab_1:row16:col2, tab_1:row16:col3 | 0.137 (None% RSE) |
| TVALAG, h | `Q83` · tlag | 0.414 | h | 1490 | s | h | tv_prefix (0.95) | tab_1:row18:col1, tab_1:row18:col2, tab_1:row18:col3 | 0.339 (None% RSE) |
| D1, h | `Q310` · D1 | 1.13 | h | 4068 | s | h | exact (1) | tab_1:row20:col1, tab_1:row20:col2, tab_1:row20:col3 |  |
| K24, 1/h | `Q48` · kcomp | 0.00581 | 1/h | 1.614e-06 | 1/s | 1/h | exact (1) | tab_1:row21:col1, tab_1:row21:col2, tab_1:row21:col3 | 0.123 (None% RSE) |
| K41, 1/h | `Q348` · k41 | 80.4 | 1/h | 0.02233 | 1/s | 1/h | exact (1) | tab_1:row22:col1, tab_1:row22:col2, tab_1:row22:col3 | 0.174 (None% RSE) |
| MTIME1 a , h | `Q81` · MTT | 4 | h |  |  | h | llm (0.6) | tab_1:row24:col1, tab_1:row24:col2, tab_1:row24:col3 |  |
| CL T, NOR , L/h | `Q22` · CL | 58.2 | L/h | 1.617e-05 | m3/s | l/h | exact (1) | tab_1:row27:col1, tab_1:row27:col2, tab_1:row27:col3 |  |
| K56, 1/h | `Q30` · Q | 1.09 | 1/h |  |  | 1/h | exact (1) | tab_1:row29:col1, tab_1:row29:col2, tab_1:row29:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('TVCL TPM, AMIT , L/h', value '35.8') — already have one for this compound
- dropped duplicate Q22 ('TVCL MRM, AMIT , L/h', value '61.5') — already have one for this compound
- dropped duplicate Q22 ('TVCL MPM, AMIT , L/h', value '17') — already have one for this compound
- dropped duplicate Q22 ('TVCL ORM, AMIT , L/h', value '30.6') — already have one for this compound
- dropped duplicate Q22 ('TVCL OPM, AMIT , L/h', value '18.8') — already have one for this compound
- dropped duplicate Q81 ('MTIME2, h', value '2.65') — already have one for this compound
- unit_dimension_mismatch: 'K56, 1/h' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K65, 1/h' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('K65, 1/h', value '0.168') — already have one for this compound
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (TVCL TRM, AMIT , L/h); Q63 (TVV c, AMIT , L); Q30 (TVQ, L/h); Q61 (TVV p, AMIT , L); Q22 (CL T, NOR , L/h); Q30 (K56, 1/h)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amitriptyline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- row roles: 6 per-group rows of amitriptyline clearance but 2 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 29/29 row label(s) assigned, 42 linked by role; re-tagged parent→nortriptyline ×15
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (4/28 fields) | 24 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[d1]` | 1.13 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1]` |  | 1.13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` | 0.00581 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k24]` |  | 0.00581 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k41]` | 80.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k41]` |  | 80.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k56].parameter_id` | Q30 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[k65]` |  | 0.168 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtime1 a]` | 4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtime1 a]` |  | 4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvalag]` | 0.414 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvalag]` |  | 0.414 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl trm, amit]` | 92.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl trm, amit]` |  | 92.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvka]` | 0.125 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvka]` |  | 0.125 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvq]` | 109 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvq]` |  | 109 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvv c, amit]` | 155 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvv c, amit]` |  | 155 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvv p, amit]` | 1670 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvv p, amit]` |  | 1670 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | amitriptyline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | amitriptyline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row27:col1', 'tab_1:row27:col2', 'tab_1:row27:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row13:col1', 'tab_1:row13:col2', 'tab_1:row13:col3'] |
| C5_dimension_Q30 | fail | 1 / [time] | 1/h | ['tab_1:row29:col1', 'tab_1:row29:col2', 'tab_1:row29:col3'] |
| C5_dimension_Q310 | pass | [time] |  | ['tab_1:row20:col1', 'tab_1:row20:col2', 'tab_1:row20:col3'] |
| C5_dimension_Q348 | pass | 1 / [time] |  | ['tab_1:row22:col1', 'tab_1:row22:col2', 'tab_1:row22:col3'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['tab_1:row21:col1', 'tab_1:row21:col2', 'tab_1:row21:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row16:col1', 'tab_1:row16:col2', 'tab_1:row16:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row14:col1', 'tab_1:row14:col2', 'tab_1:row14:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_1:row18:col1', 'tab_1:row18:col2', 'tab_1:row18:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 92.1 | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 92.1 L/h | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 58.2 L/h | ['tab_1:row27:col1', 'tab_1:row27:col2', 'tab_1:row27:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.67e+03 L | ['tab_1:row14:col1', 'tab_1:row14:col2', 'tab_1:row14:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 155 L | ['tab_1:row11:col1', 'tab_1:row11:col2', 'tab_1:row11:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamitriptyline%5D%20Amitriptyline_Koh2019_reference&body=Drug%3A%20amitriptyline%0ARecord%3A%20Amitriptyline_Koh2019_reference%0APaper%3A%20Koh_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amitriptyline/Amitriptyline_Koh2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:39 UTC</sub>
