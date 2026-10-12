<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;alitretinoin&quot;}]"></div>

# alitretinoin

- **generic name:** alitretinoin
- **ATC codes:** `D11AH04`, `L01XF02`, `L01XX22`
- **DrugBank:** [DB00523](https://go.drugbank.com/drugs/DB00523) · **PubChem:** [CID 449171](https://pubchem.ncbi.nlm.nih.gov/compound/449171)
- **molar mass:** 300.4351 g/mol (C20H28O2) — DrugBank
- **groups:** approved

## About

Alitretinoin is a retinoid used to treat Kaposi's sarcoma, including AIDS-related cases, and certain skin conditions. It is an approved medicine, though one European Union product has been withdrawn; it is used mainly in dermatology and cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3611854](https://www.wikidata.org/wiki/Q3611854) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:45 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 21,345/457 | einfracz / qwen3.8-27b | 4 | 0/1 | 3/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Al-Dhubaibi_2018_PGA](drugs/drug_alitretinoin/pd_Al_Dhubaibi_2018_PGA.md) | physician global assessment ← alitretinoin · inhibition effect | — | Al-Dhubaibi MS et al., The effectiveness of alitretinoin for t…, International journal of he… (2018) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alitretinoin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CRABP1 (target), CRABP2 (target), CYP26C1 (unknown), IGFBP3 (unknown), PSG5 (unknown), RARA (target), RARB (target), RARG (target), RXRA (target), RXRB (target), RXRG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Heitel_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of LXR agonism and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for alitretinoin. |
| popPK | Schmith_2015 | irrelevant | 1 | 0 | The paper focuses on longitudinal dose-response modeling for efficacy (PGA) and safety (triglycerides) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for alitretinoin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
