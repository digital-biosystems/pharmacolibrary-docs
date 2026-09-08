# citalopram

- **generic name:** citalopram
- **ATC codes:** `N06AB04`
- **DrugBank:** [DB00215](https://go.drugbank.com/drugs/DB00215)
- **groups:** approved, investigational

## About

**Description.** Citalopram is an antidepressant belonging to the class of selective _serotonin-reuptake inhibitors_ (SSRIs) widely used to treat the symptoms of depression. It is a racemic bicyclic phthalate derivate and is the only compound with a tertiary amine and 2 nitrogen-containing metabolites among all SSRIs.[A261316,A14720] Citalopram enhances serotonergic transmission through the inhibition of serotonin reuptake, and among all the SSRIs, citalopram appears to be the most selective toward serotonin reuptake inhibition.[A261316,A14720] Specifically, it has a very minimal effect on dopamine and norepinephrine transportation and virtually no affinity for muscarinic, histaminergic, or GABAergic receptors.[A261316]

Citalopram was approved by the FDA in 1998 for the treatment of depression in adults 18 years or older.[L5230]

**Indication.** Citalopram is approved by the FDA for treating adults with major depressive disorder.[L47941] It has also been used off-label to treat various diseases, including but not limited to sexual dysfunction, ethanol abuse, psychiatric conditions such as obsessive-compulsive disorder (OCD), social anxiety disorder, panic disorder, and diabetic neuropathy.[L5224,A321,A322,A261296]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 6 | 2/0 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Akil_2016](drugs/drug_citalopram/Citalopram_Akil2016_reference.md) | Akil A et al., A population pharmacokinetic model for…, Journal of pharmacokinetics… (2016) | [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Weisskopf_2020](drugs/drug_citalopram/Citalopram_Weisskopf2020_reference.md) | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |

## Coverage

- **PubMed hits:** 75 matched, 20 returned
- **screened:** 2  ·  **relevant:** 6
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Friberg_2005.pdf` | Friberg LE et al., The population pharmacokinetics of cita…, Journal of pharmacokinetics… (2005) | popPK | 10 | [10.1007/s10928-005-0022-6](https://doi.org/10.1007/s10928-005-0022-6) | [16307209](https://pubmed.ncbi.nlm.nih.gov/16307209) | The paper performs a Bayesian population pharmacokinetic analysis of citalopram overdose data and explicitly estimates compartmental parameters including clearance, volume of distribution, and absorption rate. |
| `Velez_2015.pdf` | Velez de Mendizabal N et al., A population PK model for citalopram an…, Journal of pharmacokinetics… (2015) | popPK | 10 | [10.1007/s10928-015-9448-7](https://doi.org/10.1007/s10928-015-9448-7) | [26395999](https://pubmed.ncbi.nlm.nih.gov/26395999) | The paper explicitly develops and reports quantitative population pharmacokinetic parameters for citalopram in rats using a NONMEM-based compartmental model. |
| `Wu_2020.pdf` | Wu X et al., Physiologically Based Pharmacokinetic A…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1541](https://doi.org/10.1002/jcph.1541) | [31750550](https://pubmed.ncbi.nlm.nih.gov/31750550) | The paper develops and validates a human PBPK/population model for citalopram, explicitly reporting quantitative disposition parameters such as clearance, volume of distribution, tissue partition coefficients, and absorption rates. |
| `Yin_2006.pdf` | Yin OQ et al., Phenotype-genotype relationship and cli…, Journal of clinical psychop… (2006) | popPK | 10 | [10.1097/01.jcp.0000227355.54074.14](https://doi.org/10.1097/01.jcp.0000227355.54074.14) | [16855453](https://pubmed.ncbi.nlm.nih.gov/16855453) | The paper explicitly describes a NONMEM-based population pharmacokinetic model for citalopram, reporting quantitative estimates for apparent clearance, volume of distribution, and absorption rate constant along with covariate effects. |

<sub>queue written 2026-07-18T01:46:52.879882+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2020 | irrelevant | not captured | not captured | The study focuses on acylcarnitine metabolomic profiles as biomarkers for depression phenotypes and does not measure or model any pharmacokinetic parameters for citalopram. |
| popPK | Blumenthal_2014 | irrelevant | not captured | not captured | The paper is an observational clinical study on antidepressant-associated weight gain and contains no pharmacokinetic parameters or population-PK modeling for citalopram. |
| popPK | Bosch_2026 | irrelevant | not captured | not captured | The study reports only cross-sectional serum concentrations and metabolite ratios, lacking compartmental or population pharmacokinetic modeling and disposition parameters like clearance or volume of distribution. |
| popPK | Ho_2016 | irrelevant | not captured | not captured | The paper focuses on pharmacodynamic exposure-response modeling and uses pre-calculated AUC values from a previously published population PK model rather than reporting new citalopram disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_citalopram`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
