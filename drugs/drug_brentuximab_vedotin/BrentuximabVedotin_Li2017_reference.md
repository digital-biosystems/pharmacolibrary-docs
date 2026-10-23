<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;brentuximab vedotin&quot;,&quot;href&quot;:&quot;drugs/drug_brentuximab_vedotin/&quot;},{&quot;label&quot;:&quot;Li_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brentuximab vedotin — `BrentuximabVedotin_Li2017_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Λ1 has no unit.

<div class="pk-model-meta" hidden drug="brentuximab vedotin" model-id="BrentuximabVedotin_Li2017_reference" status="needs_review" stale="false" population="patients with relapsed/refractory CD30-expressing hematologic malignancies" measured-compound="brentuximab vedotin ADC and unconjugated MMAE" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Li H, Han TH, Hunder NN, Jang G, Zhao B. Population Pharmacokinetics of Brentuximab Vedotin in Patients With CD30-Expressing Hematologic Malignancies. Journal of clinical pharmacology 57(9):1148–1158 (2017).
  ·  DOI: [10.1002/jcph.920](https://doi.org/10.1002/jcph.920)

## Population and dosing

**Population:** patients with relapsed/refractory CD30-expressing hematologic malignancies · condition CD30-expressing hematologic malignancies · age group adult · n = 314.

**Dosing:** 126 mg, iv, multiple, every 504 h.

**Dosed compound ≠ measured compound:** dosed brentuximab vedotin, measured brentuximab vedotin ADC and unconjugated MMAE.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLM | CL | 55.7 | L/d | 5.2 | 46.9 (20% RSE) |
| V4 | V1 | 79.8 | L | 11 | 13.5 (24% RSE) |
| α | λ1 | 0.25 |  |  |  |
| β | kfm | 0.0785 | 1/h | 12 |  |
| Q5 | Q | 65.0 | L/h | 30 | 15 (None% RSE) |
| V5 | V2 | 28.1 | L | 14 | 25 (None% RSE) |
| Fm by cycle | fm | -0.261 |  | 14 | 130 (17% RSE) |
| ΘBW,CLM,Q5 b | allometric_exponent | 0.75 |  |  |  |
| CL | CL | 1.56 | L/d | 2.9 |  |
| V1 | V1 | 4.29 | L | 1.9 |  |
| Q2 | Q | 2.83 | L/h | 5.9 |  |
| V2 | V2 | 3.83 | L | 6.3 |  |
| Q3 | Q2 | 0.708 | L/h | 8.2 |  |
| V3 | V3 | 9.52 | L | 8.8 | 106 (19% RSE) |
| ΘBW,CL,Q2,Q3 b | allometric_exponent | 0.698 |  | 8.8 |  |
| ΘSEX,V1 | equation variable | 0.873 |  | 2.5 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Λ1 has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is brentuximab vedotin's own; they describe MMAE and brentuximab vedotin (ADC). Extracted — MMAE: CL 55.7 L/d, V1 79.8 L, λ1 0.25, kfm 0.0785 1/h, Q 65 L/h, V2 28.1 L, fm -0.261, allometric_exponent 0.75; brentuximab vedotin (ADC): CL 1.56 L/d, V1 4.29 L, Q 2.83 L/h, V2 3.83 L, Q2 0.708 L/h, V3 9.52 L, allometric_exponent 0.698.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has brentuximab vedotin, the second reading brentuximab_vedotin; it also differs on 29 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLM | `Q22` · CL | 55.7 | L/d | 6.447e-07 | m3/s | L/h | 5.2 | exact (1) | jcph920-tbl-0004:row1:col2 | 46.9 (20% RSE) |
| V4 | `Q63` · V1 | 79.8 | L | 0.0798 | m3 | L | 11 | exact (1) | jcph920-tbl-0004:row2:col2 | 13.5 (24% RSE) |
| α | `Q67` · λ1 | 0.25 |  |  |  |  |  | exact (1) | jcph920-tbl-0004:row4:col2 |  |
| β | `Q305` · kfm | 0.0785 | 1/h | 2.181e-05 | 1/s | 1/h | 12 | exact (1) | jcph920-tbl-0004:row5:col1, jcph920-tbl-0004:row5:col2 |  |
| Q5 | `Q30` · Q | 65.0 | L/h | 1.806e-05 | m3/s | L/h | 30 | exact (1) | jcph920-tbl-0004:row6:col2 | 15 (None% RSE) |
| V5 | `Q64` · V2 | 28.1 | L | 0.0281 | m3 | L | 14 | exact (1) | jcph920-tbl-0004:row7:col2 | 25 (None% RSE) |
| Fm by cycle | `Q45` · fm | -0.261 |  |  |  |  | 14 | exact (1) | jcph920-tbl-0004:row8:col2 | 130 (17% RSE) |
| ΘBW,CLM,Q5 b | `Q319` · allometric_exponent | 0.75 |  |  |  |  |  | llm_corrected (0.6) | jcph920-tbl-0004:row9:col2 |  |
| CL | `Q22` · CL | 1.56 | L/d | 1.806e-08 | m3/s | L/h | 2.9 | exact (1) | Li_2017_table_3:row0:col2 |  |
| V1 | `Q63` · V1 | 4.29 | L | 0.00429 | m3 | L | 1.9 | exact (1) | Li_2017_table_3:row1:col2 |  |
| Q2 | `Q30` · Q | 2.83 | L/h | 7.861e-07 | m3/s | L/h | 5.9 | exact (1) | Li_2017_table_3:row2:col2 |  |
| V2 | `Q64` · V2 | 3.83 | L | 0.00383 | m3 | L | 6.3 | exact (1) | Li_2017_table_3:row3:col2 |  |
| Q3 | `Q99` · Q2 | 0.708 | L/h | 1.967e-07 | m3/s | L/h | 8.2 | exact (1) | Li_2017_table_3:row4:col2 |  |
| V3 | `Q77` · V3 | 9.52 | L | 0.00952 | m3 | L | 8.8 | exact (1) | Li_2017_table_3:row5:col2 | 106 (19% RSE) |
| ΘBW,CL,Q2,Q3 b | `Q319` · allometric_exponent | 0.698 |  |  |  |  | 8.8 | llm_corrected (0.6) | Li_2017_table_3:row6:col2 |  |
| ΘSEX,V1 | `Q900` · equation variable | 0.873 |  |  |  |  | 2.5 | llm_corrected (0.6) | Li_2017_table_3:row8:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLM' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V4' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'β' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Q5' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V5' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Fm by cycle' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'CL' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V1' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Q2' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V2' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'Q3' routed out of structural estimates ('BSV %CV (%RSE)')
- table section iiv: 'V3' routed out of structural estimates ('BSV %CV (%RSE)')
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'DAR0' — extend the ontology if this is a real PK parameter (source ['jcph920-tbl-0004:row3:col2'])
- dropped duplicate Q319 ('ΘBW,V4,V5 c', value '1.0') — already have one for this compound
- dropped duplicate Q319 ('ΘBW,V1,V2,V3 c', value '0.503') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['jcph920-tbl-0004:footnote', 'jcph920-tbl-0004:footnote', 'jcph920-tbl-0004:footnote', 'jcph920-tbl-0004:footnote']); the table cell was unparseable — needs review
- implicit units: 'CLM' → L/d (from the paper text: 'The text states: “Typical values of MMAE apparent CL (CLM) and apparent volume of central compartment (V4) were 55.7 L/d')
- implicit units: 'V4' → L (from the paper text: 'The text states: “Typical values of MMAE apparent CL (CLM) and apparent volume of central compartment (V4) were 55.7 L/d')
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'β' → 1/h (from the popPK convention: 'β is a first-order rate constant, conventionally expressed per unit time. The paper states that the infusion rate was mo')
- implicit units: 'Q5' → L/h (from the popPK convention: 'Q5 is an intercompartmental clearance, conventionally expressed in L/h.')
- implicit units: 'V5' → L (from the popPK convention: 'V5 is a compartment volume, conventionally expressed in L.')
- implicit units: 'CL' → L/d (from the paper text: 'The text states: “The typical values of ADC CL and V1 for a 75-kg male patient were 1.56 L/d and 4.29 L, respectively.”')
- implicit units: 'V1' → L (from the paper text: 'The text states: “The typical values of ADC CL and V1 for a 75-kg male patient were 1.56 L/d and 4.29 L, respectively.”')
- implicit units: 'Q2' → L/h (from the popPK convention: 'Q2 is a distributional intercompartmental clearance; this type of clearance is conventionally expressed in L/h.')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is a compartment volume, conventionally expressed in L.')
- implicit units: 'Q3' → L/h (from the popPK convention: 'Q3 is a distributional intercompartmental clearance; this type of clearance is conventionally expressed in L/h.')
- implicit units: 'V3' → L (from the popPK convention: 'V3 is a compartment volume, conventionally expressed in L.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brentuximab vedotin ADC and unconjugated MMAE
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [2]
- row roles (LLM): model_class=compartmental; 24/24 row label(s) assigned, 25 linked by role; re-tagged parent→MMAE ×21, parent→brentuximab vedotin (ADC) ×15
- molar mass: no plausible PubChem entry for 'brentuximab vedotin ADC and unconjugated MMAE' ('brentuximab vedotin ADC and unconjugated monomethyl auristatin E') — left in mass units
- molar mass: none found for 'brentuximab vedotin ADC and unconjugated MMAE' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (18 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.0 (0/30 fields) | 30 |

<details><summary>30 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['brentuximab vedotin (adc)', 'mmae', 'metabolism']] | [] | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[cl]` |  | 1.56 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 1.56 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm]` |  | 55.7 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clm]` | 55.7 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[fm by cycle]` |  | -0.261 | only_one_extracted |
| `qwen3.8-27b` | `parameters[fm by cycle]` | -0.261 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q2]` |  | 2.83 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q2]` | 2.83 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q3]` |  | 0.708 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q3]` | 0.708 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[q5]` | 65.0 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` |  | 4.29 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v1]` | 4.29 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` |  | 3.83 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v2]` | 3.83 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v3]` | 9.52 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v4]` |  | 79.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[v4]` | 79.8 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v5]` | 28.1 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[α]` |  | 0.25 | only_one_extracted |
| `qwen3.8-27b` | `parameters[α]` | 0.25 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[β]` |  | 0.0785 | only_one_extracted |
| `qwen3.8-27b` | `parameters[β]` | 0.0785 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θbw,cl,q2,q3 b]` | 0.698 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θbw,clm,q5 b]` | 0.75 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[θsex,v1]` | 0.873 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | brentuximab vedotin | brentuximab_vedotin | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | brentuximab vedotin ADC and unconjugated MMAE | brentuximab_vedotin, MMAE | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph920-tbl-0004:row1:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Li_2017_table_3:row0:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['jcph920-tbl-0004:row6:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Li_2017_table_3:row2:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['jcph920-tbl-0004:row5:col1', 'jcph920-tbl-0004:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['jcph920-tbl-0004:row2:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Li_2017_table_3:row1:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['jcph920-tbl-0004:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Li_2017_table_3:row3:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Li_2017_table_3:row5:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Li_2017_table_3:row4:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['jcph920-tbl-0004:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 55.7 | ['jcph920-tbl-0004:row1:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.32 L/h | ['jcph920-tbl-0004:row1:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.065 L/h | ['Li_2017_table_3:row0:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 79.8 L | ['jcph920-tbl-0004:row2:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.29 L | ['Li_2017_table_3:row1:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 28.1 L | ['jcph920-tbl-0004:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.83 L | ['Li_2017_table_3:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrentuximab_vedotin%5D%20BrentuximabVedotin_Li2017_reference&body=Drug%3A%20brentuximab_vedotin%0ARecord%3A%20BrentuximabVedotin_Li2017_reference%0APaper%3A%20Li_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Li2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:33 UTC</sub>
