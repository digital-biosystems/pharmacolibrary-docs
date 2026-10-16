<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;levosulpiride&quot;}]"></div>

# levosulpiride

- **generic name:** levosulpiride
- **ATC codes:** `N05AL07`
- **DrugBank:** [DB16021](https://go.drugbank.com/drugs/DB16021) · **PubChem:** not captured
- **molar mass:** 341.43 g/mol (C15H23N3O4S) — DrugBank
- **groups:** investigational

## About

Levosulpiride, the left-handed form of sulpiride, has been used to treat schizophrenia, major depressive disorder, and indigestion. It is classified as investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1452256](https://www.wikidata.org/wiki/Q1452256) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:44 | 0:16 | 0/0/0 | 0/0/1 | 0/0/0 | 7,543/610 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.99).">rat</span> | [Peris_1988_3H_ASP_release](drugs/drug_levosulpiride/pd_Peris_1988_3H_ASP_release.md) | K+-stimulated [3H]D-aspartate ([3H]ASP) release ← S-sulpiride (levosulpiride) · direct Emax (saturable) effect | — | Peris J et al., Biphasic modulation of evoked [3H]D-asp…, Synapse (New York, N.Y.) (1988) | [10.1002/syn.890020413](https://doi.org/10.1002/syn.890020413) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levosulpiride).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cho_2004.pdf` | Cho HY et al., Pharmacokinetics and bioequivalence eva…, International journal of cl… (2004) | popPK | 8 | not captured | [15049438](https://pubmed.ncbi.nlm.nih.gov/15049438) | The study reports non-compartmental pharmacokinetic parameters (AUC, Cmax, t1/2) for levosulpiride in humans, but the specific numeric mean values for these parameters are not explicitly listed in the provided abstract text, only the bioequivalence ratio point estimates. |
| `Ackerman_1984.pdf` | Ackerman DM et al., Pharmacological characterization of dop…, Archives internationales de… (1984) | pd | 4 | not captured | [6712357](https://www.ncbi.nlm.nih.gov/pubmed/6712357) | metadata signals extractable PD data (EC50) |
| `Bowery_1994.pdf` | Bowery B et al., Comparison between the pharmacology of…, British journal of pharmaco… (1994) | pd | 4 | [10.1111/j.1476-5381.1994.tb13161.x](https://doi.org/10.1111/j.1476-5381.1994.tb13161.x) | [7921615](https://www.ncbi.nlm.nih.gov/pubmed/7921615) | metadata signals extractable PD data (EC50) |
| `Peris_1988.pdf` | Peris J et al., Biphasic modulation of evoked [3H]D-asp…, Synapse (New York, N.Y.) (1988) | pd | 4 | [10.1002/syn.890020413](https://doi.org/10.1002/syn.890020413) | [2973144](https://www.ncbi.nlm.nih.gov/pubmed/2973144) | metadata signals extractable PD data (EC50) |
| `Cho_2010.pdf` | Cho HY et al., Influence of ABCB1 genetic polymorphism…, Neuroscience (2010) | pgx | 8 | [10.1016/j.neuroscience.2010.04.065](https://doi.org/10.1016/j.neuroscience.2010.04.065) | [20438811](https://www.ncbi.nlm.nih.gov/pubmed/20438811) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-14T20:44:42.330225+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ackerman_1984 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |
| popPK | Bowery_1994 | irrelevant | 0 | 0 | no_text gate: only 187 chars of text extracted (&lt; 400) |
| popPK | Cho_2004 | relevant | 8 | 3 | The study reports non-compartmental pharmacokinetic parameters (AUC, Cmax, t1/2) for levosulpiride in humans, but the specific numeric mean values for these parameters are not explicitly listed in the provided abstract text, only the bioequivalence ratio point estimates. |
| popPK | Gallagher_1985 | irrelevant | 0 | 0 | The paper describes the pharmacological activity and synthesis of a different compound (SK&F 101468) and does not report pharmacokinetic parameters for levosulpiride. |
| popPK | Gomes_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of dopamine receptor effects on potassium channels in opossum kidney cells, using sulpiride only as an antagonist, and contains no pharmacokinetic parameters for levosulpiride. |
| popPK | Hayashi_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium signaling in rat cortical neurons, not a pharmacokinetic study reporting disposition parameters for levosulpiride. |
| popPK | Peris_1988 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| popPK | Rump_1995 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of neurotransmitter release in human atria using sulpiride (not levosulpiride) as a receptor antagonist, with no pharmacokinetic parameters reported. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The text is a review of cardiac adverse effects and drug-drug interactions (CYP3A4 inhibition) without reporting specific pharmacogenomic genetic variants affecting levosulpiride. |
| popPK | Vieira-Coelho_2001 | irrelevant | 0 | 0 | The study is a mechanistic investigation of dopamine effects on sodium transport in cells, using S-sulpiride only as a receptor antagonist probe, not a PK study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
