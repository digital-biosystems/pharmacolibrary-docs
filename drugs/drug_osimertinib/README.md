<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Jones_2023_pEGFR&quot;,&quot;label&quot;:&quot;Jones_2023 \u00b7 pEGFR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/pd_Jones_2023_pEGFR.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# osimertinib

- **generic name:** osimertinib
- **ATC codes:** `L01EB04`, `L01XE`
- **DrugBank:** [DB09330](https://go.drugbank.com/drugs/DB09330) · **PubChem:** [CID 71496458](https://pubchem.ncbi.nlm.nih.gov/compound/71496458)
- **molar mass:** 499.619 g/mol (C28H33N7O2) — DrugBank
- **groups:** approved, investigational

## About

Osimertinib is a third-generation EGFR tyrosine kinase inhibitor used to treat non-small-cell lung cancer with a specific mutation. It is approved and authorised in the European Union for non-small-cell lung carcinoma.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21506464](https://www.wikidata.org/wiki/Q21506464) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| osimertinib | parent | 499.619 | C28H33N7O2 | DrugBank | [71496458](https://pubchem.ncbi.nlm.nih.gov/compound/71496458) | Johnson_2025, Jones_2023, Rodier_2022, Westra_2024, Westra_2025, Yang_2025 |
| AZ5104 | metabolite | 485.592 | C27H31N7O2 | PubChem | [71496460](https://pubchem.ncbi.nlm.nih.gov/compound/71496460) | Johnson_2025, Jones_2023, Westra_2024, Westra_2025, Yang_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:15 | 8:12 | 1/3/3 | 1/0/3 | 0/0/0 | 364,087/26,580 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Rodier_2022_reference](drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.471). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q351 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Johnson_2025_reference](drugs/drug_osimertinib/Osimertinib_Johnson2025_reference.md) | — | parent + metabolite (no model) | 6 (+7 cov.) | Johnson M et al., Population Pharmacokinetics of Osimerti…, Pharmacology research & per… (2025) | [10.1002/prp2.70098](https://doi.org/10.1002/prp2.70098) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.357). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Westra_2025_population_estimate_rse](drugs/drug_osimertinib/Osimertinib_Westra2025_population_estimate_rse.md) | — | parent + metabolite (no model) | 3 | Westra N et al., Osimertinib Cost Minimization in Non-Sm…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70085](https://doi.org/10.1002/jcph.70085) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.607). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q374, Q61, Q22 — no SI value to bui…</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_reference](drugs/drug_osimertinib/Osimertinib_Yang2025_reference.md) | — | parent + metabolite (no model) | 9 (+3 cov.) | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `engineer`</sub> | [Jones_2023_reference](drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Westra_2024_reference](drugs/drug_osimertinib/Osimertinib_Westra2024_reference.md) | — | general linear (no model) | 0 | Westra N et al., Systematic Evaluation of Osimertinib Po…, European journal of drug me… (2024) | [10.1007/s13318-024-00904-5](https://doi.org/10.1007/s13318-024-00904-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.357). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Westra_2025_osimertinib_80_mg_qd_monotherapy_dl_1](drugs/drug_osimertinib/Osimertinib_Westra2025_osimertinib_80_mg_qd_monotherapy_dl_1.md) | — | parent + metabolite (no model) | 5 | Westra N et al., Osimertinib Cost Minimization in Non-Sm…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70085](https://doi.org/10.1002/jcph.70085) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jones_2023_pEGFR](drugs/drug_osimertinib/pd_Jones_2023_pEGFR.md) | phosphorylated epidermal growth factor receptor (pEGFR) ← osimertinib · indirect response — drug stimulates the loss of phosphorylated epidermal growth factor receptor (pEGFR) | ▶ model + simulator | Jones RDO et al., Pharmacokinetic/Pharmacodynamic Analysi…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0193](https://doi.org/10.1158/1535-7163.MCT-22-0193) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Johnson_2024_ILD](drugs/drug_osimertinib/pd_Johnson_2024_ILD.md) | interstitial lung disease ← osimertinib · categorical (graded) response model | — | Johnson M et al., Exposure-response modelling of osimerti…, British journal of clinical… (2024) | [10.1111/bcp.16199](https://doi.org/10.1111/bcp.16199) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Johnson_2024_LVEF](drugs/drug_osimertinib/pd_Johnson_2024_LVEF.md) | left ventricular ejection fraction ← osimertinib · categorical (graded) response model | — | Johnson M et al., Exposure-response modelling of osimerti…, British journal of clinical… (2024) | [10.1111/bcp.16199](https://doi.org/10.1111/bcp.16199) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Johnson_2024_PFS](drugs/drug_osimertinib/pd_Johnson_2024_PFS.md) | progression-free survival ← osimertinib · time-to-event model | — | Johnson M et al., Exposure-response modelling of osimerti…, British journal of clinical… (2024) | [10.1111/bcp.16199](https://doi.org/10.1111/bcp.16199) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Rodier_2022_OS](drugs/drug_osimertinib/pd_Rodier_2022_OS.md) | overall survival ← osimertinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Rodier_2022_PFS](drugs/drug_osimertinib/pd_Rodier_2022_PFS.md) | progression-free survival ← osimertinib · time-to-event model | — | Rodier T et al., Exposure-Response Analysis of Osimertin…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091844](https://doi.org/10.3390/pharmaceutics14091844) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yang_2025_AEs](drugs/drug_osimertinib/pd_Yang_2025_AEs.md) | adverse events ← osimertinib · categorical (graded) response model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Yang_2025_PFS](drugs/drug_osimertinib/pd_Yang_2025_PFS.md) | progression-free survival ← osimertinib · time-to-event model | — | Yang J et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3759](https://doi.org/10.1002/cpt.3759) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=osimertinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: EGFR (inhibitor), EGFR (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 20 returned
- **screened:** 7  ·  **relevant:** 5
- **records:** 7  ·  extracted 1  ·  needs_review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brown_2017.pdf` | Brown K et al., Population pharmacokinetics and exposur…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13223](https://doi.org/10.1111/bcp.13223) | [28009438](https://pubmed.ncbi.nlm.nih.gov/28009438) | The paper describes a population PK model for osimertinib, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-14T20:08:17.237152+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boosman_2022 | irrelevant | 1 | 0 | The study reports plasma concentrations (Cmin) and exposure-response outcomes but does not provide quantitative disposition parameters (CL, V, ka) or compartmental/population PK model estimates. |
| popPK | Brown_2017 | relevant | 10 | 1 | The paper describes a population PK model for osimertinib, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Grande_2019 | irrelevant | 4 | 1 | The study reports summary statistics (Cmax, AUC reductions as percentages) and references a population PK analysis, but does not provide the specific numeric disposition parameters (CL, V, Q, ka) required for population PK model extraction. |
| popPK | Hu_2026 | relevant | 5 | 2 | The paper is a translational PK/PD modeling study in mice and rats that includes a mechanistic PK model for osimertinib, but the specific numeric parameter values are primarily in supplementary tables (S14-S16) or figures not fully provided. |
| popPK | Ishikawa_2023 | relevant | 10 | 4 | The study reports a population PK model for osimertinib and its metabolites in humans, but the specific numeric parameter values (CL, V, Ka) are located in Table 2 and Online Resources not provided in the evidence. |
| popPK | Johnson_2024 | relevant | 5 | 2 | The paper is an exposure-response study that references a population PK model to derive AUC values, but does not report the underlying quantitative PK parameter estimates (CL, V, Q, ka) within the provided text. |
| popPK | Jones_2023 | relevant | 8 | 4 | The study reports population PK parameters for osimertinib in mice (clearance 0.5-1.3 L/h/kg, variable ka), but specific final model estimates are referenced in Supplementary Table S3 which is not included in the evidence. |
| popPK | Savoca_2026 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of EGFR inhibition (phosEGFR) in vitro and in xenografts, with osimertinib used only for clinical simulation/comparison rather than PK parameter estimation. |
| popPK | Shao_2026 | irrelevant | 3 | 0 | This is a systematic review and meta-analysis of exposure-response relationships (efficacy/safety) that does not provide original quantitative population-PK parameter estimates (CL, V, Q, etc.) for osimertinib. |
| popPK | Tomasini_2026 | irrelevant | 0 | 0 | This is a clinical trial reporting patient-reported outcomes and time to symptomatic progression, containing no pharmacokinetic parameters for osimertinib. |
| popPK | Yong_2025 | irrelevant | 4 | 0 | The paper describes constructing PopPK models for osimertinib but does not provide the specific quantitative parameter values (CL, V, etc.) in the extracted evidence. |
| popPK | van_2022 | irrelevant | 1 | 0 | This is a PET imaging study measuring biodistribution (SUV/AUC) rather than quantitative population-PK parameters (CL, V, ka), and the only PK data in Table 5 are literature references for therapeutic doses, not original model estimates for the tracer. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:08 UTC</sub>
