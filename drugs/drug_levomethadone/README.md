<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levomethadone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levomethadone_Gittel2021v2_reference&quot;,&quot;label&quot;:&quot;Gittel_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# levomethadone

- **generic name:** levomethadone
- **ATC codes:** `N07BC05`
- **DrugBank:** [DB13515](https://go.drugbank.com/drugs/DB13515) · **PubChem:** not captured
- **molar mass:** 309.453 g/mol (C21H27NO) — DrugBank
- **groups:** investigational

## About

Levomethadone, the active isomer of methadone, is classified as a drug used in opioid dependence. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6535776](https://www.wikidata.org/wiki/Q6535776) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| l-methadone | parent | 309.453 | C21H27NO | DrugBank | — | Gittel_2021_2, Sandbaumhüter_2021_2 |
| levomethadone | parent | 309.453 | C21H27NO | DrugBank | — | Gittel_2021_2, Sandbaumhüter_2021_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:31 | 1:29 | 1/2/0 | 0/0/0 | 0/0/0 | 86,889/4,022 | ollama / glm-5.3-flash | 16 | 1/1 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Gittel_2021_2_reference](drugs/drug_levomethadone/Levomethadone_Gittel2021v2_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Gittel C et al., Pharmacokinetics and pharmacodynamics o…, Veterinary anaesthesia and… (2021) | [10.1016/j.vaa.2020.04.018](https://doi.org/10.1016/j.vaa.2020.04.018) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Casoni_2015_reference](drugs/drug_levomethadone/Levomethadone_Casoni2015_reference.md) | — | 2-compartment (no model) | 3 | Casoni D et al., Clinical and pharmacokinetic evaluation…, Acta veterinaria Scandinavi… (2015) | [10.1186/s13028-015-0112-4](https://doi.org/10.1186/s13028-015-0112-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sandbaumhüter_2021_2_reference](drugs/drug_levomethadone/Levomethadone_Sandbaumhter20212_reference.md) | — | general linear (no model) | 13 | Sandbaumhüter FA et al., Stereoselective methadone disposition a…, Electrophoresis (2021) | [10.1002/elps.202100115](https://doi.org/10.1002/elps.202100115) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gittel_2021_2.pdf` | Gittel C et al., Pharmacokinetics and pharmacodynamics o…, Veterinary anaesthesia and… (2021) | popPK | 10 | [10.1016/j.vaa.2020.04.018](https://doi.org/10.1016/j.vaa.2020.04.018) | [33423953](https://pubmed.ncbi.nlm.nih.gov/33423953) | PK parameters (t½, Vd, CL) for l-methadone are reported directly in the abstract. |

<sub>queue written 2026-10-07T03:30:22.729456+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Casoni_2015 | irrelevant | 0 | 0 | This is a population-PK study of S-ketamine/S-norketamine in horses; levomethadone (L-methadone) is only a co-administered sedative premedication, with no PK parameters for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:30 UTC</sub>
