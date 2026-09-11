# chlorobutanol

- **generic name:** chlorobutanol
- **ATC codes:** `A04AD04`
- **DrugBank:** [DB11386](https://go.drugbank.com/drugs/DB11386)
- **groups:** approved, investigational, vet_approved, withdrawn

## About

**Description.** Chlorobutanol, or chlorbutol, is an alcohol-based preservative with no surfactant activity [A32746]. It also elicits sedative-hypnotic and weak local anesthetic actions in addition to antibacterial and antifungal properties. Similar in nature to chloral hydrate, it is formed by the simple nucleophilic addition of chloroform and acetone. 

As a long-term stabilizer of multi-ingredient preparations, chlorobutanol is normally used at a concentration of 0.5%. At this concentration, it also conserves its antimicrobial activity. 

Due to the long terminal half-life of 37 days, the use of chlorobutanol as a sedative is limited because of the considerable accumulation which will occur following multiple dosing [A32743]. Chlorobutanol is a common detergent preservative in eye drops and other ophthalmic therapeutic formulations [A32744].

**Indication.** No approved therapeutic indications on its own.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 02:22 | 4:37 | 0/0/0 | 0/0/0 | 0/0/0 | 37,290/2,039 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 11 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smoak_1997.pdf` | Smoak IW et al., Chlorobutanol: maternal serum levels an…, Veterinary and human toxico… (1997) | popPK | 8 | not captured | [9311085](https://pubmed.ncbi.nlm.nih.gov/9311085) | The study reports quantitative PK parameters (half-life of 7.45 h and specific serum concentrations) for chlorobutanol in mice, though full compartmental model parameters (CL, V) are not explicitly listed in the text. |
| `Kornick_2003.pdf` | Kornick CA et al., QTc interval prolongation associated wi…, Pain (2003) | pd | 4 | [10.1016/S0304-3959(03)00205-7](https://doi.org/10.1016/S0304-3959(03)00205-7) | [14527710](https://www.ncbi.nlm.nih.gov/pubmed/14527710) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T02:22:23.697224+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aaron_2018 | irrelevant | 0 | 0 | The paper is a clinical review of ear drops for wax removal and does not report any pharmacokinetic parameters for chlorobutanol. |
| popPK | Bortolotti_2009 | irrelevant | 0 | 0 | The study is an in-vitro permeation study of desmopressin where chlorobutanol is only a comparator preservative, and no PK parameters for chlorobutanol are reported. |
| popPK | Burton_2003 | irrelevant | 0 | 0 | The paper is a clinical review of cerumenolytics for ear wax removal and does not report pharmacokinetic parameters for chlorobutanol. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study focuses on timosaponin BII for Alzheimer's disease and does not involve chlorobutanol or report its pharmacokinetic parameters. |
| popPK | Clegg_2010 | irrelevant | 0 | 0 | The paper is a systematic review of earwax removal methods and does not report pharmacokinetic parameters for chlorobutanol. |
| popPK | Cvetovich_2005 | irrelevant | 0 | 0 | The paper describes a chemical synthesis using chloretone (chlorobutanol) as a reagent, not a pharmacokinetic study of the drug. |
| popPK | Flint_1978 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of chlorobutanol's effect on hexobarbital narcosis in mice and does not report any pharmacokinetic parameters. |
| PD | Flint_1978 | not_relevant | 3 | 1 | The paper reports a qualitative dose-response relationship for chlorobutanol (5 and 10 mg/kg) on hexobarbital narcosis but provides no numeric PD parameters (e.g., EC50, Emax) or concentration-effect data in the text. |
| popPK | Gupta_1997 | irrelevant | 0 | 0 | The study is an in-vitro permeation study of ibuprofen and flurbiprofen where chlorobutanol is used only as a preservative, not as the subject drug for PK parameter estimation. |
| PD | Gupta_1997 | not_relevant | 0 | 0 | The paper investigates in vitro transcorneal permeation (PK/physicochemical properties) and the effect of preservatives on permeation, not pharmacodynamic (exposure-response) relationships for chlorobutanol. |
| popPK | Kornick_2003 | irrelevant | 0 | 0 | The paper focuses on methadone and QTc prolongation, with no evidence of chlorobutanol pharmacokinetic parameters. |
| PD | Kornick_2003 | not_relevant | 0 | 0 | The paper focuses on methadone, not chlorobutanol. |
| popPK | Lazarus_1989 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay and does not report any pharmacokinetic parameters for chlorobutanol. |
| PD | Lazarus_1989 | not_relevant | 2 | 1 | The paper mentions chlorobutanol only qualitatively as the least toxic preservative in a comparative in vitro study, without providing specific numeric dose-response parameters or curves for it. |
| popPK | Lehr_1995 | irrelevant | 0 | 0 | The paper describes a liquid chromatographic method for atropine, and chlorobutanol is only mentioned as a preservative that does not interfere with the analysis, with no pharmacokinetic data provided. |
| PD | Lehr_1995 | not_relevant | 0 | 0 | The paper describes a liquid chromatographic method for determining atropine and mentions chlorobutanol only as a preservative that does not interfere with the analysis; it contains no pharmacodynamic or exposure-response data. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ketorolac tromethamine, with chlorobutanol serving only as a bacterial inhibitor/excipient in the formulation. |
| PD | Li_2015 | not_relevant | 0 | 0 | The paper reports qualitative pharmacodynamic effects (analgesia) for ketorolac, but chlorobutanol is used only as a preservative/bacterial inhibitor with no exposure-response or dose-response analysis or numeric PD parameters reported for it. |
| popPK | Palmberg_1994 | irrelevant | 0 | 0 | The study investigates the antimicrobial efficacy of chlorobutanol in eye drops, not its pharmacokinetic disposition parameters. |
| popPK | Rice_1980 | irrelevant | 0 | 0 | The study focuses on the metabolism of fluorinated ether anesthetics, and chlorobutanol is only mentioned as a preservative that did not alter defluorination rates, with no PK parameters reported for it. |
| PD | Rice_1980 | not_relevant | 0 | 0 | The paper investigates the effect of isoniazid on anesthetic metabolism and explicitly states that chlorobutanol did not alter defluorination rates, providing no exposure-response or dose-response data for chlorobutanol. |
| popPK | Sridharan_2021 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical trials evaluating the efficacy of cerumenolytics for earwax removal, not a pharmacokinetic study, and contains no PK parameters for chlorobutanol. |
| popPK | Upmanyu_2017 | irrelevant | 0 | 0 | The paper is an analytical method development study for desmopressin acetate where chlorobutanol is only a preservative/excipient, not the subject of pharmacokinetic analysis. |
| PD | Upmanyu_2017 | not_relevant | 0 | 0 | The paper describes an analytical HPLC-fluorescence method for quantifying desmopressin and mentions chlorobutanol only as a formulation excipient/preservative, containing no pharmacodynamic or exposure-response data. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The paper is a review of acyclovir (ACV) synthesis and detection, and does not study chlorobutanol or report its pharmacokinetic parameters. |
| PD | Wei_2021 | not_relevant | 0 | 0 | The paper is a review of acyclovir synthesis and detection methods, containing no data or analysis for chlorobutanol. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_chlorobutanol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
