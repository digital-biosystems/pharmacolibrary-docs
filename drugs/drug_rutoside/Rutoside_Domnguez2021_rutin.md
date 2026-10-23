<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05C&quot;,&quot;href&quot;:&quot;atc/C05C.md&quot;},{&quot;label&quot;:&quot;rutoside&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/&quot;},{&quot;label&quot;:&quot;Dom\u00ednguez_2021 \u00b7 rutin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut&quot;,&quot;label&quot;:&quot;Dom\u00ednguez_2024_extract_equivalent_to_7_4_mg_kg_of_rutin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rutoside/Rutoside_Domnguez2024_extract_equivalent_to_7_4_mg_kg_of_rut.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rutoside — `Rutoside_Domnguez2021_rutin`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:31 UTC) predates the latest extraction (2026-10-06 22:23 UTC); the status shown comes from the current checks. The rutoside (rutin) record was rejected because the relative bioavailability parameter Frel is reported with the unit mg/kg, a dimension mismatch for a dimensionless fraction, and its unit could not be converted to SI.

<div class="pk-model-meta" hidden drug="rutoside" model-id="Rutoside_Domnguez2021_rutin" status="rejected" stale="true" population="Wistar rats" measured-compound="rutin" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Domínguez Moré GP, Cardona MI, Sepúlveda PM, Echeverry SM, Oliveira Simões CM, Aragón DM. Matrix Effects of the Hydroethanolic Extract of Calyces of Physalis peruviana L. on Rutin Pharmacokinetics in Wistar Rats Using Population Modeling. Pharmaceutics 13(4) (2021).
  ·  DOI: [10.3390/pharmaceutics13040535](https://doi.org/10.3390/pharmaceutics13040535)

## Population and dosing

**Population:** Wistar rats · condition healthy.

**Dosing:** 101.5, 203, 7000, 35000, 52500, 70000 mg, iv, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0-INF(ng*h/mL) | AUC∞ | 14853.11 | ng*h/mL |
| Vdss (L/kg) | Vss | 0.11 | L/kg |
| Cl (L/h/kg) | CL | 0.10 | L/h/kg |
| k (h−1) | kel | 1.08 | h−1 |
| t1/2 (h) | t1/2z | 0.66 | h |
| MRT (h) | MRT | 1.08 | h |
| Vdz (L/kg) | Vnorm | 0.096 | L/kg |
| AUC/dose× 10−3 (h/L) | AUC/dose | 10243.52 | h/L |
| Cmax (ng/mL) | Cmax | 462.78 | ng/mL |
| Tmax (h) | tmax | 6 | h |
| Vdz/F (L/kg) | Vnorm/F | 86.08 | L/kg |
| Cl/F (L/h/kg) | CL/F | 18.36 | L/h/kg |
| Frel | Frel | 1.0 | mg/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The rutoside (rutin) record was rejected because the relative bioavailability parameter Frel is reported with the unit mg/kg, a dimension mismatch for a dimensionless fraction, and its unit could not be converted to SI.**

In the Domínguez_2021 rat model, Frel is defined as relative bioavailability — a fraction reaching systemic circulation — but is recorded with the verbatim unit mg/kg, so the dimension check on this structural parameter failed and no SI value could be produced. The remaining reported parameters (AUC∞ 14853.11 ng*h/mL, Vss 0.11 L/kg, CL 0.10 L/h/kg, kel 1.08 h−1, t1/2z 0.66 h, MRT 1.08 h, V 0.096 L/kg, Cmax 462.78 ng/mL, tmax 6 h, V/F 86.08 L/kg, CL/F 18.36 L/h/kg) carry consistent units, but the record could not be published while Frel's unit remained unconvertible. Extracted — rutin (i.v. model); quercetin representing Q3OG/Q3OS (oral model): AUC∞ 1.49e+04 ng*h/mL, Vss 0.11 L/kg, CL 0.1 L/h/kg, kel 1.08 h−1, t1/2z 0.66 h, MRT 1.08 h, V 0.096 L/kg, AUC/dose 1.02e+04 h/L, … (+5).

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0-INF(ng*h/mL) | `Q17` · AUC∞ | 14853.11 | ng*h/mL |  |  | (h·ng)/ml | exact (1) | Domínguez_2021_table_2:row2:col1, Domínguez_2021_table_2:row2:col2, Domínguez_2021_table_3:row2:col1, Domínguez_2021_table_3:row2:col2 |
| Vdss (L/kg) | `Q65` · Vss | 0.11 | L/kg | 0.0077 | m3 | l/kg | llm (0.6) | Domínguez_2021_table_2:row3:col1, Domínguez_2021_table_2:row3:col2 |
| Cl (L/h/kg) | `Q22` · CL | 0.10 | L/h/kg | 1.944e-06 | m3/s | l/(h·kg) | exact (1) | Domínguez_2021_table_2:row4:col1, Domínguez_2021_table_2:row4:col2 |
| k (h−1) | `Q47` · kel | 1.08 | h−1 | 0.0003 | 1/s | 1/h | exact (1) | Domínguez_2021_table_2:row5:col1, Domínguez_2021_table_2:row5:col2, Domínguez_2021_table_3:row7:col1, Domínguez_2021_table_3:row7:col2 |
| t1/2 (h) | `Q57` · t1/2z | 0.66 | h | 2376 | s | h | exact (1) | Domínguez_2021_table_2:row6:col1, Domínguez_2021_table_2:row6:col2, Domínguez_2021_table_3:row8:col1, Domínguez_2021_table_3:row8:col2 |
| MRT (h) | `Q53` · MRT | 1.08 | h | 3888 | s | h | exact (1) | Domínguez_2021_table_2:row7:col1, Domínguez_2021_table_3:row9:col1, Domínguez_2021_table_3:row9:col2 |
| Vdz (L/kg) | `Q352` · Vnorm | 0.096 | L/kg | 0.00672 | m3 | l/kg | llm (0.6) | Domínguez_2021_table_2:row8:col1, Domínguez_2021_table_2:row8:col2 |
| AUC/dose× 10−3 (h/L) | `Q189` · AUC/dose | 10243.52 | h/L |  |  | h/l | llm_confirmed (0.6) | Domínguez_2021_table_2:row9:col1, Domínguez_2021_table_2:row9:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 462.78 | ng/mL |  |  | ng/ml | exact (1) | Domínguez_2021_table_3:row3:col1, Domínguez_2021_table_3:row3:col2 |
| Tmax (h) | `Q56` · tmax | 6 | h | 2.16e+04 | s | h | exact (1) | Domínguez_2021_table_3:row4:col1, Domínguez_2021_table_3:row4:col2 |
| Vdz/F (L/kg) | `Q353` · Vnorm/F | 86.08 | L/kg | 6.026 | m3 | l/kg | llm (0.6) | Domínguez_2021_table_3:row5:col1, Domínguez_2021_table_3:row5:col2 |
| Cl/F (L/h/kg) | `Q27` · CL/F | 18.36 | L/h/kg | 0.000357 | m3/s | l/(h·kg) | exact (1) | Domínguez_2021_table_3:row6:col1, Domínguez_2021_table_3:row6:col2 |
| Frel | `Q87` · Frel | 1.0 | mg/kg |  |  |  | exact (1) | Domínguez_2021_table_3:row11:col1, Domínguez_2021_table_3:row11:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1.45' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_2:row1:col1', 'Domínguez_2021_table_2:row1:col2'])
- unit_dimension_mismatch: 'AUC/dose× 10−3 (h/L)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): '75' — extend the ontology if this is a real PK parameter (source ['Domínguez_2021_table_3:row1:col1', 'Domínguez_2021_table_3:row1:col2'])
- unit_dimension_mismatch: 'AUC/dose × 10−3 (h/L)' → Q189 (unit '[time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q189 ('AUC/dose × 10−3 (h/L)', value '54.61') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'rutin' subgroup of Domínguez_2021 (paper reports 3 populations: rutin, stochastic approximation, value)
- row roles: 8 per-group rows of quercetin covariate_effect but 0 reference group(s) — kept as printed
- row roles: 10 per-group rows of rutin covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 50/50 row label(s) assigned, 21 linked by role; re-tagged parent→quercetin ×45, rutin→parent ×33
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

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Domínguez_2021_table_2:row2:col1', 'Domínguez_2021_table_2:row2:col2', 'Domínguez_2021_table_3:row2:col1', 'Domínguez_2021_table_3:row2:col2'] |
| C5_dimension_Q189 | fail | [time] / [length] ** 3 | h/L | ['Domínguez_2021_table_2:row9:col1', 'Domínguez_2021_table_2:row9:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Domínguez_2021_table_2:row4:col1', 'Domínguez_2021_table_2:row4:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Domínguez_2021_table_3:row6:col1', 'Domínguez_2021_table_3:row6:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Domínguez_2021_table_3:row3:col1', 'Domínguez_2021_table_3:row3:col2'] |
| C5_dimension_Q352 | pass | [length] ** 3 |  | ['Domínguez_2021_table_2:row8:col1', 'Domínguez_2021_table_2:row8:col2'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['Domínguez_2021_table_3:row5:col1', 'Domínguez_2021_table_3:row5:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Domínguez_2021_table_2:row5:col1', 'Domínguez_2021_table_2:row5:col2', 'Domínguez_2021_table_3:row7:col1', 'Domínguez_2021_table_3:row7:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['Domínguez_2021_table_2:row7:col1', 'Domínguez_2021_table_3:row9:col1', 'Domínguez_2021_table_3:row9:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Domínguez_2021_table_3:row4:col1', 'Domínguez_2021_table_3:row4:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Domínguez_2021_table_2:row6:col1', 'Domínguez_2021_table_2:row6:col2', 'Domínguez_2021_table_3:row8:col1', 'Domínguez_2021_table_3:row8:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Domínguez_2021_table_2:row3:col1', 'Domínguez_2021_table_2:row3:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7 L/h | ['Domínguez_2021_table_2:row4:col1', 'Domínguez_2021_table_2:row4:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.29e+03 L/h | ['Domínguez_2021_table_3:row6:col1', 'Domínguez_2021_table_3:row6:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 7.7 L | ['Domínguez_2021_table_2:row3:col1', 'Domínguez_2021_table_2:row3:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brutoside%5D%20Rutoside_Domnguez2021_rutin&body=Drug%3A%20rutoside%0ARecord%3A%20Rutoside_Domnguez2021_rutin%0APaper%3A%20Dom%C3%ADnguez_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rutoside/Rutoside_Domnguez2021_rutin%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:23 UTC</sub>
