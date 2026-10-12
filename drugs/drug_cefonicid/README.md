<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefonicid&quot;}]"></div>

# cefonicid

- **generic name:** cefonicid
- **ATC codes:** `J01DC06`
- **DrugBank:** [DB01328](https://go.drugbank.com/drugs/DB01328) · **PubChem:** [CID 43594](https://pubchem.ncbi.nlm.nih.gov/compound/43594)
- **molar mass:** 542.566 g/mol (C18H18N6O8S3) — DrugBank
- **groups:** approved

## About

Cefonicid is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057286](https://www.wikidata.org/wiki/Q5057286) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:16 | 1:06 | 0/1/0 | 1/0/0 | 0/0/0 | 40,621/1,140 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Phelps_1986_reference](drugs/drug_cefonicid/Cefonicid_Phelps1986_reference.md) | — | 1-compartment (no model) | 0 | Phelps RT et al., Multiple-dose pharmacokinetics of cefon…, Antimicrobial agents and ch… (1986) | [10.1128/AAC.29.5.913](https://doi.org/10.1128/AAC.29.5.913) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | [Benson_1993_PB](drugs/drug_cefonicid/pd_Benson_1993_PB.md) | protein binding ← cefonicid · model not identified | — | Benson JM et al., In vitro protein binding of cefonicid a…, Antimicrobial agents and ch… (1993) | [10.1128/AAC.37.6.1343](https://doi.org/10.1128/AAC.37.6.1343) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Phelps_1986.pdf` | Phelps RT et al., Multiple-dose pharmacokinetics of cefon…, Antimicrobial agents and ch… (1986) | popPK | 10 | [10.1128/AAC.29.5.913](https://doi.org/10.1128/AAC.29.5.913) | [3729349](https://pubmed.ncbi.nlm.nih.gov/3729349) | Reports a two-compartment PK model and elimination half-life range for cefonicid in humans, but specific values for clearance, volume, and intercompartmental clearance are not explicitly listed in the provided evidence text. |
| `Pochini_2008.pdf` | Pochini L et al., Interaction of beta-lactam antibiotics…, Chemico-biological interact… (2008) | pd | 4 | [10.1016/j.cbi.2008.03.003](https://doi.org/10.1016/j.cbi.2008.03.003) | [18452908](https://www.ncbi.nlm.nih.gov/pubmed/18452908) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T11:15:51.141350+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:15 UTC</sub>
