<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;ganirelix&quot;}]"></div>

# ganirelix

- **generic name:** ganirelix
- **ATC codes:** `H01CC01`
- **DrugBank:** [DB06785](https://go.drugbank.com/drugs/DB06785) · **PubChem:** [CID 16130957](https://pubchem.ncbi.nlm.nih.gov/compound/16130957)
- **molar mass:** 1570.35 g/mol (C80H113ClN18O13) — DrugBank
- **groups:** approved, investigational

## About

Ganirelix is a hormone antagonist used to prevent premature ovulation in women undergoing assisted reproduction and fertility treatment, such as controlled ovarian stimulation. It is an approved medicine, authorised in the European Union, and is used in specialist fertility care rather than broadly in routine practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5521314](https://www.wikidata.org/wiki/Q5521314) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:21 | 0:23 | 0/0/0 | 0/1/0 | 0/0/0 | 27,379/909 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sperduti_2019_Ca2](drugs/drug_ganirelix/pd_Sperduti_2019_Ca2.md) | intracellular Ca2+ ← Ganirelix · direct Emax (saturable) effect | — | Sperduti S et al., GnRH Antagonists Produce Differential M…, International journal of mo… (2019) | [10.3390/ijms20225548](https://doi.org/10.3390/ijms20225548) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sperduti_2019_cAMP](drugs/drug_ganirelix/pd_Sperduti_2019_cAMP.md) | cAMP ← Ganirelix · direct Emax (saturable) effect | — | Sperduti S et al., GnRH Antagonists Produce Differential M…, International journal of mo… (2019) | [10.3390/ijms20225548](https://doi.org/10.3390/ijms20225548) |

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
| popPK | Nestor_1992 | irrelevant | 0 | 0 | The study reports pharmacological potency (ED50/EC50) and mechanism of action for GnRH analogs, not quantitative pharmacokinetic disposition parameters (CL, V, ka) for ganirelix. |
| popPK | Sperduti_2019 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study comparing signaling pathways and does not report pharmacokinetic disposition parameters (CL, V, half-life) for ganirelix. |
| popPK | Weiss_2006 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on pituitary cells examining LH secretion, not a pharmacokinetic study, and does not report any PK parameters for ganirelix. |
| popPK | unknown_2008 | irrelevant | 0 | 0 | The study investigates corifollitropin alfa, and ganirelix is only used as a standard-of-care GnRH antagonist without any PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
