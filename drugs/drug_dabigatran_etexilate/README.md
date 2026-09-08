# dabigatran etexilate

- **generic name:** dabigatran etexilate
- **ATC codes:** `B01AE07`
- **DrugBank:** [DB06695](https://go.drugbank.com/drugs/DB06695)
- **groups:** approved, investigational

## About

**Description.** Dabigatran etexilate is an oral prodrug that is hydrolyzed to the competitive and reversible direct thrombin inhibitor [dabigatran].[A177463, A6970, L34675, L34680] Dabigatran etexilate may be used to decrease the risk of venous thromboembolic events in patients in whom anticoagulation therapy is indicated.[A177463] In contrast to warfarin, because its anticoagulant effects are predictable, lab monitoring is not necessary.[A177463] Dabigatran etexilate was approved by the FDA in 2010.[L6022]

**Indication.** Dabigatran etexilate is available in both oral pellet and capsule form. Dabigatran etexilate pellets are indicated for the treatment of venous thromboembolic events (VTE) in pediatric patients between three months and 12 years of age who have been treated with a parenteral anticoagulant for at least 5 days. They are also indicated in the same age group to reduce the risk of recurrence of VTE in patients who have been previously treated.[L34675]

In capsule form, dabigatran etexilate is indicated in adults to reduce the risk of stroke and systemic embolism associated with non-valvular atrial fibrillation and for the treatment of deep venous thrombosis (DVT) and pulmonary embolism (PE) in patients who have been treated with a parenteral anticoagulant for 5-10 days. It is also indicated in adults to reduce the risk of recurrence of DVT and PE in patients who have been previously treated and for the prophylaxis of DVT and PE in patients who have undergone hip replacement surgery. Lastly, it is indicated in pediatric patients between eight and 18 years of age for the treatment of venous thromboembolic events (VTE) in patients who have been treated with a parenteral anticoagulant for at least 5 days and to reduce the risk of recurrence of VTE in patients who have been previously treated.[L34680]

Dabigatran etexilate is also approved by the EMA to prevent VTE in adult patients. For pediatric patients, Dabigatran etexilate is used to treat TVE and prevent recurrent TVE for patients from birth to less than 18 years of age.[L46856]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 17:23 | 2:43 | 0/1/0 | 0/0/0 | 0/0/0 | 21,298/5,144 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2022](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Liu2022_reference.md) | Liu YO et al., Population pharmacokinetic analysis for…, Frontiers in cardiovascular… (2022) | [10.3389/fcvm.2022.998751](https://doi.org/10.3389/fcvm.2022.998751) |

## Coverage

- **PubMed hits:** 19 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Röshammar_2021.pdf` | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | popPK | 10 | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) | [33636042](https://pubmed.ncbi.nlm.nih.gov/33636042) | The paper describes a population PK model for dabigatran etexilate, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Ollier_2015.pdf` | Ollier E et al., In vitro and in vivo evaluation of drug…, Fundamental & clinical phar… (2015) | popPK | 9 | [10.1111/fcp.12154](https://doi.org/10.1111/fcp.12154) | [26392328](https://pubmed.ncbi.nlm.nih.gov/26392328) | The paper describes a population PK study for dabigatran etexilate, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-09-06T16:28:40.989655+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Halton_2016 | irrelevant | 2 | 0 | The study reports only a single dose-normalized trough concentration and validates an existing adult model, without providing original quantitative PK parameters (CL, V, ka) for dabigatran etexilate. |
| popPK | Liu_2024 | irrelevant | 2 | 0 | The study is a modeling/simulation paper that retrieves PK parameters from previously published literature rather than reporting original quantitative disposition parameters for dabigatran etexilate in the provided evidence. |
| popPK | Ollier_2015 | relevant | 9 | 0 | The paper describes a population PK study for dabigatran etexilate, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Röshammar_2021 | relevant | 10 | 0 | The paper describes a population PK model for dabigatran etexilate, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dabigatran_etexilate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
