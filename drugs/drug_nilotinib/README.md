<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nilotinib&quot;}]"></div>

# nilotinib

- **generic name:** nilotinib
- **ATC codes:** `L01EA03`
- **DrugBank:** [DB04868](https://go.drugbank.com/drugs/DB04868) · **PubChem:** [CID 644241](https://pubchem.ncbi.nlm.nih.gov/compound/644241)
- **molar mass:** 529.5158 g/mol (C28H22F3N7O) — DrugBank
- **groups:** approved, investigational

## About

Nilotinib is a protein kinase inhibitor used to treat chronic myelogenous leukemia and gastrointestinal stromal tumors. It is given by mouth in the form of capsules or tablets. It is widely used and is an authorized medication in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q412327](https://www.wikidata.org/wiki/Q412327), [Wikipedia](https://en.wikipedia.org/wiki/Nilotinib?oldid=1362647876) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nilotinib | parent | 529.516 | C28H22F3N7O | DrugBank | [644241](https://pubchem.ncbi.nlm.nih.gov/compound/644241) | Larson_2012 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Larson_2012_reference](drugs/drug_nilotinib/Nilotinib_Larson2012_reference.md) | — | 1-compartment (no model) | 1 | Larson RA et al., Population pharmacokinetic and exposure…, European journal of clinica… (2012) | [10.1007/s00228-011-1200-7](https://doi.org/10.1007/s00228-011-1200-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Hoshino-Yoshino_2011_efficacy_in_xenograft_mice](drugs/drug_nilotinib/pd_Hoshino_Yoshino_2011_efficacy_in_xenograft_mice.md) | efficacy in xenograft mice ← nilotinib · direct Emax (saturable) effect | — | Hoshino-Yoshino A et al., Bridging from preclinical to clinical s…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-11-RG-043](https://doi.org/10.2133/dmpk.DMPK-11-RG-043) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ji_2009_CCNB2](drugs/drug_nilotinib/pd_Ji_2009_CCNB2.md) | CCNB2 ← nilotinib · direct sigmoid Emax (Hill) effect | — | Ji RR et al., Transcriptional profiling of the dose r…, PLoS computational biology (2009) | [10.1371/journal.pcbi.1000512](https://doi.org/10.1371/journal.pcbi.1000512) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Sy_2025_BCR_ABL1](drugs/drug_nilotinib/pd_Sy_2025_BCR_ABL1.md) | BCR::ABL1 ← nilotinib · disease-progression model | — | Sy SKB et al., Population modelling of nilotinib expos…, British journal of clinical… (2025) | [10.1111/bcp.16381](https://doi.org/10.1111/bcp.16381) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xia_2020_TR4](drugs/drug_nilotinib/pd_Xia_2020_TR4.md) | TR4 transactivation activity ← nilotinib · inhibition effect | — | Xia L et al., Identification of Small-Molecule Regula…, ACS omega (2020) | [10.1021/acsomega.0c04623](https://doi.org/10.1021/acsomega.0c04623) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mauro_2025_BCR_ABL1_autophosphorylation](drugs/drug_nilotinib/pd_Mauro_2025_BCR_ABL1_autophosphorylation.md) | BCR-ABL1 autophosphorylation biomarker turnover ← nilotinib | — | Mauro M et al., Pharmacokinetic profile of novel reduce…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04777-6](https://doi.org/10.1007/s00280-025-04777-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:25 | 0:16 | 0/1/0 | 5/0/0 | 0/0/0 | 6,618/1,719 | einfracz / qwen3.8-27b | 7 | 1/6 | 6/1 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sy_2025.pdf` | Sy SKB et al., Population modelling of nilotinib expos…, British journal of clinical… (2025) | popPK | 6 | [10.1111/bcp.16381](https://doi.org/10.1111/bcp.16381) | [39739907](https://pubmed.ncbi.nlm.nih.gov/39739907) | The study utilizes empirical Bayes estimates from a population PK model for nilotinib, but the specific numeric PK parameter values (CL, V, etc.) are not reported in the provided abstract or evidence text. |

<sub>queue written 2026-11-24 02:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alshurafa_2026 | irrelevant | 0 | 0 | The study evaluates renal function (eGFR) and nephrotoxicity outcomes, not pharmacokinetic parameters such as clearance or volume of distribution for nilotinib. |
| PGx | Alshurafa_2026 | not_relevant | 0 | 0 | The study investigates the effect of TKIs on renal function (eGFR) in CML patients but does not report on pharmacogenomic variants or genetic factors influencing the pharmacokinetics or pharmacodynamics of nilotinib. |
| popPK | Banerjee_2021 | irrelevant | 0 | 0 | This is a computational and in-vitro antiviral activity study (EC50/CC50) with no pharmacokinetic parameters reported. |
| PGx | Banerjee_2021 | not_relevant | 0 | 0 | The paper focuses on the in vitro antiviral activity and computational binding of nilotinib against SARS-CoV-2, without reporting any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Brooks_2021 | irrelevant | 0 | 0 | Nilotinib is administered for survival studies, but no nilotinib disposition parameters or numeric PK values are reported. |
| popPK | DCunha_2019 | irrelevant | 2 | 0 | Nilotinib is used as a co-administered inhibitor to study the pharmacokinetics of afatinib, not as the primary subject for PK parameter extraction. |
| PGx | DCunha_2019 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (nilotinib altering afatinib pharmacokinetics via transporters) rather than a pharmacogenomic effect of a genetic variant on nilotinib's PK/PD. |
| popPK | Dogra_2024 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| popPK | Giles_2013 | relevant | 10 | 2 | The paper describes a population PK study for nilotinib in humans, but the specific quantitative parameter values (CL, V, etc.) are not listed in the provided abstract/evidence text. |
| PGx | Giles_2013 | not_relevant | 0 | 0 | The study reports population pharmacokinetics and exposure-response relationships but does not investigate or report any effect of gene variants or genotypes on nilotinib PK/PD parameters. |
| popPK | Hoshino-Yoshino_2011 | irrelevant | 1 | 0 | The paper is a comparative toxicokinetic review focusing on exposure (AUC) and efficacy correlations rather than reporting specific quantitative population-pharmacokinetic parameters (CL, V, ka, t1/2) for nilotinib. |
| PGx | Hoshino-Yoshino_2011 | not_relevant | 0 | 0 | The paper discusses preclinical-to-clinical PK/PD bridging for tyrosine kinase inhibitors but does not report any pharmacogenomic effects or gene-variant specific data. |
| popPK | Ji_2009 | irrelevant | 0 | 0 | This is an in-vitro transcriptional dose-response study and reports no nilotinib disposition parameters. |
| popPK | Larson_2012 | relevant | 10 | 2 | The paper describes a population PK study of nilotinib in humans, but the abstract only provides relative bioavailability and exposure differences, lacking specific numeric values for CL, V, or Ka. |
| PGx | Larson_2012 | not_relevant | 0 | 0 | The paper analyzes population pharmacokinetics and exposure-response relationships but explicitly states that demographics did not affect pharmacokinetics and does not report any genetic variant or genotype analysis. |
| popPK | Li_2015 | irrelevant | 3 | 0 | The study is a simulation using known PK parameters to evaluate trial design, not a primary study reporting new quantitative disposition parameters or models for nilotinib, and no numeric PK values for nilotinib are provided in the evidence. |
| PGx | Li_2015 | not_relevant | 0 | 0 | The paper is a methodological simulation study on trial design for PK analysis and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Mauro_2025 | relevant | 9 | 3 | The study presents a PopPK model for nilotinib in humans, but the specific numeric parameter values (CL, V, etc.) are explicitly stated to be in the Supplemental Information, Table 2, which is not included in the evidence. |
| PGx | Mauro_2025 | not_relevant | 0 | 0 | The paper analyzes the impact of food intake and formulation type (tablets vs. capsules) on nilotinib PK, but does not report any pharmacogenomic effects of gene variants. |
| popPK | Pagan_2019 | relevant | 8 | 1 | This is a human nilotinib PK study, but no numeric disposition parameters are readable here and concentration results appear in figures not provided. |
| popPK | Sy_2025 | relevant | 6 | 2 | The study utilizes empirical Bayes estimates from a population PK model for nilotinib, but the specific numeric PK parameter values (CL, V, etc.) are not reported in the provided abstract or evidence text. |
| PGx | Sy_2025 | not_relevant | 0 | 0 | The study focuses on population PK/PD modeling and BCR::ABL1 response prediction based on treatment line, but does not analyze or report the impact of genetic variants or genotypes on nilotinib pharmacokinetics or pharmacodynamics. |
| popPK | Xia_2020 | irrelevant | 0 | 0 | The study reports nilotinib binding and activity values, not pharmacokinetic disposition parameters. |
| popPK | de_2014 | irrelevant | 0 | 0 | The study models sunitinib and its metabolite; nilotinib is only mentioned as prior comparative evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnilotinib%5D&body=Drug%3A%20nilotinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nilotinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:25 UTC</sub>
