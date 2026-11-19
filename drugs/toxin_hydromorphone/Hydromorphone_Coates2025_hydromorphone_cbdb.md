<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Hydromorphone&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/&quot;},{&quot;label&quot;:&quot;Coates_2025 \u00b7 hydromorphone_cbdb&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydromorphone_Balyan2020_reference&quot;,&quot;label&quot;:&quot;Balyan_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Balyan2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Olofsen2026_reference&quot;,&quot;label&quot;:&quot;Olofsen_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Olofsen2026_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Vallner1981_reference&quot;,&quot;label&quot;:&quot;Vallner_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Vallner1981_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydromorphone_Chang1988_reference&quot;,&quot;label&quot;:&quot;Chang_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_hydromorphone/Hydromorphone_Chang1988_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Hydromorphone — `Hydromorphone_Coates2025_hydromorphone_cbdb`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">in vitro</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Hydromorphone" model-id="Hydromorphone_Coates2025_hydromorphone_cbdb" status="rejected" stale="false" population="virtual healthy adults and adults with moderate hepatic impairment (Child-Pugh B); pooled human liver microsomes in vitro" measured-compound="hydromorphone / hydromorphone-3-glucuronide (HM3G)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Coates S, Bardhi K, Zhao M, Lazarus P. UGT2B7-mediated drug-drug interaction between cannabinoids and hydromorphone. Drug metabolism and disposition: the biological fate of chemicals 53(9):100135 (2025).
  ·  DOI: [10.1016/j.dmd.2025.100135](https://doi.org/10.1016/j.dmd.2025.100135)

## Population and dosing

**Population:** virtual healthy adults and adults with moderate hepatic impairment (Child-Pugh B); pooled human liver microsomes in vitro · condition healthy and moderate hepatic impairment (cirrhosis); cannabinoid co-exposure DDI · age group adult · n = unknown (in vitro HLM from 50 subjects; 400+ virtual subjects per simulation).

**Dosed compound ≠ measured compound:** dosed Hydromorphone, measured hydromorphone / hydromorphone-3-glucuronide (HM3G).

> **Species: in vitro.** This record comes from an in-vitro study (cells, tissue or microsomes), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.80).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC ng/h per mL | AUC | 99.42 |  |
| Ka | kabs | 0.02 |  |
| in vivo clearance | CL | 117.6 | L/h |
| Vd (L/kg) — Buprenorphine | V | 8.3 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">in vitro</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — hydromorphone: AUC 99.4; hydromorphone / hydromorphone-3-glucuronide (HM3G): kabs 0.02, CL 118 L/h, V 8.3 L/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has hydromorphone / hydromorphone-3-glucuronide (HM3G), the second reading Hydromorphone; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC ng/h per mL | `Q88` · AUC | 99.42 |  |  |  |  | llm_confirmed (0.6) | tbl6:row4:col2, tbl6:row8:col2, tbl6:row15:col2 |
| Ka | `Q49` · kabs | 0.02 |  |  |  | 1/h | exact (1) | Coates_2025:other_prose |
| in vivo clearance | `Q22` · CL | 117.6 | L/h | 3.267e-05 | m3/s | L/h | boundary (0.8) | Coates_2025:results_prose |
| Vd (L/kg) — Buprenorphine | `Q61` · V | 8.3 | L/kg | 0.581 | m3 | L | review_gapfill (0.7) | Coluzzi_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table tbl6: rows are variants (Hydromorphone, Hydromorphone+CBDb, Ratioc), the parameters are the column headers (AUC ng/h per mL) — read one record per variant
- column '% female' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dosea (mg)and route of administration' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'obs' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'pred/obs' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Lohela et al., 2021' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row0:col3', 'Coates_2025_table_S3:row0:col5', 'Coates_2025_table_S3:row0:col7', 'Coates_2025_table_S3:row0:col8', 'Coates_2025_table_S3:row0:col9', 'Coates_2025_table_S3:row8:col3', 'Coates_2025_table_S3:row8:col7', 'Coates_2025_table_S3:row8:col8', 'Coates_2025_table_S3:row8:col9'])
- dropped unlinked row (NIL): 'Drover et al., 2002' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row1:col3', 'Coates_2025_table_S3:row1:col7', 'Coates_2025_table_S3:row1:col8', 'Coates_2025_table_S3:row1:col9', 'Coates_2025_table_S3:row10:col3', 'Coates_2025_table_S3:row10:col7', 'Coates_2025_table_S3:row10:col8', 'Coates_2025_table_S3:row10:col9'])
- dropped PD-category row 'Hill et al., 1991' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Coates_2025_table_S3:row2:col3', 'Coates_2025_table_S3:row2:col5', 'Coates_2025_table_S3:row2:col7', 'Coates_2025_table_S3:row2:col8', 'Coates_2025_table_S3:row2:col9', 'Coates_2025_table_S3:row3:col3', 'Coates_2025_table_S3:row3:col5', 'Coates_2025_table_S3:row3:col7', 'Coates_2025_table_S3:row3:col8', 'Coates_2025_table_S3:row3:col9', 'Coates_2025_table_S3:row4:col3', 'Coates_2025_table_S3:row4:col5', 'Coates_2025_table_S3:row4:col7', 'Coates_2025_table_S3:row4:col8', 'Coates_2025_table_S3:row4:col9'])
- dropped unlinked row (NIL): 'Coda et al., 2003' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row5:col3', 'Coates_2025_table_S3:row5:col7', 'Coates_2025_table_S3:row5:col8', 'Coates_2025_table_S3:row5:col9'])
- dropped unlinked row (NIL): 'Average GMFEs (range)' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row6:col6', 'Coates_2025_table_S3:row34:col6'])
- dropped unlinked row (NIL): 'Average MRDs (range)' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row7:col6', 'Coates_2025_table_S3:row36:col6'])
- dropped unlinked row (NIL): 'Angst et al., 2001' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row12:col3', 'Coates_2025_table_S3:row12:col7', 'Coates_2025_table_S3:row12:col8', 'Coates_2025_table_S3:row12:col9'])
- dropped unlinked row (NIL): 'Toyama et al., 2015' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row14:col3', 'Coates_2025_table_S3:row14:col7', 'Coates_2025_table_S3:row14:col8', 'Coates_2025_table_S3:row14:col9', 'Coates_2025_table_S3:row16:col3', 'Coates_2025_table_S3:row16:col7', 'Coates_2025_table_S3:row16:col8', 'Coates_2025_table_S3:row16:col9', 'Coates_2025_table_S3:row18:col3', 'Coates_2025_table_S3:row18:col7', 'Coates_2025_table_S3:row18:col8', 'Coates_2025_table_S3:row18:col9'])
- dropped unlinked row (NIL): 'Durnin et al., 2001a' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row20:col3', 'Coates_2025_table_S3:row20:col7', 'Coates_2025_table_S3:row20:col8', 'Coates_2025_table_S3:row20:col9', 'Coates_2025_table_S3:row38:col3', 'Coates_2025_table_S3:row38:col7', 'Coates_2025_table_S3:row38:col8', 'Coates_2025_table_S3:row38:col9'])
- dropped unlinked row (NIL): 'Durnin et al., 2001b' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row22:col3', 'Coates_2025_table_S3:row22:col7', 'Coates_2025_table_S3:row22:col8', 'Coates_2025_table_S3:row22:col9', 'Coates_2025_table_S3:row24:col3', 'Coates_2025_table_S3:row24:col7', 'Coates_2025_table_S3:row24:col8', 'Coates_2025_table_S3:row24:col9'])
- dropped unlinked row (NIL): 'Durnin et al., 2001c' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row26:col3', 'Coates_2025_table_S3:row26:col7', 'Coates_2025_table_S3:row26:col8', 'Coates_2025_table_S3:row26:col9'])
- dropped unlinked row (NIL): 'Durnin et al., 2001d' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row28:col3', 'Coates_2025_table_S3:row28:col7', 'Coates_2025_table_S3:row28:col8', 'Coates_2025_table_S3:row28:col9', 'Coates_2025_table_S3:row30:col3', 'Coates_2025_table_S3:row30:col7', 'Coates_2025_table_S3:row30:col8', 'Coates_2025_table_S3:row30:col9', 'Coates_2025_table_S3:row32:col3', 'Coates_2025_table_S3:row32:col7', 'Coates_2025_table_S3:row32:col8', 'Coates_2025_table_S3:row32:col9'])
- dropped unlinked row (NIL): 'GMFEs' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row40:col6'])
- dropped unlinked row (NIL): 'MRDs' — extend the ontology if this is a real PK parameter (source ['Coates_2025_table_S3:row42:col6'])
- table mostly unlinked (13/15 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q49 ('Ka'=0.02) from results prose — parameter table was unreadable
- salvaged Q22 ('in vivo clearance'=117.6) from results prose — parameter table was unreadable
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 6 column 4 (char 181)) — units left missing
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (in vivo clearance)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=hydromorphone / hydromorphone-3-glucuronide (HM3G)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- estimate-method split: 'Hydromorphone+CBDb' is one of 3 estimates of Coates_2025's substance matrix (Hydromorphone, Hydromorphone+CBDb, Ratioc); same population, different estimation method
- row roles: LLM call failed (JSONDecodeError) — deterministic compound tags kept
- molar mass: none found for 'THC' — its concentrations stay mass-only
- molar mass: none found for '11-OH-THC' — its concentrations stay mass-only
- molar mass: none found for '7-OH-CBD' — its concentrations stay mass-only
- molar mass: none found for 'hydromorphone / hydromorphone-3-glucuronide (HM3G)' — its concentrations stay mass-only
- gap-filled Q61 (V) from Coluzzi_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tbl6: unbound_uncertainty
- table tbl6: units_need_context
- table Coates_2025_table_S3: unbound_uncertainty
- table Coates_2025_table_S3: missing_label
- table Coates_2025_table_S3: ragged_grid
- table Coates_2025_table_S3: unparsed_numeric_cell
- companion parameter table S3 transcribed (110 record(s))
- LLM selected parameter table(s) S3
- dropped sensitivity-analysis table(s) 6 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['hydromorphone', 'hydromorphone-3-glucuronide (hm3g)', 'ugt2b7-mediated glucuronidation'], ['thc', '11-oh-thc', 'oxidation'], ['cbd', '7-oh-cbd', 'oxidation']] | [] | mismatch |
| `gpt-oss:120b` | `parameters[drover et al., 2002]` |  | 0.98 | only_one_extracted |
| `gpt-oss:120b` | `parameters[in vivo clearance]` | 117.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` |  | 0.02 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.02 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[observed in vivo clearance]` |  | 117.6 | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | hydromorphone / hydromorphone-3-glucuronide (HM3G) | Hydromorphone | mismatch |

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
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Coluzzi_2020:review'] |
| C5_unit_missing_Q49 | fail | 1 / [time] |  | ['Coates_2025:other_prose'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['tbl6:row4:col2', 'tbl6:row8:col2', 'tbl6:row15:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 117.6 | ['Coates_2025:results_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 118 L/h | ['Coates_2025:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 581 L | ['Coluzzi_2020:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhydromorphone%5D%20Hydromorphone_Coates2025_hydromorphone_cbdb&body=Drug%3A%20hydromorphone%0ARecord%3A%20Hydromorphone_Coates2025_hydromorphone_cbdb%0APaper%3A%20Coates_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_hydromorphone/Hydromorphone_Coates2025_hydromorphone_cbdb%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 10:29 UTC</sub>
