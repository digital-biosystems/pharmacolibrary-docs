<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;filgotinib&quot;,&quot;href&quot;:&quot;drugs/drug_filgotinib/&quot;},{&quot;label&quot;:&quot;Namour_2015 \u00b7 estimate_rse&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# filgotinib — `Filgotinib_Namour2015_estimate_rse`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C7 apparent-parameter coherence violated (double correction).

<div class="pk-model-meta" hidden drug="filgotinib" model-id="Filgotinib_Namour2015_estimate_rse" status="rejected" stale="false" population="healthy adults and patients with rheumatoid arthritis" measured-compound="filgotinib" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Namour F, Diderichsen PM, Cox E, Vayssière B, Van der Aa A, Tasset C et al. Pharmacokinetics and Pharmacokinetic/Pharmacodynamic Modeling of Filgotinib (GLPG0634), a Selective JAK1 Inhibitor, in Support of Phase IIB Dose Selection. Clinical pharmacokinetics 54(8):859–874 (2015).
  ·  DOI: [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z)

## Population and dosing

**Population:** healthy adults and patients with rheumatoid arthritis · condition rheumatoid arthritis · age group adult · n = 80.

**Dosing:** 10, 200, 300, 450 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| ka a (/h) | kabs | -0.733 | /h | 5.64 |
| CLP/F a (L/h) | CL/F | 3.97 | L/h | 1.04 |
| effect_of_weight | effect_of_weight | 0.679 |  | 32.5 |
| V C/Fa (L) | V | 3.08 | L | 9.77 |
| effect_of_sex | effect_of_sex | 2.95 |  | 47.7 |
| Q/F a (L/h) | Q/F | 2.02 | L/h | 7.16 |
| V P/F a (L) | V/F | 4.72 | L | 3.29 |
| CLM/F a (L/h) | CL/F | 1.04 | L/h | 3.44 |
| V M/F a (L) | V1/F | 4.36 | L | 0.813 |
| C max (ng/mL) | Cmax | 83.0 | ng/mL |  |
| AUC0–∞ (ng × h/mL) | AUC∞ | 348 | ng × h/mL |  |
| t1/2,λz (h) | t1/2z | 5.72 | h |  |
| AUC0–t (ng × h/mL) | AUCt | 758 | ng × h/mL |  |
| C t (ng/mL) | Ct | 9.52 | ng/mL |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.452). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C7 apparent-parameter coherence violated (double correction).**

