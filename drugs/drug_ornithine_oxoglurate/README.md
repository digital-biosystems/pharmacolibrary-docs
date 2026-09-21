<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05B&quot;,&quot;href&quot;:&quot;atc/A05B.md&quot;},{&quot;label&quot;:&quot;ornithine oxoglurate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OrnithineOxoglurate_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;OrnithineOxoglurate_Le1997_reference&quot;,&quot;label&quot;:&quot;Le_1997_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Le1997_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# ornithine oxoglurate

- **generic name:** ornithine oxoglurate
- **ATC codes:** `A05BA06`
- **DrugBank:** [DB00129](https://go.drugbank.com/drugs/DB00129)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** Produced during the urea cycle, ornithine is an amino acid produced from the splitting off of urea from arginine. L-Ornithine allows for the disposal of excess nitrogen and acts as a precursor of citrulline and arginine.

**Indication.** Used for nutritional supplementation, also for treating dietary shortage or imbalance. It has been claimed that ornithine improves athletic performance, has anabolic effects, has wound-healing effects, and is immuno-enhancing.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 15:45 | 1:16 | 1/1/0 | 0/0/0 | 0/0/0 | 32,242/2,175 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Wang_2022_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Wang2022_reference.md) | Wang X et al., Population Pharmacokinetic Analysis to…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01075-1](https://doi.org/10.1007/s40262-021-01075-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Le_1997_reference](drugs/drug_ornithine_oxoglurate/OrnithineOxoglurate_Le1997_reference.md) | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ornithine_oxoglurate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Absorbed from the small intestine via a sodium-dependent active transport process…”</sub> | prose |
| metabolism | liver | <sub>“…Ornithine undergoes extensive metabolism in the liver to L-arginine, polyamines, and proli…”</sub> | prose |

<sub>Actors without a tissue in the table: ARG1 (unknown), ARG2 (unknown), GATM (unknown), OAT (unknown), OAZ1 (unknown), OTC (unknown), SLC25A15 (unknown), SLC25A2 (unknown), SLC7A1 (unknown), SLC7A2 (unknown).</sub>

## Coverage

- **PubMed hits:** 73 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Le_1997.pdf` | Le Bricon T et al., Ornithine alpha-ketoglutarate metabolis…, The American journal of cli… (1997) | popPK | 9 | [10.1093/ajcn/65.2.512](https://doi.org/10.1093/ajcn/65.2.512) | [9022538](https://pubmed.ncbi.nlm.nih.gov/9022538) | The study reports quantitative pharmacokinetic parameters (absorption constant, elimination half-life, AUC) for ornithine alpha-ketoglutarate (OKG) in a one-compartment model. |

<sub>queue written 2026-09-18T15:44:01.138506+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-Ornithine Phenylacetate (L-OPA), not ornithine oxoglurate. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ornithine_oxoglurate`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
