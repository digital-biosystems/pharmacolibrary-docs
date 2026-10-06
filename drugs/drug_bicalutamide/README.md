<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02A&quot;,&quot;href&quot;:&quot;atc/L02A.md&quot;},{&quot;label&quot;:&quot;bicalutamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bicalutamide_Ozaksun2025_reference&quot;,&quot;label&quot;:&quot;Ozaksun_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bicalutamide

- **generic name:** bicalutamide
- **ATC codes:** `L02AE51`, `L02BB03`
- **DrugBank:** [DB01128](https://go.drugbank.com/drugs/DB01128) · **PubChem:** [CID 2375](https://pubchem.ncbi.nlm.nih.gov/compound/2375)
- **molar mass:** 430.373 g/mol (C18H14F4N2O4S) — DrugBank
- **groups:** approved, investigational

## About

Bicalutamide is an antiandrogen medicine used to treat prostate cancer. It is an approved, widely used drug and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1988832](https://www.wikidata.org/wiki/Q1988832) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bicalutamide | parent | 430.373 | C18H14F4N2O4S | DrugBank | [2375](https://pubchem.ncbi.nlm.nih.gov/compound/2375) | Ozaksun_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:56 | 0:36 | 1/0/0 | 1/0/0 | 0/0/0 | 69,566/2,170 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ozaksun_2025_reference](drugs/drug_bicalutamide/Bicalutamide_Ozaksun2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Ozaksun NT et al., Developing In Vitro-In Vivo Correlation…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091126](https://doi.org/10.3390/pharmaceutics17091126) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Tsoi_2025_EC50](drugs/drug_bicalutamide/pd_Tsoi_2025_EC50.md) | DOX resistance biomarker turnover ← bicalutamide | — | Tsoi H et al., BQ323636.1 Employs the AR-CCRK Axis to…, Cells (2025) | [10.3390/cells14171341](https://doi.org/10.3390/cells14171341) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bicalutamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| — | prostate gland | `AR` target | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2005 | irrelevant | 0 | 0 | The study focuses on the receptor binding affinities (Ki) and pharmacological effects of DHEA, mentioning bicalutamide only as a qualitative comparator, with no pharmacokinetic parameters reported for bicalutamide. |
| popPK | Colabufo_2008 | irrelevant | 0 | 0 | The study investigates in vitro cytotoxicity and drug transporter mechanisms in cancer cell lines, not pharmacokinetic disposition parameters. |
| popPK | Jamróz_2020 | irrelevant | 0 | 0 | The paper focuses on the preparation and dissolution characterization of 3D-printed tablets (in vitro) and does not report in vivo pharmacokinetic parameters such as clearance, volume, or half-life for bicalutamide. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | The study is an in-vitro cell assay investigating the androgen receptor activity of UV filters, with bicalutamide serving only as a positive control and providing no pharmacokinetic disposition parameters. |
| popPK | Myint_2020 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of fall and fracture risks, not a pharmacokinetic study, and bicalutamide is only mentioned as a potential control agent. |
| popPK | Ozers_2007 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of androgen receptor binding that uses bicalutamide as a ligand, not a pharmacokinetic study. |
| popPK | Tsoi_2025 | irrelevant | 0 | 0 | The paper is an in-vitro and in-vivo mechanistic study on breast cancer resistance where bicalutamide is used as an androgen receptor inhibitor tool compound, not as a subject of pharmacokinetic analysis. |
| popPK | Wang_1998 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using bicalutamide as a comparator/positive control, not a pharmacokinetic study. |
| popPK | Xie_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of VIP signaling and androgen receptor transactivation, using bicalutamide only as a tool compound (AR antagonist) rather than characterizing its pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:55 UTC</sub>
