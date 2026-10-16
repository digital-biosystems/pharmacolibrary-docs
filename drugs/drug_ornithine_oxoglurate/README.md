<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;ornithine oxoglurate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OrnithineOxoglurate_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ornithine oxoglurate

- **generic name:** ornithine oxoglurate
- **ATC codes:** `A05BA06`
- **DrugBank:** [DB00129](https://go.drugbank.com/drugs/DB00129) · **PubChem:** [CID 6262](https://pubchem.ncbi.nlm.nih.gov/compound/6262)
- **molar mass:** 132.161 g/mol (C5H12N2O2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Ornithine oxoglurate is a liver therapy drug used for liver conditions. It is approved and also considered a nutraceutical, but detailed information on how widely it is used is lacking.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410198](https://www.wikidata.org/wiki/Q410198) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ornithine (ornithine_oxoglurate) | parent | 132.161 | C5H12N2O2 | DrugBank | [6262](https://pubchem.ncbi.nlm.nih.gov/compound/6262) | Le_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:34 | 4:51 | 0/1/1 | 0/0/0 | 0/0/0 | 56,467/16,498 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Wang_2022_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Wang X et al., Population Pharmacokinetic Analysis to…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01075-1](https://doi.org/10.1007/s40262-021-01075-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Le_1997_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Le1997_reference.md) | — | general linear (no model) | 4 | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ornithine_oxoglurate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ARG1 (unknown), ARG2 (unknown), GATM (unknown), OAT (unknown), OAZ1 (unknown), OTC (unknown), SLC25A15 (unknown), SLC25A2 (unknown), SLC7A1 (unknown), SLC7A2 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 73 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Le_1997.pdf` | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | popPK | 9 | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) | [9022538](https://pubmed.ncbi.nlm.nih.gov/9022538) | The study reports quantitative pharmacokinetic parameters (absorption constant, elimination half-life) and metabolite AUCs for ornithine alpha-ketoglutarate in human burn patients. |

<sub>queue written 2026-10-04T15:29:57.439112+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-Ornithine Phenylacetate (L-OPA), not ornithine oxoglurate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 15:30 UTC</sub>
