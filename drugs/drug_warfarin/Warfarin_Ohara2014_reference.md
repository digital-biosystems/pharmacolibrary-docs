<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;warfarin&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/&quot;},{&quot;label&quot;:&quot;Ohara_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Warfarin_Sridharan2021_reference&quot;,&quot;label&quot;:&quot;Sridharan_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Sridharan2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Warfarin_Zhu2017_reference&quot;,&quot;label&quot;:&quot;Zhu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/Warfarin_Zhu2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Aoyama_2022_INR&quot;,&quot;label&quot;:&quot;Aoyama_2022 \u00b7 INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Aoyama_2022_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hirai_2024_PT_INR&quot;,&quot;label&quot;:&quot;Hirai_2024 \u00b7 PT-INR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_warfarin/pd_Hirai_2024_PT_INR.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# warfarin — `Warfarin_Ohara2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected because clearance and elimination rate parameters lack SI units, preventing standardization of the S-warfarin model.

<div class="pk-model-meta" hidden drug="warfarin" model-id="Warfarin_Ohara2014_reference" status="rejected" stale="false" population="Chinese patients" measured-compound="S-warfarin" parameterization="mechanistic" topology="1C"></div>

## Citation
Ohara M, Takahashi H, Lee MT, Wen MS, Lee TH, Chuang HP et al. Determinants of the over-anticoagulation response during warfarin initiation therapy in Asian patients based on population pharmacokinetic-pharmacodynamic analyses. PloS one 9(8):e105891 (2014).
  ·  DOI: [10.1371/journal.pone.0105891](https://doi.org/10.1371/journal.pone.0105891)

## Population and dosing

**Population:** Chinese patients · age group adult · n = &gt;=99.

**Dosed compound ≠ measured compound:** dosed warfarin, measured S-warfarin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL(S) (mL/h)c | CL | 240 | S | 38.5 (None% RSE) |
| λe | kel | 3.48 | S |  |
| Effect of NPT0 on λ | λ1 | 0.00578 | S |  |
| theta_cl_cyp2c9 | theta_cl_cyp2c9 | 0.550 |  |  |
| theta_q322_vkorc1 | theta_q322_vkorc1 | 2.11 |  |  |
| theta_q322_cyp4f2 | theta_q322_cyp4f2 | 1.32 |  |  |
| Vd | V | 14.3 | L |  |
| ka (1/h) | kabs | 0.214 | 1/h |  |
| Lag (h) | tlag | 1.29 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected because clearance and elimination rate parameters lack SI units, preventing standardization of the S-warfarin model.**

Parameters such as clearance (240) and elimination rate constant (3.48) are marked with the placeholder unit 'S' instead of standard dimensions. A second reader disputed the presence of absorption and volume parameters in the extracted record. Consequently, the model cannot be processed for review without valid unit conversions. Extracted — warfarin: CL 240 S, kel 3.48 S, λ1 0.00578 S; S-warfarin: V 14.3 L, kabs 0.214 1/h, tlag 1.29 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has warfarin, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL(S) (mL/h)c | `Q22` · CL | 240 | S |  |  | s | central_subscript (0.9) | pone-0105891-t002:row3:col1, pone-0105891-t002:row3:col3 | 38.5 (None% RSE) |
| λe | `Q47` · kel | 3.48 | S |  |  | s | llm (0.6) | pone-0105891-t002:row22:col1, pone-0105891-t002:row22:col3 |  |
| Effect of NPT0 on λ | `Q67` · λ1 | 0.00578 | S |  |  | s | llm (0.6) | pone-0105891-t002:row23:col1, pone-0105891-t002:row23:col3 |  |
| theta_cl_cyp2c9 | `Q900` · theta_cl_cyp2c9 | 0.550 |  |  |  |  |  | pone-0105891-t002:row5:col1, pone-0105891-t002:row5:col3 |  |
| theta_q322_vkorc1 | `Q900` · theta_q322_vkorc1 | 2.11 |  |  |  |  |  | pone-0105891-t002:row13:col1, pone-0105891-t002:row13:col3 |  |
| theta_q322_cyp4f2 | `Q900` · theta_q322_cyp4f2 | 1.32 |  |  |  |  |  | pone-0105891-t002:row14:col1, pone-0105891-t002:row14:col3 |  |
| Vd | `Q61` · V | 14.3 | L | 0.0143 | m3 | L | review_gapfill (0.7) | Aoyama_2022:review |  |
| ka (1/h) | `Q49` · kabs | 0.214 | 1/h | 5.944e-05 | 1/s | 1/h | review_gapfill (0.7) | Gomeni_2026:review |  |
| Lag (h) | `Q83` · tlag | 1.29 | h | 4644 | s | h | review_gapfill (0.7) | Gomeni_2026:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CL(S) (mL/h)c' → Q22 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Effect of BSA on CL(S)' → Q22 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('Effect of BSA on CL(S)', value '2.14') — already have one for this compound
- dropped PD-category row 'IC50 (µg/mL)d' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone-0105891-t002:row11:col1', 'pone-0105891-t002:row11:col3'])
- dropped PD-category row 'Kout (1/h)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pone-0105891-t002:row12:col1', 'pone-0105891-t002:row12:col3'])
- dropped unlinked row (NIL): 'INRMax (fixed)' — extend the ontology if this is a real PK parameter (source ['pone-0105891-t002:row21:col1', 'pone-0105891-t002:row21:col3'])
- unit_dimension_mismatch: 'λe' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'Effect of NPT0 on λ' → Q67 (unit '[time]' vs ontology '[mass] / [time]') — route to review
- dropped unlinked row (NIL): 'ωλ (%)' — extend the ontology if this is a real PK parameter (source ['pone-0105891-t002:row25:col1', 'pone-0105891-t002:row25:col3'])
- covariate effect for Q322 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-warfarin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Aoyama_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Gomeni_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Gomeni_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pone-0105891-t002:row3:col2 = '220, 260'
- unparsed cell pone-0105891-t002:row3:col4 = '219, 260'
- unparsed cell pone-0105891-t002:row4:col2 = '1.12, 3.16'
- unparsed cell pone-0105891-t002:row4:col4 = '1.14, 3.23'
- unparsed cell pone-0105891-t002:row5:col2 = '0.374, 0.712'
- unparsed cell pone-0105891-t002:row5:col4 = '0.380, 0.723'
- unparsed cell pone-0105891-t002:row7:col2 = '31.3, 48.5'
- unparsed cell pone-0105891-t002:row7:col4 = '27.5, 49.2'
- unparsed cell pone-0105891-t002:row9:col2 = '0.0676, 0.0718'
- unparsed cell pone-0105891-t002:row9:col4 = '0.0557, 0.0834'
- unparsed cell pone-0105891-t002:row11:col2 = '0.0631, 0.0819'
- unparsed cell pone-0105891-t002:row11:col4 = '0.0629, 0.0818'
- unparsed cell pone-0105891-t002:row12:col2 = '0.0121, 0.0151'
- unparsed cell pone-0105891-t002:row12:col4 = '0.0123, 0.0155'
- unparsed cell pone-0105891-t002:row13:col2 = '1.58, 2.56'
- unparsed cell pone-0105891-t002:row13:col4 = '1.58, 2.65'
- unparsed cell pone-0105891-t002:row14:col2 = '1.07, 1.53'
- unparsed cell pone-0105891-t002:row14:col4 = '1.11, 1.57'
- unparsed cell pone-0105891-t002:row16:col2 = '34.1, 42.9'
- unparsed cell pone-0105891-t002:row16:col4 = '31.5, 42.4'
- unparsed cell pone-0105891-t002:row17:col2 = '32.9, 58.3'
- unparsed cell pone-0105891-t002:row17:col4 = '31.1, 58.1'
- unparsed cell pone-0105891-t002:row19:col2 = '−16.6, 41.1'
- unparsed cell pone-0105891-t002:row19:col4 = '11.2, 13.4'
- unparsed cell pone-0105891-t002:row22:col2 = '3.30, 3.66'
- unparsed cell pone-0105891-t002:row22:col4 = '3.31, 3.65'
- unparsed cell pone-0105891-t002:row23:col2 = '0.00304, 0.00872'
- unparsed cell pone-0105891-t002:row23:col4 = '0.00283, 0.00867'
- unparsed cell pone-0105891-t002:row25:col2 = '21.6, 26.7'
- unparsed cell pone-0105891-t002:row25:col4 = '18.1, 28.9'
- unparsed cell pone-0105891-t002:row27:col2 = '23.9, 25.5'
- unparsed cell pone-0105891-t002:row27:col4 = '23.1, 26.2'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[ka]` | 0.214 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag]` | 1.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 14.3 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | warfarin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | S-warfarin | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | fail | [time] | S | ['pone-0105891-t002:row3:col1', 'pone-0105891-t002:row3:col3'] |
| C5_dimension_Q47 | fail | [time] | S | ['pone-0105891-t002:row22:col1', 'pone-0105891-t002:row22:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Gomeni_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Aoyama_2022:review'] |
| C5_dimension_Q67 | fail | [time] | S | ['pone-0105891-t002:row23:col1', 'pone-0105891-t002:row23:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Gomeni_2026:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 240 | ['pone-0105891-t002:row3:col1', 'pone-0105891-t002:row3:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 14.3 L | ['Aoyama_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bwarfarin%5D%20Warfarin_Ohara2014_reference&body=Drug%3A%20warfarin%0ARecord%3A%20Warfarin_Ohara2014_reference%0APaper%3A%20Ohara_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_warfarin/Warfarin_Ohara2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-27 11:40 UTC</sub>
