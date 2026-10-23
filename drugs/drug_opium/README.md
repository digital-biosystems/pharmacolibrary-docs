<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07D&quot;,&quot;href&quot;:&quot;atc/A07D.md&quot;},{&quot;label&quot;:&quot;opium&quot;}]"></div>

# opium

- **generic name:** opium
- **ATC codes:** `A07DA02`, `N02AA02`
- **DrugBank:** [DB11130](https://go.drugbank.com/drugs/DB11130) · **PubChem:** not captured
- **groups:** approved, illicit

## About

Opium, the dried latex of the opium poppy, has been used as a narcotic pain reliever and as an antidiarrheal (antipropulsive) medicine. It remains an approved drug, though it is also used illicitly, and its medicinal use is limited and tightly controlled.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q46452](https://www.wikidata.org/wiki/Q46452) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| morphine | metabolite | 285.343 | C17H19NO3 | PubChem | [5288826](https://pubchem.ncbi.nlm.nih.gov/compound/5288826) | Liu_2016 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Liu_2016_reference](drugs/drug_opium/Opium_Liu2016_reference.md) | — | 1-compartment (no model) | 2 | Liu T et al., Mechanistic Population Pharmacokinetics…, Journal of clinical pharmac… (2016) | [10.1002/jcph.696](https://doi.org/10.1002/jcph.696) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=opium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: B2M (binder), OPRD1 (target), OPRK1 (target), OPRM1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:30 | 2:47 | 0/1/0 | 0/0/0 | 0/0/0 | 42,485/5,678 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 6  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2016.pdf` | Liu T et al., Mechanistic Population Pharmacokinetics…, Journal of clinical pharmac… (2016) | popPK | 9 | [10.1002/jcph.696](https://doi.org/10.1002/jcph.696) | [26712409](https://pubmed.ncbi.nlm.nih.gov/26712409) | The study reports quantitative population PK parameters (ka, F) for morphine, the primary active metabolite of opium, following oral administration of tincture of opium in neonates. |
| `Samanani_2001.pdf` | Samanani N et al., Isolation and partial characterization…, Planta (2001) | pd | 4 | [10.1007/s004250100581](https://doi.org/10.1007/s004250100581) | [11722126](https://www.ncbi.nlm.nih.gov/pubmed/11722126) | metadata signals extractable PD data (sigmoid) |
| `Samanani_2004.pdf` | Samanani N et al., Molecular cloning and characterization…, The Plant journal : for cel… (2004) | pd | 4 | [10.1111/j.1365-313X.2004.02210.x](https://doi.org/10.1111/j.1365-313X.2004.02210.x) | [15447655](https://www.ncbi.nlm.nih.gov/pubmed/15447655) | metadata signals extractable PD data (sigmoid) |
| `Elkader_2005.pdf` | Elkader A et al., Buprenorphine: clinical pharmacokinetic…, Clinical pharmacokinetics (2005) | pgx | 7 | [10.2165/00003088-200544070-00001](https://doi.org/10.2165/00003088-200544070-00001) | [15966752](https://www.ncbi.nlm.nih.gov/pubmed/15966752) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Xie_2019.pdf` | Xie GL et al., [Effect of opioid-related gene polymorp…, Zhonghua yi xue za zhi (2019) | pgx | 5 | [10.3760/cma.j.issn.0376-2491.2019.47.009](https://doi.org/10.3760/cma.j.issn.0376-2491.2019.47.009) | [31874497](https://www.ncbi.nlm.nih.gov/pubmed/31874497) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-10-04T19:28:29.697442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aksoylu_2025 | not_relevant | 0 | 0 | The paper investigates the biosynthesis of alkaloids in the opium poppy plant, not the pharmacokinetics or pharmacodynamics of opium in humans. |
| popPK | Berthold_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mitragynine and its metabolite 7-hydroxymitragynine, not opium. |
| PGx | Boysen_2023 | not_relevant | 0 | 0 | The paper is a historical review of opioid use in perioperative medicine and does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Busserolles_2020 | not_relevant | 0 | 0 | The paper is a review of opioid pharmacology and novel drug development strategies, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Elkader_2005 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics of buprenorphine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Fallah_2016 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (methadone affecting clopidogrel PK) rather than a pharmacogenomic effect of a gene variant on opium. |
| PGx | Hendijani_2022 | not_relevant | 2 | 0 | The paper is a review of general factors influencing variability in opium poppy's antidiabetic effects and does not report specific pharmacogenomic data or fitted effect sizes for PK/PD parameters. |
| PGx | Kong_2011 | not_relevant | 0 | 0 | The study investigates the in vitro CYP450 inhibition potential of Mitragyna speciosa extract, not the effect of a human gene variant on the pharmacokinetics or pharmacodynamics of opium. |
| popPK | Mirzaei_2025 | irrelevant | 0 | 0 | The paper is a longitudinal study of substance use treatment outcomes (psychosocial and behavioral) and does not report any pharmacokinetic parameters for opium. |
| PGx | Morris_2016 | not_relevant | 0 | 0 | The paper focuses on the biosynthetic gene discovery and metabolic engineering of opium alkaloids in yeast, not on human pharmacogenomics or the effect of genetic variants on drug pharmacokinetics or pharmacodynamics. |
| PGx | Narjoux_2019 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between aprepitant and opium, not a pharmacogenomic effect of a gene variant on opium PK/PD. |
| PGx | Piekoszewski_2009 | not_relevant | 1 | 0 | The paper describes an analytical method for methadone and mentions PK variability but does not report specific gene variants or genotypes. |
| popPK | Rafiemanesh_2021 | irrelevant | 0 | 0 | The paper is a dynamic epidemiological modeling study of opium dependence treatment coverage and outcomes (mortality, abstinence), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Samanani_2001 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| PD | Samanani_2001 | not_relevant | 0 | 0 | The paper focuses on the enzymatic isolation and characterization of norcoclaurine synthase in opium poppy biosynthesis, not on pharmacodynamic or exposure-response relationships of opium alkaloids. |
| popPK | Samanani_2004 | irrelevant | 0 | 0 | no_text gate: only 155 chars of text extracted (&lt; 400) |
| PD | Samanani_2004 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and enzymatic characterization of norcoclaurine synthase in biosynthesis, not on pharmacodynamic or exposure-response relationships for opium. |
| PGx | Shojaeepour_2018 | not_relevant | 0 | 0 | The study investigates the effect of genetic polymorphisms on blood lead levels and oxidative stress in opium users, not the pharmacokinetics or pharmacodynamics of opium itself. |
| PGx | Siu_2014 | not_relevant | 0 | 0 | The paper is a clinical review of Neonatal Abstinence Syndrome management and only mentions pharmacogenomics as a future research direction without reporting any specific genetic effects on PK/PD parameters. |
| PGx | Unterlinner_1999 | not_relevant | 0 | 0 | The paper describes the biosynthesis of morphine in the opium poppy plant, not the pharmacogenomics of drug metabolism in humans. |
| PGx | Xie_2019 | not_relevant | 4 | 8 | The study reports an association between genotypes and the clinical outcome of opioid tolerance (requiring high doses), but does not report specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., ED50, receptor binding) parameter changes. |
| PGx | Ziegler_2005 | not_relevant | 0 | 0 | The paper investigates the plant biosynthesis of morphine in Papaver somniferum, not the pharmacogenomics of human drug metabolism or response. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 19:28 UTC</sub>
