# tinzaparin

- **generic name:** tinzaparin
- **ATC codes:** `B01AB10`
- **DrugBank:** [DB06822](https://go.drugbank.com/drugs/DB06822)
- **groups:** approved, investigational

## About

**Description.** Tinzaparin is a low molecular weight heparin (LMWH), produced by enzymatic depolymerization of unfractionated heparin from porcine intestinal mucosa. It is a heterogeneous mixture of with an average molecular weight between 5500 and 7500 daltons. Tinzaparin is composed of molecules with and without a special site for high affinity binding to antithrombin III (ATIII). This complex greatly accelerates the inhibition of factor Xa. It is an anticoagulant and considered an antithrombotic. Tinzaparin must be given either subcutaneously or parenterally. LMWHs are less effective at inactivating factor IIa due to their shorter length compared to unfractionated heparin.

**Indication.** Tinzaparin is used for the prevention of postoperative venous thromboembolism in patients undergoing orthopedic surgery and in patients undergoing general surgery who are at high risk of developing postoperative venous thromboembolism. It is also used for the treatment of deep vein thrombosis and/or pulmonary embolism. It is indicated for use in preventing clot formation in indwelling intravenous lines for hemodialysis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 00:52 | 3:44 | 0/2/1 | 0/0/0 | 0/0/0 | 28,895/4,805 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gouin-Thibault_2024](drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference.md) | Gouin-Thibault I et al., Tinzaparin, an alternative to subcutane…, Journal of thrombosis and h… (2024) | [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Barrett_2001](drugs/drug_tinzaparin/Tinzaparin_Barrett2001_reference.md) | Barrett JS et al., Population pharmacodynamics in patients…, International journal of cl… (2001) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Johansen_1994](drugs/drug_tinzaparin/Tinzaparin_Johansen1994_reference.md) | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barrett_2001.pdf` | Barrett JS et al., Population pharmacodynamics in patients…, International journal of cl… (2001) | popPK | 10 | not captured | [11680668](https://pubmed.ncbi.nlm.nih.gov/11680668) | The paper reports quantitative population pharmacokinetic parameters (CL, Vc, half-life) for tinzaparin with specific numeric values and confidence intervals in the text. |
| `Delavenne_2025.pdf` | Delavenne X et al., Tinzaparin Pharmacokinetics in Patients…, Thrombosis and haemostasis (2025) | popPK | 10 | [10.1055/a-2740-1841](https://doi.org/10.1055/a-2740-1841) | [41290197](https://pubmed.ncbi.nlm.nih.gov/41290197) | The paper describes a population PK study for tinzaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Kuhle_2005.pdf` | Kuhle S et al., Dose-finding and pharmacokinetics of th…, Thrombosis and haemostasis (2005) | popPK | 10 | [10.1160/TH05-03-0215](https://doi.org/10.1160/TH05-03-0215) | [16411388](https://pubmed.ncbi.nlm.nih.gov/16411388) | The study is a population PK analysis of tinzaparin in children, but the provided evidence contains only qualitative descriptions of parameters (clearance, volume) without any specific numeric values. |
| `Johansen_1994.pdf` | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | popPK | 9 | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) | [7997983](https://pubmed.ncbi.nlm.nih.gov/7997983) | The study reports quantitative PK parameters (half-lives, accumulation ratios, excretion percentages) for tinzaparin in rats, with values explicitly stated in the text. |
| `Brindley_1993.pdf` | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | popPK | 8 | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) | [8212732](https://pubmed.ncbi.nlm.nih.gov/8212732) | The study reports PK/PD modeling for tinzaparin in dogs, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters (EC50). |
| `Hainer_2002.pdf` | Hainer JW et al., Intravenous and subcutaneous weight-bas…, American journal of kidney… (2002) | popPK | 8 | [10.1053/ajkd.2002.34911](https://doi.org/10.1053/ajkd.2002.34911) | [12200805](https://pubmed.ncbi.nlm.nih.gov/12200805) | The study reports quantitative PK parameters (half-life, relative clearance) for tinzaparin in a specific population, though absolute clearance values are not explicitly provided. |

<sub>queue written 2026-09-06T06:51:20.160322+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brindley_1993 | relevant | 8 | 2 | The study reports PK/PD modeling for tinzaparin in dogs, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters (EC50). |
| popPK | Delavenne_2025 | relevant | 10 | 0 | The paper describes a population PK study for tinzaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Kuhle_2005 | relevant | 10 | 0 | The study is a population PK analysis of tinzaparin in children, but the provided evidence contains only qualitative descriptions of parameters (clearance, volume) without any specific numeric values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tinzaparin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
