# fosphenytoin

- **generic name:** fosphenytoin
- **ATC codes:** `N03AB05`
- **DrugBank:** [DB01320](https://go.drugbank.com/drugs/DB01320)
- **groups:** approved, investigational

## About

**Description.** Fosphenytoin is a water-soluble phenytoin prodrug used only in hospitals for the treatment of epileptic seizures. It works by slowing down impulses in the brain that cause seizures. Its main mechanism is to block frequency-dependent, use-dependent and voltage-dependent neuronal sodium channels, and therefore limit repetitive firing of action potentials.

**Indication.** Fosphenytoin is indicated for the treatment of generalized tonic-clonic status epilepticus and for the prevention and treatment of seizures occurring during neurosurgery in adult patients. It can also be substituted, short-term, for oral phenytoin in patients aged two years and older when oral phenytoin administration is not possible.[L20619]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 00:08 | 9:50 | 1/1/0 | 0/0/0 | 0/0/0 | 66,248/22,040 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 15/1 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanaka_2013](drugs/drug_fosphenytoin/Fosphenytoin_Tanaka2013_reference.md) | Tanaka J et al., Population pharmacokinetics of phenytoi…, European journal of clinica… (2013) | [10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wainwright_2018](drugs/drug_fosphenytoin/Fosphenytoin_Wainwright2018_reference.md) | Wainwright (2018) | — |

## Coverage

- **PubMed hits:** 30 matched, 19 returned
- **screened:** 16  ·  **relevant:** 6
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moffett_2018.pdf` | Moffett BS et al., Fosphenytoin Population Pharmacokinetic…, Pediatric critical care med… (2018) | popPK | 10 | [10.1097/PCC.0000000000001627](https://doi.org/10.1097/PCC.0000000000001627) | [29927880](https://pubmed.ncbi.nlm.nih.gov/29927880) | The study is a population PK analysis of fosphenytoin, and all key model parameters (CL, Vc, Q, Vp) with their numeric estimates are directly provided in the main text and Table 2 rather than hidden in supplementary files. |
| `Coles_2015.pdf` | Coles LD et al., Use of IV fosphenytoin pharmacokinetics…, Epilepsia (2015) | popPK | 9 | [10.1111/epi.12961](https://doi.org/10.1111/epi.12961) | [25952988](https://pubmed.ncbi.nlm.nih.gov/25952988) | The study is a dedicated pharmacokinetic investigation of fosphenytoin in dogs, and all quantitative population and noncompartmental parameter values are explicitly provided in the included tables rather than hidden in supplementary material. |
| `Higuchi_2019.pdf` | Higuchi K et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2019) | popPK | 9 | [10.1097/FTD.0000000000000651](https://doi.org/10.1097/FTD.0000000000000651) | [31095070](https://pubmed.ncbi.nlm.nih.gov/31095070) | All quantitative population pharmacokinetic parameters for fosphenytoin are explicitly reported in the main text and Table 2. |
| `Empey_2013.pdf` | Empey PE et al., Therapeutic hypothermia decreases pheny…, Critical care medicine (2013) | popPK | 8 | [10.1097/CCM.0b013e318292316c](https://doi.org/10.1097/CCM.0b013e318292316c) | [23896831](https://pubmed.ncbi.nlm.nih.gov/23896831) | The population pharmacokinetic parameters are fully reported with numeric estimates in Table 2 of the main text. |
| `Ohno_2018.pdf` | Ohno Y et al., Time-Dependent Decline in Serum Phenyto…, Therapeutic drug monitoring (2018) | popPK | 8 | [10.1097/FTD.0000000000000521](https://doi.org/10.1097/FTD.0000000000000521) | [29683874](https://pubmed.ncbi.nlm.nih.gov/29683874) | Quantitative clearance averages and simulated doses are explicitly stated in the main text, though full compartmental population-PK parameters are not tabulated. |

<sub>queue written 2026-07-18T04:37:49.508333+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2008 | irrelevant | 1 | 0 | Fosphenytoin is used solely as a stable-labeled tracer to assess phenytoin pharmacokinetics, and no quantitative disposition parameters for fosphenytoin itself are reported. |
| popPK | Hagos_2019 | irrelevant | 0 | 0 | The study focuses exclusively on fentanyl pharmacokinetics, with fosphenytoin only mentioned as a concomitant inducer covariate, so no fosphenytoin PK parameters are reported. |
| popPK | Kapoor_2013 | irrelevant | 1 | 0 | This is an in vitro mechanistic study using fosphenytoin as a model prodrug to evaluate membrane permeability and enzyme kinetics, with no population pharmacokinetic parameters reported. |
| popPK | Noro_2026 | irrelevant | 1 | 0 | The study is a clinical efficacy trial that measures drug concentrations for PK-PD correlation but does not report any population pharmacokinetic parameters or numeric values in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fosphenytoin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
