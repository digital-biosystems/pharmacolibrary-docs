# aminocaproic acid

- **generic name:** aminocaproic acid
- **ATC codes:** `B02AA01`
- **DrugBank:** [DB00513](https://go.drugbank.com/drugs/DB00513)
- **groups:** approved, investigational

## About

**Description.** An antifibrinolytic agent that acts by inhibiting plasminogen activators which have fibrinolytic properties.

**Indication.** For use in the treatment of excessive postoperative bleeding.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 02:43 | 2:27 | 4/0/0 | 0/0/0 | 0/0/0 | 28,402/4,533 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Eaton_2015](drugs/drug_aminocaproic_acid/AminocaproicAcid_Eaton2015_reference.md) | Eaton MP et al., Pharmacokinetics of ε-Aminocaproic Acid…, Anesthesiology (2015) | [10.1097/ALN.0000000000000616](https://doi.org/10.1097/ALN.0000000000000616) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Ross_2007](drugs/drug_aminocaproic_acid/AminocaproicAcid_Ross2007_reference.md) | Ross J et al., Pharmacokinetics and pharmacodynamics o…, American journal of veterin… (2007) | [10.2460/ajvr.68.9.1016](https://doi.org/10.2460/ajvr.68.9.1016) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Stricker_2013](drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2013_reference.md) | Stricker PA et al., Population pharmacokinetics of epsilon-…, British journal of anaesthe… (2013) | [10.1093/bja/aes507](https://doi.org/10.1093/bja/aes507) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Stricker_2015](drugs/drug_aminocaproic_acid/AminocaproicAcid_Stricker2015_reference.md) | Stricker PA et al., Population pharmacokinetics of ϵ-aminoc…, British journal of anaesthe… (2015) | [10.1093/bja/aeu459](https://doi.org/10.1093/bja/aeu459) |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eaton_2015.pdf` | Eaton MP et al., Pharmacokinetics of ε-Aminocaproic Acid…, Anesthesiology (2015) | popPK | 10 | [10.1097/ALN.0000000000000616](https://doi.org/10.1097/ALN.0000000000000616) | [25723765](https://pubmed.ncbi.nlm.nih.gov/25723765) | The paper reports a population PK model for aminocaproic acid in neonates with a specific quantitative clearance value (5.07 l/h) and dosing parameters derived from the model. |
| `Ririe_2002.pdf` | Ririe DG et al., The pharmacokinetics of epsilon-aminoca…, Anesthesia and analgesia (2002) | popPK | 10 | [10.1097/00000539-200201000-00008](https://doi.org/10.1097/00000539-200201000-00008) | [11772798](https://pubmed.ncbi.nlm.nih.gov/11772798) | The paper is a relevant PK study for aminocaproic acid, but the specific numeric parameter values are not present in the provided abstract text. |
| `Stricker_2013.pdf` | Stricker PA et al., Population pharmacokinetics of epsilon-…, British journal of anaesthe… (2013) | popPK | 10 | [10.1093/bja/aes507](https://doi.org/10.1093/bja/aes507) | [23353035](https://pubmed.ncbi.nlm.nih.gov/23353035) | The paper reports a population PK model for aminocaproic acid with explicit numeric values for clearance, intercompartmental clearance, and volumes of distribution in the text. |
| `Stricker_2015.pdf` | Stricker PA et al., Population pharmacokinetics of ϵ-aminoc…, British journal of anaesthe… (2015) | popPK | 10 | [10.1093/bja/aeu459](https://doi.org/10.1093/bja/aeu459) | [25586726](https://pubmed.ncbi.nlm.nih.gov/25586726) | The paper reports a population PK model for aminocaproic acid with explicit numeric values for clearance, volume of distribution, and intercompartmental clearance in the abstract. |
| `Maxwell_2023.pdf` | Maxwell L et al., Pharmacokinetics of aminocaproic acid i…, Journal of veterinary pharm… (2023) | popPK | 9 | [10.1111/jvp.13124](https://doi.org/10.1111/jvp.13124) | [36994984](https://pubmed.ncbi.nlm.nih.gov/36994984) | The study reports a three-compartment model and terminal half-life for aminocaproic acid in horses, but specific numeric values for clearance, volume, and intercompartmental clearance are not explicitly listed in the provided text. |

<sub>queue written 2026-09-06T02:41:41.649077+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gupta_2026 | irrelevant | 0 | 0 | The study is a clinical trial comparing blood loss outcomes, not a pharmacokinetic study, and reports no PK parameters for aminocaproic acid. |
| popPK | Janecki_1991 | irrelevant | 0 | 0 | The paper is an in-vitro study on Sertoli cell tight junctions where aminocaproic acid is used only as an antiprotease control, not as a subject drug for pharmacokinetic analysis. |
| popPK | Maxwell_2023 | relevant | 9 | 4 | The study reports a three-compartment model and terminal half-life for aminocaproic acid in horses, but specific numeric values for clearance, volume, and intercompartmental clearance are not explicitly listed in the provided text. |
| popPK | Ririe_2002 | relevant | 10 | 2 | The paper is a relevant PK study for aminocaproic acid, but the specific numeric parameter values are not present in the provided abstract text. |
| popPK | Wagner_2017 | irrelevant | 1 | 0 | The study is an in vitro assessment of drug sequestration in an ECMO circuit and does not report pharmacokinetic disposition parameters (CL, V, ka) for aminocaproic acid. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_aminocaproic_acid`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
