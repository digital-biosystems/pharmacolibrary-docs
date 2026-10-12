<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;cafedrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cafedrine_Dings2026_reference&quot;,&quot;label&quot;:&quot;Dings_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cafedrine/Cafedrine_Dings2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cafedrine

- **generic name:** cafedrine
- **ATC codes:** `C01CA21`
- **DrugBank:** [DB12926](https://go.drugbank.com/drugs/DB12926) · **PubChem:** [CID 5489638](https://pubchem.ncbi.nlm.nih.gov/compound/5489638)
- **molar mass:** 357.414 g/mol (C18H23N5O3) — DrugBank
- **groups:** investigational

## About

Cafedrine is a chemical compound described as an antihypertensive drug and vasodilator, classified as a cardiac stimulant acting on the cardiovascular system. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5017121](https://www.wikidata.org/wiki/Q5017121) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:31 | 1:59 | 1/1/0 | 0/0/0 | 0/0/0 | 68,335/3,145 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Dings_2026_reference](drugs/drug_cafedrine/Cafedrine_Dings2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Dings_2024_reference](drugs/drug_cafedrine/Cafedrine_Dings2024_reference.md) | — | 1-compartment (no model) | 2 | Dings C et al., Population kinetic/pharmacodynamic mode…, British journal of clinical… (2024) | [10.1111/bcp.16083](https://doi.org/10.1111/bcp.16083) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dings_2024 | irrelevant | 2 | 2 | The study develops a kinetic/pharmacodynamic (K/PD) model for hemodynamic effects (BP, HR) rather than a pharmacokinetic model, explicitly stating that volume of distribution was fixed to 1 due to lack of PK data, and does not report standard PK parameters like clearance or volume for cafedrine. |
| popPK | Dings_2026 | irrelevant | 2 | 2 | The study explicitly states that no pharmacokinetic samples were obtained and the kinetic parameters (CL, V) are from a hypothetical K/PD model with V fixed to 1 L, not true disposition parameters. |
| popPK | Heller_2015 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (time to MAP increase, dose-response) rather than pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of contractile force and tension, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Simon_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of various antibiotics and analgesics (linezolid, meropenem, etc.) in obese patients, but does not mention or study cafedrine. |
| PD | Simon_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a PK trial and does not report any results, data, or PD parameters for cafedrine or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 04:30 UTC</sub>
