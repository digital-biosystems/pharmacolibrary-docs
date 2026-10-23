<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;firmonertinib&quot;}]"></div>

# firmonertinib

- **generic name:** firmonertinib
- **ATC codes:** `L01EB12`
- **DrugBank:** [DB16087](https://go.drugbank.com/drugs/DB16087) · **PubChem:** not captured
- **molar mass:** 568.605 g/mol (C28H31F3N8O2) — DrugBank
- **groups:** investigational

## About

Firmonertinib is an investigational EGFR tyrosine kinase inhibitor being studied as an anticancer treatment. It is not yet approved; it remains in clinical development and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q140641519](https://www.wikidata.org/wiki/Q140641519) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| AST5902 | metabolite | 554.577 | C27H29F3N8O2 | PubChem | [146405881](https://pubchem.ncbi.nlm.nih.gov/compound/146405881) | Zou_2022 |
| furmonertinib (AST2818) | metabolite | 568.604 | C28H31F3N8O2 | PubChem | [118861389](https://pubchem.ncbi.nlm.nih.gov/compound/118861389) | Zou_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [Zou_2022_reference](drugs/drug_firmonertinib/Firmonertinib_Zou2022_reference.md) | — | parent + metabolite (no model) | 10 (+2 cov.) | Zou HX et al., Effect of autoinduction and food on the…, Acta pharmacologica Sinica (2022) | [10.1038/s41401-021-00798-y](https://doi.org/10.1038/s41401-021-00798-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Liu_2020_CYP3A4_mRNA](drugs/drug_firmonertinib/pd_Liu_2020_CYP3A4_mRNA.md) | CYP3A4 mRNA expression ← alflutinib (AST2818) · direct Emax (saturable) effect | — | Liu XY et al., Alflutinib (AST2818), primarily metabol…, Acta pharmacologica Sinica (2020) | [10.1038/s41401-020-0389-3](https://doi.org/10.1038/s41401-020-0389-3) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zou_2022_A_ENZ](drugs/drug_firmonertinib/pd_Zou_2022_A_ENZ.md) | enzyme amount biomarker turnover ← furmonertinib | — | Zou HX et al., Effect of autoinduction and food on the…, Acta pharmacologica Sinica (2022) | [10.1038/s41401-021-00798-y](https://doi.org/10.1038/s41401-021-00798-y) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:47 | 4:24 | 0/1/0 | 0/0/2 | 0/0/0 | 96,115/27,880 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shi_2020.pdf` | Shi Y et al., Safety, Clinical Activity, and Pharmaco…, Journal of thoracic oncolog… (2020) | popPK | 8 | [10.1016/j.jtho.2020.01.010](https://doi.org/10.1016/j.jtho.2020.01.010) | [32007598](https://pubmed.ncbi.nlm.nih.gov/32007598) | Alflutinib (firmonertinib) was studied for PK, but no numeric disposition parameters are present in the evidence. |

<sub>queue written 2026-10-07T00:43:26.444621+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Liu_2020 | irrelevant | 0 | 0 | This is an in vitro study of alflutinib, not firmonertinib, and reports no firmonertinib PK parameters. |
| popPK | Shi_2020 | relevant | 8 | 0 | Alflutinib (firmonertinib) was studied for PK, but no numeric disposition parameters are present in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:43 UTC</sub>
