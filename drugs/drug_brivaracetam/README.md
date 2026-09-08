# brivaracetam

- **generic name:** brivaracetam
- **ATC codes:** `N03AX23`
- **DrugBank:** [DB05541](https://go.drugbank.com/drugs/DB05541)
- **groups:** approved, investigational

## About

**Description.** Brivaracetam is a racetam derivative of levetiracetam used in the treatment of partial-onset seizures. Brivaracetam binds SV2A with 20 times higher affinity than levetiracetam [A19184]. It is available under the brand name Briviact made by UCB. Briviact received FDA approval on February 19, 2016 [L760].

**Indication.** Used as adjunctive therapy for partial-onset seizures in patients 16 years of age or older.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-30 17:55 | 3:09 | 0/1/0 | 0/0/0 | 0/0/0 | 21,320/960 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Schoemaker_2017_2](drugs/drug_brivaracetam/Brivaracetam_Schoemaker2017v2_reference.md) | Schoemaker (2017) | — |

## Coverage

- **PubMed hits:** 19 matched, 16 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schoemaker_2016.pdf` | Schoemaker R et al., Brivaracetam Population Pharmacokinetic…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.761](https://doi.org/10.1002/jcph.761) | [27146213](https://pubmed.ncbi.nlm.nih.gov/27146213) | The paper is a population PK study for brivaracetam, but the provided evidence contains only qualitative descriptions and relative changes (e.g., % decrease in exposure) without specific numeric parameter values (CL, V, etc.). |
| `Brochot_2010.pdf` | Brochot A et al., Physiologically based pharmacokinetic/p…, Basic & clinical pharmacolo… (2010) | popPK | 8 | [10.1111/j.1742-7843.2009.00536.x](https://doi.org/10.1111/j.1742-7843.2009.00536.x) | [20102365](https://pubmed.ncbi.nlm.nih.gov/20102365) | The paper describes a PBPK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Jukier_2024.pdf` | Jukier T et al., Single intravenous and oral dose pharma…, Journal of veterinary pharm… (2024) | popPK | 8 | [10.1111/jvp.13473](https://doi.org/10.1111/jvp.13473) | [39018069](https://pubmed.ncbi.nlm.nih.gov/39018069) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, AUC, t1/2, F) for brivaracetam in cats, which are explicitly listed in the text. |
| `Schoemaker_2017.pdf` | Schoemaker R et al., Evaluation of brivaracetam efficacy as…, Epilepsy research (2017) | popPK | 8 | [10.1016/j.eplepsyres.2017.09.014](https://doi.org/10.1016/j.eplepsyres.2017.09.014) | [28982069](https://pubmed.ncbi.nlm.nih.gov/28982069) | The paper describes a population PK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-08-30T17:53:10.057082+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aicua-Rapun_2019 | irrelevant | 2 | 0 | The study is a clinical correlation analysis of loading doses and response, not a PK parameter estimation study, and it does not report quantitative disposition parameters (CL, V, etc.) for brivaracetam. |
| popPK | Brochot_2010 | relevant | 8 | 0 | The paper describes a PBPK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Laurell_2023 | irrelevant | 1 | 0 | The study focuses on PET kinetic modeling for target occupancy in pigs, not on the pharmacokinetic disposition parameters (CL, V, etc.) of brivaracetam. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | The paper is a simulation study using existing population PK models for 14 drugs, and the specific numeric parameter values for brivaracetam are not reported in the provided evidence. |
| popPK | Schoemaker_2016 | relevant | 10 | 0 | The paper is a population PK study for brivaracetam, but the provided evidence contains only qualitative descriptions and relative changes (e.g., % decrease in exposure) without specific numeric parameter values (CL, V, etc.). |
| popPK | Schoemaker_2017 | relevant | 8 | 0 | The paper describes a population PK model for brivaracetam, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_brivaracetam`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
