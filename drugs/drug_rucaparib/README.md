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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rucaparib | parent | 323.371 | C19H18FN3O | DrugBank | [9931954](https://pubchem.ncbi.nlm.nih.gov/compound/9931954) | Liao_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:57 | 3:10 | 0/0/1 | 1/0/1 | 0/0/0 | 137,008/10,538 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Liao_2022_reference](drugs/drug_rucaparib/Rucaparib_Liao2022_reference.md) | — | 1-compartment (no model) | 6 | Liao M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01157-8](https://doi.org/10.1007/s40262-022-01157-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schwarcz_2024_cell_proliferation](drugs/drug_rucaparib/pd_Schwarcz_2024_cell_proliferation.md) | cell proliferation ← rucaparib · direct sigmoid Emax (Hill) effect | — | Schwarcz S et al., Cytostatic Bacterial Metabolites Interf…, Molecules (Basel, Switzerla… (2024) | [10.3390/molecules29133073](https://doi.org/10.3390/molecules29133073) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2015_PARP_activity_PBL](drugs/drug_rucaparib/pd_Wang_2015_PARP_activity_PBL.md) | PARP activity in peripheral blood lymphocytes ← rucaparib · direct Emax (saturable) effect | — | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wang_2015_PARP_activity_tumor](drugs/drug_rucaparib/pd_Wang_2015_PARP_activity_tumor.md) | PARP activity in tumor tissues ← rucaparib · direct Emax (saturable) effect | — | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rucaparib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor/substrate, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC4` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` inhibitor, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP3A43 (inhibitor), PARP1 (inhibitor), PARP2 (inhibitor), PARP3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_2022.pdf` | Green ML et al., Population pharmacokinetics of rucapari…, Cancer chemotherapy and pha… (2022) | popPK | 10 | [10.1007/s00280-022-04413-7](https://doi.org/10.1007/s00280-022-04413-7) | [35397664](https://pubmed.ncbi.nlm.nih.gov/35397664) | The paper describes a population PK model for rucaparib, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Wang_2015.pdf` | Wang DD et al., PARP activity in peripheral blood lymph…, Clinical pharmacology in dr… (2015) | popPK | 10 | [10.1002/cpdd.176](https://doi.org/10.1002/cpdd.176) | [27128213](https://pubmed.ncbi.nlm.nih.gov/27128213) | The paper establishes a population PK model for rucaparib, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Konecny_2021.pdf` | Konecny GE et al., Population exposure-efficacy and exposu…, Gynecologic oncology (2021) | popPK | 5 | [10.1016/j.ygyno.2021.03.015](https://doi.org/10.1016/j.ygyno.2021.03.015) | [33752918](https://pubmed.ncbi.nlm.nih.gov/33752918) | The paper uses a population PK model for rucaparib to support exposure-response analyses, but the specific numeric disposition parameters (CL, V, etc.) are not listed in the provided text. |

<sub>queue written 2026-10-14T20:54:28.082101+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2020 | irrelevant | 0 | 0 | The study describes the in vitro synthesis and cytotoxic activity of a rucaparib conjugate, reporting no pharmacokinetic disposition parameters for rucaparib. |
| popPK | Dimitrijevs_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study synthesizing mitochondria-targeted conjugates of rucaparib and does not report any pharmacokinetic parameters. |
| popPK | Green_2022 | relevant | 10 | 2 | The paper describes a population PK model for rucaparib, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Jackson_2024 | irrelevant | 0 | 0 | The paper describes an in vitro clonogenic survival assay for glioblastoma radiosensitization, reporting EC50 and radiation interaction ratios, but contains no pharmacokinetic parameters (CL, V, ka, t1/2) for rucaparib. |
| popPK | Konecny_2021 | relevant | 5 | 0 | The paper uses a population PK model for rucaparib to support exposure-response analyses, but the specific numeric disposition parameters (CL, V, etc.) are not listed in the provided text. |
| popPK | Plummer_2013 | irrelevant | 2 | 0 | While the abstract states that population pharmacokinetics were explored, no quantitative PK parameters (CL, V, etc.) for rucaparib are provided in the text. |
| popPK | Schwarcz_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay investigating bacterial metabolite interference with drug efficacy (IC50/Hill coefficients) in 4T1 breast cancer cells, not a pharmacokinetic study reporting disposition parameters for rucaparib. |
| popPK | Wang_2015 | relevant | 10 | 0 | The paper establishes a population PK model for rucaparib, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Young_2024 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the radiolabeled analog 18F-FTT, not the clinical drug rucaparib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:54 UTC</sub>
