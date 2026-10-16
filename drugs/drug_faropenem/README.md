<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;faropenem&quot;}]"></div>

# faropenem

- **generic name:** faropenem
- **ATC codes:** `J01DI03`
- **DrugBank:** [DB12190](https://go.drugbank.com/drugs/DB12190) · **PubChem:** [CID 65894](https://pubchem.ncbi.nlm.nih.gov/compound/65894)
- **molar mass:** 285.316 g/mol (C12H15NO5S) — DrugBank
- **groups:** investigational

## About

Faropenem is an investigational beta-lactam antibacterial drug, studied for treating bacterial infections. It is not an approved medicine in the European Union and remains in the investigational stage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1397045](https://www.wikidata.org/wiki/Q1397045) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:06 | 0:11 | 0/0/0 | 1/0/0 | 0/0/0 | 15,280/1,362 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gumbo_2020_Mab](drugs/drug_faropenem/pd_Gumbo_2020_Mab.md) | Mycobacterium abscessus subspecies abscessus (Mab) burden ← faropenem · direct sigmoid Emax (Hill) effect | — | Gumbo T et al., Repurposing drugs for treatment of Myco…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkz523](https://doi.org/10.1093/jac/dkz523) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gill_2010.pdf` | Gill SC et al., Pharmacokinetic-pharmacodynamic assessm…, Antimicrobial agents and ch… (2010) | popPK | 8 | [10.1128/AAC.00737-08](https://doi.org/10.1128/AAC.00737-08) | [20145081](https://pubmed.ncbi.nlm.nih.gov/20145081) | This is a PK/PD study in mice that likely reports clearance and volume values in the full text or tables not provided, while the extract only contains PK-PD indices (f %T(MIC)) and efficacy doses. |

<sub>queue written 2026-10-15T00:06:49.282142+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gill_2010 | relevant | 8 | 2 | This is a PK/PD study in mice that likely reports clearance and volume values in the full text or tables not provided, while the extract only contains PK-PD indices (f %T(MIC)) and efficacy doses. |
| popPK | Gumbo_2020 | irrelevant | 1 | 0 | This is an in-vitro efficacy study against Mycobacterium abscessus reporting MICs and Emax parameters, not a pharmacokinetic study of faropenem disposition. |
| popPK | Yamada_2022 | irrelevant | 1 | 0 | This is a pharmacodynamic probability of target attainment (PTA) simulation study using external population PK models rather than reporting original PK parameter estimation, and no numeric PK values for faropenem are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
