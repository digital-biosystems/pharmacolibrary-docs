<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Zandvliet_2008 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Zandvliet2008_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> K12 has no unit.

<div class="pk-model-meta" hidden drug="capecitabine" model-id="Capecitabine_Zandvliet2008_reference" status="needs_review" stale="false" population="cancer patients" measured-compound="indisulam" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Zandvliet AS, Siegel-Lakhai WS, Beijnen JH, Copalu W, Etienne-Grimaldi MC, Milano G et al. PK/PD model of indisulam and capecitabine: interaction causes excessive myelosuppression. Clinical pharmacology and therapeutics 83(6):829–839 (2008).
  ·  DOI: [10.1038/sj.clpt.6100344](https://doi.org/10.1038/sj.clpt.6100344)

## Population and dosing

**Population:** cancer patients · condition cancer · age group adult.

**Dosing:** 350, 500, 600, 700, 800 mg/m 2, iv, multiple, every 21 h.

**Dosed compound ≠ measured compound:** dosed indisulam, capecitabine, measured indisulam.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| MTT enzyme (h) | MTT | 230 | h | 0.68 | 78 (None% RSE) |
| ka | kabs | 0.791 | 1/h | 4.42 |  |
| Absorption lag time (TLAG) | tlag | 0.0242 | h | 0.202 |  |
| V1 | V1 | 112 | L | 316 |  |
| CL10 | CL | 35.9 | L/h | 187 |  |
| CL12 | CL | 9.39 | L/h | 30.6 |  |
| k23 | kfm | 3.71 | 1/h | 13.1 |  |
| Typical value, TV k34 a | kfm | 6.66 | 1/h | 22.2 |  |
| k40 | kel | 27 | 1/h | 82.4 |  |
| Interindividual variability k34 | k12 | 22 |  | 27 |  |
| theta_q48_bilirubin | theta_q48_bilirubin | 0.178 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**K12 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MTT), so that value has no SI equivalent. Extracted — indisulam: MTT 230 h; capecitabine: kabs 0.791 1/h, tlag 0.0242 h, V1 112 L, CL 35.9 L/h; 5'-DFCR: CL 9.39 L/h; 5'-DFUR: kfm 3.71 1/h; 5-fluorouracil: kfm 6.66 1/h, kel 27 1/h, k12 22.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has indisulam, capecitabine, the second reading capecitabine; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| MTT enzyme (h) | `Q81` · MTT | 230 | h |  |  | h | 0.68 | llm_confirmed (0.6) | tab_2:row2:col2, tab_2:row2:col3, tab_2:row2:col6 | 78 (None% RSE) |
| ka | `Q49` · kabs | 0.791 | 1/h | 0.0002197 | 1/s | 1/h | 4.42 | exact (1) | Zandvliet_2008_table_1:row0:col2, Zandvliet_2008_table_1:row0:col3 |  |
| Absorption lag time (TLAG) | `Q83` · tlag | 0.0242 | h | 87.12 | s | h | 0.202 | exact (1) | Zandvliet_2008_table_1:row1:col2, Zandvliet_2008_table_1:row1:col3 |  |
| V1 | `Q63` · V1 | 112 | L | 0.112 | m3 | L | 316 | exact (1) | Zandvliet_2008_table_1:row2:col2, Zandvliet_2008_table_1:row2:col3 |  |
| CL10 | `Q22` · CL | 35.9 | L/h | 9.972e-06 | m3/s | L/h | 187 | exact (1) | Zandvliet_2008_table_1:row3:col2, Zandvliet_2008_table_1:row3:col3 |  |
| CL12 | `Q22` · CL | 9.39 | L/h | 2.608e-06 | m3/s | L/h | 30.6 | exact (1) | Zandvliet_2008_table_1:row4:col2, Zandvliet_2008_table_1:row4:col3 |  |
| k23 | `Q305` · kfm | 3.71 | 1/h | 0.001031 | 1/s | 1/h | 13.1 | exact (1) | Zandvliet_2008_table_1:row5:col2, Zandvliet_2008_table_1:row5:col3 |  |
| Typical value, TV k34 a | `Q305` · kfm | 6.66 | 1/h | 0.00185 | 1/s | 1/h | 22.2 | exact (1) | Zandvliet_2008_table_1:row7:col2, Zandvliet_2008_table_1:row7:col3 |  |
| k40 | `Q47` · kel | 27 | 1/h | 0.0075 | 1/s | 1/h | 82.4 | exact (1) | Zandvliet_2008_table_1:row9:col2, Zandvliet_2008_table_1:row9:col3 |  |
| Interindividual variability k34 | `Q301` · k12 | 22 |  |  |  |  | 27 | llm_corrected (0.6) | Zandvliet_2008_table_1:row19:col2, Zandvliet_2008_table_1:row19:col3 |  |
| theta_q48_bilirubin | `Q900` · theta_q48_bilirubin | 0.178 |  |  |  |  |  |  | Zandvliet_2008_table_1:row8:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'MTT enzyme (h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'MTT (h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'g' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Slope indisulam (l/mg)' routed out of structural estimates ('IIV (%)')
- dropped duplicate Q81 ('MTT (h)', value '93.7') — already have one for this compound
- dropped unlinked row (NIL): 'g' — extend the ontology if this is a real PK parameter (source ['tab_2:row5:col2', 'tab_2:row5:col3', 'tab_2:row5:col4', 'tab_2:row5:col6', 'tab_2:row5:col7', 'tab_2:row11:col2', 'tab_2:row11:col3', 'tab_2:row11:col4', 'tab_2:row11:col6', 'tab_2:row11:col7'])
- dropped PD-category row 'Slope indisulam (l/mg)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row6:col1', 'tab_2:row6:col2', 'tab_2:row6:col3', 'tab_2:row6:col4', 'tab_2:row6:col6', 'tab_2:row12:col1', 'tab_2:row12:col2', 'tab_2:row12:col3', 'tab_2:row12:col4', 'tab_2:row12:col6'])
- dropped unlinked row (NIL): '0' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col1', 'tab_2:row16:col2', 'tab_2:row16:col3'])
- unit_dimension_unknown: 'TLAG' (tlag)
- routed 'Interindividual variability ka' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q83 ('Interindividual variability TLAG', value '78') — already have one for this compound
- routed 'Interindividual variability V1' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability CL10' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability k23' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Interindividual variability k40' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- covariate effect for Q48 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka' → 1/h (from the popPK convention: 'First-order absorption rate constant (ka) is conventionally expressed in 1/h. The value 0.791 corresponds to a half-life')
- implicit units: 'Absorption lag time (TLAG)' → h (from the popPK convention: 'Lag time (TLAG) is a duration and is conventionally expressed in hours (h). The value 0.0242 h (approx 1.45 min) is cons')
- implicit units: 'V1' → L (from the popPK convention: 'Volume of distribution (V1) is conventionally expressed in liters (L) in population PK models (often normalized to weigh')
- implicit units: 'CL10' → L/h (from the popPK convention: 'Clearance (CL10) is conventionally expressed in L/h in population PK. The value 35.9 L/h is consistent with typical huma')
- implicit units: 'CL12' → L/h (from the popPK convention: 'Intercompartmental clearance (CL12) is conventionally expressed in L/h. The value 9.39 is consistent with this magnitude')
- implicit units: 'k23' → 1/h (from the popPK convention: 'First-order rate constant for metabolite formation (k23) is conventionally expressed in 1/h. The value 3.71 is consisten')
- implicit units: 'Typical value, TV k34 a' → 1/h (from the popPK convention: 'First-order rate constant for metabolite formation (k34) is conventionally expressed in 1/h. The value 6.66 is consisten')
- implicit units: 'k40' → 1/h (from the popPK convention: 'Elimination rate constant (k40) is conventionally expressed in 1/h. The value 27 indicates a very fast elimination, whic')
- implicit units: 'Interindividual variability k34' — the LLM proposed '%', whose dimension does not fit Q301; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V1); Q22 (CL10); Q22 (CL12)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=indisulam
- topology: 3 first-order transfer(s) across 7 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=pbpk; 26/26 row label(s) assigned, 16 linked by role; re-tagged parent→indisulam ×37, parent→capecitabine ×18, parent→5'-DFCR ×4, parent→5'-DFUR ×6, parent→5-fluorouracil ×11
- molar mass: none of 1 PubChem candidate(s) is 'indisulam' (LLM) — left in mass units
- molar mass: none found for 'indisulam' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'indisulam', not capecitabine — the review values are the parent's

