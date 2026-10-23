<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;dienogest&quot;}]"></div>

# dienogest

- **generic name:** dienogest
- **ATC codes:** `G03AA16`, `G03AB08`, `G03DB08`, `G03FA15`
- **DrugBank:** [DB09123](https://go.drugbank.com/drugs/DB09123) · **PubChem:** [CID 68861](https://pubchem.ncbi.nlm.nih.gov/compound/68861)
- **molar mass:** 311.425 g/mol (C20H25NO2) — DrugBank
- **groups:** approved, investigational

## About

Dienogest is a progestogen used in hormonal contraceptives, typically combined with an estrogen. It is an approved medicine, used in oral contraceptive preparations, and has also been investigated for other uses such as male contraception.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q139160](https://www.wikidata.org/wiki/Q139160) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Barra_2018_pain_associated_to_endometriosis](drugs/drug_dienogest/pd_Barra_2018_pain_associated_to_endometriosis.md) | pain associated to endometriosis ← dienogest · inhibition effect | — | Barra F et al., Current understanding on pharmacokineti…, Expert opinion on drug meta… (2018) | [10.1080/17425255.2018.1461840](https://doi.org/10.1080/17425255.2018.1461840) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jensen_2023_progestin_serum_concentrations](drugs/drug_dienogest/pd_Jensen_2023_progestin_serum_concentrations.md) | progestin serum concentrations ← dienogest · model not identified | — | Jensen JT et al., Development and validation of an expand…, Contraception (2023) | [10.1016/j.contraception.2023.110130](https://doi.org/10.1016/j.contraception.2023.110130) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dienogest).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: PGR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:42 | 8:06 | 0/0/0 | 2/0/0 | 0/0/0 | 639,487/3,823 | einfracz / qwen3.8-27b | 33 | 1/27 | 33/0 | 0 |

## Coverage

- **PubMed hits:** 11202 matched, 67 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sasagawa_2008.pdf` | Sasagawa S et al., Dienogest is a selective progesterone r…, Steroids (2008) | pd | 5 | [10.1016/j.steroids.2007.10.003](https://doi.org/10.1016/j.steroids.2007.10.003) | [18061638](https://www.ncbi.nlm.nih.gov/pubmed/18061638) | metadata signals extractable PD data (EC50) |
| `Rabe_2000.pdf` | Rabe T et al., Inhibition of skin 5 alpha-reductase by…, Gynecological endocrinology… (2000) | pd | 4 | [10.3109/09513590009167685](https://doi.org/10.3109/09513590009167685) | [11075290](https://www.ncbi.nlm.nih.gov/pubmed/11075290) | metadata signals extractable PD data (IC50) |
| `Blode_2012.pdf` | Blode H et al., Evaluation of the effects of rifampicin…, Contraception (2012) | pgx | 7 | [10.1016/j.contraception.2012.01.010](https://doi.org/10.1016/j.contraception.2012.01.010) | [22445438](https://www.ncbi.nlm.nih.gov/pubmed/22445438) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T08:40:50.410417+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetic models for therapeutic enzymes (e.g., imiglucerase, avalglucosidase alfa) in lysosomal storage diseases and does not mention or report any data for the drug dienogest. |
| PGx | Blode_2012 | not_relevant | 0 | 10 | The paper evaluates drug-drug interactions using exogenous CYP3A4 modulators (rifampicin, ketoconazole, erythromycin) rather than intrinsic pharmacogenomic variants or genotypes. |
| popPK | Bräm_2026 | irrelevant | 0 | 0 | The paper is a methodological study on automated pharmacometric model development using Neural ODEs, demonstrating the approach on neonatal weight, simulated PK data, and warfarin, with no mention of dienogest. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of rivaroxaban, not dienogest. |
| popPK | Clements_2026 | irrelevant | 0 | 0 | The paper describes the population pharmacokinetics of belantamab mafodotin, not dienogest. |
| popPK | Dahan_2026 | irrelevant | 0 | 0 | The paper is a narrative review of MIDD methodologies for analgesics and does not contain original pharmacokinetic data or specific disposition parameters for dienogest. |
| PGx | Di_2013 | not_relevant | 0 | 0 | The paper reports the effects of an oral contraceptive on bone markers in a general population without analyzing the influence of any gene variant, genotype, or pharmacogenomic phenotype on these parameters. |
| popPK | Gambigliani_2026 | irrelevant | 0 | 0 | The study is a retrospective cohort assessing pain response to hormonal therapy and contains no pharmacokinetic parameters or models for dienogest. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of iclepertin (a GlyT1 inhibitor), not dienogest. |
| popPK | Hoeben_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Calaspargase Pegol (an asparaginase conjugate), not dienogest. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is a methodological evaluation of an automated PopPK modeling framework (nlmixr2auto) using 22 datasets of other drugs (e.g., bedaquiline, theophylline, imipenem); dienogest is not mentioned or studied. |
| popPK | Jensen_2023 | irrelevant | 0 | 0 | The paper describes a method validation for detecting multiple progestins for compliance monitoring and does not report any pharmacokinetic parameter values (CL, V, etc.) for dienogest. |
| popPK | Jia_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rivaroxaban, not dienogest. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | The paper is a population PK simulation study for multiple myeloma drugs (carfilzomib, daratumumab, lenalidomide, melphalan, panobinostat) and does not include dienogest as a subject or comparator. |
| popPK | Karlsen_2026 | irrelevant | 0 | 0 | The paper is a benchmarking framework for covariate model building using simulated data from a generic Sanofi molecule, not a specific PK study for dienogest. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the monoclonal antibody bevacizumab (and its biosimilar CT-P16), not for the drug dienogest. |
| popPK | Kwack_2026 | irrelevant | 0 | 0 | The study focuses on PK modeling for warfarin, theophylline, and tobramycin, and does not mention or analyze dienogest. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of PF-06804103, an antibody-drug conjugate, and does not report any data for dienogest. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gotistobart, not dienogest. |
| popPK | Nayak_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for marstacimab, not dienogest. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor and its metabolite GFT1007, not dienogest. |
| popPK | Sasagawa_2008 | irrelevant | 4 | 0 | The study reports in-vitro receptor affinities and plasma concentrations at ED50 in rabbits, but does not provide compartmental PK parameters (CL, V, t1/2) or a population model. |
| popPK | Serkland_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of ocrelizumab, not dienogest. |
| popPK | Soeorg_2026 | irrelevant | 0 | 0 | The paper focuses on pharmacokinetic-pharmacodynamic modeling of meropenem and colistin/polymyxin B against Acinetobacter baumannii in vitro, with no mention of dienogest. |
| popPK | Suthahar_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for 5-fluorouracil (5-FU), not dienogest. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses entirely on the pharmacokinetics and dosing of busulfan, not dienogest. |
| popPK | Vicente_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for subcutaneous infliximab, not dienogest. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of polymyxin B, not dienogest. |
| popPK | Wanika_2026 | irrelevant | 0 | 0 | The study uses generic simulated data from the Monolix Oral1 demo project to demonstrate an uncertainty quantification metric, not the pharmacokinetics of dienogest. |
| popPK | Witta_2026 | irrelevant | 0 | 0 | The paper is a methodological simulation study evaluating model averaging algorithms for a hypothetical drug, not a pharmacokinetic study of dienogest. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not dienogest. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study of daptomycin, not dienogest. |
| popPK | Yokota_2024 | irrelevant | 0 | 0 | The study measures protein S activity and antigen levels as a coagulation biomarker, not pharmacokinetic parameters (CL, V, ka) for dienogest. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetics for the antibiotic imipenem, not the progestin dienogest. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a systematic review of population pharmacokinetic models for immunoglobulins (IVIg/SCIg), not dienogest. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
