# dabrafenib

- **generic name:** dabrafenib
- **ATC codes:** `L01EC02`
- **DrugBank:** [DB08912](https://go.drugbank.com/drugs/DB08912)
- **groups:** approved, investigational

## About

**Description.** Dabrafenib mesylate (Tafinlar) is a reversible ATP-competitive kinase inhibitor and targets the MAPK pathway. It was approved on May 29, 2013, for the treatment of melanoma with V600E or V6000K mutation.[L41955] It was also used for metastatic non-small cell lung cancer with the same mutation.[L41955]

In May 2018, Tafinlar (dabrafenib), in combination with Mekinist ([DB08911]), was approved to treat anaplastic thyroid cancer caused by an abnormal BRAF V600E gene.[L41955]

**Indication.** As monotherapy, dabrafenib is indicated to treat unresectable or metastatic melanoma with BRAF V600E mutation as detected by an FDA-approved test.[L41955] 

In combination with [trametinib], dabrafenib is indicated to treat for:

- the treatment of unresectable or metastatic melanoma with BRAF V600E or V600K mutations as detected by an FDA-approved test.[L41955]
- the adjuvant treatment of melanoma with BRAF V600E or V600K mutations and involvement of lymph node(s), following complete resection.[L41955]
- the treatment of metastatic non-small cell lung cancer (NSCLC) with BRAF V600E mutation.[L41955]
- the treatment of locally advanced or metastatic anaplastic thyroid cancer (ATC) with BRAF V600E mutation and with no satisfactory locoregional treatment options.[L41955]
- treatment of adult and pediatric patients six years and older with unresectable or metastatic solid tumours with BRAF V600E mutation who have progressed following prior treatment and have no satisfactory alternative treatment options. This indication is approved under accelerated approval based on the overall response rate and duration of response. Continued approval for this indication may be contingent upon verification and description of clinical benefit in a confirmatory trial(s).[L45548]
- the treatment of pediatric patients one year of age and older with low-grade glioma (LGG) with a BRAF V600E mutation who require systemic therapy.[L45548]

Dabrafenib has limitations of use: it is neither indicated for treating patients with colorectal cancer because of known intrinsic resistance to BRAF inhibition nor wild-type BRAF solid tumours.[L45548]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 11 | 1/0 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Balakirouchenane_2020](drugs/drug_dabrafenib/Dabrafenib_Balakirouchenane2020_reference.md) | Balakirouchenane D et al., Population Pharmacokinetics/Pharmacodyn…, Cancers (2020) | [10.3390/cancers12040931](https://doi.org/10.3390/cancers12040931) |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ouellet_2014.pdf` | Ouellet D et al., Population pharmacokinetics of dabrafen…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.263](https://doi.org/10.1002/jcph.263) | [24408395](https://pubmed.ncbi.nlm.nih.gov/24408395) | The paper explicitly presents a population pharmacokinetic model for dabrafenib with quantitative estimates of clearance, volume of distribution, intercompartmental clearance, and absorption rate derived from clinical data. |
| `Janssen_2020.pdf` | Janssen JM et al., Evaluation of Extrapolation Methods to…, Therapeutic drug monitoring (2020) | popPK | 8 | [10.1097/FTD.0000000000000767](https://doi.org/10.1097/FTD.0000000000000767) | [32384536](https://pubmed.ncbi.nlm.nih.gov/32384536) | The paper explicitly describes and tabulates a two-compartment population PK model with quantitative disposition parameters for dabrafenib. |

<sub>queue written 2026-07-18T02:32:08.266846+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Isberner_2022 | irrelevant | not captured | not captured | The study relies on a previously published population PK model to derive empirical Bayesian estimates and reports observed concentrations, but does not present new quantitative disposition parameters or a novel compartmental/popPK model for dabrafenib. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_dabrafenib`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
