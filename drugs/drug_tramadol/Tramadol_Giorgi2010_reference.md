<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Giorgi_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Giorgi2010_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.952), gpt-oss:120b (not confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The tramadol record was rejected because its three metabolites (O-desmethyl-, N,N-didesmethyl- and N,O-didesmethyl-tramadol) are unlinked: the metabolism connections carry no parameter values, so the metabolite compartments are unreachable from the tramadol dose.**

All three metabolites are formed from tramadol in the central compartment but each has zero compartments and the metabolism links have no parameter value ('none', kind unknown), leaving them without a path from the dose. The peripheral volume V2 was left with no value, and a reported unit could not be converted to SI, so that parameter reached the model without an SI value. A second reader also disagreed on several entries, reading a bioavailability f% of 92 and a k12 of 20.21 1/h where the record has none, and no metabolism links at all, but these disagreements do not change the rejection cause. Extracted — tramadol: kel 1.18 1/h, Q 8.74 L/h, t1/2ka 0.73 h, CL 1.13e+03 mL/min, AUMC 6.07, MRT 1.13 h, Vss 1e+03 L, V1 7 L, … (+6).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has tramadol, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:33:19.020452+00:00) predates the upstream re-run (2026-10-07 15:10:30.034316+00:00). Current validate status: `needs_review`.

