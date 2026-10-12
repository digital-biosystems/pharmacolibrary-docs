<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;dorzolamide&quot;}]"></div>

# dorzolamide

- **generic name:** dorzolamide
- **ATC codes:** `S01EC03`, `S01EE52`
- **DrugBank:** [DB00869](https://go.drugbank.com/drugs/DB00869) · **PubChem:** [CID 5284549](https://pubchem.ncbi.nlm.nih.gov/compound/5284549)
- **molar mass:** 324.44 g/mol (C10H16N2O4S3) — DrugBank
- **groups:** approved, investigational

## About

Dorzolamide is a carbonic anhydrase inhibitor eye drop used to treat glaucoma, especially open-angle glaucoma. It is an approved medicine, widely used as an antiglaucoma ophthalmological preparation, and is also available in combination products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415401](https://www.wikidata.org/wiki/Q415401) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:46 | 0:18 | 0/0/0 | 0/0/0 | 0/0/0 | 20,675/612 | einfracz / qwen3.8-27b | 5 | 2/0 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Halim_2017_dengue_NS_3_helicase](drugs/drug_edoxudine/pd_Halim_2017_dengue_NS_3_helicase.md) | dengue NS-3 helicase · model not identified | — | Halim SA et al., Targeting Dengue Virus NS-3 Helicase by…, Frontiers in chemistry (2017) | [10.3389/fchem.2017.00088](https://doi.org/10.3389/fchem.2017.00088) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Katona_2004_IC50](drugs/drug_edoxudine/pd_Katona_2004_IC50.md) | 5-FU IC50 ← edoxudine · inhibition effect | — | Katona C et al., [Potentiation of 5-fluorouracil efficac…, Magyar onkologia (2004) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dorzolamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` substrate, `CYP2E1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CA3 (inhibitor), CA4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 72 matched, 16 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schmitz_1999.pdf` | Schmitz K et al., Population pharmacokinetics of 2% topic…, Investigative ophthalmology… (1999) | popPK | 9 | not captured | [10359348](https://pubmed.ncbi.nlm.nih.gov/10359348) | The paper reports specific pharmacokinetic parameters (half-life of absorption and elimination, peak concentrations) for dorzolamide in human aqueous humor. |

<sub>queue written 2026-10-07T18:46:17.034055+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belalcazar_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of a fixed-dose combination for glaucoma and does not report pharmacokinetic parameters for dorzolamide. |
| popPK | Inatani_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing intraocular pressure (IOP) reduction and tolerability, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2, etc.) for dorzolamide. |
| popPK | Kitazawa_1994 | irrelevant | 0 | 0 | The paper is a clinical dose-response study reporting intraocular pressure changes and side effects, with no pharmacokinetic parameters or numeric PK values reported. |
| popPK | Lippa_1992 | irrelevant | 0 | 0 | The study focuses on intraocular pressure response and duration of action (pharmacodynamics) rather than quantifying pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Strahlman_1996 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy (IOP reduction) and mechanism data (carbonic anhydrase activity) but does not provide quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for dorzolamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
