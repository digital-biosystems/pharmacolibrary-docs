# drotaverine

- **generic name:** drotaverine
- **ATC codes:** `A03AD02`
- **DrugBank:** [DB06751](https://go.drugbank.com/drugs/DB06751)
- **groups:** approved, withdrawn

## About

**Description.** Drotaverine is an antispasmodic drug that works by inhibiting phosphodiesterase-4 (PDE4).[A231619] It is a benzylisoquinoline derivative that is structurally related to [papaverine], although it displays more potent antispasmodic activities than papaverine. Drotaverine has been used in the symptomatic treatment of various spastic conditions, such as gastrointestinal diseases, biliary dyskinesia, and vasomotor diseases associated with smooth muscle spasms.[A7036] It also has been investigated in dysmenorrhea, abortion, [A231609] and augmentation of labour.[A231614] More recently, drotaverine gained attention in the treatment of benign prostatic hyperplasia, parainfluenza, and avian influenza viruses.[A231619]

Drotaverine is not approved by the FDA, European Medicines Agency, or Health Canada. It is approved for use in Thailand as oral tablets or intramuscular injections.[L22689]

**Indication.** Drotaverine is used to alleviate gastrointestinal and genitourinary smooth muscle spasms, such as cholecystitis and gallbladder disorders.[L22689]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 22:35 | 2:31 | 0/0/0 | 0/0/0 | 0/0/0 | 8,384/1,025 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 11 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rutz-Coudray_1979.pdf` | Rutz-Coudray MH et al., [The usefulness of compartmental analys…, Pharmaceutica acta Helvetiae (1979) | popPK | 10 | not captured | [515108](https://pubmed.ncbi.nlm.nih.gov/515108) | The title indicates a compartmental analysis study for drotaverine in humans, but no numeric parameter values are present in the provided evidence. |
| `Vargay_1984.pdf` | Vargay Z et al., The fate of drotaverine-acephyllinate i…, European journal of drug me… (1984) | popPK | 9 | [10.1007/BF03189602](https://doi.org/10.1007/BF03189602) | [6546919](https://pubmed.ncbi.nlm.nih.gov/6546919) | The paper describes a human PK study of drotaverine with a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Kapui_1992.pdf` | Kapui Z et al., Comparative studies of drotaverine--ace…, Thrombosis research (1992) | pd | 4 | [10.1016/0049-3848(92)90045-c](https://doi.org/10.1016/0049-3848(92)90045-c) | [1519228](https://www.ncbi.nlm.nih.gov/pubmed/1519228) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-10T22:35:44.014280+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kapui_1992 | irrelevant | 0 | 0 | The evidence contains only the title of a comparative study and no pharmacokinetic data or numeric parameters for drotaverine. |
| PD | Kapui_1992 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |
| popPK | Kraupp_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on purine transport inhibition where drotaverine is only a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Kraupp_1994 | not_relevant | 1 | 0 | The paper reports IC50 values for papaverine and qualitatively describes drotaverine as a "moderately inhibitory" analog, but provides no numeric PD parameters (IC50, Ki, Emax) for drotaverine. |
| popPK | Pavel_2017 | irrelevant | 0 | 0 | The paper describes the cytostatic mechanism of action of drotaverine in cell lines and does not report any pharmacokinetic parameters. |
| popPK | Rutz-Coudray_1979 | relevant | 10 | 0 | The title indicates a compartmental analysis study for drotaverine in humans, but no numeric parameter values are present in the provided evidence. |
| popPK | Tarachowski_1991 | irrelevant | 0 | 0 | The paper discusses drotaverine only as a comparator drug in a study on pharmacotherapeutic forecasting using aminophenazone, and no quantitative PK parameters for drotaverine are reported. |
| PD | Tarachowski_1991 | not_relevant | 1 | 0 | The text mentions drotaverine and pharmacodynamics in the context of developing mathematical models for forecasting efficiency, but it does not provide any specific numeric PD parameters, concentration-effect curves, or detailed exposure-response data for drotaverine. |
| popPK | Tömösközi_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drotaverine's interaction with calcium channels, reporting binding affinity (IC50, KD, Bmax) rather than pharmacokinetic disposition parameters. |
| popPK | Vargay_1984 | relevant | 9 | 0 | The paper describes a human PK study of drotaverine with a compartmental model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Weng_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of HZ08, using drotaverine only as an internal standard for quantification. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_drotaverine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
