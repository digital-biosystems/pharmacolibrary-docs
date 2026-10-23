<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;disopyramide&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/&quot;},{&quot;label&quot;:&quot;Bonde_1989 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Disopyramide_Bryson1978_reference&quot;,&quot;label&quot;:&quot;Bryson_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Bryson1978_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Disopyramide_Aso2001_reference&quot;,&quot;label&quot;:&quot;Aso_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_disopyramide/Disopyramide_Aso2001_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# disopyramide — `Disopyramide_Bonde1989_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The two-compartment structure for disopyramide lacks the second peripheral compartment parameters, leaving it unreachable.

<div class="pk-model-meta" hidden drug="disopyramide" model-id="Disopyramide_Bonde1989_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="disopyramide" parameterization="apparent" topology="2C"></div>

## Citation
Bonde J, Jensen NM, Pedersen LE, Angelo HR, Rasmussen SN, Trap-Jensen J et al. Disposition kinetics of disopyramide in human healthy volunteers described by an open three compartment model. Pharmacology & toxicology 64(5):412–416 (1989).
  ·  DOI: [10.1111/j.1600-0773.1989.tb00677.x](https://doi.org/10.1111/j.1600-0773.1989.tb00677.x)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult · n = # List each compound on its own line under 'compounds', one per line, as:  #   - name | role | dosed | measured | has_parameters  # where role = parent | metabolite | co-administered | analyte-only | endogenous_biomarker  #       (endogenous_biomarker = a substance the body makes, whose kinetics the model  #        describes; it is never 'dosed')  #       dosed = yes/no (subject receives it)  #       measured = yes/no (its concentrations are modelled)  #       has_parameters = yes/no (paper gives it V/CL or a compartment)  compounds:    - disopyramide | parent | yes | yes | yes    - MND | metabolite | no | yes | no  # List each parent-&gt;metabolite (or interconversion) link on its own line under  # 'links', one per line, as:  #   - from | to | relation | link_parameter  # where relation = metabolism | hydrolysis | interconversion  #       link_parameter = Kfm | Fm | formation clearance | none  # If there are no links, write 'links: none' on a single line.  links:    - disopyramide | MND | metabolism | none.

**Dosing:** 28.2, 150 mg, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| k10 s⁻¹ | kel | 1.68 | 1/h |
| k12 s⁻¹ | k12 | 15 | 1/h |
| k21 s⁻¹ | k21 | 3.4 | 1/h |
| V1 l | V1/F | 18.7 | L |
| V2 l | V2 | 72 | L |
| t1/2(tot) min. | t1/2z | 475 | min |
| k13 s⁻¹ | k13 | 5.8 | 1/h |
| k31 s⁻¹ | k31 | 0.48 | 1/h |
| V3 l | V3 | 100 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.25). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The two-compartment structure for disopyramide lacks the second peripheral compartment parameters, leaving it unreachable.**

The record specifies a two-compartment model for disopyramide but includes parameters for a second peripheral compartment, such as the transfer rate from the central compartment of 5.8 1/h. This creates an orphan compartment because the model structure does not accommodate the additional tissue volume. Consequently, the second peripheral compartment has no valid path from the dose, making the model structurally invalid. Extracted — disopyramide: kel 1.68 1/h, k12 15 1/h, k21 3.4 1/h, V1/F 18.7 L, V2 72 L, t1/2z 475 min, k13 5.8 1/h, k31 0.48 1/h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has disopyramide, the second reading unknown; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| k10 s⁻¹ | `Q47` · kel | 1.68 | 1/h | 0.0004667 | 1/s | 1/h | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row0:col2, Bonde_1989_table_p4_1:row1:col2, Bonde_1989_table_p4_1:row2:col2, Bonde_1989_table_p4_1:row3:col2, Bonde_1989_table_p4_1:row4:col2, Bonde_1989_table_p4_1:row5:col2, Bonde_1989_table_p4_1:row6:col2, Bonde_1989_table_p4_1:row7:col2, Bonde_1989_table_p4_1:row8:col2, Bonde_1989_table_p4_1:row9:col2 |
| k12 s⁻¹ | `Q301` · k12 | 15 | 1/h | 0.004167 | 1/s | 1/h | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row0:col3, Bonde_1989_table_p4_1:row1:col3, Bonde_1989_table_p4_1:row2:col3, Bonde_1989_table_p4_1:row3:col3, Bonde_1989_table_p4_1:row4:col3, Bonde_1989_table_p4_1:row5:col3, Bonde_1989_table_p4_1:row6:col3, Bonde_1989_table_p4_1:row7:col3, Bonde_1989_table_p4_1:row8:col3, Bonde_1989_table_p4_1:row9:col3 |
| k21 s⁻¹ | `Q302` · k21 | 3.4 | 1/h | 0.0009444 | 1/s | 1/h | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row0:col4, Bonde_1989_table_p4_1:row1:col4, Bonde_1989_table_p4_1:row2:col4, Bonde_1989_table_p4_1:row3:col4, Bonde_1989_table_p4_1:row4:col4, Bonde_1989_table_p4_1:row5:col4, Bonde_1989_table_p4_1:row6:col4, Bonde_1989_table_p4_1:row7:col4, Bonde_1989_table_p4_1:row8:col4, Bonde_1989_table_p4_1:row9:col4 |
| V1 l | `Q290` · V1/F | 18.7 | L | 0.0187 | m3 | L | llm_corrected (0.6) | Bonde_1989_table_p4_1:row0:col7, Bonde_1989_table_p4_1:row1:col7, Bonde_1989_table_p4_1:row2:col7, Bonde_1989_table_p4_1:row3:col7, Bonde_1989_table_p4_1:row4:col7, Bonde_1989_table_p4_1:row5:col7, Bonde_1989_table_p4_1:row6:col7, Bonde_1989_table_p4_1:row7:col7, Bonde_1989_table_p4_1:row8:col7, Bonde_1989_table_p4_1:row9:col7 |
| V2 l | `Q64` · V2 | 72 | L | 0.072 | m3 | L | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row0:col8, Bonde_1989_table_p4_1:row1:col8, Bonde_1989_table_p4_1:row2:col8, Bonde_1989_table_p4_1:row3:col8, Bonde_1989_table_p4_1:row4:col8, Bonde_1989_table_p4_1:row5:col8, Bonde_1989_table_p4_1:row6:col8, Bonde_1989_table_p4_1:row7:col8, Bonde_1989_table_p4_1:row8:col8, Bonde_1989_table_p4_1:row9:col8 |
| t1/2(tot) min. | `Q57` · t1/2z | 475 | min | 2.85e+04 | s | h | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row0:col10, Bonde_1989_table_p4_1:row1:col10, Bonde_1989_table_p4_1:row2:col10, Bonde_1989_table_p4_1:row3:col10, Bonde_1989_table_p4_1:row4:col10, Bonde_1989_table_p4_1:row5:col10, Bonde_1989_table_p4_1:row6:col10, Bonde_1989_table_p4_1:row7:col10, Bonde_1989_table_p4_1:row8:col10, Bonde_1989_table_p4_1:row9:col10 |
| k13 s⁻¹ | `Q303` · k13 | 5.8 | 1/h | 0.001611 | 1/s | 1/h | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row1:col5, Bonde_1989_table_p4_1:row2:col5, Bonde_1989_table_p4_1:row3:col5, Bonde_1989_table_p4_1:row4:col5, Bonde_1989_table_p4_1:row5:col5, Bonde_1989_table_p4_1:row6:col5, Bonde_1989_table_p4_1:row7:col5, Bonde_1989_table_p4_1:row8:col5, Bonde_1989_table_p4_1:row9:col5 |
| k31 s⁻¹ | `Q304` · k31 | 0.48 | 1/h | 0.0001333 | 1/s | 1/h | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row1:col6, Bonde_1989_table_p4_1:row2:col6, Bonde_1989_table_p4_1:row3:col6, Bonde_1989_table_p4_1:row4:col6, Bonde_1989_table_p4_1:row5:col6, Bonde_1989_table_p4_1:row6:col6, Bonde_1989_table_p4_1:row7:col6, Bonde_1989_table_p4_1:row8:col6, Bonde_1989_table_p4_1:row9:col6 |
| V3 l | `Q77` · V3 | 100 | L | 0.1 | m3 | L | llm_confirmed (0.6) | Bonde_1989_table_p4_1:row1:col9, Bonde_1989_table_p4_1:row2:col9, Bonde_1989_table_p4_1:row3:col9, Bonde_1989_table_p4_1:row4:col9, Bonde_1989_table_p4_1:row5:col9, Bonde_1989_table_p4_1:row6:col9, Bonde_1989_table_p4_1:row7:col9, Bonde_1989_table_p4_1:row8:col9, Bonde_1989_table_p4_1:row9:col9 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '5' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '6' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '7' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '8' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q57 ('t1/2(free) min.', value '312') — already have one for this compound
- implicit units: 'k10 s⁻¹' → 1/h (from the popPK convention: 'First-order rate constants in population PK models are conventionally expressed in 1/h. Although the paper text mentions')
- implicit units: 'k12 s⁻¹' → 1/h (from the popPK convention: 'Intercompartmental first-order rate constants (k12) are conventionally expressed in 1/h in population pharmacokinetic pa')
- implicit units: 'k21 s⁻¹' → 1/h (from the popPK convention: 'Intercompartmental first-order rate constants (k21) are conventionally expressed in 1/h in population pharmacokinetic pa')
- implicit units: 'V1 l' → L (from the popPK convention: "Volumes of distribution are conventionally expressed in Liters (L). The text mentions 'vd(l)' in Table 1, supporting the")
- implicit units: 'V2 l' → L (from the popPK convention: "Volumes of distribution are conventionally expressed in Liters (L). The text mentions 'vd(l)' in Table 1, supporting the")
- implicit units: 't1/2(tot) min.' → min (from the paper text: "The paper text explicitly lists 't1/2 (min.)' with a value of '475+58' in Table 1, and the provided parameter value is 4")
- implicit units: 'k13 s⁻¹' → 1/h (from the popPK convention: 'Intercompartmental first-order rate constants (k13) are conventionally expressed in 1/h in population pharmacokinetic pa')
- implicit units: 'k31 s⁻¹' → 1/h (from the popPK convention: 'Intercompartmental first-order rate constants (k31) are conventionally expressed in 1/h in population pharmacokinetic pa')
- implicit units: 'V3 l' → L (from the popPK convention: "Volumes of distribution are conventionally expressed in Liters (L). The text mentions 'vd(l)' in Table 1, supporting the")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=disopyramide
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Bonde_1989_table_p4_1: units_need_context
- transposed table Bonde_1989_table_p4_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[4]` |  | 2.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[5]` |  | 1.61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[7]` |  | 3.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[8]` |  | 0.38 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | disopyramide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | disopyramide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Bonde_1989_table_p4_1:row0:col7', 'Bonde_1989_table_p4_1:row1:col7', 'Bonde_1989_table_p4_1:row2:col7', 'Bonde_1989_table_p4_1:row3:col7', 'Bonde_1989_table_p4_1:row4:col7', 'Bonde_1989_table_p4_1:row5:col7', 'Bonde_1989_table_p4_1:row6:col7', 'Bonde_1989_table_p4_1:row7:col7', 'Bonde_1989_table_p4_1:row8:col7', 'Bonde_1989_table_p4_1:row9:col7'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Bonde_1989_table_p4_1:row0:col3', 'Bonde_1989_table_p4_1:row1:col3', 'Bonde_1989_table_p4_1:row2:col3', 'Bonde_1989_table_p4_1:row3:col3', 'Bonde_1989_table_p4_1:row4:col3', 'Bonde_1989_table_p4_1:row5:col3', 'Bonde_1989_table_p4_1:row6:col3', 'Bonde_1989_table_p4_1:row7:col3', 'Bonde_1989_table_p4_1:row8:col3', 'Bonde_1989_table_p4_1:row9:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Bonde_1989_table_p4_1:row0:col4', 'Bonde_1989_table_p4_1:row1:col4', 'Bonde_1989_table_p4_1:row2:col4', 'Bonde_1989_table_p4_1:row3:col4', 'Bonde_1989_table_p4_1:row4:col4', 'Bonde_1989_table_p4_1:row5:col4', 'Bonde_1989_table_p4_1:row6:col4', 'Bonde_1989_table_p4_1:row7:col4', 'Bonde_1989_table_p4_1:row8:col4', 'Bonde_1989_table_p4_1:row9:col4'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['Bonde_1989_table_p4_1:row1:col5', 'Bonde_1989_table_p4_1:row2:col5', 'Bonde_1989_table_p4_1:row3:col5', 'Bonde_1989_table_p4_1:row4:col5', 'Bonde_1989_table_p4_1:row5:col5', 'Bonde_1989_table_p4_1:row6:col5', 'Bonde_1989_table_p4_1:row7:col5', 'Bonde_1989_table_p4_1:row8:col5', 'Bonde_1989_table_p4_1:row9:col5'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['Bonde_1989_table_p4_1:row1:col6', 'Bonde_1989_table_p4_1:row2:col6', 'Bonde_1989_table_p4_1:row3:col6', 'Bonde_1989_table_p4_1:row4:col6', 'Bonde_1989_table_p4_1:row5:col6', 'Bonde_1989_table_p4_1:row6:col6', 'Bonde_1989_table_p4_1:row7:col6', 'Bonde_1989_table_p4_1:row8:col6', 'Bonde_1989_table_p4_1:row9:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Bonde_1989_table_p4_1:row0:col2', 'Bonde_1989_table_p4_1:row1:col2', 'Bonde_1989_table_p4_1:row2:col2', 'Bonde_1989_table_p4_1:row3:col2', 'Bonde_1989_table_p4_1:row4:col2', 'Bonde_1989_table_p4_1:row5:col2', 'Bonde_1989_table_p4_1:row6:col2', 'Bonde_1989_table_p4_1:row7:col2', 'Bonde_1989_table_p4_1:row8:col2', 'Bonde_1989_table_p4_1:row9:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Bonde_1989_table_p4_1:row0:col10', 'Bonde_1989_table_p4_1:row1:col10', 'Bonde_1989_table_p4_1:row2:col10', 'Bonde_1989_table_p4_1:row3:col10', 'Bonde_1989_table_p4_1:row4:col10', 'Bonde_1989_table_p4_1:row5:col10', 'Bonde_1989_table_p4_1:row6:col10', 'Bonde_1989_table_p4_1:row7:col10', 'Bonde_1989_table_p4_1:row8:col10', 'Bonde_1989_table_p4_1:row9:col10'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Bonde_1989_table_p4_1:row0:col8', 'Bonde_1989_table_p4_1:row1:col8', 'Bonde_1989_table_p4_1:row2:col8', 'Bonde_1989_table_p4_1:row3:col8', 'Bonde_1989_table_p4_1:row4:col8', 'Bonde_1989_table_p4_1:row5:col8', 'Bonde_1989_table_p4_1:row6:col8', 'Bonde_1989_table_p4_1:row7:col8', 'Bonde_1989_table_p4_1:row8:col8', 'Bonde_1989_table_p4_1:row9:col8'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Bonde_1989_table_p4_1:row1:col9', 'Bonde_1989_table_p4_1:row2:col9', 'Bonde_1989_table_p4_1:row3:col9', 'Bonde_1989_table_p4_1:row4:col9', 'Bonde_1989_table_p4_1:row5:col9', 'Bonde_1989_table_p4_1:row6:col9', 'Bonde_1989_table_p4_1:row7:col9', 'Bonde_1989_table_p4_1:row8:col9', 'Bonde_1989_table_p4_1:row9:col9'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 18.7 L | ['Bonde_1989_table_p4_1:row0:col7', 'Bonde_1989_table_p4_1:row1:col7', 'Bonde_1989_table_p4_1:row2:col7', 'Bonde_1989_table_p4_1:row3:col7', 'Bonde_1989_table_p4_1:row4:col7', 'Bonde_1989_table_p4_1:row5:col7', 'Bonde_1989_table_p4_1:row6:col7', 'Bonde_1989_table_p4_1:row7:col7', 'Bonde_1989_table_p4_1:row8:col7', 'Bonde_1989_table_p4_1:row9:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 72 L | ['Bonde_1989_table_p4_1:row0:col8', 'Bonde_1989_table_p4_1:row1:col8', 'Bonde_1989_table_p4_1:row2:col8', 'Bonde_1989_table_p4_1:row3:col8', 'Bonde_1989_table_p4_1:row4:col8', 'Bonde_1989_table_p4_1:row5:col8', 'Bonde_1989_table_p4_1:row6:col8', 'Bonde_1989_table_p4_1:row7:col8', 'Bonde_1989_table_p4_1:row8:col8', 'Bonde_1989_table_p4_1:row9:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdisopyramide%5D%20Disopyramide_Bonde1989_reference&body=Drug%3A%20disopyramide%0ARecord%3A%20Disopyramide_Bonde1989_reference%0APaper%3A%20Bonde_1989%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_disopyramide/Disopyramide_Bonde1989_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 13:24 UTC</sub>