**Extraction notes:**
- unparsed cell tab_2:row16:col4 = '1 2'
- unparsed cell Zandvliet_2008_table_1:row0:col1 = '( h À1 )'
- unparsed cell Zandvliet_2008_table_1:row5:col1 = '(h À1 )'
- unparsed cell Zandvliet_2008_table_1:row7:col1 = '(h À1 )'
- unparsed cell Zandvliet_2008_table_1:row8:col2 = 'À0.181'
- unparsed cell Zandvliet_2008_table_1:row9:col1 = '(h À1 )'
- companion parameter table 1 transcribed (39 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.062 (1/16 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['capecitabine', "5'-dfcr", 'metabolism'], ["5'-dfcr", "5'-dfur", 'metabolism'], ["5'-dfur", '5-fluorouracil', 'metabolism']] | [['capecitabine', "5' dfcr", 'metabolism'], ["5' dfcr", "5' dfur", 'metabolism'], ["5' dfur", '5-fluorouracil', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[absorption lag time]` | 0.0242 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl10]` | 35.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl12]` | 9.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[interindividual variability k34]` | 22 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k23]` | 3.71 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k40]` | 27 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.791 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt enzyme]` |  | 230 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt enzyme]` | 230 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q48_bilirubin]` | 0.178 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical value, tv k34 a]` | 6.66 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 112 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | indisulam, capecitabine | capecitabine | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | indisulam | capecitabine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zandvliet_2008_table_1:row3:col2', 'Zandvliet_2008_table_1:row3:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Zandvliet_2008_table_1:row4:col2', 'Zandvliet_2008_table_1:row4:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Zandvliet_2008_table_1:row5:col2', 'Zandvliet_2008_table_1:row5:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Zandvliet_2008_table_1:row7:col2', 'Zandvliet_2008_table_1:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Zandvliet_2008_table_1:row9:col2', 'Zandvliet_2008_table_1:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Zandvliet_2008_table_1:row0:col2', 'Zandvliet_2008_table_1:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Zandvliet_2008_table_1:row2:col2', 'Zandvliet_2008_table_1:row2:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Zandvliet_2008_table_1:row1:col2', 'Zandvliet_2008_table_1:row1:col3'] |
| C5_unit_missing_Q301 | fail | 1 / [time] |  | ['Zandvliet_2008_table_1:row19:col2', 'Zandvliet_2008_table_1:row19:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 35.9 | ['Zandvliet_2008_table_1:row3:col2', 'Zandvliet_2008_table_1:row3:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 35.9 L/h | ['Zandvliet_2008_table_1:row3:col2', 'Zandvliet_2008_table_1:row3:col3'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.39 L/h | ['Zandvliet_2008_table_1:row4:col2', 'Zandvliet_2008_table_1:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 112 L | ['Zandvliet_2008_table_1:row2:col2', 'Zandvliet_2008_table_1:row2:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_Zandvliet2008_reference&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_Zandvliet2008_reference%0APaper%3A%20Zandvliet_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_capecitabine/Capecitabine_Zandvliet2008_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 16:28 UTC</sub>
