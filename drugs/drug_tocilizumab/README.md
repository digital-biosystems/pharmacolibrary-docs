<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;tocilizumab&quot;}]"></div>

# tocilizumab

- **generic name:** tocilizumab
- **ATC codes:** `L04AC07`
- **DrugBank:** [DB06273](https://go.drugbank.com/drugs/DB06273) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tocilizumab, a monoclonal antibody that blocks interleukin signalling, is used to treat rheumatoid and juvenile idiopathic arthritis, giant cell arteritis, cytokine release syndrome, and COVID-19. It is authorised in the European Union and widely used for these inflammatory conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425154](https://www.wikidata.org/wiki/Q425154) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:14 | 4:09 | 0/3/1 | 3/0/1 | 0/0/0 | 235,343/13,709 | einfracz / qwen3.8-27b | 10 | 1/9 | 10/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Bastida_2019_reference](drugs/drug_tocilizumab/Tocilizumab_Bastida2019_reference.md) | — | 1-compartment (no model) | 2 | Bastida C et al., Exposure-response modeling of tocilizum…, British journal of clinical… (2019) | [10.1111/bcp.13954](https://doi.org/10.1111/bcp.13954) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Arrivé_2024_reference](drugs/drug_tocilizumab/Tocilizumab_Arriv2024_reference.md) | — | 2-compartment (no model) | 7 (+2 cov.) | Arrivé C et al., A Population Pharmacokinetic Model of T…, BioDrugs : clinical immunot… (2024) | [10.1007/s40259-024-00676-z](https://doi.org/10.1007/s40259-024-00676-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hooijberg_2025_reference](drugs/drug_tocilizumab/Tocilizumab_Hooijberg2025_reference.md) | — | 1-compartment (no model) | 3 | Hooijberg F et al., Precision Dosing of Intravenous Tociliz…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001258](https://doi.org/10.1097/FTD.0000000000001258) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Leung_2022_reference](drugs/drug_tocilizumab/Tocilizumab_Leung2022_reference.md) | — | 1-compartment (no model) | 0 | Leung E et al., Pharmacokinetic/Pharmacodynamic Conside…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01092-0](https://doi.org/10.1007/s40262-021-01092-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Kovalenko_2020_ANC](drugs/drug_tocilizumab/pd_Kovalenko_2020_ANC.md) | absolute neutrophil count ← tocilizumab · delayed effect through transit (transduction) compartments | — | Kovalenko P et al., Population Pharmacodynamic Model of Neu…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12534](https://doi.org/10.1002/psp4.12534) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Levi_2013_DAS28](drugs/drug_tocilizumab/pd_Levi_2013_DAS28.md) | Disease Activity Score using 28 joints ← tocilizumab · indirect response — drug inhibits the production of Disease Activity Score using 28 joints | — | Levi M et al., Exposure-response relationship of tocil…, Journal of clinical pharmac… (2013) | [10.1177/0091270012437585](https://doi.org/10.1177/0091270012437585) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Levi_2013_2_DAS28](drugs/drug_tocilizumab/pd_Levi_2013_2_DAS28.md) | Disease Activity Score using 28 joints (DAS28) ← tocilizumab · indirect response — drug inhibits the production of Disease Activity Score using 28 joints (DAS28) | — | Levi M et al., Exposure-Exposure Relationship of Tocil…, Journal of clinical pharmac… (2013) | [10.1177/0091270011437585](https://doi.org/10.1177/0091270011437585) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Vaskeikina_2026_FVC](drugs/drug_tocilizumab/pd_Vaskeikina_2026_FVC.md) | forced vital capacity ← tocilizumab · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tocilizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IL6R (antibody), IL6R (inhibitor), IL6ST (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 45 matched, 19 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Frey_2010.pdf` | Frey N et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009350623](https://doi.org/10.1177/0091270009350623) | [20097931](https://pubmed.ncbi.nlm.nih.gov/20097931) | The study describes a population pharmacokinetic model for tocilizumab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hooijberg_2025.pdf` | Hooijberg F et al., Precision Dosing of Intravenous Tociliz…, Therapeutic drug monitoring (2025) | popPK | 10 | [10.1097/FTD.0000000000001258](https://doi.org/10.1097/FTD.0000000000001258) | [39509293](https://pubmed.ncbi.nlm.nih.gov/39509293) | The paper reports a population PK model for tocilizumab with specific numeric parameters (CL, Vmax, Km) in the text. |
| `Bastida_2019.pdf` | Bastida C et al., Exposure-response modeling of tocilizum…, British journal of clinical… (2019) | popPK | 7 | [10.1111/bcp.13954](https://doi.org/10.1111/bcp.13954) | [30958574](https://pubmed.ncbi.nlm.nih.gov/30958574) | The paper describes a population PK/pharmacodynamic model for tocilizumab in humans, but specific quantitative PK parameters (CL, V) are not present in the provided abstract/evidence, only PD parameters. |
| `Levi_2013.pdf` | Levi M et al., Exposure-response relationship of tocil…, Journal of clinical pharmac… (2013) | popPK | 7 | [10.1177/0091270012437585](https://doi.org/10.1177/0091270012437585) | [23436260](https://pubmed.ncbi.nlm.nih.gov/23436260) | The paper describes a population PK/PD model for tocilizumab in humans, but specific quantitative PK parameters (CL, V, Q) are not present in the provided evidence, which focuses on exposure-response and EC50. |
| `Bastida_2020.pdf` | Bastida C et al., Evaluation of dose-tapering strategies…, European journal of clinica… (2020) | popPK | 6 | [10.1007/s00228-020-02925-w](https://doi.org/10.1007/s00228-020-02925-w) | [32514745](https://pubmed.ncbi.nlm.nih.gov/32514745) | The paper describes a simulation study using a PK/PD model but does not report the original quantitative PK parameter values (CL, V, etc.) in the provided evidence, which focuses on simulation outcomes (remission rates, cost savings). |
| `Levi_2013_2.pdf` | Levi M et al., Exposure-Exposure Relationship of Tocil…, Journal of clinical pharmac… (2013) | popPK | 5 | [10.1177/0091270011437585](https://doi.org/10.1177/0091270011437585) | [23504875](https://pubmed.ncbi.nlm.nih.gov/23504875) | The paper describes a population PK/PD model but provides no numeric PK parameter values (CL, V, etc.) in the evidence, only exposure-response relationships and clinical outcomes. |

<sub>queue written 2026-10-14T23:11:14.957767+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aydeniz_2024 | irrelevant | 0 | 0 | The study is a clinical observation of lung mechanics via electrical impedance tomography and does not report any pharmacokinetic parameters for tocilizumab. |
| popPK | Bastida_2019 | relevant | 7 | 3 | The paper describes a population PK/pharmacodynamic model for tocilizumab in humans, but specific quantitative PK parameters (CL, V) are not present in the provided abstract/evidence, only PD parameters. |
| popPK | Bastida_2020 | irrelevant | 6 | 0 | The paper describes a simulation study using a PK/PD model but does not report the original quantitative PK parameter values (CL, V, etc.) in the provided evidence, which focuses on simulation outcomes (remission rates, cost savings). |
| popPK | Connarn_2023 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of the CAR-T cell therapy idecabtagene vicleucel, not tocilizumab, which is only mentioned as a treatment for cytokine release syndrome. |
| popPK | Frey_2010 | relevant | 10 | 0 | The study describes a population pharmacokinetic model for tocilizumab in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study evaluating the impact of tocilizumab on kidney transplant outcomes (eGFR, DSA), containing no pharmacokinetic data or disposition parameters. |
| popPK | Jamois_2025 | relevant | 9 | 2 | The paper reports a population PK model for tocilizumab with quantitative disposition parameters (CL, V, Q), but the specific parameter estimates are located in Supplementary Tables (S1, S2, S5) which are not provided in the evidence. |
| popPK | Kovalenko_2020 | irrelevant | 1 | 0 | The paper models pharmacodynamics (neutrophil margination/tolerance) rather than reporting quantitative population pharmacokinetic parameter estimates (CL, V, Q) for tocilizumab, which are treated as fixed covariates or external inputs. |
| popPK | Leil_2021 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy (DAS28 scores) for tocilizumab and other RA drugs, not a pharmacokinetic study, and does not report PK parameters like clearance or volume. |
| popPK | Levi_2013 | relevant | 7 | 2 | The paper describes a population PK/PD model for tocilizumab in humans, but specific quantitative PK parameters (CL, V, Q) are not present in the provided evidence, which focuses on exposure-response and EC50. |
| popPK | Levi_2013_2 | irrelevant | 5 | 0 | The paper describes a population PK/PD model but provides no numeric PK parameter values (CL, V, etc.) in the evidence, only exposure-response relationships and clinical outcomes. |
| popPK | Marzolini_2020 | irrelevant | 0 | 0 | The study investigates the effect of tocilizumab on lopinavir and hydroxychloroquine concentrations, not tocilizumab's own pharmacokinetic parameters. |
| popPK | Patel_2023 | irrelevant | 0 | 0 | The study analyzes effects on hemoglobin A1c levels, not pharmacokinetic parameters. |
| popPK | Sweiss_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fludarabine in CAR-T patients, where tocilizumab is only mentioned as a toxicity treatment, not as the subject of PK analysis. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis of treatment efficacy (mRSS/FVC) in systemic sclerosis, not a pharmacokinetic study, and contains no PK parameters for tocilizumab. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study focuses on the cellular kinetics of idecabtagene vicleucel (a CAR-T therapy), and tocilizumab is only mentioned as a treatment for cytokine release syndrome rather than as the subject drug for PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:11 UTC</sub>
