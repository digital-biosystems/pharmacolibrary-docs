<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;spirapril&quot;,&quot;href&quot;:&quot;drugs/drug_spirapril/&quot;},{&quot;label&quot;:&quot;Kr\u00e4henb\u00fchl_1993 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# spirapril — `Spirapril_Krhenbhl1993_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-10-05 09:31 UTC) predates the latest extraction (2026-10-07 07:27 UTC); the status shown comes from the current checks. The record was held back because the spirapril parameters KD (0.45), C0 (1600) and C0 (553) were reported without units, so no SI values could be derived for them.

<div class="pk-model-meta" hidden drug="spirapril" model-id="Spirapril_Krhenbhl1993_reference" status="needs_review" stale="true" population="patients with chronic liver disease and healthy subjects" measured-compound="spiraprilat" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Krähenbühl S, Grass P, Surve A, Kutz K, Reichen J. Pharmacokinetics and haemodynamic effects of a single oral dose of the novel ACE inhibitor spirapril in patients with chronic liver disease. European journal of clinical pharmacology 45(3):247–253 (1993).
  ·  DOI: [10.1007/BF00315391](https://doi.org/10.1007/BF00315391)

## Population and dosing

**Population:** patients with chronic liver disease and healthy subjects · condition chronic liver disease · age group adult · n = &gt;=34.

**Dosing:** 25 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed spirapril, measured spiraprilat.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cma x | Cmax | 572 | ng/ml |
| AUC | AUC | 1190 | ng.h/ml |
| CL/f ~ | CLm/F | 0.35 | L/h |
| Vdf ~ | Vm/F | 46.5 | L |
| kd | KD | 0.45 |  |
| C(0) | C0 | 1600 |  |
| tl/21 | t1/2z | 1.53 | h |
| AUC (0-t) a | AUCt | 611 | ng.h/ml |
| km b | kfm | 1.03 | 1/h |
| tz/2 b | t1/2z | 1.29 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.083). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was held back because the spirapril parameters KD (0.45), C0 (1600) and C0 (553) were reported without units, so no SI values could be derived for them.**

Three dimensioned parameters — the equilibrium dissociation constant KD (0.45), the extrapolated initial concentration C0 for spirapril (1600) and C0 for spiraprilat (553) — appear in the paper without a unit, so their values cannot be converted to a common measurement system and the model cannot use them. A further unit reported in the paper could not be converted to SI, leaving that parameter without a usable value. The two readers also disagree on the primary analyte (spiraprilat versus spirapril) and on whether the spirapril–spiraprilat link is hydrolysis or metabolism, and several parameter values (a 2.0 h⁻¹ rate constant and an AUC of 820) differ between the extractions. Extracted — spirapril: Cmax 572 ng/ml, tmax 0.8 h, AUC 1.19e+03 µg·h/l, CL/F 0.35 L/h, V/F 46.5 L, KD 0.45, C0 1.6e+03, t1/2z 1.53 h; spiraprilat: t1/2z 2 h, AUCt 611 µg·h/l, AUC 1.03e+03 µg·h/l, kfm 1.03 1/h, C0 553.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has spiraprilat, the second reading spirapril; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cma x | `Q32` · Cmax | 572 | ng/ml |  |  | ng/ml | space_fold (0.95) | tab_1:row0:col4, tab_1:row0:col5, tab_1:row0:col6, tab_1:row0:col7, tab_1:row0:col8, tab_1:row0:col9, tab_1:row0:col10, tab_1:row0:col11, tab_1:row0:col12, tab_1:row0:col13, tab_1:row0:col14, tab_1:row0:col16, tab_1:row0:col18 |
| AUC | `Q88` · AUC | 1190 | ng.h/ml |  |  | ng.h/ml | exact (1) | tab_1:row2:col4, tab_1:row2:col5, tab_1:row2:col6, tab_1:row2:col7, tab_1:row2:col8, tab_1:row2:col9, tab_1:row2:col10, tab_1:row2:col11, tab_1:row2:col12, tab_1:row2:col13, tab_1:row2:col18 |
| CL/f ~ | `Q351` · CLm/F | 0.35 | L/h | 9.722e-08 | m3/s | L/h | llm_confirmed (0.6) | tab_1:row3:col4, tab_1:row3:col5, tab_1:row3:col6, tab_1:row3:col7, tab_1:row3:col8, tab_1:row3:col9, tab_1:row3:col10, tab_1:row3:col11, tab_1:row3:col12, tab_1:row3:col13, tab_1:row3:col18 |
| Vdf ~ | `Q367` · Vm/F | 46.5 | L | 0.0465 | m3 | L | llm (0.6) | tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col6, tab_1:row4:col7, tab_1:row4:col8, tab_1:row4:col9, tab_1:row4:col10, tab_1:row4:col11, tab_1:row4:col12, tab_1:row4:col13, tab_1:row4:col14, tab_1:row4:col16, tab_1:row4:col18 |
| kd | `Q331` · KD | 0.45 |  |  |  |  | exact (1) | tab_1:row5:col4, tab_1:row5:col5, tab_1:row5:col6, tab_1:row5:col7, tab_1:row5:col8, tab_1:row5:col9, tab_1:row5:col10, tab_1:row5:col11, tab_1:row5:col12, tab_1:row5:col13, tab_1:row5:col14, tab_1:row5:col16, tab_1:row5:col18 |
| C(0) | `Q86` · C0 | 1600 |  |  |  |  | llm (0.6) | tab_1:row6:col4, tab_1:row6:col5, tab_1:row6:col6, tab_1:row6:col7, tab_1:row6:col8, tab_1:row6:col9, tab_1:row6:col10, tab_1:row6:col11, tab_1:row6:col12, tab_1:row6:col13, tab_1:row6:col14, tab_1:row6:col16, tab_1:row6:col18 |
| tl/21 | `Q57` · t1/2z | 1.53 | h | 5508 | s | h | llm (0.6) | tab_1:row7:col1, tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6, tab_1:row7:col7, tab_1:row7:col8, tab_1:row7:col9, tab_1:row7:col10, tab_1:row7:col11, tab_1:row7:col12, tab_1:row7:col13 |
| AUC (0-t) a | `Q19` · AUCt | 611 | ng.h/ml |  |  | ng.h/ml | llm_corrected (0.6) | Krähenbühl_1993_table_3:row2:col3, Krähenbühl_1993_table_3:row2:col4, Krähenbühl_1993_table_3:row2:col5, Krähenbühl_1993_table_3:row2:col6, Krähenbühl_1993_table_3:row2:col7, Krähenbühl_1993_table_3:row2:col8, Krähenbühl_1993_table_3:row2:col9, Krähenbühl_1993_table_3:row2:col10, Krähenbühl_1993_table_3:row2:col11, Krähenbühl_1993_table_3:row2:col12, Krähenbühl_1993_table_3:row2:col15, Krähenbühl_1993_table_3:row2:col17 |
| km b | `Q305` · kfm | 1.03 | 1/h | 0.0002861 | 1/s | 1/h | exact (1) | Krähenbühl_1993_table_3:row4:col3, Krähenbühl_1993_table_3:row4:col4, Krähenbühl_1993_table_3:row4:col5, Krähenbühl_1993_table_3:row4:col6, Krähenbühl_1993_table_3:row4:col7, Krähenbühl_1993_table_3:row4:col8, Krähenbühl_1993_table_3:row4:col9, Krähenbühl_1993_table_3:row4:col10, Krähenbühl_1993_table_3:row4:col11, Krähenbühl_1993_table_3:row4:col12, Krähenbühl_1993_table_3:row4:col13, Krähenbühl_1993_table_3:row4:col15, Krähenbühl_1993_table_3:row4:col17 |
| tz/2 b | `Q57` · t1/2z | 1.29 | h | 4644 | s | h | llm (0.6) | Krähenbühl_1993_table_3:row6:col3, Krähenbühl_1993_table_3:row6:col4, Krähenbühl_1993_table_3:row6:col5, Krähenbühl_1993_table_3:row6:col6, Krähenbühl_1993_table_3:row6:col7, Krähenbühl_1993_table_3:row6:col8, Krähenbühl_1993_table_3:row6:col9, Krähenbühl_1993_table_3:row6:col10, Krähenbühl_1993_table_3:row6:col11, Krähenbühl_1993_table_3:row6:col12 |

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
- column '9' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column '10' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'tma~' — extend the ontology if this is a real PK parameter (source ['tab_1:row1:col4', 'tab_1:row1:col5', 'tab_1:row1:col6', 'tab_1:row1:col7', 'tab_1:row1:col8', 'tab_1:row1:col9', 'tab_1:row1:col10', 'tab_1:row1:col11', 'tab_1:row1:col12', 'tab_1:row1:col13', 'tab_1:row1:col14', 'tab_1:row1:col16', 'tab_1:row1:col18'])
- dropped unlinked row (NIL): 'C .....' — extend the ontology if this is a real PK parameter (source ['Krähenbühl_1993_table_3:row0:col3', 'Krähenbühl_1993_table_3:row0:col4', 'Krähenbühl_1993_table_3:row0:col5', 'Krähenbühl_1993_table_3:row0:col6', 'Krähenbühl_1993_table_3:row0:col7', 'Krähenbühl_1993_table_3:row0:col8', 'Krähenbühl_1993_table_3:row0:col9', 'Krähenbühl_1993_table_3:row0:col10', 'Krähenbühl_1993_table_3:row0:col11', 'Krähenbühl_1993_table_3:row0:col12', 'Krähenbühl_1993_table_3:row0:col13', 'Krähenbühl_1993_table_3:row0:col15', 'Krähenbühl_1993_table_3:row0:col17'])
- dropped unlinked row (NIL): 't~' — extend the ontology if this is a real PK parameter (source ['Krähenbühl_1993_table_3:row1:col3', 'Krähenbühl_1993_table_3:row1:col4', 'Krähenbühl_1993_table_3:row1:col5', 'Krähenbühl_1993_table_3:row1:col6', 'Krähenbühl_1993_table_3:row1:col7', 'Krähenbühl_1993_table_3:row1:col8', 'Krähenbühl_1993_table_3:row1:col9', 'Krähenbühl_1993_table_3:row1:col10', 'Krähenbühl_1993_table_3:row1:col11', 'Krähenbühl_1993_table_3:row1:col12', 'Krähenbühl_1993_table_3:row1:col17'])
- dropped unlinked row (NIL): 'AUG' — extend the ontology if this is a real PK parameter (source ['Krähenbühl_1993_table_3:row3:col3', 'Krähenbühl_1993_table_3:row3:col4', 'Krähenbühl_1993_table_3:row3:col5', 'Krähenbühl_1993_table_3:row3:col6', 'Krähenbühl_1993_table_3:row3:col7', 'Krähenbühl_1993_table_3:row3:col8', 'Krähenbühl_1993_table_3:row3:col9', 'Krähenbühl_1993_table_3:row3:col10', 'Krähenbühl_1993_table_3:row3:col11', 'Krähenbühl_1993_table_3:row3:col12', 'Krähenbühl_1993_table_3:row3:col15', 'Krähenbühl_1993_table_3:row3:col17'])
- dropped unlinked row (NIL): 'C (0)' — extend the ontology if this is a real PK parameter (source ['Krähenbühl_1993_table_3:row5:col3', 'Krähenbühl_1993_table_3:row5:col4', 'Krähenbühl_1993_table_3:row5:col5', 'Krähenbühl_1993_table_3:row5:col6', 'Krähenbühl_1993_table_3:row5:col7', 'Krähenbühl_1993_table_3:row5:col8', 'Krähenbühl_1993_table_3:row5:col9', 'Krähenbühl_1993_table_3:row5:col10', 'Krähenbühl_1993_table_3:row5:col11', 'Krähenbühl_1993_table_3:row5:col12', 'Krähenbühl_1993_table_3:row5:col13', 'Krähenbühl_1993_table_3:row5:col15', 'Krähenbühl_1993_table_3:row5:col17'])
- implicit units: 'Cma x' → ng/ml (from the paper text: "The text states: 'The limit of quantification was 4 ng. ml-1 for spirapril and 13 ng. ml 1 for spiraprilat.' Cmax is a p")
- implicit units: 'AUC' → ng.h/ml (from the paper text: "The abstract states: 'AUC 820 gg. h-1-~, 923 gg. h-1-~ and 1300 gg-h. 1-1' (where 'gg' is an OCR error for 'ng' and '1-1")
- implicit units: 'CL/f ~' → L/h (from the popPK convention: 'Clearance (CL/F) is conventionally expressed in L/h. The value 0.35 is consistent with this unit for a small molecule dr')
- implicit units: 'Vdf ~' → L (from the popPK convention: 'Volume of distribution (Vdf) is conventionally expressed in L. The value 46.5 is consistent with this unit.')
- implicit units: 'kd' — the LLM proposed '1/h', whose dimension does not fit Q331; left unset
- implicit units: 'C(0)' — the LLM proposed 'ng/ml', whose dimension does not fit Q86; left unset
- implicit units: 'tl/21' → h (from the popPK convention: 'Half-life (t1/2) is conventionally expressed in hours (h). The value 1.53 is consistent with this unit.')
- implicit units: 'AUC (0-t) a' → ng.h/ml (from the paper text: "AUC(0-t) is a partial area under the concentration-time curve. The abstract establishes the AUC unit as 'ng.h.ml-1' (ng.")
- implicit units: 'km b' → 1/h (from the paper text: "The abstract states: 'reduced rate constant of spiraprilat formation (1.10 h-~ in patients vs. 2.00 h -~ in control subj")
- implicit units: 'tz/2 b' → h (from the popPK convention: 'Half-life (t1/2) is conventionally expressed in hours (h). The value 1.29 is consistent with this unit.')
- metabolite spiraprilat: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite spiraprilat: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=spiraprilat
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 15/15 row label(s) assigned, 50 linked by role; re-tagged spirapril→parent ×98, spirapril→spiraprilat ×84
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table tab_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_1:row0:col2 = '(ng-ml 1)'
- unparsed cell tab_1:row2:col2 = '(ng.h.ml-0'
- unparsed cell tab_1:row2:col14 = '0.46 (0.21) c'
- unparsed cell tab_1:row2:col16 = '0.80 (0.53) °'
- unparsed cell tab_1:row3:col2 = '(l.min 1)'
- unparsed cell tab_1:row3:col14 = '48.5 (14.5) c'
- unparsed cell tab_1:row3:col16 = '83.3 (41.1) b'
- unparsed cell tab_1:row4:col2 = '(1)'
- unparsed cell tab_1:row6:col1 = 'C(0)'
- unparsed cell tab_1:row6:col2 = '(ng.m1-1)'
- transposed table Krähenbühl_1993_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Krähenbühl_1993_table_3:row0:col1 = '(ng-m1-1 )'
- unparsed cell Krähenbühl_1993_table_3:row1:col13 = '820 (431) c'
- unparsed cell Krähenbühl_1993_table_3:row1:col15 = '923 (485) c'
- unparsed cell Krähenbühl_1993_table_3:row2:col13 = '1150 (490) c'
- unparsed cell Krähenbühl_1993_table_3:row3:col13 = '1.10 (0.22) c'
- unparsed cell Krähenbühl_1993_table_3:row4:col1 = '(1-h 1)'
- unparsed cell Krähenbühl_1993_table_3:row5:col1 = '(ng. m1-1)'
- companion parameter table 3 transcribed (84 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.083 (2/24 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['spirapril', 'spiraprilat', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc (0-t) a]` |  | 611 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc (0-t) a]` | 611 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | 1190 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` |  | 1190 | only_one_extracted |
| `gpt-oss-120b` | `parameters[c]` | 1600 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[c]` |  | 1600 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f -]` | 0.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f -]` |  | 0.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cma x]` | 572 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cma x]` |  | 572 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd]` | 0.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd]` |  | 0.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km b]` |  | 1.03 | only_one_extracted |
| `gpt-oss-120b` | `parameters[km b]` | 1.03 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tl/21]` | 1.53 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tl/21]` |  | 1.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tma-]` |  | 0.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tz/2 b]` | 1.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdf -]` | 46.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdf -]` |  | 46.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | spiraprilat | spirapril | mismatch |

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
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Krähenbühl_1993_table_3:row2:col3', 'Krähenbühl_1993_table_3:row2:col4', 'Krähenbühl_1993_table_3:row2:col5', 'Krähenbühl_1993_table_3:row2:col6', 'Krähenbühl_1993_table_3:row2:col7', 'Krähenbühl_1993_table_3:row2:col8', 'Krähenbühl_1993_table_3:row2:col9', 'Krähenbühl_1993_table_3:row2:col10', 'Krähenbühl_1993_table_3:row2:col11', 'Krähenbühl_1993_table_3:row2:col12', 'Krähenbühl_1993_table_3:row2:col15', 'Krähenbühl_1993_table_3:row2:col17'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Krähenbühl_1993_table_3:row4:col3', 'Krähenbühl_1993_table_3:row4:col4', 'Krähenbühl_1993_table_3:row4:col5', 'Krähenbühl_1993_table_3:row4:col6', 'Krähenbühl_1993_table_3:row4:col7', 'Krähenbühl_1993_table_3:row4:col8', 'Krähenbühl_1993_table_3:row4:col9', 'Krähenbühl_1993_table_3:row4:col10', 'Krähenbühl_1993_table_3:row4:col11', 'Krähenbühl_1993_table_3:row4:col12', 'Krähenbühl_1993_table_3:row4:col13', 'Krähenbühl_1993_table_3:row4:col15', 'Krähenbühl_1993_table_3:row4:col17'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_1:row0:col4', 'tab_1:row0:col5', 'tab_1:row0:col6', 'tab_1:row0:col7', 'tab_1:row0:col8', 'tab_1:row0:col9', 'tab_1:row0:col10', 'tab_1:row0:col11', 'tab_1:row0:col12', 'tab_1:row0:col13', 'tab_1:row0:col14', 'tab_1:row0:col16', 'tab_1:row0:col18'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6', 'tab_1:row3:col7', 'tab_1:row3:col8', 'tab_1:row3:col9', 'tab_1:row3:col10', 'tab_1:row3:col11', 'tab_1:row3:col12', 'tab_1:row3:col13', 'tab_1:row3:col18'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6', 'tab_1:row4:col7', 'tab_1:row4:col8', 'tab_1:row4:col9', 'tab_1:row4:col10', 'tab_1:row4:col11', 'tab_1:row4:col12', 'tab_1:row4:col13', 'tab_1:row4:col14', 'tab_1:row4:col16', 'tab_1:row4:col18'] |
| C5_dimension_Q57 | pass | [time] |  | ['tab_1:row7:col1', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6', 'tab_1:row7:col7', 'tab_1:row7:col8', 'tab_1:row7:col9', 'tab_1:row7:col10', 'tab_1:row7:col11', 'tab_1:row7:col12', 'tab_1:row7:col13'] |
| C5_dimension_Q57 | pass | [time] |  | ['Krähenbühl_1993_table_3:row6:col3', 'Krähenbühl_1993_table_3:row6:col4', 'Krähenbühl_1993_table_3:row6:col5', 'Krähenbühl_1993_table_3:row6:col6', 'Krähenbühl_1993_table_3:row6:col7', 'Krähenbühl_1993_table_3:row6:col8', 'Krähenbühl_1993_table_3:row6:col9', 'Krähenbühl_1993_table_3:row6:col10', 'Krähenbühl_1993_table_3:row6:col11', 'Krähenbühl_1993_table_3:row6:col12'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_1:row2:col4', 'tab_1:row2:col5', 'tab_1:row2:col6', 'tab_1:row2:col7', 'tab_1:row2:col8', 'tab_1:row2:col9', 'tab_1:row2:col10', 'tab_1:row2:col11', 'tab_1:row2:col12', 'tab_1:row2:col13', 'tab_1:row2:col18'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['tab_1:row5:col4', 'tab_1:row5:col5', 'tab_1:row5:col6', 'tab_1:row5:col7', 'tab_1:row5:col8', 'tab_1:row5:col9', 'tab_1:row5:col10', 'tab_1:row5:col11', 'tab_1:row5:col12', 'tab_1:row5:col13', 'tab_1:row5:col14', 'tab_1:row5:col16', 'tab_1:row5:col18'] |
| C5_unit_missing_Q86 | fail | [mass] * [time] / [length] ** 3 |  | ['tab_1:row6:col4', 'tab_1:row6:col5', 'tab_1:row6:col6', 'tab_1:row6:col7', 'tab_1:row6:col8', 'tab_1:row6:col9', 'tab_1:row6:col10', 'tab_1:row6:col11', 'tab_1:row6:col12', 'tab_1:row6:col13', 'tab_1:row6:col14', 'tab_1:row6:col16', 'tab_1:row6:col18'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bspirapril%5D%20Spirapril_Krhenbhl1993_reference&body=Drug%3A%20spirapril%0ARecord%3A%20Spirapril_Krhenbhl1993_reference%0APaper%3A%20Kr%C3%A4henb%C3%BChl_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_spirapril/Spirapril_Krhenbhl1993_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:27 UTC</sub>
