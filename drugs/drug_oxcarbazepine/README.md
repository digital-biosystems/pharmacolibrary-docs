<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;oxcarbazepine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Wu2024_reference&quot;,&quot;label&quot;:&quot;Wu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/Oxcarbazepine_Wu2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# oxcarbazepine

- **generic name:** oxcarbazepine
- **ATC codes:** `N03AF02`
- **DrugBank:** [DB00776](https://go.drugbank.com/drugs/DB00776) · **PubChem:** [CID 34312](https://pubchem.ncbi.nlm.nih.gov/compound/34312)
- **molar mass:** 252.268 g/mol (C15H12N2O2) — DrugBank
- **groups:** approved, investigational

## About

Oxcarbazepine is an anticonvulsant used to treat epilepsy, especially focal seizures, and has also been used for trigeminal neuralgia and mood disorders. It is an approved medicine in general use, though it has also been studied for other investigational purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q176301](https://www.wikidata.org/wiki/Q176301) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxcarbazepine | parent | 252.268 | C15H12N2O2 | DrugBank | [34312](https://pubchem.ncbi.nlm.nih.gov/compound/34312) | Sinha_2026, Wu_2024 |
| 10-monohydroxy derivative | metabolite | — (mass units only) | — | — | — | — |
| MHD | metabolite | 254.289 | C15H14N2O2 | PubChem | [114709](https://pubchem.ncbi.nlm.nih.gov/compound/114709) | Wu_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:35 | 2:49 | 1/7/1 | 0/0/0 | 0/0/0 | 124,670/9,897 | einfracz / qwen3.8-27b | 12 | 10/2 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed 0/2</span> | [Wu_2024_reference](drugs/drug_oxcarbazepine/Oxcarbazepine_Wu2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Wu W et al., Population pharmacokinetics of oxcarbaz…, Basic & clinical pharmacolo… (2024) | [10.1111/bcpt.14000](https://doi.org/10.1111/bcpt.14000) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Yu_2025_reference](drugs/drug_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Yu L et al., Development and Validation of a Populat…, Drug design, development an… (2025) | [10.2147/DDDT.S499085](https://doi.org/10.2147/DDDT.S499085) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chen_2021_reference](drugs/drug_oxcarbazepine/Oxcarbazepine_Chen2021_reference.md) | — | parent + metabolite (no model) | 0 | Chen YT et al., Population pharmacokinetics of oxcarbaz…, Expert review of clinical p… (2021) | [10.1080/17512433.2021.1917377](https://doi.org/10.1080/17512433.2021.1917377) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.167). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Faison_2020_n](drugs/drug_oxcarbazepine/Oxcarbazepine_Faison2020_n.md) | — | parent + metabolite (no model) | 0 | Faison S et al., Predicted Efficacy of Once-Daily Extend…, Clinical pharmacology : adv… (2020) | [10.2147/CPAA.S256972](https://doi.org/10.2147/CPAA.S256972) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.167). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Faison_2020_pop](drugs/drug_oxcarbazepine/Oxcarbazepine_Faison2020_pop.md) | — | parent + metabolite (no model) | 0 | Faison S et al., Predicted Efficacy of Once-Daily Extend…, Clinical pharmacology : adv… (2020) | [10.2147/CPAA.S256972](https://doi.org/10.2147/CPAA.S256972) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.167). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Faison_2020_population](drugs/drug_oxcarbazepine/Oxcarbazepine_Faison2020_population.md) | — | parent + metabolite (no model) | 0 | Faison S et al., Predicted Efficacy of Once-Daily Extend…, Clinical pharmacology : adv… (2020) | [10.2147/CPAA.S256972](https://doi.org/10.2147/CPAA.S256972) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2023_reference](drugs/drug_oxcarbazepine/Oxcarbazepine_Li2023_reference.md) | — | 1-compartment (no model) | 0 | Li X et al., Population pharmacokinetics of oxcarbaz…, European journal of pediatr… (2023) | [10.1007/s00431-023-05092-z](https://doi.org/10.1007/s00431-023-05092-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sinha_2026_bsv_estimates_cv](drugs/drug_oxcarbazepine/Oxcarbazepine_Sinha2026_bsv_estimates_cv.md) | — | general linear (no model) | 0 | Sinha J et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01579-0](https://doi.org/10.1007/s40262-025-01579-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sinha_2026_population_estimates](drugs/drug_oxcarbazepine/Oxcarbazepine_Sinha2026_population_estimates.md) | — | general linear (no model) | 6 | Sinha J et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01579-0](https://doi.org/10.1007/s40262-025-01579-0) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oxcarbazepine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer/inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP3A4` inducer/inhibitor, `CYP3A5` inducer/inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor, `CYP3A5` inducer/inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: AKR1C1 (substrate), AKR1C2 (substrate), AKR1C3 (substrate), AKR1C4 (substrate), CBR1 (substrate), CBR3 (substrate), SCN11A (blocker), SCN1A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 16 returned
- **screened:** 12  ·  **relevant:** 2
- **records:** 9  ·  extracted 1  ·  needs_review 1  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2023.pdf` | Li X et al., Population pharmacokinetics of oxcarbaz…, European journal of pediatr… (2023) | popPK | 10 | [10.1007/s00431-023-05092-z](https://doi.org/10.1007/s00431-023-05092-z) | [37493972](https://pubmed.ncbi.nlm.nih.gov/37493972) | The study reports quantitative population PK parameters for oxcarbazepine's active metabolite (MHD), including specific clearance formulas and typical values in the abstract. |
| `Yang_2023.pdf` | Yang Q et al., Population pharmacokinetics of oxcarbaz…, European journal of hospita… (2023) | popPK | 10 | [10.1136/ejhpharm-2022-003357](https://doi.org/10.1136/ejhpharm-2022-003357) | [35787526](https://pubmed.ncbi.nlm.nih.gov/35787526) | The paper describes a population PK model for oxcarbazepine's active metabolite (MHD) in humans, but the extracted evidence contains no numeric parameter values (CL, V, etc.). |
| `Wu_2025.pdf` | Wu R et al., External validation of population pharm…, European journal of clinica… (2025) | popPK | 9 | [10.1007/s00228-025-03875-x](https://doi.org/10.1007/s00228-025-03875-x) | [40707789](https://pubmed.ncbi.nlm.nih.gov/40707789) | The paper reports the external validation of population PK models for the oxcarbazepine metabolite MHD, but no numeric parameter values are provided in the evidence, only qualitative performance assessments. |
| `Nedelman_2007.pdf` | Nedelman JR et al., Diagnostics for confounding in PK/PD mo…, Statistics in medicine (2007) | popPK | 6 | [10.1002/sim.2542](https://doi.org/10.1002/sim.2542) | [16615036](https://pubmed.ncbi.nlm.nih.gov/16615036) | The paper describes PK/PD analysis for oxcarbazepine in humans, but no numeric disposition parameter values (CL, V, etc.) are provided in the text. |

<sub>queue written 2026-10-14T19:33:18.283333+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Banach_2015 | irrelevant | 1 | 0 | The paper is a review of eslicarbazepine (a different drug), mentioning oxcarbazepine only as a related comparator, and contains no quantitative PK parameter values for oxcarbazepine. |
| popPK | Chen_2021_2 | irrelevant | 2 | 0 | The paper is a systematic review of population PK studies and does not report original quantitative disposition parameters in the provided evidence. |
| popPK | Citraro_2016 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic potentiation of oxcarbazepine in mice and explicitly states no significant influence on plasma/brain levels, providing no quantitative PK parameters (CL, V, ka). |
| popPK | Faison_2020 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling (efficacy vs. MHD Cmin) and does not report quantitative disposition parameters (CL, V, Q, ka) in the provided text, as these PK parameter estimates are explicitly stated to be in the Supplemental Material. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of perampanel, with oxcarbazepine listed only as a concomitant medication affecting perampanel's clearance. |
| popPK | Nedelman_2007 | relevant | 6 | 0 | The paper describes PK/PD analysis for oxcarbazepine in humans, but no numeric disposition parameter values (CL, V, etc.) are provided in the text. |
| popPK | Sinha_2026 | relevant | 10 | 4 | The paper reports a population PK model for oxcarbazepine and its metabolite, but the specific estimated parameter values (TVCL, V, Ka) are likely in supplementary material or tables not fully provided in the evidence snippet, which only cites adult reference values. |
| popPK | Takenaka_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of perampanel, with oxcarbazepine serving only as a co-administered drug affecting perampanel exposure. |
| popPK | Vashi_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cenobamate, with oxcarbazepine listed only as a co-administered drug that did not significantly affect cenobamate's clearance. |
| popPK | Wamil_1994 | irrelevant | 1 | 0 | This is a pharmacodynamic study focusing on anticonvulsant efficacy (ED50) and electrophysiological effects, lacking quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Wei_2023 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for topiramate, while oxcarbazepine is only mentioned as a co-administered covariate. |
| popPK | Wu_2025 | relevant | 9 | 0 | The paper reports the external validation of population PK models for the oxcarbazepine metabolite MHD, but no numeric parameter values are provided in the evidence, only qualitative performance assessments. |
| popPK | Yang_2023 | relevant | 10 | 0 | The paper describes a population PK model for oxcarbazepine's active metabolite (MHD) in humans, but the extracted evidence contains no numeric parameter values (CL, V, etc.). |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The study develops a population pharmacokinetic model for perampanel, with oxcarbazepine serving only as a covariate (co-administered enzyme inducer) rather than the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:33 UTC</sub>
