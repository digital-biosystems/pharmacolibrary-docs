# ivacaftor

- **generic name:** ivacaftor
- **ATC codes:** `R07AX02`, `R07AX30`, `R07AX31`
- **DrugBank:** [DB08820](https://go.drugbank.com/drugs/DB08820)
- **groups:** approved, investigational

## About

**Description.** Ivacaftor (also known as Kalydeco or VX-770) is a drug used for the management of Cystic Fibrosis (CF). It is manufactured and distributed by Vertex Pharmaceuticals. It was approved by the Food and Drug Administration on January 31, 2012[L768], and by Health Canada in late 2012.[L6841]  Ivacaftor is administered as a monotherapy and also administered in combination with other drugs for the management of CF.[L6814,L6979,L6847]

Cystic Fibrosis is an autosomal recessive disorder caused by one of several different mutations in the gene for the Cystic Fibrosis Transmembrane Conductance Regulator (CFTR) protein, an ion channel involved in the transport of chloride and sodium ions across cell membranes. CFTR is active in epithelial cells of organs such as of the lungs, pancreas, liver, digestive system, and reproductive tract. Alterations in the CFTR gene result in altered production, misfolding, or function of the protein and consequently abnormal fluid and ion transport across cell membranes.[A20298, A20299] As a result, CF patients produce thick, sticky mucus that clogs the ducts of organs where it is produced making patients more susceptible to complications such as infections, lung damage, pancreatic insufficiency, and malnutrition.[A20302]

Prior to the development of ivacaftor, management of CF primarily involved therapies for the control of infections, nutritional support, clearance of mucus, and management of symptoms rather than improvements in the underlying disease process or lung function (FEV1). Notably, ivacaftor was the first medication approved for the management of the underlying causes of CF (abnormalities in CFTR protein function) rather than control of symptoms.[A20297]

**Indication.** When used as monotherapy as the product Kalydeco, ivacaftor is indicated for the treatment of cystic fibrosis (CF) in patients aged one month and older who have one mutation in the CFTR gene that is responsive to ivacaftor potentiation based on clinical and/or _in vitro_ assay data.[L41320, L46337]

When used in combination with the drug [lumacaftor] as the product Orkambi, ivacaftor is indicated for the management of CF in patients aged one year and older who are homozygous for the _F508del_ mutation in the CFTR gene. If the patient’s genotype is unknown, an FDA-cleared CF mutation test should be used to detect the presence of the _F508del_ mutation on both alleles of the CFTR gene.[L43060]

When used in combination with [tezacaftor] in the product Symdeko, it is used to manage CF in patients 12 years and older who have at least one mutation in the CFTR gene or patients aged 12 or older who are shown to be homozygous for the F508del mutation.[L6814]

When used in combination with tezacaftor and [elexacaftor] in the product Trikafta, it is indicated for the treatment of cystic fibrosis in patients 12 years of age and older who have at least one _F508del_ mutation in the CFTR gene.[L9395]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 1/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 13 | 4/0 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Truong_2025](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md) | Truong NH et al., Elexacaftor/Tezacaftor/Ivacaftor Popula…, Clinical and translational… (2025) | [10.1111/cts.70245](https://doi.org/10.1111/cts.70245) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Vonk_2025](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_reference.md) | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |

## Coverage

- **PubMed hits:** 43 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Magnas_2025.pdf` | Magnas P et al., Population Pharmacokinetics of Elexacaf…, Clinical pharmacokinetics (2025) | popPK | 7 | [10.1007/s40262-025-01516-1](https://doi.org/10.1007/s40262-025-01516-1) | [40405059](https://pubmed.ncbi.nlm.nih.gov/40405059) | Ivacaftor is a subject of the ETI Pop-PK model, but only summary exposure ranges are shown here; numeric PK parameters likely require the full model tables/supplementary material not provided. |

<sub>queue written 2026-07-18T20:47:30.269090+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Magnas_2025 | relevant | 7 | 3 | Ivacaftor is a subject of the ETI Pop-PK model, but only summary exposure ranges are shown here; numeric PK parameters likely require the full model tables/supplementary material not provided. |
| popPK | Semenchuk_2024 | irrelevant | 0 | 0 | This is a COVID-19 outcomes study in cystic fibrosis, not a pharmacokinetic study of ivacaftor, and no ivacaftor PK parameters are reported. |
| popPK | Steinberg_2025 | irrelevant | 1 | 0 | This is a microbiome/clinical ETI paper and does not report ivacaftor population-PK parameters; any drug-related numbers are clinical outcomes, not PK values. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ivacaftor`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
