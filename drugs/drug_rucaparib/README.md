<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;rucaparib&quot;}]"></div>

# rucaparib

- **generic name:** rucaparib
- **ATC codes:** `L01XK03`
- **DrugBank:** [DB12332](https://go.drugbank.com/drugs/DB12332) · **PubChem:** [CID 9931954](https://pubchem.ncbi.nlm.nih.gov/compound/9931954)
- **molar mass:** 323.371 g/mol (C19H18FN3O) — DrugBank
- **groups:** approved, investigational

## About

Rucaparib is a PARP inhibitor anticancer drug used to treat ovarian, fallopian tube, and peritoneal cancers. It is authorised in the European Union and also has approved and investigational uses elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7376558](https://www.wikidata.org/wiki/Q7376558) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rucaparib | parent | 323.371 | C19H18FN3O | DrugBank | [9931954](https://pubchem.ncbi.nlm.nih.gov/compound/9931954) | Liao_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:40 | 1:12 | 0/0/1 | 2/0/0 | 0/0/0 | 132,852/4,043 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Liao_2022_reference](drugs/drug_rucaparib/Rucaparib_Liao2022_reference.md) | — | 1-compartment (no model) | 7 | Liao M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01157-8](https://doi.org/10.1007/s40262-022-01157-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schwarcz_2024_MTT](drugs/drug_rucaparib/pd_Schwarcz_2024_MTT.md) | cell proliferation ← rucaparib · direct sigmoid Emax (Hill) effect | — | Schwarcz S et al., Cytostatic Bacterial Metabolites Interf…, Molecules (Basel, Switzerla… (2024) | [10.3390/molecules29133073](https://doi.org/10.3390/molecules29133073) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2015_PARP_activity](drugs/drug_rucaparib/pd_Wang_2015_PARP_activity.md) | PARP activity in peripheral blood lymphocytes ← rucaparib · direct Emax (saturable) effect | — | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2015_PARP_activity_2](drugs/drug_rucaparib/pd_Wang_2015_PARP_activity_2.md) | PARP activity in tumor tissues ← rucaparib · direct Emax (saturable) effect | — | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rucaparib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor/substrate, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC4` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` inhibitor, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP3A43 (inhibitor), PARP1 (inhibitor), PARP2 (inhibitor), PARP3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_2022.pdf` | Green ML et al., Population pharmacokinetics of rucapari…, Cancer chemotherapy and pha… (2022) | popPK | 10 | [10.1007/s00280-022-04413-7](https://doi.org/10.1007/s00280-022-04413-7) | [35397664](https://pubmed.ncbi.nlm.nih.gov/35397664) | The paper is a population pharmacokinetic study of rucaparib in humans, but the provided evidence contains no numeric parameter values (CL, V, etc.). |
| `Wang_2015.pdf` | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | popPK | 10 | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) | [27128213](https://pubmed.ncbi.nlm.nih.gov/27128213) | The study reports a population PK model for rucaparib, but specific numeric disposition parameters (CL, V, Q) are not provided in the evidence text, only PK/PD parameters like IC50 and Imax. |

<sub>queue written 2026-10-06T21:39:20.972482+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2020 | irrelevant | 0 | 0 | The study describes the synthesis and in vitro cytotoxic activity of a drug-dye conjugate, reporting no pharmacokinetic parameters for rucaparib. |
| popPK | Dimitrijevs_2026 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study synthesizing mitochondria-targeted derivatives of rucaparib, with no pharmacokinetic data. |
| popPK | Green_2022 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of rucaparib in humans, but the provided evidence contains no numeric parameter values (CL, V, etc.). |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of radiation sensitivity (clonogenic survival and EC50) in GBM cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume for rucaparib. |
| popPK | Konecny_2021 | irrelevant | 2 | 0 | This is a pharmacometrics/exposure-response analysis that utilizes a previously developed PK model but does not report the quantitative PK parameters (CL, V, ka, etc.) in the provided evidence. |
| popPK | Plummer_2013 | irrelevant | 3 | 0 | The abstract mentions that population pharmacokinetics were explored, but no quantitative PK parameter values (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Schwarcz_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug-metabolite interactions on cell proliferation, not a pharmacokinetic study, and reports no PK parameters for rucaparib. |
| popPK | Wang_2015 | relevant | 10 | 2 | The study reports a population PK model for rucaparib, but specific numeric disposition parameters (CL, V, Q) are not provided in the evidence text, only PK/PD parameters like IC50 and Imax. |
| popPK | Young_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radiotracer 18F-FTT, not rucaparib itself, which is only mentioned as a structural analog. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:39 UTC</sub>
