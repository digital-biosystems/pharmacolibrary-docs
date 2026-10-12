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
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mannerström_2002_WST_1](drugs/drug_toremifene/pd_Mannerstr_m_2002_WST_1.md) | cell proliferation and viability ← toremifene · direct sigmoid Emax (Hill) effect | — | Mannerström M et al., Evaluation of the cytotoxicity of selec…, Toxicology in vitro : an in… (2002) | [10.1016/s0887-2333(01)00113-8](https://doi.org/10.1016/s0887-2333(01)00113-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=toremifene).

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
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
