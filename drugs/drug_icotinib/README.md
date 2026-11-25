<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;icotinib&quot;}]"></div>

# icotinib

- **generic name:** icotinib
- **ATC codes:** `L01EB08`
- **DrugBank:** [DB11737](https://go.drugbank.com/drugs/DB11737) · **PubChem:** [CID 22024915](https://pubchem.ncbi.nlm.nih.gov/compound/22024915)
- **molar mass:** 391.427 g/mol (C22H21N3O4) — DrugBank
- **groups:** investigational

## About

It is approved for use in China as a first-line monotherapy for patients with specific genetic mutations.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q16868421](https://www.wikidata.org/wiki/Q16868421), [Wikipedia](https://en.wikipedia.org/wiki/Icotinib?oldid=1367136717) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| icotinib | parent | 391.427 | C22H21N3O4 | DrugBank | [22024915](https://pubchem.ncbi.nlm.nih.gov/compound/22024915) | Hu_2015 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Hu_2015_reference](drugs/drug_icotinib/Icotinib_Hu2015_reference.md) | — | 1-compartment (no model) | 5 | Hu P et al., Development of population pharmacokinet…, European journal of clinica… (2015) | [10.1007/s00228-015-1864-5](https://doi.org/10.1007/s00228-015-1864-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:43 | 0:04 | 0/1/0 | 0/0/0 | 0/0/0 | 3,657/163 | einfracz / qwen3.8-27b | 4 | 0/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 7 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | The study constructs population pharmacokinetic models for icotinib, but the specific numeric parameter values are not present in the provided abstract or evidence, likely residing in the full text or supplementary material. |

<sub>queue written 2026-11-23 22:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2023 | irrelevant | 2 | 0 | The paper reports a validated analytical method and simple concentration ranges (trough/peak) for TDM, but does not report quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper describes an analytical method for TDM and reports observed concentration ranges but does not investigate the impact of gene variants or genotypes on pharmacokinetic parameters. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (ORR, PFS, OS) rather than pharmacokinetic parameters. |
| PGx | Xu_2018 | not_relevant | 0 | 0 | The study evaluates clinical outcomes (efficacy and safety) in patients with unknown EGFR mutation status and does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Yong_2025 | relevant | 7 | 0 | The study constructs population pharmacokinetic models for icotinib, but the specific numeric parameter values are not present in the provided abstract or evidence, likely residing in the full text or supplementary material. |
| PGx | Yong_2025 | not_relevant | 1 | 0 | The study focuses on population pharmacokinetics and exposure-driven adverse events, but does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bicotinib%5D&body=Drug%3A%20icotinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_icotinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 22:42 UTC</sub>
