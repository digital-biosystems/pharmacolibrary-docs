<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ifosfamide&quot;,&quot;href&quot;:&quot;drugs/toxin_ifosfamide/&quot;},{&quot;label&quot;:&quot;Kerbusch_2004 \u00b7 aucifo_m_h&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ifosfamide_Boddy1995_reference&quot;,&quot;label&quot;:&quot;Boddy_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ifosfamide/Ifosfamide_Boddy1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ifosfamide_MadrigalBujaidar2019_reference&quot;,&quot;label&quot;:&quot;Madrigal-Bujaidar_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ifosfamide/Ifosfamide_MadrigalBujaidar2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ifosfamide — `Ifosfamide_Kerbusch2004_aucifo_m_h`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The elimination rate constant for ifosfamide is rejected because its value 2.04 carries the unit hours, conflicting with the required reciprocal time dimension.

<div class="pk-model-meta" hidden drug="Ifosfamide" model-id="Ifosfamide_Kerbusch2004_aucifo_m_h" status="rejected" stale="false" population="Patients with advanced malignancies" measured-compound="Ifosfamide" parameterization="mechanistic" topology="retention"></div>

## Citation
Kerbusch T, Groenewegen G, Mathôt RA, Herben VM, ten Bokkel Huinink WW, Swart M et al. Phase I and pharmacokinetic study of the combination of topotecan and ifosfamide administered intravenously every 3 weeks. British journal of cancer 90(12):2268-2277 (2004).
  ·  DOI: [10.1038/sj.bjc.6601861](https://doi.org/10.1038/sj.bjc.6601861)

## Population and dosing

**Population:** Patients with advanced malignancies · condition advanced malignancies · age group adult · n = 36.

**Dosing:** 0.4, 0.6, 0.8, 1, 1.2, 1.4 mg/m^2/day, iv, multiple.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| Deactivated metabolites / Estimate (±s.e.) | kel | 2.04 | h | None (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The elimination rate constant for ifosfamide is rejected because its value 2.04 carries the unit hours, conflicting with the required reciprocal time dimension.**

The parameter kel, representing the terminal elimination rate constant for ifosfamide, is recorded with the value 2.04 and the unit hours. Rate constants inherently possess reciprocal time dimensions, so the provided unit of time creates a dimensional inconsistency. This unit was not converted to SI base units, leaving the parameter in an incompatible state for the population model. Extracted — ifosfamide: kel 2.04 h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|
| Deactivated metabolites / Estimate (±s.e.) | `Q47` · kel | 2.04 | h | h | exact (1) | tbl7:row9:col6 | None (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CLinit' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'VIFO' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'Kenz,out' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 't1/2,enz (h)' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'AUC' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'PE' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'AE' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'F*' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'K' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'F**' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'IF' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: '2DCE' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: '3DCE' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: '4OHIF' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'IFM' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 's.e.' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'IIV' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'IOV' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- table section iiv: 'RV' routed out of structural estimates ('Table 7. Pharmacokinetics of IF, 2DCE, 3DCE, 4OHIF, and IFM with their s.e., IIV, IOV, and RV')
- dropped unlinked row (NIL): 'Ifosfamide / Estimate (±s.e.)' — extend the ontology if this is a real PK parameter (source ['tbl7:row6:col1'])
- dropped unlinked row (NIL): 'Deactivated metabolites / RV' — extend the ontology if this is a real PK parameter (source ['tbl7:row6:col8', 'tbl7:row10:col8', 'tbl7:row11:col8'])
- dropped unlinked row (NIL): 'Activated metabolites / RV' — extend the ontology if this is a real PK parameter (source ['tbl7:row6:col12', 'tbl7:row10:col12', 'tbl7:row11:col12'])
- linked 'Deactivated metabolites / Estimate (±s.e.)' as 'kel' → Q47 (kel) for  — compound marker removed
- unit_dimension_mismatch: 'Deactivated metabolites / Estimate (±s.e.)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- linked 'Activated metabolites / Estimate (±s.e.)' as 'kel' → Q47 (kel) for  — compound marker removed
- unit_dimension_mismatch: 'Activated metabolites / Estimate (±s.e.)' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q47 ('Activated metabolites / Estimate (±s.e.)', value '0.399') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ifosfamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 6 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'aucifo (μm h)' subgroup of Kerbusch_2004 (paper reports 3 populations: ae (μm), aucifo (μm h), pe)
- row roles (LLM): model_class=compartmental; 29/29 row label(s) assigned, 16 linked by role; re-tagged Ifosfamide→parent ×3, Ifosfamide→IFM ×2, Ifosfamide→2DCE ×1, Ifosfamide→3DCE ×1, Ifosfamide→4OHIF ×1
- molar mass: none of 1 PubChem candidate(s) is 'Topotecan lactone' (LLM) — left in mass units
- molar mass: none of 2 PubChem candidate(s) is 'IFM' (LLM) — left in mass units
- molar mass: none found for 'Topotecan lactone' — its concentrations stay mass-only
- molar mass: none found for 'IFM' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V from Yasuda_2021: its label names a different analyte ('mtx') — 'volume of distribution of MTX'
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table tbl7: missing_label
- transposed table tbl7: logical view retains original source coordinates
- LLM selected parameter table(s) 7

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | fail | 1 / [time] | h ([time]) | ['tbl7:row9:col6'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bifosfamide%5D%20Ifosfamide_Kerbusch2004_aucifo_m_h&body=Drug%3A%20ifosfamide%0ARecord%3A%20Ifosfamide_Kerbusch2004_aucifo_m_h%0APaper%3A%20Kerbusch_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ifosfamide/Ifosfamide_Kerbusch2004_aucifo_m_h%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 00:04 UTC</sub>
