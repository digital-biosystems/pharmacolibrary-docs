<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;demecolcine&quot;}]"></div>

# demecolcine

- **generic name:** demecolcine
- **ATC codes:** `L01CC01`
- **DrugBank:** [DB13318](https://go.drugbank.com/drugs/DB13318)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 20:01 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 1,258/236 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 3/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lopez_1997.pdf` | Lopez I et al., Effects of antimitotic agents on secret…, Cellular and molecular neur… (1997) | pd | 4 | [10.1023/a:1026350619823](https://doi.org/10.1023/a:1026350619823) | [9353587](https://www.ncbi.nlm.nih.gov/pubmed/9353587) | metadata signals extractable PD data (IC50) |
| `Urata_1985.pdf` | Urata C et al., Pharmacologic modulation of the IgE or…, International archives of a… (1985) | pd | 4 | [10.1159/000233869](https://doi.org/10.1159/000233869) | [2411672](https://www.ncbi.nlm.nih.gov/pubmed/2411672) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-15T20:01:44.151965+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agarwal_2024 | irrelevant | 0 | 0 | The paper is a biodosimetry study using demecolcine as a cytogenetic reagent to arrest cells in metaphase, not a pharmacokinetic study of demecolcine. |
| PD | Agarwal_2024 | not_relevant | 0 | 0 | The paper uses demecolcine as a standard laboratory reagent to arrest cells in metaphase for cytogenetic analysis; it does not report any pharmacodynamic or exposure-response relationship for demecolcine itself. |
| PGx | Dvorák_2000 | not_relevant | 0 | 0 | The study investigates the effect of demecolcine on CYP enzyme protein levels in vitro, not the effect of gene variants on demecolcine pharmacokinetics or pharmacodynamics. |
| PGx | Loo_2003 | not_relevant | 0 | 0 | The paper investigates the structural mechanism of P-glycoprotein ATPase activity upon drug binding, not the effect of genetic variants on demecolcine pharmacokinetics or pharmacodynamics. |
| PGx | Loo_2003_2 | not_relevant | 0 | 0 | The paper describes the structural mechanism of P-gp binding to demecolcine but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Loo_2003_3 | not_relevant | 0 | 0 | The paper investigates the mechanism of P-glycoprotein activation using a mutant protein and a chemical analog, not the effect of a human genetic variant on demecolcine pharmacokinetics or pharmacodynamics. |
| PGx | Loo_2003_4 | not_relevant | 0 | 0 | The paper investigates the structural binding mechanism of P-glycoprotein using mutagenesis and does not report pharmacogenomic effects on the PK or PD of demecolcine. |
| PGx | Loo_2006 | not_relevant | 0 | 0 | The paper investigates the structural role of P-gp TM1 in drug binding using mutagenesis and does not report pharmacogenomic effects on demecolcine PK/PD parameters. |
| popPK | Lopez_1997 | irrelevant | 0 | 0 | The paper focuses on the effects of antimitotic agents on adrenal receptors and does not report pharmacokinetic parameters for demecolcine. |
| PD | Lopez_1997 | not_relevant | 0 | 0 | The paper studies the effects of antimitotic agents on adrenal nicotinic receptors and does not mention demecolcine or report any pharmacodynamic or exposure-response data for it. |
| popPK | Scanlon_2004 | irrelevant | 0 | 0 | The paper is a mechanistic study on microsporidia infection where demecolcine is used only as a microtubule-disrupting agent, with no pharmacokinetic parameters reported. |
| PD | Scanlon_2004 | not_relevant | 0 | 0 | The paper discusses the structural relationship between mitochondria and the parasitophorous vacuole; demecolcine is mentioned only as a qualitative control for microtubule disruption, with no exposure-response or dose-response analysis or numeric PD parameters reported. |
| popPK | Starling_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pinocytosis inhibition and does not report any pharmacokinetic parameters for demecolcine. |
| PD | Starling_1983 | not_relevant | 2 | 1 | The text provides only qualitative comparisons of potency and mentions a delay in inhibition, but does not report specific numeric concentrations, IC50 values, or dose-response curves for demecolcine. |
| popPK | Urata_1985 | irrelevant | 0 | 0 | The paper focuses on cellular mechanisms of histamine release in rat basophilic leukemia cells and does not report pharmacokinetic parameters for demecolcine. |
| PD | Urata_1985 | not_relevant | 0 | 0 | The paper studies rat basophilic leukemia cells and does not mention demecolcine or report any pharmacodynamic parameters for it. |
| popPK | Yamaki_1982 | irrelevant | 0 | 0 | The paper studies the effects of geldanamycin on DNA synthesis in cell cultures and does not involve demecolcine or pharmacokinetic parameters. |
| PD | Yamaki_1982 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of geldanamycin (GDM), not demecolcine (which is only used as a synchronization agent). |
| popPK | Zeebul_2024 | irrelevant | 0 | 0 | The study is an in-vitro anticancer activity and molecular docking analysis where demecolcine is identified as a component of a plant extract, not a pharmacokinetic study. |
| PD | Zeebul_2024 | not_relevant | 2 | 1 | The paper reports IC50 values for a plant extract, not for demecolcine, and only provides a qualitative docking score for demecolcine without any concentration-effect data or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_demecolcine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
