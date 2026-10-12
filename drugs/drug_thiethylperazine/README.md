<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;thiethylperazine&quot;}]"></div>

# thiethylperazine

- **generic name:** thiethylperazine
- **ATC codes:** `R06AD03`
- **DrugBank:** [DB00372](https://go.drugbank.com/drugs/DB00372) · **PubChem:** [CID 5440](https://pubchem.ncbi.nlm.nih.gov/compound/5440)
- **molar mass:** 399.616 g/mol (C22H29N3S2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Thiethylperazine is a phenothiazine antiemetic used to treat vomiting and vertigo of central nervous system origin. It has been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q372725](https://www.wikidata.org/wiki/Q372725) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:45 | 0:38 | 0/0/0 | 1/0/0 | 0/0/0 | 12,828/1,161 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zakhari_1986_T4](drugs/drug_thiethylperazine/pd_Zakhari_1986_T4.md) | plasma thyroxine (T4) biomarker turnover ← thiethylperazine | — | Zakhari NA et al., Determination of phenothiazines by char…, Talanta (1986) | [10.1016/0039-9140(86)80025-x](https://doi.org/10.1016/0039-9140(86)80025-x) |

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

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Snoeck_1995.pdf` | Snoeck E et al., Influence of age, renal and liver impai…, Psychopharmacology (1995) | pgx | 8 | [10.1007/BF02246543](https://doi.org/10.1007/BF02246543) | [8748391](https://www.ncbi.nlm.nih.gov/pubmed/8748391) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T21:45:42.998908+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DE_1964 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| popPK | Martin-Jimenez_1986 | irrelevant | 0 | 0 | The study evaluates the clinical antiemetic efficacy of thiethylperazine and does not report pharmacokinetic parameters. |
| popPK | Martin_1989 | irrelevant | 0 | 0 | The paper is a case report on cardiac toxicity from chemotherapy drugs, and thiethylperazine is mentioned only as a co-administered agent, not as a subject of pharmacokinetic study. |
| popPK | NEWLINDS_1964 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | Rotrosen_1978 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on dopaminergic antagonism and antipsychotic efficacy, containing no pharmacokinetic disposition parameters. |
| PGx | Snoeck_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of risperidone, not thiethylperazine; thiethylperazine is only mentioned as a potential confounding factor for CYP2D6 activity. |
| popPK | Zakhari_1986 | irrelevant | 0 | 0 | The paper describes a spectrophotometric assay method for measuring drug concentrations and does not report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
