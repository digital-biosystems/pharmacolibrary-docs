<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ozanimod&quot;}]"></div>

# ozanimod

- **generic name:** ozanimod
- **ATC codes:** `L04AA38`, `L04AE02`
- **DrugBank:** [DB12612](https://go.drugbank.com/drugs/DB12612) · **PubChem:** [CID 52938427](https://pubchem.ncbi.nlm.nih.gov/compound/52938427)
- **molar mass:** 404.47 g/mol (C23H24N4O3) — DrugBank
- **groups:** approved, investigational

## About

Ozanimod is an immunosuppressant used to treat relapsing-remitting multiple sclerosis and ulcerative colitis. It is an approved medicine authorised in the European Union, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098986](https://www.wikidata.org/wiki/Q21098986) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:07 | 0:31 | 0/0/0 | 1/0/0 | 0/0/0 | 23,764/2,496 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Briggs_2021_QTcP](drugs/drug_ozanimod/pd_Briggs_2021_QTcP.md) | QTcP ← Ozanimod · direct Emax (saturable) effect | — | Briggs E et al., Concentration-QTc Modeling of Ozanimod'…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12580](https://doi.org/10.1002/psp4.12580) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Briggs_2021_QTcP_2](drugs/drug_ozanimod/pd_Briggs_2021_QTcP_2.md) | QTcP ← CC112273 · direct Emax (saturable) effect | — | Briggs E et al., Concentration-QTc Modeling of Ozanimod'…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12580](https://doi.org/10.1002/psp4.12580) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Briggs_2021_QTcP_3](drugs/drug_ozanimod/pd_Briggs_2021_QTcP_3.md) | QTcP ← CC1084037 · direct Emax (saturable) effect | — | Briggs E et al., Concentration-QTc Modeling of Ozanimod'…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12580](https://doi.org/10.1002/psp4.12580) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ozanimod).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `MAOB` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate, `NAT2` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `NAT2` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADH5 (substrate), AKR1C1 (substrate), AKR1C2 (substrate), ALDH3A2 (substrate), S1PR1 (target), S1PR5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biendl_2022 | irrelevant | 0 | 0 | The paper reports antischistosomal efficacy in a mouse model, not pharmacokinetic parameters for ozanimod. |
| popPK | Briggs_2021 | irrelevant | 2 | 2 | The paper reports a concentration-QTc (pharmacodynamic) safety model rather than a population PK model, and while qualitative PK metrics like half-life are mentioned, no quantitative disposition parameters (CL, V, Q) are provided in the text. |
| popPK | Ye_2026 | irrelevant | 1 | 0 | The study focuses on the synthesis and evaluation of a new S1PR1 agonist (TYY-31), with ozanimod used only as an efficacy comparator in a mouse disease model, reporting no PK parameters for ozanimod. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
