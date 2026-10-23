<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir alafenamide&quot;,&quot;href&quot;:&quot;drugs/drug_tenofovir_alafenamide/&quot;},{&quot;label&quot;:&quot;Beliveau_2026 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tenofovir alafenamide — `TenofovirAlafenamide_Beliveau2026_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The tenofovir alafenamide record was rejected because the metabolites tenofovir and tenofovir diphosphate are unlinked to the dose, and the Vmax value 1.44 fmol/10^6 cells/h could not be expressed in SI units.

<div class="pk-model-meta" hidden drug="tenofovir alafenamide" model-id="TenofovirAlafenamide_Beliveau2026_estimate" status="rejected" stale="false" population="South African women in HIV PrEP trial" measured-compound="tenofovir alafenamide" parameterization="apparent" topology="general_linear"></div>

## Citation
Beliveau M, Chang C, Lewis L, Letsoalo MP, Karim QA, Karim SSA et al. Population pharmacokinetics of tenofovir alafenamide delivered via an annual subdermal implant in South African women. Scientific reports 16(1) (2026).
  ·  DOI: [10.1038/s41598-026-48746-2](https://doi.org/10.1038/s41598-026-48746-2)

## Population and dosing

**Population:** South African women in HIV PrEP trial · condition HIV-negative women (PrEP) · age group adult.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Frel(TAF) | Frel | 9.24 | TAF |
| (V/F)TAF (L) | V/F | 62.6 | L |
| Km (µg L− 1) | Km | 29.3 | µg/L |
| Vmax (fmol/106 cells/h) | Vmax | 1.44 | fmol/106 cells/h |
| Ke(TFV-DP) (h− 1) | kel | 0.006 | h− 1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tenofovir alafenamide record was rejected because the metabolites tenofovir and tenofovir diphosphate are unlinked to the dose, and the Vmax value 1.44 fmol/10^6 cells/h could not be expressed in SI units.**

The structure lists tenofovir (TFV) and tenofovir diphosphate (TFV-DP) as metabolites of tenofovir alafenamide, but both have zero compartments and the metabolism links carry no usable parameter (unknown kind and value), leaving the metabolites without a path from the administered dose. The enzymatic parameters for TFV-DP (Km 29.3 µg/L, Vmax 1.44 fmol/10^6 cells/h, kel 0.006 h−1) therefore sit on an unlinked metabolite. Additionally, the Vmax unit fmol/10^6 cells/h could not be converted to SI, so that parameter had no SI value when the model was built. The remaining parameters (Frel 9.24, V/F 62.6 L) were extracted with values. Extracted — tenofovir alafenamide: Frel 9.24 TAF, V/F 62.6 L; tenofovir diphosphate (TFV-DP): Km 29.3 µg/L, Vmax 1.44 fmol/106 cells/h, kel 0.006 h− 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tenofovir alafenamide → tenofovir (tfv) (metabolism); tenofovir (tfv) → tenofovir diphosphate (tfv-dp) (metabolism), the second reading tenofovir alafenamide → tenofovir (metabolism); tenofovir → tenofovir diphosphate (interconversion); it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Frel(TAF) | `Q87` · Frel | 9.24 | TAF |  |  |  | exact (1) | Tab4:row2:col1 |
| (V/F)TAF (L) | `Q76` · V/F | 62.6 | L | 0.0626 | m3 | l | llm_confirmed (0.6) | Beliveau_2026_table_3:row2:col1 |
| Km (µg L− 1) | `Q1` · Km | 29.3 | µg/L |  |  | µg/L | exact (1) | Beliveau_2026_table_3:row9:col1 |
| Vmax (fmol/106 cells/h) | `Q66` · Vmax | 1.44 | fmol/106 cells/h |  |  | fmol/(h·106cells) | special_case (0.95) | Beliveau_2026_table_3:row10:col1 |
| Ke(TFV-DP) (h− 1) | `Q47` · kel | 0.006 | h− 1 | 1.667e-06 | 1/s | 1/h | exact (1) | Beliveau_2026_table_3:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'µg L− 1' (Km)
- unit_dimension_unknown: 'fmol/106 cells/h' (Vmax)
- implicit units: 'Km (µg L− 1)' → µg/L (from the paper text: "The parameter listing itself shows 'Km (µg L− 1) = 29.3', i.e., the paper states the unit µg L−1 for Km.")
- implicit units: 'Vmax (fmol/106 cells/h)' — the LLM proposed 'fmol/10^6 cells/h', whose dimension does not fit Q66; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tenofovir alafenamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — a metabolite is formed from another metabolite (a chain)
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Beliveau_2026 (paper reports 5 populations: estimate, group 1one taf implant(n = 6), group 2 aone taf implant(n = 12), group 2 ctwo taf implants(n = 12), overall(n = 30))
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 9 linked by role; re-tagged parent→tenofovir (TFV) ×4, parent→tenofovir diphosphate (TFV-DP) ×6
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Beliveau_2026_table_3:row1:col1 = '0.924a'
- unparsed cell Beliveau_2026_table_3:row4:col1 = '1360 ×'
- unparsed cell Beliveau_2026_table_3:row5:col1 = '0.2257 ×'
- unparsed cell Beliveau_2026_table_3:row6:col1 = '0.2981×'
- unparsed cell Beliveau_2026_table_3:row7:col1 = '0.039×'
- companion parameter table 3 transcribed (13 record(s))
- companion parameter table 5 transcribed (24 record(s))
- LLM selected parameter table(s) 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.4 (4/10 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tenofovir alafenamide', 'tenofovir (tfv)', 'metabolism'], ['tenofovir (tfv)', 'tenofovir diphosphate (tfv-dp)', 'metabolism']] | [['tenofovir alafenamide', 'tenofovir', 'metabolism'], ['tenofovir', 'tenofovir diphosphate', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[(v/f)taf]` | 62.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ke(tfv-dp)]` | 0.006 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[km]` | 29.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vmax]` | 1.44 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Beliveau_2026_table_3:row9:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Beliveau_2026_table_3:row11:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Beliveau_2026_table_3:row2:col1'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | fmol/106 cells/h | ['Beliveau_2026_table_3:row10:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 62.6 L | ['Beliveau_2026_table_3:row2:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btenofovir_alafenamide%5D%20TenofovirAlafenamide_Beliveau2026_estimate&body=Drug%3A%20tenofovir_alafenamide%0ARecord%3A%20TenofovirAlafenamide_Beliveau2026_estimate%0APaper%3A%20Beliveau_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Beliveau2026_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:27 UTC</sub>
