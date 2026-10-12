<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;methocarbamol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methocarbamol_Rumpler2014_reference&quot;,&quot;label&quot;:&quot;Rumpler_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methocarbamol/Methocarbamol_Rumpler2014_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# methocarbamol

- **generic name:** methocarbamol
- **ATC codes:** `M03BA03`
- **DrugBank:** [DB00423](https://go.drugbank.com/drugs/DB00423) · **PubChem:** [CID 4107](https://pubchem.ncbi.nlm.nih.gov/compound/4107)
- **molar mass:** 241.2405 g/mol (C11H15NO5) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Methocarbamol is a centrally acting muscle relaxant used for painful muscle spasm, cramps, tetanus and inflammatory myopathy. It is an approved medicine, also approved for veterinary use, and is used fairly widely, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411456](https://www.wikidata.org/wiki/Q411456) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methocarbamol | parent | 241.24 | C11H15NO5 | DrugBank | [4107](https://pubchem.ncbi.nlm.nih.gov/compound/4107) | Rumpler_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:55 | 3:37 | 0/0/1 | 0/0/0 | 0/0/0 | 137,364/4,530 | einfracz / qwen3.8-27b | 9 | 2/0 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Rumpler_2014_reference](drugs/drug_methocarbamol/Methocarbamol_Rumpler2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Rumpler MJ et al., The pharmacokinetics of methocarbamol a…, Journal of veterinary pharm… (2014) | [10.1111/jvp.12068](https://doi.org/10.1111/jvp.12068) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rumpler_2014.pdf` | Rumpler MJ et al., The pharmacokinetics of methocarbamol a…, Journal of veterinary pharm… (2014) | popPK | 10 | [10.1111/jvp.12068](https://doi.org/10.1111/jvp.12068) | [23859819](https://pubmed.ncbi.nlm.nih.gov/23859819) | The paper reports quantitative pharmacokinetic parameters (CL, Vss, t1/2, F) for methocarbamol in horses with numeric values clearly present in the text. |
| `Knych_2016.pdf` | Knych HK et al., Pharmacokinetics of methocarbamol and p…, Journal of veterinary pharm… (2016) | popPK | 8 | [10.1111/jvp.12298](https://doi.org/10.1111/jvp.12298) | [26924025](https://pubmed.ncbi.nlm.nih.gov/26924025) | The study characterizes the pharmacokinetics of methocarbamol in horses using compartmental analysis, but no specific numeric parameter values are provided in the extracted evidence. |

<sub>queue written 2026-10-07T02:54:27.630719+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes a machine learning platform (RECOVER) for discovering synergistic drug combinations in cancer cell lines and does not contain any pharmacokinetic data or studies on methocarbamol. |
| popPK | Knych_2016 | relevant | 8 | 0 | The study characterizes the pharmacokinetics of methocarbamol in horses using compartmental analysis, but no specific numeric parameter values are provided in the extracted evidence. |
| PGx | Moody_2018 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (inhibition of opioid metabolism) involving methocarbamol, but does not report any pharmacogenomic effects (gene variants) on methocarbamol's PK or PD. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | The study focuses on the QT interval effects of buprenorphine, and methocarbamol is only mentioned as a comedication that may affect heart rate, with no pharmacokinetic parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:54 UTC</sub>
