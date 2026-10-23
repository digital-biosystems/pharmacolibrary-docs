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

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zakhari_1986_T4](drugs/drug_thiethylperazine/pd_Zakhari_1986_T4.md) | plasma thyroxine (T4) biomarker turnover ← thiethylperazine | — | Zakhari NA et al., Determination of phenothiazines by char…, Talanta (1986) | [10.1016/0039-9140(86)80025-x](https://doi.org/10.1016/0039-9140(86)80025-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=thiethylperazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:45 | 0:38 | 0/0/0 | 1/0/0 | 0/0/0 | 12,828/1,161 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
