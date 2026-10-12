<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;cisplatin&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/&quot;},{&quot;label&quot;:&quot;Urien_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisplatin_Imbs2016_reference&quot;,&quot;label&quot;:&quot;Imbs_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_Imbs2016_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_MoritaOgawa2020_reference&quot;,&quot;label&quot;:&quot;Morita-Ogawa_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_MoritaOgawa2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisplatin_Terranova2021_reference&quot;,&quot;label&quot;:&quot;Terranova_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisplatin/Cisplatin_Terranova2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cisplatin — `Cisplatin_Urien2004_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.04), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The cisplatin record was rejected because the parameter fm/Vm, whose meaning is a dimensionless fraction of drug converted to metabolite, is reported with unit l⁻¹ (value 0.001), a dimension mismatch on a structural parameter.**

The parameter labelled f m /V m carries value 0.001 with unit l⁻¹, but its meaning is the fraction of systemically available drug converted to metabolite, which should be dimensionless; this dimension mismatch on a structural parameter caused the rejection. The unit l⁻¹ could not be converted to SI units, so the parameter was passed on without an SI value. A second reader disagreed on the parameterization (mechanistic rather than apparent) and did not accept the V/F value of 0.16, which is labelled f m /V m , q DOSEm and lacks a unit. Extracted — cisplatin: fm 0.001 l -1, V/F 0.16, CL 0.002 h -1, t1/2z 50 h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which molecule was measured: this record has unbound platinum (cisplatin), the second reading unbound cisplatin; it also differs on 23 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:25:20.760566+00:00) predates the upstream re-run (2026-10-07 22:32:19.268023+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `cisplatin`, measured `unbound platinum (cisplatin)`.

## Citation
Urien S et al., Population pharmacokinetics of total an…, British journal of clinical… (2004)
  ·  DOI: [10.1111/j.1365-2125.2004.02082.x](https://doi.org/10.1111/j.1365-2125.2004.02082.x)

<div class="pk-model-meta" hidden drug="cisplatin" model-id="Cisplatin_Urien2004_reference" status="rejected" stale="true" population="adult patients treated with cisplatin for various malignancies" measured-compound="unbound platinum (cisplatin)" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| f m /V m (l -1 ) | `Q305` · kfm | 0.017 | l -1 | not captured | [1] / [l] | not captured | exact (1.0) | tab_4:row4:col2, tab_4:row4:col3, tab_4:row4:col4 | — | not captured |
| f m /V m , q DOSEm | `Q45` · fm | -2 | not captured | not captured | not captured | not captured | llm (0.6) | tab_4:row5:col1, tab_4:row5:col2, tab_4:row5:col3, tab_4:row5:col4 | — | not captured |
| f m /V m , q CLCr | `Q26` · CLR | -0.36 | not captured | not captured | not captured | not captured | llm (0.6) | tab_4:row8:col2 | — | not captured |
| CL m0 /V m (h -1 ) | `Q47` · kel | 0.014 | h -1 | 3.888888888888889e-06 | [1] / [h] | not captured | exact (1.0) | tab_4:row9:col1, tab_4:row9:col2, tab_4:row9:col3 | — | not captured |
| T 1/2 , elimination (h) | `Q57` · t1/2z | 50 | h | 180000.0 | [h] | not captured | llm_confirmed (0.6) | tab_4:row15:col1, Urien_2004_table_3:row16:col1 | — | not captured |
| V 1 (l) | `Q63` · V1 | 23.4 | l | 0.0234 | [l] | not captured | exact (1.0) | Urien_2004_table_3:row3:col1, Urien_2004_table_3:row3:col2, Urien_2004_table_3:row3:col3 | — | not captured |
| CL (l h -1 ) | `Q22` · CL | 35.6 | l h -1 | 9.888888888888889e-06 | [l] / [h] | not captured | exact (1.0) | Urien_2004_table_3:row5:col2, Urien_2004_table_3:row5:col3 | — | not captured |
| CL, q BSA | `Q319` · allometric_exponent | +0.83 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | Urien_2004_table_3:row6:col1, Urien_2004_table_3:row6:col2, Urien_2004_table_3:row6:col3 | — | not captured |
| Q (l h -1 ) | `Q30` · Q | 8.64 | l h -1 | 2.4e-06 | [l] / [h] | not captured | exact (1.0) | Urien_2004_table_3:row8:col1, Urien_2004_table_3:row8:col2, Urien_2004_table_3:row8:col3 | — | not captured |
| V 2 (l) | `Q64` · V2 | 12.0 | l | 0.012 | [l] | not captured | exact (1.0) | Urien_2004_table_3:row9:col1, Urien_2004_table_3:row9:col2, Urien_2004_table_3:row9:col3 | — | not captured |
| T 1/2 , distribution (h) | `Q59` · t1/2α | 0.34 | h | 1224.0 | [h] | not captured | llm (0.6) | Urien_2004_table_3:row15:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'f m /V m (l -1 )' → Q305 (unit '1 / [length] ** 3' vs ontology '1 / [time]') — route to review
- dropped duplicate Q45 ('f m /V m , q PROT', value '+1.33') — already have one for this compound
- dropped duplicate Q45 ('f m /V m , q BSA', value '-0.83') — already have one for this compound
- dropped unlinked row (NIL): 'ISV(f m /V m ) (% CV)' — extend the ontology if this is a real PK parameter (source ['tab_4:row12:col1', 'tab_4:row12:col2', 'tab_4:row12:col3'])
- dropped unlinked row (NIL): 'ISV(CL m /V m ) (% CV)' — extend the ontology if this is a real PK parameter (source ['tab_4:row13:col1', 'tab_4:row13:col2', 'tab_4:row13:col3'])
- dropped duplicate Q63 ('V 1 , q BSA', value '+1.60') — already have one for this compound
- dropped duplicate Q22 ('CL, q CLCr', value '+0.36') — already have one for this compound
- routed 'Res. Error (mg l -1 )' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ISV(V 1 ) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_3:row12:col1', 'Urien_2004_table_3:row12:col2', 'Urien_2004_table_3:row12:col3'])
- dropped unlinked row (NIL): 'ISV(CL) (% CV)' — extend the ontology if this is a real PK parameter (source ['Urien_2004_table_3:row13:col1', 'Urien_2004_table_3:row13:col2', 'Urien_2004_table_3:row13:col3'])
- implicit units: 'f m /V m , q CLCr' — the LLM proposed 'dimensionless', whose dimension does not fit Q26; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=unbound platinum (cisplatin)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 17 linked by role; re-tagged parent→irreversibly protein-bound platinum ×26, parent→unbound platinum (cisplatin) ×27
- molar mass: no plausible PubChem entry for 'irreversibly protein-bound platinum' ('irreversibly protein-bound platinum') — left in mass units
- molar mass: none found for 'irreversibly protein-bound platinum' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Urien_2004_table_3:row5:col1 = '3 5.5'
- companion parameter table 3 transcribed (31 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.04 (1/25 fields) | 24 |
| `gpt-oss:120b` | not confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[f m /v m , q dosem]` | 0.16 | not captured | only_one_extracted |
| `qwen3.8-27b` | `model.links` | [['cisplatin (unbound platinum)', 'irreversibly protein-bound platinum', 'metabolism']] | [['cisplatin', 'protein-bound platinum', 'interconversion']] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[cl m0 /v m]` | 0.014 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl m0 /v m]` | not captured | 0.014 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl, q bsa]` | +0.83 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | not captured | 0.68 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 35.6 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q clcr]` | -0.36 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q clcr]` | not captured | -0.36 | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q dosem]` | -2 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m , q dosem]` | not captured | -2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m]` | 0.017 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[f m /v m]` | not captured | 0.017 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` | not captured | 22.2 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q]` | 8.64 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , distribution]` | not captured | 0.45 | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , distribution]` | 0.34 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , elimination]` | 50 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2 , elimination]` | not captured | 50 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 1]` | not captured | 21.1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 1]` | 23.4 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 2]` | not captured | 42.6 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v 2]` | 12.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.primary_analyte` | unbound platinum (cisplatin) | unbound cisplatin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q26 | fail | not captured | -0.36 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Urien_2004_table_3:row5:col2', 'Urien_2004_table_3:row5:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Urien_2004_table_3:row8:col1', 'Urien_2004_table_3:row8:col2', 'Urien_2004_table_3:row8:col3'] |
| C5_dimension_Q305 | fail | 1 / [length] ** 3 | l -1 | not captured | not captured | ['tab_4:row4:col2', 'tab_4:row4:col3', 'tab_4:row4:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_4:row9:col1', 'tab_4:row9:col2', 'tab_4:row9:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_4:row15:col1', 'Urien_2004_table_3:row16:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Urien_2004_table_3:row15:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Urien_2004_table_3:row3:col1', 'Urien_2004_table_3:row3:col2', 'Urien_2004_table_3:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Urien_2004_table_3:row9:col1', 'Urien_2004_table_3:row9:col2', 'Urien_2004_table_3:row9:col3'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_4:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 35.6 | not captured | not captured | ['Urien_2004_table_3:row5:col2', 'Urien_2004_table_3:row5:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.6 L/h | not captured | not captured | ['Urien_2004_table_3:row5:col2', 'Urien_2004_table_3:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 23.4 L | not captured | not captured | ['Urien_2004_table_3:row3:col1', 'Urien_2004_table_3:row3:col2', 'Urien_2004_table_3:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12 L | not captured | not captured | ['Urien_2004_table_3:row9:col1', 'Urien_2004_table_3:row9:col2', 'Urien_2004_table_3:row9:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cisplatin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Urien_2004` / `Urien_2004::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:32 UTC</sub>
