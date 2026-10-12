<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;secobarbital&quot;}]"></div>

# secobarbital

- **generic name:** secobarbital
- **ATC codes:** `N05CA06`
- **DrugBank:** [DB00418](https://go.drugbank.com/drugs/DB00418) · **PubChem:** [CID 5193](https://pubchem.ncbi.nlm.nih.gov/compound/5193)
- **molar mass:** 238.2829 g/mol (C12H18N2O3) — DrugBank
- **groups:** approved, vet_approved

## About

Secobarbital is a barbiturate sedative-hypnotic used to treat insomnia. It remains an approved medicine, including for veterinary use, though barbiturate sleeping pills are now used only rarely and largely in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414788](https://www.wikidata.org/wiki/Q414788) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:18 | 0:41 | 0/0/0 | 0/0/0 | 0/0/0 | 19,878/678 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 7 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | Secobarbital PK (two-compartment model) studied in intoxicated patients, but no numeric parameter values appear in the evidence. |
| `Hartley_1989.pdf` | Hartley DM et al., Delayed rescue of N-methyl-D-aspartate…, The Journal of pharmacology… (1989) | pd | 5 | not captured | [2569534](https://www.ncbi.nlm.nih.gov/pubmed/2569534) | metadata signals extractable PD data (EC50) |
| `Wong_1984.pdf` | Wong EH et al., gamma-Aminobutyric acid activation of 3…, Brain research (1984) | pd | 4 | [10.1016/0006-8993(84)91213-7](https://doi.org/10.1016/0006-8993(84)91213-7) | [6331574](https://www.ncbi.nlm.nih.gov/pubmed/6331574) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T21:18:16.510060+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chan_1994 | irrelevant | 0 | 0 | Secobarbital is only a co-administered enzyme inducer altering warfarin PK; no secobarbital disposition parameters are reported. |
| popPK | Hartley_1989 | irrelevant | 0 | 0 | Secobarbital is only a co-applied test agent in an in-vitro neuroprotection assay; no PK parameters reported. |
| popPK | Login_1998 | irrelevant | 0 | 0 | Secobarbital is only used as a co-administered GabaA modulator in a rat neurochemistry assay; no PK parameters reported. |
| PGx | Sakuma_1999 | not_relevant | 2 | 3 | Secobarbital is only used as a CYP1A2 inducer in vitro; no gene variant effect on secobarbital PK/PD is reported. |
| popPK | Verpooten_1982 | relevant | 7 | 2 | Secobarbital PK (two-compartment model) studied in intoxicated patients, but no numeric parameter values appear in the evidence. |
| popPK | Wong_1984 | irrelevant | 0 | 0 | In-vitro mechanistic study of GABA/36Cl- flux in rat hippocampal slices; secobarbital is only a co-applied agent with no PK parameters. |
| popPK | Yost_1993 | irrelevant | 0 | 0 | In-vitro electrophysiology study of receptor inhibition; no PK disposition parameters for secobarbital. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
