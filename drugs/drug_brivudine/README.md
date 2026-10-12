<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;brivudine&quot;}]"></div>

# brivudine

- **generic name:** brivudine
- **ATC codes:** `J05AB15`
- **DrugBank:** [DB03312](https://go.drugbank.com/drugs/DB03312) · **PubChem:** [CID 446727](https://pubchem.ncbi.nlm.nih.gov/compound/446727)
- **molar mass:** 333.135 g/mol (C11H13BrN2O5) — DrugBank
- **groups:** approved, investigational

## About

Brivudine is an antiviral drug used to treat herpesvirus infections, mainly shingles caused by varicella-zoster virus. It is approved and used in some European countries, but is not available everywhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904107](https://www.wikidata.org/wiki/Q904107) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:55 | 0:13 | 0/0/0 | 0/1/0 | 0/0/0 | 17,904/736 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Kodama_1996_EC50](drugs/drug_brivudine/pd_Kodama_1996_EC50.md) | HSV-induced cytopathogenicity in MKN-28 cells (MTT assay) ← brivudine (BVDU) · inhibition effect | — | Kodama E et al., Evaluation of antiherpetic compounds us…, Microbiology and immunology (1996) | [10.1111/j.1348-0421.1996.tb01080.x](https://doi.org/10.1111/j.1348-0421.1996.tb01080.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2014 | irrelevant | 1 | 1 | The paper is about a different drug (l-BHDU); brivudine is only a comparator and no quantitative PK parameters for brivudine are reported. |
| PGx | Flickinger_2024 | not_relevant | 4 | 3 | Reports gene knockouts (TK2, ABCC4, SHMT2) altering BVDU sensitivity in cancer cells, but no clinical PK/PD parameter or pharmacogenomic effect size is quantified. |
| popPK | Kodama_1996 | irrelevant | 0 | 0 | In-vitro antiviral efficacy screening (EC50 values), no pharmacokinetic disposition parameters for brivudine. |
| popPK | Neyts_1997 | irrelevant | 0 | 0 | In-vitro antiviral potency study (EC50 values), no pharmacokinetic disposition parameters for brivudine. |
| popPK | Shiota_2011 | irrelevant | 0 | 0 | In-vitro antiviral sensitivity assay with no PK parameters for brivudine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
