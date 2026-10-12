<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;ilaprazole&quot;}]"></div>

# ilaprazole

- **generic name:** ilaprazole
- **ATC codes:** `A02BC11`
- **DrugBank:** [DB11964](https://go.drugbank.com/drugs/DB11964) · **PubChem:** [CID 214351](https://pubchem.ncbi.nlm.nih.gov/compound/214351)
- **molar mass:** 366.44 g/mol (C19H18N4O2S) — DrugBank
- **groups:** investigational

## About

Ilaprazole is a proton-pump inhibitor developed as an anti-ulcer drug for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15051261](https://www.wikidata.org/wiki/Q15051261) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ilaprazole | parent | 366.44 | C19H18N4O2S | DrugBank | [214351](https://pubchem.ncbi.nlm.nih.gov/compound/214351) | Jia_2021, Yu_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:30 | 1:09 | 0/2/0 | 0/1/0 | 0/0/0 | 78,678/5,401 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jia_2021_reference](drugs/drug_ilaprazole/Ilaprazole_Jia2021_reference.md) | — | 2-compartment (no model) | 3 | Jia R et al., Accelerating Development of Benziamidaz…, Pharmaceutics (2021) | [10.3390/pharmaceutics13030392](https://doi.org/10.3390/pharmaceutics13030392) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Yu_2023_reference](drugs/drug_ilaprazole/Ilaprazole_Yu2023_reference.md) | — | 2-compartment (no model) | 3 (+2 cov.) | Yu M et al., Population pharmacokinetic modeling of…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1306222](https://doi.org/10.3389/fphar.2023.1306222) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.625). The first reading is what the record holds.">cross-check: disputed</span> | [Jia_2021_pH](drugs/drug_ilaprazole/pd_Jia_2021_pH.md) | intra-gastric pH ← ilaprazole · indirect response — drug inhibits the production of intra-gastric pH | — | Jia R et al., Accelerating Development of Benziamidaz…, Pharmaceutics (2021) | [10.3390/pharmaceutics13030392](https://doi.org/10.3390/pharmaceutics13030392) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Leis_2021 | irrelevant | 0 | 0 | The paper investigates ilaprazole as an antiviral agent (inhibiting viral budding in cell culture) and reports EC50 values for viral release, not pharmacokinetic disposition parameters (CL, V, half-life). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:29 UTC</sub>
