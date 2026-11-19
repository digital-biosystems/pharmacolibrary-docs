<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;1-Methyl-2-pyrrolidone&quot;,&quot;href&quot;:&quot;drugs/toxin_1_methyl_2_pyrrolidone/&quot;},{&quot;label&quot;:&quot;Galettis_2023 \u00b7 mon_11&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_1Methyl2Pyrrolidone_Akesson1997_reference&quot;,&quot;label&quot;:&quot;Akesson_1997_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Akesson1997_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 1-Methyl-2-pyrrolidone — `D_1Methyl2Pyrrolidone_Galettis2023_mon_11`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> No value for 1 methyl 2 pyrrolidone's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations.

<div class="pk-model-meta" hidden drug="1-Methyl-2-pyrrolidone" model-id="D_1Methyl2Pyrrolidone_Galettis2023_mon_11" status="model_quarantined" stale="false" population="patients with relapsed/refractory multiple myeloma" measured-compound="1-Methyl-2-pyrrolidone (NMP)" parameterization="apparent" topology="1C"></div>

## Citation
Galettis P, Cheah CY, Davis J, Ludford-Menting M, Link EK, Martin JH et al. A phase 1 clinical trial of the repurposable acetyllysine mimetic, n-methyl-2-pyrrolidone (NMP), in relapsed or refractory multiple myeloma. Clinical epigenetics 15(1):15 (2023).
  ·  DOI: [10.1186/s13148-023-01427-7](https://doi.org/10.1186/s13148-023-01427-7)

## Population and dosing

**Population:** patients with relapsed/refractory multiple myeloma · condition relapsed/refractory multiple myeloma (clinical trial) · age group adult · n = 13.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (h) | tmax | 0.50 | h |
| Cmax (mg⋅L⁻¹) | Cmax | 1.26 | mg⋅L⁻¹ |
| AUC (h⋅mg⋅L⁻¹) | AUC | 2.17 | h⋅mg⋅L⁻¹ |
| CL/F (L⋅h⁻¹) | CL/F | 23.62 | L⋅h⁻¹ |
| V/F(L) | V/F | 36.62 | L |
| Half-life(h) | t1/2z | 1.08 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for 1 methyl 2 pyrrolidone's clearance, volume of distribution, absorption rate constant and absorption lag time; t6_deviations.**

The model was built, but 1 methyl 2 pyrrolidone's clearance, volume of distribution, absorption rate constant and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — 1 methyl 2 pyrrolidone: tmax 0.5 h, Cmax 1.26 mg⋅L⁻¹, AUC 2.17 h⋅mg⋅L⁻¹, CL/F 23.6 L⋅h⁻¹, V/F 36.6 L, t1/2z 1.08 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has 1-Methyl-2-pyrrolidone (NMP), the second reading N-methyl-2-pyrrolidone; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (h) | `Q56` · tmax | 0.50 | h | 1800 | s | h | exact (1) | Galettis_2023_table_S1:row6:col3, Galettis_2023_table_S1:row7:col3, Galettis_2023_table_S1:row8:col3, Galettis_2023_table_S1:row9:col3, Galettis_2023_table_S1:row15:col3, Galettis_2023_table_S1:row16:col3, Galettis_2023_table_S1:row17:col3, Galettis_2023_table_S1:row18:col3, Galettis_2023_table_S1:row28:col3, Galettis_2023_table_S1:row29:col3, Galettis_2023_table_S1:row30:col3, Galettis_2023_table_S1:row31:col3, Galettis_2023_table_S1:row34:col3, Galettis_2023_table_S1:row35:col3, Galettis_2023_table_S1:row36:col3, Galettis_2023_table_S1:row37:col3, Galettis_2023_table_S1:row38:col3, Galettis_2023_table_S1:row39:col3, Galettis_2023_table_S1:row41:col3, Galettis_2023_table_S1:row42:col3, Galettis_2023_table_S1:row43:col3, Galettis_2023_table_S1:row44:col3, Galettis_2023_table_S1:row46:col3, Galettis_2023_table_S1:row47:col3, Galettis_2023_table_S1:row48:col3, Galettis_2023_table_S1:row49:col3, Galettis_2023_table_S1:row51:col3, Galettis_2023_table_S1:row52:col3, Galettis_2023_table_S1:row53:col3 |
| Cmax (mg⋅L⁻¹) | `Q32` · Cmax | 1.26 | mg⋅L⁻¹ | 0.00126 | kg/m3 | mg/l | exact (1) | Galettis_2023_table_S1:row6:col4, Galettis_2023_table_S1:row7:col4, Galettis_2023_table_S1:row8:col4, Galettis_2023_table_S1:row9:col4, Galettis_2023_table_S1:row15:col4, Galettis_2023_table_S1:row16:col4, Galettis_2023_table_S1:row17:col4, Galettis_2023_table_S1:row18:col4, Galettis_2023_table_S1:row28:col4, Galettis_2023_table_S1:row29:col4, Galettis_2023_table_S1:row30:col4, Galettis_2023_table_S1:row31:col4, Galettis_2023_table_S1:row34:col4, Galettis_2023_table_S1:row35:col4, Galettis_2023_table_S1:row36:col4, Galettis_2023_table_S1:row37:col4, Galettis_2023_table_S1:row38:col4, Galettis_2023_table_S1:row39:col4, Galettis_2023_table_S1:row41:col4, Galettis_2023_table_S1:row42:col4, Galettis_2023_table_S1:row43:col4, Galettis_2023_table_S1:row44:col4, Galettis_2023_table_S1:row46:col4, Galettis_2023_table_S1:row47:col4, Galettis_2023_table_S1:row48:col4, Galettis_2023_table_S1:row49:col4, Galettis_2023_table_S1:row51:col4, Galettis_2023_table_S1:row52:col4, Galettis_2023_table_S1:row53:col4 |
| AUC (h⋅mg⋅L⁻¹) | `Q88` · AUC | 2.17 | h⋅mg⋅L⁻¹ | 7.812 | kg*s/m3 | (h·mg)/l | exact (1) | Galettis_2023_table_S1:row6:col5, Galettis_2023_table_S1:row7:col5, Galettis_2023_table_S1:row8:col5, Galettis_2023_table_S1:row9:col5, Galettis_2023_table_S1:row15:col5, Galettis_2023_table_S1:row16:col5, Galettis_2023_table_S1:row17:col5, Galettis_2023_table_S1:row18:col5, Galettis_2023_table_S1:row28:col5, Galettis_2023_table_S1:row29:col5, Galettis_2023_table_S1:row30:col5, Galettis_2023_table_S1:row31:col5, Galettis_2023_table_S1:row34:col5, Galettis_2023_table_S1:row35:col5, Galettis_2023_table_S1:row36:col5, Galettis_2023_table_S1:row37:col5, Galettis_2023_table_S1:row38:col5, Galettis_2023_table_S1:row39:col5, Galettis_2023_table_S1:row41:col5, Galettis_2023_table_S1:row42:col5, Galettis_2023_table_S1:row43:col5, Galettis_2023_table_S1:row44:col5, Galettis_2023_table_S1:row46:col5, Galettis_2023_table_S1:row47:col5, Galettis_2023_table_S1:row48:col5, Galettis_2023_table_S1:row49:col5, Galettis_2023_table_S1:row51:col5, Galettis_2023_table_S1:row52:col5, Galettis_2023_table_S1:row53:col5 |
| CL/F (L⋅h⁻¹) | `Q27` · CL/F | 23.62 | L⋅h⁻¹ | 6.561e-06 | m3/s | l/h | exact (1) | Galettis_2023_table_S1:row6:col6, Galettis_2023_table_S1:row7:col6, Galettis_2023_table_S1:row8:col6, Galettis_2023_table_S1:row9:col6, Galettis_2023_table_S1:row15:col6, Galettis_2023_table_S1:row16:col6, Galettis_2023_table_S1:row17:col6, Galettis_2023_table_S1:row18:col6, Galettis_2023_table_S1:row28:col6, Galettis_2023_table_S1:row29:col6, Galettis_2023_table_S1:row30:col6, Galettis_2023_table_S1:row31:col6, Galettis_2023_table_S1:row34:col6, Galettis_2023_table_S1:row35:col6, Galettis_2023_table_S1:row36:col6, Galettis_2023_table_S1:row37:col6, Galettis_2023_table_S1:row38:col6, Galettis_2023_table_S1:row39:col6, Galettis_2023_table_S1:row41:col6, Galettis_2023_table_S1:row42:col6, Galettis_2023_table_S1:row43:col6, Galettis_2023_table_S1:row44:col6, Galettis_2023_table_S1:row46:col6, Galettis_2023_table_S1:row47:col6, Galettis_2023_table_S1:row48:col6, Galettis_2023_table_S1:row49:col6, Galettis_2023_table_S1:row51:col6, Galettis_2023_table_S1:row52:col6, Galettis_2023_table_S1:row53:col6 |
| V/F(L) | `Q76` · V/F | 36.62 | L | 0.03662 | m3 | l | exact (1) | Galettis_2023_table_S1:row6:col7, Galettis_2023_table_S1:row7:col7, Galettis_2023_table_S1:row8:col7, Galettis_2023_table_S1:row9:col7, Galettis_2023_table_S1:row15:col7, Galettis_2023_table_S1:row16:col7, Galettis_2023_table_S1:row17:col7, Galettis_2023_table_S1:row18:col7, Galettis_2023_table_S1:row28:col7, Galettis_2023_table_S1:row29:col7, Galettis_2023_table_S1:row30:col7, Galettis_2023_table_S1:row31:col7, Galettis_2023_table_S1:row34:col7, Galettis_2023_table_S1:row35:col7, Galettis_2023_table_S1:row36:col7, Galettis_2023_table_S1:row37:col7, Galettis_2023_table_S1:row38:col7, Galettis_2023_table_S1:row39:col7, Galettis_2023_table_S1:row41:col7, Galettis_2023_table_S1:row42:col7, Galettis_2023_table_S1:row43:col7, Galettis_2023_table_S1:row44:col7, Galettis_2023_table_S1:row46:col7, Galettis_2023_table_S1:row47:col7, Galettis_2023_table_S1:row48:col7, Galettis_2023_table_S1:row49:col7, Galettis_2023_table_S1:row51:col7, Galettis_2023_table_S1:row52:col7, Galettis_2023_table_S1:row53:col7 |
| Half-life(h) | `Q57` · t1/2z | 1.08 | h | 3888 | s | h | half_life_rule (0.95) | Galettis_2023_table_S1:row6:col8, Galettis_2023_table_S1:row7:col8, Galettis_2023_table_S1:row8:col8, Galettis_2023_table_S1:row9:col8, Galettis_2023_table_S1:row15:col8, Galettis_2023_table_S1:row16:col8, Galettis_2023_table_S1:row17:col8, Galettis_2023_table_S1:row18:col8, Galettis_2023_table_S1:row28:col8, Galettis_2023_table_S1:row29:col8, Galettis_2023_table_S1:row30:col8, Galettis_2023_table_S1:row31:col8, Galettis_2023_table_S1:row34:col8, Galettis_2023_table_S1:row35:col8, Galettis_2023_table_S1:row36:col8, Galettis_2023_table_S1:row37:col8, Galettis_2023_table_S1:row38:col8, Galettis_2023_table_S1:row39:col8, Galettis_2023_table_S1:row41:col8, Galettis_2023_table_S1:row42:col8, Galettis_2023_table_S1:row43:col8, Galettis_2023_table_S1:row44:col8, Galettis_2023_table_S1:row46:col8, Galettis_2023_table_S1:row47:col8, Galettis_2023_table_S1:row48:col8, Galettis_2023_table_S1:row49:col8, Galettis_2023_table_S1:row51:col8, Galettis_2023_table_S1:row52:col8, Galettis_2023_table_S1:row53:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'Occasion' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=1-Methyl-2-pyrrolidone (NMP)
- population split: 'mon-11' subgroup of Galettis_2023 (paper reports 13 populations: mon-04, mon-06, mon-07, mon-10, mon-11, mon-12, overall, pmc-03, pmc-05, pmc-08, pmc-09, rmh-01, rmh-02)
- molar mass: none found for '1-Methyl-2-pyrrolidone (NMP)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: ragged_grid
- table Tab2: representations disagree; selected evidence retained, not merged
- transposed table Galettis_2023_table_S1: logical view retains original source coordinates
- companion parameter table S1 transcribed (344 record(s))
- LLM selected parameter table(s) S1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc].value` | 2.17 | 90.3 | mismatch |
| `gpt-oss:120b` | `parameters[cl/f].value` | 23.62 | 8.86 | mismatch |
| `gpt-oss:120b` | `parameters[cmax].value` | 1.26 | 16.66 | mismatch |
| `gpt-oss:120b` | `parameters[half-life].value` | 1.08 | 1.75 | mismatch |
| `gpt-oss:120b` | `parameters[tmax].value` | 0.50 | 1 | mismatch |
| `gpt-oss:120b` | `parameters[v/f].value` | 36.62 | 22.43 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | 1-Methyl-2-pyrrolidone (NMP) | N-methyl-2-pyrrolidone | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | 1-Methyl-2-pyrrolidone (NMP) | N-methyl-2-pyrrolidone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Galettis_2023_table_S1:row6:col6', 'Galettis_2023_table_S1:row7:col6', 'Galettis_2023_table_S1:row8:col6', 'Galettis_2023_table_S1:row9:col6', 'Galettis_2023_table_S1:row15:col6', 'Galettis_2023_table_S1:row16:col6', 'Galettis_2023_table_S1:row17:col6', 'Galettis_2023_table_S1:row18:col6', 'Galettis_2023_table_S1:row28:col6', 'Galettis_2023_table_S1:row29:col6', 'Galettis_2023_table_S1:row30:col6', 'Galettis_2023_table_S1:row31:col6', 'Galettis_2023_table_S1:row34:col6', 'Galettis_2023_table_S1:row35:col6', 'Galettis_2023_table_S1:row36:col6', 'Galettis_2023_table_S1:row37:col6', 'Galettis_2023_table_S1:row38:col6', 'Galettis_2023_table_S1:row39:col6', 'Galettis_2023_table_S1:row41:col6', 'Galettis_2023_table_S1:row42:col6', 'Galettis_2023_table_S1:row43:col6', 'Galettis_2023_table_S1:row44:col6', 'Galettis_2023_table_S1:row46:col6', 'Galettis_2023_table_S1:row47:col6', 'Galettis_2023_table_S1:row48:col6', 'Galettis_2023_table_S1:row49:col6', 'Galettis_2023_table_S1:row51:col6', 'Galettis_2023_table_S1:row52:col6', 'Galettis_2023_table_S1:row53:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Galettis_2023_table_S1:row6:col4', 'Galettis_2023_table_S1:row7:col4', 'Galettis_2023_table_S1:row8:col4', 'Galettis_2023_table_S1:row9:col4', 'Galettis_2023_table_S1:row15:col4', 'Galettis_2023_table_S1:row16:col4', 'Galettis_2023_table_S1:row17:col4', 'Galettis_2023_table_S1:row18:col4', 'Galettis_2023_table_S1:row28:col4', 'Galettis_2023_table_S1:row29:col4', 'Galettis_2023_table_S1:row30:col4', 'Galettis_2023_table_S1:row31:col4', 'Galettis_2023_table_S1:row34:col4', 'Galettis_2023_table_S1:row35:col4', 'Galettis_2023_table_S1:row36:col4', 'Galettis_2023_table_S1:row37:col4', 'Galettis_2023_table_S1:row38:col4', 'Galettis_2023_table_S1:row39:col4', 'Galettis_2023_table_S1:row41:col4', 'Galettis_2023_table_S1:row42:col4', 'Galettis_2023_table_S1:row43:col4', 'Galettis_2023_table_S1:row44:col4', 'Galettis_2023_table_S1:row46:col4', 'Galettis_2023_table_S1:row47:col4', 'Galettis_2023_table_S1:row48:col4', 'Galettis_2023_table_S1:row49:col4', 'Galettis_2023_table_S1:row51:col4', 'Galettis_2023_table_S1:row52:col4', 'Galettis_2023_table_S1:row53:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Galettis_2023_table_S1:row6:col3', 'Galettis_2023_table_S1:row7:col3', 'Galettis_2023_table_S1:row8:col3', 'Galettis_2023_table_S1:row9:col3', 'Galettis_2023_table_S1:row15:col3', 'Galettis_2023_table_S1:row16:col3', 'Galettis_2023_table_S1:row17:col3', 'Galettis_2023_table_S1:row18:col3', 'Galettis_2023_table_S1:row28:col3', 'Galettis_2023_table_S1:row29:col3', 'Galettis_2023_table_S1:row30:col3', 'Galettis_2023_table_S1:row31:col3', 'Galettis_2023_table_S1:row34:col3', 'Galettis_2023_table_S1:row35:col3', 'Galettis_2023_table_S1:row36:col3', 'Galettis_2023_table_S1:row37:col3', 'Galettis_2023_table_S1:row38:col3', 'Galettis_2023_table_S1:row39:col3', 'Galettis_2023_table_S1:row41:col3', 'Galettis_2023_table_S1:row42:col3', 'Galettis_2023_table_S1:row43:col3', 'Galettis_2023_table_S1:row44:col3', 'Galettis_2023_table_S1:row46:col3', 'Galettis_2023_table_S1:row47:col3', 'Galettis_2023_table_S1:row48:col3', 'Galettis_2023_table_S1:row49:col3', 'Galettis_2023_table_S1:row51:col3', 'Galettis_2023_table_S1:row52:col3', 'Galettis_2023_table_S1:row53:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Galettis_2023_table_S1:row6:col8', 'Galettis_2023_table_S1:row7:col8', 'Galettis_2023_table_S1:row8:col8', 'Galettis_2023_table_S1:row9:col8', 'Galettis_2023_table_S1:row15:col8', 'Galettis_2023_table_S1:row16:col8', 'Galettis_2023_table_S1:row17:col8', 'Galettis_2023_table_S1:row18:col8', 'Galettis_2023_table_S1:row28:col8', 'Galettis_2023_table_S1:row29:col8', 'Galettis_2023_table_S1:row30:col8', 'Galettis_2023_table_S1:row31:col8', 'Galettis_2023_table_S1:row34:col8', 'Galettis_2023_table_S1:row35:col8', 'Galettis_2023_table_S1:row36:col8', 'Galettis_2023_table_S1:row37:col8', 'Galettis_2023_table_S1:row38:col8', 'Galettis_2023_table_S1:row39:col8', 'Galettis_2023_table_S1:row41:col8', 'Galettis_2023_table_S1:row42:col8', 'Galettis_2023_table_S1:row43:col8', 'Galettis_2023_table_S1:row44:col8', 'Galettis_2023_table_S1:row46:col8', 'Galettis_2023_table_S1:row47:col8', 'Galettis_2023_table_S1:row48:col8', 'Galettis_2023_table_S1:row49:col8', 'Galettis_2023_table_S1:row51:col8', 'Galettis_2023_table_S1:row52:col8', 'Galettis_2023_table_S1:row53:col8'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Galettis_2023_table_S1:row6:col7', 'Galettis_2023_table_S1:row7:col7', 'Galettis_2023_table_S1:row8:col7', 'Galettis_2023_table_S1:row9:col7', 'Galettis_2023_table_S1:row15:col7', 'Galettis_2023_table_S1:row16:col7', 'Galettis_2023_table_S1:row17:col7', 'Galettis_2023_table_S1:row18:col7', 'Galettis_2023_table_S1:row28:col7', 'Galettis_2023_table_S1:row29:col7', 'Galettis_2023_table_S1:row30:col7', 'Galettis_2023_table_S1:row31:col7', 'Galettis_2023_table_S1:row34:col7', 'Galettis_2023_table_S1:row35:col7', 'Galettis_2023_table_S1:row36:col7', 'Galettis_2023_table_S1:row37:col7', 'Galettis_2023_table_S1:row38:col7', 'Galettis_2023_table_S1:row39:col7', 'Galettis_2023_table_S1:row41:col7', 'Galettis_2023_table_S1:row42:col7', 'Galettis_2023_table_S1:row43:col7', 'Galettis_2023_table_S1:row44:col7', 'Galettis_2023_table_S1:row46:col7', 'Galettis_2023_table_S1:row47:col7', 'Galettis_2023_table_S1:row48:col7', 'Galettis_2023_table_S1:row49:col7', 'Galettis_2023_table_S1:row51:col7', 'Galettis_2023_table_S1:row52:col7', 'Galettis_2023_table_S1:row53:col7'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  | ['Galettis_2023_table_S1:row6:col5', 'Galettis_2023_table_S1:row7:col5', 'Galettis_2023_table_S1:row8:col5', 'Galettis_2023_table_S1:row9:col5', 'Galettis_2023_table_S1:row15:col5', 'Galettis_2023_table_S1:row16:col5', 'Galettis_2023_table_S1:row17:col5', 'Galettis_2023_table_S1:row18:col5', 'Galettis_2023_table_S1:row28:col5', 'Galettis_2023_table_S1:row29:col5', 'Galettis_2023_table_S1:row30:col5', 'Galettis_2023_table_S1:row31:col5', 'Galettis_2023_table_S1:row34:col5', 'Galettis_2023_table_S1:row35:col5', 'Galettis_2023_table_S1:row36:col5', 'Galettis_2023_table_S1:row37:col5', 'Galettis_2023_table_S1:row38:col5', 'Galettis_2023_table_S1:row39:col5', 'Galettis_2023_table_S1:row41:col5', 'Galettis_2023_table_S1:row42:col5', 'Galettis_2023_table_S1:row43:col5', 'Galettis_2023_table_S1:row44:col5', 'Galettis_2023_table_S1:row46:col5', 'Galettis_2023_table_S1:row47:col5', 'Galettis_2023_table_S1:row48:col5', 'Galettis_2023_table_S1:row49:col5', 'Galettis_2023_table_S1:row51:col5', 'Galettis_2023_table_S1:row52:col5', 'Galettis_2023_table_S1:row53:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.6 L/h | ['Galettis_2023_table_S1:row6:col6', 'Galettis_2023_table_S1:row7:col6', 'Galettis_2023_table_S1:row8:col6', 'Galettis_2023_table_S1:row9:col6', 'Galettis_2023_table_S1:row15:col6', 'Galettis_2023_table_S1:row16:col6', 'Galettis_2023_table_S1:row17:col6', 'Galettis_2023_table_S1:row18:col6', 'Galettis_2023_table_S1:row28:col6', 'Galettis_2023_table_S1:row29:col6', 'Galettis_2023_table_S1:row30:col6', 'Galettis_2023_table_S1:row31:col6', 'Galettis_2023_table_S1:row34:col6', 'Galettis_2023_table_S1:row35:col6', 'Galettis_2023_table_S1:row36:col6', 'Galettis_2023_table_S1:row37:col6', 'Galettis_2023_table_S1:row38:col6', 'Galettis_2023_table_S1:row39:col6', 'Galettis_2023_table_S1:row41:col6', 'Galettis_2023_table_S1:row42:col6', 'Galettis_2023_table_S1:row43:col6', 'Galettis_2023_table_S1:row44:col6', 'Galettis_2023_table_S1:row46:col6', 'Galettis_2023_table_S1:row47:col6', 'Galettis_2023_table_S1:row48:col6', 'Galettis_2023_table_S1:row49:col6', 'Galettis_2023_table_S1:row51:col6', 'Galettis_2023_table_S1:row52:col6', 'Galettis_2023_table_S1:row53:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 36.6 L | ['Galettis_2023_table_S1:row6:col7', 'Galettis_2023_table_S1:row7:col7', 'Galettis_2023_table_S1:row8:col7', 'Galettis_2023_table_S1:row9:col7', 'Galettis_2023_table_S1:row15:col7', 'Galettis_2023_table_S1:row16:col7', 'Galettis_2023_table_S1:row17:col7', 'Galettis_2023_table_S1:row18:col7', 'Galettis_2023_table_S1:row28:col7', 'Galettis_2023_table_S1:row29:col7', 'Galettis_2023_table_S1:row30:col7', 'Galettis_2023_table_S1:row31:col7', 'Galettis_2023_table_S1:row34:col7', 'Galettis_2023_table_S1:row35:col7', 'Galettis_2023_table_S1:row36:col7', 'Galettis_2023_table_S1:row37:col7', 'Galettis_2023_table_S1:row38:col7', 'Galettis_2023_table_S1:row39:col7', 'Galettis_2023_table_S1:row41:col7', 'Galettis_2023_table_S1:row42:col7', 'Galettis_2023_table_S1:row43:col7', 'Galettis_2023_table_S1:row44:col7', 'Galettis_2023_table_S1:row46:col7', 'Galettis_2023_table_S1:row47:col7', 'Galettis_2023_table_S1:row48:col7', 'Galettis_2023_table_S1:row49:col7', 'Galettis_2023_table_S1:row51:col7', 'Galettis_2023_table_S1:row52:col7', 'Galettis_2023_table_S1:row53:col7'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 16.66 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 168 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.55 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Galettis2023_mon_11/D_1Methyl2Pyrrolidone_Galettis2023_mon_11_matlab.zip" download>D_1Methyl2Pyrrolidone_Galettis2023_mon_11_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Galettis2023_mon_11/D_1Methyl2Pyrrolidone_Galettis2023_mon_11_matlab_simbio.zip" download>D_1Methyl2Pyrrolidone_Galettis2023_mon_11_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Galettis2023_mon_11/D_1Methyl2Pyrrolidone_Galettis2023_mon_11_sbml.zip" download>D_1Methyl2Pyrrolidone_Galettis2023_mon_11_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Galettis2023_mon_11/D_1Methyl2Pyrrolidone_Galettis2023_mon_11_cellml.zip" download>D_1Methyl2Pyrrolidone_Galettis2023_mon_11_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Galettis P, Cheah CY, Davis J, Ludford-Menting M, Link EK, Martin JH et al. A phase 1 clinical trial of the repurposable acetyllysine mimetic, n-methyl-2-pyrrolidone (NMP), in relapsed or refractory multiple myeloma. Clinical epigenetics 15(1):15 (2023). [doi:10.1186/s13148-023-01427-7](https://doi.org/10.1186/s13148-023-01427-7)

**This record:** Pharmacolibrary, model `D_1Methyl2Pyrrolidone_Galettis2023_mon_11`. <https://pharmacolibrary.github.io/#/drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Galettis2023_mon_11>

```bibtex
@misc{pharmacolibrary_D1Methyl2PyrrolidoneGalettis2023mon11,
  title  = {{Pharmacolibrary model D_1Methyl2Pyrrolidone_Galettis2023_mon_11}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Galettis2023_mon_11},
  note   = {Parameters from doi:10.1186/s13148-023-01427-7},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B1_methyl_2_pyrrolidone%5D%20D_1Methyl2Pyrrolidone_Galettis2023_mon_11&body=Drug%3A%201_methyl_2_pyrrolidone%0ARecord%3A%20D_1Methyl2Pyrrolidone_Galettis2023_mon_11%0APaper%3A%20Galettis_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_1_methyl_2_pyrrolidone/D_1Methyl2Pyrrolidone_Galettis2023_mon_11%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 16:16 UTC</sub>
