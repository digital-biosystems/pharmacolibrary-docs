<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;atorvastatin&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/&quot;},{&quot;label&quot;:&quot;Clemente_2021 \u00b7 reversible_2_tissue_compartment_male&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atorvastatin_Karvaly2021_reference&quot;,&quot;label&quot;:&quot;Karvaly_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Karvaly2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Langeskov2022_reference&quot;,&quot;label&quot;:&quot;Langeskov_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Langeskov2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Li2024_reference&quot;,&quot;label&quot;:&quot;Li_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Li2024_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Kong2025_reference&quot;,&quot;label&quot;:&quot;Kong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Kong2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atorvastatin_Courlet2020_reference&quot;,&quot;label&quot;:&quot;Courlet_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/Atorvastatin_Courlet2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vargo_2014_LDL_C&quot;,&quot;label&quot;:&quot;Vargo_2014 \u00b7 LDL-C&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atorvastatin/pd_Vargo_2014_LDL_C.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atorvastatin — `Atorvastatin_Clemente2021_reversible_2_tissue_compartment_ma`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The atorvastatin record lacks distribution volume and clearance, identifying it as an exposure study rather than a compartmental PK model.

<div class="pk-model-meta" hidden drug="atorvastatin" model-id="Atorvastatin_Clemente2021_reversible_2_tissue_compartment_ma" status="rejected" stale="false" population="healthy rats" measured-compound="atorvastatin" parameterization="mechanistic" topology="1C"></div>

## Citation
Clemente GS, Antunes IF, Sijbesma JWA, van Waarde A, Lammertsma AA, Dömling A et al. [. Molecular pharmaceutics 18(9):3378–3386 (2021).
  ·  DOI: [10.1021/acs.molpharmaceut.1c00305](https://doi.org/10.1021/acs.molpharmaceut.1c00305)

## Population and dosing

**Population:** healthy rats · condition healthy · age group adult · n = 14.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| K1 (mL/cm3/min) | k12 | 0.185 | mL/cm3/min |
| k2 (min–1) | Q2 | 0.038 | min–1 |
| SE % (k2) | k21 | 15.394 | 18F |
| SE % (k3) | k31 | 23.520 | 18F |
| SE % (k4) | k14 | 32.197 | 18F |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The atorvastatin record lacks distribution volume and clearance, identifying it as an exposure study rather than a compartmental PK model.**

The record defines transfer rate constants but omits distribution volume and elimination clearance, failing the structural requirements for a population PK model. Additionally, a dimension mismatch occurred where a rate constant parameter was assigned a volume unit. The paper is classified as an exposure/outcome study because it does not report the necessary pharmacokinetic parameters. Extracted — atorvastatin: k12 0.185 mL/cm3/min, Q2 0.038 min–1, k21 15.4 18F, k31 23.5 18F, k14 32.2 18F.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atorvastatin, the second reading [18F]atorvastatin; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| K1 (mL/cm3/min) | `Q301` · k12 | 0.185 | mL/cm3/min | ml/(min·cm3) | llm (0.6) | tbl2:row2:col2 |
| k2 (min–1) | `Q99` · Q2 | 0.038 | min–1 | 1/min | llm (0.6) | tbl2:row4:col2 |
| SE % (k2) | `Q302` · k21 | 15.394 | 18F | 18f | llm (0.6) | tbl2:row5:col2 |
| SE % (k3) | `Q304` · k31 | 23.520 | 18F | 18f | llm (0.6) | tbl2:row7:col2 |
| SE % (k4) | `Q347` · k14 | 32.197 | 18F | 18f | llm (0.6) | tbl2:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mL/cm3/min' (k12)
- dropped unlinked row (NIL): 'SE % (K1)' — extend the ontology if this is a real PK parameter (source ['tbl2:row3:col2'])
- unit_dimension_mismatch: 'k2 (min–1)' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: '18F' (k21)
- dropped unlinked row (NIL): 'k3 (min–1)' — extend the ontology if this is a real PK parameter (source ['tbl2:row6:col2'])
- unit_dimension_unknown: '18F' (k31)
- dropped unlinked row (NIL): 'k4 (min–1)' — extend the ontology if this is a real PK parameter (source ['tbl2:row8:col2'])
- unit_dimension_unknown: '18F' (k14)
- dropped unlinked row (NIL): 'VT (mL/cm3)' — extend the ontology if this is a real PK parameter (source ['tbl2:row10:col2'])
- dropped unlinked row (NIL): 'SE % (VT)' — extend the ontology if this is a real PK parameter (source ['tbl2:row11:col2'])
- implicit units: 'K1 (mL/cm3/min)' — the LLM proposed 'mL/cm3/min', whose dimension does not fit Q301; left unset
- implicit units: 'SE % (k2)' — the LLM proposed '%', whose dimension does not fit Q302; left unset
- implicit units: 'SE % (k3)' — the LLM proposed '%', whose dimension does not fit Q304; left unset
- implicit units: 'SE % (k4)' — the LLM proposed '%', whose dimension does not fit Q347; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atorvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- population split: 'reversible 2-tissue compartment / male' subgroup of Clemente_2021 (paper reports 4 populations: irreversible 2-tissue compartment / female, irreversible 2-tissue compartment / male, reversible 2-tissue compartment / female, reversible 2-tissue compartment / male)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V from Kulkarni_2016: its label names a different analyte ('intrahepatic') — 'Volume of intrahepatic vasculature (basolateral compartment) (Blouin et al., 1977)'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (3/9 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[k1]` | 0.185 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k2].parameter_id` | Q99 | Q48 | mismatch |
| `gpt-oss-120b` | `parameters[se %]` | 15.394 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vt]` |  | 44.008 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atorvastatin | [18F]atorvastatin | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atorvastatin | [18F]atorvastatin | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q99 | fail | [length] ** 3 / [time] | min–1 (1 / [time]) | ['tbl2:row4:col2'] |
| C5_unit_missing_Q301 | fail | 1 / [time] | mL/cm3/min | ['tbl2:row2:col2'] |
| C5_unit_missing_Q302 | fail | 1 / [time] | 18F | ['tbl2:row5:col2'] |
| C5_unit_missing_Q304 | fail | 1 / [time] | 18F | ['tbl2:row7:col2'] |
| C5_unit_missing_Q347 | fail | 1 / [time] | 18F | ['tbl2:row9:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batorvastatin%5D%20Atorvastatin_Clemente2021_reversible_2_tissue_compartment_ma&body=Drug%3A%20atorvastatin%0ARecord%3A%20Atorvastatin_Clemente2021_reversible_2_tissue_compartment_ma%0APaper%3A%20Clemente_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atorvastatin/Atorvastatin_Clemente2021_reversible_2_tissue_compartment_ma%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 08:54 UTC</sub>
