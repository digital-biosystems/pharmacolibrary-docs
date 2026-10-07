<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;toremifene&quot;}]"></div>

# toremifene

- **generic name:** toremifene
- **ATC codes:** `L02BA02`
- **DrugBank:** [DB00539](https://go.drugbank.com/drugs/DB00539) · **PubChem:** [CID 3005573](https://pubchem.ncbi.nlm.nih.gov/compound/3005573)
- **molar mass:** 405.96 g/mol (C26H28ClNO) — DrugBank
- **groups:** approved, investigational

## About

Toremifene is an anti-estrogen medicine used to treat breast cancer. It remains authorised in the European Union and is used as hormonal anticancer therapy, though not widely.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3993743](https://www.wikidata.org/wiki/Q3993743) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:28 | 0:30 | 0/0/0 | 0/1/0 | 0/0/0 | 114,638/1,235 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mannerström_2002_WST_1](drugs/drug_toremifene/pd_Mannerstr_m_2002_WST_1.md) | cell proliferation and viability ← toremifene · direct sigmoid Emax (Hill) effect | — | Mannerström M et al., Evaluation of the cytotoxicity of selec…, Toxicology in vitro : an in… (2002) | [10.1016/s0887-2333(01)00113-8](https://doi.org/10.1016/s0887-2333(01)00113-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=toremifene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (modulator), SHBG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bessières_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on Ebola virus entry inhibitors where toremifene is used only as a positive control for antiviral activity, with no pharmacokinetic data reported. |
| popPK | González-Pérez_2003 | irrelevant | 0 | 0 | The study evaluates chronic cardiovascular and vascular effects (hemodynamics, vascular reactivity) in rats, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | González-Pérez_2003_2 | irrelevant | 0 | 0 | This is a vascular pharmacology study measuring hemodynamic effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mannerström_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of phagocytosis inhibition and cytotoxicity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mannerström_2002 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring EC50 values for retinal pigment epithelial cells, not a pharmacokinetic study of toremifene's disposition. |
| popPK | Postnikova_2018 | irrelevant | 0 | 0 | This is an in-vitro virology study using toremifene as a positive control for anti-Ebola activity, not a pharmacokinetic study. |
| popPK | Shughrue_1997 | irrelevant | 0 | 0 | The study is an in situ hybridization analysis of progesterone receptor mRNA regulation in rats, focusing on receptor expression rather than the pharmacokinetic disposition of toremifene. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening of toremifene against SARS-CoV-2 and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Zwiers_2011 | irrelevant | 0 | 0 | The study focuses on sugammadex and toremifene acts as a comparator drug in binding affinity screening, not a subject of PK parameter estimation. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
