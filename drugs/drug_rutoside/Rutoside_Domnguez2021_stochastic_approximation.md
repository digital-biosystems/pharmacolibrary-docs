<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2021 \u00b7 stochastic_approximation&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2021_stochastic_approximation`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.389), gpt-oss:120b (not confirmed, agreement 0.158). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**T1/2ka , V and KD have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. None of the extracted parameters is rutoside's own; they describe quercetin. Extracted — quercetin: kabs 0.0129 h−1, t1/2ka 0.167, Fab 0.0275, tlag 0.021 h, V1 1.14 L/kg, V 0.0951, kel 0.119 h−1, KD 0.231, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has rutin → quercetin (metabolism), the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:38.483033+00:00) predates the upstream re-run (2026-10-06 22:23:31.578034+00:00). Current validate status: `needs_review`.

## Citation
Domínguez Moré GP et al., Matrix Effects of the Hydroethanolic Ex…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535)

<div class="pk-model-meta" hidden drug="rutoside" model-id="Rutoside_Domnguez2021_stochastic_approximation" status="needs_review" stale="true" population="Wistar rats" measured-compound="rutin" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka1_pop (h−1) | `Q49` · kabs | 0.0129 | h−1 | 3.5833333333333335e-06 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00535-t005:row3:col2, pharmaceutics-13-00535-t005:row3:col3 | — | not captured |
| Tlag2_pop (h) | `Q83` · tlag | 0.021 | h | 75.60000000000001 | [h] | not captured | exact (1.0) | pharmaceutics-13-00535-t005:row10:col2, pharmaceutics-13-00535-t005:row10:col3 | — | not captured |
| Vpop (L/kg) | `Q352` · Vnorm | 1.14 | L/kg | 0.0798 | [l] / [kg] | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row15:col2, pharmaceutics-13-00535-t005:row15:col3, Domínguez_2021_table_4:row2:col2, Domínguez_2021_table_4:row2:col3 | — | not captured |
| kpop (h−1) | `Q47` · kel | 0.119 | h−1 | 3.3055555555555553e-05 | [1] / [h] | not captured | exact (1.0) | pharmaceutics-13-00535-t005:row20:col2, pharmaceutics-13-00535-t005:row20:col3, Domínguez_2021_table_4:row4:col2, Domínguez_2021_table_4:row4:col3 | — | 0.0231 (None% RSE) |
| k12_pop (h−1) | `Q301` · k12 | 0.0802 | h−1 | 2.2277777777777778e-05 | [1] / [h] | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row25:col2, pharmaceutics-13-00535-t005:row25:col3, Domínguez_2021_table_4:row6:col2, Domínguez_2021_table_4:row6:col3 | — | not captured |
| k21_pop (h−1) | `Q302` · k21 | 0.107 | h−1 | 2.9722222222222223e-05 | [1] / [h] | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row26:col2, pharmaceutics-13-00535-t005:row26:col3, Domínguez_2021_table_4:row7:col2, Domínguez_2021_table_4:row7:col3 | — | not captured |
| a | `Q900` · equation variable | 2.49 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-13-00535-t005:row33:col2, pharmaceutics-13-00535-t005:row33:col3, Domínguez_2021_table_4:row14:col2, Domínguez_2021_table_4:row14:col3 | — | not captured |
| k V | `Q61` · V | 0.111 | not captured | not captured | not captured | not captured | llm (0.6) | Domínguez_2021_table_4:row12:col2, Domínguez_2021_table_4:row12:col3 | — | 0.0148 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'stochastic approximation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'βka1D75' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row4:col2', 'pharmaceutics-13-00535-t005:row4:col3'])
- dropped unlinked row (NIL): 'βka1D500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row5:col2', 'pharmaceutics-13-00535-t005:row5:col3'])
- dropped unlinked row (NIL): 'βka1D750' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row6:col2', 'pharmaceutics-13-00535-t005:row6:col3'])
- dropped unlinked row (NIL): 'βka1D1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row7:col2', 'pharmaceutics-13-00535-t005:row7:col3'])
- dropped duplicate Q49 ('ka2_pop (h−1)', value '0.0686') — already have one for this compound
- dropped unlinked row (NIL): 'F1_pop' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row9:col2', 'pharmaceutics-13-00535-t005:row9:col3'])
- dropped duplicate Q83 ('βTlag2D75', value '0.00556') — already have one for this compound
- dropped unlinked row (NIL): 'βTlag2D500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row12:col2', 'pharmaceutics-13-00535-t005:row12:col3'])
- dropped duplicate Q83 ('βTlag2D750', value '0.0595') — already have one for this compound
- dropped unlinked row (NIL): 'βTlag2D1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row14:col2', 'pharmaceutics-13-00535-t005:row14:col3'])
- dropped unlinked row (NIL): 'βVD75' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row16:col2', 'pharmaceutics-13-00535-t005:row16:col3'])
- dropped unlinked row (NIL): 'βVD500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row17:col2', 'pharmaceutics-13-00535-t005:row17:col3'])
- dropped unlinked row (NIL): 'βVD750' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row18:col2', 'pharmaceutics-13-00535-t005:row18:col3'])
- dropped unlinked row (NIL): 'βVD1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row19:col2', 'pharmaceutics-13-00535-t005:row19:col3'])
- dropped unlinked row (NIL): 'βkD75' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row21:col2', 'pharmaceutics-13-00535-t005:row21:col3'])
- dropped unlinked row (NIL): 'βkD500' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row22:col2', 'pharmaceutics-13-00535-t005:row22:col3'])
- dropped unlinked row (NIL): 'βkD750' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row23:col2', 'pharmaceutics-13-00535-t005:row23:col3'])
- dropped unlinked row (NIL): 'βkD1000' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row24:col2', 'pharmaceutics-13-00535-t005:row24:col3'])
- dropped unlinked row (NIL): 'b' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-00535-t005:row34:col2', 'pharmaceutics-13-00535-t005:row34:col3', 'Domínguez_2021_table_4:row15:col2', 'Domínguez_2021_table_4:row15:col3'])
- dropped unlinked row (NIL): 'βVGEXT' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_4:row3:col2', 'Domínguez_2021_table_4:row3:col3'])
- dropped unlinked row (NIL): 'βkGEXT' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_4:row5:col2', 'Domínguez_2021_table_4:row5:col3'])
- implicit units: 'k V' — the LLM proposed '1/h', whose dimension does not fit Q61; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q61 (k V)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rutin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'stochastic approximation' subgroup of Domínguez_2021 (paper reports 3 populations: rutin, stochastic approximation, value)
- row roles: 8 per-group rows of quercetin covariate_effect but 0 reference group(s) — kept as printed
- row roles: 10 per-group rows of rutin covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 50/50 row label(s) assigned, 21 linked by role; re-tagged parent→quercetin ×45, rutin→parent ×33
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Domínguez_2021_table_2:row3:col3 = '0.18 ± 0.056 #'
- unparsed cell Domínguez_2021_table_2:row3:col4 = '0.18 ± 0.052 #'
- unparsed cell Domínguez_2021_table_2:row4:col3 = '0.23 ± 0.065 *#'
- unparsed cell Domínguez_2021_table_2:row4:col4 = '0.27 ± 0.067 *#'
- unparsed cell Domínguez_2021_table_2:row4:col5 = '0.19 ± 0.049 *#'
- unparsed cell Domínguez_2021_table_2:row5:col3 = '1.67 ± 0.312 *'
- unparsed cell Domínguez_2021_table_2:row5:col4 = '1.77 ± 0.05 *#'
- unparsed cell Domínguez_2021_table_2:row5:col5 = '1.96 ± 0.175 *#'
- unparsed cell Domínguez_2021_table_2:row6:col3 = '0.43 ± 0.070 *'
- unparsed cell Domínguez_2021_table_2:row6:col4 = '0.39 ± 0.011 *#'
- unparsed cell Domínguez_2021_table_2:row6:col5 = '0.36 ± 0.031 *##'
- unparsed cell Domínguez_2021_table_2:row7:col2 = '0.81 ± 0.053 *'
- unparsed cell Domínguez_2021_table_2:row7:col3 = '0.78 ± 0.089 *'
- unparsed cell Domínguez_2021_table_2:row7:col4 = '0.66 ± 0.027 *'
- unparsed cell Domínguez_2021_table_2:row7:col5 = '0.54 ± 0.078 *# ¥'
- unparsed cell Domínguez_2021_table_2:row8:col3 = '0.14 ± 0.039 #'
- unparsed cell Domínguez_2021_table_2:row8:col4 = '0.15 ± 0.043 #'
- unparsed cell Domínguez_2021_table_2:row9:col3 = '4576.46 ± 1234.634 *#'
- unparsed cell Domínguez_2021_table_2:row9:col4 = '3894.74 ± 896.421 *#'
- unparsed cell Domínguez_2021_table_2:row9:col5 = '5452.47 ± 1320.012 *#'
- companion parameter table 2 transcribed (24 record(s))
- unparsed cell Domínguez_2021_table_3:row4:col3 = '1.80 ± 0.274 *#'
- unparsed cell Domínguez_2021_table_3:row4:col4 = '1.60 ± 1.282 *#'
- unparsed cell Domínguez_2021_table_3:row4:col5 = '0.60 ± 0.137 *# ¥'
- unparsed cell Domínguez_2021_table_3:row5:col3 = '26.40 ± 3.714 *#'
- unparsed cell Domínguez_2021_table_3:row5:col4 = '35.76 ± 4.681 *#'
- unparsed cell Domínguez_2021_table_3:row5:col5 = '79.98 ± 10.112 *# ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row6:col3 = '2.32 ± 0.144 *#'
- unparsed cell Domínguez_2021_table_3:row6:col4 = '2.99 ± 0.214 *#'
- unparsed cell Domínguez_2021_table_3:row6:col5 = '1.64 ± 0.125 *#'
- unparsed cell Domínguez_2021_table_3:row7:col3 = '0.09 ± 0.010 *#'
- unparsed cell Domínguez_2021_table_3:row7:col4 = '0.08 ± 0.005 *#'
- unparsed cell Domínguez_2021_table_3:row7:col5 = '0.02 ± 0.002 ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row8:col3 = '7.87 ± 0.907 *#'
- unparsed cell Domínguez_2021_table_3:row8:col4 = '8.26 ± 0.545 *#'
- unparsed cell Domínguez_2021_table_3:row8:col5 = '33.82 ± 3.412 ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row9:col5 = '49.06 ± 4.864 *# ¥ ƶ'
- unparsed cell Domínguez_2021_table_3:row10:col3 = '432.14 ± 26.864 *#'
- unparsed cell Domínguez_2021_table_3:row10:col4 = '335.54 ± 24.714 *# ¥'
- unparsed cell Domínguez_2021_table_3:row10:col5 = '613.16 ± 49.838 *# ¥ ƶ'
- companion parameter table 3 transcribed (35 record(s))
- companion parameter table 4 transcribed (33 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.389 (7/18 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.158 (3/19 fields) | 16 |

<details><summary>27 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['rutin', 'quercetin', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[a]` | 2.49 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1_pop]` | not captured | 0.0275 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k v]` | 0.111 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1_pop]` | not captured | 0.0129 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1_pop]` | 0.0129 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag2_pop]` | not captured | 0.021 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag2_pop]` | 0.021 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vpop].parameter_id` | Q352 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[βka1d1000]` | not captured | 0.175 | only_one_extracted |
| `gpt-oss-120b` | `parameters[βkd1000]` | not captured | 0.231 | only_one_extracted |
| `gpt-oss:120b` | `parameters[a]` | 2.49 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f1_pop]` | not captured | 0.0275 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12_pop]` | 0.0802 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12_pop]` | not captured | 0.0802 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21_pop]` | 0.107 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21_pop]` | not captured | 0.107 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1_pop]` | 0.0129 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka1_pop]` | not captured | 0.0129 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kpop]` | 0.119 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[kpop]` | not captured | 0.119 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag2_pop]` | 0.021 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag2_pop]` | not captured | 0.021 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vpop]` | 1.14 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vpop]` | not captured | 1.14 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | rutin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | rutin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row25:col2', 'pharmaceutics-13-00535-t005:row25:col3', 'Domínguez_2021_table_4:row6:col2', 'Domínguez_2021_table_4:row6:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row26:col2', 'pharmaceutics-13-00535-t005:row26:col3', 'Domínguez_2021_table_4:row7:col2', 'Domínguez_2021_table_4:row7:col3'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row15:col2', 'pharmaceutics-13-00535-t005:row15:col3', 'Domínguez_2021_table_4:row2:col2', 'Domínguez_2021_table_4:row2:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row20:col2', 'pharmaceutics-13-00535-t005:row20:col3', 'Domínguez_2021_table_4:row4:col2', 'Domínguez_2021_table_4:row4:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row3:col2', 'pharmaceutics-13-00535-t005:row3:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-13-00535-t005:row10:col2', 'pharmaceutics-13-00535-t005:row10:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['Domínguez_2021_table_4:row12:col2', 'Domínguez_2021_table_4:row12:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rutoside/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Domínguez_2021` / `Domínguez_2021::stochastic_approximation`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:23 UTC</sub>
