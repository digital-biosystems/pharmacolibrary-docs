<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;mefloquine&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/&quot;},{&quot;label&quot;:&quot;Staehli_2013 \u00b7 ppq&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mefloquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rattanapunya2015_reference&quot;,&quot;label&quot;:&quot;Rattanapunya_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rufener2018_reference&quot;,&quot;label&quot;:&quot;Rufener_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mefloquine — `Mefloquine_Staehli2013_ppq`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — piperaquine: Vss 364 L, CL 109 L/h; mefloquine: V 4.04e+03 mL/kg, kabs 0.28 h⁻¹, tlag 0.147 h.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Staehli Hodel EM et al., Population pharmacokinetics of mefloqui…, Malaria journal (2013)
  ·  DOI: [10.1186/1475-2875-12-235](https://doi.org/10.1186/1475-2875-12-235)

<div class="pk-model-meta" hidden drug="mefloquine" model-id="Mefloquine_Staehli2013_ppq" status="rejected" stale="false" population="malaria patients" measured-compound="mefloquine" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| VSS [L] | `Q65` · Vss | 364 | L | 0.364 | [l] | not captured | llm_confirmed (0.6) | Staehli_2013_table_5:row2:col6, Staehli_2013_table_5:row3:col6, Staehli_2013_table_5:row7:col6, Staehli_2013_table_5:row9:col6, Staehli_2013_table_5:row10:col6, Staehli_2013_table_5:row11:col6, Staehli_2013_table_5:row12:col6, Staehli_2013_table_5:row13:col6, Staehli_2013_table_5:row14:col6, Staehli_2013_table_5:row18:col6, Staehli_2013_table_5:row19:col6, Staehli_2013_table_5:row20:col6, Staehli_2013_table_5:row21:col6 | — | not captured |
| CL [L/h] | `Q22` · CL | 109 | L/h | 3.027777777777778e-05 | [l] / [h] | not captured | llm_confirmed (0.6) | Staehli_2013_table_5:row3:col5, Staehli_2013_table_5:row7:col5, Staehli_2013_table_5:row9:col5, Staehli_2013_table_5:row10:col5, Staehli_2013_table_5:row11:col5, Staehli_2013_table_5:row12:col5, Staehli_2013_table_5:row13:col5, Staehli_2013_table_5:row14:col5, Staehli_2013_table_5:row16:col5, Staehli_2013_table_5:row18:col5, Staehli_2013_table_5:row19:col5, Staehli_2013_table_5:row20:col5, Staehli_2013_table_5:row21:col5, Staehli_2013_table_5:row22:col5, Staehli_2013_table_5:row24:col5, Staehli_2013_table_5:row25:col5, Staehli_2013_table_5:row26:col5 | — | not captured |
| volume of distribution (MQ in mice) | `Q61` · V | 4039.63 | mL/kg | 0.2827741 | L | not captured | review_gapfill (0.7) | Mim_2026:review | — | not captured |
| absorption rate constant | `Q49` · kabs | 0.28 | h⁻¹ | 7.777777777777778e-05 | 1/h | not captured | review_gapfill (0.7) | Mim_2026:review | — | not captured |
| T lag,1 | `Q83` · tlag | 0.147 | h | 529.1999999999999 | h | not captured | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Median age (range) [years]' — extend the ontology if this is a real PK parameter (source ['Staehli_2013_table_5:row1:col2', 'Staehli_2013_table_5:row2:col2', 'Staehli_2013_table_5:row4:col2', 'Staehli_2013_table_5:row6:col2', 'Staehli_2013_table_5:row7:col2', 'Staehli_2013_table_5:row9:col2', 'Staehli_2013_table_5:row10:col2', 'Staehli_2013_table_5:row11:col2', 'Staehli_2013_table_5:row12:col2', 'Staehli_2013_table_5:row13:col2', 'Staehli_2013_table_5:row18:col2', 'Staehli_2013_table_5:row19:col2', 'Staehli_2013_table_5:row21:col2', 'Staehli_2013_table_5:row22:col2', 'Staehli_2013_table_5:row24:col2', 'Staehli_2013_table_5:row25:col2', 'Staehli_2013_table_5:row26:col2'])
- dropped unlinked row (NIL): 'No. of patients' — extend the ontology if this is a real PK parameter (source ['Staehli_2013_table_5:row1:col3', 'Staehli_2013_table_5:row2:col3', 'Staehli_2013_table_5:row3:col3', 'Staehli_2013_table_5:row4:col3', 'Staehli_2013_table_5:row6:col3', 'Staehli_2013_table_5:row7:col3', 'Staehli_2013_table_5:row9:col3', 'Staehli_2013_table_5:row10:col3', 'Staehli_2013_table_5:row11:col3', 'Staehli_2013_table_5:row12:col3', 'Staehli_2013_table_5:row13:col3', 'Staehli_2013_table_5:row14:col3', 'Staehli_2013_table_5:row16:col3', 'Staehli_2013_table_5:row18:col3', 'Staehli_2013_table_5:row19:col3', 'Staehli_2013_table_5:row21:col3', 'Staehli_2013_table_5:row22:col3', 'Staehli_2013_table_5:row23:col3', 'Staehli_2013_table_5:row24:col3', 'Staehli_2013_table_5:row25:col3', 'Staehli_2013_table_5:row26:col3'])
- dropped unlinked row (NIL): 'Duration of sampling' — extend the ontology if this is a real PK parameter (source ['Staehli_2013_table_5:row1:col4', 'Staehli_2013_table_5:row2:col4', 'Staehli_2013_table_5:row4:col4', 'Staehli_2013_table_5:row6:col4', 'Staehli_2013_table_5:row7:col4', 'Staehli_2013_table_5:row12:col4', 'Staehli_2013_table_5:row13:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mefloquine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'ppq' subgroup of Staehli_2013 (paper reports 5 populations: am, dhae, dlfg, mq, ppq)
- row roles: 60 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 71 linked by role; re-tagged parent→artemether ×7, parent→lumefantrine ×22, parent→desbutyl-lumefantrine ×12, parent→piperaquine ×53
- gap-filled Q61 (V) from Mim_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Mim_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- table T4: conflicting_units
- table T4: ambiguous_numeric_format
- table T4: unparsed_numeric_cell
- table T4: representations disagree; selected evidence retained, not merged
- table Staehli_2013_table_5: ambiguous_numeric_format
- table Staehli_2013_table_5: unbound_uncertainty
- table Staehli_2013_table_5: unparsed_numeric_cell
- transposed table Staehli_2013_table_5: logical view retains original source coordinates
- companion parameter table 5 transcribed (98 record(s))
- LLM selected parameter table(s) 5
- dropped sensitivity-analysis table(s) 4 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Staehli_2013_table_5:row3:col5', 'Staehli_2013_table_5:row7:col5', 'Staehli_2013_table_5:row9:col5', 'Staehli_2013_table_5:row10:col5', 'Staehli_2013_table_5:row11:col5', 'Staehli_2013_table_5:row12:col5', 'Staehli_2013_table_5:row13:col5', 'Staehli_2013_table_5:row14:col5', 'Staehli_2013_table_5:row16:col5', 'Staehli_2013_table_5:row18:col5', 'Staehli_2013_table_5:row19:col5', 'Staehli_2013_table_5:row20:col5', 'Staehli_2013_table_5:row21:col5', 'Staehli_2013_table_5:row22:col5', 'Staehli_2013_table_5:row24:col5', 'Staehli_2013_table_5:row25:col5', 'Staehli_2013_table_5:row26:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Mim_2026:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Mim_2026:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Staehli_2013_table_5:row2:col6', 'Staehli_2013_table_5:row3:col6', 'Staehli_2013_table_5:row7:col6', 'Staehli_2013_table_5:row9:col6', 'Staehli_2013_table_5:row10:col6', 'Staehli_2013_table_5:row11:col6', 'Staehli_2013_table_5:row12:col6', 'Staehli_2013_table_5:row13:col6', 'Staehli_2013_table_5:row14:col6', 'Staehli_2013_table_5:row18:col6', 'Staehli_2013_table_5:row19:col6', 'Staehli_2013_table_5:row20:col6', 'Staehli_2013_table_5:row21:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Cherkaoui-Rbati_2023:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 109.0 | not captured | not captured | ['Staehli_2013_table_5:row3:col5', 'Staehli_2013_table_5:row7:col5', 'Staehli_2013_table_5:row9:col5', 'Staehli_2013_table_5:row10:col5', 'Staehli_2013_table_5:row11:col5', 'Staehli_2013_table_5:row12:col5', 'Staehli_2013_table_5:row13:col5', 'Staehli_2013_table_5:row14:col5', 'Staehli_2013_table_5:row16:col5', 'Staehli_2013_table_5:row18:col5', 'Staehli_2013_table_5:row19:col5', 'Staehli_2013_table_5:row20:col5', 'Staehli_2013_table_5:row21:col5', 'Staehli_2013_table_5:row22:col5', 'Staehli_2013_table_5:row24:col5', 'Staehli_2013_table_5:row25:col5', 'Staehli_2013_table_5:row26:col5'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 109 L/h | not captured | not captured | ['Staehli_2013_table_5:row3:col5', 'Staehli_2013_table_5:row7:col5', 'Staehli_2013_table_5:row9:col5', 'Staehli_2013_table_5:row10:col5', 'Staehli_2013_table_5:row11:col5', 'Staehli_2013_table_5:row12:col5', 'Staehli_2013_table_5:row13:col5', 'Staehli_2013_table_5:row14:col5', 'Staehli_2013_table_5:row16:col5', 'Staehli_2013_table_5:row18:col5', 'Staehli_2013_table_5:row19:col5', 'Staehli_2013_table_5:row20:col5', 'Staehli_2013_table_5:row21:col5', 'Staehli_2013_table_5:row22:col5', 'Staehli_2013_table_5:row24:col5', 'Staehli_2013_table_5:row25:col5', 'Staehli_2013_table_5:row26:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 283 L | not captured | not captured | ['Mim_2026:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 364 L | not captured | not captured | ['Staehli_2013_table_5:row2:col6', 'Staehli_2013_table_5:row3:col6', 'Staehli_2013_table_5:row7:col6', 'Staehli_2013_table_5:row9:col6', 'Staehli_2013_table_5:row10:col6', 'Staehli_2013_table_5:row11:col6', 'Staehli_2013_table_5:row12:col6', 'Staehli_2013_table_5:row13:col6', 'Staehli_2013_table_5:row14:col6', 'Staehli_2013_table_5:row18:col6', 'Staehli_2013_table_5:row19:col6', 'Staehli_2013_table_5:row20:col6', 'Staehli_2013_table_5:row21:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_mefloquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Staehli_2013` / `Staehli_2013::ppq`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 00:55 UTC</sub>
