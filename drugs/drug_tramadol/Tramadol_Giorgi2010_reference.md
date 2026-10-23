<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Giorgi_2010 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_SoriaChacartegui2026_reference&quot;,&quot;label&quot;:&quot;Soria-Chacartegui_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_SoriaChacartegui2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Giorgi2010_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

> AUMC has no unit; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Giorgi2010_reference" status="needs_review" stale="false" population="healthy male beagle dogs" measured-compound="tramadol" parameterization="mechanistic" topology="2C"></div>

## Citation
Giorgi M, Del Carlo S, Łebkowska-Wieruszewska B, Kowalski CJ, Saccomanni G. Pharmacokinetics of tramadol and metabolites after injective administrations in dogs. Polish journal of veterinary sciences 13(4):639–644 (2010).
  ·  DOI: [10.2478/v10181-010-0027-y](https://doi.org/10.2478/v10181-010-0027-y)

## Population and dosing

**Population:** healthy male beagle dogs · n = The provided text mentions a study involving 6 healthy male beagle dogs, but it does not explicitly state if all 6 were included in the final population analysis. It is standard in such studies to include all subjects in a compartmental model unless data are missing. Given the abstract states 'carried out on 6 healthy male beagle dogs', we assume n=6. However, without the full text, there is a slight ambiguity if 'carried out on' implies data availability for all. I will provide the number 6 based on the study design description..

**Dosing:** 280 mg, iv, im, single.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K 10 | kel | 1.18 | 1/h |
| K 12 | k12 | 8.74 | 1/h |
| K 21 | k21 | 20.21 | 1/h |
| K 10 t 1/2 | t1/2ka | 0.73 | h |
| Cl T | CL | 1131 | mL/min |
| AUMC 0-∞ | AUMC | 6.07 |  |
| MRT | MRT | 1.13 | h |
| Vdss | Vss | 1003 | L |
| V 1 | V1 | 7.00 | L |
| Vd | V | 293 | L |
| K 01 | kabs | 6.90 | 1/h |
| Tlag | tlag | 0.40 | h |
| AUC 0-∞ | AUC∞ | 3.59 | h*μg/mL |
| Tmax | tmax | 0.34 | h |
| Cmax | Cmax | 2.52 | μg/mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.952). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUMC has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — tramadol: kel 1.18 1/h, k12 8.74 1/h, k21 20.2 1/h, t1/2ka 0.73 h, CL 1.13e+03 mL/min, AUMC 6.07, MRT 1.13 h, Vss 1e+03 L, … (+7).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f%: this record has none, the second reading 92. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| K 10 | `Q47` · kel | 1.18 | 1/h | 0.0003278 | 1/s | 1/h | space_fold (0.95) | tab_1:row1:col1, tab_1:row1:col2, tab_1:row1:col3, Giorgi_2010_table_1:row2:col1, Giorgi_2010_table_1:row2:col2, Giorgi_2010_table_1:row2:col3 |
| K 12 | `Q301` · k12 | 8.74 | 1/h | 0.002428 | 1/s | 1/h | space_fold (0.95) | tab_1:row2:col1, tab_1:row2:col2, tab_1:row2:col3 |
| K 21 | `Q302` · k21 | 20.21 | 1/h | 0.005614 | 1/s | 1/h | space_fold (0.95) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3 |
| K 10 t 1/2 | `Q95` · t1/2ka | 0.73 | h | 2628 | s | h | llm (0.6) | tab_1:row4:col2, tab_1:row4:col3, Giorgi_2010_table_1:row6:col2, Giorgi_2010_table_1:row6:col3 |
| Cl T | `Q22` · CL | 1131 | mL/min | 1.885e-05 | m3/s | L/h | space_fold (0.95) | tab_1:row6:col2, tab_1:row6:col3, Giorgi_2010_table_1:row7:col2, Giorgi_2010_table_1:row7:col3 |
| AUMC 0-∞ | `Q20` · AUMC | 6.07 |  |  |  |  | space_fold (0.95) | tab_1:row7:col2, tab_1:row7:col3 |
| MRT | `Q53` · MRT | 1.13 | h | 4068 | s | h | exact (1) | tab_1:row8:col2, tab_1:row8:col3 |
| Vdss | `Q65` · Vss | 1003 | L | 1.003 | m3 | L | llm (0.6) | tab_1:row9:col2, tab_1:row9:col3 |
| V 1 | `Q63` · V1 | 7.00 | L | 0.007 | m3 | L | space_fold (0.95) | tab_1:row10:col2, tab_1:row10:col3 |
| Vd | `Q61` · V | 293 | L | 0.293 | m3 | L | exact (1) | Giorgi_2010_table_1:row0:col2, Giorgi_2010_table_1:row0:col3 |
| K 01 | `Q49` · kabs | 6.90 | 1/h | 0.001917 | 1/s | 1/h | space_fold (0.95) | Giorgi_2010_table_1:row1:col1, Giorgi_2010_table_1:row1:col2, Giorgi_2010_table_1:row1:col3 |
| Tlag | `Q83` · tlag | 0.40 | h | 1440 | s | h | exact (1) | Giorgi_2010_table_1:row3:col2, Giorgi_2010_table_1:row3:col3 |
| AUC 0-∞ | `Q17` · AUC∞ | 3.59 | h*μg/mL |  |  | h*μg/mL | space_fold (0.95) | Giorgi_2010_table_1:row4:col2, Giorgi_2010_table_1:row4:col3 |
| Tmax | `Q56` · tmax | 0.34 | h | 1224 | s | h | exact (1) | Giorgi_2010_table_1:row8:col2, Giorgi_2010_table_1:row8:col3 |
| Cmax | `Q32` · Cmax | 2.52 | μg/mL |  |  | μg/mL | exact (1) | Giorgi_2010_table_1:row9:col2, Giorgi_2010_table_1:row9:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| V 2 α β | Q64 | llm |

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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.952 (20/21 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f%]` |  | 92 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['Giorgi_2010_table_1:row4:col2', 'Giorgi_2010_table_1:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_1:row6:col2', 'tab_1:row6:col3', 'Giorgi_2010_table_1:row7:col2', 'Giorgi_2010_table_1:row7:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['tab_1:row2:col1', 'tab_1:row2:col2', 'tab_1:row2:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Giorgi_2010_table_1:row9:col2', 'Giorgi_2010_table_1:row9:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_1:row1:col1', 'tab_1:row1:col2', 'tab_1:row1:col3', 'Giorgi_2010_table_1:row2:col1', 'Giorgi_2010_table_1:row2:col2', 'Giorgi_2010_table_1:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Giorgi_2010_table_1:row1:col1', 'Giorgi_2010_table_1:row1:col2', 'Giorgi_2010_table_1:row1:col3'] |
| C5_dimension_Q53 | pass | [time] |  | ['tab_1:row8:col2', 'tab_1:row8:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Giorgi_2010_table_1:row8:col2', 'Giorgi_2010_table_1:row8:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Giorgi_2010_table_1:row0:col2', 'Giorgi_2010_table_1:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_1:row10:col2', 'tab_1:row10:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_1:row9:col2', 'tab_1:row9:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Giorgi_2010_table_1:row3:col2', 'Giorgi_2010_table_1:row3:col3'] |
| C5_dimension_Q95 | pass | [time] |  | ['tab_1:row4:col2', 'tab_1:row4:col3', 'Giorgi_2010_table_1:row6:col2', 'Giorgi_2010_table_1:row6:col3'] |
| C5_unit_missing_Q20 | fail | [mass] * [time] / [length] ** 3 |  | ['tab_1:row7:col2', 'tab_1:row7:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1131 | ['tab_1:row6:col2', 'tab_1:row6:col3', 'Giorgi_2010_table_1:row7:col2', 'Giorgi_2010_table_1:row7:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 67.9 L/h | ['tab_1:row6:col2', 'tab_1:row6:col3', 'Giorgi_2010_table_1:row7:col2', 'Giorgi_2010_table_1:row7:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 293 L | ['Giorgi_2010_table_1:row0:col2', 'Giorgi_2010_table_1:row0:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 7 L | ['tab_1:row10:col2', 'tab_1:row10:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 1e+03 L | ['tab_1:row9:col2', 'tab_1:row9:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btramadol%5D%20Tramadol_Giorgi2010_reference&body=Drug%3A%20tramadol%0ARecord%3A%20Tramadol_Giorgi2010_reference%0APaper%3A%20Giorgi_2010%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tramadol/Tramadol_Giorgi2010_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 11:11 UTC</sub>
