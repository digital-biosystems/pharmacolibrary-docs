<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tramadol&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/&quot;},{&quot;label&quot;:&quot;Healy_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tramadol_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Garrido2006_reference&quot;,&quot;label&quot;:&quot;Garrido_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Garrido2006_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Pypendop2008_reference&quot;,&quot;label&quot;:&quot;Pypendop_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Pypendop2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tramadol_Bao2023_reference&quot;,&quot;label&quot;:&quot;Bao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tramadol/Tramadol_Bao2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tramadol — `Tramadol_Healy2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.379), gpt-oss:120b (not confirmed, agreement 0.64). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The tramadol neonatal parent–metabolite model was rejected because the extracted clearance and volume values are physiologically implausible, indicating a unit or scale extraction error.**

The record lists tramadol CL/F of 25.6 L/h with a central volume of only 0.211 L and peripheral volume 102 L, and O-desmethyltramadol clearance of 62.2 L/h with central volume 1.45 L — magnitudes outside the physiological window for neonates, consistent with a unit or scale extraction error. A second reader also read different values for several parameters (e.g., O-desmethyltramadol clearance 78.7 L/h instead of 62.2 L/h, and the CYP2D6 covariate effect on formation clearance 11.4 instead of 14.7), and reported additional covariate parameters (36.3, 47.7, 39.8) absent from this record, so the extracted numbers are not reliably established. Extracted — tramadol: CL/F 25.6 L/h, Q 111 L/h, V1 0.211 L, V2 102 L, kabs 0.65 1/h; O-desmethyltramadol: CL 62.2 L/h, Q 1.98 L/h, V1 1.45 L, V2 101 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tramadol → o-desmethyltramadol (metabolism), the second reading none; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:33:21.142974+00:00) predates the upstream re-run (2026-10-07 15:10:36.238816+00:00). Current validate status: `needs_review`.

## Citation
Healy P et al., Evaluation of the effect of CYP2D6 and…, British journal of clinical… (2025)
  ·  DOI: [10.1111/bcp.16201](https://doi.org/10.1111/bcp.16201)

<div class="pk-model-meta" hidden drug="tramadol" model-id="Tramadol_Healy2025_reference" status="needs_review" stale="true" population="neonates" measured-compound="tramadol" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 10 extracted, plus 2 covariate effects.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLPO | `Q27` · CL/F | 25.6 | L/h | 7.111111111111112e-06 | L/h | 10 | exact (1.0) | bcp16201-tbl-0005:row4:col1, bcp16201-tbl-0005:row4:col2, bcp16201-tbl-0005:row4:col3 | — | not captured |
| QP | `Q30` · Q | 111 | L/h | 3.0833333333333335e-05 | L/h | 58.3 | exact (1.0) | bcp16201-tbl-0005:row5:col1, bcp16201-tbl-0005:row5:col2, bcp16201-tbl-0005:row5:col3 | — | not captured |
| VP1 | `Q63` · V1 | 0.211 | L/kg | 0.01477 | L | 62.2 | exact (1.0) | bcp16201-tbl-0005:row6:col1, bcp16201-tbl-0005:row6:col2, bcp16201-tbl-0005:row6:col3, bcp16201-tbl-0005:row24:col2 | — | not captured |
| VP2 | `Q64` · V2 | 102 | not captured | not captured | not captured | 73.6 | exact (1.0) | bcp16201-tbl-0005:row7:col1, bcp16201-tbl-0005:row7:col2, bcp16201-tbl-0005:row7:col3 | — | not captured |
| CLMO (OCT1‐G1) | `Q22` · CL | 78.7 | OCT1‐G1 | not captured | [g1] · [oct1‐] | 34 | exact (1.0) | bcp16201-tbl-0005:row9:col1, bcp16201-tbl-0005:row9:col2, bcp16201-tbl-0005:row9:col3 | — | not captured |
| QM | `Q30` · Q | 1.98 | not captured | not captured | not captured | not captured | exact (1.0) | bcp16201-tbl-0005:row11:col1, bcp16201-tbl-0005:row11:col2, bcp16201-tbl-0005:row29:col2 | — | not captured |
| VM1 | `Q63` · V1 | 1.45 | not captured | not captured | not captured | not captured | exact (1.0) | bcp16201-tbl-0005:row12:col1, bcp16201-tbl-0005:row12:col2, bcp16201-tbl-0005:row30:col2 | — | not captured |
| VM2 | `Q64` · V2 | 101 | not captured | not captured | not captured | 101 | exact (1.0) | bcp16201-tbl-0005:row13:col1, bcp16201-tbl-0005:row13:col2, bcp16201-tbl-0005:row13:col3 | — | not captured |
| TM50 CLPM | `Q27` · CL/F | 39.8 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | bcp16201-tbl-0005:row19:col2 | — | not captured |
| theta_q22_cyp2d6 | `Q900` · theta_q22_cyp2d6 | 36.3 | not captured | not captured | not captured | 7.8 | not captured (not captured) | bcp16201-tbl-0005:row2:col1, bcp16201-tbl-0005:row2:col2, bcp16201-tbl-0005:row2:col3 | — | not captured |
| theta_q370_cyp2d6 | `Q900` · theta_q370_cyp2d6 | 11.4 | not captured | not captured | not captured | 35 | not captured (not captured) | bcp16201-tbl-0005:row15:col1, bcp16201-tbl-0005:row15:col2, bcp16201-tbl-0005:row15:col3 | — | not captured |
| kₐ | `Q49` · kabs | 0.65 | 1/h | 0.00018055555555555557 | 1/h | not captured | review_gapfill (0.7) | Ekstrand_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional error (tramadol)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (tramadol)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error (M1)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error (M1)' routed out of structural estimates ('Residual variability')
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'OCT1‐G1' (CL)
- dropped duplicate Q27 ('TM50 CLPO', value '39.1') — already have one for this compound
- dropped PD-category row 'Hill coefficient CLPO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row18:col2'])
- dropped PD-category row 'Hill coefficient CLPM' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row20:col2'])
- dropped unlinked row (NIL): 'TM50 CLMO' — extend the ontology if this is a real PK parameter (source ['bcp16201-tbl-0005:row21:col2'])
- dropped PD-category row 'Hill coefficient CLMO' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp16201-tbl-0005:row22:col2'])
- unit_dimension_unknown: 'CYP1' (CL/F)
- dropped duplicate Q27 ('CLPO (CYP1)', value '0.161') — already have one for this compound
- relinked 'CLPM (CYP1)' Q370 → Q22 for O-desmethyltramadol: a metabolite's own clearance is its elimination, not its formation
- unit_dimension_unknown: 'CYP1' (CL)
- dropped duplicate Q22 ('CLPM (CYP1)', value '0.628') — already have one for this compound
- relinked 'CLPM (CYP2)' Q370 → Q22 for O-desmethyltramadol: a metabolite's own clearance is its elimination, not its formation
- unit_dimension_unknown: 'CYP2' (CL)
- dropped duplicate Q22 ('CLPM (CYP2)', value '0.0915') — already have one for this compound
- relinked 'CLPM (CYP3)' Q370 → Q22 for O-desmethyltramadol: a metabolite's own clearance is its elimination, not its formation
- unit_dimension_unknown: 'CYP3' (CL)
- dropped duplicate Q22 ('CLPM (CYP3)', value '0.00878') — already have one for this compound
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CLPO' → L/h (from the popPK convention: 'CLPO represents clearance. The text states allometric scaling exponent of 0.75 for clearance, which is standard for L/h.')
- implicit units: 'QP' → L/h (from the popPK convention: 'QP is defined as intercompartmental clearance. The standard unit for intercompartmental clearance in population PK model')
- implicit units: 'VP1' → L/kg (from the popPK convention: "VP1 is a volume of distribution. The text states 'volume of distribution standardized to a body weight of 70 kg' and use")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tramadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- status held at route_to_review — not promoted
- row roles: 3 per-group rows of O-desmethyltramadol covariate_effect but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: CLPP (CYP2D6‐G2), CLMO (OCT1‐G1), CLPM (CYP2D6‐G2)
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 31 linked by role; re-tagged parent→O-desmethyltramadol ×29
- gap-filled Q49 (kabs) from Ekstrand_2026's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.379 (11/29 fields) | 18 |
| `gpt-oss:120b` | not confirmed | 0.64 (16/25 fields) | 9 |

<details><summary>27 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tramadol', 'o-desmethyltramadol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clmo]` | not captured | 57.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clmo]` | 78.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clpm]` | not captured | 0.628 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.65 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qm]` | 1.98 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_cyp2d6]` | not captured | 28.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_clfm_cyp2d6]` | not captured | 5.08 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_cyp2d6]` | 36.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q370_cyp2d6]` | 11.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tm50 clpm]` | not captured | 39.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tm50 clpm]` | 39.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1]` | not captured | 1.45 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1]` | 1.45 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2]` | 101 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1].parameter_id` | Q63 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[vp2].parameter_id` | Q64 | Q77 | mismatch |
| `gpt-oss:120b` | `parameters[clmo].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[clmo].rse_percent` | 32 | 34 | mismatch |
| `gpt-oss:120b` | `parameters[clmo].value` | 62.2 | 78.7 | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_cyp2d6]` | not captured | 36.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q22_cyp2d6]` | 43 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q370_cyp2d6].rse_percent` | 32 | 35 | mismatch |
| `gpt-oss:120b` | `parameters[theta_q370_cyp2d6].value` | 14.7 | 11.4 | mismatch |
| `gpt-oss:120b` | `parameters[tm50 clmo]` | not captured | 47.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tm50 clpm]` | not captured | 39.8 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16201-tbl-0005:row4:col1', 'bcp16201-tbl-0005:row4:col2', 'bcp16201-tbl-0005:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16201-tbl-0005:row5:col1', 'bcp16201-tbl-0005:row5:col2', 'bcp16201-tbl-0005:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ekstrand_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp16201-tbl-0005:row6:col1', 'bcp16201-tbl-0005:row6:col2', 'bcp16201-tbl-0005:row6:col3', 'bcp16201-tbl-0005:row24:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | OCT1‐G1 | not captured | not captured | ['bcp16201-tbl-0005:row9:col1', 'bcp16201-tbl-0005:row9:col2', 'bcp16201-tbl-0005:row9:col3'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16201-tbl-0005:row19:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp16201-tbl-0005:row11:col1', 'bcp16201-tbl-0005:row11:col2', 'bcp16201-tbl-0005:row29:col2'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['bcp16201-tbl-0005:row12:col1', 'bcp16201-tbl-0005:row12:col2', 'bcp16201-tbl-0005:row30:col2'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['bcp16201-tbl-0005:row7:col1', 'bcp16201-tbl-0005:row7:col2', 'bcp16201-tbl-0005:row7:col3'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['bcp16201-tbl-0005:row13:col1', 'bcp16201-tbl-0005:row13:col2', 'bcp16201-tbl-0005:row13:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 25.6 L/h | not captured | not captured | ['bcp16201-tbl-0005:row4:col1', 'bcp16201-tbl-0005:row4:col2', 'bcp16201-tbl-0005:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 14.8 L | not captured | not captured | ['bcp16201-tbl-0005:row6:col1', 'bcp16201-tbl-0005:row6:col2', 'bcp16201-tbl-0005:row6:col3', 'bcp16201-tbl-0005:row24:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_tramadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Healy_2025` / `Healy_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:10 UTC</sub>
