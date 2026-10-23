<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;celecoxib&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/&quot;},{&quot;label&quot;:&quot;Dhondt_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_0_56&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_0_56&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_0_56.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_43&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_43&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_43.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Shi2008_reference&quot;,&quot;label&quot;:&quot;Shi_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Shi2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_normo_16&quot;,&quot;label&quot;:&quot;Vaddady_2011_normo_16&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_110&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_110&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_110.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# celecoxib — `Celecoxib_Dhondt2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">bird</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:36 UTC) predates the latest extraction (2026-10-07 02:19 UTC); the status shown comes from the current checks. The celecoxib model for cockatiels was quarantined because clearance, volume of distribution, absorption rate constant and lag time had no extracted values and library placeholder defaults were substituted, including an invented absorption rate constant.

<div class="pk-model-meta" hidden drug="celecoxib" model-id="Celecoxib_Dhondt2017_reference" status="rejected" stale="true" population="cockatiels" measured-compound="celecoxib" parameterization="apparent" topology="1C"></div>

## Citation
Dhondt L, Devreese M, Croubels S, De Baere S, Haesendonck R, Goessens T et al. Comparative population pharmacokinetics and absolute oral bioavailability of COX-2 selective inhibitors celecoxib, mavacoxib and meloxicam in cockatiels (Nymphicus hollandicus). Scientific reports 7(1):12043 (2017).
  ·  DOI: [10.1038/s41598-017-12159-z](https://doi.org/10.1038/s41598-017-12159-z)

## Population and dosing

**Population:** cockatiels · condition healthy · n = : 34.

**Dosing:** 70, 280, 700 mg, oral, single.

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Cl (L/h.kg) | CL | 9.81 | L/h.kg | 0.113 |
| C0 (ng/mL) | C0 | 10.15 | ng/mL |  |
| AUC0-inf (ng.h/mL) | AUC∞ | 18.81 | ng.h/mL |  |
| Ke (h−1) | kel | 32.34 | h−1 |  |
| T1/2el (h) | t1/2z | 32.34 | h |  |
| Cl/F (L/h.kg) | CL/F | 18.82 | L/h.kg | 0.122 |
| Ka (h−1) | kabs | 55.88 | h−1 | 1.075 |
| T1/2a (h) | t1/2α | 55.88 | h |  |
| Cmax (ng/mL) | Cmax | 19.12 | ng/mL |  |
| Tmax (h) | tmax | 17.32 | h |  |
| Tlag (h) | tlag | 8.60 | h | 0.207 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.238). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The celecoxib model for cockatiels was quarantined because clearance, volume of distribution, absorption rate constant and lag time had no extracted values and library placeholder defaults were substituted, including an invented absorption rate constant.**

The record reports only V/F = 19.12 for celecoxib; clearance, volume of distribution, absorption rate constant and absorption lag time had no value in the source, so placeholder numbers would have stood in for the missing parameters and the model was held back rather than published with invented values. The absorption rate constant was invented — not reported in the source — which the deviations check flagged as not acceptable. The model also assumes F=1 and Fm=1 with no molar correction (apparent parameterization) and uses first-order depot input for extravascular dosing. A second reader additionally disagreed on which parameter the reported V/F value corresponds to, and on several half-life and fraction entries that were null in this record. Extracted — celecoxib: V/F 19.1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc0-inf].value`: this record has 18.81, the second reading 11.67; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Cl (L/h.kg) | `Q22` · CL | 9.81 | L/h.kg |  |  | l/(h·kg) | 0.113 | exact (1) | Tab1:row2:col1, Tab1:row2:col2, Tab1:row2:col3, Dhondt_2017_table_2:row1:col1, Dhondt_2017_table_2:row1:col2, Dhondt_2017_table_2:row1:col3, Dhondt_2017_table_3:row1:col1, Dhondt_2017_table_3:row1:col2, Dhondt_2017_table_3:row1:col3, Dhondt_2017_table_3:row8:col1, Dhondt_2017_table_3:row8:col2, Dhondt_2017_table_3:row8:col3 |
| C0 (ng/mL) | `Q86` · C0 | 10.15 | ng/mL |  |  | ng/ml |  | exact (1) | Tab1:row3:col1, Tab1:row3:col2, Dhondt_2017_table_2:row2:col1, Dhondt_2017_table_2:row2:col2, Dhondt_2017_table_3:row2:col1, Dhondt_2017_table_3:row2:col2, Dhondt_2017_table_3:row12:col1, Dhondt_2017_table_3:row12:col2 |
| AUC0-inf (ng.h/mL) | `Q17` · AUC∞ | 18.81 | ng.h/mL |  |  | (h·ng)/ml |  | exact (1) | Tab1:row4:col1, Tab1:row4:col2, Tab1:row14:col1, Tab1:row14:col2, Tab1:row26:col1, Tab1:row26:col2, Dhondt_2017_table_2:row3:col1, Dhondt_2017_table_2:row3:col2, Dhondt_2017_table_2:row13:col1, Dhondt_2017_table_2:row13:col2, Dhondt_2017_table_2:row23:col1, Dhondt_2017_table_2:row23:col2, Dhondt_2017_table_3:row3:col1, Dhondt_2017_table_3:row3:col2, Dhondt_2017_table_3:row13:col1, Dhondt_2017_table_3:row13:col2, Dhondt_2017_table_3:row22:col1, Dhondt_2017_table_3:row22:col2 |
| Ke (h−1) | `Q47` · kel | 32.34 | h−1 | 0.008983 | 1/s | 1/h |  | exact (1) | Tab1:row5:col1, Tab1:row5:col2, Tab1:row15:col1, Tab1:row15:col2, Tab1:row27:col1, Tab1:row27:col2, Dhondt_2017_table_2:row4:col1, Dhondt_2017_table_2:row4:col2, Dhondt_2017_table_2:row14:col1, Dhondt_2017_table_2:row14:col2, Dhondt_2017_table_2:row24:col1, Dhondt_2017_table_2:row24:col2, Dhondt_2017_table_3:row4:col1, Dhondt_2017_table_3:row4:col2, Dhondt_2017_table_3:row23:col1, Dhondt_2017_table_3:row23:col2 |
| T1/2el (h) | `Q57` · t1/2z | 32.34 | h | 1.164e+05 | s | h |  | exact (1) | Tab1:row6:col1, Tab1:row6:col2, Tab1:row16:col1, Tab1:row16:col2, Tab1:row28:col1, Tab1:row28:col2, Dhondt_2017_table_2:row5:col1, Dhondt_2017_table_2:row5:col2, Dhondt_2017_table_2:row15:col1, Dhondt_2017_table_2:row15:col2, Dhondt_2017_table_2:row25:col1, Dhondt_2017_table_2:row25:col2, Dhondt_2017_table_3:row5:col1, Dhondt_2017_table_3:row5:col2, Dhondt_2017_table_3:row24:col1, Dhondt_2017_table_3:row24:col2 |
| Cl/F (L/h.kg) | `Q27` · CL/F | 18.82 | L/h.kg |  |  | l/(h·kg) | 0.122 | exact (1) | Tab1:row9:col1, Tab1:row9:col2, Tab1:row9:col3, Tab1:row19:col1, Tab1:row19:col2, Tab1:row19:col3, Dhondt_2017_table_2:row8:col1, Dhondt_2017_table_2:row8:col2, Dhondt_2017_table_2:row8:col3, Dhondt_2017_table_2:row18:col1, Dhondt_2017_table_2:row18:col2, Dhondt_2017_table_2:row18:col3, Dhondt_2017_table_3:row16:col1, Dhondt_2017_table_3:row16:col2, Dhondt_2017_table_3:row16:col3 |
| Ka (h−1) | `Q49` · kabs | 55.88 | h−1 | 0.01552 | 1/s | 1/h | 1.075 | exact (1) | Tab1:row10:col1, Tab1:row10:col2, Tab1:row10:col3, Tab1:row21:col1, Tab1:row21:col2, Dhondt_2017_table_2:row9:col1, Dhondt_2017_table_2:row9:col2, Dhondt_2017_table_2:row9:col3, Dhondt_2017_table_2:row19:col1, Dhondt_2017_table_2:row19:col2, Dhondt_2017_table_2:row19:col3, Dhondt_2017_table_3:row9:col1, Dhondt_2017_table_3:row9:col2, Dhondt_2017_table_3:row9:col3, Dhondt_2017_table_3:row18:col1, Dhondt_2017_table_3:row18:col2, Dhondt_2017_table_3:row18:col3 |
| T1/2a (h) | `Q59` · t1/2α | 55.88 | h | 2.012e+05 | s | h |  | llm_corrected (0.6) | Tab1:row11:col1, Tab1:row11:col2, Tab1:row23:col1, Tab1:row23:col2, Dhondt_2017_table_2:row10:col1, Dhondt_2017_table_2:row10:col2, Dhondt_2017_table_2:row20:col1, Dhondt_2017_table_2:row20:col2, Dhondt_2017_table_3:row19:col1, Dhondt_2017_table_3:row19:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 19.12 | ng/mL |  |  | ng/ml |  | exact (1) | Tab1:row12:col1, Tab1:row12:col2, Tab1:row24:col1, Tab1:row24:col2, Dhondt_2017_table_2:row11:col1, Dhondt_2017_table_2:row11:col2, Dhondt_2017_table_2:row21:col1, Dhondt_2017_table_2:row21:col2, Dhondt_2017_table_3:row20:col1, Dhondt_2017_table_3:row20:col2 |
| Tmax (h) | `Q56` · tmax | 17.32 | h | 6.235e+04 | s | h |  | exact (1) | Tab1:row13:col1, Tab1:row13:col2, Tab1:row25:col1, Tab1:row25:col2, Dhondt_2017_table_2:row12:col1, Dhondt_2017_table_2:row12:col2, Dhondt_2017_table_2:row22:col1, Dhondt_2017_table_2:row22:col2, Dhondt_2017_table_3:row21:col1, Dhondt_2017_table_3:row21:col2 |
| Tlag (h) | `Q83` · tlag | 8.60 | h | 3.096e+04 | s | h | 0.207 | exact (1) | Tab1:row20:col1, Tab1:row20:col2, Tab1:row20:col3, Dhondt_2017_table_3:row17:col1, Dhondt_2017_table_3:row17:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'IV STD' — extend the ontology if this is a real PK parameter (source ['Tab1:row1:col2', 'Tab1:row1:col3', 'Dhondt_2017_table_2:row0:col2', 'Dhondt_2017_table_2:row0:col3', 'Dhondt_2017_table_2:row0:col4'])
- unit_dimension_mismatch: 'Cl (L/h.kg)' → Q22 (unit '[length] ** 3 * [mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Res. Error' — extend the ontology if this is a real PK parameter (source ['Tab1:row7:col1', 'Tab1:row7:col2', 'Tab1:row17:col1', 'Tab1:row17:col2', 'Tab1:row29:col1', 'Tab1:row29:col2', 'Dhondt_2017_table_2:row6:col1', 'Dhondt_2017_table_2:row6:col2', 'Dhondt_2017_table_2:row16:col1', 'Dhondt_2017_table_2:row16:col2', 'Dhondt_2017_table_2:row26:col1', 'Dhondt_2017_table_2:row26:col2', 'Dhondt_2017_table_3:row6:col1', 'Dhondt_2017_table_3:row6:col2', 'Dhondt_2017_table_3:row14:col1', 'Dhondt_2017_table_3:row14:col2', 'Dhondt_2017_table_3:row25:col1', 'Dhondt_2017_table_3:row25:col2'])
- dropped unlinked row (NIL): 'PO STD' — extend the ontology if this is a real PK parameter (source ['Tab1:row8:col2', 'Tab1:row8:col3', 'Tab1:row8:col4', 'Dhondt_2017_table_2:row7:col2', 'Dhondt_2017_table_2:row7:col3', 'Dhondt_2017_table_2:row7:col4'])
- unit_dimension_mismatch: 'Cl/F (L/h.kg)' → Q27 (unit '[length] ** 3 * [mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'PO CF' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col2', 'Tab1:row18:col3', 'Dhondt_2017_table_2:row17:col2', 'Dhondt_2017_table_2:row17:col3', 'Dhondt_2017_table_2:row17:col4'])
- dropped unlinked row (NIL): 'IV CF 1' — extend the ontology if this is a real PK parameter (source ['Dhondt_2017_table_3:row0:col2', 'Dhondt_2017_table_3:row0:col3'])
- dropped unlinked row (NIL): 'IV CF 2' — extend the ontology if this is a real PK parameter (source ['Dhondt_2017_table_3:row7:col2', 'Dhondt_2017_table_3:row7:col3'])
- dropped unlinked row (NIL): 'K1g (h−1)' — extend the ontology if this is a real PK parameter (source ['Dhondt_2017_table_3:row10:col1', 'Dhondt_2017_table_3:row10:col2', 'Dhondt_2017_table_3:row10:col3'])
- dropped unlinked row (NIL): 'τ (h)' — extend the ontology if this is a real PK parameter (source ['Dhondt_2017_table_3:row11:col1', 'Dhondt_2017_table_3:row11:col2'])
- dropped unlinked row (NIL): 'PO CF 1' — extend the ontology if this is a real PK parameter (source ['Dhondt_2017_table_3:row15:col2', 'Dhondt_2017_table_3:row15:col3'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=celecoxib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab1:row1:col4 = '&lt;0.001'
- unparsed cell Tab1:row18:col4 = '&lt;0.001'
- unparsed cell Tab1:row21:col3 = '&lt;0.001'
- companion parameter table 2 transcribed (62 record(s))
- unparsed cell Dhondt_2017_table_3:row0:col4 = '&lt;0.001'
- unparsed cell Dhondt_2017_table_3:row7:col4 = '&lt;0.001'
- unparsed cell Dhondt_2017_table_3:row11:col3 = '&lt;0.001'
- unparsed cell Dhondt_2017_table_3:row15:col4 = '&lt;0.001'
- unparsed cell Dhondt_2017_table_3:row17:col3 = '&lt;0.001'
- companion parameter table 3 transcribed (58 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.238 (5/21 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-inf].value` | 18.81 | 11.67 | mismatch |
| `gpt-oss-120b` | `parameters[c0].value` | 10.15 | 8.06 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].rse_percent` | 0.122 | 0.055 | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` | 18.82 | 11.67 | mismatch |
| `gpt-oss-120b` | `parameters[cl].rse_percent` | 0.113 | 0.0418 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 9.81 | 7.93 | mismatch |
| `gpt-oss-120b` | `parameters[cmax].value` | 19.12 | 14.27 | mismatch |
| `gpt-oss-120b` | `parameters[ka].rse_percent` | 1.075 | 0.063 | mismatch |
| `gpt-oss-120b` | `parameters[ka].value` | 55.88 | 17.37 | mismatch |
| `gpt-oss-120b` | `parameters[ke].value` | 32.34 | 29.30 | mismatch |
| `gpt-oss-120b` | `parameters[po std]` |  | 0.948 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2a].parameter_id` | Q59 | Q95 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2a].value` | 55.88 | 17.37 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2el].value` | 32.34 | 29.31 | mismatch |
| `gpt-oss-120b` | `parameters[tlag].value` | 8.60 | 39.55 | mismatch |
| `gpt-oss-120b` | `parameters[tmax].value` | 17.32 | 8.97 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab1:row4:col1', 'Tab1:row4:col2', 'Tab1:row14:col1', 'Tab1:row14:col2', 'Tab1:row26:col1', 'Tab1:row26:col2', 'Dhondt_2017_table_2:row3:col1', 'Dhondt_2017_table_2:row3:col2', 'Dhondt_2017_table_2:row13:col1', 'Dhondt_2017_table_2:row13:col2', 'Dhondt_2017_table_2:row23:col1', 'Dhondt_2017_table_2:row23:col2', 'Dhondt_2017_table_3:row3:col1', 'Dhondt_2017_table_3:row3:col2', 'Dhondt_2017_table_3:row13:col1', 'Dhondt_2017_table_3:row13:col2', 'Dhondt_2017_table_3:row22:col1', 'Dhondt_2017_table_3:row22:col2'] |
| C5_dimension_Q22 | fail | [length] ** 3 * [mass] / [time] | L/h.kg | ['Tab1:row2:col1', 'Tab1:row2:col2', 'Tab1:row2:col3', 'Dhondt_2017_table_2:row1:col1', 'Dhondt_2017_table_2:row1:col2', 'Dhondt_2017_table_2:row1:col3', 'Dhondt_2017_table_3:row1:col1', 'Dhondt_2017_table_3:row1:col2', 'Dhondt_2017_table_3:row1:col3', 'Dhondt_2017_table_3:row8:col1', 'Dhondt_2017_table_3:row8:col2', 'Dhondt_2017_table_3:row8:col3'] |
| C5_dimension_Q27 | fail | [length] ** 3 * [mass] / [time] | L/h.kg | ['Tab1:row9:col1', 'Tab1:row9:col2', 'Tab1:row9:col3', 'Tab1:row19:col1', 'Tab1:row19:col2', 'Tab1:row19:col3', 'Dhondt_2017_table_2:row8:col1', 'Dhondt_2017_table_2:row8:col2', 'Dhondt_2017_table_2:row8:col3', 'Dhondt_2017_table_2:row18:col1', 'Dhondt_2017_table_2:row18:col2', 'Dhondt_2017_table_2:row18:col3', 'Dhondt_2017_table_3:row16:col1', 'Dhondt_2017_table_3:row16:col2', 'Dhondt_2017_table_3:row16:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab1:row12:col1', 'Tab1:row12:col2', 'Tab1:row24:col1', 'Tab1:row24:col2', 'Dhondt_2017_table_2:row11:col1', 'Dhondt_2017_table_2:row11:col2', 'Dhondt_2017_table_2:row21:col1', 'Dhondt_2017_table_2:row21:col2', 'Dhondt_2017_table_3:row20:col1', 'Dhondt_2017_table_3:row20:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Tab1:row5:col1', 'Tab1:row5:col2', 'Tab1:row15:col1', 'Tab1:row15:col2', 'Tab1:row27:col1', 'Tab1:row27:col2', 'Dhondt_2017_table_2:row4:col1', 'Dhondt_2017_table_2:row4:col2', 'Dhondt_2017_table_2:row14:col1', 'Dhondt_2017_table_2:row14:col2', 'Dhondt_2017_table_2:row24:col1', 'Dhondt_2017_table_2:row24:col2', 'Dhondt_2017_table_3:row4:col1', 'Dhondt_2017_table_3:row4:col2', 'Dhondt_2017_table_3:row23:col1', 'Dhondt_2017_table_3:row23:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab1:row10:col1', 'Tab1:row10:col2', 'Tab1:row10:col3', 'Tab1:row21:col1', 'Tab1:row21:col2', 'Dhondt_2017_table_2:row9:col1', 'Dhondt_2017_table_2:row9:col2', 'Dhondt_2017_table_2:row9:col3', 'Dhondt_2017_table_2:row19:col1', 'Dhondt_2017_table_2:row19:col2', 'Dhondt_2017_table_2:row19:col3', 'Dhondt_2017_table_3:row9:col1', 'Dhondt_2017_table_3:row9:col2', 'Dhondt_2017_table_3:row9:col3', 'Dhondt_2017_table_3:row18:col1', 'Dhondt_2017_table_3:row18:col2', 'Dhondt_2017_table_3:row18:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab1:row13:col1', 'Tab1:row13:col2', 'Tab1:row25:col1', 'Tab1:row25:col2', 'Dhondt_2017_table_2:row12:col1', 'Dhondt_2017_table_2:row12:col2', 'Dhondt_2017_table_2:row22:col1', 'Dhondt_2017_table_2:row22:col2', 'Dhondt_2017_table_3:row21:col1', 'Dhondt_2017_table_3:row21:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab1:row6:col1', 'Tab1:row6:col2', 'Tab1:row16:col1', 'Tab1:row16:col2', 'Tab1:row28:col1', 'Tab1:row28:col2', 'Dhondt_2017_table_2:row5:col1', 'Dhondt_2017_table_2:row5:col2', 'Dhondt_2017_table_2:row15:col1', 'Dhondt_2017_table_2:row15:col2', 'Dhondt_2017_table_2:row25:col1', 'Dhondt_2017_table_2:row25:col2', 'Dhondt_2017_table_3:row5:col1', 'Dhondt_2017_table_3:row5:col2', 'Dhondt_2017_table_3:row24:col1', 'Dhondt_2017_table_3:row24:col2'] |
| C5_dimension_Q59 | pass | [time] |  | ['Tab1:row11:col1', 'Tab1:row11:col2', 'Tab1:row23:col1', 'Tab1:row23:col2', 'Dhondt_2017_table_2:row10:col1', 'Dhondt_2017_table_2:row10:col2', 'Dhondt_2017_table_2:row20:col1', 'Dhondt_2017_table_2:row20:col2', 'Dhondt_2017_table_3:row19:col1', 'Dhondt_2017_table_3:row19:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab1:row20:col1', 'Tab1:row20:col2', 'Tab1:row20:col3', 'Dhondt_2017_table_3:row17:col1', 'Dhondt_2017_table_3:row17:col2'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/mL | ['Tab1:row3:col1', 'Tab1:row3:col2', 'Dhondt_2017_table_2:row2:col1', 'Dhondt_2017_table_2:row2:col2', 'Dhondt_2017_table_3:row2:col1', 'Dhondt_2017_table_3:row2:col2', 'Dhondt_2017_table_3:row12:col1', 'Dhondt_2017_table_3:row12:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 212 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.34 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 0.31 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 17.3 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 5.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 0.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 1.34 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 0.31 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 31.4 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 15.9 |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcelecoxib%5D%20Celecoxib_Dhondt2017_reference&body=Drug%3A%20celecoxib%0ARecord%3A%20Celecoxib_Dhondt2017_reference%0APaper%3A%20Dhondt_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_celecoxib/Celecoxib_Dhondt2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:19 UTC</sub>
