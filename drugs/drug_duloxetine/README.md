# duloxetine

- **generic name:** duloxetine
- **ATC codes:** `N06AX21`
- **DrugBank:** [DB00476](https://go.drugbank.com/drugs/DB00476)
- **groups:** approved, investigational

## About

**Description.** Duloxetine is a dual serotonin and norepinephrine reuptake inhibitor.[label] It was originally discovered in 1993 and developed by Eli Lilly and Company as LY248686.[A178741] Duloxetine first received approval from the FDA in August, 2004 as Cymbalta for the treatment of Major Depressive Disorder.[L6454] It has since received approval for a variety of indications including the treatment of neuropathic pain, Generalized Anxiety disorder, osteoarthritis, and stress incontinence. Duloxetine continues to be investigated for the treatment of pain in cancer, surgery, and more.

**Indication.** **Indicated** for:

1) Management of Major Depressive Disorder.[label]

2) Management of Generalized Anxiety Disorder.[label]

3) Management of diabetic peripheral neuropathy.[label]

4) Management of fibromyalgia.[label]

5) Management of chronic musculoskeletal pain.[label]

6) Management of osteoarthritis of the knee in adults.[L6364]

7) Management of chronic lower back pain in adults.[L6364]

8) Management of stress urinary incontinence in adult women.[L6367]

**Off-label** uses include:

1) Management of chemotherapy-induced peripheral neuropathy.[A178603]

2) Management of stress urinary incontinence in adult men after prostatectomy until recovery is complete.[L6370]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 13 | 3/0 | 5/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Skinner_2004](drugs/drug_duloxetine/Duloxetine_Skinner2004_reference.md) | Skinner MH et al., Effect of age on the pharmacokinetics o…, British journal of clinical… (2004) | [10.1046/j.1365-2125.2003.01963.x](https://doi.org/10.1046/j.1365-2125.2003.01963.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Ngo_2020](drugs/drug_duloxetine/Duloxetine_Ngo2020_reference.md) | Ngo TL et al., Application of an Inter-Species Extrapo…, International journal of mo… (2020) | [10.3390/ijms21051862](https://doi.org/10.3390/ijms21051862) |

## Coverage

- **PubMed hits:** 47 matched, 35 returned
- **screened:** 2  ·  **relevant:** 6
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lobo_2009.pdf` | Lobo ED et al., Population pharmacokinetics of orally a…, Clinical pharmacokinetics (2009) | popPK | 10 | [10.2165/00003088-200948030-00005](https://doi.org/10.2165/00003088-200948030-00005) | [19385712](https://pubmed.ncbi.nlm.nih.gov/19385712) | The paper explicitly reports a population pharmacokinetic model for duloxetine in humans with quantitative parameters including CL/F, Vd/F, ka, and interpatient variability. |
| `Lobo_2014.pdf` | Lobo ED et al., Pharmacokinetics of orally administered…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-014-0149-y](https://doi.org/10.1007/s40262-014-0149-y) | [24989060](https://pubmed.ncbi.nlm.nih.gov/24989060) | The paper explicitly presents a population pharmacokinetic analysis of duloxetine in pediatric patients, providing quantitative estimates for CL/F, Vd/F, ka, and variability parameters. |
| `Sharma_2000.pdf` | Sharma A et al., Pharmacokinetics and safety of duloxeti…, Journal of clinical pharmac… (2000) | popPK | 9 | [10.1177/00912700022008810](https://doi.org/10.1177/00912700022008810) | [10664922](https://pubmed.ncbi.nlm.nih.gov/10664922) | The paper reports quantitative compartmental pharmacokinetic parameters (CL/F, V/F, ka, and half-life) for duloxetine derived from a one-compartment model in humans. |
| `Tianmei_2007.pdf` | Tianmei S et al., Pharmacokinetics and tolerability of du…, Clinical pharmacokinetics (2007) | popPK | 9 | [10.2165/00003088-200746090-00004](https://doi.org/10.2165/00003088-200746090-00004) | [17713974](https://pubmed.ncbi.nlm.nih.gov/17713974) | The paper explicitly reports quantitative disposition parameters (CL/F, Vss/F, t1/2) and characterizes duloxetine using a one-compartment pharmacokinetic model in healthy human subjects. |

<sub>queue written 2026-07-18T03:44:15.239556+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | not captured | not captured | Duloxetine is only a co-administered covariate in a quetiapine population-PK model, with no quantitative pharmacokinetic parameters reported for duloxetine itself. |
| popPK | Furukawa_2018 | irrelevant | not captured | not captured | The paper is a clinical efficacy meta-analysis focusing on depression symptom scores and contains no pharmacokinetic data or modeling for duloxetine. |
| popPK | Wang_2017 | irrelevant | 1 | 1 | This is a clinical efficacy trial for pain in OA and contains no population-PK model or numeric duloxetine disposition parameters; any PK mention is only a general reference to prior studies. |
| popPK | Yuen_2013 | irrelevant | not captured | not captured | The paper focuses on pharmacodynamic modeling of pain scores and relies on an external population PK model for duloxetine concentrations, without reporting new quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_duloxetine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