## Citation
Giorgi M et al., Pharmacokinetics of tramadol and metabo…, Polish journal of veterinar… (2010)
  ·  DOI: [10.2478/v10181-010-0027-y](https://doi.org/10.2478/v10181-010-0027-y)

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Giorgi2010_reference" status="needs_review" stale="true" population="healthy male beagle dogs" measured-compound="tramadol" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 15 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K 10 | `Q47` · kel | 1.18 | 1/h | 0.00032777777777777775 | 1/h | not captured | space_fold (0.95) | tab_1:row1:col1, tab_1:row1:col2, tab_1:row1:col3, Giorgi_2010_table_1:row2:col1, Giorgi_2010_table_1:row2:col2, Giorgi_2010_table_1:row2:col3 | — | not captured |
| K 12 | `Q301` · k12 | 8.74 | 1/h | 0.002427777777777778 | 1/h | not captured | space_fold (0.95) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3 | — | not captured |
| K 21 | `Q302` · k21 | 20.21 | 1/h | 0.005613888888888889 | 1/h | not captured | space_fold (0.95) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3 | — | not captured |
| K 10 t 1/2 | `Q95` · t1/2ka | 0.73 | h | 2628.0 | h | not captured | llm (0.6) | tab_1:row4:col2, tab_1:row4:col3, Giorgi_2010_table_1:row6:col2, Giorgi_2010_table_1:row6:col3 | — | not captured |
| Cl T | `Q22` · CL | 1131 | mL/min | 1.8849999999999997e-05 | L/h | not captured | space_fold (0.95) | tab_1:row6:col2, tab_1:row6:col3, Giorgi_2010_table_1:row7:col2, Giorgi_2010_table_1:row7:col3 | — | not captured |
| AUMC 0-∞ | `Q20` · AUMC | 6.07 | not captured | not captured | not captured | not captured | space_fold (0.95) | tab_1:row7:col2, tab_1:row7:col3 | — | not captured |
| MRT | `Q53` · MRT | 1.13 | h | 4067.9999999999995 | h | not captured | exact (1.0) | tab_1:row8:col2, tab_1:row8:col3 | — | not captured |
| Vdss | `Q65` · Vss | 1003 | L | 1.0030000000000001 | L | not captured | llm (0.6) | tab_1:row9:col2, tab_1:row9:col3 | — | not captured |
| V 1 | `Q63` · V1 | 7.00 | L | 0.007 | L | not captured | space_fold (0.95) | tab_1:row10:col2, tab_1:row10:col3 | — | not captured |
| Vd | `Q61` · V | 293 | L | 0.293 | L | not captured | exact (1.0) | Giorgi_2010_table_1:row0:col2, Giorgi_2010_table_1:row0:col3 | — | not captured |
| K 01 | `Q49` · kabs | 6.90 | 1/h | 0.0019166666666666668 | 1/h | not captured | space_fold (0.95) | Giorgi_2010_table_1:row1:col1, Giorgi_2010_table_1:row1:col2, Giorgi_2010_table_1:row1:col3 | — | not captured |
| Tlag | `Q83` · tlag | 0.40 | h | 1440.0 | h | not captured | exact (1.0) | Giorgi_2010_table_1:row3:col2, Giorgi_2010_table_1:row3:col3 | — | not captured |
| AUC 0-∞ | `Q17` · AUC∞ | 3.59 | h*μg/mL | not captured | h*μg/mL | not captured | space_fold (0.95) | Giorgi_2010_table_1:row4:col2, Giorgi_2010_table_1:row4:col3 | — | not captured |
| Tmax | `Q56` · tmax | 0.34 | h | 1224.0 | h | not captured | exact (1.0) | Giorgi_2010_table_1:row8:col2, Giorgi_2010_table_1:row8:col3 | — | not captured |
| Cmax | `Q32` · Cmax | 2.52 | μg/mL | not captured | μg/mL | not captured | exact (1.0) | Giorgi_2010_table_1:row9:col2, Giorgi_2010_table_1:row9:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V 2 α β | Q64 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- column 'parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q49 ('K 01 t 1/2', value '0.10') — already have one for this compound
- dropped unlinked row (NIL): 'F%' — extend the ontology if this is a real PK parameter (source ['Giorgi_2010_table_1:row10:col2', 'Giorgi_2010_table_1:row10:col3'])
- implicit units: 'K 10' → 1/h (from the popPK convention: 'K10 is a first-order elimination rate constant. The paper lists λz (terminal phase rate constant) with units of 1/h in t')
- implicit units: 'K 12' → 1/h (from the popPK convention: 'K12 is a first-order intercompartmental rate constant. Standard convention for such rate constants in population PK is r')
- implicit units: 'K 21' → 1/h (from the popPK convention: 'K21 is a first-order intercompartmental rate constant. Standard convention for such rate constants in population PK is r')
- implicit units: 'K 10 t 1/2' → h (from the popPK convention: "K10t1/2 represents the half-life of a phase. The paper explicitly provides units of 'h' for t1/2λz and Tmax. Half-lives ")
- implicit units: 'Cl T' → mL/min (from the popPK convention: 'ClT is total body clearance. The value 1131 is consistent with mL/min for a dog (~10kg) (approx 113 mL/kg/min is high bu')
- implicit units: 'AUMC 0-∞' — the LLM proposed 'h*h*μg/mL', whose dimension does not fit Q20; left unset
- implicit units: 'MRT' → h (from the paper text: "The text excerpt explicitly lists 'MRT (h)' with a value of 3.75 in one row, and the parameter is defined as time.")
- implicit units: 'Vdss' → L (from the popPK convention: 'Vdss is a volume of distribution. The value 1003 is consistent with Liters (1.003 L) for a 10kg dog (100 mL/kg), which i')
- implicit units: 'V 1' → L (from the popPK convention: 'V1 is the volume of the central compartment. The value 7.00 is consistent with Liters (7 L) for a 10kg dog (700 mL/kg), ')
- implicit units: 'Vd' → L (from the popPK convention: 'Vd is the volume of distribution. The value 293 is consistent with Liters (0.293 L or 293 mL) or possibly dL? 293 L is h')
- implicit units: 'K 01' → 1/h (from the popPK convention: 'K01 is an absorption rate constant. Standard convention for first-order rate constants is reciprocal time (1/h).')
- implicit units: 'Tlag' → h (from the popPK convention: "Tlag is a lag time. The paper provides units of 'h' for Tmax. Lag times are conventionally expressed in time units (h).")
- implicit units: 'AUC 0-∞' → h*μg/mL (from the paper text: "The text excerpt explicitly lists 'AUC 0-∞ (h*μg/mL)' with values such as 1.51.")
- implicit units: 'Tmax' → h (from the paper text: "The text excerpt explicitly lists 'Tmax (h)' with values such as 0.94.")
- implicit units: 'Cmax' → μg/mL (from the paper text: "The text excerpt explicitly lists 'Cmax (μg/mL)' with values such as 0.34.")
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Cl T); Q63 (V 1); Q64 (V 2 α β); Q61 (Vd)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tramadol
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_1:row11:col2 = '487 56,97 6,15'
- unparsed cell tab_1:row11:col3 = '332 37,18 0,75'
- companion parameter table 1 transcribed (24 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.952 (20/21 fields) | 1 |
| `gpt-oss:120b` | not confirmed | 0.727 (16/22 fields) | 6 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f%]` | not captured | 92 | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [['tramadol', 'o-desmethyl-tramadol', 'metabolism'], ['tramadol', 'n-,n-didesmethyl-tramadol', 'metabolism'], ['tramadol', 'n-,o-didesmethyl-tramadol', 'metabolism']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[f%]` | not captured | 92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k 12].parameter_id` | Q30 | Q301 | mismatch |
| `gpt-oss:120b` | `parameters[k 21]` | not captured | 20.21 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | tramadol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | tramadol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 15 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Giorgi_2010_table_1:row4:col2', 'Giorgi_2010_table_1:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row6:col2', 'tab_1:row6:col3', 'Giorgi_2010_table_1:row7:col2', 'Giorgi_2010_table_1:row7:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Giorgi_2010_table_1:row9:col2', 'Giorgi_2010_table_1:row9:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3', 'Giorgi_2010_table_1:row2:col1', 'Giorgi_2010_table_1:row2:col2', 'Giorgi_2010_table_1:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Giorgi_2010_table_1:row1:col1', 'Giorgi_2010_table_1:row1:col2', 'Giorgi_2010_table_1:row1:col3'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tab_1:row8:col2', 'tab_1:row8:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Giorgi_2010_table_1:row8:col2', 'Giorgi_2010_table_1:row8:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Giorgi_2010_table_1:row0:col2', 'Giorgi_2010_table_1:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col2', 'tab_1:row10:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row9:col2', 'tab_1:row9:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Giorgi_2010_table_1:row3:col2', 'Giorgi_2010_table_1:row3:col3'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['tab_1:row4:col2', 'tab_1:row4:col3', 'Giorgi_2010_table_1:row6:col2', 'Giorgi_2010_table_1:row6:col3'] |
| C5_unit_missing_Q20 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_1:row7:col2', 'tab_1:row7:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1131.0 | not captured | not captured | ['tab_1:row6:col2', 'tab_1:row6:col3', 'Giorgi_2010_table_1:row7:col2', 'Giorgi_2010_table_1:row7:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 67.9 L/h | not captured | not captured | ['tab_1:row6:col2', 'tab_1:row6:col3', 'Giorgi_2010_table_1:row7:col2', 'Giorgi_2010_table_1:row7:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 293 L | not captured | not captured | ['Giorgi_2010_table_1:row0:col2', 'Giorgi_2010_table_1:row0:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7 L | not captured | not captured | ['tab_1:row10:col2', 'tab_1:row10:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 1e+03 L | not captured | not captured | ['tab_1:row9:col2', 'tab_1:row9:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Giorgi_2010` / `Giorgi_2010::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:10 UTC</sub>