A reported unit could not be converted (Cmax, AUC∞, AUCt and Ct), so that value has no SI equivalent. Extracted — filgotinib: kabs -0.733 /h, CL/F 3.97 L/h, V 3.08 L, Q/F 2.02 L/h, V/F 4.72 L, Cmax 83 ng/mL, AUC∞ 348 ng × h/mL, t1/2z 5.72 h, … (+2); active metabolite: CL/F 1.04 L/h, V1/F 4.36 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has filgotinib → active metabolite (metabolism), the second reading filgotinib → filgotinib metabolite (metabolism); it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| ka a (/h) | `Q49` · kabs | -0.733 | /h | -0.0002036 | 1/s | 1/h | 5.64 | boundary_llm_dim_refused (0.8) | Tab4:row1:col1 |
| CLP/F a (L/h) | `Q27` · CL/F | 3.97 | L/h | 1.103e-06 | m3/s | l/h | 1.04 | llm_confirmed (0.6) | Tab4:row2:col1 |
| effect_of_weight | `Q900` · effect_of_weight | 0.679 |  |  |  |  | 32.5 |  | Tab4:row3:col1 |
| V C/Fa (L) | `Q61` · V | 3.08 | L | 0.00308 | m3 | l | 9.77 | llm (0.6) | Tab4:row4:col1 |
| effect_of_sex | `Q900` · effect_of_sex | 2.95 |  |  |  |  | 47.7 |  | Tab4:row5:col1 |
| Q/F a (L/h) | `Q69` · Q/F | 2.02 | L/h | 5.611e-07 | m3/s | l/h | 7.16 | llm_confirmed (0.6) | Tab4:row6:col1 |
| V P/F a (L) | `Q76` · V/F | 4.72 | L | 0.00472 | m3 | l | 3.29 | llm (0.6) | Tab4:row7:col1 |
| CLM/F a (L/h) | `Q27` · CL/F | 1.04 | L/h | 2.889e-07 | m3/s | l/h | 3.44 | exact (1) | Tab4:row8:col1 |
| V M/F a (L) | `Q290` · V1/F | 4.36 | L | 0.00436 | m3 | l | 0.813 | exact (1) | Tab4:row9:col1 |
| C max (ng/mL) | `Q32` · Cmax | 83.0 | ng/mL |  |  | ng/ml |  | space_fold (0.95) | Namour_2015_table_2:row1:col2, Namour_2015_table_2:row1:col3, Namour_2015_table_2:row1:col4, Namour_2015_table_2:row1:col5, Namour_2015_table_2:row1:col8, Namour_2015_table_2:row1:col9, Namour_2015_table_2:row1:col10, Namour_2015_table_2:row1:col11, Namour_2015_table_3:row2:col2, Namour_2015_table_3:row2:col3, Namour_2015_table_3:row2:col6, Namour_2015_table_3:row2:col7, Namour_2015_table_3:row2:col8, Namour_2015_table_3:row2:col14, Namour_2015_table_3:row2:col15, Namour_2015_table_3:row2:col18, Namour_2015_table_3:row2:col19, Namour_2015_table_3:row2:col20 |
| AUC0–∞ (ng × h/mL) | `Q17` · AUC∞ | 348 | ng × h/mL |  |  | (h·ng)/ml |  | exact (1) | Namour_2015_table_2:row3:col2, Namour_2015_table_2:row3:col3, Namour_2015_table_2:row3:col4, Namour_2015_table_2:row3:col5, Namour_2015_table_2:row3:col8, Namour_2015_table_2:row3:col9, Namour_2015_table_2:row3:col10, Namour_2015_table_2:row3:col11 |
| t1/2,λz (h) | `Q57` · t1/2z | 5.72 | h | 2.059e+04 | s | h |  | llm_confirmed (0.6) | Namour_2015_table_2:row4:col2, Namour_2015_table_2:row4:col3, Namour_2015_table_2:row4:col4, Namour_2015_table_2:row4:col5, Namour_2015_table_2:row4:col8, Namour_2015_table_2:row4:col9, Namour_2015_table_2:row4:col10, Namour_2015_table_2:row4:col11, Namour_2015_table_3:row6:col2, Namour_2015_table_3:row6:col3, Namour_2015_table_3:row6:col6, Namour_2015_table_3:row6:col7, Namour_2015_table_3:row6:col8, Namour_2015_table_3:row6:col14, Namour_2015_table_3:row6:col15, Namour_2015_table_3:row6:col18, Namour_2015_table_3:row6:col19, Namour_2015_table_3:row6:col20 |
| AUC0–t (ng × h/mL) | `Q19` · AUCt | 758 | ng × h/mL |  |  | (h·ng)/ml |  | exact (1) | Namour_2015_table_3:row4:col2, Namour_2015_table_3:row4:col3, Namour_2015_table_3:row4:col6, Namour_2015_table_3:row4:col7, Namour_2015_table_3:row4:col8, Namour_2015_table_3:row4:col14, Namour_2015_table_3:row4:col15, Namour_2015_table_3:row4:col18, Namour_2015_table_3:row4:col19, Namour_2015_table_3:row4:col20 |
| C t (ng/mL) | `Q75` · Ct | 9.52 | ng/mL |  |  | ng/ml |  | space_fold (0.95) | Namour_2015_table_3:row5:col2, Namour_2015_table_3:row5:col3, Namour_2015_table_3:row5:col6, Namour_2015_table_3:row5:col7, Namour_2015_table_3:row5:col8, Namour_2015_table_3:row5:col14, Namour_2015_table_3:row5:col15, Namour_2015_table_3:row5:col18, Namour_2015_table_3:row5:col19, Namour_2015_table_3:row5:col20 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate level 'Effect of weight' → Q900:effect_of_weight = 0.679 (linear_fractional on Q27)
- covariate level 'Effect of sex' → Q900:effect_of_sex = 2.95 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'FRAC300 mg b' — extend the ontology if this is a real PK parameter (source ['Tab4:row10:col1'])
- dropped unlinked row (NIL): 'FRAC450 mg b' — extend the ontology if this is a real PK parameter (source ['Tab4:row11:col1'])
- routed 'Variance of unexplained variability on filgotinib concentration (σP,prop2)' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- routed 'Variance of unexplained variability on metabolite concentration (σM,prop2)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Filgotinib dose (mg)' — extend the ontology if this is a real PK parameter (source ['Namour_2015_table_2:row0:col2', 'Namour_2015_table_2:row0:col3', 'Namour_2015_table_2:row0:col4', 'Namour_2015_table_2:row0:col5', 'Namour_2015_table_2:row0:col8', 'Namour_2015_table_2:row0:col9', 'Namour_2015_table_2:row0:col10', 'Namour_2015_table_2:row0:col11', 'Namour_2015_table_3:row0:col2', 'Namour_2015_table_3:row0:col3', 'Namour_2015_table_3:row0:col6', 'Namour_2015_table_3:row0:col7', 'Namour_2015_table_3:row0:col8', 'Namour_2015_table_3:row0:col14', 'Namour_2015_table_3:row0:col15', 'Namour_2015_table_3:row0:col18', 'Namour_2015_table_3:row0:col19', 'Namour_2015_table_3:row0:col20'])
- unit_dimension_unknown: 'ng × h/mL' (AUC∞)
- unit_dimension_unknown: 'ng × h/mL' (AUCt)
- implicit units: 'AUC0–∞ (ng × h/mL)' — the LLM proposed 'ng × h/mL', whose dimension does not fit Q17; left unset
- implicit units: 'AUC0–t (ng × h/mL)' — the LLM proposed 'ng × h/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=filgotinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- population split: 'estimate (% rse)' subgroup of Namour_2015 (paper reports 6 populations: anova (p value), anovaa (p value), anovaa (p value)tukey’s test, estimate (% rse), filgotinib, metabolite)
- row roles: 2 per-group rows of filgotinib fraction_metabolized but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 11 linked by role; re-tagged parent→active metabolite ×5, filgotinib→parent ×9
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab4:row1:col3 = '−0.804 to −0.645'
- unparsed cell Tab4:row2:col3 = '3.89 to 4.05'
- unparsed cell Tab4:row2:col4 = '0.0375 to 0.206'
- unparsed cell Tab4:row3:col3 = '0.137 to 1.06'
- unparsed cell Tab4:row4:col3 = '2.23 to 3.58'
- unparsed cell Tab4:row4:col4 = '1.44 to 4.39'
- unparsed cell Tab4:row5:col3 = '0.688 to 8.94'
- unparsed cell Tab4:row6:col3 = '1.74 to 2.31'
- unparsed cell Tab4:row7:col3 = '4.41 to 4.99'
- unparsed cell Tab4:row8:col3 = '0.974 to 1.11'
- unparsed cell Tab4:row8:col4 = '0.0273 to 0.0578'
- unparsed cell Tab4:row9:col3 = '4.28 to 4.43'
- unparsed cell Tab4:row9:col4 = '0.0198 to 0.0621'
- unparsed cell Tab4:row10:col3 = '0.195 to 0.579'
- unparsed cell Tab4:row11:col3 = '0.0711 to 0.717'
- unparsed cell Tab4:row12:col3 = '0.0451 to 0.413'
- unparsed cell Tab4:row13:col3 = '0.282 to 0.394'
- unparsed cell Tab4:row14:col3 = '0.0613 to 0.0861'
- unparsed cell Tab4:row15:col3 = '0.0524 to 0.0856'
- transposed table Namour_2015_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Namour_2015_table_2:row2:col1 = '1 (0.5–2)'
- unparsed cell Namour_2015_table_2:row2:col2 = '2.5 (1–3)'
- unparsed cell Namour_2015_table_2:row2:col3 = '2 (0.5–3)'
- unparsed cell Namour_2015_table_2:row2:col4 = '2 (0.5–3)'
- unparsed cell Namour_2015_table_2:row2:col5 = '3 (1–3)'
- unparsed cell Namour_2015_table_2:row2:col7 = '3 (1–2)'
- unparsed cell Namour_2015_table_2:row2:col8 = '4 (3–5)'
- unparsed cell Namour_2015_table_2:row2:col9 = '3 (0.5–5)'
- unparsed cell Namour_2015_table_2:row2:col10 = '5 (5–5]'
- unparsed cell Namour_2015_table_2:row2:col11 = '5 (3–8)'
- companion parameter table 2 transcribed (48 record(s))
- transposed table Namour_2015_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Namour_2015_table_3:row0:col11 = '200 mg q.d. vs 100 mg b.i.d'
- unparsed cell Namour_2015_table_3:row0:col23 = '200 mg q.d. vs 100 mg b.i.d.'
- unparsed cell Namour_2015_table_3:row2:col22 = '300 450 200'
- unparsed cell Namour_2015_table_3:row3:col1 = '0.5 (0.5–2)'
- unparsed cell Namour_2015_table_3:row3:col2 = '1.5 (0.5–3)'
- unparsed cell Namour_2015_table_3:row3:col3 = '3 (2–5)'
- unparsed cell Namour_2015_table_3:row3:col6 = '2 (1–2)'
- unparsed cell Namour_2015_table_3:row3:col7 = '1.5 (0.5–3)'
- unparsed cell Namour_2015_table_3:row3:col8 = '2.5 (0.5–3)'
- unparsed cell Namour_2015_table_3:row3:col13 = '1 (0–0.5)'
- unparsed cell Namour_2015_table_3:row3:col14 = '3 (2–5)'
- unparsed cell Namour_2015_table_3:row3:col15 = '5 (0–5)'
- unparsed cell Namour_2015_table_3:row3:col18 = '5 (3–5)'
- unparsed cell Namour_2015_table_3:row3:col19 = '5 (3–8)'
- unparsed cell Namour_2015_table_3:row3:col20 = '5 (3–8)'
- unparsed cell Namour_2015_table_3:row4:col5 = '25 50 50 100'
- unparsed cell Namour_2015_table_3:row4:col10 = '300 200 200 450'
- unparsed cell Namour_2015_table_3:row4:col22 = '300 450 200'
- unparsed cell Namour_2015_table_3:row5:col17 = '50 25 25 100'
- unparsed cell Namour_2015_table_3:row5:col22 = '300 450 450 200'
- unparsed cell Namour_2015_table_3:row6:col10 = '200 450 450 300'
- companion parameter table 3 transcribed (88 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.452 (14/31 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['filgotinib', 'active metabolite', 'metabolism']] | [['filgotinib', 'filgotinib metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[auc0-inf]` | 348 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` | 758 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | 83.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c t]` | 9.52 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f a]` | 1.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f a]` |  | 1.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clp/f a].covariate_forms` | ['linear_fractional', 'linear_fractional'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[effect_of_weight]` | 0.679 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[frac450 mg b]` |  | 0.363 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative increase in bioavailability in ra patients vs healthy volunteers]` |  | 0.216 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2,λz]` | 5.72 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight]` |  | 0.679 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c/fa].parameter_id` | Q61 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[v m/f a]` | 4.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v m/f a]` |  | 4.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p/f a]` | 4.72 |  | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab4:row2:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab4:row8:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab4:row9:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Namour_2015_table_2:row1:col2', 'Namour_2015_table_2:row1:col3', 'Namour_2015_table_2:row1:col4', 'Namour_2015_table_2:row1:col5', 'Namour_2015_table_2:row1:col8', 'Namour_2015_table_2:row1:col9', 'Namour_2015_table_2:row1:col10', 'Namour_2015_table_2:row1:col11', 'Namour_2015_table_3:row2:col2', 'Namour_2015_table_3:row2:col3', 'Namour_2015_table_3:row2:col6', 'Namour_2015_table_3:row2:col7', 'Namour_2015_table_3:row2:col8', 'Namour_2015_table_3:row2:col14', 'Namour_2015_table_3:row2:col15', 'Namour_2015_table_3:row2:col18', 'Namour_2015_table_3:row2:col19', 'Namour_2015_table_3:row2:col20'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab4:row1:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Namour_2015_table_2:row4:col2', 'Namour_2015_table_2:row4:col3', 'Namour_2015_table_2:row4:col4', 'Namour_2015_table_2:row4:col5', 'Namour_2015_table_2:row4:col8', 'Namour_2015_table_2:row4:col9', 'Namour_2015_table_2:row4:col10', 'Namour_2015_table_2:row4:col11', 'Namour_2015_table_3:row6:col2', 'Namour_2015_table_3:row6:col3', 'Namour_2015_table_3:row6:col6', 'Namour_2015_table_3:row6:col7', 'Namour_2015_table_3:row6:col8', 'Namour_2015_table_3:row6:col14', 'Namour_2015_table_3:row6:col15', 'Namour_2015_table_3:row6:col18', 'Namour_2015_table_3:row6:col19', 'Namour_2015_table_3:row6:col20'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab4:row4:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab4:row6:col1'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Namour_2015_table_3:row5:col2', 'Namour_2015_table_3:row5:col3', 'Namour_2015_table_3:row5:col6', 'Namour_2015_table_3:row5:col7', 'Namour_2015_table_3:row5:col8', 'Namour_2015_table_3:row5:col14', 'Namour_2015_table_3:row5:col15', 'Namour_2015_table_3:row5:col18', 'Namour_2015_table_3:row5:col19', 'Namour_2015_table_3:row5:col20'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Tab4:row7:col1'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ng × h/mL | ['Namour_2015_table_2:row3:col2', 'Namour_2015_table_2:row3:col3', 'Namour_2015_table_2:row3:col4', 'Namour_2015_table_2:row3:col5', 'Namour_2015_table_2:row3:col8', 'Namour_2015_table_2:row3:col9', 'Namour_2015_table_2:row3:col10', 'Namour_2015_table_2:row3:col11'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | ng × h/mL | ['Namour_2015_table_3:row4:col2', 'Namour_2015_table_3:row4:col3', 'Namour_2015_table_3:row4:col6', 'Namour_2015_table_3:row4:col7', 'Namour_2015_table_3:row4:col8', 'Namour_2015_table_3:row4:col14', 'Namour_2015_table_3:row4:col15', 'Namour_2015_table_3:row4:col18', 'Namour_2015_table_3:row4:col19', 'Namour_2015_table_3:row4:col20'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.216 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.97 L/h | ['Tab4:row2:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.04 L/h | ['Tab4:row8:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 4.36 L | ['Tab4:row9:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.08 L | ['Tab4:row4:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 4.72 L | ['Tab4:row7:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfilgotinib%5D%20Filgotinib_Namour2015_estimate_rse&body=Drug%3A%20filgotinib%0ARecord%3A%20Filgotinib_Namour2015_estimate_rse%0APaper%3A%20Namour_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_filgotinib/Filgotinib_Namour2015_estimate_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:01 UTC</sub>
